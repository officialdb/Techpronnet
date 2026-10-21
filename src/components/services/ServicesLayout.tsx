"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Layers,
  Cpu,
  Plug,
  Wrench,
  ArrowRight,
  ArrowUpRight,
  Check,
  Maximize2,
  X,
  ChevronRight,
} from "lucide-react";

interface ServiceCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  capabilities: string[];
  actionText: string;
  contactService: string;
  imageSrc: string;
  cardTheme: "dark" | "accent" | "light";
  icon: typeof Monitor;
  caseStudy: {
    title: string;
    href: string;
  };
}

export function ServicesLayout() {
  const [activeModalImage, setActiveModalImage] = useState<{
    src: string;
    alt: string;
    title: string;
    tag: string;
  } | null>(null);

  const services: ServiceCard[] = [
    {
      id: "web-portals",
      tag: "01 / Web",
      title: "Websites & Portals",
      description:
        "Professional websites, booking platforms and customer portals designed around your brand and audience.",
      capabilities: [
        "Confidential intake questionnaires with role-based routing",
        "Online consultation booking & calendar synchronization",
        "Encrypted document verification & client self-service",
        "High-performance Next.js 16 SSR loading under 1 second",
      ],
      actionText: "Discuss a website",
      contactService: "Website or web portal",
      imageSrc: "/images/services/web-portals.jpg",
      cardTheme: "dark",
      icon: Monitor,
      caseStudy: {
        title: "Nnamdi I. Nwagwu, Esq. — Legal Practice Portal",
        href: "/work#law-portal",
      },
    },
    {
      id: "mobile-apps",
      tag: "02 / Mobile",
      title: "Mobile Applications",
      description:
        "Mobile experiences that help customers access your services and help teams work wherever business takes them.",
      capabilities: [
        "Cross-platform iOS and Android native performance",
        "Live GPS tracking & verified route milestones",
        "Instant push notifications via SMS & WhatsApp",
        "Offline-first data caching for low-connectivity teams",
      ],
      actionText: "Discuss an app",
      contactService: "Mobile application",
      imageSrc: "/images/services/mobile-apps.jpg",
      cardTheme: "accent",
      icon: Smartphone,
      caseStudy: {
        title: "Avex Logistics Services — Freight & Tracking Portal",
        href: "/work#logistics-console",
      },
    },
    {
      id: "business-software",
      tag: "03 / Software",
      title: "Custom Business Software",
      description:
        "Dashboards, management systems and internal tools that reflect how your business actually operates.",
      capabilities: [
        "Real-time triage queues & department occupancy boards",
        "Electronic health records (EHR) & patient histories",
        "Strict role-based access control (RBAC) & audit trails",
        "Pharmacy inventory management & multi-tier billing",
      ],
      actionText: "Discuss your system",
      contactService: "Custom business software",
      imageSrc: "/images/services/business-erp.jpg",
      cardTheme: "dark",
      icon: Layers,
      caseStudy: {
        title: "Ogechi Hospital — Clinical Management System",
        href: "/work#hospital-system",
      },
    },
    {
      id: "workflow-automation",
      tag: "04 / Automation",
      title: "Workflow Automation",
      description:
        "Connect existing tools, streamline recurring tasks and reduce unnecessary manual processes.",
      capabilities: [
        "Automated messaging via WhatsApp Business API & SMS",
        "Resilient webhook listeners with retry & dead-letter queue",
        "Instant automated PDF invoice & document generation",
        "Scheduled ledger reconciliation & payment verification",
      ],
      actionText: "Improve a workflow",
      contactService: "Workflow automation",
      imageSrc: "/images/services/workflow-automation.jpg",
      cardTheme: "light",
      icon: Cpu,
      caseStudy: {
        title: "ZidiClinic AI — Modern Clinic Operations System",
        href: "/work#clinic-erp",
      },
    },
    {
      id: "apis-integrations",
      tag: "05 / Integration",
      title: "APIs & Integrations",
      description:
        "Connect services, payment providers and business applications to create more cohesive systems.",
      capabilities: [
        "Direct payment gateway integration (Stripe & Paystack)",
        "Virtual card issuance & isolated spend balance engine",
        "Third-party CRM, accounting & telematics connectors",
        "High-throughput REST/GraphQL with strict rate limiting",
      ],
      actionText: "Discuss an integration",
      contactService: "API or software integration",
      imageSrc: "/images/services/apis-integrations.jpg",
      cardTheme: "light",
      icon: Plug,
      caseStudy: {
        title: "Chaen — Financial Commerce Infrastructure",
        href: "/work#aenbase-platform",
      },
    },
    {
      id: "maintenance-support",
      tag: "06 / Support",
      title: "Maintenance & Support",
      description:
        "Keep your digital products reliable with technical improvements, maintenance and ongoing support.",
      capabilities: [
        "Neon Serverless PostgreSQL connection pooling & tuning",
        "Sub-30ms database read latency & query indexing",
        "Automated daily encrypted backups & zero-downtime cuts",
        "Continuous 24/7 uptime monitoring with direct engineer SLAs",
      ],
      actionText: "Discuss ongoing support",
      contactService: "Maintenance and support",
      imageSrc: "/images/services/cloud-infrastructure.jpg",
      cardTheme: "light",
      icon: Wrench,
      caseStudy: {
        title: "Neon Serverless Postgres Architecture (Across All Deployments)",
        href: "/work",
      },
    },
  ];

  const pricingPlans = [
    {
      id: "basic",
      name: "Basic Plan",
      price: "$500",
      period: "/Project",
      tagline: "Good For Personal Portfolio & Legal Portals",
      description:
        "High-performance web applications, consultation booking engines, and secure client document portals.",
      theme: "dark",
      badgeColor: "text-white",
      features: [
        "Custom Next.js 16 SSR Architecture",
        "Online Consultation & Calendar Scheduling",
        "Confidential Document Intake Portal",
        "Sub-1s Load Time & Mobile Responsiveness",
        "100% Bespoke Source Code Ownership",
      ],
      contactService: "Website or web portal",
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: "$1000",
      period: "/Project",
      tagline: "Good For Small Company & Operations",
      description:
        "End-to-end custom business software, clinic management suites, or logistics telematics tracking consoles.",
      theme: "light",
      badgeColor: "text-[#181B1E]",
      features: [
        "Multi-Department Triage & Dispatch Queues",
        "Automated WhatsApp & SMS Client Updates",
        "Role-Based Access Control (RBAC) & Audit Logs",
        "Serverless Neon PostgreSQL Database Setup",
        "30-Day Post-Launch SLA Warranty",
      ],
      contactService: "Custom business software",
    },
    {
      id: "corporate",
      name: "Corporate Plan",
      price: "$1500",
      period: "/Project",
      tagline: "Good For Big Company & Scaled Infrastructure",
      description:
        "High-throughput financial commerce infrastructure, virtual card issuance APIs, and event-driven automation pipelines.",
      theme: "light",
      badgeColor: "text-[#181B1E]",
      features: [
        "High-Throughput REST & GraphQL API Gateways",
        "Payment Rails (Stripe, Paystack, Flutterwave)",
        "Virtual Card Issuance & Isolated Balances",
        "Real-Time Atomic Ledger Reconciliation",
        "Priority 24/7 SLA Engineering Support",
      ],
      contactService: "Workflow automation",
    },
  ];

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* 1. Services Hero Banner: Clean Matte Ink Design (No glowing colors) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="relative rounded-3xl bg-[#181B1E] border border-[#2D333B] overflow-hidden py-14 sm:py-20 px-6 sm:px-12 text-center shadow-lg">
          {/* Subtle Circuit Board Vector Pattern Overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="circuit-pattern-services"
              x="0"
              y="0"
              width="140"
              height="140"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 10 h50 v50 h60 M10 80 h30 v40 h80 M80 10 v40 h50 M30 130 v-30 h50 v-30"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="60" cy="60" r="3" fill="#FFFFFF" />
              <circle cx="120" cy="120" r="3" fill="#FFFFFF" />
              <circle cx="130" cy="50" r="3" fill="#FFFFFF" />
              <circle cx="80" cy="80" r="3" fill="#FFFFFF" />
              <circle cx="10" cy="10" r="2.5" fill="#FFFFFF" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-services)" />
          </svg>

          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Services
            </h1>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-400 mt-3 font-mono">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="size-3.5 opacity-60" />
              <span className="font-semibold text-white">Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core 6 Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-[#334655] font-mono text-xs font-semibold uppercase tracking-wider block mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#181B1E] leading-[1.2]">
            Our Mission Is To Make Your{" "}
            <span className="underline decoration-[#334655] decoration-2 underline-offset-4 text-[#181B1E]">
              Business
            </span>{" "}
            Better Through Technology
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            We engineer bespoke software systems, mobile platforms, and automated pipelines designed around your exact operational workflows.
          </p>
        </div>

        {/* 3x2 Grid of 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item) => {
            const Icon = item.icon;

            // Card Themes: Clean matte styles without neon/glowing colors
            const isDark = item.cardTheme === "dark";
            const isAccent = item.cardTheme === "accent";

            let cardBg = "bg-white border border-[#E5E7EB] text-[#181B1E]";
            let iconWrapper =
              "bg-[#F1F3F5] text-[#181B1E] border border-[#E2E8F0] group-hover:bg-[#181B1E] group-hover:text-white";
            let titleColor = "text-[#181B1E]";
            let descColor = "text-[#64748B]";
            let tagColor = "text-[#334655]";
            let ctaColor = "text-[#181B1E] hover:text-[#334655]";
            let buttonBg = "bg-[#181B1E] text-white hover:bg-[#334655]";

            if (isDark) {
              cardBg = "bg-[#181B1E] text-white border border-[#2D333B] shadow-xl";
              iconWrapper = "bg-white/10 text-white border border-white/15";
              titleColor = "text-white";
              descColor = "text-gray-300";
              tagColor = "text-gray-400";
              ctaColor = "text-white hover:text-gray-200 underline decoration-white/40 underline-offset-4";
              buttonBg = "bg-white text-[#181B1E] hover:bg-gray-100";
            } else if (isAccent) {
              // Deep Slate Navy accent card instead of neon green
              cardBg = "bg-[#243342] text-white border border-[#334655]/60 shadow-xl";
              iconWrapper = "bg-white/10 text-white border border-white/15";
              titleColor = "text-white";
              descColor = "text-gray-300";
              tagColor = "text-gray-400";
              ctaColor = "text-white hover:text-gray-200 underline decoration-white/40 underline-offset-4";
              buttonBg = "bg-white text-[#181B1E] hover:bg-gray-100";
            }

            return (
              <div
                key={item.id}
                className={`${cardBg} rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative group overflow-hidden`}
              >
                <div>
                  {/* Top Header: Circular Icon + Tag + Preview Button */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`size-14 rounded-full ${iconWrapper} flex items-center justify-center transition-colors shadow-xs`}
                    >
                      <Icon className="size-6 shrink-0" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono font-semibold ${tagColor}`}>
                        {item.tag}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveModalImage({
                            src: item.imageSrc,
                            alt: item.title,
                            title: item.title,
                            tag: item.tag,
                          })
                        }
                        className={`size-8 rounded-full border border-current/20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer`}
                        title="Preview interface mockup"
                        aria-label={`Preview ${item.title}`}
                      >
                        <Maximize2 className="size-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-xl sm:text-2xl font-bold ${titleColor} mb-3 tracking-tight`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${descColor} mb-6`}>
                    {item.description}
                  </p>

                  {/* Key Capabilities Bullet Points */}
                  <div className="space-y-2 pt-4 border-t border-current/10 mb-6">
                    {item.capabilities.slice(0, 3).map((cap) => (
                      <div key={cap} className="flex items-start gap-2 text-xs leading-normal">
                        <Check className="size-3.5 mt-0.5 shrink-0 opacity-80" />
                        <span className="opacity-90">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions & Case Study Link */}
                <div className="pt-4 border-t border-current/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <Link
                      href={item.caseStudy.href}
                      className="inline-flex items-center gap-1 opacity-75 hover:opacity-100 transition-opacity text-[11px] truncate max-w-[210px]"
                    >
                      <span className="truncate">Case Study: {item.caseStudy.title.split("—")[0]}</span>
                      <ArrowUpRight className="size-3 shrink-0" />
                    </Link>
                  </div>

                  <Link
                    href={`/#contact?service=${encodeURIComponent(item.contactService)}`}
                    className={`inline-flex items-center justify-between font-semibold text-xs sm:text-sm ${ctaColor} pt-1`}
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Pricing Plan Section from User Image */}
      <section className="bg-white border-t border-[#E5E7EB] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="text-[#334655] font-mono text-xs font-semibold uppercase tracking-wider block mb-3">
              Pricing Plan
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#181B1E] leading-[1.2]">
              We Make IT Simple, Faster, And Less Expensive
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto mt-4 leading-relaxed">
              Transparent project scopes, predictable delivery, and 100% custom source code owned entirely by your company with zero ongoing license bloat.
            </p>
          </div>

          {/* 3 Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => {
              const isDark = plan.theme === "dark";

              return (
                <div
                  key={plan.id}
                  className={`${
                    isDark
                      ? "bg-[#181B1E] text-white border border-[#2D333B] shadow-xl"
                      : "bg-white text-[#181B1E] border border-[#E5E7EB] shadow-md hover:border-[#181B1E]"
                  } rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
                >
                  <div>
                    {/* Plan Header */}
                    <span
                      className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
                        isDark ? "text-gray-400" : "text-muted"
                      }`}
                    >
                      {plan.name}
                    </span>

                    {/* Price */}
                    <div className="flex items-baseline gap-1.5 mb-3">
                      <span className={`text-4xl sm:text-5xl font-extrabold ${plan.badgeColor}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${isDark ? "text-gray-400" : "text-muted"}`}>
                        {plan.period}
                      </span>
                    </div>

                    {/* Target / Best for */}
                    <p
                      className={`text-sm font-bold mb-3 ${
                        isDark ? "text-white" : "text-[#181B1E]"
                      }`}
                    >
                      {plan.tagline}
                    </p>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-8 ${
                        isDark ? "text-gray-400" : "text-muted"
                      }`}
                    >
                      {plan.description}
                    </p>

                    {/* Feature Checklist */}
                    <div className="space-y-3.5 pt-6 border-t border-current/10 mb-8">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check
                            className={`size-4 mt-0.5 shrink-0 ${
                              isDark ? "text-gray-300" : "text-[#334655]"
                            }`}
                          />
                          <span className={isDark ? "text-gray-300" : "text-[#334155]"}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Choose Plan Button */}
                  <Link
                    href={`/#contact?service=${encodeURIComponent(
                      plan.contactService
                    )}&plan=${encodeURIComponent(plan.name)}`}
                    className={`w-full font-bold text-center py-3.5 px-6 rounded-xl transition-colors shadow-sm block text-sm ${
                      isDark
                        ? "bg-white text-[#181B1E] hover:bg-gray-100"
                        : "bg-[#181B1E] text-white hover:bg-[#334655]"
                    }`}
                  >
                    Choose Plan
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Fullscreen Lightbox Modal for Image Previews */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white border border-[#E5E7EB] p-3 sm:p-4 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#E5E7EB] mb-3 text-xs">
              <span className="font-mono text-[#181B1E] font-semibold truncate">
                {activeModalImage.tag} · {activeModalImage.title}
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
