"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSidebarNav } from "@/content/data/navigation";
import { cn } from "@/lib/utils";

const trailColors: Record<string, string> = {
  Basecamp: "text-basecamp",
  "Easy Trail": "text-easy",
  "Medium Trail": "text-medium",
  Summit: "text-summit",
};

export default function Sidebar() {
  const pathname = usePathname();
  const nav = getSidebarNav();

  return (
    <aside className="hidden w-[280px] shrink-0 md:block">
      <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto pb-8 pr-4">
        <nav className="flex flex-col gap-1" aria-label="Course navigation">
          {nav.map((item) => {
            const isTrail = !!item.children;
            const isActive = pathname === item.href;

            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                    isTrail
                      ? cn("font-display", trailColors[item.label] || "text-cream")
                      : "text-cream",
                    isActive && "bg-stone/50",
                    !isActive && "hover:bg-stone/30"
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-2 flex flex-col gap-0.5 border-l border-trail/20 pl-3">
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
