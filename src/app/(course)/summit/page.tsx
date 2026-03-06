import Image from "next/image";
import { getTrail, difficultySymbols } from "@/content/data/trails";
import { createMetadata } from "@/lib/metadata";
import { getLessonsByTrail, getLessonNumber } from "@/content/data/lessons";
import LessonCard from "@/components/course/LessonCard";

const trail = getTrail("summit")!;

export const metadata = createMetadata({
  title: trail.title,
  description: trail.metaDescription,
  path: "/summit",
  trail: "summit",
});

export default function SummitPage() {
  const lessons = getLessonsByTrail("summit");

  return (
    <div data-trail="summit">
      <div className="relative mb-4 h-40 overflow-hidden rounded-xl">
        <Image src={trail.image} alt={trail.title} fill className="object-cover" style={{ objectPosition: trail.imagePosition }} />
      </div>
      <h1 className="font-display text-3xl font-bold text-cream sm:text-4xl">
        {trail.title}
      </h1>
      <p className="mt-2 text-lg text-sand">{trail.description}</p>
      <p className="mt-2 text-sm font-semibold text-dust"><span className="mr-1">{difficultySymbols[trail.difficulty]}</span>{trail.difficulty} &middot; {trail.lessonCount} lessons</p>

      <div className="mt-6 rounded-xl border border-stone/30 bg-bark/50 p-5">
        <h2 className="font-display text-lg font-bold text-cream">
          By the end of this trail, you will:
        </h2>
        <ul className="mt-3 flex flex-col gap-2">
          {trail.takeaways.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-sand">
              <span className="mt-0.5 text-summit">&#10003;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.slug}
            lesson={lesson}
            number={getLessonNumber(lesson.trailId, lesson.order)}
          />
        ))}
      </div>
    </div>
  );
}
