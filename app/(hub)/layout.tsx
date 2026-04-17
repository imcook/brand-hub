"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/sidebar/Sidebar";

export default function HubLayout({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-sand-light">

      {/* Fixed mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 h-14 bg-sand-light border-b border-black/5 flex items-center justify-between px-4 shrink-0">
        <Link href="/">
          <Image
            src="/assets/logo/Vouch blue.svg"
            alt="Vouch"
            width={70}
            height={24}
            className="h-6 w-auto"
            priority
          />
        </Link>
        <button
          onClick={() => setMobileNavOpen(true)}
          className="w-10 h-10 flex items-center justify-center text-sea-blue-dark"
          aria-label="Open navigation"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <Sidebar mobileOpen={mobileNavOpen} onMobileClose={() => setMobileNavOpen(false)} />

      <main className="flex-1 overflow-y-auto pt-14 md:pt-0">
        {children}
      </main>

    </div>
  );
}
