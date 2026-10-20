"use client";

import { Check, Search, Code2, ShieldAlert, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export function AboutProcessTimeline() {
  const steps = [
    {
      step: "01",
      name: "Discovery & Architecture",
      icon: Search,
      duration: "Week 1",
      description:
        "We dissect your existing processes, data flows, and team bottlenecks. We draft precise schema models, technical specifications, and milestones before writing a single line of code.",
      highlights: [
        "Domain & Database Modeling",
        "Wireframes & Architecture Spec",
        "Clear Scope & Milestone Agreement",
      ],
    },
    {
      step: "02",
      name: "Iterative Engineering Sprints",
      icon: Code2,
      duration: "Weeks 2 – 5",
      description:
        "We build in rapid, two-week cycles with functional staging environments. You test real software each week, giving immediate feedback while progress remains transparent.",
      highlights: [
        "Weekly Working Preview Deployments",
        "Type-Safe Frontend & Backend Logic",
        "Continuous Direct Team Feedback",
      ],
    },
    {
      step: "03",
      name: "Hardening & Stress Testing",
      icon: ShieldAlert,
      duration: "Week 6",
      description:
        "Before production release, we simulate peak load, execute end-to-end user journeys, audit security configurations, and test across all mobile and desktop screen sizes.",
      highlights: [
        "Responsive Breakpoint Audits",
        "Database Query & Index Tuning",
        "Security & Authentication Hardening",
      ],
    },
    {
      step: "04",
      name: "Launch & Operational Handover",
      icon: Rocket,
      duration: "Week 7+",
      description:
        "Zero-downtime production deployment to cloud infrastructure, complete with team onboarding, documentation handover, and active SLA-backed monitoring.",
      highlights: [
        "Zero-Downtime Cloud Cutover",
        "Admin Training & Documentation",
        "Proactive Performance Monitoring",
      ],
    },
  ];

  return (
    <section className="section-space border-b border-line bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <Badge variant="outline" className="mb-4 uppercase tracking-[.14em] text-[10px] sm:text-xs font-semibold text-muted bg-sand border-line py-1 px-3">
              Delivery Methodology
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
              The Techpronnet Process Timeline.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Predictable, disciplined, and transparent from the initial whiteboard session to post-launch scaling.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.step}>
                <Card className="h-full border-line bg-paper shadow-2xs hover:border-navy transition-colors flex flex-col justify-between">
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-10 bg-sand text-navy flex items-center justify-center">
                        <Icon className="size-5" />
                      </div>
                      <Badge variant="sage" className="font-mono text-[11px]">
                        {item.duration}
                      </Badge>
                    </div>
                    <span className="font-mono text-xs text-muted block mb-1">
                      PHASE {item.step}
                    </span>
                    <CardTitle className="text-lg sm:text-xl text-ink">
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 space-y-4">
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-3 border-t border-line/60 space-y-2">
                      {item.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-ink/80">
                          <Check className="size-3 text-navy mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
