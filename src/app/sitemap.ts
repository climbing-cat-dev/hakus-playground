import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
import { trails } from "@/content/data/trails";
import { getLessonsByTrail } from "@/content/data/lessons";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/overview`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const trailPages: MetadataRoute.Sitemap = trails.map((trail) => ({
    url: `${siteUrl}/${trail.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const lessonPages: MetadataRoute.Sitemap = trails.flatMap((trail) =>
    getLessonsByTrail(trail.id).map((lesson) => ({
      url: `${siteUrl}/${trail.id}/${lesson.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  return [...staticPages, ...trailPages, ...lessonPages];
}
