"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSidebarNav } from "@/content/data/navigation";
import { cn } from "@/lib/utils";

const trailColorsByHref: Record<string, string> = {
  "/basecamp": "text-basecamp",
  "/easy-trail": "text-easy",
  "/medium-trail": "text-medium",
  "/summit": "text-summit",
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={cn("transition-transform duration-200", open && "rotate-90")}
    >
      <path
        d="M5 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function isActiveInTrail(
  pathname: string,
  item: { href: string; children?: { href: string }[] }
) {
  return (
    pathname === item.href ||
    pathname.startsWith(item.href + "/") ||
    (item.children?.some((child) => pathname === child.href) ?? false)
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const nav = useMemo(() => getSidebarNav(), []);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      for (const item of nav) {
        if (item.children) {
          initial[item.href] = isActiveInTrail(pathname, item);
        }
      }
      return initial;
    }
  );

  useEffect(() => {
    setOpenSections((prev) => {
      const next = { ...prev };
      for (const item of nav) {
        if (item.children && isActiveInTrail(pathname, item)) {
          next[item.href] = true;
        }
      }
      return next;
    });
  }, [pathname, nav]);

  const toggleSection = (href: string) => {
    setOpenSections((prev) => ({ ...prev, [href]: !prev[href] }));
  };

  return (
    <aside className="hidden w-[280px] shrink-0 md:block">
      <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto pb-8 pr-4">
        <nav className="flex flex-col gap-1" aria-label="Course navigation">
          {nav.map((item) => {
            const isTrail = !!item.children;
            const isActive = pathname === item.href;
            const isOpen = openSections[item.href] ?? false;

            return (
              <div key={item.href}>
                {isTrail ? (
                  <button
                    onClick={() => toggleSection(item.href)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold font-display transition-colors cursor-pointer",
                      trailColorsByHref[item.href] || "text-cream",
                      isActive && "bg-stone/50",
                      !isActive && "hover:bg-stone/30"
                    )}
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <ChevronIcon open={isOpen} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm font-semibold text-cream transition-colors",
                      isActive && "bg-stone/50",
                      !isActive && "hover:bg-stone/30"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && isOpen && (
                  <div className="ml-2 mt-1 flex flex-col gap-0.5 border-l border-trail/20 pl-3">
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-3 py-1.5 text-sm transition-colors",
                        isActive
                          ? "bg-paw/10 font-medium text-paw"
                          : "text-sand hover:bg-stone/30 hover:text-cream"
                      )}
                    >
                      Overview
                    </Link>
                    {item.children.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded-lg px-3 py-1.5 text-sm transition-colors",
                            childActive
                              ? "bg-paw/10 font-medium text-paw"
                              : "text-sand hover:bg-stone/30 hover:text-cream"
                          )}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
