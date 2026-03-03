import Image from "next/image";
import Link from "next/link";
import { trails } from "@/content/data/trails";

export default function TrailMap() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl font-bold text-cream sm:text-4xl">
          Your Trail Map
        </h2>
        <p className="mt-3 text-center text-lg text-sand">
          Four trails from Rangitoto to Aoraki. Each builds on the last.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {trails.map((trail, index) => (
            <Link key={trail.id} href={`/${trail.id}`}>
              <div className="group flex flex-col gap-4 rounded-xl border border-trail/20 bg-pebble/20 p-5 transition-all hover:border-trail/40 hover:bg-pebble/40 sm:flex-row sm:items-center sm:gap-6">
                <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-48">
                  <Image
                    src={trail.image}
                    alt={trail.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: trail.imagePosition }}
                  />
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: trail.colorHex }}
                  >
                    {index + 1}
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
                    <p className="mt-1 text-sm text-sand">{trail.description}</p>
                    <p className="mt-1 text-xs text-dust">
                      {trail.lessonCount} lessons
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
