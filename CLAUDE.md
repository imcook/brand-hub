# Brand Hub — Claude Code Guide

This is a Next.js brand guidelines hub with an integrated AI assistant. It was built for Vouch but is designed to be rebranded and repurposed for any company. This document tells you everything you need to know to work on it effectively with Claude Code.

---

## What it is

A web app that serves as a company's single source of truth for brand guidelines, assets, and design decisions. It includes:

- **Hub pages** — structured sections covering logo, colours, typography, visual language, iconography, photography, brand overview, brand voice, brand application, and packaged assets
- **Flow** — an AI assistant (powered by Claude) embedded on the home page that can answer questions about the brand, review copy, and surface assets
- **Sidebar navigation** — persistent left nav with section grouping and sequential page navigation at the bottom of each hub page

---

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with custom brand colour tokens
- **Claude API** (Anthropic) — streaming, via `/app/api/agent/route.ts`
- **Lottie** (`lottie-react`) — installed for Flow animation, not yet wired to files
- No authentication — fully public

---

## Project structure

```
app/
  layout.tsx              — Root layout (no auth, no providers)
  globals.css             — Fonts, grain texture, CSS variables, scrollbar
  (hub)/
    layout.tsx            — Hub shell: sidebar + main content area
    page.tsx              — Home page (renders BrandAgent/Flow)
    logo/page.tsx
    colours/page.tsx
    typography/page.tsx
    visual-graphics/page.tsx   — "Visual Language" in the UI
    iconography/page.tsx
    photography/page.tsx
    brand-overview/page.tsx
    brand-voice/page.tsx
    brand-application/page.tsx
    assets/page.tsx            — "Packaged Assets" in the UI
  api/
    agent/route.ts        — Claude API streaming endpoint (system prompt lives here)

components/
  agent/
    BrandAgent.tsx        — The Flow chat interface (home page)
    AgentAnimation.tsx    — Three-state Lottie animation (idle/active/complete)
  sidebar/
    Sidebar.tsx           — Left nav, collapse toggle, section grouping
  ui/
    ColourSwatch.tsx      — Colour card rendered by Flow in chat
    PageHeader.tsx        — Page title + description + optional badge
    PageNavigation.tsx    — Prev/Next navigation at bottom of each page
    PlaceholderSection.tsx — "Coming soon" card for unfinished sections

content/
  brand.config.ts         — All brand data: colours, typography, logo, voice, values
  nav.ts                  — Sequential page order (drives PageNavigation)

public/assets/            — All static assets served to the browser
  fonts/
  images/
  logo/
  logo-usage/
  photos/
  section-icons/          — Small icons used in the sidebar nav
```

---

## Design system

### Colour tokens

Defined in `tailwind.config.ts` and available as Tailwind classes throughout the app.

| Token | Hex | Use |
|---|---|---|
| `sea-blue-dark` | `#001D39` | Sidebar background, dark section backgrounds |
| `sea-blue-mid` | `#44607B` | Primary brand colour — CTAs, headings, accents |
| `sea-blue-light` | `#97A6B5` | Subtle tints |
| `sand-light` | `#F9F6F1` | Main page background |
| `dark-neutral` | `#212121` | Body text |
| `sky-blue-dark` | `#5F8A96` | Flow/infinity mark colour |
| `sky-blue-mid` | `#9DC4CE` | Light accents |
| `sky-blue-light` | `#E9F2F4` | Very subtle tints |
| `sun-light/mid/dark` | — | Warning states, draft banners |
| `green-light/mid/dark` | — | Success, secondary palette |
| `purple-light/mid/dark` | — | Tertiary palette |

To update brand colours: edit `tailwind.config.ts` (the token definitions) and `app/globals.css` (the CSS variables). Both need updating together.

### Typography

Two font families, set as Tailwind utility classes:

- `font-heading` — Martina Plantijn (serif). Use for page titles, section headings, display text.
- `font-body` — Inter (sans-serif). Use for all body copy, UI labels, captions.
- `font-mono` — Geist Mono. Use for code, technical specs.

Fonts are self-hosted in `/public/assets/fonts/` and loaded via `@font-face` in `globals.css`. To swap fonts: add new WOFF2 files, update `globals.css` font-face declarations, and update the `fontFamily` in `tailwind.config.ts`.

### Spacing & layout

Pages use `px-10 py-10 max-w-5xl` as a standard wrapper. Cards use `bg-white rounded-2xl border border-black/5 p-6 shadow-sm`. Sections are separated with `mb-12`.

---

## Brand content

### `content/brand.config.ts`

The central data file. Contains structured objects for:
- `brand.name`, `brand.tagline`, `brand.description`
- `brand.colours` — full palette with hex, RGB, CMYK, Pantone
- `brand.typography` — typeface details and type scale
- `brand.logo` — variants, file paths, misuse rules
- `brand.positioning` — one-liner, value propositions
- `brand.brandPersonality` — keywords and aesthetic description
- `brand.visualIdentity` — summary and keyword list (used in the Flow system prompt)
- `brand.voice` — tone characteristics, preferred/avoid phrases
- `brand.values` — company values
- `brand.experiencePrinciples`

