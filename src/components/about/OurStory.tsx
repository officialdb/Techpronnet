"use client";

import { CheckCircle2, History } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export function OurStory() {
  const milestones = [
    {
      year: "2019",
      title: "Founding & Systems Architecture",
      subtitle: "The Genesis of Techpronnet",
      description:
        "Techpronnet Technologies was founded with a singular conviction: growing businesses deserve software that conforms to their unique operational DNA, not the other way around. We began by engineering tailored internal tools and custom business systems for regional commerce and service providers.",
      takeaway: "Established high-reliability development standards and client-first engineering.",
    },
    {
      year: "2021",
      title: "Enterprise Workflows & Unified Portals",
      subtitle: "Scaling Operational Capabilities",
      description:
        "As client operations matured, the challenge shifted from building isolated software to unifying fragmented ecosystems. We broadened our practice to include cross-platform mobile apps, customer self-service portals, and robust automated workflow engines that connected existing tools into synchronized business pipelines.",
      takeaway: "Eliminated thousands of hours of manual data entry for growing teams.",
    },
    {
      year: "2023",
      title: "Serverless Cloud & Resilient Data Engines",
      subtitle: "Architectural Evolution",
      description:
        "To deliver sub-second response times and zero-maintenance reliability, we modernized our engineering stack around modern serverless cloud infrastructure, reactive frontends, and managed Postgres databases (including Neon). This gave our clients enterprise-grade performance without enterprise operational bloat.",
      takeaway: "Achieved sub-100ms global query execution and 99.9% uptime across managed systems.",
    },
    {
      year: "2025 – Present",
      title: "End-to-End Digital Engineering",
      subtitle: "The Modern Techpronnet Partner",
      description:
        "Today, Techpronnet serves organizations across Healthcare, Logistics, Commerce, and Professional Services. We operate as an embedded senior technology partner, delivering everything from user-facing web portals to multi-warehouse automation pipelines, accompanied by dedicated ongoing maintenance and SLA-backed support.",
      takeaway: "Continuously helping forward-looking businesses scale with confidence.",
    },
  ];

  return (
    <section id="story" className="section-space border-b border-line bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <FadeIn direction="up">
              <Badge variant="outline" className="mb-4 uppercase tracking-[.14em] text-[10px] sm:text-xs font-semibold text-muted bg-sand border-line py-1 px-3">
                Our Genesis & Evolution
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
                Built to solve real business bottlenecks.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
                Most software either forces your business into someone else&apos;s rigid template or is built so hastily that it crumbles under growth. Techpronnet was created to deliver the middle path: software engineered with architectural rigor, intuitive simplicity, and deep alignment with how you actually operate.
              </p>

              <div className="mt-8 pt-6 border-t border-line space-y-4 text-sm text-muted">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-4.5 text-navy shrink-0 mt-0.5" />
                  <span>Founded in 2019 with an unwavering focus on durability.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-4.5 text-navy shrink-0 mt-0.5" />
                  <span>100% in-house engineering and architectural leadership.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-4.5 text-navy shrink-0 mt-0.5" />
                  <span>Direct developer-to-client collaboration without bureaucratic layers.</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Chronological Timeline */}
          <div className="lg:col-span-7">
            <StaggerContainer className="space-y-8" staggerDelay={0.15}>
              {milestones.map((milestone, idx) => (
                <StaggerItem key={milestone.year}>
                  <Card className="border-line bg-paper shadow-2xs hover:border-navy/40 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <Badge variant="sage" className="font-mono text-xs px-2.5 py-0.5">
                          {milestone.year}
                        </Badge>
                        <span className="text-xs font-mono text-muted uppercase tracking-wider">
                          Milestone 0{idx + 1}
                        </span>
                      </div>
                      <CardTitle className="text-xl sm:text-2xl text-ink">
                        {milestone.title}
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm text-navy font-medium">
                        {milestone.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted leading-relaxed">
                        {milestone.description}
                      </p>
                      <Separator />
                      <div className="flex items-center gap-2 text-xs font-medium text-ink bg-sand/80 px-3 py-2 border border-line/60">
                        <History className="size-3.5 text-navy shrink-0" />
                        <span>Key Impact: {milestone.takeaway}</span>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
