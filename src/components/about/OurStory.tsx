"use client";

import { useState } from "react";
import { Check, ShieldCheck, Terminal, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function OurStory() {
  const [activeEraIndex, setActiveEraIndex] = useState(0);

  const eras = [
    {
      id: "2019",
      year: "2019",
      tag: "01 · INCEPTION",
      title: "Founding & Systems Architecture",
      subtitle: "Bespoke tools built around real operational workflows",
      summary:
        "Techpronnet Technologies was founded to solve a pervasive problem: growing organizations were trapped between rigid, bloated off-the-shelf software and fragile, unmaintained scripts that broke under load.",
      context:
        "We established our core standard: reject vanity tech stacks, write durable code with strict type safety, and give every client 100% intellectual property ownership of their source code from day one.",
      specs: [
        "First tailor-made internal ERP & dispatch consoles delivered",
        "Direct engineer-to-client collaboration model established",
        "Zero third-party vendor lock-in contract structure",
      ],
      systemSpec: {
        code: "SYS_V1.0.0_FOUNDATION",
        status: "ESTABLISHED",
        before: "Fragmented spreadsheets & brittle macros",
        after: "Single source-of-truth bespoke operational software",
        metric1: { value: "100%", label: "Client Code Ownership" },
        metric2: { value: "0", label: "Third-Party SaaS Lock-In" },
        delivered: "Bespoke ERP & regional dispatch database architecture",
      },
    },
    {
      id: "2021",
      year: "2021",
      tag: "02 · ECOSYSTEMS",
      title: "Enterprise Workflows & Customer Portals",
      subtitle: "From standalone tools to interconnected multi-platform ecosystems",
      summary:
        "As client operations matured, the demand grew beyond internal tools to customer-facing digital portals, booking engines, and mobile applications for field personnel.",
      context:
        "We expanded our engineering practice to cross-platform mobile apps (iOS & Android) and client self-service platforms, replacing hundreds of hours of manual administrative data entry with real-time sync.",
      specs: [
        "Patient triage portals & law firm consultation intake engines",
        "Mobile driver dispatch & field technician coordination",
        "Secure role-based authentication and audit logging",
      ],
      systemSpec: {
        code: "SYS_V2.0.0_ECOSYSTEMS",
        status: "EXPANDED",
        before: "Manual administrative phone triage & paperwork",
        after: "Self-service booking portals & cross-platform apps",
        metric1: { value: "100+ hrs", label: "Monthly Admin Time Saved" },
        metric2: { value: "24/7", label: "Automated Client Self-Service" },
        delivered: "Clinic appointment portals & legal case triage engines",
      },
    },
    {
      id: "2023",
      year: "2023",
      tag: "03 · PERFORMANCE",
      title: "Serverless Cloud & Resilient Data Engines",
      subtitle: "Sub-second execution via modern cloud architectures",
      summary:
        "To deliver sub-second response times without the maintenance burden of legacy VMs, we rebuilt our engineering foundation around serverless cloud infrastructure, reactive Next.js SSR, and Neon Serverless Postgres.",
      context:
        "This gave our clients instant scale, connection pooling, encrypted point-in-time recovery, and 99.9% uptime without paying for idle server overhead.",
      specs: [
        "Neon Serverless PostgreSQL with auto-scaling connection pooling",
        "Sub-100ms global query execution across mobile and web",
        "Automated encrypted daily snapshots and disaster recovery plans",
      ],
      systemSpec: {
        code: "SYS_V3.0.0_NEON_SERVERLESS",
        status: "OPTIMIZED",
        before: "Oversized legacy VMs with high idle infrastructure costs",
        after: "Serverless Postgres pooling & edge-rendered frontends",
        metric1: { value: "<50ms", label: "Average Query Latency" },
        metric2: { value: "99.99%", label: "Database Availability" },
        delivered: "High-throughput serverless architectures & automated daily backups",
      },
    },
    {
      id: "2025",
      year: "2025 – Present",
      tag: "04 · ENTERPRISE",
      title: "End-to-End Digital Engineering & SLA Support",
      subtitle: "Embedded senior engineering partner for scaling businesses",
      summary:
        "Today, Techpronnet serves regional leaders across Healthcare, Logistics, Commerce, Legal, and Professional Services as an embedded technology partner.",
      context:
        "We deliver continuous engineering improvements, automated webhook pipelines, and dedicated SLA response, ensuring our clients' software compounds in business value over time.",
      specs: [
        "45+ production software deployments across multiple industries",
        "Direct engineer support within 24 business hours",
        "Continuous performance tuning, security audits, and feature upgrades",
      ],
      systemSpec: {
        code: "SYS_V4.0.0_ENTERPRISE_SLA",
        status: "ACTIVE & SCALING",
        before: "Ad-hoc freelance fixes with zero long-term accountability",
        after: "Dedicated senior engineering SLA partnership",
        metric1: { value: "45+", label: "Verified Deployments" },
        metric2: { value: "24 hrs", label: "Guaranteed SLA Response" },
        delivered: "Comprehensive enterprise software suites & ongoing proactive SLA care",
      },
    },
  ];

  const currentEra = eras[activeEraIndex];

  return (
    <section id="story" className="section-space border-b border-[#E5E7EB] bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <FadeIn direction="up">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-3">
              Our Genesis &amp; Evolution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E] leading-tight">
              Our story since{" "}
              <span className="bg-[#8EDE35] text-[#181B1E] px-3.5 py-0.5 rounded-xl inline-block shadow-xs">
                2019.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Most software either forces your business into someone else&apos;s rigid template or is built so hastily that it crumbles under growth. Explore the architectural milestones that defined our engineering standards.
            </p>
          </FadeIn>
        </div>

        {/* 1. Horizontal Milestone Switcher Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {eras.map((era, index) => {
            const isActive = activeEraIndex === index;

            return (
              <button
                key={era.id}
                onClick={() => setActiveEraIndex(index)}
                type="button"
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#181B1E] text-white border-[#181B1E] shadow-md"
                    : "bg-[#FAF9F6] text-[#181B1E] border-[#E5E7EB] hover:border-[#8EDE35] hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-lg ${
                      isActive
                        ? "bg-[#8EDE35] text-[#181B1E]"
                        : "bg-white text-[#181B1E] border border-[#E5E7EB]"
                    }`}
                  >
                    {era.year}
                  </span>
                  <span
                    className={`text-[10px] font-mono tracking-wider uppercase font-semibold ${
                      isActive ? "text-[#8EDE35]" : "text-muted"
                    }`}
                  >
                    {era.tag.split("·")[1]?.trim()}
                  </span>
                </div>
                <p
                  className={`text-sm font-bold truncate ${
                    isActive ? "text-white" : "text-[#181B1E]"
                  }`}
                >
                  {era.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* 2. Executive Split-View Console */}
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs transition-all">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="font-mono text-xs font-bold text-[#181B1E] bg-[#8EDE35] px-2.5 py-0.5 rounded-lg">
                    {currentEra.year}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218]">
                    {currentEra.tag}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#181B1E] tracking-tight">
                  {currentEra.title}
                </h3>
                <p className="text-sm font-semibold text-muted mt-1">
                  {currentEra.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {currentEra.summary}
              </p>

              <p className="text-xs sm:text-sm text-[#181B1E]/80 leading-relaxed bg-[#FAF9F6] border-l-2 border-[#8EDE35] pl-4 py-2 italic">
                &ldquo;{currentEra.context}&rdquo;
              </p>

              {/* Key Specs Delivered */}
              <div className="pt-4 border-t border-[#E5E7EB]">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#181B1E] block mb-3">
                  Architectural Deliverables
                </span>
                <ul className="space-y-2.5">
                  {currentEra.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#181B1E]/85">
                      <Check className="size-4 text-[#4D9218] mt-0.5 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Telemetry & Spec Card */}
            <div className="lg:col-span-5 bg-[#FAF9F6] border border-[#E5E7EB] rounded-2xl p-6 sm:p-7 shadow-2xs space-y-6">
              {/* Header Strip */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <Terminal className="size-4 text-[#4D9218]" />
                  <span className="font-mono text-xs font-bold text-[#181B1E]">
                    {currentEra.systemSpec.code}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#4D9218] bg-[#8EDE35]/20 border border-[#4D9218]/30 px-2.5 py-0.5 rounded-full">
                  {currentEra.systemSpec.status}
                </span>
              </div>

              {/* Architectural Shift (Before vs After) */}
              <div className="space-y-2.5 text-xs">
                <span className="font-mono text-[11px] font-semibold uppercase text-muted block">
                  Architectural Shift
                </span>
                <div className="p-3 rounded-xl bg-white border border-[#E5E7EB] space-y-2 font-mono">
                  <div className="flex items-start gap-2 text-muted">
                    <span className="font-bold text-gray-400">OLD:</span>
                    <span className="line-through">{currentEra.systemSpec.before}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#181B1E] font-bold pt-1.5 border-t border-[#E5E7EB]">
                    <span className="text-[#4D9218]">NEW:</span>
                    <span>{currentEra.systemSpec.after}</span>
                  </div>
                </div>
              </div>

              {/* Measurable Impact Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 shadow-2xs">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#181B1E] tracking-tight block">
                    {currentEra.systemSpec.metric1.value}
                  </span>
                  <span className="text-xs font-semibold text-muted mt-1 block">
                    {currentEra.systemSpec.metric1.label}
                  </span>
                </div>

                <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 shadow-2xs">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#181B1E] tracking-tight block">
                    {currentEra.systemSpec.metric2.value}
                  </span>
                  <span className="text-xs font-semibold text-muted mt-1 block">
                    {currentEra.systemSpec.metric2.label}
                  </span>
                </div>
              </div>

              {/* Verified Outcome */}
              <div className="pt-3 border-t border-[#E5E7EB] flex items-start gap-2.5 text-xs text-[#181B1E]">
                <ShieldCheck className="size-4 text-[#4D9218] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="font-bold">Verified Result:</strong> {currentEra.systemSpec.delivered}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}