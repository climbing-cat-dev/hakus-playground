import { cn } from "@/lib/utils";

type HakuPose = "standing" | "climbing" | "sleeping" | "celebrating" | "waving";

interface PixelHakuProps {
  pose?: HakuPose;
  size?: number;
  className?: string;
}

const poseEmojis: Record<HakuPose, string> = {
  standing: "🐱",
  climbing: "🧗",
  sleeping: "😺",
  celebrating: "🎉",
  waving: "👋",
};

export default function PixelHaku({
  pose = "standing",
  size = 64,
  className,
}: PixelHakuProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center",
        className
      )}
      style={{ width: size, height: size, fontSize: size * 0.6 }}
      aria-hidden="true"
    >
      <span className="select-none">{poseEmojis[pose]}</span>
    </div>
  );
}
