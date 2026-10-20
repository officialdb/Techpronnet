import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "navy";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    let variantClasses = "bg-ink text-white hover:bg-navy";
    if (variant === "outline") {
      variantClasses = "border border-line bg-paper text-ink hover:border-ink hover:bg-sand";
    } else if (variant === "secondary") {
      variantClasses = "bg-sand text-ink hover:bg-sage";
    } else if (variant === "ghost") {
      variantClasses = "hover:bg-sand hover:text-ink";
    } else if (variant === "link") {
      variantClasses = "text-ink underline-offset-4 hover:underline";
    } else if (variant === "navy") {
      variantClasses = "bg-navy text-white hover:bg-ink";
    }

    let sizeClasses = "h-11 px-6 py-2.5";
    if (size === "sm") {
      sizeClasses = "h-9 px-4 text-xs";
    } else if (size === "lg") {
      sizeClasses = "h-13 px-8 text-base";
    } else if (size === "icon") {
      sizeClasses = "h-10 w-10 p-0";
    }

    return (
      <button
        ref={ref}
        className={cn(base, variantClasses, sizeClasses, className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
