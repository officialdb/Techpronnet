import React from "react";
import { Image as ImageIcon, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ImagePlaceholderProps {
  label: string;
  recommendedSize: string;
  description: string;
  aspectRatio?: "16/9" | "16/10" | "4/3" | "1/1" | "21/9";
  className?: string;
  badgeText?: string;
}

export function ImagePlaceholder({
  label,
  recommendedSize,
  description,
  aspectRatio = "16/10",
  className = "",
  badgeText = "Asset Placeholder",
}: ImagePlaceholderProps) {
  const aspectClass = {
    "16/9": "aspect-[16/9]",
    "16/10": "aspect-[16/10]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]",
  }[aspectRatio];

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden border border-line bg-gradient-to-b from-[#F5F4EF] to-sand p-6 flex flex-col justify-between select-none group transition-all hover:border-navy/40 ${className}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#C5C7BC 1px, transparent 1px), radial-gradient(#C5C7BC 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      />

      {/* Top bar with Badge and dimensions */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <Badge variant="outline" className="bg-white/80 border-line text-navy text-[11px] gap-1.5 shadow-2xs">
          <Sparkles className="w-3 h-3 text-navy" />
          <span>{badgeText}</span>
        </Badge>
        <span className="font-mono text-[11px] text-muted tracking-tight">
          {recommendedSize}
        </span>
      </div>

      {/* Center content icon and label */}
      <div className="relative z-10 my-auto text-center px-4 py-3">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white border border-line text-navy mb-3 shadow-xs group-hover:scale-105 transition-transform">
          <ImageIcon className="w-6 h-6" />
        </div>
        <h4 className="font-semibold text-ink text-sm sm:text-base tracking-tight mb-1">
          {label}
        </h4>
        <p className="text-xs text-muted max-w-sm mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom technical coordinate footer */}
      <div className="relative z-10 pt-2 border-t border-line/60 flex items-center justify-between text-[10px] text-muted font-mono">
        <span>FORMAT: WebP / PNG</span>
        <span className="text-navy font-semibold uppercase">Pending Production Asset</span>
      </div>
    </div>
  );
}
