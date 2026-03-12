import PageHeader from "@/components/ui/PageHeader";
import ColourSwatch from "@/components/ui/ColourSwatch";
import PlaceholderSection from "@/components/ui/PlaceholderSection";
import { brand } from "@/content/brand.config";

export default function ColoursPage() {
  const { colours } = brand;
  const expandedFamilies = [
    { label: "Sea Blue", swatches: colours.expanded.seaBlue },
    { label: "Green", swatches: colours.expanded.green },
    { label: "Sun", swatches: colours.expanded.sun },
    { label: "Sky Blue", swatches: colours.expanded.skyBlue },
    { label: "Purple", swatches: colours.expanded.purple },
  ];

  return (
    <div className="px-10 py-10 max-w-5xl">
      <PageHeader
        title="Colours & Gradients"
        description="The Vouch colour system is built around Sea Blue and Sand Light as the foundation — warm, calm, and professional."
      />

      {/* Main Palette */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Main Palette</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {colours.main.map((c) => (
            <ColourSwatch key={c.hex} {...c} size="large" />
          ))}
        </div>
      </section>

      {/* Expanded Palette */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Expanded Palette</h2>
        <div className="space-y-6">
          {expandedFamilies.map((family) => (
            <div key={family.label} className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
              <h3 className="font-body font-semibold text-dark-neutral text-sm mb-4 uppercase tracking-widest text-dark-neutral/40">
                {family.label}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {family.swatches.map((s) => (
                  <ColourSwatch key={s.hex} {...s} size="medium" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Neutrals */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Neutrals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {colours.neutrals.map((c) => (
            <ColourSwatch key={c.hex} {...c} size="large" />
          ))}
        </div>
      </section>

      {/* Colour Combinations — placeholder */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Colour Combinations</h2>
        <PlaceholderSection
          title="Colour Combinations"
          description="Approved colour pairing combinations for backgrounds, text, and interactive elements — ensuring accessible contrast and on-brand usage."
          contact="ian@vouchfor.com"
        />
      </section>

      {/* Misuse — placeholder */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Colour Misuse</h2>
        <PlaceholderSection
          title="Colour Misuse"
          description="Examples of off-brand colour usage to avoid — unapproved combinations, low contrast, and off-palette choices."
          contact="ian@vouchfor.com"
        />
      </section>
    </div>
  );
}
