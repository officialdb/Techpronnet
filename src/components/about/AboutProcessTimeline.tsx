"use client";

import React, { useState } from "react";
import { Search, Code2, ShieldCheck, PackageCheck, Check } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function AboutProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    {
      step: "01",
      num: 1,
      name: "Discovery & Architecture",
      duration: "Week 1",
      tag: "01 · Week 1",
      description:
        "We dissect workflows, define precise database models, and establish fixed architectural milestones.",
      points: [
        "Domain & database modeling",
        "System architecture specification",
      ],
      icon: Search,
      theme: "light",
      xPercent: 15,
      yPercent: 68,
      position: "above",
    },
    {
      step: "02",
      num: 2,
      name: "Iterative Sprint Builds",
      duration: "Weeks 2 – 5",
      tag: "02 · Weeks 2–5",
      description:
        "We build in rapid 2-week cycles with staging deployments. You test working software every week.",
      points: [
        "Weekly working staging previews",
        "Type-safe frontend & backend logic",
      ],
      icon: Code2,
      theme: "dark",
      xPercent: 38,
      yPercent: 28,
      position: "below",
    },
    {
      step: "03",
      num: 3,
      name: "Hardening & Stress Testing",
      duration: "Week 6",
      tag: "03 · Week 6",
      description:
        "We simulate peak load, audit security parameters, and optimize Neon Postgres query execution.",
      points: [
        "Breakpoint & device audits",
        "Database query & index tuning",
      ],
      icon: ShieldCheck,
      theme: "light",
      xPercent: 62,
      yPercent: 68,
      position: "above",
    },
    {
      step: "04",
      num: 4,
      name: "Deployment & Ongoing Care",
      duration: "Week 7+",
      tag: "04 · Week 7+",
      description:
        "Zero-downtime cutover to cloud infrastructure, team onboarding, and continuous SLA monitoring.",
      points: [
        "Zero-downtime cloud cutover",
        "Dedicated SLA engineering support",
      ],
      icon: PackageCheck,
      theme: "dark",
      xPercent: 85,
      yPercent: 28,
      position: "below",
    },
  ];

  return (
    <section className="section-space border-b border-[#E5E7EB] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <FadeIn direction="up">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-3">
              Delivery Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#181B1E]">
              Process timeline.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Predictable, disciplined, and transparent from initial discovery through to post-launch scaling.
            </p>
          </FadeIn>
        </div>

        {/* 1. Desktop Undulating Continuous Data Flow Wave (Screens >= lg) */}
        <div className="hidden lg:block relative h-[640px] w-full my-6 select-none">
          {/* Continuous Harmonic SVG Wave */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 500"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Subtle soft backdrop curve */}
            <path
              d="M 40 340 C 90 340, 130 340, 180 340 C 270 340, 366 140, 456 140 C 552 140, 648 340, 744 340 C 840 340, 930 140, 1020 140 C 1070 140, 1110 140, 1160 140"
              stroke="#E5E7EB"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Foreground Brand Flow Line */}
            <path
              d="M 40 340 C 90 340, 130 340, 180 340 C 270 340, 366 140, 456 140 C 552 140, 648 340, 744 340 C 840 340, 930 140, 1020 140 C 1070 140, 1110 140, 1160 140"
              stroke="#181B1E"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>

          {/* STEP 1: Content Block (ABOVE Node 1 at X=15%, Y=68%) */}
          <div
            className="absolute top-[2%] left-[15%] -translate-x-1/2 w-[22%] z-10 text-center flex flex-col items-center group cursor-pointer"
            onClick={() => setActiveStep(1)}
          >
            <span className="text-5xl sm:text-6xl font-black font-mono text-gray-200 select-none leading-none mb-2 group-hover:text-[#8EDE35] transition-colors">
              1
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-1">
              01 · Week 1
            </span>
            <h3 className="text-lg font-extrabold text-[#181B1E] tracking-tight mb-2">
              Discovery &amp; Architecture
            </h3>
            <p className="text-xs text-muted leading-relaxed mb-3">
              We dissect workflows, define precise database models, and agree on upfront specs.
            </p>
            <div className="space-y-1.5 text-left w-full max-w-[210px] mx-auto pt-2 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-2 text-[11px] text-[#181B1E]/80">
                <Check className="size-3 text-[#4D9218] shrink-0" />
                <span>Domain &amp; database modeling</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#181B1E]/80">
                <Check className="size-3 text-[#4D9218] shrink-0" />
                <span>Architecture specification</span>
              </div>
            </div>
          </div>

          {/* STEP 1: Floating Node on Curve (Trough at 15% X, 68% Y) */}
          <div
            className="absolute left-[15%] top-[68%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            onClick={() => setActiveStep(1)}
          >
            <div className="size-16 rounded-2xl bg-white border-2 border-[#E5E7EB] shadow-lg flex items-center justify-center group-hover:border-[#8EDE35] group-hover:scale-110 active:scale-95 transition-all duration-200">
              <div className="size-10 rounded-xl bg-[#8EDE35] text-[#181B1E] flex items-center justify-center font-bold shadow-xs">
                <Search className="size-5" />
              </div>
            </div>
          </div>

          {/* STEP 2: Floating Node on Curve (Crest at 38% X, 28% Y) */}
          <div
            className="absolute left-[38%] top-[28%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            onClick={() => setActiveStep(2)}
          >
            <div className="size-16 rounded-2xl bg-[#181B1E] border-2 border-[#2D333B] shadow-xl flex items-center justify-center group-hover:border-[#8EDE35] group-hover:scale-110 active:scale-95 transition-all duration-200">
              <div className="size-10 rounded-xl bg-white/10 text-[#8EDE35] border border-white/15 flex items-center justify-center font-bold">
                <Code2 className="size-5" />
              </div>
            </div>
          </div>

          {/* STEP 2: Content Block (Centered directly BELOW Node 2 peak) */}
          <div
            className="absolute top-[41%] left-[38%] -translate-x-1/2 w-[22%] z-10 text-center flex flex-col items-center group cursor-pointer"
            onClick={() => setActiveStep(2)}
          >
            {/* Numeral placed directly under the icon before the title */}
            <span className="text-5xl sm:text-6xl font-black font-mono text-gray-200 select-none leading-none mb-2 group-hover:text-[#8EDE35] transition-colors">
              2
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-1">
              02 · Weeks 2–5
            </span>
            <h3 className="text-lg font-extrabold text-[#181B1E] tracking-tight mb-2">
              Iterative Sprint Builds
            </h3>
            <p className="text-xs text-muted leading-relaxed mb-3">
              We build in rapid 2-week cycles with staging deployments. You test working code weekly.
            </p>
            <div className="space-y-1.5 text-left w-full max-w-[210px] mx-auto pt-2 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-2 text-[11px] text-[#181B1E]/80">
                <Check className="size-3 text-[#4D9218] shrink-0" />
                <span>Weekly staging deployments</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#181B1E]/80">
                <Check className="size-3 text-[#4D9218] shrink-0" />
                <span>Type-safe logic &amp; APIs</span>
              </div>
            </div>
          </div>

          {/* STEP 3: Content Block (ABOVE Node 3 at X=62%, Y=68%) */}
          <div
            className="absolute top-[2%] left-[62%] -translate-x-1/2 w-[22%] z-10 text-center flex flex-col items-center group cursor-pointer"
            onClick={() => setActiveStep(3)}
          >
            <span className="text-5xl sm:text-6xl font-black font-mono text-gray-200 select-none leading-none mb-2 group-hover:text-[#8EDE35] transition-colors">
              3
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-1">
              03 · Week 6
            </span>
            <h3 className="text-lg font-extrabold text-[#181B1E] tracking-tight mb-2">
              Hardening &amp; Testing
            </h3>
            <p className="text-xs text-muted leading-relaxed mb-3">
              We simulate peak load, audit security configurations, and tune Neon Postgres queries.
            </p>
            <div className="space-y-1.5 text-left w-full max-w-[210px] mx-auto pt-2 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-2 text-[11px] text-[#181B1E]/80">
                <Check className="size-3 text-[#4D9218] shrink-0" />
                <span>Breakpoint &amp; stress testing</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#181B1E]/80">
                <Check className="size-3 text-[#4D9218] shrink-0" />
                <span>Database query tuning</span>
              </div>
            </div>
          </div>

          {/* STEP 3: Floating Node on Curve (Trough at 62% X, 68% Y) */}
          <div
            className="absolute left-[62%] top-[68%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            onClick={() => setActiveStep(3)}
          >
            <div className="size-16 rounded-2xl bg-white border-2 border-[#E5E7EB] shadow-lg flex items-center justify-center group-hover:border-[#8EDE35] group-hover:scale-110 active:scale-95 transition-all duration-200">
              <div className="size-10 rounded-xl bg-[#8EDE35] text-[#181B1E] flex items-center justify-center font-bold shadow-xs">
                <ShieldCheck className="size-5" />
              </div>
            </div>
          </div>

          {/* STEP 4: Floating Node on Curve (Crest at 85% X, 28% Y) */}
          <div
            className="absolute left-[85%] top-[28%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            onClick={() => setActiveStep(4)}
          >
            <div className="size-16 rounded-2xl bg-[#181B1E] border-2 border-[#2D333B] shadow-xl flex items-center justify-center group-hover:border-[#8EDE35] group-hover:scale-110 active:scale-95 transition-all duration-200">
              <div className="size-10 rounded-xl bg-white/10 text-[#8EDE35] border border-white/15 flex items-center justify-center font-bold">
                <PackageCheck className="size-5" />
              </div>
            </div>
          </div>

          {/* STEP 4: Content Block (Centered directly BELOW Node 4 peak) */}
          <div
            className="absolute top-[41%] left-[85%] -translate-x-1/2 w-[22%] z-10 text-center flex flex-col items-center group cursor-pointer"
            onClick={() => setActiveStep(4)}
          >
            {/* Numeral placed directly under the icon before the title */}
            <span className="text-5xl sm:text-6xl font-black font-mono text-gray-200 select-none leading-none mb-2 group-hover:text-[#8EDE35] transition-colors">
              4
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-1">
              04 · Week 7+
            </span>
            <h3 className="text-lg font-extrabold text-[#181B1E] tracking-tight mb-2">
              Deployment &amp; Care
            </h3>
            <p className="text-xs text-muted leading-relaxed mb-3">
              Zero-downtime cutover to cloud infrastructure, team onboarding, and continuous SLA care.
            </p>
            <div className="space-y-1.5 text-left w-full max-w-[210px] mx-auto pt-2 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-2 text-[11px] text-[#181B1E]/80">
                <Check className="size-3 text-[#4D9218] shrink-0" />
                <span>Zero-downtime cutover</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#181B1E]/80">
                <Check className="size-3 text-[#4D9218] shrink-0" />
                <span>Dedicated SLA engineering</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Mobile Responsive Vertical Flow (Screens < lg) */}
        <div className="block lg:hidden relative pl-6 space-y-10 border-l-2 border-[#181B1E] ml-4 my-8">
          {steps.map((s) => {
            const Icon = s.icon;
            const isDark = s.theme === "dark";

            return (
              <div key={s.step} className="relative pl-6">
                {/* Floating Node on Vertical Line */}
                <div className="absolute -left-[35px] top-0">
                  <div
                    className={`size-12 rounded-xl flex items-center justify-center shadow-md border ${
                      isDark
                        ? "bg-[#181B1E] text-[#8EDE35] border-[#2D333B]"
                        : "bg-white text-[#181B1E] border-[#E5E7EB]"
                    }`}
                  >
                    <Icon className="size-5" />
                  </div>
                </div>

                <div className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-2xl p-6 shadow-xs relative overflow-hidden">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-1">
                        PHASE {s.step} · {s.duration}
                      </span>
                      <h3 className="text-lg font-bold text-[#181B1E] mb-2">
                        {s.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                        {s.description}
                      </p>
                      <div className="space-y-1.5 text-xs text-muted pt-3 border-t border-[#E5E7EB]">
                        {s.points.map((p) => (
                          <div key={p} className="flex items-center gap-2 text-[11px] text-[#181B1E]/80">
                            <Check className="size-3 text-[#4D9218] shrink-0" />
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <span className="text-5xl font-black font-mono text-gray-200 select-none shrink-0 leading-none">
                      {s.num}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
