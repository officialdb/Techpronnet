import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectPreviewFrame } from "@/components/ProjectPreviewFrame";
import { FadeIn } from "@/components/MotionWrapper";
import { ArrowRight, Check, ArrowUpRight, Clock, ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Techpronnet Technologies — Software Built Around Your Business",
  description:
    "Explore our complete services: custom websites and client portals, hospital and healthcare systems, custom business software, mobile applications, workflow automation, and cloud infrastructure.",
  openGraph: {
    title: "Services | Techpronnet Technologies",
    description:
      "Precision software engineering, custom business platforms, healthcare systems, and automated workflows designed around how your organization operates.",
    type: "website",
    siteName: "Techpronnet Technologies",
  },
};

export default function ServicesPage() {
  const serviceSections = [
    {
      id: "web-portals",
      num: "01",
      category: "Web & Client Portals",
      title: "Websites, Booking Engines & Client Portals",
      tagline: "Designed for high-trust conversions and frictionless client interaction.",
      description:
        "We build fast, responsive websites and confidential self-service portals tailored for professional practices and commercial businesses. From corporate legal portals to client intake engines, we eliminate disjointed email chains and replace them with secure, brand-aligned digital platforms.",
      exemplarName: "Sterling & Partners Legal Counsel",
      exemplarUrl: "https://sterlingpartners.legal",
      previewType: "law-firm" as const,
      isReversed: false,
      capabilities: [
        "Confidential client intake questionnaires with role-based routing",
        "Direct real-time consultation scheduling & calendar sync",
        "Encrypted client document room with 256-bit access controls",
        "SEO-engineered page architectures loading in under 1 second",
      ],
      deliverables: "Design Systems, Next.js Frontend, Secure Auth, Postgres DB",
      contactService: "Website or web portal",
    },
    {
      id: "healthcare-systems",
      num: "02",
      category: "Healthcare & Clinics",
      title: "Hospital & Clinical Management Systems",
      tagline: "Streamlining outpatient triage, patient records, and doctor scheduling.",
      description:
        "Healthcare organizations require systems where reliability is non-negotiable. We engineer comprehensive clinic platforms that manage patient flow, outpatient triage, doctor shift allocations, and automated appointment communications, reducing missed visits and eliminating waiting room gridlock.",
      exemplarName: "St. Jude Metropolitan Health System",
      exemplarUrl: "https://portal.stjude-health.org",
      previewType: "hospital" as const,
      isReversed: true,
      capabilities: [
        "Real-time patient triage queue and department occupancy boards",
        "Automated patient appointment reminders via SMS & WhatsApp",
        "Doctor shift scheduling with consultation slot limits",
        "Fast EHR search across 25,000+ patient records with audit logs",
      ],
      deliverables: "Clinical EHR, Triage Dashboard, WhatsApp/SMS API, Cloud DB",
      contactService: "Custom business software",
    },
    {
      id: "custom-software",
      num: "03",
      category: "Business Software & ERP",
      title: "Custom Business Software, ERP & Operations Consoles",
      tagline: "Reflecting the exact operational logic of how your business operates.",
      description:
        "Off-the-shelf software forces teams into awkward workarounds. We build custom operational dashboards, dispatch consoles, and inventory tracking engines that mirror your exact business rules, giving managers immediate real-time visibility and eliminating manual spreadsheets.",
      exemplarName: "Apex Freight Global Operations",
      exemplarUrl: "https://dispatch.apexlogistics.com",
      previewType: "logistics" as const,
      isReversed: false,
      capabilities: [
        "Centralized operations console with live GPS telemetry",
        "Dynamic driver assignment queues and digital manifest generation",
        "Multi-warehouse inventory cross-docking and stock reconciliation",
        "Granular role-based permissions with comprehensive activity logging",
      ],
      deliverables: "Operations Portal, Live Fleet Telematics, Inventory Sync",
      contactService: "Custom business software",
    },
    {
      id: "mobile-apps",
      num: "04",
      category: "Mobile Engineering",
      title: "Cross-Platform Mobile Applications",
      tagline: "Native-grade mobile tools for field workforces and customer engagement.",
      description:
        "We develop iOS and Android mobile experiences engineered for users in motion. Whether equipping field drivers with offline waypoint navigation and digital signature capture, or giving customers on-demand access to services, our mobile apps run smoothly across all modern devices.",
      exemplarName: "FieldOps Mobile Suite",
      exemplarUrl: "https://fieldops.techpronnet.com",
      previewType: "mobile-app" as const,
      isReversed: true,
      capabilities: [
        "Offline-first local data caching with automatic background cloud sync",
        "Digital signature capture, camera document scanning, and geofencing",
        "Low-latency push notifications for alerts, milestones, and dispatches",
        "Unified codebase running natively on both iOS and Android",
      ],
      deliverables: "iOS & Android Builds, Offline Engine, Background Sync",
      contactService: "Mobile application",
    },
    {
      id: "workflow-automation",
      num: "05",
      category: "Automation & Integration",
      title: "Workflow Automation & API Integrations",
      tagline: "Connecting disconnected business tools into synchronized pipelines.",
      description:
        "Manual data reentry between software tools is the largest hidden tax on growing organizations. We engineer resilient webhook bridges, event-driven pipelines, and API integrations that connect your payment providers, accounting systems, CRM, and databases into one cohesive machine.",
      exemplarName: "Automated Multi-Step Event Pipeline",
      exemplarUrl: "https://events.techpronnet.com",
      previewType: "automation" as const,
      isReversed: false,
      capabilities: [
        "Automated multi-step event triggers and webhook consumers",
        "Payment gateway synchronization with automatic invoice generation",
        "Scheduled data aggregation pipelines with error recovery and alerts",
        "Custom REST and GraphQL API endpoints for internal & partner use",
      ],
      deliverables: "Webhook Pipelines, Stripe Integration, Automated Docs",
      contactService: "Workflow automation",
    },
    {
      id: "cloud-infrastructure",
      num: "06",
      category: "Cloud & Support",
      title: "Cloud Infrastructure, Neon Postgres & SLA Support",
      tagline: "High-availability cloud architectures backed by continuous technical care.",
      description:
        "Launching your software is only the beginning. We design serverless cloud infrastructure on modern platforms like Neon PostgreSQL, optimize database queries, perform routine security audits, and provide dedicated SLA-backed engineering coverage so your systems never skip a beat.",
      exemplarName: "Neon Postgres & Cloud Edge Engine",
      exemplarUrl: "https://db.techpronnet.com",
      previewType: "cloud-db" as const,
      isReversed: true,
      capabilities: [
        "Serverless Postgres database configuration with connection pooling",
        "Sub-100ms global query execution and automatic indexing audits",
        "Zero-downtime database migrations and cloud cutover execution",
        "Continuous 24/7 health monitoring and guaranteed escalation SLAs",
      ],
      deliverables: "Database Tuning, Cloud Cutover, Continuous SLA Coverage",
      contactService: "Maintenance and support",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Services Hero */}
        <section className="border-b border-line bg-paper">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
            <div className="max-w-3xl">
              <FadeIn direction="up">
                <p className="eyebrow uppercase text-[11px] sm:text-xs font-semibold text-muted mb-4 sm:mb-6">
                  Services &amp; Core Disciplines · Techpronnet Technologies
                </p>
                <h1 className="text-[34px] sm:text-5xl lg:text-[64px] leading-[1.08] tracking-[-.05em] sm:tracking-[-.055em] font-semibold text-ink">
                  Software engineered around your business.
                  <span className="block text-muted font-normal mt-1 sm:mt-2">
                    Not around generic templates.
                  </span>
                </h1>
                <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                  We design, build, and support mission-critical digital systems—from confidential legal client portals and clinical healthcare platforms to real-time dispatch consoles and event-driven automation.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-3 bg-ink text-white px-7 py-3.5 sm:py-4 text-sm font-medium hover:bg-navy transition-colors text-center w-full sm:w-auto"
                  >
                    Start a Project Discussion
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="#web-portals"
                    className="inline-flex items-center justify-center gap-3 border border-line bg-white px-7 py-3.5 sm:py-4 text-sm font-medium text-ink hover:border-ink transition-colors text-center w-full sm:w-auto"
                  >
                    Browse Core Disciplines
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Quick Anchor Navigation Strip */}
            <div className="mt-14 sm:mt-20 border-t border-line pt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono text-muted">
              <span className="text-navy font-semibold uppercase">Jump to:</span>
              <a href="#web-portals" className="hover:text-ink transition-colors">
                01. Web &amp; Portals
              </a>
              <a href="#healthcare-systems" className="hover:text-ink transition-colors">
                02. Hospital Systems
              </a>
              <a href="#custom-software" className="hover:text-ink transition-colors">
                03. Custom Software
              </a>
              <a href="#mobile-apps" className="hover:text-ink transition-colors">
                04. Mobile Apps
              </a>
              <a href="#workflow-automation" className="hover:text-ink transition-colors">
                05. Automation &amp; APIs
              </a>
              <a href="#cloud-infrastructure" className="hover:text-ink transition-colors">
                06. Cloud &amp; SLA
              </a>
            </div>
          </div>
        </section>

        {/* Alternating Service Sections */}
        {serviceSections.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            className={`section-space border-b border-line scroll-mt-16 ${
              idx % 2 === 1 ? "bg-sand/30" : "bg-white"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Visual UI Frame Column */}
                <div
                  className={`lg:col-span-6 ${
                    section.isReversed ? "order-2 lg:order-1" : "order-2 lg:order-2"
                  }`}
                >
                  <FadeIn direction="up">
                    <ProjectPreviewFrame
                      type={section.previewType}
                      url={section.exemplarUrl}
                      title={section.exemplarName}
                    />
                  </FadeIn>
                </div>

                {/* Editorial Copy Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    section.isReversed ? "order-1 lg:order-2" : "order-1 lg:order-1"
                  }`}
                >
                  <FadeIn direction="up">
                    <div>
                      <span className="font-mono text-xs uppercase text-navy font-semibold tracking-wider block mb-2">
                        {section.num} / {section.category}
                      </span>
                      <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-.045em] leading-[1.15] text-ink">
                        {section.title}
                      </h2>
                      <p className="text-base sm:text-lg text-ink font-medium mt-3 leading-snug">
                        {section.tagline}
                      </p>
                      <p className="text-sm sm:text-base text-muted leading-relaxed mt-4">
                        {section.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-line/70">
                      <span className="text-xs font-mono uppercase text-ink font-semibold block mb-3">
                        Key Capabilities &amp; Architecture
                      </span>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-muted">
                        {section.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-2.5">
                            <Check className="size-4 text-navy mt-0.5 shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                      <span className="font-mono text-muted">
                        Deliverables: {section.deliverables}
                      </span>
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 font-semibold text-ink hover:text-navy transition-colors pb-1 border-b border-line hover:border-navy"
                      >
                        <span>Discuss this solution</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Closing Contact CTA */}
        <section className="section-space bg-sand border-b border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <div className="bg-white border border-line p-8 sm:p-14 lg:p-16">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-8">
                    <p className="eyebrow uppercase text-[11px] sm:text-xs font-semibold text-muted mb-3 sm:mb-4">
                      Initiate A Project
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
                      Have a specific software requirement in mind?
                    </h2>
                    <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                      We discuss requirements openly, evaluate architectural feasibility, and deliver tailored digital systems without unnecessary layers or bloated overhead.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5 text-navy shrink-0" />
                        <span>Direct response within 24 business hours</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="size-3.5 text-navy shrink-0" />
                        <span>No-obligation scope &amp; architecture review</span>
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-3.5 lg:items-end">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2.5 bg-ink text-white px-8 py-4 text-sm font-medium hover:bg-navy transition-colors text-center w-full sm:w-auto"
                    >
                      <span>Tell Us About Your Project</span>
                      <ArrowRight className="size-4" />
                    </Link>

                    <a
                      href="mailto:contact@techpronnet.com"
                      className="inline-flex items-center justify-center gap-2 border border-line bg-paper px-6 py-3.5 text-xs font-mono font-medium text-ink hover:border-ink transition-colors text-center w-full sm:w-auto"
                    >
                      <Mail className="size-3.5 text-navy" />
                      <span>contact@techpronnet.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
