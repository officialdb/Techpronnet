"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function AboutHero() {
  const stats = [
    {
      value: "2019",
      label: "Founded",
      note: "Continuous operational excellence",
    },
    {
      value: "45+",
      label: "Deployments",
      note: "Custom portals, apps & automations",
    },
    {
      value: "99.9%",
      label: "Uptime Delivered",
      note: "Resilient cloud architectures",
    },
    {
      value: "6",
      label: "Core Disciplines",
      note: "Full-stack software engineering",
    },
  ];

  return (
    <section className="border-b border-line bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <FadeIn direction="up">
            <p className="eyebrow uppercase text-[11px] sm:text-xs font-semibold text-muted mb-4 sm:mb-6">
              About Techpronnet Technologies · Established 2019
            </p>
            <h1 className="text-[34px] sm:text-5xl lg:text-[64px] leading-[1.08] tracking-[-.05em] sm:tracking-[-.055em] font-semibold text-ink">
              Software built around your business.
              <span className="block text-muted font-normal mt-1 sm:mt-2">
                Engineered with quiet precision.
              </span>
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
              Since 2019, Techpronnet Technologies has partnered with emerging enterprises and established organizations to eliminate operational friction, build resilient custom platforms, and automate mission-critical workflows.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 bg-ink text-white px-7 py-3.5 sm:py-4 text-sm font-medium hover:bg-navy transition-colors text-center w-full sm:w-auto"
              >
                Discuss a Project
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center justify-center gap-3 border border-line bg-white px-7 py-3.5 sm:py-4 text-sm font-medium text-ink hover:border-ink transition-colors text-center w-full sm:w-auto"
              >
                Our Story &amp; Approach
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Minimalist Linear Stats Strip */}
        <div className="mt-14 sm:mt-20 border-y border-line py-6 sm:py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={`${idx !== 0 ? "lg:border-l lg:border-line lg:pl-8" : ""}`}
            >
              <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-ink block">
                {s.value}
              </span>
              <span className="text-sm font-semibold text-ink mt-1 block">
                {s.label}
              </span>
              <span className="text-xs text-muted mt-0.5 block">
                {s.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
