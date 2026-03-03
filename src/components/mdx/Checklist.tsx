"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ChecklistProps {
  items: string[];
}

export default function Checklist({ items }: ChecklistProps) {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(items.length).fill(false)
  );

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <div className="my-4 flex flex-col gap-2">
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => toggle(i)}
          className={cn(
            "flex items-center gap-3 rounded-lg p-3 text-left text-sm transition-colors",
            checked[i]
              ? "bg-basecamp/10 text-sand line-through"
              : "bg-stone/30 text-cream hover:bg-stone/50"
          )}
        >
          <span
            className={cn(
              "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 text-xs transition-colors",
              checked[i]
                ? "border-basecamp bg-basecamp text-white"
                : "border-trail"
            )}
          >
            {checked[i] ? "🐾" : ""}
          </span>
          {item}
        </button>
      ))}
    </div>
  );
}
