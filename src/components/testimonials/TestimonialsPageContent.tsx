"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/MotionWrapper";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Quote,
  CheckCircle2,
  Lock,
  Building2,
  Stethoscope,
  Scale,
  Truck,
  CreditCard,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface TestimonialItem {
  id: string;
  quote: string;
  narrative: string;
  client: string;
  title: string;
  organization: string;
  sector: string;
  metric: string;
  metricLabel: string;
  projectHref?: string;
  projectUrl?: string;
  icon: typeof Scale;
}

export function TestimonialsPageContent() {
  const testimonials: TestimonialItem[] = [
    {
      id: "legal",
      quote:
        "Techpronnet delivered a legal practice portal that fundamentally transformed how our chambers intake client briefs. The system is secure, rapid on mobile devices, and conveys the exact level of prestige our clients expect.",
      narrative:
        "Prior to the deployment, prospective clients struggled with fragmented email chains and unscheduled walk-ins. Techpronnet engineered a bespoke consultation engine with encrypted document intake, reducing administrative friction by over 60%.",
      client: "Barrister Nnamdi I. Nwagwu, Esq.",
      title: "Principal Partner",
      organization: "Nnamdi I. Nwagwu & Co. (Legal Practitioners)",
      sector: "Legal & Professional Advisory",
      metric: "+62%",
      metricLabel: "Increase in verified client consultation bookings within 90 days",
      projectHref: "/work#law-portal",
      projectUrl: "https://nnamdinwagwu.com",
      icon: Scale,
    },
    {
      id: "hospital",
      quote:
        "Before working with Techpronnet, our front desk was overwhelmed by double-bookings and lost paper records. Their platform synchronized four clinical departments and eliminated scheduling conflicts completely.",
      narrative:
        "Handling high patient volumes across maternity, pediatric, and general surgery wards requires uncompromising reliability. Techpronnet engineered a resilient appointment triage platform that operates continuously with zero downtime.",
      client: "Dr. Chidinma Ogechi, MBBS, FWACS",
      title: "Medical Director",
      organization: "Ogechi Specialist Hospital",
      sector: "Healthcare & Clinical Operations",
      metric: "99.98%",
      metricLabel: "Operational uptime across 12,000+ patient sessions",
      projectHref: "/work#hospital-system",
      projectUrl: "https://ogechihospital.com",
      icon: Stethoscope,
    },
    {
      id: "logistics",
      quote:
        "In commercial logistics, software failure halts trucks and costs millions. Techpronnet engineered an event-driven dispatch platform that handles live telemetry and automated SMS notifications with zero latency hiccups.",
      narrative:
        "Operating across multiple interstate freight corridors demands real-time manifest tracking and immediate proof-of-delivery reconciliation. Techpronnet built an automated workflow pipeline that replaced 14 manual spreadsheet workflows.",
      client: "Tunde Adeyemi",
      title: "Operations Director",
      organization: "Avex Global Logistics Services",
      sector: "Freight & Interstate Logistics Dispatch",
      metric: "14 Hubs",
      metricLabel: "Synchronized with 100% automated digital manifest tracking",
      projectHref: "/work#logistics-platform",
      projectUrl: "https://avexlogistics.com",
      icon: Truck,
    },
    {
      id: "telehealth",
      quote:
        "Techpronnet's software architecture gave us the rock-solid connection pooling and Next.js SSR performance required to launch our clinical assist workflows to thousands of concurrent users safely.",
      narrative:
        "Building healthcare software requires rigorous data isolation and strict latency standards. Techpronnet architected an intelligent triage intake with Neon Serverless Postgres and clean modular boundaries.",
      client: "Dr. Sarah Kalu",
      title: "Clinical Product Lead",
      organization: "Zidiclinic AI Telehealth",
      sector: "HealthTech & Clinical Telehealth",
      metric: "<30ms",
      metricLabel: "Global query latency with automated point-in-time database backup",
      projectHref: "/work#clinic-system",
      projectUrl: "https://zidiclinic.com",
      icon: Stethoscope,
    },
    {
      id: "fintech",
      quote:
        "Finding an engineering team that deeply understands atomic database transactions, idempotency keys, and zero-loss ledger reconciliation is extraordinarily rare. Techpronnet delivered financial software that passed our rigorous audit.",
      narrative:
        "Chaen Financial required real-time virtual card issuance and sub-second payment webhook processing across multiple commercial banking rails. Techpronnet engineered an event-driven pipeline that reconciles transactions seamlessly.",
      client: "Michael Okonjo",
      title: "Chief Technology Officer",
      organization: "Chaen Financial Services",
      sector: "Financial Commerce & Virtual Card Infrastructure",
      metric: "Zero Loss",
      metricLabel: "Automated ledger balancing across high-volume card transactions",
      projectHref: "/work#virtual-cards",
      projectUrl: "https://chaen.tech",
      icon: CreditCard,
    },
  ];

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* 1. Hero Banner: Matte Green with Circuit Board Tracings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="relative rounded-3xl bg-[#8EDE35] border border-[#7ECC28] overflow-hidden py-12 sm:py-20 px-5 sm:px-10 lg:px-12 text-center shadow-sm">
          {/* Circuit Board Vector Pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="circuit-pattern-testimonials"
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
            <rect width="100%" height="100%" fill="url(#circuit-pattern-testimonials)" />
          </svg>

          <FadeIn direction="up" className="relative z-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181B1E]">
              Testimonials
            </h1>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#181B1E]/80 mt-3 font-mono">
              <Link href="/" className="hover:text-[#181B1E] transition-colors">
                Home
              </Link>
              <ChevronRight className="size-3.5 opacity-60" />
              <span className="font-semibold text-[#181B1E]">Testimonials</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Key Trust Metrics Strip (NO CARDS - Generous typographic numbers with subtle rule dividers) */}
      <section className="border-b border-[#E5E7EB] bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center md:text-left">
              <div className="space-y-1.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#181B1E] tracking-tight block">
                  2019
                </span>
                <p className="font-mono text-xs font-semibold uppercase text-[#4D9218] tracking-wider">
                  Founded &amp; Delivering
                </p>
                <p className="text-xs text-muted">Continuous software delivery for growing businesses</p>
              </div>

              <div className="space-y-1.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#181B1E] tracking-tight block">
                  45+
                </span>
                <p className="font-mono text-xs font-semibold uppercase text-[#4D9218] tracking-wider">
                  Production Platforms
                </p>
                <p className="text-xs text-muted">Healthcare, legal, logistics, and fintech deployments</p>
              </div>

              <div className="space-y-1.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#181B1E] tracking-tight block">
                  99.9%
                </span>
                <p className="font-mono text-xs font-semibold uppercase text-[#4D9218] tracking-wider">
                  Uptime Delivered
                </p>
                <p className="text-xs text-muted">Serverless Neon Postgres &amp; reliable cloud infrastructure</p>
              </div>

              <div className="space-y-1.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#181B1E] tracking-tight block">
                  100%
                </span>
                <p className="font-mono text-xs font-semibold uppercase text-[#4D9218] tracking-wider">
                  Code Ownership
                </p>
                <p className="text-xs text-muted">Zero proprietary lock-in, client owns all intellectual property</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Editorial Testimonial Stories (NO CARDS - Clean typographic quotes with generous whitespace) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Intro */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16 sm:mb-24">
            <span className="text-[#4D9218] font-mono text-xs font-semibold uppercase tracking-wider block mb-3">
              Client Voices &amp; Verified Impact
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E] leading-tight">
              How leaders evaluate working with{" "}
              <span className="bg-[#8EDE35] text-[#181B1E] px-3.5 py-0.5 rounded-xl inline-block shadow-xs">
                Techpronnet.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
              Read direct feedback from managing partners, medical directors, and technical leaders who partnered with Techpronnet Technologies to build custom portals, automate workflows, and replace legacy bottlenecks.
            </p>
          </div>
        </FadeIn>

        {/* Editorial Stories List */}
        <div className="space-y-20 sm:space-y-28">
          {testimonials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.id} direction="up">
                <article
                  id={item.id}
                  className="pt-12 first:pt-0 border-t first:border-t-0 border-[#E5E7EB]"
                >
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                  {/* Left Column: Metric & Client Profile */}
                  <div className="lg:col-span-4 space-y-6">
                    {/* Sector & Icon */}
                    <div className="flex items-center gap-3">
                      <div className="size-11 rounded-xl bg-[#181B1E] text-[#8EDE35] flex items-center justify-center shrink-0">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[11px] font-semibold text-[#4D9218] uppercase tracking-wider block">
                          CASE 0{idx + 1} · {item.sector}
                        </span>
                        <span className="text-xs font-medium text-muted">
                          Verified Client Partnership
                        </span>
                      </div>
                    </div>

                    {/* Measured Business Outcome Pill */}
                    <div className="border-l-2 border-[#8EDE35] pl-4 py-1 space-y-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#181B1E] tracking-tight block">
                        {item.metric}
                      </span>
                      <p className="text-xs text-muted leading-relaxed font-mono">
                        {item.metricLabel}
                      </p>
                    </div>

                    {/* Client Attribution */}
                    <div className="pt-2">
                      <p className="font-bold text-[#181B1E] text-base">{item.client}</p>
                      <p className="text-xs text-muted mt-0.5">{item.title}</p>
                      <p className="text-xs font-medium text-[#181B1E] mt-0.5">{item.organization}</p>

                      {item.projectUrl && (
                        <div className="mt-3">
                          <a
                            href={item.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-[#4D9218] transition-colors"
                          >
                            <Lock className="size-3 text-[#4D9218]" />
                            <span>{item.projectUrl.replace("https://", "")}</span>
                            <ArrowUpRight className="size-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Large Pull-Quote & Transformation Narrative */}
                  <div className="lg:col-span-8 space-y-6">
                    <blockquote className="relative">
                      <Quote className="size-8 text-[#8EDE35] mb-4 opacity-75" />
                      <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#181B1E] leading-snug tracking-tight">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </blockquote>

                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                      {item.narrative}
                    </p>

                    {item.projectHref && (
                      <div className="pt-2">
                        <Link
                          href={item.projectHref}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#181B1E] hover:text-[#4D9218] transition-colors group"
                        >
                          <span>Read Detailed Technical Case Study</span>
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>

    {/* 4. Bottom Call To Action: Clean Minimalist Section */}
    <section className="bg-white border-t border-[#E5E7EB] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <FadeIn direction="up">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-3">
            Start Your Partnership
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E] leading-tight">
            Ready to engineer software that delivers measurable results?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
            Discuss your requirements directly with our senior software engineering team. We evaluate your goals, review your architecture, and provide honest technical timelines.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#8EDE35] text-[#181B1E] font-bold px-8 py-4 rounded-xl text-sm hover:bg-[#7ECC28] active:scale-[0.98] transition-all shadow-xs"
            >
              <span>Start A Project Enquiry</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF9F6] border border-[#E5E7EB] text-[#181B1E] font-mono text-xs font-bold px-6 py-4 rounded-xl hover:border-[#181B1E] transition-all shadow-2xs"
            >
              <span>Explore Live Systems &amp; Work</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
    </div>
  );
}