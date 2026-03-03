import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bark via-earth to-earth" />

      {/* Decorative mountains */}
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-64 bg-gradient-to-t from-stone/20 to-transparent" />

      <div className="text-6xl sm:text-8xl">🐱</div>

      <h1 className="mt-6 font-display text-4xl font-bold text-cream sm:text-6xl lg:text-7xl">
        Haku&apos;s{" "}
        <span className="text-paw">Playground</span>
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-sand sm:text-xl">
        A playful guide to AI — from understanding the basics to building
        agentic systems. No coding experience needed. Just curiosity and a
        sense of adventure.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/overview" size="lg">
          Start the climb
        </Button>
        <Button href="/basecamp" variant="secondary" size="lg">
          What is AI?
        </Button>
      </div>

      <div className="mt-12 flex items-center gap-6 text-sm text-dust">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-basecamp" />
          4 Trails
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-easy" />
          20 Lessons
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-medium" />
          Free & Open
        </span>
      </div>
    </section>
  );
}
