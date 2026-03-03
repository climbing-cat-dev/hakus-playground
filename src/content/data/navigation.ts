import { trails } from "./trails";
import { getLessonsByTrail } from "./lessons";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export function getSidebarNav(): NavItem[] {
  return [
    {
      label: "Trail Overview",
      href: "/overview",
    },
    ...trails.map((trail) => ({
      label: trail.title,
      href: `/${trail.id}`,
      children: getLessonsByTrail(trail.id).map((lesson) => ({
        label: lesson.title,
        href: `/${trail.id}/${lesson.slug}`,
      })),
    })),
    {
      label: "Resources",
      href: "/resources",
    },
  ];
}
