"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
    <section className="border-b border-[#E5E7EB] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <FadeIn direction="up">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-4 sm:mb-6">
              About Techpronnet Technologies · Established 2019
            </span>

            <h1 className="text-[38px] sm:text-6xl lg:text-[72px] leading-[1.06] tracking-[-.05em] font-extrabold text-[#181B1E]">
              Software built around{" "}
              <span className="block mt-1 sm:mt-2">
                <span className="bg-[#8EDE35] text-[#181B1E] px-3.5 py-0.5 rounded-xl inline-block shadow-xs">
                  your business.
                </span>
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
              Since 2019, Techpronnet Technologies has partnered with emerging enterprises and established organizations to eliminate operational friction, build resilient custom platforms, and automate mission-critical workflows.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#8EDE35] text-[#181B1E] font-bold px-8 py-4 rounded-xl text-sm hover:bg-[#7ECC28] active:scale-[0.98] transition-all duration-150 shadow-xs text-center w-full sm:w-auto"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center justify-center gap-2.5 bg-[#181B1E] text-white font-medium px-8 py-4 rounded-xl text-sm hover:bg-[#334655] active:scale-[0.98] transition-all duration-150 shadow-xs text-center w-full sm:w-auto"
              >
                <span>Our Story &amp; Approach</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Minimalist Linear Stats Cards */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs hover:border-[#8EDE35] transition-all"
            >
              <span className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-[#181B1E] block">
                {s.value}
              </span>
              <span className="text-sm font-bold text-[#181B1E] mt-2 block">
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
