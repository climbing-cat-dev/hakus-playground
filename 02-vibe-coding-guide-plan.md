# Haku's Playground — Implementation Plan

## Context

A **climbing-cat-themed**, playful, pixelated course website that teaches non-technical people to use AI tools — from understanding AI basics through building agentic systems with RAG.

**Mascot**: Haku — an orange/white fluffy cat (based on real cat photos provided). All illustrations are pixel art (128-bit/256-pixel aesthetic), fun and playful like a retro adventure game.

**Metaphor**: Mountain climbing. Basecamp at the bottom, trails of increasing difficulty, summit at the top. Cats climbing walls, boulders, hanging from ledges.

**Key design reference**: Next.js Learn (nextjs.org/learn) — sidebar nav, moderate-length single-scroll pages, narrative prose + code blocks, "Next Up" CTA progression. NOT endlessly scrollable.

**AI tool focus**: Claude Desktop/Code primary, Gemini recommended alternative, ChatGPT as last resort. Reference Anthropic Skilljar (anthropic.skilljar.com) for foundational learning.

---

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **Tailwind CSS v4** (CSS-first `@theme` config)
- **MDX** via `@next/mdx` for lesson content
- **Framer Motion** (`motion`) for scroll animations
- **Shiki** for syntax highlighting
- **Fonts**: Fredoka (display), Nunito (body), JetBrains Mono (code) via `next/font`
- **Vercel Web Analytics** (`@vercel/analytics`)
- **Deploy**: Vercel (static SSG, all pages pre-rendered)

---

## Who This Is For

- Non-technical people who are curious about AI and want to build something real
- Product managers who want to prototype
- Founders who can't code but have ideas
- Creative professionals exploring AI tools
- Students who want to learn by doing
- Anyone who has heard "vibe coding" and wants to try it

They do NOT need to know any programming language, how databases work, what an API is, Git, or how LLMs work — we teach all of it.

They DO need a computer with internet, curiosity, and willingness to read error messages without panicking.

---

## 4 Trails (20 Lessons Total)

### Basecamp — Understanding AI (5 lessons)
Foundation. Users understand AI and can have effective conversations.

1. **What Is AI, Really?** — LLMs, tokens, context, hallucination, what AI can/can't do
2. **Meet Your AI Tools** — Claude, Gemini, ChatGPT landscape; Claude > Gemini > ChatGPT ranking
3. **Talking to AI** — The 8-part prompt framework, structured communication
4. **Your First Real Prompt** — Hands-on: write a PRD, context files, iterative refinement
5. **AI Safety & Ethics** — Hallucinations, bias, when NOT to trust AI, responsible use
   - Reference: "For deeper learning, check out Anthropic's free courses at anthropic.skilljar.com" (AI Fluency, Claude 101, MCP intro courses available there)

### Easy Trail — Claude Desktop Power User (5 lessons)
Practical workflows. Users have Claude Desktop connected to their tools.

1. **Setting Up Claude Desktop** — Install, create account, first conversation
2. **Projects & Knowledge** — Creating Projects, uploading docs, custom instructions (200K context, ~500 pages)
3. **Connectors: Plugging In Your World** — Connectors directory (claude.ai/directory), connecting Linear/Notion/Slack/Google Drive. 50+ connectors available on Pro/Max/Team/Enterprise
4. **Local MCP Servers** — What is MCP (simple: "USB ports for AI"), setting up Obsidian vault via `mcp-obsidian` or filesystem MCP, editing `claude_desktop_config.json`
5. **Your Daily Workflow** — Building a practical system: Claude + documentation tool of choice, daily routines

### Medium Trail — Building with Claude Code (6 lessons)
Building. Users build and deploy their own app.

1. **Claude Code & Your IDE** — What is Claude Code (terminal-native, agentic), how it differs from Desktop, setup with Cursor/VS Code
2. **Git, GitHub & Version Control** — The 5 commands (init, add, commit, push, pull), "save game" analogy, GitHub account
3. **Skills & CLAUDE.md** — Skills system (SKILL.md format, slash commands), installing from marketplace/community, CLAUDE.md for project context, hooks
4. **Building Your First App** — Scaffolding a Next.js app with Claude Code, the scaffolding prompt philosophy, component by component
5. **Data & Deployment** — Supabase for storage (via MCP), Vercel for hosting, environment variables
6. **Security Essentials** — API keys, .env files, .gitignore, npm audit, the 5 security rules, security checklist

