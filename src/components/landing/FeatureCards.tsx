import Card from "@/components/ui/Card";

const features = [
  {
    icon: "🌱",
    title: "No coding needed",
    description:
      "Start from zero. We explain everything in plain language before introducing any technical concepts.",
  },
  {
    icon: "🏗️",
    title: "Build real things",
    description:
      "By the end, you'll have built and deployed a real web application using AI-powered tools.",
  },
  {
    icon: "🎯",
    title: "At your own pace",
    description:
      "Each trail builds on the last. Take your time at Rangitoto or sprint to Aoraki.",
  },
  {
    icon: "🐾",
    title: "Guided by Haku",
    description:
      "Our adventurous cat mascot keeps things fun and helps you check your understanding along the way.",
  },
];

export default function FeatureCards() {
  return (
    <section className="px-4 py-20 bg-bark/50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-display text-3xl font-bold text-cream sm:text-4xl">
          Why This Course?
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} hover={false}>
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="mt-3 font-display text-lg font-bold text-cream">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-sand">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
