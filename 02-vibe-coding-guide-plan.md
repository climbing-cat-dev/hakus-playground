# LAUNCH MANUAL

### A guided course for anyone to vibe-code their own AI mission control — from zero to orbit.

---

## What This Is

This is the plan for a course — a guided experience that takes someone who has never written a line of code and walks them through building their own version of an AI agent dashboard (like Odyssey) using nothing but conversation with AI.

The course is designed to be:
- **Fun.** Space-themed. Missions, not modules. Launches, not lessons.
- **Safe.** Security-first. No exposed secrets. No accidental disasters.
- **Real.** They will ship something that works. Not a tutorial that ends in theory.
- **Empowering.** They will understand what AI is, what it can do, and how to direct it — not just copy-paste prompts.

**The end goal:** Every person who completes this course has their own personalized AI agent system running — their own mission control, with agents that remember, share context, and help them daily.

---

## Who This Is For

```
Primary audience:
  Non-technical people who are curious about AI and want to build
  something real. They might be:
  - A product manager who wants to prototype
  - A founder who can't code but has ideas
  - A creative professional exploring AI tools
  - A student who wants to learn by doing
  - Anyone who has heard "vibe coding" and wants to try it

They do NOT need to know:
  - Any programming language
  - How databases work
  - What an API is (we'll teach them)
  - Git (we'll teach them)
  - How LLMs work (we'll teach them)

They DO need:
  - A computer with internet
  - Curiosity
  - Willingness to read error messages without panicking
  - About 2-3 hours per mission
```

---

## Course Structure: The Mission Plan

The course is organized as a space mission with 10 missions across 4 phases. Each mission has a clear objective, pre-flight briefing, hands-on work, and a post-flight check to verify success.

```
PHASE 1: PRE-FLIGHT — Understanding the Universe
  Mission 01: What Is AI, Really?
  Mission 02: Your Toolkit — Tools, Platforms, and Setup
  Mission 03: The Art of Talking to AI (Prompt Engineering)

PHASE 2: LIFTOFF — Building Your First Agent
  Mission 04: Your First Agent — Hello, Commander
  Mission 05: Memory — Teaching Your Agent to Remember
  Mission 06: The Config Files — Teaching AI Who You Are

PHASE 3: ORBIT — Expanding the Crew
  Mission 07: Multi-Agent Systems — Building Your Crew
  Mission 08: Cross-Agent Memory — The Shared Brain
  Mission 09: The Daily Loop — Morning Briefing and Evening Debrief

PHASE 4: DEEP SPACE — Security, Shipping, and Beyond
  Mission 10: Security and Safety — Protecting Your Mission
  Mission 11: Shipping It — Going Live
  Mission 12: Evolution — Where to Go From Here
```

---

## Learning Tracks: Basecamp and Trail B

This course has two complementary tracks. You can follow one or both depending on where you are and where you want to go.

### Basecamp — Learn the Fundamentals

Basecamp is the foundation. This is where you learn what AI is, how to talk to it, and how to think in systems. It covers Missions 01–03 and the core ideas you will need for everything else.

One of the most powerful things you can do at this stage is use Claude to help you formulate better prompts. Instead of staring at a blank screen trying to figure out how to ask for what you want, try this:

```
"Help me generate a thorough prompt for the following idea: [your idea]."
```

Describe what you are trying to build or accomplish, and let Claude help you structure the ask. This is not cheating — it is how professionals work. The AI helps you sharpen your thinking, and you refine from there. Think of it as brainstorming with a partner who never runs out of patience.

To go deeper on the fundamentals, check out the free courses at Anthropic's learning platform: https://anthropic.skilljar.com/ — these cover prompt engineering, tool use, and building with Claude in more detail than we can fit here. Highly recommended alongside Basecamp.

### Trail B — Build With Skills and Tools

Trail B is the builder track. This is where you start using **skills** — pre-built bundles of knowledge that teach AI how to perform specific tasks at a higher level.

Skills are like field guides for the AI. A skill might teach it how to create professional Word documents, build React components following clean code principles, generate slide decks, or follow your company's exact coding standards. Instead of re-explaining your preferences every conversation, you hand the AI a skill file and it just knows.

In Odyssey, every agent definition is essentially a skill. But skills go beyond agents — they can define workflows, formatting rules, output standards, and domain expertise. As you progress through Trail B, you will create and refine your own skills that make your AI sharper with every use.

