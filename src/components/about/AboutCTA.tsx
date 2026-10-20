"use client";

import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/MotionWrapper";

export function AboutCTA() {
  return (
    <section className="section-space bg-sand border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <Card className="border-line bg-white shadow-xs overflow-hidden">
            <CardContent className="p-8 sm:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-8">
                  <Badge variant="outline" className="mb-4 uppercase tracking-[.14em] text-[10px] sm:text-xs font-semibold text-muted bg-sand border-line py-1 px-3">
                    Start A Dialogue
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
                    Ready to build software that moves your business forward?
                  </h2>
                  <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                    Whether you need a bespoke customer portal, a connected mobile application, or enterprise workflow automation, our engineering team is ready to analyze your challenges and outline a practical path forward.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-4 text-navy shrink-0" />
                      <span>Response within 24 business hours</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="size-4 text-navy shrink-0" />
                      <span>No-obligation scope & architecture consultation</span>
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4 lg:items-end">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2.5 bg-ink text-white px-8 py-4 text-sm font-medium hover:bg-navy transition-colors text-center shadow-xs w-full sm:w-auto"
                  >
                    <span>Send Project Enquiry</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  <a
                    href="mailto:contact@techpronnet.com"
                    className="inline-flex items-center justify-center gap-2 border border-line bg-paper px-6 py-3.5 text-xs font-mono font-medium text-ink hover:border-ink transition-colors text-center w-full sm:w-auto"
                  >
                    <Mail className="size-3.5 text-navy" />
                    <span>Direct: contact@techpronnet.com</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
