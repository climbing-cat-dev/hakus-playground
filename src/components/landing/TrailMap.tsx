import Link from "next/link";
import { trails } from "@/content/data/trails";

export default function TrailMap() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-display text-3xl font-bold text-cream sm:text-4xl">
          Your Trail Map
        </h2>
        <p className="mt-3 text-center text-lg text-sand">
          Four trails from meadow to summit. Each builds on the last.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {trails.map((trail, index) => (
            <Link key={trail.id} href={`/${trail.id}`}>
              <div className="group flex items-start gap-6 rounded-xl border border-trail/20 bg-pebble/20 p-6 transition-all hover:border-trail/40 hover:bg-pebble/40">
                <div className="flex flex-col items-center">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
                    style={{ backgroundColor: trail.colorHex }}
                  >
                    {index + 1}
                  </div>
                  {index < trails.length - 1 && (
                    <div className="mt-2 h-6 w-0.5 bg-trail/30" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl font-bold text-cream group-hover:text-paw transition-colors">
                      {trail.title}
                    </h3>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                      style={{ backgroundColor: trail.colorHex + "40" }}
                    >
                      {trail.terrain}
                    </span>
                  </div>
                  <p className="mt-2 text-sand">{trail.description}</p>
                  <p className="mt-2 text-sm text-dust">
                    {trail.lessonCount} lessons
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
