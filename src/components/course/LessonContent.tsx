import Link from "next/link";
import { Lesson } from "@/content/data/lessons";
import { getTrail } from "@/content/data/trails";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface LessonContentProps {
  lesson: Lesson;
  prev: Lesson | null;
  next: Lesson | null;
  children: React.ReactNode;
}

export default function LessonContent({
  lesson,
  prev,
  next,
  children,
}: LessonContentProps) {
  return (
    <article data-trail={lesson.trailId}>
      <div className="mb-8">
        <Link
          href={`/${lesson.trailId}`}
          className="text-sm text-dust hover:text-sand transition-colors"
        >
          &larr; Back to trail
        </Link>
        <div className="mt-3 flex items-center gap-3">
          <Badge trail={lesson.trailId}>
            {getTrail(lesson.trailId)?.title ?? lesson.trailId}
          </Badge>
          <span className="text-sm text-dust">{lesson.duration}</span>
        </div>
        <h1 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
          {lesson.title}
        </h1>
      </div>

      <div className="prose-haku">{children}</div>

      <nav className="mt-12 flex items-center justify-between border-t border-trail/20 pt-6">
        {prev ? (
          <Link
            href={`/${prev.trailId}/${prev.slug}`}
            className="text-sm text-sand hover:text-cream transition-colors"
          >
            &larr; {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Button href={`/${next.trailId}/${next.slug}`} size="sm">
            Next: {next.title} &rarr;
          </Button>
        ) : (
          <Button href="/overview" size="sm" variant="secondary">
            Back to Overview
          </Button>
        )}
      </nav>
    </article>
  );
}
