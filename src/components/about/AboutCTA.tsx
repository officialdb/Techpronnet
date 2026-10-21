"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Clock, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function AboutCTA() {
  return (
    <section className="section-space bg-[#FAF9F6] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-14 lg:p-16 shadow-xs">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] mb-3 sm:mb-4 block">
                  Start A Conversation
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E] leading-tight">
                  Ready to build software that moves your business forward?
                </h2>
                <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                  Whether you need a confidential client portal, a hospital management system, or custom workflow automation, our engineering team is ready to analyze your challenges and outline a practical path forward.
                </p>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-muted">
                  <span className="flex items-center gap-2">
                    <Clock className="size-3.5 text-[#4D9218] shrink-0" />
                    <span>Direct response within 24 business hours</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-[#4D9218] shrink-0" />
                    <span>No-obligation architecture consultation</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3.5 lg:items-end">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#8EDE35] text-[#181B1E] font-bold px-8 py-4 rounded-xl text-sm hover:bg-[#7ECC28] active:scale-[0.98] transition-all duration-150 shadow-xs text-center w-full sm:w-auto"
                >
                  <span>Send Project Enquiry</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 border border-[#E5E7EB] bg-[#FAF9F6] hover:border-[#8EDE35] px-6 py-3.5 rounded-xl text-xs font-mono font-bold text-[#181B1E] transition-all shadow-2xs text-center w-full sm:w-auto"
                >
                  <span>Explore Our Work &amp; Case Studies</span>
                  <ArrowUpRight className="size-3.5 text-[#4D9218]" />
                </Link>

                <a
                  href="mailto:contact@techpronnet.com"
                  className="inline-flex items-center justify-center gap-2 text-xs font-mono text-muted hover:text-[#4D9218] transition-colors text-center"
                >
                  <Mail className="size-3.5 text-[#4D9218]" />
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
