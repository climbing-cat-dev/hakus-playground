export type TrailId = "basecamp" | "easy-trail" | "medium-trail" | "summit";

export interface Lesson {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
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
    metaDescription:
      "Learn what large language models (LLMs) actually are, how tokens and context windows work, and what AI can and can't do. A plain-language introduction for beginners.",
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
    metaDescription:
      "Compare Claude, ChatGPT, and Gemini side by side. Honest recommendations on which AI tool to start with and when to use each one.",
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
    metaDescription:
      "Master the 8-part prompt framework to communicate effectively with AI. Learn how to write structured prompts that consistently get better results from Claude, ChatGPT, and more.",
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
    metaDescription:
      "Write your first real AI prompt — create a Product Requirements Document, build reusable context files, and practice iterative refinement. Hands-on lesson.",
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
    metaDescription:
      "Understand AI hallucinations, bias, and the limits of AI. Learn when NOT to trust AI and how to use it responsibly. Essential knowledge for every AI user.",
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
    metaDescription:
      "Step-by-step guide to downloading and installing Claude Desktop. Create your Anthropic account, understand Pro vs Max plans, and have your first AI conversation.",
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
    metaDescription:
      "Learn to create Claude Projects, upload documents to the knowledge base, and write custom instructions. Unlock the full 200K context window (~500 pages).",
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
    metaDescription:
      "Connect Claude to Notion, Slack, Google Drive, Linear, and 50+ other tools using Connectors. Set up integrations and manage permissions in minutes.",
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
    metaDescription:
      "Understand Model Context Protocol (MCP) in simple terms. Set up local MCP servers for Obsidian, filesystem access, and more. Includes troubleshooting tips.",
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
    metaDescription:
      "Design your personal AI-enhanced daily workflow. Learn to integrate Claude with your documentation tools and know when to use AI vs. do things yourself.",
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
    metaDescription:
      "Install Claude Code and integrate it with VS Code or Cursor. Learn how terminal-native agentic coding differs from Claude Desktop and run your first session.",
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
    metaDescription:
      "Learn Git and GitHub from scratch with the 'save game' analogy. Master the 5 essential commands, create your first repository, and push code to GitHub.",
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
    metaDescription:
      "Master Claude Code's Skills system, slash commands, and CLAUDE.md project files. Learn to install marketplace skills and configure hooks for automated workflows.",
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
    metaDescription:
      "Build a Next.js app from scratch using Claude Code. Learn the scaffolding prompt philosophy and build components iteratively with AI-assisted development.",
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
    metaDescription:
      "Set up Supabase for data storage, configure the Supabase MCP for Claude Code, deploy your app to Vercel, and manage environment variables safely.",
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
    metaDescription:
      "The 5 security rules every AI-assisted developer needs. Protect API keys with .env and .gitignore, run npm audit, and complete the security deployment checklist.",
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
    metaDescription:
      "Explore multi-agent system architectures, orchestration patterns, and real-world agent crew examples. Learn when to use single vs. multi-agent approaches.",
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
    metaDescription:
      "Learn Retrieval-Augmented Generation (RAG) from scratch. Understand chunking strategies, embeddings, vector similarity, and compare vector databases like Chroma and pgvector.",
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
    metaDescription:
      "Build a working RAG pipeline hands-on. Ingest and chunk documents, generate and store embeddings, and create a query pipeline with retrieval and generation.",
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
    metaDescription:
      "Design and deploy a multi-agent system with shared memory, RAG integration, and monitoring. The capstone project of Haku's Playground AI course.",
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
