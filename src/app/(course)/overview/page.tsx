import { trails } from "@/content/data/trails";
import TrailCard from "@/components/course/TrailCard";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Trail Overview",
  description:
    "Explore all four trails — from Rangitoto fundamentals to Aoraki agentic systems.",
  path: "/overview",
});

export default function OverviewPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-cream sm:text-4xl">
        Trail Overview
      </h1>
      <p className="mt-3 text-lg text-sand">
        Four trails, twenty lessons. Start at Rangitoto and climb your way to
        Aoraki. Each trail builds on the last.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {trails.map((trail) => (
          <TrailCard key={trail.id} trail={trail} />
        ))}
      </div>
    </div>
  );
}
