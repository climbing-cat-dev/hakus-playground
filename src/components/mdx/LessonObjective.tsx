interface LessonObjectiveProps {
  items: string[];
}

export default function LessonObjective({ items }: LessonObjectiveProps) {
  return (
    <div className="my-6 rounded-xl border border-trail/20 bg-pebble/30 p-5">
      <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-paw">
        What you&apos;ll learn
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-sand">
            <span className="mt-0.5 text-basecamp">&#10003;</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
