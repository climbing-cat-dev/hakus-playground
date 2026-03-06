"use client";

import { useSubscribe } from "@/hooks/useSubscribe";
import SubscribeForm from "@/components/ui/SubscribeForm";

export default function EmailCapture() {
  const subscribeState = useSubscribe();

  return (
    <div className="mt-10 mx-auto max-w-md">
      <p className="text-sm font-semibold text-cream">Stay updated</p>
      <p className="mt-1 text-sm text-dust">
        New lessons and updates — no spam, just the good stuff.
      </p>
      <SubscribeForm {...subscribeState} className="mt-3" />
    </div>
  );
}
