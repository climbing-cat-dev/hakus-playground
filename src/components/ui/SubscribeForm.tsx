"use client";

import { cn } from "@/lib/utils";

interface SubscribeFormProps {
  email: string;
  setEmail: (email: string) => void;
  status: "idle" | "loading" | "success" | "error";
  subscribe: (e: React.FormEvent) => void;
  className?: string;
}

export default function SubscribeForm({
  email,
  setEmail,
  status,
  subscribe,
  className,
}: SubscribeFormProps) {
  if (status === "success") {
    return (
      <p className={cn("text-sm font-semibold text-success", className)}>
        You&apos;re in! We&apos;ll keep you posted.
      </p>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={subscribe}
        className="flex flex-col gap-2 sm:flex-row"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="flex-1 rounded-xl border border-trail/30 bg-stone/40 px-4 py-2.5 text-sm text-cream placeholder:text-dust outline-none transition-colors focus:border-paw/50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-paw px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-paw/20 transition-colors hover:bg-paw/90 disabled:opacity-60 cursor-pointer"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-sm text-alert">
          Something went wrong — please try again.
        </p>
      )}
    </div>
  );
}
