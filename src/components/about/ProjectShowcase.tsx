"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ProjectPreviewFrame } from "@/components/ProjectPreviewFrame";
import { FadeIn } from "@/components/MotionWrapper";

export function ProjectShowcase() {
  const projects = [
    {
      id: "law-firm",
      title: "Legal Practice Website & Client Consultation Platform",
      client: "Nnamdi I. Nwagwu, Esq.",
      domain: "Legal & Professional Advisory",
      url: "https://nnamdinwagwu.com",
      imageSrc: "/images/projects/law.png",
      summary:
        "An understated, high-trust digital platform featuring practice area briefings, direct consultation scheduling, and straightforward legal communication for civil, corporate, and property matters.",
      deliverables: [
        "Confidential client consultation booking engine",
        "Direct attorney contact channels and chambers briefings",
        "Mobile-first responsive architecture loading in under 1 second",
      ],
      results: [
        "+62% Increase in verified client consultation bookings",
        "Direct communication from first consultation to resolution",
        "Responsive, mobile-optimized experience across all devices",
      ],
      servicePrefill: "Website or web portal",
    },
    {
      id: "hospital",
      title: "Hospital Web Portal & Clinical Appointment Booking System",
      client: "Ogechi Hospital",
      domain: "Healthcare & Hospital Administration",
      url: "https://ogechihospital.org",
      imageSrc: "/images/projects/hospotal.png",
      summary:
        "A multi-department clinical operations portal streamlining outpatient appointments, 24/7 emergency care contact, doctor directory, and real-time patient communication.",
      deliverables: [
        "Direct online doctor appointment booking engine",
        "Department directory and outpatient triage guidance",
        "Emergency care line and direct patient contact channels",
      ],
      results: [
        "65% Reduction in patient appointment no-shows",
        "Immediate emergency care access and triage clarity",
        "99.98% System uptime during high-volume hospital hours",
      ],
      servicePrefill: "Custom business software",
    },
    {
      id: "logistics",
      title: "Freight, Cargo & Real-Time Shipment Tracking Portal",
      client: "Avex Logistics Services",
      domain: "Logistics & Supply Chain",
      url: "https://avexlogisticsservices.com",
      imageSrc: "/images/projects/logistics.png",
      summary:
        "A high-performance logistics web platform featuring live shipment tracking via tracking ID, instant freight quote requests, multi-modal transport visibility, and multi-channel customer dispatch.",
      deliverables: [
        "Live cargo tracking ID engine with real-time route verification",
        "Instant multi-modal freight quote calculator",
        "Air, ocean, and road freight operations coordination",
      ],
      results: [
        "-42% Turnaround time for shipment status inquiries",
        "100% Digital tracking transparency with verified dispatch",
        "Seamless customer WhatsApp and email dispatch links",
      ],
      servicePrefill: "Custom business software",
    },
    {
      id: "clinic-erp",
      title: "ZidiClinic AI — Modern Clinic Operations System (Clinic OS)",
      client: "ZidiClinic AI",
      domain: "Clinical Operations & ERP",
      url: "https://zidiai.vercel.app",
      imageSrc: "/images/projects/clinic_erp_and_appointment_booking.png",
      summary:
        "A specialized clinic operating system bringing appointments, patient records, digital billing, pharmacy inventory, and front-desk workflows into one polished web platform.",
      deliverables: [
        "Interactive doctor appointment scheduling & live queue board",
        "AI assistant for patient replies and booking guidance",
        "Digital patient health records, pharmacy stock & billing ledger",
      ],
      results: [
        "+54% Online patient self-service booking adoption",
        "Saved 3.5 front-desk hours per clinic location daily",
        "Sub-second patient history lookup and instant receipt generation",
      ],
      servicePrefill: "Website or web portal",
    },
    {
      id: "aenbase",
      title: "Chaen Financial Commerce Infrastructure & Digital Store",
      client: "Chaen / Aenbase",
      domain: "Financial Technology & Web Platforms",
      url: "https://www.aenbase.com",
      imageSrc: "/images/projects/aenbase.png",
      summary:
        "A scalable financial technology platform featuring virtual Visa card issuance, isolated spend balances, 15-minute locked checkout rates, and immutable ledger reconciliation.",
      deliverables: [
        "Virtual Visa card issuance engine funded from isolated balances",
        "15-minute locked checkout rates on digital commerce transactions",
        "Immutable ledger reconciliation with sub-second execution",
      ],
      results: [
        "100% Custom workflow match with zero external software bloat",
        "Zero downtime recorded across continuous production updates",
        "High-performance responsive rendering across mobile & desktop",
      ],
      servicePrefill: "Custom business software",
    },
  ];

  return (
    <section className="section-space border-b border-line bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <p className="eyebrow uppercase text-[11px] sm:text-xs font-semibold text-muted mb-4">
              Real Project Deployments
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
              Systems in production.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Explore concrete examples of custom business software, portals, healthcare systems, and automated workflows engineered by Techpronnet Technologies. Click any screenshot to view in full resolution.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className={`pt-10 sm:pt-14 ${idx !== 0 ? "border-t border-line" : ""}`}
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                {/* Visual UI Screenshot Frame */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <ProjectPreviewFrame
                    imageSrc={project.imageSrc}
                    imageAlt={project.title}
                    url={project.url}
                    title={project.title}
                    tag={project.domain}
                  />
                </div>

                {/* Editorial Details */}
                <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                  <div>
                    <span className="font-mono text-xs uppercase text-navy font-semibold tracking-wider block mb-2">
                      {project.domain} · {project.client}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted leading-relaxed mt-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-line/60">
                    <span className="text-xs font-mono uppercase text-ink font-semibold block mb-2.5">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2 text-xs text-muted">
                      {project.deliverables.map((deliv) => (
                        <li key={deliv} className="flex items-start gap-2">
                          <Check className="size-3.5 text-navy mt-0.5 shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-line/60">
                    <span className="text-xs font-mono uppercase text-navy font-semibold block mb-2.5">
                      Measured Business Impact
                    </span>
                    <ul className="space-y-1.5 text-xs text-ink/90 font-medium">
                      {project.results.map((res) => (
                        <li key={res} className="flex items-baseline gap-2">
                          <span className="font-mono text-navy">&rarr;</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-ink hover:text-navy transition-colors pb-1 border-b border-line hover:border-navy"
                    >
                      <span>Discuss a similar solution for your business</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
