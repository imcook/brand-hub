"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";

const PHOTOS = [
  "man-beard-blue-tee-home-recording",
  "man-blue-cap-office-portrait",
  "man-blue-sweater-conversation-bright",
  "man-blue-sweater-laptop-office-chat",
  "man-green-jacket-airpods-recording",
  "man-green-jacket-landscape-wide",
  "man-grey-tee-desk-phone-smiling",
  "two-people-glasses-sofa-conversation",
  "two-people-outdoor-terrace-laptop",
  "woman-beige-turtleneck-armchair-evening",
  "woman-black-sweater-arms-folded-testimonial",
  "woman-black-sweater-fringe-phone",
  "woman-blonde-white-tee-headshot",
  "woman-green-knit-outdoor-sofa",
  "woman-green-sweater-conversation",
  "woman-green-sweater-phone-portrait",
  "woman-linen-shirt-cafe-phone",
  "woman-linen-shirt-ipad-kitchen",
  "woman-navy-top-mural-portrait",
  "woman-platinum-hair-testimonial-seated",
  "woman-rust-sweater-coffee-window",
  "woman-rust-sweater-mug-window-gazing",
  "woman-yellow-sweater-armchair-laptop",
];

function PhotoTile({ name }: { name: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl overflow-hidden bg-sea-blue-dark cursor-pointer"
      style={{ aspectRatio: "4/3" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/assets/Photos/WebP/${name}.webp`}
        alt={name.replace(/-/g, " ")}
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 bg-sea-blue-dark/70 flex items-end justify-end p-3 gap-2 transition-opacity duration-150 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href={`/assets/Photos/WebP/${name}.webp`}
          download={`${name}.webp`}
          onClick={(e) => e.stopPropagation()}
          className="px-3 py-1.5 rounded-lg bg-white/20 text-white text-xs font-body hover:bg-white/35 transition-colors"
        >
          WebP
        </a>
        <a
          href={`/assets/Photos/PNG/${name}.png`}
          download={`${name}.png`}
          onClick={(e) => e.stopPropagation()}
          className="px-3 py-1.5 rounded-lg bg-white/20 text-white text-xs font-body hover:bg-white/35 transition-colors"
        >
          PNG
        </a>
      </div>
    </div>
  );
}

export default function PhotographyPage() {
  return (
    <div className="px-10 py-10 max-w-5xl">
      <PageHeader
        title="Photography"
        description="Approved photography for use across Vouch communications."
      />

      <section className="mb-12">
        <h2 className="font-heading text-2xl text-dark-neutral mb-6">People</h2>
        <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {PHOTOS.map((name) => (
              <PhotoTile key={name} name={name} />
            ))}
          </div>
        </div>
      </section>

      <PageNavigation currentHref="/photography" />
    </div>
  );
}
