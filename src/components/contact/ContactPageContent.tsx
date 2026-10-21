"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  FileCheck,
  Code2,
  Zap,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export function ContactPageContent() {
  const nextSteps = [
    {
      num: "01",
      title: "Technical Discovery & Feasibility",
      description:
        "Within 24 business hours, an engineer reviews your requirements, clarifies workflow constraints, and evaluates architectural feasibility.",
      icon: MessageSquare,
    },
    {
      num: "02",
      title: "Architecture & Scope Proposal",
      description:
        "We deliver a clear, transparent statement of work specifying database models, API integrations, timeline milestones, and fixed pricing.",
      icon: FileCheck,
    },
    {
      num: "03",
      title: "Sprint Kickoff & Direct Delivery",
      description:
        "Upon agreement, development begins with weekly demos, private code repository access, and direct engineer communication via WhatsApp or Slack.",
      icon: Code2,
    },
  ];

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* 1. Hero Banner: Matte Green with Circuit Board Tracings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="relative rounded-3xl bg-[#8EDE35] border border-[#7ECC28] overflow-hidden py-12 sm:py-20 px-5 sm:px-10 lg:px-12 text-center shadow-sm">
          {/* Subtle Circuit Board Vector Pattern Overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="circuit-pattern-contact"
              x="0"
              y="0"
              width="140"
              height="140"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 10 h50 v50 h60 M10 80 h30 v40 h80 M80 10 v40 h50 M30 130 v-30 h50 v-30"
                fill="none"
                stroke="#181B1E"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="60" cy="60" r="3.5" fill="#181B1E" />
              <circle cx="120" cy="120" r="3.5" fill="#181B1E" />
              <circle cx="130" cy="50" r="3.5" fill="#181B1E" />
              <circle cx="80" cy="80" r="3.5" fill="#181B1E" />
              <circle cx="10" cy="10" r="3" fill="#181B1E" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-contact)" />
          </svg>

          <div className="relative z-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181B1E]">
              Contact Us
            </h1>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#181B1E]/80 mt-3 font-mono">
              <Link href="/" className="hover:text-[#181B1E] transition-colors">
                Home
              </Link>
              <ChevronRight className="size-3.5 opacity-60" />
              <span className="font-semibold text-[#181B1E]">Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Form & Direct Channels Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Communication Channels & Trust Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[#4D9218] font-mono text-xs font-semibold uppercase tracking-wider block mb-3">
                Start A Conversation
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#181B1E] leading-tight">
                Have A Project In{" "}
                <span className="bg-[#8EDE35] text-[#181B1E] px-3.5 py-0.5 rounded-xl inline-block shadow-xs">
                  Mind?
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
                Tell us what you are looking to build, optimize, or automate. We provide upfront technical evaluations, scope clarity, and architectural recommendations with zero sales pressure.
              </p>
            </div>

            {/* Direct Engineering Commitments */}
            <div className="space-y-3.5 text-xs sm:text-sm font-mono text-muted">
              <div className="flex items-start gap-3">
                <Clock className="size-4 text-[#4D9218] shrink-0 mt-0.5" />
                <span>Direct engineer response within 24 business hours</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="size-4 text-[#4D9218] shrink-0 mt-0.5" />
                <span>NDA &amp; confidential documentation handling standard</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#4D9218] shrink-0 mt-0.5" />
                <span>100% bespoke source code owned by your business</span>
              </div>
            </div>

            {/* Direct Contact Channels Card */}
            <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <p className="font-bold text-[#181B1E] text-base sm:text-lg">Techpronnet Technologies</p>
                <p className="text-xs text-muted mt-0.5">High-Reliability Software &amp; Enterprise Workflows</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E5E7EB] text-xs sm:text-sm text-[#181B1E]">
                <div className="flex items-start gap-3">
                  <Mail className="size-4 text-[#4D9218] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-muted uppercase">Email Enquiries</span>
                    <a
                      href="mailto:contact@techpronnet.com"
                      className="font-medium hover:text-[#4D9218] transition-colors"
                    >
                      contact@techpronnet.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="size-4 text-[#4D9218] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-muted uppercase">WhatsApp &amp; Direct Phone</span>
                    <a
                      href="https://wa.me/2347062654567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-[#4D9218] transition-colors font-mono"
                    >
                      +234 706 265 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="size-4 text-[#4D9218] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-muted uppercase">Locations &amp; Delivery</span>
                    <span>Abuja &amp; Lagos, Nigeria · Worldwide Remote Delivery</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="size-4 text-[#4D9218] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-muted uppercase">Operating Hours</span>
                    <span>Mon – Fri: 8:00 AM – 6:00 PM WAT · 24/7 SLA Support</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted uppercase font-semibold">Social Channels:</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://x.com/Tech_pronnet"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter"
                    title="X: @Tech_pronnet"
                    className="size-8 rounded-xl bg-[#FAF9F6] border border-[#E5E7EB] flex items-center justify-center text-[#181B1E] hover:bg-[#8EDE35] hover:border-[#8EDE35] transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@techpronnet1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    title="TikTok: @techpronnet1"
                    className="size-8 rounded-xl bg-[#FAF9F6] border border-[#E5E7EB] flex items-center justify-center text-[#181B1E] hover:bg-[#8EDE35] hover:border-[#8EDE35] transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/techpronnettechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook: techpronnettechnologies"
                    className="size-8 rounded-xl bg-[#FAF9F6] border border-[#E5E7EB] flex items-center justify-center text-[#181B1E] hover:bg-[#8EDE35] hover:border-[#8EDE35] transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Neon-Backed Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm">
            <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#181B1E] tracking-tight">
                Submit A Project Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-1">
                Fill in your project details below. All enquiries are encrypted and stored securely in our Neon PostgreSQL database.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 3. What Happens Next: 3-Stage Process */}
      <section className="bg-white border-t border-[#E5E7EB] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-3">
              Clear &amp; Predictable Process
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E]">
              What happens after you enquire?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
              We respect your time. Here is the straightforward process from initial enquiry to active software development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#8EDE35] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="size-11 rounded-xl bg-[#181B1E] text-[#8EDE35] flex items-center justify-center">
                        <StepIcon className="size-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#4D9218] bg-white border border-[#E5E7EB] px-2.5 py-1 rounded-lg">
                        STEP {step.num}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#181B1E] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}