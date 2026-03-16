import PageHeader from "@/components/ui/PageHeader";
import PlaceholderSection from "@/components/ui/PlaceholderSection";
import { brand } from "@/content/brand.config";

export default function BrandOverviewPage() {
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
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Positioning</h2>
        <div className="space-y-4">
          <div className="bg-sea-blue-dark rounded-2xl p-8">
            <p className="text-[10px] uppercase tracking-widest font-body text-white/40 mb-2">What is Vouch?</p>
            <p className="font-heading text-white text-3xl leading-snug">{brand.positioning.oneLiner}</p>
          </div>
          <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
            <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-2">What does Vouch do?</p>
            <p className="font-body text-dark-neutral text-base leading-relaxed">{brand.positioning.whatWeDo}</p>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Value Propositions</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
            <p className="text-[10px] uppercase tracking-widest font-body text-dark-neutral/30 mb-4">Primary</p>
            <ul className="space-y-3">
              {brand.positioning.valuePropositions.primary.map((vp, i) => (
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
              {brand.positioning.valuePropositions.secondary.map((vp, i) => (
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
          <p className="font-body text-sm text-dark-neutral/70 leading-relaxed">{brand.positioning.whyWeRebranded}</p>
        </div>
        <PlaceholderSection
          title="Full Brand Story"
          description="The origin and journey of Vouch — why we were founded, what we've built, and where we're headed."
          contact="ian@vouchfor.com"
        />
      </section>

      {/* Mission & Vision — placeholder */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Mission & Vision</h2>
        <PlaceholderSection
          title="Mission & Vision"
          description="Our north star — the mission that guides our decisions and the vision we're working toward."
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
              <p className="font-body text-sm text-dark-neutral/60 leading-relaxed">{value.description}</p>
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
              <p className="font-body text-sm text-dark-neutral/60 leading-relaxed">{p.description}</p>
            </div>
          ))}
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
          <p className="font-body text-sm text-dark-neutral/60 leading-relaxed">{brand.brandPersonality.aesthetic}</p>
        </div>
      </section>
    </div>
  );
}