**A note on tools:** This course is specifically focused on Claude, as I find it more advanced than Gemini and ChatGPT for the kind of building we are doing here. That said, if you or your company only allows one of the others, go with what works best for your situation. You can create Gems and connections in Gemini, and ChatGPT has similar customization features.

For agentic coding environments, there is also AntiGravity and Codex alongside tools like Cursor and Windsurf. Ultimately, use whatever tools work best for you.

My honest ranking: **Claude > Gemini > ChatGPT.** I would recommend not using ChatGPT if you have the choice — Gemini is still better for most tasks. But Claude is where the real leverage is, and that is what we will be using throughout this course.

---

## PHASE 1: PRE-FLIGHT — Understanding the Universe

### Mission 01: What Is AI, Really?

**Objective:** Understand what AI is, what it is not, and why it matters for what you are about to build.

**Pre-flight briefing:**

This mission demystifies AI for people who have never looked under the hood. No math. No jargon. Just honest explanation.

**Topics to cover:**

```
What AI actually is:
  AI is pattern recognition at scale. A Large Language Model (LLM)
  like Claude or GPT is a program that has read billions of pages of
  text and learned to predict what words should come next given
  a context. That is the entire magic trick.

  It is not sentient. It does not "think." It is extraordinarily
  good at producing useful text based on patterns it learned.

  Analogy: Imagine someone who has read every book in the library.
  They can write convincingly about almost any topic — not because
  they lived it, but because they have seen enough examples to
  produce something that reads like expertise.

What LLMs can do:
  - Write code, emails, reports, stories
  - Analyze data and documents
  - Answer questions from uploaded context
  - Follow complex multi-step instructions
  - Maintain conversation over many turns
  - Use tools and external services (via MCP)

What LLMs cannot do:
  - Remember you between sessions (without memory systems)
  - Access the internet on their own (without tools)
  - Guarantee accuracy (they can hallucinate)
  - Replace expert judgment in legal, medical, or financial domains
  - Keep secrets secure on their own (you must handle this)

Key vocabulary:
  LLM — Large Language Model. The AI brain.
  Prompt — What you say to the AI. Your input.
  Context — The information the AI has access to in this conversation.
  Token — A chunk of text (roughly 3/4 of a word). How AI measures length.
  System Prompt — Hidden instructions that shape the AI's behavior.
  Temperature — How creative vs. predictable the AI's responses are.
  Hallucination — When AI confidently says something that is not true.
```

**Hands-on exercise:**
- Open Claude (claude.ai) or ChatGPT
- Ask it to explain something you know well (your job, your hobby)
- Notice where it gets things right and where it is vague or wrong
- Ask it a follow-up question that requires it to remember the previous answer
- Observe: it does remember within the conversation, but if you start a new chat, it forgets

**Post-flight check:**
- Can you explain what an LLM is to a friend in one sentence?
- Can you identify one thing AI is good at and one thing it is bad at?
- Do you understand why "memory" requires deliberate engineering?

---

### Mission 02: Your Toolkit — Tools, Platforms, and Setup

**Objective:** Get your workspace ready. Understand what each tool does and why you need it.

**Pre-flight briefing:**

Vibe coding requires a small but specific set of tools. This mission explains each one, why it exists, and gets everything installed.

**The tools you need:**

