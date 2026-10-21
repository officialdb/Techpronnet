"use client";

import { FadeIn } from "@/components/MotionWrapper";
import { Target, Compass, Check } from "lucide-react";

export function MissionVision() {
  return (
    <section className="section-space border-b border-[#E5E7EB] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-3">
              Guiding Directives
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E]">
              Mission &amp; Vision
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Every system we engineer and every line of code we ship is anchored by two fundamental guiding principles.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Mission Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xs hover:border-[#8EDE35] transition-all">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="size-11 rounded-xl bg-[#181B1E] text-[#8EDE35] flex items-center justify-center">
                  <Target className="size-5" />
                </div>
                <span className="font-mono text-xs uppercase text-[#4D9218] font-bold tracking-wider">
                  Our Mission
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#181B1E] mb-4 leading-snug">
                To engineer software that removes friction and fuels sustainable business momentum.
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We build purpose-driven software and intelligent automation that eliminate operational chaos, elevate customer experiences, and free teams to focus on high-value business outcomes.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB] space-y-3 text-xs sm:text-sm text-[#181B1E]/80">
              <div className="flex items-start gap-2.5">
                <Check className="size-3.5 text-[#4D9218] shrink-0 mt-0.5" />
                <span>Replace manual tasks with unified, automated workflows.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="size-3.5 text-[#4D9218] shrink-0 mt-0.5" />
                <span>Deliver dependable, robust architectures designed for long-term growth.</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xs hover:border-[#8EDE35] transition-all">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="size-11 rounded-xl bg-[#181B1E] text-[#8EDE35] flex items-center justify-center">
                  <Compass className="size-5" />
                </div>
                <span className="font-mono text-xs uppercase text-[#4D9218] font-bold tracking-wider">
                  Our Vision
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#181B1E] mb-4 leading-snug">
                To be the trusted technology backbone for organizations demanding uncompromising quality.
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We aspire to be the long-term engineering partner that organizations rely on when digital stability, continuous performance, and transparent communication matter most.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB] space-y-3 text-xs sm:text-sm text-[#181B1E]/80">
              <div className="flex items-start gap-2.5">
                <Check className="size-3.5 text-[#4D9218] shrink-0 mt-0.5" />
                <span>Prioritize durability, maintainability, and data security above trends.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="size-3.5 text-[#4D9218] shrink-0 mt-0.5" />
                <span>Establish lasting client partnerships where software compounds in value.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
