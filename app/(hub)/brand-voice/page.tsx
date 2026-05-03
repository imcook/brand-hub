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

      {/* Tone of Voice */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-3">Tone of Voice</h2>
        <p className="font-body text-sm text-dark-neutral/70 leading-relaxed mb-6 max-w-2xl">
          Every piece of Vouch communication — from a product label to a sales email — should feel confident without being loud, human without being casual, and calm in a world that&apos;s turned up to eleven. If it doesn&apos;t feel like all three, it needs work.
        </p>
        <div className="space-y-4">
          {[
            {
              trait: "Confident",
              means: "We know what we're talking about. Vouch communicates from a position of expertise, not bravado. We don't need to shout to be heard.",
              inWriting: [
                "Lead with statements, not questions",
                "Avoid hedging language — 'we think', 'sort of', 'kind of'",
                "State the benefit directly — don't bury it",
                "Never over-promise or underdeliver in copy",
              ],
            },
            {
              trait: "Human",
              means: "We're speaking to real people, not at them. Vouch understands the world of talent teams — their pressures, their wins, their day-to-day frustrations — and writes like it. We're on their side.",
              inWriting: [
                "Use 'you' and 'your team' — not 'users' or 'clients'",
                "Acknowledge the real experience — the stress, the friction, the wins",
                "Avoid cold, corporate language",
                "It's okay to have a point of view",
              ],
            },
            {
              trait: "Decaffeinated",
              means: "Calm in a world that's permanently turned up to eleven. No hype, no urgency theatre, no breathless superlatives. If it sounds like a pitch deck or a press release, rewrite it.",
              inWriting: [
                "No 'revolutionary', 'game-changing', 'disrupting', 'powerful'",
                "No exclamation marks",
                "Shorter sentences — one idea at a time",
                "Let the product speak — don't over-explain",
              ],
            },
          ].map(({ trait, means, inWriting }) => (
            <div key={trait} className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 pt-6 pb-4 border-b border-black/5">
                <div className="w-8 h-8 rounded-lg bg-sea-blue-mid/10 flex items-center justify-center shrink-0">
                  <span className="font-heading text-sea-blue-mid text-sm">{trait[0]}</span>
                </div>
                <h3 className="font-heading text-xl text-sea-blue-dark">{trait}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/5">
                <div className="px-6 py-5">
                  <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-2">What it means</p>
                  <p className="font-body text-sm text-dark-neutral/70 leading-relaxed">{means}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-3">How it shows up in writing</p>
                  <ul className="space-y-2">
                    {inWriting.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="text-sea-blue-mid/40 text-xs mt-0.5 shrink-0">—</span>
                        <span className="font-body text-sm text-dark-neutral/70">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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

      {/* Example Scenarios */}
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
