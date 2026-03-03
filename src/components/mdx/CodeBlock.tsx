"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  className?: string;
}

export default function CodeBlock({
  children,
  filename,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("group relative my-4 rounded-xl border border-trail/20 bg-earth", className)}>
      {filename && (
        <div className="flex items-center border-b border-trail/20 px-4 py-2 text-xs text-dust">
          {filename}
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code className="font-mono text-sand">{children}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute right-2 top-2 rounded-lg bg-stone/80 px-2 py-1 text-xs text-dust opacity-0 transition-opacity group-hover:opacity-100 hover:text-cream"
          aria-label="Copy code"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
