import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "sage" | "navy";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-none border px-2.5 py-0.5 text-xs font-medium tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2";

  let variantStyles = "border-transparent bg-ink text-white hover:bg-navy";
  if (variant === "secondary") {
    variantStyles = "border-line bg-sand text-ink hover:bg-sage";
  } else if (variant === "outline") {
    variantStyles = "border-line text-muted hover:border-ink hover:text-ink";
  } else if (variant === "sage") {
    variantStyles = "border-[#D6DCD0] bg-sage text-navy font-semibold";
  } else if (variant === "navy") {
    variantStyles = "border-navy bg-navy text-white";
  }

  return (
    <div className={cn(base, variantStyles, className)} {...props} />
  );
}

export { Badge };
