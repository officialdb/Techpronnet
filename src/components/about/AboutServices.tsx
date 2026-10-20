"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function AboutServices() {
  const serviceMatrix = [
    {
      id: "web",
      num: "01",
      title: "Websites & Digital Portals",
      description:
        "High-performance corporate websites, client self-service portals, booking platforms, and consultation intake engines designed with modern Next.js and clean UI engineering.",
      deliverables: [
        "Corporate & Professional Services Sites (e.g. Law Firm Portals)",
        "Client Self-Service & Appointment Booking Engines",
        "Secure User Authentication & Account Dashboards",
      ],
      servicePrefill: "Website or web portal",
    },
    {
      id: "healthcare",
      num: "02",
      title: "Hospital & Healthcare Systems",
      description:
        "Specialized clinical management platforms, outpatient triage queues, electronic patient intake, and automated appointment communication systems.",
      deliverables: [
        "Patient Intake & Outpatient Clinic Schedulers",
        "Doctor Shift Rosters & Department Management",
        "Automated Patient Reminders via SMS & WhatsApp",
      ],
      servicePrefill: "Custom business software",
    },
    {
      id: "software",
      num: "03",
      title: "Custom Business Software & ERP",
      description:
        "Tailor-made management dashboards, dispatch consoles, inventory reconciliation, and operational audit tools that match your specific organizational processes.",
      deliverables: [
        "Centralized Operational Dispatch Consoles",
        "Multi-Warehouse Inventory & SKU Tracking",
        "Role-Based Access Controls & Audit Logging",
      ],
      servicePrefill: "Custom business software",
    },
    {
      id: "mobile",
      num: "04",
      title: "Mobile Applications",
      description:
        "Cross-platform iOS and Android mobile experiences engineered for customer interaction, field service teams, and on-the-go driver dispatch coordination.",
      deliverables: [
        "Responsive Native-Grade Mobile Apps",
        "Offline-First Synchronization & Geolocation",
        "Driver Telematics & Push Notification Alerts",
      ],
      servicePrefill: "Mobile application",
    },
    {
      id: "automation",
      num: "05",
      title: "Workflow Automation & APIs",
      description:
        "Automated data pipelines, webhook consumers, and third-party API bridges that connect separated business tools to eliminate manual repetitive work.",
      deliverables: [
        "Payment Gateway & Invoice Automation",
        "CRM & Logistics Webhook Bridges",
        "Automated Document & Report Generation",
      ],
      servicePrefill: "Workflow automation",
    },
    {
      id: "support",
      num: "06",
      title: "Cloud Infrastructure & Support",
      description:
        "Serverless database tuning (Postgres/Neon), continuous performance monitoring, security patches, and SLA-backed engineering coverage.",
      deliverables: [
        "Database Indexing & Query Tuning",
        "Zero-Downtime Cloud Cutover & Deployments",
        "Ongoing Security Updates & Maintenance",
      ],
      servicePrefill: "Maintenance and support",
    },
  ];

  return (
    <section className="section-space border-b border-line bg-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <p className="eyebrow uppercase text-[11px] sm:text-xs font-semibold text-muted mb-4">
              Core Capabilities
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
              Services explained clearly.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              We design and build complete digital products tailored specifically to how your business operates.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {serviceMatrix.map((item) => (
            <article
              key={item.id}
              className="pt-7 border-t border-line flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-muted block mb-2">
                  {item.num} / CAPABILITY
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-ink mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {item.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {item.deliverables.map((deliv) => (
                    <li key={deliv} className="flex items-start gap-2 text-xs text-ink/80">
                      <Check className="size-3.5 text-navy mt-0.5 shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-xs font-medium text-ink hover:text-navy transition-colors pb-1 border-b border-line hover:border-navy"
                >
                  <span>Discuss this capability</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
