"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Scale,
  Activity,
  Truck,
  Stethoscope,
  CreditCard,
  ArrowRight,
  ArrowUpRight,
  Check,
  Maximize2,
  X,
  Lock,
  ExternalLink,
  ChevronRight,
  Clock,
  ShieldCheck,
  Database,
  Code2,
  Sparkles,
  Layers,
} from "lucide-react";

interface CaseStudy {
  id: string;
  num: string;
  sector: string;
  client: string;
  title: string;
  url: string;
  imageSrc: string;
  icon: typeof Scale;
  description: string;
  capabilities: string[];
  impact: string[];
  serviceLink: string;
}

export function WorkLayout() {
  const [activeModalImage, setActiveModalImage] = useState<{
    src: string;
    alt: string;
    title: string;
    client: string;
  } | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: "law-portal",
      num: "01",
      sector: "Legal & Professional Advisory",
      client: "Nnamdi I. Nwagwu, Esq.",
      title: "Legal Practice Website & Client Consultation Portal",
      url: "https://nnamdinwagwu.com",
      imageSrc: "/images/projects/law.png",
      icon: Scale,
      description:
        "Designed and engineered for a reputable Nigerian legal practice. The platform unifies public practice area briefings, direct consultation scheduling, and straightforward legal communication across civil, corporate, and property matters.",
      capabilities: [
        "Confidential client consultation booking engine",
        "Direct attorney contact channels & chambers briefings",
        "Encrypted document and consultation brief submission",
        "Fast Next.js rendering optimized for executive mobile access",
      ],
      impact: [
        "+62% Increase in verified client consultation bookings",
        "Direct communication from first consultation to resolution",
        "Sub-1s page load across international mobile devices",
      ],
      serviceLink: "Website or web portal",
    },
    {
      id: "hospital-system",
      num: "02",
      sector: "Healthcare & Hospital Operations",
      client: "Ogechi Hospital",
      title: "Hospital Web Portal & Clinical Appointment Booking System",
      url: "https://ogechihospital.org",
      imageSrc: "/images/projects/hospotal.png",
      icon: Activity,
      description:
        "A comprehensive healthcare portal engineered to connect patients with clinical departments, doctor appointment bookings, 24/7 emergency contact channels, and essential healthcare information.",
      capabilities: [
        "Direct online doctor appointment booking engine",
        "Department directory & outpatient triage guidance",
        "Emergency care line and direct patient contact channels",
        "High-speed electronic health records search across patient profiles",
      ],
      impact: [
        "65% Reduction in patient appointment no-shows",
        "Immediate emergency care access and triage clarity",
        "99.98% System uptime during high-volume hospital hours",
      ],
      serviceLink: "Custom business software",
    },
    {
      id: "logistics-console",
      num: "03",
      sector: "Logistics & Supply Chain",
      client: "Avex Logistics Services",
      title: "Freight, Cargo & Real-Time Shipment Tracking Portal",
      url: "https://avexlogisticsservices.com",
      imageSrc: "/images/projects/logistics.png",
      icon: Truck,
      description:
        "Engineered for an international cargo and freight forwarder. Features end-to-end shipment tracking via tracking ID, instant multi-modal freight quotes, and multi-channel customer dispatch across road, air, and ocean freight.",
      capabilities: [
        "Real-time shipment tracking ID search with verified route milestones",
        "Instant multi-modal freight quotes across road, air, and ocean cargo",
        "Dynamic driver assignment queues and digital manifest generation",
        "Direct multi-channel customer dispatch and WhatsApp integration",
      ],
      impact: [
        "-42% Turnaround time for shipment status inquiries",
        "100% Digital tracking transparency with verified dispatch",
        "Direct integration between booking quote engine and dispatch",
      ],
      serviceLink: "Custom business software",
    },
    {
      id: "clinic-erp",
      num: "04",
      sector: "Clinical Operations & ERP",
      client: "ZidiClinic AI",
      title: "ZidiClinic AI — Modern Clinic Operations System (Clinic OS)",
      url: "https://zidiai.vercel.app",
      imageSrc: "/images/projects/clinic_erp_and_appointment_booking.png",
      icon: Stethoscope,
      description:
        "A specialized clinical operating system built for private practices and diagnostic centers, unifying doctor appointment scheduling, patient records, billing, and pharmacy management into one cohesive interface.",
      capabilities: [
        "Interactive doctor appointment scheduling & live queue board",
        "AI assistant for patient replies and appointment scheduling guidance",
        "Digital patient health records, pharmacy stock & billing ledger",
        "Multi-branch clinic access with central administrative oversight",
      ],
      impact: [
        "+54% Online patient self-service booking adoption",
        "Saved 3.5 front-desk hours per clinic location daily",
        "Sub-second patient history lookup and instant receipt generation",
      ],
      serviceLink: "Website or web portal",
    },
    {
      id: "aenbase-platform",
      num: "05",
      sector: "Financial Technology & Web Platforms",
      client: "Chaen / Aenbase",
      title: "Chaen Financial Commerce Infrastructure & Digital Store",
      url: "https://www.aenbase.com",
      imageSrc: "/images/projects/aenbase.png",
      icon: CreditCard,
      description:
        "A high-performance financial technology web platform featuring virtual Visa card issuance, isolated spend balances, 15-minute locked checkout rates, and immutable ledger reconciliation.",
      capabilities: [
        "Virtual Visa card issuance engine funded from isolated balances",
        "15-minute locked checkout rates on digital commerce transactions",
        "Immutable ledger reconciliation with sub-second execution",
        "High-performance responsive rendering across mobile & desktop",
      ],
      impact: [
        "100% Custom workflow match with zero external software bloat",
        "Zero downtime recorded across continuous production updates",
        "Sub-30ms global transaction query latency",
      ],
      serviceLink: "Custom business software",
    },
  ];

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* 1. Hero Banner: Clean Matte Green with Circuit Tracings matching /services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="relative rounded-3xl bg-[#8EDE35] border border-[#7ECC28] overflow-hidden py-14 sm:py-20 px-6 sm:px-12 text-center shadow-sm">
          {/* Subtle Circuit Board Vector Pattern Overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="circuit-pattern-work"
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
            <rect width="100%" height="100%" fill="url(#circuit-pattern-work)" />
          </svg>

          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181B1E]">
              Our Work
            </h1>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#181B1E]/80 mt-3 font-mono">
              <Link href="/" className="hover:text-[#181B1E] transition-colors">
                Home
              </Link>
              <ChevronRight className="size-3.5 opacity-60" />
              <span className="font-semibold text-[#181B1E]">Our Work</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Section Header & Sector Jump Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[#4D9218] font-mono text-xs font-semibold uppercase tracking-wider block mb-3">
            Case Studies &amp; Systems
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#181B1E] leading-[1.2]">
            Proven Systems Delivered For Real{" "}
            <span className="bg-[#8EDE35] text-[#181B1E] px-3 py-0.5 rounded-md inline-block shadow-xs">
              Business
            </span>{" "}
            Impact
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            Explore live production platforms, hospital systems, legal portals, and logistics dispatch consoles engineered by Techpronnet Technologies since 2019. Click any screenshot to view in full resolution.
          </p>
        </div>

        {/* Quick Anchor Jump Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono">
          <span className="text-muted text-[11px] uppercase tracking-wider mr-1">
            Jump to case:
          </span>
          {caseStudies.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-[#181B1E] hover:border-[#181B1E] hover:bg-[#F3F4F6] transition-all text-[11px] font-medium"
            >
              {item.num}. {item.client.split("/")[0].trim()}
            </a>
          ))}
        </div>
      </section>

      {/* 3. Case Studies Showcase Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="space-y-12 sm:space-y-16">
          {caseStudies.map((project, idx) => {
            const Icon = project.icon;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={project.id}
                id={project.id}
                className="scroll-mt-24 rounded-3xl bg-white border border-[#E5E7EB] shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-10 lg:p-12 relative overflow-hidden group"
              >
                {/* Card Top Strip */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E5E7EB]">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-full bg-[#181B1E] text-[#8EDE35] flex items-center justify-center shrink-0 shadow-xs border border-white/10">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] font-semibold text-[#4D9218] uppercase tracking-wider block">
                        {project.num} / {project.sector}
                      </span>
                      <span className="text-sm font-bold text-[#181B1E]">
                        {project.client}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E5E7EB] text-[#181B1E] hover:border-[#8EDE35] hover:bg-gray-100 transition-all text-xs font-mono"
                    >
                      <Lock className="size-3 text-[#4D9218]" />
                      <span className="truncate max-w-[180px] sm:max-w-none">
                        {project.url.replace("https://", "")}
                      </span>
                      <ExternalLink className="size-3 text-muted" />
                    </a>
                  </div>
                </div>

                {/* 2-Column Showcase: Screenshot & Details */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Screenshot Display Column */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="rounded-2xl border border-[#E5E7EB] bg-[#FAF9F6] overflow-hidden shadow-sm group/frame transition-all hover:border-[#334655]/50">
                      {/* Browser header bar */}
                      <div className="bg-[#F3F4F6] px-3.5 py-2.5 border-b border-[#E5E7EB] flex items-center justify-between gap-3 text-xs select-none">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="size-2.5 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]" />
                          <span className="size-2.5 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]" />
                          <span className="size-2.5 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]" />
                        </div>

                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted truncate max-w-xs">
                          <Lock className="size-3 text-[#334655] shrink-0" />
                          <span className="truncate">{project.url}</span>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setActiveModalImage({
                              src: project.imageSrc,
                              alt: project.title,
                              title: project.title,
                              client: project.client,
                            })
                          }
                          className="text-muted hover:text-[#181B1E] p-0.5 transition-colors cursor-pointer"
                          title="Enlarge screenshot"
                          aria-label={`Enlarge screenshot: ${project.title}`}
                        >
                          <Maximize2 className="size-3.5" />
                        </button>
                      </div>

                      {/* Image Thumbnail */}
                      <div
                        className="relative w-full aspect-[16/10] overflow-hidden cursor-pointer"
                        onClick={() =>
                          setActiveModalImage({
                            src: project.imageSrc,
                            alt: project.title,
                            title: project.title,
                            client: project.client,
                          })
                        }
                      >
                        <img
                          src={project.imageSrc}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/frame:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Editorial Details Column */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E] leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mt-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Architectural Capabilities */}
                    <div className="pt-4 border-t border-[#E5E7EB]">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#181B1E] block mb-3">
                        Architectural Capabilities
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted">
                        {project.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-2.5">
                            <Check className="size-4 text-[#4D9218] mt-0.5 shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Measured Business Impact */}
                    <div className="pt-4 border-t border-[#E5E7EB]">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4D9218] block mb-2.5">
                        Measured Business Impact
                      </span>
                      <div className="space-y-2">
                        {project.impact.map((imp) => (
                          <div
                            key={imp}
                            className="flex items-baseline gap-2 text-xs font-medium text-[#181B1E]"
                          >
                            <span className="font-mono text-[#4D9218] font-bold">&rarr;</span>
                            <span>{imp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <Link
                        href={`/#contact?service=${encodeURIComponent(project.serviceLink)}`}
                        className="inline-flex items-center justify-center gap-2 bg-[#181B1E] text-white hover:bg-[#334655] px-5 py-3 rounded-xl text-xs font-semibold transition-colors shadow-xs"
                      >
                        <span>Discuss a Similar System</span>
                        <ArrowRight className="size-3.5" />
                      </Link>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#181B1E] hover:border-[#181B1E] bg-[#FAF9F6] text-xs font-mono font-medium transition-colors"
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Engineering Standards & Technology Foundation */}
      <section className="bg-white border-t border-[#E5E7EB] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#4D9218] font-mono text-xs font-semibold uppercase tracking-wider block mb-3">
              Engineering Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#181B1E] leading-tight">
              The Technology Foundation Behind Every Deployment
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto mt-4 leading-relaxed">
              Every system we deliver is engineered with modern serverless architecture, strict type safety, and clean operational seams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-3xl p-8 hover:border-[#8EDE35] transition-all">
              <div className="size-12 rounded-full bg-[#181B1E] text-[#8EDE35] flex items-center justify-center mb-6">
                <Database className="size-5" />
              </div>
              <h3 className="text-xl font-bold text-[#181B1E] mb-2.5">
                Neon Serverless Postgres
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Dedicated connection pooling, sub-30ms global query execution, automated daily backups, and point-in-time recovery.
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-3xl p-8 hover:border-[#8EDE35] transition-all">
              <div className="size-12 rounded-full bg-[#181B1E] text-[#8EDE35] flex items-center justify-center mb-6">
                <Code2 className="size-5" />
              </div>
              <h3 className="text-xl font-bold text-[#181B1E] mb-2.5">
                Next.js 16 SSR &amp; RSC
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Server components, zero-bundle streaming, and high-performance SEO page structures loading under 1 second worldwide.
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-3xl p-8 hover:border-[#8EDE35] transition-all">
              <div className="size-12 rounded-full bg-[#181B1E] text-[#8EDE35] flex items-center justify-center mb-6">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="text-xl font-bold text-[#181B1E] mb-2.5">
                Zero-Vendor Lock-In
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                100% bespoke source code owned entirely by your business. No proprietary SaaS theme restrictions or monthly recurring software tax.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing Project Inquiry Call-To-Action (Matte Green, No Glowing Blur) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="relative rounded-3xl bg-[#181B1E] text-white p-8 sm:p-14 lg:p-16 shadow-xl overflow-hidden border border-[#2D333B]">
          {/* Note: NO radial blur or glow layer here! Pure matte finish */}
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8EDE35] block mb-3">
                Initiate A Project
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready to build your next digital platform?
              </h2>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                Whether you need to replace manual spreadsheets, deploy a confidential client intake portal, or architect an operations console, we provide upfront feasibility evaluations and reliable execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-2">
                  <Clock className="size-4 text-[#8EDE35] shrink-0" />
                  <span>Direct response within 24 business hours</span>
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#8EDE35] shrink-0" />
                  <span>No-obligation scope &amp; architecture review</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 lg:items-end">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#8EDE35] text-[#181B1E] font-bold px-8 py-4 rounded-xl text-sm hover:bg-[#7ECC28] transition-colors shadow-sm text-center w-full sm:w-auto"
              >
                <span>Tell Us About Your Project</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-medium transition-colors text-center w-full sm:w-auto"
              >
                <span>Explore Services &amp; Pricing</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Fullscreen Screenshot Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white border border-[#E5E7EB] p-3 sm:p-4 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#E5E7EB] mb-3 text-xs">
              <span className="font-mono text-[#181B1E] font-semibold truncate">
                {activeModalImage.client} — {activeModalImage.title}
              </span>
              <button
                type="button"
                onClick={() => setActiveModalImage(null)}
                className="p-1 text-muted hover:text-black cursor-pointer"
                aria-label="Close preview"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="max-h-[80vh] overflow-auto rounded-lg">
              <img
                src={activeModalImage.src}
                alt={activeModalImage.alt}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
