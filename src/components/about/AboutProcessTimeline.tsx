"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function AboutProcessTimeline() {
  const steps = [
    {
      step: "01",
      name: "Discovery & Architecture",
      duration: "Week 1",
      description:
        "We dissect your existing processes, data flows, and team bottlenecks. We establish precise schema models, technical specifications, and milestones before writing a single line of code.",
      points: [
        "Domain & database modeling",
        "System architecture specification",
        "Clear scope and milestone agreement",
      ],
    },
    {
      step: "02",
      name: "Iterative Sprint Builds",
      duration: "Weeks 2 – 5",
      description:
        "We build in rapid, two-week cycles with functional staging environments. You test real software each week, giving immediate feedback while progress remains fully transparent.",
      points: [
        "Weekly working preview deployments",
        "Type-safe frontend & backend logic",
        "Continuous direct developer feedback",
      ],
    },
    {
      step: "03",
      name: "Hardening & Stress Testing",
      duration: "Week 6",
      description:
        "Before production release, we simulate peak load, audit security configurations, test edge cases across mobile and desktop breakpoints, and optimize database queries.",
      points: [
        "Responsive breakpoint audits (320px–1440px)",
        "Database query & index tuning",
        "Security & authentication verification",
      ],
    },
    {
      step: "04",
      name: "Deployment & Ongoing Care",
      duration: "Week 7+",
      description:
        "Zero-downtime production deployment to cloud infrastructure, complete with staff onboarding, documentation handover, and active SLA-backed monitoring.",
      points: [
        "Zero-downtime cloud cutover",
        "Admin training & documentation",
        "Proactive performance monitoring",
      ],
    },
  ];

  return (
    <section className="section-space border-b border-line bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <p className="eyebrow uppercase text-[11px] sm:text-xs font-semibold text-muted mb-4">
              Delivery Methodology
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
              Process timeline.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Predictable, disciplined, and transparent from initial discovery through to post-launch scaling.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <article key={item.step} className="pt-6 border-t border-line flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="font-bold text-ink">PHASE {item.step}</span>
                  <span className="text-navy bg-sand px-2 py-0.5 border border-line">{item.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2.5">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-line/60 space-y-1.5 text-xs text-muted">
                {item.points.map((p) => (
                  <div key={p} className="flex items-start gap-2">
                    <Check className="size-3 text-navy mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
