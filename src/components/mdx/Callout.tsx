import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "tip" | "warning" | "paw";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}

const variants: Record<CalloutVariant, { bg: string; border: string; icon: string; titleColor: string }> = {
  info: {
    bg: "bg-medium/10",
    border: "border-medium/30",
    icon: "💡",
    titleColor: "text-medium",
  },
  tip: {
    bg: "bg-basecamp/10",
    border: "border-basecamp/30",
    icon: "✅",
    titleColor: "text-basecamp",
  },
  warning: {
    bg: "bg-alert/10",
    border: "border-alert/30",
    icon: "⚠️",
    titleColor: "text-alert",
  },
  paw: {
    bg: "bg-paw/10",
    border: "border-paw/30",
    icon: "🐾",
    titleColor: "text-paw",
  },
};

export default function Callout({
  variant = "info",
  title,
  children,
}: CalloutProps) {
  const style = variants[variant];

  return (
    <div
      className={cn(
        "my-4 rounded-xl border-l-4 p-4",
        style.bg,
        style.border
      )}
    >
      {title && (
        <p className={cn("mb-2 flex items-center gap-2 font-display font-semibold", style.titleColor)}>
          <span>{style.icon}</span>
          {title}
        </p>
      )}
      <div className="text-sm text-sand [&>p]:my-1">{children}</div>
    </div>
  );
}
