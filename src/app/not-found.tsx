import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="text-6xl">🧶</div>
      <h1 className="mt-6 font-display text-4xl font-bold text-cream">
        Haku got lost!
      </h1>
      <p className="mt-3 max-w-md text-lg text-sand">
        This trail doesn&apos;t seem to lead anywhere. Let&apos;s get you back
        on the path.
      </p>
      <div className="mt-8">
        <Button href="/overview">Back to the trail</Button>
      </div>
    </div>
  );
}
