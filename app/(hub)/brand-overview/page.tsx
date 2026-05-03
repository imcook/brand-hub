import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";
import { brand } from "@/content/brand.config";

export const metadata: Metadata = { title: "Brand Overview — Vouch Brand Hub" };

export default function BrandOverviewPage() {
  const { visualIdentity } = brand;

  return (
    <div className="px-4 py-6 md:px-10 md:py-10 max-w-5xl">
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