This is the first file to update when rebranding. Many page components import directly from here.

### `content/nav.ts`

Defines the sequential order of hub pages — used by `PageNavigation` to render prev/next links at the bottom of each page. If you add or remove pages, update this file to match.

---

## The AI assistant (Flow)

Flow is the AI chat interface on the home page. It knows the brand by way of a detailed system prompt.

**System prompt:** `app/api/agent/route.ts` — this is where all brand knowledge is injected into the Claude API call. When you update brand content, update the system prompt too so Flow's answers stay accurate.

**Chat component:** `components/agent/BrandAgent.tsx` — handles the empty state (infinity mark + copy + input + chips), the active chat state (message thread), and streaming responses. It also renders structured responses — colours, logos, fonts, and images — as visual cards rather than plain text.

**Animation:** `components/agent/AgentAnimation.tsx` — set up for three Lottie states (idle, active, complete). Currently falls back to a placeholder icon. To activate: add three Lottie JSON files to `/public/assets/` named `agent-idle.json`, `agent-active.json`, `agent-complete.json`, then uncomment the three import lines at the top of `AgentAnimation.tsx`.

**Prompt chips** — the four quick-start prompts on the home page are defined in `BrandAgent.tsx` as the `PROMPT_CHIPS` array.

---

## Adding or editing pages

Each hub page follows the same pattern:

```tsx
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";

export default function MyPage() {
  return (
    <div className="px-10 py-10 max-w-5xl">
      <PageHeader title="Page Title" description="One-line description." />

      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Section heading</h2>
        {/* content */}
      </section>

      <PageNavigation currentHref="/my-page" />
    </div>
  );
}
```

To add a new page:
1. Create `app/(hub)/my-page/page.tsx`
2. Add it to the sidebar `NAV` array in `components/sidebar/Sidebar.tsx`
3. Add it to `content/nav.ts` in the right sequential position
4. Add a section icon to `/public/assets/section-icons/` and reference it in the sidebar

To mark a section as incomplete, use `<PlaceholderSection title="..." description="..." contact="..." />`.

---

## Sidebar

`components/sidebar/Sidebar.tsx` — the left nav. Nav items are defined in the `NAV` array at the top of the file, grouped by section label. Each item has a label, href, and icon (either a custom SVG function or `sectionIcon()` which renders an image from `/public/assets/section-icons/`).

The sidebar has a collapse toggle. Active state is determined by comparing `pathname` to `item.href`.

---

## Assets

All static files live in `/public/assets/`. They're referenced with root-relative paths (e.g. `/assets/logo/Vouch blue.svg`). Never import assets from `public/` using JS imports — always use string paths.

Key folders:
- `fonts/` — WOFF2 files for Martina Plantijn and Inter
- `logo/` — SVG and PNG logo variants
- `logo-usage/` — clear space diagram and misuse examples
- `section-icons/` — small icons for the sidebar
- `images/Backgrounds/` — brand background textures (WebP + PNG)
- `images/Imagery/` — product screenshot imagery (WebP + PNG)
- `Photos/` — photography assets (WebP + PNG)

---

## Deployment

Hosted on Vercel. Every push to `main` triggers a redeploy.

Required environment variable:
- `ANTHROPIC_API_KEY` — your Anthropic API key (set in Vercel project settings)

To run locally:
```bash
npm install
# create .env.local with ANTHROPIC_API_KEY=your_key
npm run dev
```

---

## Rebranding this for a new company

To adapt this hub for a different brand, working with Claude Code:

1. **Update `content/brand.config.ts`** — swap in the new brand's name, colours, typography, logo info, voice, and values
2. **Update `tailwind.config.ts`** — replace colour token hex values (keep the token names or rename them consistently throughout)
3. **Update `app/globals.css`** — swap font files and CSS variable values
4. **Replace `/public/assets/`** — swap in the new brand's fonts, logos, images, section icons
5. **Update `app/api/agent/route.ts`** — rewrite the system prompt for the new brand
6. **Update page content** — each hub page has hardcoded copy that reflects Vouch's brand decisions; update these to reflect the new brand
7. **Update `content/nav.ts`** — add, remove, or rename sections to match the new brand's structure
8. **Update sidebar** — update the `NAV` array and section icons

Claude Code can handle all of this — just provide the brand guidelines (PDF, URL, or paste the content directly) and ask it to apply them.

---

## Conventions

- **No emojis** in UI copy or code comments
- **No authentication** — the hub is intentionally public
- Use `&apos;` not `'` in JSX text, `&ldquo;`/`&rdquo;` for curly quotes
- Always run `npx tsc --noEmit` before pushing to catch type errors
- Tailwind utility classes only — no inline styles except for specific values Tailwind can't express (e.g. `style={{ height: 48 }}`)
- Page components are server components by default; add `"use client"` only when needed (state, effects, event handlers)
