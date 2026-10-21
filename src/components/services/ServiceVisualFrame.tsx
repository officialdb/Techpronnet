"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Maximize2, X, Lock } from "lucide-react";

interface ServiceVisualFrameProps {
  imageSrc: string;
  imageAlt: string;
  serviceTag?: string;
  serviceTitle?: string;
  category: string;
  badge: string;
  caseStudyLink?: {
    client: string;
    href: string;
  };
}

export function ServiceVisualFrame({
  imageSrc,
  imageAlt,
  serviceTag,
  serviceTitle,
  category,
  badge,
  caseStudyLink,
}: ServiceVisualFrameProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const displayTitle = serviceTag
    ? `${serviceTag} · ${serviceTitle || category}`
    : category;

  return (
    <>
      <div className="w-full border border-line bg-white shadow-xs overflow-hidden rounded-xs group transition-all hover:border-navy/50">
        {/* Subtle Frame Header */}
        <div className="bg-[#F3F2EC] px-3.5 py-2.5 border-b border-line flex items-center justify-between gap-3 text-xs select-none">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="size-2.5 rounded-full bg-[#E2E1D9] border border-[#CAC9BF]" />
            <span className="size-2.5 rounded-full bg-[#E2E1D9] border border-[#CAC9BF]" />
            <span className="size-2.5 rounded-full bg-[#E2E1D9] border border-[#CAC9BF]" />
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-muted truncate">
            <Lock className="size-3 text-navy shrink-0" />
            <span className="truncate uppercase tracking-wider font-semibold text-ink">
              {displayTitle}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block font-mono text-[10px] text-navy font-medium bg-sand px-2 py-0.5 border border-line">
              {badge}
            </span>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="text-muted hover:text-ink p-0.5 transition-colors cursor-pointer"
              aria-label={`Enlarge image: ${imageAlt}`}
              title="View full resolution"
            >
              <Maximize2 className="size-3.5" />
            </button>
          </div>
        </div>

        {/* Visual Image Display */}
        <div
          className="relative w-full aspect-[16/10] overflow-hidden bg-sand/20 cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Case Study Reference Footer Strip Linking to /work */}
        {caseStudyLink && (
          <div className="px-4 py-2.5 border-t border-line bg-[#FAF9F5] flex items-center justify-between text-xs font-mono">
            <span className="text-muted text-[11px] truncate mr-2">
              Production Case Study:
            </span>
            <Link
              href={caseStudyLink.href}
              className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-navy hover:underline transition-colors shrink-0 text-[11px]"
            >
              <span>{caseStudyLink.client}</span>
              <ArrowUpRight className="size-3 text-navy" />
            </Link>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-white border border-line p-2 sm:p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-line mb-2 text-xs">
              <span className="font-mono text-ink font-semibold truncate">
                {displayTitle} — {badge}
              </span>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1 text-muted hover:text-ink cursor-pointer"
                aria-label="Close preview"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="max-h-[80vh] overflow-auto">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
