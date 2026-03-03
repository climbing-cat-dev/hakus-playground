"use client";

import Link from "next/link";
import { useState } from "react";
import { headerNav } from "@/content/data/navigation";
import MobileNav from "./MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-trail/20 bg-bark/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-xl text-cream">
          <span className="text-2xl">🐱</span>
          <span>
            Haku&apos;s <span className="text-paw">Playground</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-sand transition-colors hover:bg-stone/50 hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="rounded-lg p-2 text-sand hover:bg-stone/50 hover:text-cream md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
