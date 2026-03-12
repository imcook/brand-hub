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

      {/* Our Story — placeholder */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Our Story</h2>
        <PlaceholderSection
          title="Our Story"
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

      {/* Positioning Statement — placeholder */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Positioning Statement</h2>
        <PlaceholderSection
          title="Positioning Statement"
          description="A concise articulation of how Vouch is positioned in the market — who we serve, what we offer, and why it matters."
          contact="ian@vouchfor.com"
        />
      </section>
    </div>
  );
}