```
1. AN AI ASSISTANT (required)
   What: Claude (claude.ai) — our primary tool for this course.
   Why: This is your co-pilot. You describe what you want,
        it writes the code. You review, refine, iterate.
   Cost: Free tier available. Claude Pro recommended ($20/month)
         for longer conversations and access to advanced features.
   Setup: Create an account at claude.ai. That is it.

   Note: We use Claude throughout this course because it is,
         in my experience, the most capable tool for this kind
         of building. If your company or situation requires an
         alternative, Gemini is a solid second choice (you can
         create Gems and connections). ChatGPT works too but
         is my least recommended of the three.
         Ranking: Claude > Gemini > ChatGPT.

2. A CODE EDITOR (required)
   What: Cursor, VS Code, Windsurf, or an AI-native IDE
   Why: Where the code lives. AI writes it, you see it here.
   Recommended: Cursor (cursor.com) — it has AI built in.
   Alternative: VS Code (free) + GitHub Copilot extension.
   Agentic options: AntiGravity and Codex are also emerging
                    as agentic IDE tools worth exploring.
   Setup: Download and install. Open it. You are ready.

3. GIT AND GITHUB (required)
   What: Version control. A system that saves snapshots of
         your code so you can always go back if something breaks.
   Why: You WILL break things. Git lets you undo mistakes.
        GitHub is where your code lives online.
   Analogy: Git is like "save game" in a video game. GitHub
            is the cloud where your save files live.
   Setup:
     - Create a GitHub account (github.com)
     - Install Git (git-scm.com)
     - We will teach you the 5 commands you need:
       git init, git add, git commit, git push, git pull

4. A TERMINAL (required)
   What: The text-based interface to your computer.
   Why: Some things require typing commands. It is not scary.
   Where: Mac has Terminal built in. Windows has PowerShell.
          Cursor and VS Code have terminals built in.
   Setup: Already on your computer. Open it.

5. NODE.JS (required for web apps)
   What: A program that runs JavaScript outside a browser.
   Why: Most web apps use it. Your AI agent dashboard will use it.
   Setup: Download from nodejs.org. Install. Done.

6. A DEPLOYMENT PLATFORM (later)
   What: Where your app goes live on the internet.
   Options: Vercel (recommended), Netlify, or Railway.
   Why: So you (and others) can actually use what you build.
   Setup: Create an account. Free tier is plenty.
```

**What are MCPs? (Model Context Protocol)**

```
MCP is how AI talks to other services.

Think of it like this: An AI assistant on its own is smart but
isolated. It can write and think, but it cannot check your
calendar, read your email, or save data to a database.

MCP is the universal adapter that connects AI to everything else.

  AI alone:        "I can write a great schedule for you."
  AI + MCP:        "I checked your Google Calendar, saw you have
                    a meeting at 2pm, and built your schedule
                    around it."

MCP servers are like USB ports. Each one connects AI to a
different service:
  - Google Calendar MCP → AI can read/write calendar events
  - Gmail MCP → AI can read/draft emails
  - Notion MCP → AI can read/write documents
  - Slack MCP → AI can read/send messages
  - GitHub MCP → AI can read/manage code repositories
  - Supabase MCP → AI can read/write database records

You do not need to understand how MCP works internally.
You just need to know: it is what makes AI actually useful
in the real world, not just a chatbot.
```

**What are Tools and Skills?**

```
TOOLS are capabilities you give to AI:
  - Web search: AI can look things up online
  - Code execution: AI can run code and see results
  - File creation: AI can make documents, images, files
  - Function calling: AI can trigger external actions

SKILLS are pre-built bundles of knowledge:
  - A skill might teach AI how to create PowerPoint files
  - Or how to write in a specific framework
  - Or how to follow your company's coding standards
  - Think of skills as "training manuals" for the AI

In Odyssey, each agent definition (.md file) is essentially
a skill — it teaches the AI how to be that specific agent.
```

**Hands-on exercise:**
- Install Cursor (or VS Code)
- Create a GitHub account
- Install Git and Node.js
- Open a terminal, type `node --version` and `git --version`
- If both show version numbers, you are ready for liftoff

**Post-flight check:**
- All tools installed and running?
- GitHub account created?
- Can you open a terminal without panicking?

---

### Mission 03: The Art of Talking to AI (Prompt Engineering)

**Objective:** Learn the 8-part prompt framework that makes AI actually useful.

**Pre-flight briefing:**

Most people talk to AI like they are texting a friend. Vague. Unstructured. Hoping. The result? Vague, unstructured output. This mission teaches you to communicate with AI like a flight director communicates with astronauts — precise, structured, and unambiguous.

**The 8-Part Prompt Architecture:**

