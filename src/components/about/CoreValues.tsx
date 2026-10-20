"use client";

import { Wrench, TrendingUp, Eye, HeartHandshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export function CoreValues() {
  const values = [
    {
      num: "01",
      title: "Pragmatic Craftsmanship",
      icon: Wrench,
      description:
        "We reject unnecessary complexity and vanity stacks. We choose proven, high-performance technologies, write clean and maintainable code, and build systems meant to run without intervention.",
    },
    {
      num: "02",
      title: "Business-First Thinking",
      icon: TrendingUp,
      description:
        "Code has zero value if it doesn't move the business needle. Every system, interface, and automation we engineer is calculated to save employee hours, eliminate errors, or delight end customers.",
    },
    {
      num: "03",
      title: "Radical Transparency",
      icon: Eye,
      description:
        "No hidden caveats, no technical gatekeeping, and no opaque billing. We provide clear roadmaps, weekly demonstrable builds, and complete client ownership of all intellectual property and data.",
    },
    {
      num: "04",
      title: "Enduring Stewardship",
      icon: HeartHandshake,
      description:
        "Deployment is day one, not the finish line. We establish proactive monitoring, perform ongoing security audits, and provide continuous improvements so your software evolves alongside your business.",
    },
  ];

  return (
    <section className="section-space border-b border-line bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <Badge variant="outline" className="mb-4 uppercase tracking-[.14em] text-[10px] sm:text-xs font-semibold text-muted bg-sand border-line py-1 px-3">
              The Techpronnet Standard
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
              Values that anchor our engineering.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              These four principles dictate how we write software, communicate with partners, and deliver long-term value.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <StaggerItem key={v.num}>
                <Card className="h-full border-line bg-paper hover:border-ink transition-colors shadow-2xs flex flex-col justify-between group">
                  <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="size-10 bg-sand text-navy flex items-center justify-center group-hover:bg-sage transition-colors">
                          <Icon className="size-5" />
                        </div>
                        <span className="font-mono text-xs text-muted font-semibold">
                          {v.num}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-ink tracking-tight mb-2.5">
                        {v.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {v.description}
                      </p>
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
