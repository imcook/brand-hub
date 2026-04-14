import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Colours — Vouch Brand Hub" };
import ColourSwatch from "@/components/ui/ColourSwatch";
import PageNavigation from "@/components/ui/PageNavigation";
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
        title="Colours"
        description="The Vouch colour system is built around Sea Blue and Sand Light as the foundation — warm, calm, and professional."
      />

      {/* Main Palette */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Main Palette</h2>
        <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {colours.main.map((c) => (
              <ColourSwatch key={c.hex} {...c} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Palette */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Expanded Palette</h2>
        <div className="space-y-4">
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
        <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {colours.neutrals.map((c) => (
              <ColourSwatch key={c.hex} {...c} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Sand Scale */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Sand Scale</h2>
        <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {colours.sand.map((c) => (
              <ColourSwatch key={c.hex} {...c} size="medium" />
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-2">Accessibility</h2>
        <p className="font-body text-sm text-dark-neutral/50 mb-6 max-w-2xl leading-relaxed">
          Vouch is committed to accessible design. All primary text and UI combinations meet WCAG 2.1 AA as a minimum — we aim for AAA wherever possible. Always check contrast before using a new colour combination.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          {[
            { fg: { name: "Dark Neutral", hex: "#212121" }, bg: { name: "Sand Light", hex: "#F9F6F1" }, ratio: 14.9 },
            { fg: { name: "Sea Blue Dark", hex: "#001D39" }, bg: { name: "Sand Light", hex: "#F9F6F1" }, ratio: 15.8 },
            { fg: { name: "Sea Blue Mid", hex: "#44607B" }, bg: { name: "Sand Light", hex: "#F9F6F1" }, ratio: 6.1 },
            { fg: { name: "Dark Neutral", hex: "#212121" }, bg: { name: "White", hex: "#FFFFFF" }, ratio: 16.1 },
            { fg: { name: "Sea Blue Mid", hex: "#44607B" }, bg: { name: "White", hex: "#FFFFFF" }, ratio: 6.6 },
            { fg: { name: "White", hex: "#FFFFFF" }, bg: { name: "Sea Blue Dark", hex: "#001D39" }, ratio: 17.0 },
            { fg: { name: "Sand Light", hex: "#F9F6F1" }, bg: { name: "Sea Blue Dark", hex: "#001D39" }, ratio: 15.8 },
            { fg: { name: "White", hex: "#FFFFFF" }, bg: { name: "Sea Blue Mid", hex: "#44607B" }, ratio: 6.6 },
            { fg: { name: "Sand Light", hex: "#F9F6F1" }, bg: { name: "Sea Blue Mid", hex: "#44607B" }, ratio: 6.1 },
            { fg: { name: "Sea Blue Dark", hex: "#001D39" }, bg: { name: "Sun Mid", hex: "#F7B139" }, ratio: 9.2 },
            { fg: { name: "White", hex: "#FFFFFF" }, bg: { name: "Green Dark", hex: "#244F39" }, ratio: 9.3 },
            { fg: { name: "Sea Blue Light", hex: "#97A6B5" }, bg: { name: "Sand Light", hex: "#F9F6F1" }, ratio: 2.3 },
            { fg: { name: "Sea Blue Light", hex: "#97A6B5" }, bg: { name: "White", hex: "#FFFFFF" }, ratio: 2.5 },
          ].map(({ fg, bg, ratio }, i) => {
            const passAAA = ratio >= 7;
            const passAA = ratio >= 4.5;
            const pass = ratio >= 3;

            const level = passAAA ? "AAA" : passAA ? "AA" : pass ? "AA Large" : "Avoid";
            const levelStyle = passAAA
              ? { color: "#1a1a1a", background: "transparent", border: "1px solid #1a1a1a22" }
              : passAA
              ? { color: "#1a1a1a", background: "transparent", border: "1px solid #1a1a1a22" }
              : { color: "#b91c1c", background: "transparent", border: "1px solid #b91c1c33" };

            return (
              <div key={i} className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
                {/* Preview */}
                <div
                  className="px-5 py-6 flex flex-col gap-1"
                  style={{ background: bg.hex }}
                >
                  <p className="font-heading text-2xl leading-tight" style={{ color: fg.hex }}>Aa</p>
                  <p className="font-body text-xs leading-relaxed" style={{ color: fg.hex }}>
                    The quick brown fox
                  </p>
                </div>
                {/* Info */}
                <div className="px-4 py-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-body text-xs font-semibold text-dark-neutral leading-tight">
                      {fg.name} <span className="text-dark-neutral/30 font-normal">on</span> {bg.name}
                    </p>
                    <p className="font-mono text-[11px] text-dark-neutral/40 mt-0.5">{ratio.toFixed(1)}:1</p>
                  </div>
                  <span
                    className="text-[10px] font-body font-semibold px-2 py-1 rounded-full shrink-0"
                    style={levelStyle}
                  >
                    {level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-dark-neutral/30 font-body leading-relaxed">
          Contrast ratios per WCAG 2.1. AA requires 4.5:1 for normal text. AAA requires 7:1. Combinations marked &ldquo;Avoid&rdquo; should not be used for text — they may be used for purely decorative elements only.
        </p>
      </section>

      <PageNavigation currentHref="/colours" />
    </div>
  );
}
