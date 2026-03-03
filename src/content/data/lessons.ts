export type TrailId = "basecamp" | "easy-trail" | "medium-trail" | "summit";

export interface Lesson {
  slug: string;
  title: string;
  description: string;
  trailId: TrailId;
  order: number;
  duration: string;
  objectives: string[];
}

export const lessons: Lesson[] = [
  // ── Basecamp ──────────────────────────────────────────
  {
    slug: "what-is-ai",
    title: "What Is AI, Really?",
    description:
      "LLMs, tokens, context, hallucination — what AI can and can't do.",
    trailId: "basecamp",
    order: 1,
    duration: "12 min",
    objectives: [
      "Explain what a large language model (LLM) is in plain language",
      "Understand tokens, context windows, and temperature",
      "Recognize what AI can and cannot do",
      "Define key vocabulary: LLM, prompt, context, hallucination",
    ],
  },
  {
    slug: "meet-your-ai-tools",
    title: "Meet Your AI Tools",
    description:
      "Claude, Gemini, ChatGPT — the landscape and honest recommendations.",
    trailId: "basecamp",
    order: 2,
    duration: "10 min",
    objectives: [
      "Compare the three major AI assistants",
      "Understand why Claude is recommended first",
      "Know when to use which tool",
      "Set up your first AI account",
    ],
  },
  {
    slug: "talking-to-ai",
    title: "Talking to AI",
    description:
      "The 8-part prompt framework for structured, effective communication.",
    trailId: "basecamp",
    order: 3,
    duration: "15 min",
    objectives: [
      "Learn the 8-part prompt framework",
      "Write structured prompts that get better results",
      "Understand context, rules, and alignment",
      "Practice iterative refinement",
    ],
  },
  {
    slug: "your-first-real-prompt",
    title: "Your First Real Prompt",
    description:
      "Hands-on: write a PRD, create context files, iterate and refine.",
    trailId: "basecamp",
    order: 4,
    duration: "20 min",
    objectives: [
      "Write a complete Product Requirements Document with AI",
      "Use the 'prompt AI to help you prompt' technique",
      "Create reusable context files",
      "Practice iterative refinement on a real task",
    ],
  },
  {
    slug: "ai-safety-ethics",
    title: "AI Safety & Ethics",
    description:
      "Hallucinations, bias, responsible use — when NOT to trust AI.",
    trailId: "basecamp",
    order: 5,
    duration: "12 min",
    objectives: [
      "Identify common AI hallucination patterns",
      "Understand bias in AI outputs",
      "Know when NOT to rely on AI",
      "Practice responsible AI use",
    ],
  },

  // ── Easy Trail ────────────────────────────────────────
  {
    slug: "setting-up-claude-desktop",
    title: "Setting Up Claude Desktop",
    description:
      "Install Claude Desktop, create your account, and have your first conversation.",
    trailId: "easy-trail",
    order: 1,
    duration: "10 min",
    objectives: [
      "Download and install Claude Desktop",
      "Create your Anthropic account",
      "Have your first conversation with Claude",
      "Understand Pro and Max plan features",
    ],
  },
  {
    slug: "projects-and-knowledge",
    title: "Projects & Knowledge",
    description:
      "Create Projects, upload documents, and set custom instructions for 200K context.",
    trailId: "easy-trail",
    order: 2,
    duration: "15 min",
    objectives: [
      "Create and organize Projects in Claude",
      "Upload documents to the knowledge base",
      "Write effective custom instructions",
      "Understand the 200K context window (~500 pages)",
    ],
  },
  {
    slug: "connectors",
    title: "Connectors: Plugging In Your World",
    description:
      "Connect Claude to Linear, Notion, Slack, Google Drive, and 50+ other services.",
    trailId: "easy-trail",
    order: 3,
    duration: "15 min",
    objectives: [
      "Browse the Connectors directory",
      "Connect Claude to your existing tools",
      "Use Interactive Apps for richer outputs",
      "Manage connector permissions",
    ],
  },
  {
    slug: "local-mcp-servers",
    title: "Local MCP Servers",
    description:
      'What is MCP ("USB ports for AI"), setting up local servers like Obsidian or filesystem.',
    trailId: "easy-trail",
    order: 4,
    duration: "20 min",
    objectives: [
      "Understand MCP (Model Context Protocol) in simple terms",
      "Edit claude_desktop_config.json",
      "Set up a local MCP server (Obsidian or filesystem)",
      "Troubleshoot common MCP issues",
    ],
  },
  {
    slug: "your-daily-workflow",
    title: "Your Daily Workflow",
    description:
      "Build a practical daily system with Claude and your documentation tools.",
    trailId: "easy-trail",
    order: 5,
    duration: "12 min",
    objectives: [
      "Design your personal AI-enhanced workflow",
      "Integrate Claude with your documentation tool",
      "Build daily routines that leverage AI",
      "Know when to use AI vs. do things yourself",
    ],
  },

  // ── Medium Trail ──────────────────────────────────────
  {
    slug: "claude-code-and-ide",
    title: "Claude Code & Your IDE",
    description:
      "Terminal-native, agentic coding — set up Claude Code with VS Code or Cursor.",
    trailId: "medium-trail",
    order: 1,
    duration: "15 min",
    objectives: [
      "Understand what Claude Code is and how it differs from Desktop",
      "Install Claude Code",
      "Set up integration with VS Code or Cursor",
      "Run your first agentic coding session",
    ],
  },
  {
    slug: "git-github-version-control",
    title: "Git, GitHub & Version Control",
    description:
      'The 5 essential commands, the "save game" analogy, and your GitHub account.',
    trailId: "medium-trail",
    order: 2,
    duration: "20 min",
    objectives: [
      "Understand version control with the 'save game' analogy",
      "Master the 5 essential Git commands",
      "Create a GitHub account and repository",
      "Push your first code to GitHub",
    ],
  },
  {
    slug: "skills-and-claude-md",
    title: "Skills & CLAUDE.md",
    description:
      "The Skills system, slash commands, CLAUDE.md for project context, and hooks.",
    trailId: "medium-trail",
    order: 3,
    duration: "15 min",
    objectives: [
      "Understand the SKILL.md format and slash commands",
      "Install Skills from the marketplace",
      "Write an effective CLAUDE.md for your project",
      "Configure hooks for automated workflows",
    ],
  },
  {
    slug: "building-your-first-app",
    title: "Building Your First App",
    description:
      "Scaffold a Next.js app with Claude Code, component by component.",
    trailId: "medium-trail",
    order: 4,
    duration: "25 min",
    objectives: [
      "Understand the scaffolding prompt philosophy",
      "Create a Next.js app from scratch with Claude Code",
      "Build components iteratively",
      "Test and refine your application",
    ],
  },
  {
    slug: "data-and-deployment",
    title: "Data & Deployment",
    description:
      "Supabase for storage, Vercel for hosting, environment variables.",
    trailId: "medium-trail",
    order: 5,
    duration: "20 min",
    objectives: [
      "Set up Supabase for data storage",
      "Configure Supabase MCP for Claude Code",
      "Deploy your app to Vercel",
      "Manage environment variables safely",
    ],
  },
  {
    slug: "security-essentials",
    title: "Security Essentials",
    description:
      "API keys, .env files, .gitignore, the 5 security rules every builder needs.",
    trailId: "medium-trail",
    order: 6,
    duration: "15 min",
    objectives: [
      "Understand the 5 security rules for AI-assisted development",
      "Protect API keys with .env and .gitignore",
      "Run npm audit and fix vulnerabilities",
      "Complete the security deployment checklist",
    ],
  },

  // ── Summit ────────────────────────────────────────────
  {
    slug: "the-agentic-landscape",
    title: "The Agentic Landscape",
    description:
      "Multi-agent systems, orchestration patterns, and agent crews.",
    trailId: "summit",
    order: 1,
    duration: "15 min",
    objectives: [
      "Understand multi-agent system architectures",
      "Compare orchestration patterns",
      "Identify when to use single vs. multi-agent approaches",
      "Explore real-world agent crew examples",
    ],
  },
  {
    slug: "rag-fundamentals",
    title: "RAG Fundamentals",
    description:
      "Retrieval-Augmented Generation: chunking, embeddings, vector search.",
    trailId: "summit",
    order: 2,
    duration: "20 min",
    objectives: [
      "Understand the RAG pipeline end-to-end",
      "Learn about chunking strategies and trade-offs",
      "Grasp embeddings and vector similarity",
      "Compare vector databases (Chroma vs. pgvector)",
    ],
  },
  {
    slug: "building-your-rag-pipeline",
    title: "Building Your RAG Pipeline",
    description:
      "Hands-on: document ingestion, embedding, querying with LangChain.",
    trailId: "summit",
    order: 3,
    duration: "25 min",
    objectives: [
      "Ingest and chunk documents programmatically",
      "Generate and store embeddings",
      "Build a query pipeline with retrieval and generation",
      "Evaluate and improve retrieval quality",
    ],
  },
  {
    slug: "your-agentic-system",
    title: "Your Agentic System",
    description:
      "Multi-agent + RAG + shared memory + deployment + monitoring.",
    trailId: "summit",
    order: 4,
    duration: "30 min",
    objectives: [
      "Design a multi-agent system with shared memory",
      "Integrate RAG into your agent pipeline",
      "Deploy and monitor your agentic system",
      "Plan your next steps beyond the summit",
    ],
  },
];

