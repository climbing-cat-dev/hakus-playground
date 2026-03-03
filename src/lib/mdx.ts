import { ComponentType } from "react";

export async function loadLesson(
  trailId: string,
  slug: string
): Promise<ComponentType | null> {
  try {
    const mod = await import(`@/content/lessons/${trailId}/${slug}.mdx`);
    return mod.default;
  } catch {
    return null;
  }
}
