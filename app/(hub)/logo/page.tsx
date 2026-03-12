import PageHeader from "@/components/ui/PageHeader";
import { brand } from "@/content/brand.config";

export default function LogoPage() {
  return (
    <div className="px-10 py-10 max-w-5xl">
      <PageHeader
        title="Logo"
        description="The Vouch wordmark is our primary brand identifier. Use only the supplied files — never recreate or typeset it."
      />

      {/* Our Logo */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Our Logo</h2>
        <p className="font-body text-sm text-dark-neutral/70 max-w-2xl leading-relaxed">
          {brand.logo.description} The logo appears as a wordmark only — there is no standalone icon. The clear space rule is simple: maintain a minimum margin equal to the logo height on all four sides.
        </p>
      </section>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {brand.logo.variants.map((variant) => {
            const bgClass =
              variant.name === "Blue on Cream"
                ? "bg-sand-light"
                : variant.name === "White on Dark"
                ? "bg-sea-blue-dark"
                : "bg-white";

            return (
              <div key={variant.name} className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm">
                <div className={`${bgClass} h-36 flex items-center justify-center border-b border-black/5`}>
                  {/* Logo placeholder until SVGs are in place */}
                  <span
                    className={`font-heading text-3xl font-bold tracking-tight ${
                      variant.name === "White on Dark" ? "text-white" : "text-sea-blue-dark"
                    }`}
                  >
                    vouch
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-body font-semibold text-dark-neutral text-sm mb-1">{variant.name}</p>
                  <p className="text-xs text-dark-neutral/50 font-body mb-4 leading-relaxed">{variant.usage}</p>
                  <div className="flex gap-2">
                    <a
                      href={variant.file}
                      download
                      className="flex-1 text-center text-xs font-body font-medium border border-sea-blue-mid/30 text-sea-blue-mid hover:bg-sea-blue-mid hover:text-white transition-all rounded-lg px-3 py-2"
                    >
                      SVG
                    </a>
                    <a
                      href={variant.file.replace(".svg", ".png")}
                      download
                      className="flex-1 text-center text-xs font-body font-medium border border-sea-blue-mid/30 text-sea-blue-mid hover:bg-sea-blue-mid hover:text-white transition-all rounded-lg px-3 py-2"
                    >
                      PNG
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Clear Space */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Clear Space</h2>
        <div className="bg-white rounded-2xl border border-black/5 p-8 shadow-sm">
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Outer box showing clear space */}
              <div className="border-2 border-dashed border-sea-blue-mid/20 p-10 rounded">
                <div className="px-8 py-4 border border-sea-blue-mid/10 rounded">
                  <span className="font-heading text-4xl font-bold text-sea-blue-dark">vouch</span>
                </div>
              </div>
              {/* Labels */}
              <p className="text-center text-xs text-dark-neutral/40 font-body mt-3">
                Dashed area = minimum clear space (= logo height on all sides)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misuse */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">Logo Misuse</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {brand.logo.misuse.map((rule, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-black/5 p-4 flex items-start gap-3 shadow-sm"
            >
              <span className="text-red-400 text-lg shrink-0 mt-0.5">✕</span>
              <p className="text-sm font-body text-dark-neutral/70 leading-relaxed">{rule}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download All */}
      <section className="mb-12">
        <div className="bg-sea-blue-dark rounded-2xl p-8 flex items-center justify-between">
          <div>
            <h3 className="font-heading text-2xl text-white mb-1">Download All Logo Files</h3>
            <p className="text-sm text-white/50 font-body">SVG and PNG variants — all three colourways</p>
          </div>
          <a
            href="/assets/logo/vouch-logo-pack.zip"
            download
            className="px-6 py-3 rounded-xl border border-white/20 text-white text-sm font-body font-medium hover:bg-white/10 transition-all"
          >
            Download ZIP
          </a>
        </div>
      </section>
    </div>
  );
}
