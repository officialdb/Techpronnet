"use client";

import { FadeIn } from "@/components/MotionWrapper";

export function MissionVision() {
  return (
    <section className="section-space border-b border-line bg-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <p className="eyebrow uppercase text-[11px] sm:text-xs font-semibold text-muted mb-4">
              Guiding Directives
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
              Mission &amp; Vision
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Every system we engineer and every line of code we ship is anchored by two fundamental guiding principles.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-14">
          {/* Mission */}
          <div className="bg-white border border-line p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase text-navy font-semibold tracking-wider block mb-3">
                Our Mission
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink mb-5 leading-snug">
                To engineer software that removes friction and fuels sustainable business momentum.
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We build purpose-driven software and intelligent automation that eliminate operational chaos, elevate customer experiences, and free teams to focus on high-value business outcomes.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-line space-y-2 text-xs text-muted">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-navy font-bold">&bull;</span>
                <span>Replace manual tasks with unified, automated workflows.</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-navy font-bold">&bull;</span>
                <span>Deliver dependable, robust architectures designed for long-term growth.</span>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white border border-line p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase text-navy font-semibold tracking-wider block mb-3">
                Our Vision
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink mb-5 leading-snug">
                To be the trusted technology backbone for organizations demanding uncompromising quality.
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We aspire to be the long-term engineering partner that organizations rely on when digital stability, continuous performance, and transparent communication matter most.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-line space-y-2 text-xs text-muted">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-navy font-bold">&bull;</span>
                <span>Prioritize durability, maintainability, and data security above trends.</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-navy font-bold">&bull;</span>
                <span>Establish lasting client partnerships where software compounds in value.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
