import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getLesson,
  getAdjacentLessons,
  getLessonsByTrail,
} from "@/content/data/lessons";
import { loadLesson } from "@/lib/mdx";
import { createMetadata } from "@/lib/metadata";
import LessonContent from "@/components/course/LessonContent";

const TRAIL_ID = "summit";

export function generateStaticParams() {
  return getLessonsByTrail(TRAIL_ID).map((l) => ({ lessonSlug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lessonSlug: string }>;
}): Promise<Metadata> {
  const { lessonSlug } = await params;
  const lesson = getLesson(TRAIL_ID, lessonSlug);
  if (!lesson) return {};
  return createMetadata({
    title: lesson.title,
    description: lesson.metaDescription,
    path: `/${TRAIL_ID}/${lessonSlug}`,
    trail: TRAIL_ID,
  });
}

export default async function SummitLessonPage({
  params,
}: {
  params: Promise<{ lessonSlug: string }>;
}) {
  const { lessonSlug } = await params;
  const lesson = getLesson(TRAIL_ID, lessonSlug);
  if (!lesson) notFound();

  const { prev, next } = getAdjacentLessons(TRAIL_ID, lessonSlug);
  const Content = await loadLesson(TRAIL_ID, lessonSlug);

  if (!Content) notFound();

  return (
    <LessonContent lesson={lesson} prev={prev} next={next}>
      <Content />
    </LessonContent>
  );
}
