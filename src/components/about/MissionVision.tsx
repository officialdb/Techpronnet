"use client";

import { Compass, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/MotionWrapper";

export function MissionVision() {
  return (
    <section className="section-space border-b border-line bg-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <Badge variant="outline" className="mb-4 uppercase tracking-[.14em] text-[10px] sm:text-xs font-semibold text-muted bg-white border-line py-1 px-3">
              Guiding Directives
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
              Mission & Vision
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Every system we engineer and every line of code we ship is anchored by two fundamental guiding principles.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Mission Card */}
          <FadeIn direction="up" delay={0.1}>
            <Card className="h-full border-line bg-white shadow-xs flex flex-col justify-between">
              <CardHeader className="p-6 sm:p-10">
                <div className="size-11 bg-sand text-navy flex items-center justify-center mb-6">
                  <Target className="size-5.5" />
                </div>
                <Badge variant="outline" className="w-fit mb-3 text-[11px] font-mono tracking-wider">
                  PURPOSE & IMPACT
                </Badge>
                <CardTitle className="text-2xl sm:text-3xl tracking-tight text-ink mb-4">
                  Our Mission
                </CardTitle>
                <p className="text-base sm:text-lg text-ink font-medium leading-relaxed">
                  To empower ambitious organizations with purpose-built digital solutions and intelligent automation that eliminate operational chaos, elevate customer experiences, and unlock sustainable business momentum.
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-10 pt-0 border-t border-line/60">
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-navy font-semibold text-xs mt-0.5">01.</span>
                    <span>Replace fragmented, manual tasks with unified, automated workflows.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-navy font-semibold text-xs mt-0.5">02.</span>
                    <span>Design clean customer interfaces that convert and retain users.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-navy font-semibold text-xs mt-0.5">03.</span>
                    <span>Provide transparent, dependable technical execution from day one.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Vision Card */}
          <FadeIn direction="up" delay={0.2}>
            <Card className="h-full border-line bg-white shadow-xs flex flex-col justify-between">
              <CardHeader className="p-6 sm:p-10">
                <div className="size-11 bg-sage text-navy flex items-center justify-center mb-6">
                  <Compass className="size-5.5" />
                </div>
                <Badge variant="outline" className="w-fit mb-3 text-[11px] font-mono tracking-wider">
                  LONG-TERM ASPIRATION
                </Badge>
                <CardTitle className="text-2xl sm:text-3xl tracking-tight text-ink mb-4">
                  Our Vision
                </CardTitle>
                <p className="text-base sm:text-lg text-ink font-medium leading-relaxed">
                  To be the premier, trusted technology engineering partner for organizations that demand architectural longevity, unwavering digital reliability, and software that genuinely reflects how modern enterprises win.
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-10 pt-0 border-t border-line/60">
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-navy font-semibold text-xs mt-0.5">01.</span>
                    <span>Establish resilient software standards that outlast passing technological fads.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-navy font-semibold text-xs mt-0.5">02.</span>
                    <span>Champion cloud and data architectures that guarantee speed and data safety.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-navy font-semibold text-xs mt-0.5">03.</span>
                    <span>Foster relationships where clients view us as their permanent technological backbone.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