```
#1 TASK — Define what you want and what success looks like.

  BAD:  "Make me a website."
  GOOD: "I want to build a single-page personal dashboard
         that displays my daily schedule, active goals, and
         a journal entry form so that I can track my progress
         toward becoming an entrepreneur."

  Formula: "I want to [TASK] so that [SUCCESS CRITERIA]."
  No roles. No "act as a senior expert." That era is over.


#2 CONTEXT FILES — Upload your expertise and rules as files.

  BAD:  Typing 2000 words of context into the chat.
  GOOD: "First, read these files completely before responding:
         - project-brief.md — what we are building
         - design-rules.md — visual and UX standards
         - my-preferences.md — my communication style"

  AI went from reading a sticky note to reading an entire book.
  Stop explaining yourself in the prompt. Put it in files.


#3 REFERENCE — Show AI exactly what you want.

  BAD:  "Make it look nice."
  GOOD: Upload a screenshot of a design you love.
        "Match this layout. Use this color palette.
         The tone should be minimal and data-dense,
         NOT playful or colorful."

  Give patterns, tone, and structure as rules.
  No "give me something like..." and hoping.


#4 BRIEF — The only part you type from scratch.

  Include: Type of output + length.
  Include: What it does NOT sound like.
  Include: What success means.

  Example: "Write a 200-word product description.
            Does NOT sound like a corporate press release.
            Success means a developer reads it and immediately
            understands what the tool does."


#5 RULES — Your context file holds your standards.

  In your rules file:
    - Writing style preferences
    - Technical constraints
    - Things to always do
    - Things to never do

  In your prompt:
    "Read my rules file fully before starting.
     If you are about to break one of my rules,
     stop and tell me."


#6 CONVERSATION — AI prompts YOU before executing.

  Old way: You prompt AI. AI responds. You fix it. Repeat.
  New way: AI asks you questions first.

  Prompt: "DO NOT start executing yet. Ask me clarifying
           questions so we can refine the approach together
           step by step."

  This single line changes everything. The AI becomes a
  collaborator, not a slot machine.


#7 PLAN — AI reads your files before writing a single word.

  Prompt: "Before you write anything, list the 3 rules from
           my context file that matter most for this task.
           Then give me your execution plan."

  This forces the AI to prove it understood your context
  before it does anything.


#8 ALIGNMENT — Nothing happens until you both agree.

  Prompt: "Only begin work once we have aligned."

  This prevents the AI from running off and building
  something you did not ask for. It creates a checkpoint.
```

**The PRD: Your Mission Brief**

Before you build anything, you write a Product Requirements Document. This is not corporate overhead — it is the single most important thing you will do.

```
A good PRD for vibe coding answers:

  What are we building?
    A personal AI agent dashboard with multiple specialized agents.

  Who is it for?
    Me, personally. (Or: my team, my customers, etc.)

  What does success look like?
    I can select an agent, ask it questions, and it remembers
    context between sessions and shares it with other agents.

  What is in scope?
    Agent selection, chat interface, memory system, daily briefing.

  What is out of scope?
    Voice input, calendar integration, mobile app (for now).

  What technology are we using?
    React, Tailwind CSS, Claude API, Supabase for storage.

  What are the constraints?
    Must work on desktop. Dark theme. Minimal UI.
    Must not expose API keys in the frontend.
```

You can ask Claude or ChatGPT to draft your PRD for you. Then you edit it. Then you use it as a context file for every future prompt.

**Hands-on exercise:**
- Write a PRD for your own version of an agent dashboard
- Use the 8-part framework to ask AI to review and improve your PRD
- Save it as a `.md` file — this becomes your first context file

**Post-flight check:**
- Do you have a PRD saved as a file?
- Can you explain all 8 parts of the prompt framework?
- Did you experience the difference between a vague prompt and a structured one?

---

## PHASE 2: LIFTOFF — Building Your First Agent

### Mission 04: Your First Agent — Hello, Commander

**Objective:** Build a working chat interface that talks to an AI agent with a custom system prompt.

**Pre-flight briefing:**

This is where you stop learning and start building. You will create a simple web page that sends messages to Claude's API and displays responses. Your first agent will be the Commander — the orchestrator that gives you daily briefings.

**What you will build:**
- A simple chat interface (text input, send button, message display)
- Connected to the Claude API
- Using a custom system prompt that defines the Commander agent
- Deployed locally (running on your computer)

**Key concepts introduced:**
- API keys (what they are, why they are secret)
- System prompts (the hidden instructions the user never sees)
- Frontend vs. backend (what runs in the browser vs. on the server)

**Safety checkpoint: API Keys**

```
⚠️  YOUR API KEY IS A SECRET. TREAT IT LIKE A PASSWORD.

What is an API key?
  A unique code that identifies you to a service (like Claude).
  Anyone who has your key can use the service AS YOU and
  you will be charged for it.

Rules:
  1. NEVER put your API key directly in your code files.
  2. NEVER commit your API key to GitHub.
  3. ALWAYS use environment variables (.env files).
  4. ALWAYS add .env to your .gitignore file.
  5. If you accidentally expose a key, revoke it IMMEDIATELY
     and generate a new one.

How to use environment variables:
  Create a file called .env in your project root:
    ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx

  Add .env to your .gitignore:
    .env

  Access it in your code via process.env.ANTHROPIC_API_KEY
  (Your AI assistant will help you set this up)
```

