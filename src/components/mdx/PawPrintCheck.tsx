interface PawPrintCheckProps {
  items: string[];
}

export default function PawPrintCheck({ items }: PawPrintCheckProps) {
  return (
    <div className="my-6 rounded-xl border border-paw/30 bg-paw/5 p-5">
      <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-paw">
        Paw Print Check
      </h3>
      <p className="mb-3 text-sm text-sand">
        Before moving on, make sure you can answer these:
      </p>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-sand">
            <span className="mt-0.5">🐾</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
