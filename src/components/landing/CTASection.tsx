import Button from "@/components/ui/Button";
import EmailCapture from "@/components/landing/EmailCapture";

export default function CTASection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-5xl">🏔️</div>
        <h2 className="mt-4 font-display text-3xl font-bold text-cream sm:text-4xl">
          Ready to start climbing?
        </h2>
        <p className="mt-3 text-lg text-sand">
          Begin at Rangitoto with the fundamentals, or jump to whichever trail
          matches your experience. Haku will be there every step of the way.
        </p>
        <div className="mt-8">
          <Button href="/overview" size="lg">
            View all trails
          </Button>
        </div>
        <EmailCapture />
      </div>
    </section>
  );
}