**Hands-on exercise:**
- Use the 8-part prompt framework to ask your AI assistant to scaffold a simple chat app
- Connect it to the Claude API with a Commander system prompt
- Send your first message and get a response
- Commit to GitHub (verify .env is NOT committed)

**Post-flight check:**
- Is your chat app running locally?
- Can you send a message and get a response from the Commander?
- Is your API key safely stored in .env and NOT in your code?
- Is .env listed in .gitignore?

---

### Mission 05: Memory — Teaching Your Agent to Remember

**Objective:** Add persistent memory so your agent remembers between conversations.

**Pre-flight briefing:**

Right now, your Commander forgets everything when you close the browser. This mission adds memory — the foundation that makes Odyssey actually useful.

**Topics to cover:**
- Why AI has no memory by default (stateless conversations)
- How to build memory (storing conversation history)
- Local storage vs. database storage
- The memory extraction pattern (MEMORY: and SHARED_MEMORY: tags)

**What you will build:**
- Conversation history that persists between sessions
- A memory extraction system where the agent flags important facts
- A memory viewer where you can see what the agent remembers

**Hands-on exercise:**
- Add local storage or Supabase to persist conversation history
- Modify the system prompt to include memory extraction instructions
- Build a simple memory viewer panel
- Test: tell the Commander something about yourself, close the app, reopen, ask if it remembers

**Post-flight check:**
- Does the agent remember your name after you close and reopen?
- Can you see stored memories in the viewer?
- Does memory persist across browser sessions?

---

### Mission 06: The Config Files — Teaching AI Who You Are

**Objective:** Create the configuration files that personalize your entire system.

**Pre-flight briefing:**

This is where Odyssey becomes *yours*. You will write the files that every agent reads before responding. This is the difference between a generic chatbot and a personalized crew.

**Files to create:**
```
config/about-me.md
  Your background, personality, communication style,
  current situation, what you are working toward.

config/goals.md
  Your quarterly goals (3 months) and yearly goals.
  What does success look like in each area of life?

config/preferences.md
  Tone you prefer (direct? warm? data-driven?)
  Schedule constraints (when do you work? sleep? exercise?)
  Dietary preferences or restrictions
  Tools you use daily

config/prompt-rules.md
  Your standards for how agents communicate.
  What they should always do.
  What they should never do.
  The 8-part framework codified as rules.
```

**Hands-on exercise:**
- Write each config file (use AI to help draft them, then edit personally)
- Modify the Commander's system prompt to read these files
- Test: ask the Commander to plan your day — does it reference your goals and preferences?

**Post-flight check:**
- Are all 4 config files written?
- Does the Commander's briefing reflect your personal context?
- Does the output feel personalized, not generic?

---

## PHASE 3: ORBIT — Expanding the Crew

### Mission 07: Multi-Agent Systems — Building Your Crew

**Objective:** Add multiple agents, each with their own personality and expertise.

**Pre-flight briefing:**

You have one agent. Now you build a crew. This mission adds an agent selection system and creates 3-5 additional agents — each with their own system prompt, personality, and domain expertise.

**What you will build:**
- An agent selector (sidebar or dropdown)
- Separate conversation histories per agent
- 3-5 new agents with full 8-part prompt definitions
- Each agent reads the shared config files

**Suggested starter crew:**
- @commander (already built)
- @therapist (emotional check-in, daily questions)
- @strategist (startup ideation, market analysis)
- @fitness (workout planning, energy optimization)
- @productivity (time blocking, habits, focus)

**Hands-on exercise:**
- Create agent definition files using the 8-part template
- Build the agent selector UI
- Test each agent independently
- Verify each agent reads config files and responds in character

---

### Mission 08: Cross-Agent Memory — The Shared Brain

**Objective:** Agents share context with each other.

**Pre-flight briefing:**

Right now, your agents are isolated. The Fitness Coach does not know you told the Therapist you are stressed. The Commander does not know the Strategist identified a new market opportunity. This mission connects them.

