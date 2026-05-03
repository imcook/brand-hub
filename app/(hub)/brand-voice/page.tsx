import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";
import { brand } from "@/content/brand.config";

export const metadata: Metadata = { title: "Brand Voice & Messaging — Vouch Brand Hub" };

export default function BrandVoicePage() {
  const { voice } = brand;

  return (
    <div className="px-4 py-6 md:px-10 md:py-10 max-w-5xl">
      <PageHeader
        title="Brand Voice & Messaging"
        description="How Vouch speaks — the tone, vocabulary, and principles that make our communication recognisably ours."
        badge="Draft"
      />

      {/* Draft banner */}
      <div className="bg-sun-light border border-sun-mid/30 rounded-xl px-5 py-4 mb-10 flex items-center gap-3">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-sun-dark">
          <path d="M8 6v4M8 12h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
        <p className="text-sm font-body text-sun-dark">
          <span className="font-semibold">Draft — pending internal review.</span> This content reflects current thinking but has not yet been formally approved. Please check with Ian Cook before using in external communications.
        </p>
      </div>

      {/* Voice vs Tone intro */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Voice and Tone</h2>
        <div className="bg-white rounded-2xl border border-black/5 p-8 shadow-sm">
          <p className="font-body text-sm text-dark-neutral/70 leading-relaxed mb-4 max-w-2xl">
            Think of it this way: you have the same voice all the time, but your tone changes. You speak one way catching up with a colleague, and a different way presenting to a new client. Same person — different register.
          </p>
          <p className="font-body text-sm text-dark-neutral/70 leading-relaxed max-w-2xl">
            The same is true for Vouch. Our voice is consistent — it&apos;s who we are. Our tone shifts depending on who we&apos;re writing for and what they&apos;re going through.
          </p>
        </div>
      </section>

      {/* Voice */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Voice</h2>
        <div className="bg-white rounded-2xl border border-black/5 p-8 shadow-sm mb-4">
          <p className="font-body text-sm text-dark-neutral/70 leading-relaxed mb-4 max-w-2xl">
            We&apos;ve spent time with talent teams. We know what their days actually look like — the pressure, the manual work, the one-more-urgent-request. We&apos;re not here to sound impressive. We&apos;re here to be useful.
          </p>
          <p className="font-body text-sm text-dark-neutral/70 leading-relaxed mb-4 max-w-2xl">
            Vouch is an Australian company, and that shapes how we write. We don&apos;t overclaim. We don&apos;t shout. There&apos;s a directness and lack of pretension that runs through everything we make — we&apos;d rather understate something great than oversell something ordinary. Confident without the bravado, warm without being gushing, and calm in an industry that&apos;s permanently at full volume.
          </p>
          <p className="font-body text-sm text-dark-neutral/70 leading-relaxed max-w-2xl">
            When we write copy:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              label: "We're plainspoken",
              body: "Cut the buzzwords, the superlatives, the jargon. If it sounds like a press release or a pitch deck, rewrite it. Clarity is a form of respect.",
            },
            {
              label: "We're direct",
              body: "Lead with the thing that matters. Say it once, clearly. Don't hide the point inside qualifications or build-up.",
            },
            {
              label: "We're human",
              body: "Write for the person, not the persona. Acknowledge what they're actually going through — the stress, the wins, the friction.",
            },
            {
              label: "We're understated",
              body: "\"See how it works\" beats \"transform your entire workflow.\" Every time. The product earns the proof — we don't need to.",
            },
          ].map(({ label, body }) => (
            <div key={label} className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
              <h3 className="font-heading text-lg text-sea-blue-dark mb-2">{label}</h3>
              <p className="font-body text-sm text-dark-neutral/70 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tone */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Tone</h2>
        <div className="bg-white rounded-2xl border border-black/5 p-8 shadow-sm mb-4">
          <p className="font-body text-sm text-dark-neutral/70 leading-relaxed mb-4 max-w-2xl">
            Vouch&apos;s tone is usually relaxed, but clarity always comes first. Before you write, consider who&apos;s reading and where they&apos;re at. A team celebrating their first campaign going live is in a different headspace than someone troubleshooting a broken integration. Both should sound like Vouch — but they should feel different.
          </p>
          <p className="font-body text-sm text-dark-neutral/70 leading-relaxed max-w-2xl">
            Vouch has personality, so feel free to let it show when it&apos;s appropriate and comes naturally. But don&apos;t force it — a straight face is better than a strained joke.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              context: "Good news or celebration",
              tone: "Warmer, a little more relaxed. It's okay to enjoy the moment with them.",
            },
            {
              context: "Explaining something complex",
              tone: "Patient, clear, precise. Take them through it properly. No shortcuts.",
            },
            {
              context: "Something's gone wrong",
              tone: "Calm and direct. No panic, no over-apologising. Fix the problem first, explain second.",
            },
            {
              context: "Routine product UI",
              tone: "Neutral, efficient, near-invisible. Don't add friction with unnecessary language.",
            },
          ].map(({ context, tone }) => (
            <div key={context} className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
              <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-2">When</p>
              <p className="font-body font-semibold text-dark-neutral text-sm mb-3">{context}</p>
              <p className="font-body text-sm text-dark-neutral/70 leading-relaxed">{tone}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Writing Guidelines */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Writing Guidelines</h2>
        <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden divide-y divide-black/5">
          {[
            {
              rule: "Australian English",
              guidance: "We're an Australian company — use Australian spelling. Realise, colour, organisation, centre, behaviour. When in doubt, follow the Macquarie Dictionary.",
            },
            {
              rule: "Active voice",
              guidance: "The subject does the action. \"Vouch sends the brief\" — not \"The brief is sent by Vouch.\" Passive voice adds words without adding meaning.",
            },
            {
              rule: "Contractions",
              guidance: "Use them. They're warmer and more direct. \"You're\" not \"you are\". \"It's\" not \"it is\". We're talking to people, not writing a legal document.",
            },
            {
              rule: "Exclamation marks",
              guidance: "Sparingly — if you'd genuinely say it that way out loud, fine. But never in error messages or failure states. When in doubt, don't.",
            },
            {
              rule: "Numbers",
              guidance: "Spell out one through nine. Use numerals for 10 and above. If a number starts a sentence, always spell it out.",
            },
            {
              rule: "Oxford comma",
              guidance: "Always. \"Collaboration, content, and automation\" — not \"collaboration, content and automation.\" It prevents ambiguity.",
            },
            {
              rule: "Em dash",
              guidance: "Use an em dash — like this — in place of semicolons for related asides. No spaces on either side. Never use double hyphens (--) as a substitute.",
            },
            {
              rule: "Positive framing",
              guidance: "Frame things as what to do, not what not to do. \"To add a user, go to Settings\" — not \"You can't add a user unless you go to Settings.\"",
            },
          ].map(({ rule, guidance }) => (
            <div key={rule} className="px-6 py-5 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-1 md:gap-8 items-baseline">
              <p className="font-body font-semibold text-dark-neutral text-sm">{rule}</p>
              <p className="font-body text-sm text-dark-neutral/70 leading-relaxed">{guidance}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vocabulary */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Vocabulary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
            <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-4">Use these</p>
            <ul className="space-y-2">
              {voice.preferredPhrases.map((phrase) => (
                <li key={phrase} className="flex items-start gap-2">
                  <span className="text-sea-blue-mid/40 text-xs mt-0.5 shrink-0">—</span>
                  <span className="font-body text-sm text-dark-neutral">{phrase}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
            <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-4">Avoid these</p>
            <ul className="space-y-2">
              {voice.avoidPhrases.map((phrase) => (
                <li key={phrase} className="flex items-start gap-2">
                  <span className="text-dark-neutral/20 text-xs mt-0.5 shrink-0">—</span>
                  <span className="font-body text-sm text-dark-neutral/40 line-through">{phrase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* In Practice */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-3">In Practice</h2>
        <p className="font-body text-sm text-dark-neutral/70 leading-relaxed mb-6 max-w-2xl">
          The same idea, written two ways. The off-brand version isn&apos;t always obviously wrong — that&apos;s the point.
        </p>
        <div className="space-y-4">
          {[
            {
              scenario: "Describing what Vouch does",
              offBrand: "Vouch is a revolutionary, game-changing platform that disrupts the talent acquisition industry with cutting-edge AI capabilities and a next-generation suite of tools.",
              onBrand: "Vouch is an AI-enabled workspace for talent teams. It reduces time to hire by bringing collaboration, content, and automation into one place.",
              note: "Drop the buzzwords. Lead with what it actually does.",
            },
            {
              scenario: "A call to action",
              offBrand: "Sign up now and supercharge your talent team's workflow with our powerful, industry-leading solution!",
              onBrand: "See how it works. Book a demo.",
              note: "Short and confident beats loud and breathless.",
            },
            {
              scenario: "Describing a feature",
              offBrand: "Our fancy AI-powered feature automates your entire content creation process, saving you hassle and dramatically boosting productivity across your team.",
              onBrand: "Create a brief. Vouch builds the assets. Your team reviews and sends.",
              note: "Show the workflow, not the hype. Let the product speak.",
            },
            {
              scenario: "Talking about customers",
              offBrand: "Thousands of users leverage our platform to optimise their talent acquisition workflows and maximise ROI.",
              onBrand: "Thousands of talent teams use Vouch to fill roles faster — without the chaos.",
              note: "Write like you're on their side, not reporting metrics at them.",
            },
          ].map(({ scenario, offBrand, onBrand, note }) => (
            <div key={scenario} className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-black/5">
                <p className="font-body font-semibold text-dark-neutral text-sm">{scenario}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/5">
                <div className="px-6 py-5">
                  <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-3">Off-brand</p>
                  <p className="font-body text-sm text-dark-neutral/50 leading-relaxed italic">&ldquo;{offBrand}&rdquo;</p>
                </div>
                <div className="px-6 py-5 bg-sea-blue-dark/[0.02]">
                  <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-3">On-brand</p>
                  <p className="font-body text-sm text-dark-neutral leading-relaxed">&ldquo;{onBrand}&rdquo;</p>
                </div>
              </div>
              <div className="px-6 py-3 border-t border-black/5 bg-sand-light/50">
                <p className="font-body text-xs text-dark-neutral/40 leading-relaxed">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageNavigation currentHref="/brand-voice" />
    </div>
  );
}
