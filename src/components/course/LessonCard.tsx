import Link from "next/link";
import { Lesson } from "@/content/data/lessons";

interface LessonCardProps {
  lesson: Lesson;
  number: number;
}

const trailAccents: Record<string, string> = {
  basecamp: "border-l-basecamp",
  "easy-trail": "border-l-easy",
  "medium-trail": "border-l-medium",
  summit: "border-l-summit",
};

export default function LessonCard({ lesson, number }: LessonCardProps) {
  return (
    <Link href={`/${lesson.trailId}/${lesson.slug}`}>
      <div
        className={`rounded-lg border border-trail/20 border-l-4 ${trailAccents[lesson.trailId]} bg-pebble/30 p-4 transition-all hover:bg-pebble/60`}
      >
        <div className="flex items-start gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone text-sm font-bold text-sand">
            {number}
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-base font-semibold text-cream">
              {lesson.title}
            </h3>
            <p className="mt-1 text-sm text-sand line-clamp-2">
              {lesson.description}
            </p>
            <span className="mt-2 inline-block text-xs text-dust">
              {lesson.duration}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