**What you will build:**
- Shared memory system (comms/shared-context.md equivalent)
- Memory emission protocol (SHARED_MEMORY: tags)
- Each agent reads shared context on every session
- A shared memory viewer

**The flow:**
```
You tell @fitness: "I hurt my shoulder"
  → @fitness saves locally: "shoulder injury"
  → @fitness emits shared: "User has shoulder injury"
  → Next time you talk to @nutrition:
      It reads shared context
      It suggests anti-inflammatory foods
      Without you telling it about your shoulder
```

**Hands-on exercise:**
- Implement the shared memory store
- Modify all agent system prompts to read shared context
- Test the flow: tell one agent something, verify another agent knows
- Build a shared memory viewer showing source agent and content

---

### Mission 09: The Daily Loop — Morning Briefing and Evening Debrief

**Objective:** Build the automated daily cycle that makes the system proactive.

**Pre-flight briefing:**

This is where Odyssey stops being reactive ("I ask, it answers") and becomes proactive ("It tells me what I need to know before I ask").

**What you will build:**
- Morning briefing generator (Commander synthesizes all agent context)
- Evening debrief questionnaire (Recorder asks daily questions)
- Score tracking over time (energy, focus, mood)
- Simple flag system (red/yellow/green)

**Hands-on exercise:**
- Build the daily questions template
- Implement score storage and trend display
- Build the morning briefing that pulls from all agents
- Add flag indicators to the dashboard
- Run the full daily loop for 3 days

---

## PHASE 4: DEEP SPACE — Security, Shipping, and Beyond

### Mission 10: Security and Safety — Protecting Your Mission

**Objective:** Understand and implement security best practices for AI-powered applications.

**Pre-flight briefing:**

This is the most important mission in the course. AI-generated code has real security risks. Nearly half of all AI-generated code contains vulnerabilities. This mission teaches you to build safely.

**The Security Mindset:**

```
Rule 1: AI-generated code is untrusted code.
  Just because it runs does not mean it is safe.
  Just because it looks right does not mean it is secure.
  Always review. Always test. Never blindly trust.

Rule 2: Secrets are sacred.
  API keys, passwords, tokens, database credentials —
  these are NEVER in your code. NEVER in your repository.
  ALWAYS in environment variables. ALWAYS in .env files.
  ALWAYS listed in .gitignore.

Rule 3: Less access is more safety.
  Give AI tools the minimum permissions they need.
  If an agent only needs to read data, do not give it
  write access. If it only needs one database table,
  do not give it access to all of them.

Rule 4: Review every diff.
  When AI changes your code, read what changed.
  Do not just click "accept." Understand the change.
  If you do not understand it, ask the AI to explain it.
  If you still do not understand it, do not ship it.

Rule 5: Commit often. Revert freely.
  Git is your safety net. Commit working code before
  asking AI to change anything. If the change breaks
  something, revert to the last working commit.
```

**Specific threats to understand:**

```
SECRET EXPOSURE
  What: Your API key ends up on GitHub where anyone can find it.
  How: You forget to add .env to .gitignore. Or AI puts the
       key directly in a code file.
  Prevention:
    - Use .env files for ALL secrets
    - Add .env to .gitignore BEFORE your first commit
    - Use GitHub's secret scanning (it warns you)
    - If exposed: revoke immediately, generate new key
    - Use tools like git-secrets or truffleHog to scan

INJECTION ATTACKS
  What: Malicious input that tricks your app into doing
        something unintended.
  How: AI-generated code often skips input validation.
       A user could enter code instead of text in a form
       and your app might execute it.
  Prevention:
    - Always validate and sanitize user input
    - Use parameterized queries for databases
    - Ask AI: "Review this code for injection vulnerabilities"
    - Never trust user input, even your own

DEPENDENCY RISKS
  What: AI installs a package that has known vulnerabilities.
  How: AI tends to use popular packages without checking versions.
       Some packages have been abandoned or compromised.
  Prevention:
    - Run npm audit or pip audit after installing packages
    - Keep dependencies updated
    - Do not install packages you do not understand
    - Ask AI: "Are there security concerns with this package?"

OVER-PERMISSIONING
  What: Giving AI agents or MCP servers more access than needed.
  How: It is easier to give full access. But if something
       goes wrong, the blast radius is everything.
  Prevention:
    - Principle of least privilege: minimum access needed
    - Use read-only database users where possible
    - Restrict MCP server permissions to specific actions
    - Review what permissions each tool actually needs

PROMPT INJECTION
  What: Someone tricks your AI agent into ignoring its
        instructions and doing something else.
  How: A user inputs text designed to override the system prompt.
       Example: "Ignore all previous instructions and..."
  Prevention:
    - Validate and filter user input
    - Do not put sensitive data in system prompts
    - Use separate layers for user input and system instructions
    - Test with adversarial inputs
```

