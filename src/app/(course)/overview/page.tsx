import { Metadata } from "next";
import { trails } from "@/content/data/trails";
import TrailCard from "@/components/course/TrailCard";

export const metadata: Metadata = {
  title: "Trail Overview",
  description:
    "Explore all four trails — from Basecamp fundamentals to Summit agentic systems.",
};

export default function OverviewPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-cream sm:text-4xl">
        Trail Overview
      </h1>
      <p className="mt-3 text-lg text-sand">
        Four trails, twenty lessons. Start at Basecamp and climb your way to the
        Summit. Each trail builds on the last.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {trails.map((trail) => (
          <TrailCard key={trail.id} trail={trail} />
        ))}
      </div>
    </div>
  );
}
