import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";
import PlaceholderSection from "@/components/ui/PlaceholderSection";
import { brand } from "@/content/brand.config";

export const metadata: Metadata = { title: "Brand Overview — Vouch Brand Hub" };

export default function BrandOverviewPage() {
  const { visualIdentity, positioning } = brand;

  return (
    <div className="px-10 py-10 max-w-5xl">
      <PageHeader
        title="Brand Overview"
        description="Who we are, what we believe, and how we show up in the world."
      />

      {/* About Vouch */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">About Vouch</h2>
        <div className="bg-white rounded-2xl border border-black/5 p-8 shadow-sm">
          <p className="font-heading text-sea-blue-dark text-2xl leading-snug mb-4 max-w-2xl">
            &ldquo;{brand.tagline}&rdquo;
          </p>
          <p className="font-body text-dark-neutral/70 text-sm leading-relaxed max-w-2xl">
            {brand.description}
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-3">Positioning</h2>

        {/* Draft banner */}
        <div className="bg-sun-light border border-sun-mid/30 rounded-xl px-5 py-4 mb-6 flex items-center gap-3">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-sun-dark">
            <path d="M8 6v4M8 12h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          <p className="text-sm font-body text-sun-dark">
            <span className="font-semibold">Draft — positioning work in progress.</span> {positioning.status}
          </p>
        </div>

        <div className="space-y-4">
          {/* Bold claim */}
          <div className="bg-sea-blue-dark rounded-2xl p-8">
            <p className="text-[10px] uppercase tracking-widest font-body text-white/40 mb-3">The bold claim</p>
            <p className="font-heading text-white text-3xl leading-snug max-w-2xl">{positioning.boldClaim}</p>
          </div>

          {/* Problem + one-liner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
              <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-2">The problem</p>
              <p className="font-body text-dark-neutral text-sm leading-relaxed">{positioning.problem}</p>
            </div>
            <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
              <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-2">What is Vouch?</p>
              <p className="font-body text-dark-neutral text-sm leading-relaxed">{positioning.oneLiner}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Vouch Loop */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-3">The Vouch Loop</h2>
        <p className="font-body text-sm text-dark-neutral/70 leading-relaxed mb-6 max-w-2xl">
          One connected loop — every product plays a role. The more your team uses Vouch, the more powerful your content library becomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
          {positioning.loop.map((item, i) => (
            <div key={item.step} className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-sea-blue-mid/10 text-sea-blue-mid text-[10px] font-body font-semibold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30">{item.product}</span>
              </div>
              <h3 className="font-heading text-xl text-sea-blue-dark mb-2">{item.step}</h3>
              <p className="font-body text-xs text-dark-neutral/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-sand-light rounded-xl border border-sea-blue-mid/10 px-5 py-4">
          <p className="font-body text-sm text-dark-neutral/70 leading-relaxed">
            <span className="font-semibold text-dark-neutral">The solution:</span> Capture → Distribute → Activate → Amplify
          </p>
        </div>
      </section>

      {/* Where Vouch sits */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-3">Where Vouch Sits</h2>
        <p className="font-body text-sm text-dark-neutral/70 leading-relaxed mb-6 max-w-2xl">
          Most tools focus on one part of the problem. Vouch focuses on making all of it work in practice.
        </p>
        <div className="bg-sea-blue-dark rounded-2xl p-8 mb-4">
          <p className="font-heading text-white text-2xl leading-snug">&ldquo;{positioning.marketPosition}&rdquo;</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {positioning.notJust.map((item) => (
            <div key={item.label} className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm flex gap-3">
              <span className="text-red-400 text-xs mt-0.5 shrink-0 font-semibold">✕</span>
              <div>
                <p className="font-body font-semibold text-dark-neutral text-sm mb-0.5">Not {item.label.toLowerCase()}</p>
                <p className="font-body text-xs text-dark-neutral/50 leading-relaxed">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Propositions */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Value Propositions</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
            <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-4">Primary</p>
            <ul className="space-y-3">
              {positioning.valuePropositions.primary.map((vp, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-sea-blue-mid/10 text-sea-blue-mid text-[10px] font-body font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="font-body text-sm text-dark-neutral leading-relaxed">{vp}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
            <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-4">Secondary</p>
            <ul className="space-y-3">
              {positioning.valuePropositions.secondary.map((vp, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-sand-light text-dark-neutral/40 text-[10px] font-body font-semibold flex items-center justify-center shrink-0 mt-0.5 border border-black/5">
                    {i + 1}
                  </span>
                  <p className="font-body text-sm text-dark-neutral/70 leading-relaxed">{vp}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Our Story</h2>
        <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm mb-4">
          <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-3">Why we repositioned</p>
          <p className="font-body text-sm text-dark-neutral/70 leading-relaxed">{positioning.whyWeRebranded}</p>
        </div>
        <PlaceholderSection
          title="Full Brand Story"
          description="The origin and journey of Vouch — why we were founded, what we&apos;ve built, and where we&apos;re headed."
          contact="ian@vouchfor.com"
        />
      </section>

      {/* Our Values */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {brand.values.map((value, i) => (
            <div key={value.name} className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-sea-blue-mid/10 flex items-center justify-center text-sea-blue-mid font-body font-semibold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-heading text-xl text-dark-neutral">{value.name}</h3>
              </div>
              <p className="font-body text-sm text-dark-neutral/70 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Principles */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Experience Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {brand.experiencePrinciples.map((p) => (
            <div key={p.name} className="bg-sand-light rounded-2xl border border-sea-blue-mid/10 p-6">
              <h3 className="font-heading text-xl text-sea-blue-dark mb-2">{p.name}</h3>
              <p className="font-body text-sm text-dark-neutral/70 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Identity */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Visual Identity</h2>
        <div className="bg-sea-blue-dark rounded-2xl p-8 mb-4">
          <p className="font-heading text-white text-xl leading-snug max-w-2xl">
            {visualIdentity.summary}
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
          <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-4">Design vocabulary</p>
          <div className="flex flex-wrap gap-2">
            {visualIdentity.keywords.map((word) => (
              <span key={word} className="px-3 py-1.5 rounded-full bg-sand-light border border-black/8 text-dark-neutral/70 font-body text-sm">
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Personality */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Brand Personality</h2>
        <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-4">
            {brand.brandPersonality.keywords.map((k) => (
              <span key={k} className="px-4 py-2 rounded-full bg-sea-blue-mid/8 text-sea-blue-mid font-body font-medium text-sm">
                {k}
              </span>
            ))}
          </div>
          <p className="font-body text-sm text-dark-neutral/70 leading-relaxed">{brand.brandPersonality.aesthetic}</p>
        </div>
      </section>

      <PageNavigation currentHref="/brand-overview" />
    </div>
  );
}
