"use client";

import Link from "next/link";
import { ArrowRight, Mail, Clock } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function AboutCTA() {
  return (
    <section className="section-space bg-sand border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="bg-white border border-line p-8 sm:p-14 lg:p-16">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8">
                <p className="eyebrow uppercase text-[11px] sm:text-xs font-semibold text-muted mb-3 sm:mb-4">
                  Start A Conversation
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
                  Ready to build software that moves your business forward?
                </h2>
                <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                  Whether you need a confidential client portal, a hospital management system, or custom workflow automation, our engineering team is ready to analyze your challenges and outline a practical path forward.
                </p>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5 text-navy shrink-0" />
                    <span>Direct response within 24 business hours</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    <span>No-obligation architecture consultation</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-3.5 lg:items-end">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-ink text-white px-8 py-4 text-sm font-medium hover:bg-navy transition-colors text-center w-full sm:w-auto"
                >
                  <span>Send Project Enquiry</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 border border-line bg-paper px-6 py-3.5 text-xs font-mono font-medium text-ink hover:border-ink transition-colors text-center w-full sm:w-auto"
                >
                  <span>Explore Our Work &amp; Case Studies</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                <a
                  href="mailto:contact@techpronnet.com"
                  className="inline-flex items-center justify-center gap-2 text-xs font-mono text-muted hover:text-ink transition-colors text-center"
                >
                  <Mail className="size-3 text-navy" />
                  <span>contact@techpronnet.com</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
