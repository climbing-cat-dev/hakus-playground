"use client";

import { useState } from "react";

type SubscribeStatus = "idle" | "loading" | "success" | "error";

export function useSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubscribeStatus>("idle");

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) {
        const data = await res.json();
        if (data.error === "already_subscribed") {
          setStatus("success");
          setEmail("");
          return;
        }
        throw new Error();
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return { email, setEmail, status, subscribe };
}
