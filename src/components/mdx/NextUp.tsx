import Button from "@/components/ui/Button";

interface NextUpProps {
  title: string;
  href: string;
  description?: string;
}

export default function NextUp({ title, href, description }: NextUpProps) {
  return (
    <div className="my-8 rounded-xl border border-paw/30 bg-paw/5 p-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-paw">
        Next Up
      </p>
      <h3 className="mt-2 font-display text-xl font-bold text-cream">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm text-sand">{description}</p>
      )}
      <div className="mt-4">
        <Button href={href}>Continue the trail &rarr;</Button>
      </div>
    </div>
  );
}