### Summit — Agentic Systems (4 lessons)
Advanced. Users build a full agentic system with RAG.

1. **The Agentic Landscape** — Multi-agent systems, orchestration patterns, agent crews
2. **RAG Fundamentals** — Retrieval-Augmented Generation, chunking, embeddings, vector search, vector DBs (Chroma for prototyping, pgvector for Supabase)
3. **Building Your RAG Pipeline** — Hands-on: document ingestion, embedding, querying, LangChain/LlamaIndex overview
4. **Your Agentic System** — Multi-agent + RAG + shared memory + deployment + monitoring

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx                        # Root layout, fonts, Header/Footer
│   ├── page.tsx                          # Landing page
│   ├── globals.css                       # Tailwind v4 @theme tokens
│   ├── not-found.tsx                     # "Haku got lost!" 404
│   ├── (course)/
│   │   ├── layout.tsx                    # Sidebar + content area (Next.js Learn style)
│   │   ├── overview/page.tsx             # Trail map overview
│   │   ├── basecamp/
│   │   │   ├── page.tsx                  # Trail landing
│   │   │   └── [lessonSlug]/page.tsx     # Lesson pages
│   │   ├── easy-trail/
│   │   │   ├── page.tsx
│   │   │   └── [lessonSlug]/page.tsx
│   │   ├── medium-trail/
│   │   │   ├── page.tsx
│   │   │   └── [lessonSlug]/page.tsx
│   │   ├── summit/
│   │   │   ├── page.tsx
│   │   │   └── [lessonSlug]/page.tsx
│   │   └── resources/page.tsx
│   └── api/og/route.tsx                  # Dynamic OG images
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                    # Playful nav with Haku logo
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx                   # Trail-grouped lesson list, paw print progress
│   │   └── MobileNav.tsx                 # Slide-out drawer
│   ├── landing/
│   │   ├── HeroSection.tsx               # Full-viewport hero with mountain panorama
│   │   ├── TrailMap.tsx                   # 4-zone winding path overview
│   │   ├── FeatureCards.tsx              # Course highlights
│   │   └── CTASection.tsx               # Bottom CTA
│   ├── course/
│   │   ├── TrailCard.tsx                 # Trail overview card
│   │   ├── LessonCard.tsx               # Lesson card with paw progress
│   │   └── LessonContent.tsx            # Wrapper: title, prev/next nav, NextUp
│   ├── mdx/
│   │   ├── CodeBlock.tsx                 # Shiki + copy button
│   │   ├── Callout.tsx                   # info/tip/warning/paw variants
│   │   ├── Checklist.tsx                 # Interactive paw-print checkboxes
│   │   ├── ExpandableSection.tsx         # Collapsible accordion
│   │   ├── LessonObjective.tsx           # Top-of-lesson objectives
│   │   ├── HandsOnExercise.tsx           # Exercise block
│   │   ├── PawPrintCheck.tsx             # End-of-lesson comprehension
│   │   ├── KeyVocabulary.tsx             # Term definitions
│   │   ├── TipBox.tsx                    # Quick tip
│   │   ├── WarningBox.tsx                # Warning
│   │   ├── StepByStep.tsx               # Numbered steps with connectors
│   │   └── NextUp.tsx                    # CTA to next lesson
│   ├── effects/
│   │   ├── PixelHaku.tsx                 # Animated pixel cat mascot
│   │   ├── PawPrintTrail.tsx             # Decorative trail
│   │   └── ClimbingAnimation.tsx         # Scroll-driven Haku climbing
│   └── ui/
│       ├── Button.tsx                    # primary/secondary/ghost
│       ├── Card.tsx                      # Warm card
│       ├── Badge.tsx                     # Trail-colored badges
│       └── ProgressBar.tsx              # Reading progress
│
├── content/
│   ├── lessons/
│   │   ├── basecamp/                     # 5 MDX files
│   │   ├── easy-trail/                   # 5 MDX files
│   │   ├── medium-trail/                 # 6 MDX files
│   │   └── summit/                       # 4 MDX files
│   └── data/
│       ├── trails.ts                     # 4 trails metadata
│       ├── lessons.ts                    # 20 lessons metadata + helpers
│       └── navigation.ts                # Nav structure
│
├── lib/
│   ├── mdx.ts                            # MDX loading utilities
│   ├── metadata.ts                       # SEO metadata generators
│   └── utils.ts                          # cn(), helpers
│
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useInView.ts
│   ├── useReducedMotion.ts
│   └── useTrailTheme.ts
│
└── styles/
    └── trail-themes.css                  # Per-trail CSS overrides

