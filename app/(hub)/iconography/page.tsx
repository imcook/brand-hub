"use client";

import { useState } from "react";
import JSZip from "jszip";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";

const BRAND_MOTIFS = [
  "1. short-waves-horizontal.svg",
  "2. wave-lines-landscape.svg",
];

const ICONS = [
  "advocacy-arcs-star.svg",
  "ai-sparkle-stars.svg",
  "badge-12-point-clean.svg",
  "badge-12-point.svg",
  "badge-15-point-clean.svg",
  "badge-15-point.svg",
  "badge-9-point-clean.svg",
  "badge-9-point.svg",
  "bar-chart-increasing.svg",
  "blob-cluster.svg",
  "blob-overlap.svg",
  "circles-stacked.svg",
  "comms-blocks-scattered.svg",
  "comms-cross.svg",
  "comms-dots-arc.svg",
  "compass-star.svg",
  "concentric-ovals-horizontal.svg",
  "concentric-rings.svg",
  "diagonal-lines-uneven.svg",
  "diagonal-lines.svg",
  "diagonal-spiral-rings.svg",
  "diagonal-wave-lines.svg",
  "diamond-outline.svg",
  "dots-concentric-rings.svg",
  "dots-grid.svg",
  "equalizer-bars.svg",
  "flag-banner.svg",
  "flag-with-pole.svg",
  "journey-wave-lines.svg",
  "library-columns.svg",
  "lift-columns.svg",
  "long-wave-arrow.svg",
  "oval-dots-grid.svg",
  "s-curve.svg",
  "s-curves-stacked.svg",
  "spiral.svg",
  "star-12-point-clean.svg",
  "star-12-point.svg",
  "triple-s-curves.svg",
  "unlock-circles-grid.svg",
  "wave-arrow.svg",
  "wave-lines-portrait.svg",
];

function IconTile({ file, large = false }: { file: string; large?: boolean }) {
  const [copied, setCopied] = useState(false);
  const src = `/assets/icons/${encodeURIComponent(file)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(src);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      onClick={handleCopy}
      className={`group relative w-full ${large ? "aspect-[4/3]" : "aspect-square"} bg-sea-blue-dark rounded-xl flex items-center justify-center hover:opacity-90 transition-all cursor-pointer overflow-hidden`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={file}
        className={`object-contain ${large ? "w-24 h-24" : "w-10 h-10"}`}
      />

      <div className="absolute inset-0 flex items-end justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <a
          href={src}
          download={file}
          onClick={(e) => e.stopPropagation()}
          title="Download"
          className="w-7 h-7 rounded-lg bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.5 1v6M2.5 5l3 3 3-3M1 10h9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-sea-blue-dark/90 rounded-xl">
          <span className="text-[10px] text-white/70 font-body font-medium">Path copied</span>
        </div>
      )}
    </div>
  );
}

async function downloadAll() {
  const zip = new JSZip();
  const all = [...BRAND_MOTIFS, ...ICONS];

  await Promise.all(
    all.map(async (file) => {
      const res = await fetch(`/assets/icons/${encodeURIComponent(file)}`);
      const blob = await res.blob();
      zip.file(file, blob);
    })
  );

  const content = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(content);
  const a = document.createElement("a");
  a.href = url;
  a.download = "vouch-icons.zip";
  a.click();
  URL.revokeObjectURL(url);
}

function DownloadAllButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await downloadAll();
    setLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sea-blue-dark text-white font-body text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
    >
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M6.5 1v8M3 7l3.5 3.5L10 7M1 12h11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {loading ? "Preparing zip..." : "Download all icons"}
    </button>
  );
}

export default function IconographyPage() {
  return (
    <div className="px-10 py-10 max-w-5xl">
      <PageHeader
        title="Iconography"
        description="The Vouch icon library — purpose-built shapes that reflect our design principles: clean, purposeful, and recognisably ours."
      />

      {/* Brand Motifs */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Brand Motifs</h2>
        <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
          <div className="grid grid-cols-2 max-w-sm gap-4">
            {BRAND_MOTIFS.map((file) => (
              <IconTile key={file} file={file} large />
            ))}
          </div>
        </div>
      </section>

      {/* All Icons */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-4">Icons</h2>
        <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
            {ICONS.map((file) => (
              <IconTile key={file} file={file} />
            ))}
          </div>
        </div>
      </section>

      {/* Download All */}
      <div className="flex justify-end mb-12">
        <DownloadAllButton />
      </div>

      <PageNavigation currentHref="/iconography" />
    </div>
  );
}
