export interface Trail {
  id: string;
  title: string;
  description: string;
  color: string;
  colorHex: string;
  terrain: string;
  lessonCount: number;
  image: string;
  order: number;
}

export const trails: Trail[] = [
  {
    id: "basecamp",
    title: "Basecamp",
    description:
      "Understanding AI — build your foundation. Learn what AI is, how to talk to it effectively, and use it responsibly.",
    color: "basecamp",
    colorHex: "#4CAF50",
    terrain: "Meadow",
    lessonCount: 5,
    image: "/images/trails/basecamp.webp",
    order: 0,
  },
  {
    id: "easy-trail",
    title: "Easy Trail",
    description:
      "Claude Desktop Power User — connect AI to your world. Set up Claude Desktop, Projects, Connectors, and MCP servers.",
    color: "easy",
    colorHex: "#FF9800",
    terrain: "Forest",
    lessonCount: 5,
    image: "/images/trails/easy-trail.webp",
    order: 1,
  },
  {
    id: "medium-trail",
    title: "Medium Trail",
    description:
      "Building with Claude Code — create real things. Use Claude Code in your IDE, learn Git, and build & deploy your first app.",
    color: "medium",
    colorHex: "#7C4DFF",
    terrain: "Mountain",
    lessonCount: 6,
    image: "/images/trails/medium-trail.webp",
    order: 2,
  },
  {
    id: "summit",
    title: "Summit",
    description:
      "Agentic Systems — reach the peak. Build multi-agent systems with RAG, orchestration, and shared memory.",
    color: "summit",
    colorHex: "#E91E63",
    terrain: "Peak",
    lessonCount: 4,
    image: "/images/trails/summit.webp",
    order: 3,
  },
];

export function getTrail(id: string): Trail | undefined {
  return trails.find((t) => t.id === id);
}
