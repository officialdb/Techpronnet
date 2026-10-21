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
} from "lucide-react";

interface ServiceItem {
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

export function Services() {
  const [activeModalImage, setActiveModalImage] = useState<{
    src: string;
    alt: string;
    title: string;
    tag: string;
  } | null>(null);

  const services: ServiceItem[] = [
    {
      id: "web-portals",
      tag: "01 / Web",
      title: "Websites & Portals",
      description:
        "Professional websites, booking platforms and customer portals designed around your brand and audience.",
      capabilities: [
        "Confidential intake questionnaires & routing",
        "Online consultation booking & calendar sync",
        "Encrypted document verification",
      ],
      actionText: "Discuss a website",
      contactService: "Website or web portal",
      imageSrc: "/images/services/web-portals.jpg",
      cardTheme: "dark",
      icon: Monitor,
      caseStudy: {
        title: "Nnamdi I. Nwagwu, Esq. Legal Portal",
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
        "Cross-platform iOS and Android performance",
        "Live GPS tracking & verified route milestones",
        "Instant push notifications via SMS & WhatsApp",
      ],
      actionText: "Discuss an app",
      contactService: "Mobile application",
      imageSrc: "/images/services/mobile-apps.jpg",
      cardTheme: "accent",
      icon: Smartphone,
      caseStudy: {
        title: "Avex Logistics Dispatch Portal",
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
        "Real-time triage queues & occupancy boards",
        "Electronic health records (EHR) & patient files",
        "Strict role-based access control (RBAC)",
      ],
      actionText: "Discuss your system",
      contactService: "Custom business software",
      imageSrc: "/images/services/business-erp.jpg",
      cardTheme: "dark",
      icon: Layers,
      caseStudy: {
        title: "Ogechi Hospital Clinical System",
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
        "Automated messaging via WhatsApp Business API",
        "Resilient webhook listeners with retry queues",
        "Instant automated PDF invoice generation",
      ],
      actionText: "Improve a workflow",
      contactService: "Workflow automation",
      imageSrc: "/images/services/workflow-automation.jpg",
      cardTheme: "light",
      icon: Cpu,
      caseStudy: {
        title: "ZidiClinic AI Clinic Operations",
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
        "Virtual card issuance & isolated balances",
        "Third-party CRM & accounting connectors",
      ],
      actionText: "Discuss an integration",
      contactService: "API or software integration",
      imageSrc: "/images/services/apis-integrations.jpg",
      cardTheme: "light",
      icon: Plug,
      caseStudy: {
        title: "Chaen Financial Infrastructure",
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
        "Neon Serverless PostgreSQL connection pooling",
        "Sub-30ms database read latency & query tuning",
        "Continuous 24/7 uptime monitoring & SLAs",
      ],
      actionText: "Discuss ongoing support",
      contactService: "Maintenance and support",
      imageSrc: "/images/services/cloud-infrastructure.jpg",
      cardTheme: "light",
      icon: Wrench,
      caseStudy: {
        title: "Neon Serverless Postgres Architecture",
        href: "/work",
      },
    },
  ];

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-white border-b border-[#E5E7EB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching user template */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-[#4D9218] font-bold text-xs sm:text-sm uppercase tracking-wider block mb-3 font-mono">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#181B1E] leading-[1.2]">
            Our Mission Is To Make Your{" "}
            <span className="bg-[#8EDE35] text-[#181B1E] px-3.5 py-0.5 rounded-xl inline-block shadow-xs">
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

            const isDark = item.cardTheme === "dark";
            const isAccent = item.cardTheme === "accent";

            let cardBg = "bg-white border border-[#E5E7EB] text-[#181B1E]";
            let iconWrapper =
              "bg-[#F1F3F5] text-[#181B1E] border border-[#E2E8F0] group-hover:bg-[#8EDE35] group-hover:text-[#181B1E]";
            let titleColor = "text-[#181B1E]";
            let descColor = "text-[#64748B]";
            let tagColor = "text-muted";
            let ctaColor = "text-[#181B1E] hover:text-[#4D9218]";

            if (isDark) {
              cardBg = "bg-[#181B1E] text-white border border-[#2D333B] shadow-xl";
              iconWrapper = "bg-[#8EDE35] text-[#181B1E]";
              titleColor = "text-white";
              descColor = "text-[#94A3B8]";
              tagColor = "text-[#8EDE35]";
              ctaColor = "text-[#8EDE35] hover:underline";
            } else if (isAccent) {
              cardBg = "bg-[#8EDE35] text-[#181B1E] border border-[#7ECC28] shadow-xl";
              iconWrapper = "bg-[#181B1E] text-[#8EDE35]";
              titleColor = "text-[#181B1E]";
              descColor = "text-[#181B1E]/80";
              tagColor = "text-[#181B1E]/70";
              ctaColor = "text-[#181B1E] font-bold hover:underline";
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
                        className="size-8 rounded-full border border-current/20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
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
                    {item.capabilities.map((cap) => (
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
                      <span className="truncate">Case Study: {item.caseStudy.title}</span>
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

        {/* Section Bottom Links */}
        <div className="mt-14 sm:mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 bg-[#181B1E] text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-[#334655] transition-colors shadow-xs"
          >
            <span>Explore Full Services &amp; Pricing Plans</span>
            <ArrowRight className="size-4" />
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-[#E5E7EB] bg-[#FAF9F6] text-[#181B1E] hover:border-[#8EDE35] text-sm font-medium transition-colors"
          >
            <span>View All Production Case Studies</span>
            <ArrowUpRight className="size-4 text-[#4D9218]" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
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
    </section>
  );
}