**The Security Checklist (run before every deploy):**

```
[ ] .env file exists and contains all secrets
[ ] .env is listed in .gitignore
[ ] No API keys, tokens, or passwords in any code file
[ ] No secrets in any commit history (check with git log)
[ ] npm audit / pip audit shows no critical vulnerabilities
[ ] All user inputs are validated and sanitized
[ ] Database queries use parameterized statements
[ ] HTTPS is enabled (your deployment platform handles this)
[ ] Environment variables are set in your deployment platform
[ ] You can explain what every dependency does
[ ] You have reviewed the AI-generated code, not just accepted it
```

**Hands-on exercise:**
- Audit your current project for exposed secrets
- Run `npm audit` and fix any vulnerabilities
- Add git-secrets or a pre-commit hook that scans for API keys
- Practice: intentionally put a fake key in code, verify .gitignore catches it
- Review your last 5 AI-generated code changes — can you explain each one?

**Post-flight check:**
- Is your .env file properly configured and gitignored?
- Can you run a security audit on your project?
- Do you understand the 5 main threat categories?
- Have you reviewed (not just accepted) your AI-generated code?

---

### Mission 11: Shipping It — Going Live

**Objective:** Deploy your agent dashboard to the internet.

**Pre-flight briefing:**

Your app works locally. Now it needs to work for real. This mission covers deployment — getting your app on a URL that you (and potentially others) can access.

**Topics to cover:**
- Choosing a deployment platform (Vercel recommended)
- Setting environment variables in production
- Custom domains (optional)
- Monitoring and error tracking basics
- The difference between development and production

**What you will do:**
- Connect your GitHub repository to Vercel
- Set your environment variables in Vercel's dashboard
- Deploy with one click
- Test on a real URL
- Share it with someone

---

### Mission 12: Evolution — Where to Go From Here

**Objective:** Understand the landscape of possibilities and chart your next missions.

**Pre-flight briefing:**

You built an AI agent dashboard from scratch. You understand prompting, memory, security, deployment. But this is not the end — it is the beginning. This mission maps the frontier.

**Topics to cover:**

```
EXPANDING YOUR CREW
  Add more agents. Customize deeper. Build agents for
  specific projects, not just life domains.

ADVANCED MEMORY
  Vector databases for semantic search across memories.
  RAG (Retrieval-Augmented Generation) for feeding agents
  large document collections.

MCP INTEGRATIONS
  Connect your agents to real services:
  - Google Calendar (schedule sync)
  - Gmail (email drafting and reading)
  - Notion (knowledge base)
  - Slack (team communication)
  - Financial APIs (spending tracking)

MOBILE AND VOICE
  Build a mobile companion for quick check-ins.
  Add voice input for hands-free agent conversations.

ANALYTICS AND PATTERNS
  Build the @analyst agent to spot behavioral patterns.
  Create weekly and monthly reports.
  Visualize trends over time.

SHARING WITH OTHERS
  Turn your Odyssey into a template others can fork.
  Build a community around personal AI systems.
  Contribute agents back to the open-source repo.

THE BIGGER PICTURE
  You now understand how AI applications work.
  You can build tools, prototypes, and products.
  You can talk to engineers in their language.
  You can evaluate AI tools and vendors critically.
  You are no longer a consumer of AI — you are a builder.
```

---

## The Open-Source Repository Plan

### What We Provide

