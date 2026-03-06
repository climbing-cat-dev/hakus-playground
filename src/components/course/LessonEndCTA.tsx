"use client";

import { useState } from "react";
import { Lesson } from "@/content/data/lessons";
import { siteUrl } from "@/lib/metadata";
import { useSubscribe } from "@/hooks/useSubscribe";
import SubscribeForm from "@/components/ui/SubscribeForm";

export default function LessonEndCTA({ lesson }: { lesson: Lesson }) {
  const [copied, setCopied] = useState(false);
  const subscribeState = useSubscribe();

  const lessonUrl = `${siteUrl}/${lesson.trailId}/${lesson.slug}`;

  async function copyLink() {
    await navigator.clipboard.writeText(lessonUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mt-12 rounded-2xl border border-trail/20 bg-bark/60 p-6 sm:p-8">
      <div className="text-center">
        <p className="font-display text-xl font-bold text-cream sm:text-2xl">
          Enjoying the course?
        </p>
        <p className="mt-2 text-sand">
          If you found this helpful, please share it with friends and family —
          it really helps us out!
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={copyLink}
            className="inline-flex items-center gap-2 rounded-xl border border-trail/30 bg-stone/40 px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-paw/50 hover:text-paw cursor-pointer"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
      </div>

      <div className="my-6 border-t border-trail/15" />

      <div className="text-center">
        <p className="font-display text-lg font-bold text-cream">
          Stay in the loop
        </p>
        <p className="mt-1.5 text-sm text-sand">
          Get notified about new lessons, trails, and updates — no spam, just
          the good stuff.
        </p>
        <SubscribeForm {...subscribeState} className="mx-auto mt-4 max-w-md" />
      </div>
    </div>
  );
}
