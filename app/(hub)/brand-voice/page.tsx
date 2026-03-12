import PageHeader from "@/components/ui/PageHeader";
import PlaceholderSection from "@/components/ui/PlaceholderSection";
import { brand } from "@/content/brand.config";

export default function BrandVoicePage() {
  const { voice } = brand;

  return (
    <div className="px-10 py-10 max-w-5xl">
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
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Tone of Voice</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {voice.characteristics.map((trait) => (
            <div key={trait} className="bg-white rounded-xl border border-black/5 p-5 text-center shadow-sm">
              <p className="font-heading text-xl text-sea-blue-dark">{trait}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-white rounded-xl border border-black/5 p-6 shadow-sm">
          <p className="font-body text-sm text-dark-neutral/70 leading-relaxed">
            Every piece of Vouch communication — whether a product UI label, a social post, or a sales email — should feel confident without being arrogant, clear without being cold, warm without being casual, and purposeful without being pushy. If it doesn&apos;t feel like all four, revise.
          </p>
        </div>
      </section>

      {/* Messaging Pillars — placeholder */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Messaging Pillars</h2>
        <PlaceholderSection
          title="Messaging Pillars"
          description="The core themes and messages that anchor all Vouch communications — from product positioning to marketing campaigns."
          contact="ian@vouchfor.com"
          badge="Draft"
        />
      </section>

      {/* Vocabulary */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Vocabulary & Key Phrases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-500">✓</span>
              <h3 className="font-body font-semibold text-dark-neutral text-sm uppercase tracking-widest">Use these</h3>
            </div>
            <ul className="space-y-2">
              {voice.preferredPhrases.map((phrase) => (
                <li key={phrase} className="flex items-start gap-2">
                  <span className="text-green-400 text-xs mt-0.5">✓</span>
                  <span className="font-body text-sm text-dark-neutral">{phrase}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-red-400">✕</span>
              <h3 className="font-body font-semibold text-dark-neutral text-sm uppercase tracking-widest">Avoid these</h3>
            </div>
            <ul className="space-y-2">
              {voice.avoidPhrases.map((phrase) => (
                <li key={phrase} className="flex items-start gap-2">
                  <span className="text-red-400 text-xs mt-0.5">✕</span>
                  <span className="font-body text-sm text-dark-neutral/60 line-through">{phrase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Writing Guidelines — placeholder */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Writing Guidelines</h2>
        <PlaceholderSection
          title="Writing Guidelines"
          description="Grammar, punctuation, capitalisation, and formatting rules for Vouch communications — the practical rules that keep writing consistent."
          contact="ian@vouchfor.com"
          badge="Draft"
        />
      </section>

      {/* Example Scenarios — placeholder */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Example Scenarios</h2>
        <PlaceholderSection
          title="Example Scenarios"
          description="Before-and-after examples showing on-brand versus off-brand writing across common scenarios: emails, social, product copy, and presentations."
          contact="ian@vouchfor.com"
          badge="Draft"
        />
      </section>
    </div>
  );
}
