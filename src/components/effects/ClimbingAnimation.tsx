"use client";

import { useEffect, useState } from "react";

export default function ClimbingAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  if (reducedMotion) return null;

  const maxScroll =
    typeof document !== "undefined"
      ? document.documentElement.scrollHeight - window.innerHeight
      : 1;
  const progress = Math.min(scrollY / Math.max(maxScroll, 1), 1);

  return (
    <div
      className="fixed right-4 z-40 hidden text-2xl transition-none lg:block"
      style={{
        bottom: `${10 + progress * 70}vh`,
      }}
      aria-hidden="true"
    >
      🐱
    </div>
  );
}
