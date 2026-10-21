"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Flag, Code2, PackageCheck, ArrowUpRight } from "lucide-react";

export function Process() {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    {
      num: "1",
      code: "01",
      title: "Understand & Scope",
      tag: "01 · Discovery",
      description:
        "We evaluate your operational workflows, isolate manual bottlenecks, define architectural requirements, and establish fixed upfront timelines.",
      icon: Flag,
      theme: "light",
    },
    {
      num: "2",
      code: "02",
      title: "Architect & Build",
      tag: "02 · Engineering",
      description:
        "We engineer high-performance web applications and mobile platforms using Next.js 16 SSR, serverless Neon Postgres, and resilient event pipelines.",
      icon: Code2,
      theme: "dark",
    },
    {
      num: "3",
      code: "03",
      title: "Deploy & Support",
      tag: "03 · Production",
      description:
        "We execute zero-downtime cuts, configure automated encrypted daily backups, train your operational team, and provide direct SLA engineering support.",
      icon: PackageCheck,
      theme: "light",
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#E5E7EB] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Section Header matching reference image */}
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

        {/* 2. Desktop Undulating Wave Flow (Carefully calibrated to prevent line collision) */}
        <div className="hidden md:block relative w-full h-[620px] select-none">
          {/* Continuous Smooth Fluid Bezier Wave SVG Line */}
          <svg
            className="w-full h-full absolute inset-0 pointer-events-none"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Subtle soft backdrop curve */}
            <path
              d="M 40 330 C 90 335, 130 340, 180 340 C 290 340, 380 140, 500 140 C 590 140, 650 260, 710 260 C 750 260, 780 220, 820 220 C 860 220, 910 230, 960 235"
              stroke="#E5E7EB"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Foreground Brand Flow Line */}
            <path
              d="M 40 330 C 90 335, 130 340, 180 340 C 290 340, 380 140, 500 140 C 590 140, 650 260, 710 260 C 750 260, 780 220, 820 220 C 860 220, 910 230, 960 235"
              stroke="#181B1E"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>

          {/* STEP 1: Content Block (Positioned ABOVE Node 1) */}
          <div className="absolute top-[6%] left-[5%] w-[30%] z-10 group">
            <div className="flex items-start justify-between gap-4">
              <div>
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

              {/* Step 1 Numeral: Paired side-by-side with title matching reference */}
              <span className="text-6xl sm:text-7xl font-black font-mono text-gray-200 select-none shrink-0 leading-none group-hover:text-[#8EDE35] transition-colors">
                1
              </span>
            </div>
          </div>

          {/* STEP 1: Floating Node on Curve (Low point at 18% X, 68% Y) */}
          <div
            className="absolute left-[18%] top-[68%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            onClick={() => setActiveStep(1)}
          >
            <div className="size-16 rounded-2xl bg-white border-2 border-[#E5E7EB] shadow-lg flex items-center justify-center group-hover:border-[#8EDE35] group-hover:scale-110 active:scale-95 transition-all duration-200">
              <div className="size-10 rounded-xl bg-[#8EDE35] text-[#181B1E] flex items-center justify-center font-bold shadow-xs">
                <Flag className="size-5" />
              </div>
            </div>
          </div>

          {/* STEP 2: Floating Node on Curve (High Crest at 50% X, 28% Y) */}
          <div
            className="absolute left-[50%] top-[28%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            onClick={() => setActiveStep(2)}
          >
            <div className="size-16 rounded-2xl bg-[#181B1E] border-2 border-[#2D333B] shadow-xl flex items-center justify-center group-hover:border-[#8EDE35] group-hover:scale-110 active:scale-95 transition-all duration-200">
              <div className="size-10 rounded-xl bg-white/10 text-[#8EDE35] border border-white/15 flex items-center justify-center font-bold">
                <Code2 className="size-5" />
              </div>
            </div>
          </div>

          {/* STEP 2: Content Block (Directly centered under Node 2 peak icon) */}
          <div className="absolute top-[41%] left-1/2 -translate-x-1/2 w-[30%] z-10 text-center flex flex-col items-center group">
            {/* Step 2 Numeral: Placed directly under the Node 2 icon, before the title */}
            <span className="text-6xl sm:text-7xl font-black font-mono text-gray-200 select-none leading-none mb-2.5 group-hover:text-[#8EDE35] transition-colors">
              2
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-1">
              02 · Engineering
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#181B1E] tracking-tight mb-2">
              Architect &amp; Build
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-xs mx-auto">
              We engineer high-performance web applications and mobile platforms using Next.js 16 SSR, serverless Neon Postgres, and resilient event pipelines.
            </p>
          </div>

          {/* STEP 3: Floating Node on Curve (At 82% X, 44% Y) */}
          <div
            className="absolute left-[82%] top-[44%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            onClick={() => setActiveStep(3)}
          >
            <div className="size-16 rounded-2xl bg-white border-2 border-[#E5E7EB] shadow-lg flex items-center justify-center group-hover:border-[#8EDE35] group-hover:scale-110 active:scale-95 transition-all duration-200">
              <div className="size-10 rounded-xl bg-[#8EDE35] text-[#181B1E] flex items-center justify-center font-bold shadow-xs">
                <PackageCheck className="size-5" />
              </div>
            </div>
          </div>

          {/* STEP 3: Content Block (Positioned BELOW Node 3) */}
          <div className="absolute top-[60%] left-[69%] w-[29%] z-10 group">
            <div className="flex items-start justify-between gap-4">
              <div>
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

              {/* Step 3 Numeral: Paired side-by-side with title matching reference */}
              <span className="text-6xl sm:text-7xl font-black font-mono text-gray-200 select-none shrink-0 leading-none group-hover:text-[#8EDE35] transition-colors">
                3
              </span>
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
                  <div className="flex items-start justify-between gap-3">
                    <div>
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
                    <span className="text-5xl font-black font-mono text-gray-200 select-none shrink-0 leading-none">
                      {s.num}
                    </span>
                  </div>
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
