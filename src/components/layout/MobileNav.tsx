"use client";

import Link from "next/link";
import { useEffect } from "react";
import { getSidebarNav } from "@/content/data/navigation";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const nav = getSidebarNav();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-earth/80" onClick={onClose} aria-hidden="true" />
      <div className="fixed inset-y-0 left-0 w-72 overflow-y-auto bg-bark p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-display text-lg text-cream">Navigation</span>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-sand hover:bg-stone/50 hover:text-cream"
            aria-label="Close navigation menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 5 5 15M5 5l10 10" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
          {nav.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block rounded-lg px-3 py-2 font-display text-sm font-semibold text-cream hover:bg-stone/50"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4 flex flex-col gap-0.5">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block rounded-lg px-3 py-1.5 text-sm text-sand hover:bg-stone/50 hover:text-cream"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
