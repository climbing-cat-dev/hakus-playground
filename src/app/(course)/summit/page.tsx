import Image from "next/image";
import { Metadata } from "next";
import { getTrail } from "@/content/data/trails";
import { getLessonsByTrail, getLessonNumber } from "@/content/data/lessons";
import LessonCard from "@/components/course/LessonCard";

const trail = getTrail("summit")!;

export const metadata: Metadata = {
  title: trail.title,
  description: trail.description,
};

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
