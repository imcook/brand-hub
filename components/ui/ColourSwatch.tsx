"use client";

import { useState } from "react";

type SwatchProps = {
  name: string;
  hex: string;
  rgb?: string;
  cmyk?: string;
  pantone?: string;
  role?: string;
  size?: "large" | "medium" | "small";
};

export default function ColourSwatch({
  name,
  hex,
  rgb,
  cmyk,
  pantone,
  role,
  size = "medium",
}: SwatchProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (size === "large") {
    return (
      <div className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm">
        <div
          className="h-32 w-full"
          style={{ backgroundColor: hex }}
        />
        <div className="p-4">
          <div className="font-body font-semibold text-dark-neutral text-sm mb-1">{name}</div>
          {role && <div className="text-xs text-dark-neutral/50 font-body mb-3 leading-relaxed">{role}</div>}
          <div className="space-y-1">
            <button
              onClick={copy}
              className="flex items-center justify-between w-full group"
            >
              <span className="text-xs font-mono text-dark-neutral/70">{hex}</span>
              <span className={`text-[10px] font-body px-2 py-0.5 rounded transition-all ${copied ? "bg-green-100 text-green-700" : "bg-sea-blue-mid/8 text-sea-blue-mid opacity-0 group-hover:opacity-100"}`}>
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>
            {rgb && <div className="text-xs text-dark-neutral/40 font-body">RGB {rgb}</div>}
            {cmyk && <div className="text-xs text-dark-neutral/40 font-body">CMYK {cmyk}</div>}
            {pantone && <div className="text-xs text-dark-neutral/40 font-body">Pantone {pantone}</div>}
          </div>
        </div>
      </div>
    );
  }

  if (size === "small") {
    return (
      <button
        onClick={copy}
        className="group flex flex-col items-center gap-1.5"
        title={`${name} — ${hex}`}
      >
        <div
          className="w-10 h-10 rounded-xl border border-black/8 shadow-sm group-hover:scale-110 transition-transform"
          style={{ backgroundColor: hex }}
        />
        <span className="text-[10px] font-body text-dark-neutral/50 group-hover:text-dark-neutral transition-colors">{name.split(" ").pop()}</span>
        <span className={`text-[9px] font-mono transition-all ${copied ? "text-green-600" : "text-dark-neutral/30"}`}>
          {copied ? "Copied!" : hex}
        </span>
      </button>
    );
  }

  // medium
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm">
      <div
        className="h-20 w-full"
        style={{ backgroundColor: hex }}
      />
      <div className="p-3 space-y-0.5">
        <div className="font-body font-medium text-dark-neutral text-xs mb-1.5">{name}</div>
        <button
          onClick={copy}
          className="flex items-center justify-between w-full group"
        >
          <span className="text-[11px] font-mono text-dark-neutral/70">{hex}</span>
          <span className={`text-[10px] font-body px-1.5 py-0.5 rounded transition-all ${copied ? "bg-green-100 text-green-700" : "text-sea-blue-mid opacity-0 group-hover:opacity-100"}`}>
            {copied ? "✓" : "Copy"}
          </span>
        </button>
        {rgb && <div className="text-[10px] text-dark-neutral/40 font-body">RGB ({rgb})</div>}
        {cmyk && <div className="text-[10px] text-dark-neutral/40 font-body">CMYK {cmyk}</div>}
        {pantone && <div className="text-[10px] text-dark-neutral/30 font-body">PMS {pantone}</div>}
      </div>
    </div>
  );
}
