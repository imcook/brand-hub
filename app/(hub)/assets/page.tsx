import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";
import { brand } from "@/content/brand.config";

export const metadata: Metadata = { title: "Packaged Assets — Vouch Brand Hub" };

type AssetItem = {
  name: string;
  type: string;
  description: string;
  file: string;
  badge: string;
};

const ASSET_ITEMS: AssetItem[] = [
  // Logo
  ...brand.logo.variants.map((v) => ({
    name: v.name,
    type: "SVG",
    description: v.usage,
    file: v.file,
    badge: "Logo",
  })),
  // Fonts
  {
    name: "Martina Plantijn Regular",
    type: "OTF",
    description: "Primary typeface — headings and display text",
    file: "/assets/fonts/Martina Plantijn/OTF/MartinaPlantijn-Regular.otf",
    badge: "Font",
  },
  {
    name: "Martina Plantijn Bold",
    type: "OTF",
    description: "Primary typeface — bold weight",
    file: "/assets/fonts/Martina Plantijn/OTF/MartinaPlantijn-Bold.otf",
    badge: "Font",
  },
  {
    name: "Martina Plantijn Medium",
    type: "OTF",
    description: "Primary typeface — medium weight",
    file: "/assets/fonts/Martina Plantijn/OTF/MartinaPlantijn-Medium.otf",
    badge: "Font",
  },
  {
    name: "Inter Variable",
    type: "TTF",
    description: "Secondary typeface — variable font, all weights",
    file: "/assets/fonts/Inter/TTF/Inter-VariableFont_opsz,wght.ttf",
    badge: "Font",
  },
  {
    name: "Inter Variable Italic",
    type: "TTF",
    description: "Secondary typeface — variable italic",
    file: "/assets/fonts/Inter/TTF/Inter-Italic-VariableFont_opsz,wght.ttf",
    badge: "Font",
  },
];

const BADGE_COLOURS: Record<string, string> = {
  Logo: "bg-sea-blue-mid/10 text-sea-blue-mid",
  Font: "bg-green-mid/10 text-green-dark",
};

const TYPE_COLOURS: Record<string, string> = {
  SVG: "bg-purple-light/20 text-purple-dark",
  OTF: "bg-sun-light text-sun-dark",
  TTF: "bg-sun-light text-sun-dark",
};

export default function AssetsPage() {
  return (
    <div className="px-10 py-10 max-w-5xl">
      <PageHeader
        title="Packaged Assets"
        description="Download approved Vouch brand assets — logos, fonts, and production-ready files."
      />

      <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden divide-y divide-black/5">
        {ASSET_ITEMS.map((item) => (
          <div key={item.file} className="flex items-center gap-4 px-6 py-4 hover:bg-sand-light/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sea-blue-mid/5 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 14h10M9 3v8M6 8l3 3 3-3" stroke="#44607B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="font-body font-semibold text-dark-neutral text-sm truncate">{item.name}</p>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-body font-medium shrink-0 ${BADGE_COLOURS[item.badge]}`}>
                  {item.badge}
                </span>
              </div>
              <p className="text-xs text-dark-neutral/40 font-body truncate">{item.description}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className={`text-[10px] px-2 py-1 rounded font-mono font-medium ${TYPE_COLOURS[item.type] || "bg-gray-100 text-gray-500"}`}>
                {item.type}
              </span>
              <a
                href={item.file}
                download
                className="px-4 py-2 rounded-lg border border-sea-blue-mid/20 text-sea-blue-mid text-xs font-body font-medium hover:bg-sea-blue-mid hover:text-white hover:border-sea-blue-mid transition-all"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-sand-light rounded-xl border border-sea-blue-mid/10 px-6 py-5">
        <p className="text-sm font-body text-dark-neutral/70">
          <span className="font-semibold text-dark-neutral">Need something else?</span>{" "}
          Contact{" "}
          <a href="mailto:ian@vouchfor.com" className="text-sea-blue-mid hover:underline">
            Ian Cook
          </a>{" "}
          — Creative Lead — for custom file formats, higher resolution assets, or anything not listed here.
        </p>
      </div>

      <PageNavigation currentHref="/assets" />
    </div>
  );
}
