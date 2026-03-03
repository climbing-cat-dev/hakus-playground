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

export const headerNav: NavItem[] = [
  { label: "Overview", href: "/overview" },
  { label: "Basecamp", href: "/basecamp" },
  { label: "Easy Trail", href: "/easy-trail" },
  { label: "Medium Trail", href: "/medium-trail" },
  { label: "Summit", href: "/summit" },
];