```
odyssey-starter/
│
├── README.md                 ← Getting started guide
├── LICENSE                   ← MIT (open source)
├── .env.example              ← Template for environment variables
├── .gitignore                ← Pre-configured (includes .env)
│
├── docs/                     ← The course missions
│   ├── mission-01.md
│   ├── mission-02.md
│   ├── ...
│   └── mission-12.md
│
├── templates/                ← Starter files people customize
│   ├── config/
│   │   ├── about-me.md       ← Template with prompts to fill in
│   │   ├── goals.md
│   │   ├── preferences.md
│   │   ├── prompt-rules.md
│   │   └── daily-questions.md
│   │
│   └── agents/
│       ├── commander.md      ← Full 8-part agent definition
│       ├── therapist.md
│       ├── strategist.md
│       ├── fitness.md
│       ├── productivity.md
│       └── AGENT-TEMPLATE.md ← Blank template for custom agents
│
├── src/                      ← Starter application code
│   ├── app/                  ← Basic React app structure
│   ├── components/           ← Chat, sidebar, memory viewer
│   ├── lib/                  ← API helpers, memory system
│   └── styles/               ← Galactic Minimal theme
│
├── security/                 ← Security resources
│   ├── SECURITY-CHECKLIST.md
│   ├── pre-commit-hook.sh    ← Scans for secrets before commit
│   └── audit-script.sh       ← Runs dependency audit
│
└── examples/                 ← Completed example configurations
    ├── entrepreneur/         ← The Odyssey example
    ├── student/              ← Student-focused agent crew
    ├── creative/             ← Artist/writer agent crew
    └── fitness/              ← Health-focused agent crew
```

### How People Use It

```
Step 1: Fork the repository on GitHub
Step 2: Clone it to their computer
Step 3: Follow the missions in order (docs/ folder)
Step 4: Customize their config files (who they are, their goals)
Step 5: Choose and customize their agents
Step 6: Build and deploy their personal dashboard
Step 7: Use it daily. Let the system learn them.
Step 8: Share their custom agents back with the community
```

---

## Content Delivery Options

Where this course could live:

```
OPTION A: GitHub Repository + Markdown Docs
  Pros: Free, version controlled, community contributions
  Cons: Less polished experience for non-technical people
  Best for: Developer-adjacent audience

OPTION B: Interactive Website (built with the course's own tools)
  Pros: Beautiful, trackable progress, embedded exercises
  Cons: More work to build
  Best for: Broader audience
  Could be built with: Next.js + Supabase + Vercel

OPTION C: Hybrid
  GitHub repo for the code and templates.
  Simple website for the course content with progress tracking.
  Community Discord or forum for questions and sharing.
  This is the recommended approach.

OPTION D: Platform (Skilljar, Teachable, etc.)
  Pros: Built-in progress tracking, certificates, payments
  Cons: Less control, costs money, less community feel
  Best for: If you want to charge for the course
```

---

## Marketing and Community

```
THE HOOK:
  "Build your own AI mission control in a weekend.
   No coding experience required."

THE PROMISE:
  By the end, you will have a personalized AI agent system
  that remembers your goals, tracks your patterns, and
  helps you make better decisions every day.

THE DIFFERENTIATOR:
  This is not "learn to use ChatGPT." This is "build something
  real that runs on your computer and serves you daily."
  Security-first. Open-source. Yours to own and customize.

COMMUNITY:
  GitHub Discussions for questions and sharing
  A "show your Odyssey" channel for people to share their builds
  Monthly "agent drop" where community members share custom agents
  Weekly prompt challenge to improve prompting skills
```

---

## Measuring Success

```
How we know this course works:

  Completion rate:
    What % of people who start finish all 12 missions?
    Target: 40%+ (most online courses are under 10%)

  Build rate:
    What % of people deploy a working dashboard?
    Target: 60%+ of completers

  Daily usage:
    What % of people use their dashboard daily after 30 days?
    Target: 25%+ of completers

  Community engagement:
    How many custom agents are shared back?
    How many forks of the starter repo?
    How active are discussions?

  Qualitative:
    "I built something real."
    "I understand AI now."
    "I feel empowered, not intimidated."
    These matter more than any number.
```

---

## Timeline for Building the Course

```
Month 1:
  Write all 12 mission documents
  Build the starter repository
  Create agent templates
  Record 2-3 walkthrough videos (optional)
  Soft launch to 10 beta testers

Month 2:
  Incorporate beta feedback
  Polish the starter code
  Build the course website (if going hybrid)
  Write the security module thoroughly
  Create the example configurations

Month 3:
  Public launch
  Promote on Twitter/LinkedIn/Reddit
  Host a live "build your Odyssey" workshop
  Start community channels
  Iterate based on real user feedback
```

---

*Launch Manual — because the best way to learn is to build something that matters to you.*
