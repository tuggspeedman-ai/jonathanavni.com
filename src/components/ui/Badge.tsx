import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "live" | "sunset" | "accent";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono tracking-wide",
        variant === "default" &&
          "bg-bg-tertiary text-text-secondary border border-border",
        variant === "live" &&
          "bg-success/10 text-success border border-success/20",
        variant === "sunset" &&
          "bg-accent/10 text-accent border border-accent/20",
        variant === "accent" &&
          "bg-accent/10 text-accent border border-accent/20",
        className
      )}
    >
      {variant === "live" && (
        <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
      )}
      {children}
    </span>
  );
}
