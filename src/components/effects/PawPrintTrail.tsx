interface PawPrintTrailProps {
  count?: number;
  className?: string;
}

export default function PawPrintTrail({
  count = 5,
  className,
}: PawPrintTrailProps) {
  return (
    <div className={className} aria-hidden="true">
      <div className="flex items-center gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className="text-trail/30 text-sm"
            style={{
              transform: `translateY(${i % 2 === 0 ? -2 : 2}px) rotate(${i % 2 === 0 ? -15 : 15}deg)`,
            }}
          >
            🐾
          </span>
        ))}
      </div>
    </div>
  );
}
