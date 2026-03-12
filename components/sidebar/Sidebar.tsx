"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


const NAV = [
  {
    label: null,
    items: [{ label: "Home", href: "/", icon: HomeIcon }],
  },
  {
    label: "ASSETS",
    items: [
      { label: "Logo", href: "/logo", icon: LogoIcon },
      { label: "Colours & Gradients", href: "/colours", icon: ColourIcon },
      { label: "Typography", href: "/typography", icon: TypographyIcon },
      { label: "Visual Graphics", href: "/visual-graphics", icon: GraphicsIcon },
      { label: "Iconography", href: "/iconography", icon: IconographyIcon },
      { label: "Photography", href: "/photography", icon: PhotographyIcon },
    ],
  },
  {
    label: "BRAND STRATEGY",
    items: [
      { label: "Brand Overview", href: "/brand-overview", icon: OverviewIcon },
      { label: "Brand Voice & Messaging", href: "/brand-voice", icon: VoiceIcon },
    ],
  },
  {
    label: "FUNCTIONAL",
    items: [
      { label: "Brand Application", href: "/brand-application", icon: ApplicationIcon },
      { label: "Packaged Assets", href: "/assets", icon: PackageIcon },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("vouchDarkMode");
    if (stored === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("vouchDarkMode", String(next));
    document.documentElement.classList.toggle("dark", next);
  };

  if (collapsed) {
    return (
      <div className="w-12 bg-sea-blue-dark flex flex-col items-center py-4 shrink-0 h-screen sticky top-0">
        <button
          onClick={() => setCollapsed(false)}
          className="text-white/60 hover:text-white transition-colors"
          title="Expand sidebar"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    );
  }

  return (
    <aside className="w-56 bg-sea-blue-dark flex flex-col shrink-0 h-screen sticky top-0 overflow-y-auto">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-white/10">
        <Link href="/" className="block">
          {/* Wordmark text fallback until SVG is in place */}
          <span className="font-heading text-white text-xl tracking-tight font-bold">vouch</span>
        </Link>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-[10px] text-white/40 font-body uppercase tracking-widest">Brand Hub</span>
          <span className="text-[10px] bg-white/10 text-white/50 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-widest">V1</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-3 space-y-4">
        {NAV.map((section, si) => (
          <div key={si}>
            {section.label && (
              <p className="px-2 mb-1 text-[10px] font-body uppercase tracking-widest text-white/30 font-medium">
                {section.label}
              </p>
            )}
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2.5 px-2 py-1.5 rounded text-sm font-body transition-all ${
                        active
                          ? "bg-white/10 text-white border-l-2 border-sea-blue-mid pl-[6px]"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <item.icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 px-2 py-3 space-y-0.5">
        <a
          href="mailto:ian@vouchfor.com?subject=Brand Hub Feedback"
          className="flex items-center gap-2.5 px-2 py-1.5 rounded text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all font-body"
        >
          <FeedbackIcon className="w-4 h-4" />
          <span>Share Feedback</span>
        </a>
        <button
          onClick={toggleDark}
          className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all font-body"
        >
          {darkMode ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
        <button
          onClick={() => setCollapsed(true)}
          className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all font-body"
        >
          <CollapseIcon className="w-4 h-4" />
          <span>Collapse</span>
        </button>
        <div className="px-2 pt-2 text-[10px] text-white/25 font-body">
          Last updated: August 2025 — V1
        </div>
      </div>
    </aside>
  );
}

// Icons
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M2 6.5L8 2l6 4.5V14H10v-3H6v3H2V6.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  );
}
function LogoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <rect x="2" y="4" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M5 8h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
function ColourIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="5.5" cy="6.5" r="1.5" fill="currentColor"/>
      <circle cx="10.5" cy="6.5" r="1.5" fill="currentColor"/>
      <circle cx="8" cy="10.5" r="1.5" fill="currentColor"/>
    </svg>
  );
}
function TypographyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M3 3h10v2H3zM8 5v8M5 13h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function GraphicsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M2 10l4-4 3 3 2-2 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconographyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5l3.5-.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  );
}
function PhotographyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M5.5 4L6.5 2h3l1 2" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  );
}
function OverviewIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M2 4h12M2 8h8M2 12h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
function VoiceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M8 1v6M5 2.5v3M11 2.5v3M3 5v2M13 5v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M2 9c2 3 10 3 12 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M8 12v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
function ApplicationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}
function PackageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M8 1L14 4v8l-6 3L2 12V4l6-3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M8 1v14M2 4l6 3 6-3" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}
function FeedbackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M2 2h12v10H9l-3 2v-2H2V2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  );
}
function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M13 9A6 6 0 017 3a6 6 0 100 10 6 6 0 006-4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  );
}
function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.2 3.2l1.4 1.4M11.4 11.4l1.4 1.4M3.2 12.8l1.4-1.4M11.4 4.6l1.4-1.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
function CollapseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M10 3H3v10h7M10 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
