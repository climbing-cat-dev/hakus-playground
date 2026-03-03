"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ExpandableSection({
  title,
  children,
}: ExpandableSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4 rounded-xl border border-trail/20 bg-stone/20">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-4 text-left font-display font-semibold text-cream hover:text-paw transition-colors"
        aria-expanded={open}
      >
        {title}
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={cn("transition-transform", open && "rotate-180")}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && <div className="px-4 pb-4 text-sm text-sand">{children}</div>}
    </div>
  );
}
