"use client";

import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  trailColor?: string;
  className?: string;
}

export default function ProgressBar({
  value,
  max = 100,
  trailColor = "bg-paw",
  className,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div
      className={cn("h-2 w-full overflow-hidden rounded-full bg-stone", className)}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <div
        className={cn("h-full rounded-full transition-all duration-500", trailColor)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
