import Image from "next/image";
import Button from "@/components/ui/Button";

const stats = [
  { label: "4 Trails", color: "bg-basecamp" },
  { label: "20 Lessons", color: "bg-easy" },
  { label: "Free & Open", color: "bg-medium" },
];

export default function HeroSection() {
  return (
    <section className="border-b border-trail/20 bg-bark/50 px-4 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="relative w-full max-w-md lg:max-w-xl">
            <Image
              src="/images/hero/haku-playground-hero.webp"
              alt="Haku the pixel cat looking up at a mountain trail with four colorful zones"
              width={800}
              height={450}
              className="rounded-2xl"
              priority
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-display text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
              Haku&apos;s{" "}
              <span className="text-paw">Playground</span>
            </h1>

            <p className="mt-4 max-w-xl text-lg text-sand">
              A playful guide to AI — climb New Zealand&apos;s iconic peaks from
              Rangitoto to Aoraki as you go from understanding the basics to
              building agentic systems. No coding experience needed.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button href="/overview" size="lg">
                Start the climb
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-dust lg:justify-start">
              {stats.map((stat) => (
                <span key={stat.label} className="flex items-center gap-1.5">
                  <span className={`h-2 w-2 rounded-full ${stat.color}`} />
                  {stat.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
