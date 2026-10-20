"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Zap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export function AboutHero() {
  const stats = [
    {
      value: "2019",
      label: "Founded & Established",
      description: "Over 5 years of continuous engineering excellence",
      icon: Award,
    },
    {
      value: "45+",
      label: "Solutions Delivered",
      description: "Custom portals, mobile apps & automated workflows",
      icon: Cpu,
    },
    {
      value: "99.9%",
      label: "Uptime Delivered",
      description: "High-availability cloud & serverless architectures",
      icon: ShieldCheck,
    },
    {
      value: "6",
      label: "Core Disciplines",
      description: "Full-stack web, mobile, automation & cloud APIs",
      icon: Zap,
    },
  ];

  return (
    <section className="border-b border-line bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <FadeIn direction="up">
            <Badge variant="outline" className="mb-6 uppercase tracking-[.16em] text-[10px] sm:text-xs font-semibold text-muted bg-sand border-line py-1 px-3">
              About Techpronnet Technologies · Est. 2019
            </Badge>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-[34px] sm:text-5xl lg:text-[62px] leading-[1.1] tracking-[-.05em] font-semibold text-ink">
              Software engineered with purpose and quiet precision.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 sm:mt-8 text-base sm:text-xl text-muted leading-relaxed max-w-2xl">
              Since 2019, Techpronnet Technologies has partnered with growing businesses and established organizations to eliminate operational friction, build resilient custom platforms, and automate mission-critical workflows.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-ink text-white px-7 py-3.5 sm:py-4 text-sm font-medium hover:bg-navy transition-colors text-center w-full sm:w-auto shadow-xs"
              >
                Discuss Your Requirements
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center justify-center gap-2 border border-line bg-white px-7 py-3.5 sm:py-4 text-sm font-medium text-ink hover:border-ink transition-colors text-center w-full sm:w-auto"
              >
                Explore Our Story
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Highlight Stats Grid */}
        <StaggerContainer
          className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          staggerDelay={0.1}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={stat.label}>
                <Card className="h-full border-line hover:border-navy/40 transition-colors shadow-2xs">
                  <CardContent className="p-5 sm:p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="size-9 bg-sand text-navy flex items-center justify-center mb-4">
                        <Icon className="size-4.5" />
                      </div>
                      <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-ink block">
                        {stat.value}
                      </span>
                      <h3 className="text-sm font-semibold text-ink mt-2">
                        {stat.label}
                      </h3>
                    </div>
                    <p className="text-xs text-muted mt-2 leading-relaxed">
                      {stat.description}
                    </p>
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
