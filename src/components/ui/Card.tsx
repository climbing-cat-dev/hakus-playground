import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({
  className,
  hover = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-trail/30 bg-pebble/50 p-6",
        hover && "transition-all duration-200 hover:border-trail hover:bg-pebble/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