mdx-components.tsx                        # MDX component registry
next.config.mjs                           # MDX support config
pixel-art-prompts.md                      # Image generation prompts (see separate file)
```

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `earth` | `#1A1612` | Deepest background (dark soil) |
| `bark` | `#2C2418` | Primary background (tree bark) |
| `stone` | `#3D3528` | Elevated surfaces (boulders) |
| `pebble` | `#5C4F3D` | Cards, panels |
| `trail` | `#7A6B55` | Borders |
| `cream` | `#F5F0E8` | Primary text |
| `sand` | `#C4B89A` | Secondary text |
| `dust` | `#8C7E68` | Muted text |
| `basecamp` | `#4CAF50` | Basecamp (green, grassy) |
| `easy` | `#FF9800` | Easy trail (orange, Haku's color!) |
| `medium` | `#7C4DFF` | Medium trail (purple) |
| `summit` | `#E91E63` | Summit (pink/red, peak flag) |
| `paw` | `#FF6B35` | CTA, links (paw print orange) |
| `alert` | `#F44336` | Warnings |
| `success` | `#66BB6A` | Completion |

### Typography
- **Display**: Fredoka (fun, rounded) — headings, titles
- **Body**: Nunito (friendly, readable) — prose, UI text
- **Mono**: JetBrains Mono — code blocks

### Visual Elements
- Pixel art Haku in various poses (climbing, hanging, sleeping, celebrating)
- Boulder/rock climbing wall aesthetic
- Paw print progress indicators
- Trail/path metaphor connecting lessons
- Each trail has different "terrain" feel (meadow, forest, mountain, peak)
- Trail-colored accents shift via `data-trail` attribute + CSS custom properties

---

## Key Architectural Decisions

1. **MDX via dynamic import**: Lessons in `src/content/lessons/[trail]/` imported dynamically in `[lessonSlug]/page.tsx`. Content separate from routing.
2. **No auth/progress persistence**: Paw prints are decorative. Fully static site. LocalStorage progress could be added later.
3. **Server Components by default**: MDX renders server-side. Only interactive pieces (`Checklist`, `MobileNav`, animations) use `"use client"`.
4. **Metadata in TypeScript, not frontmatter**: `@next/mdx` doesn't support frontmatter natively. Lesson metadata lives in `lessons.ts` with type safety.
5. **Next.js 16**: `params` and `searchParams` are async (must `await`). Turbopack default.
6. **Placeholder images initially**: Use colored rectangles matching trail colors. Swap in pixel art as generated. See `pixel-art-prompts.md` for generation prompts.

---

## Pixel Art Images

All 28 image prompts are in a separate file: **`pixel-art-prompts.md`**

Generate using any image AI (ChatGPT/DALL-E, Midjourney, Gemini) and save as `.webp` to the paths specified in each prompt.

---

## Verification Plan

1. `npm run build` succeeds with zero errors
2. Landing page renders hero, trail map, feature cards, CTA
3. `/overview` displays 4 trail cards linking correctly
4. Each of 20 lessons renders MDX with all custom components (code blocks, callouts, checklists)
5. Sidebar highlights current lesson, prev/next nav works across all 20 lessons
6. Responsive: 375px (mobile), 768px (tablet), 1280px+ (desktop)
7. Lighthouse: Performance > 90, Accessibility > 95
8. `prefers-reduced-motion` disables animations
9. All routes return proper metadata (title, description, OG image)
10. Vercel deployment succeeds
