import Link from "next/link";
import Image from "next/image";
import { Trail, difficultySymbols } from "@/content/data/trails";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface TrailCardProps {
  trail: Trail;
}

const trailBorders: Record<string, string> = {
  basecamp: "hover:border-basecamp/50",
  "easy-trail": "hover:border-easy/50",
  "medium-trail": "hover:border-medium/50",
  summit: "hover:border-summit/50",
};

export default function TrailCard({ trail }: TrailCardProps) {
  return (
    <Link href={`/${trail.id}`}>
      <Card className={trailBorders[trail.id]}>
        <div className="relative mb-4 h-32 overflow-hidden rounded-lg">
          <Image
            src={trail.image}
            alt={trail.title}
            fill
            className="object-cover"
            style={{ objectPosition: trail.imagePosition }}
          />
        </div>
        <Badge trail={trail.id as "basecamp" | "easy-trail" | "medium-trail" | "summit"}>
          {trail.terrain}
        </Badge>
        <h2 className="mt-3 font-display text-xl font-bold text-cream">
          {trail.title}
        </h2>
        <p className="mt-2 text-sm text-sand">{trail.description}</p>
        <p className="mt-3 text-xs text-dust">
          <span className="mr-1">{difficultySymbols[trail.difficulty]}</span>
          {trail.difficulty} &middot; {trail.lessonCount} lessons
        </p>
      </Card>
    </Link>
  );
}
