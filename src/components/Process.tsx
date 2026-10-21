"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Flag, Code2, PackageCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function Process() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: "1",
      code: "01",
      title: "General Concept & Scope",
      tag: "Phase 01 · Discovery",
      description:
        "We evaluate your operational workflows, isolate manual bottlenecks, define architectural requirements, and establish fixed upfront timelines.",
      icon: Flag,
      theme: "light",
      // Desktop positions relative to curve:
      // Node 1 is at 20% X, 68% Y. Content sits ABOVE Node 1.
      contentStyle: "top-[8%] left-[6%] sm:left-[8%] w-[88%] sm:w-[28%]",
      nodeStyle: "left-[20%] top-[68%]",
    },
    {
      num: "2",
      code: "02",
      title: "Architecture & Build",
      tag: "Phase 02 · Engineering",
      description:
        "We engineer high-performance web applications and mobile software with Next.js 16 SSR, serverless Neon Postgres, and resilient event pipelines.",
      icon: Code2,
      theme: "dark",
      // Node 2 is at 52% X, 32% Y. Content sits BELOW Node 2.
      contentStyle: "top-[52%] left-[38%] w-[88%] sm:w-[28%]",
      nodeStyle: "left-[52%] top-[32%]",
    },
    {
      num: "3",
      code: "03",
      title: "Deploy & Support",
      tag: "Phase 03 · Launch & SLA",
      description:
        "We execute zero-downtime cuts, configure automated encrypted daily backups, train your operational team, and provide direct SLA engineering support.",
      icon: PackageCheck,
      theme: "light",
      // Node 3 is at 84% X, 48% Y. Content sits BELOW Node 3.
      contentStyle: "top-[64%] left-[70%] w-[88%] sm:w-[27%]",
      nodeStyle: "left-[84%] top-[48%]",
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#E5E7EB] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Section Header matching user reference image */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-[#8EDE35] rounded-full" />
            <span className="text-[#4D9218] font-mono text-xs font-semibold uppercase tracking-widest">
              How We Deliver
            </span>
            <span className="w-6 h-0.5 bg-[#8EDE35] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#181B1E] leading-[1.12]">
            A Clear Process. No Unnecessary{" "}
            <span className="bg-[#8EDE35] text-[#181B1E] px-3.5 py-0.5 rounded-xl inline-block shadow-xs">
              Complexity.
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Every deployment follows a transparent, disciplined execution wave from discovery to post-launch warranties.
          </p>
        </div>

        {/* 2. Desktop Undulating Wave Flow (Matching reference image) */}
        <div className="hidden md:block relative w-full h-[580px] select-none">
          {/* Continuous Smooth Bezier Wave SVG Line */}
          <svg
            className="w-full h-full absolute inset-0 pointer-events-none"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background subtle curve shadow */}
            <path
              d="M 50 320 C 110 335, 150 340, 200 340 C 310 340, 410 160, 520 160 C 600 160, 650 300, 690 300 C 740 300, 790 240, 840 240 C 890 240, 930 250, 970 255"
              stroke="#E5E7EB"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Foreground Brand Flow Line */}
            <path
              d="M 50 320 C 110 335, 150 340, 200 340 C 310 340, 410 160, 520 160 C 600 160, 650 300, 690 300 C 740 300, 790 240, 840 240 C 890 240, 930 250, 970 255"
              stroke="#181B1E"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>

          {/* Step 1: Content Block (ABOVE the node) */}
          <div className="absolute top-[6%] left-[6%] w-[29%] z-10 group">
            <div className="relative">
              {/* Giant Watermark Numeral */}
              <span className="absolute -top-10 -right-2 text-8xl font-black font-mono text-gray-200/70 select-none -z-10 transition-colors group-hover:text-[#8EDE35]/30">
                1
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-1.5">
                01 · Discovery
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#181B1E] tracking-tight mb-2">
                Understand &amp; Scope
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                We evaluate your operational workflows, isolate manual bottlenecks, define architectural requirements, and establish fixed upfront timelines.
              </p>
            </div>
          </div>

          {/* Step 1: Floating Hexagonal Node (Low point at 20% X, 68% Y) */}
          <div
            className="absolute left-[20%] top-[68%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            onClick={() => setActiveStep(1)}
          >
            <div className="size-16 rounded-2xl bg-white border-2 border-[#E5E7EB] shadow-lg flex items-center justify-center group-hover:border-[#8EDE35] group-hover:scale-110 active:scale-95 transition-all duration-200">
              <div className="size-10 rounded-xl bg-[#8EDE35] text-[#181B1E] flex items-center justify-center font-bold shadow-xs">
                <Flag className="size-5" />
              </div>
            </div>
          </div>

          {/* Step 2: Floating Hexagonal Node (High Crest at 52% X, 32% Y) */}
          <div
            className="absolute left-[52%] top-[32%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            onClick={() => setActiveStep(2)}
          >
            <div className="size-16 rounded-2xl bg-[#181B1E] border-2 border-[#2D333B] shadow-xl flex items-center justify-center group-hover:border-[#8EDE35] group-hover:scale-110 active:scale-95 transition-all duration-200">
              <div className="size-10 rounded-xl bg-white/10 text-[#8EDE35] border border-white/15 flex items-center justify-center font-bold">
                <Code2 className="size-5" />
              </div>
            </div>
          </div>

          {/* Step 2: Content Block (BELOW the node) */}
          <div className="absolute top-[48%] left-[38%] w-[29%] z-10 group">
            <div className="relative">
              {/* Giant Watermark Numeral */}
              <span className="absolute -top-8 -right-2 text-8xl font-black font-mono text-gray-200/70 select-none -z-10 transition-colors group-hover:text-[#8EDE35]/30">
                2
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-1.5">
                02 · Engineering
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#181B1E] tracking-tight mb-2">
                Architect &amp; Build
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                We engineer high-performance web applications and mobile platforms using Next.js 16 SSR, serverless Neon Postgres, and resilient event pipelines.
              </p>
            </div>
          </div>

          {/* Step 3: Floating Hexagonal Node (Mid-right at 84% X, 48% Y) */}
          <div
            className="absolute left-[84%] top-[48%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            onClick={() => setActiveStep(3)}
          >
            <div className="size-16 rounded-2xl bg-white border-2 border-[#E5E7EB] shadow-lg flex items-center justify-center group-hover:border-[#8EDE35] group-hover:scale-110 active:scale-95 transition-all duration-200">
              <div className="size-10 rounded-xl bg-[#8EDE35] text-[#181B1E] flex items-center justify-center font-bold shadow-xs">
                <PackageCheck className="size-5" />
              </div>
            </div>
          </div>

          {/* Step 3: Content Block (BELOW the node) */}
          <div className="absolute top-[62%] left-[70%] w-[28%] z-10 group">
            <div className="relative">
              {/* Giant Watermark Numeral */}
              <span className="absolute -top-8 -right-2 text-8xl font-black font-mono text-gray-200/70 select-none -z-10 transition-colors group-hover:text-[#8EDE35]/30">
                3
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-1.5">
                03 · Production
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#181B1E] tracking-tight mb-2">
                Deploy &amp; Support
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                We execute zero-downtime cuts, configure automated encrypted daily backups, train your operational team, and provide direct SLA engineering support.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Mobile Responsive Vertical Flow (For screens < 768px) */}
        <div className="block md:hidden relative pl-6 space-y-10 border-l-2 border-[#181B1E] ml-4 my-8">
          {steps.map((s) => {
            const Icon = s.icon;
            const isDark = s.theme === "dark";

            return (
              <div key={s.num} className="relative pl-6">
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

                <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs relative overflow-hidden">
                  <span className="absolute -top-2 right-2 text-6xl font-black font-mono text-gray-100 select-none -z-10">
                    {s.num}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-1">
                    {s.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#181B1E] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Bottom Footer Strip matching reference style */}
        <div className="pt-10 mt-10 border-t border-[#E5E7EB] flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-muted gap-4">
          <span className="text-center sm:text-left">
            Techpronnet Delivery Architecture · Established 2019
          </span>
          <Link
            href="/services"
            className="font-bold text-[#181B1E] hover:text-[#4D9218] transition-colors inline-flex items-center gap-1.5"
          >
            <span>Explore Pricing &amp; Service Scopes</span>
            <ArrowUpRight className="size-3.5 text-[#4D9218]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