export function getLessonsByTrail(trailId: string): Lesson[] {
  return lessons
    .filter((l) => l.trailId === trailId)
    .sort((a, b) => a.order - b.order);
}

export function getLesson(
  trailId: string,
  slug: string
): Lesson | undefined {
  return lessons.find((l) => l.trailId === trailId && l.slug === slug);
}

export function getAdjacentLessons(
  trailId: string,
  slug: string
): { prev: Lesson | null; next: Lesson | null } {
  const trailLessons = getLessonsByTrail(trailId);
  const index = trailLessons.findIndex((l) => l.slug === slug);

  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? trailLessons[index - 1] : null;
  const next =
    index < trailLessons.length - 1 ? trailLessons[index + 1] : null;

  return { prev, next };
}

export function getAllLessonSlugs(): { trailId: string; slug: string }[] {
  return lessons.map((l) => ({ trailId: l.trailId, slug: l.slug }));
}

export function getLessonNumber(trailId: string, order: number): number {
  const trailOrder = ["basecamp", "easy-trail", "medium-trail", "summit"];
  const trailIndex = trailOrder.indexOf(trailId);
  let total = 0;
  for (let i = 0; i < trailIndex; i++) {
    total += lessons.filter((l) => l.trailId === trailOrder[i]).length;
  }
  return total + order;
}
