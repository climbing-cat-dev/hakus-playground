import { cn } from "@/lib/utils";

import type { TrailId } from "@/content/data/lessons";

interface BadgeProps {
  trail: TrailId;
  children: React.ReactNode;
  className?: string;
}

const trailColors: Record<string, string> = {
  basecamp: "bg-basecamp/20 text-basecamp border-basecamp/30",
  "easy-trail": "bg-easy/20 text-easy border-easy/30",
  "medium-trail": "bg-medium/20 text-medium border-medium/30",
  summit: "bg-summit/20 text-summit border-summit/30",
};

export default function Badge({ trail, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold font-display",
        trailColors[trail],
        className
      )}
    >
      {children}
    </span>
  );
}
