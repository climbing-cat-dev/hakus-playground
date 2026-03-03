"use client";

const trailColors: Record<string, { accent: string; bg: string }> = {
  basecamp: { accent: "#4CAF50", bg: "bg-basecamp" },
  "easy-trail": { accent: "#FF9800", bg: "bg-easy" },
  "medium-trail": { accent: "#7C4DFF", bg: "bg-medium" },
  summit: { accent: "#E91E63", bg: "bg-summit" },
};

export function useTrailTheme(trailId: string) {
  return trailColors[trailId] || trailColors.basecamp;
}
