import { Metadata } from "next";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Resources",
  description: "Helpful links, tools, and learning resources for your AI journey.",
};

const resources = [
  {
    category: "Learn More",
    items: [
      {
        title: "Anthropic Skilljar",
        description: "Free courses on AI Fluency, Claude 101, and MCP introduction.",
        href: "https://anthropic.skilljar.com",
      },
      {
        title: "Claude Documentation",
        description: "Official Claude documentation and API reference.",
        href: "https://docs.anthropic.com",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        title: "Claude Desktop",
        description: "Download Claude Desktop for Mac, Windows, or Linux.",
        href: "https://claude.ai/download",
      },
      {
        title: "Connectors Directory",
        description: "Browse 50+ connectors for Claude Desktop.",
        href: "https://claude.ai/directory",
      },
      {
        title: "Claude Code",
        description: "Terminal-native agentic coding with Claude.",
        href: "https://docs.anthropic.com/en/docs/claude-code",
      },
    ],
  },
  {
    category: "Development",
    items: [
      {
        title: "Git",
        description: "Version control system — track changes and collaborate on code.",
        href: "https://git-scm.com",
      },
      {
        title: "GitHub",
        description: "Host your repositories and collaborate with others.",
        href: "https://github.com",
      },
      {
        title: "Next.js",
        description: "The React framework for the web.",
        href: "https://nextjs.org",
      },
      {
        title: "Vercel",
        description: "Deploy your web applications.",
        href: "https://vercel.com",
      },
      {
        title: "Supabase",
        description: "Open-source Firebase alternative for databases and auth.",
        href: "https://supabase.com",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-cream sm:text-4xl">
        Resources
      </h1>
      <p className="mt-3 text-lg text-sand">
        Helpful links and tools to continue your AI learning journey.
      </p>
      <div className="mt-8 flex flex-col gap-8">
        {resources.map((group) => (
          <section key={group.category}>
            <h2 className="mb-4 font-display text-xl font-bold text-cream">
              {group.category}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {group.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="h-full">
                    <h3 className="font-display font-semibold text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-sand">{item.description}</p>
                  </Card>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
