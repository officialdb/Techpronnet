"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
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
    <section className="section-space border-b border-[#E5E7EB] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-3">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E]">
              Services explained clearly.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              We design and build complete digital products tailored specifically to how your business operates.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceMatrix.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#8EDE35] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#181B1E] bg-[#8EDE35] px-2.5 py-0.5 rounded-lg inline-block mb-3">
                  {item.num} / CAPABILITY
                </span>
                <h3 className="text-xl font-extrabold tracking-tight text-[#181B1E] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {item.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {item.deliverables.map((deliv) => (
                    <li key={deliv} className="flex items-start gap-2.5 text-xs text-[#181B1E]/85">
                      <Check className="size-3.5 text-[#4D9218] mt-0.5 shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB]">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#181B1E] hover:text-[#4D9218] transition-colors"
                >
                  <span>Discuss this capability</span>
                  <ArrowUpRight className="size-3.5 text-[#4D9218]" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
