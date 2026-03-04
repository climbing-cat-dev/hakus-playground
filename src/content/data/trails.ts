export interface Trail {
  id: string;
  title: string;
  description: string;
  color: string;
  colorHex: string;
  terrain: string;
  difficulty: string;
  lessonCount: number;
  image: string;
  imagePosition: string;
  order: number;
  takeaways: string[];
}

export const trails: Trail[] = [
  {
    id: "basecamp",
    title: "Rangitoto",
    description:
      "Understanding AI — build your foundation. Learn what AI is, how to talk to it effectively, and use it responsibly.",
    color: "basecamp",
    colorHex: "#4CAF50",
    terrain: "Volcanic Island",
    difficulty: "Easy",
    lessonCount: 5,
    image: "/images/trails/basecamp.webp",
    imagePosition: "center 75%",
    order: 0,
    takeaways: [
      "Understand what LLMs are, how tokens and context windows work, and where AI falls short",
      "Know the differences between Claude, ChatGPT, and Gemini — and when to use each",
      "Write structured prompts using the 8-part framework that consistently get better results",
      "Complete a real task (writing a PRD) using iterative prompting and context files",
      "Recognize hallucinations, bias, and the limits of AI so you use it responsibly",
    ],
  },
  {
    id: "easy-trail",
    title: "Tongariro",
    description:
      "Claude Desktop Power User — connect AI to your world. Set up Claude Desktop, Projects, Connectors, and MCP servers.",
    color: "easy",
    colorHex: "#FF9800",
    terrain: "Alpine Crossing",
    difficulty: "Moderate",
    lessonCount: 5,
    image: "/images/trails/easy-trail.webp",
    imagePosition: "center 86%",
    order: 1,
    takeaways: [
      "A fully set up Claude Desktop with your Anthropic account and plan configured",
      "Projects organized with uploaded documents and custom instructions for 200K-token context",
      "Claude connected to your existing tools — Notion, Slack, Google Drive, and more — via Connectors",
      "A local MCP server running so Claude can access your filesystem or Obsidian vault",
      "A personal daily workflow that integrates Claude into how you actually work",
    ],
  },
  {
    id: "medium-trail",
    title: "Ruapehu",
    description:
      "Building with Claude Code — create real things. Use Claude Code in your IDE, learn Git, and build & deploy your first app.",
    color: "medium",
    colorHex: "#7C4DFF",
    terrain: "Crater Lake",
    difficulty: "Hard",
    lessonCount: 6,
    image: "/images/trails/medium-trail.webp",
    imagePosition: "center 45%",
    order: 2,
    takeaways: [
      "Claude Code installed and integrated with VS Code or Cursor for agentic coding",
      "Git and GitHub set up — you can commit, push, and manage version control confidently",
      "Skills, CLAUDE.md, and hooks configured to customize how Claude Code works in your project",
      "A real Next.js app built from scratch, component by component, using the scaffolding approach",
      "Your app connected to a Supabase database and deployed live on Vercel",
      "API keys, .env files, and security best practices locked down before shipping",
    ],
  },
  {
    id: "summit",
    title: "Aoraki",
    description:
      "Agentic Systems — reach the peak. Build multi-agent systems with RAG, orchestration, and shared memory.",
    color: "summit",
    colorHex: "#E91E63",
    terrain: "High Peak",
    difficulty: "Strenuous",
    lessonCount: 4,
    image: "/images/trails/summit.webp",
    imagePosition: "top",
    order: 3,
    takeaways: [
      "Understand multi-agent architectures and when to use single vs. multi-agent approaches",
      "Know the full RAG pipeline — chunking, embeddings, vector search, and retrieval strategies",
      "Build a working RAG system with document ingestion, embedding storage, and query pipelines",
      "Design and deploy a multi-agent system with shared memory and monitoring",
    ],
  },
];

export const difficultySymbols: Record<string, string> = {
  "Easy": "●",
  "Moderate": "●●",
  "Hard": "●●●",
  "Strenuous": "●●●●",
};

export function getTrail(id: string): Trail | undefined {
  return trails.find((t) => t.id === id);
}
