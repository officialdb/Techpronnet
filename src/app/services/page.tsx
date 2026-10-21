import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceVisualFrame } from "@/components/services/ServiceVisualFrame";
import { FadeIn } from "@/components/MotionWrapper";
import { ArrowRight, Check, ArrowUpRight, Clock, ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities | Techpronnet Technologies — Software Built Around Your Business",
  description:
    "Explore our core engineering disciplines: custom web applications, hospital and clinical management systems, logistics operations consoles, clinic ERP suites, financial commerce platforms, and Neon PostgreSQL cloud infrastructure.",
  openGraph: {
    title: "Services & Capabilities | Techpronnet Technologies",
    description:
      "Precision software engineering, custom business platforms, healthcare systems, and automated workflows designed around how your organization operates.",
    type: "website",
    siteName: "Techpronnet Technologies",
  },
};

export default function ServicesPage() {
  const serviceOfferings = [
    {
      id: "web-portals",
      num: "01",
      category: "Web Platforms & Client Portals",
      title: "Websites, Booking Engines & Secure Client Portals",
      tagline: "High-trust digital frontends engineered for client onboarding, intake, and self-service.",
      problem:
        "Growing professional practices and commercial businesses often rely on disjointed email threads, lost attachments, and manual scheduling back-and-forth. This frustrates high-value clients and slows down operations.",
      approach:
        "We build fast, responsive web applications and confidential client portals. Clients can self-book appointments, securely transmit confidential documentation, and track project status in a single, branded digital experience.",
      capabilities: [
        "Confidential client intake questionnaires with role-based routing",
        "Direct real-time consultation scheduling & calendar sync",
        "Encrypted client document room with 256-bit access controls",
        "SEO-engineered page architectures loading in under 1 second",
      ],
      deliverables: "Design Systems, Next.js Frontend, Secure Consultation Engine, Cloud DB",
      contactService: "Website or web portal",
      isReversed: false,
      imageSrc: "/images/services/web-portals.jpg",
      badge: "Next.js 16 SSR",
      caseStudyLink: {
        client: "Nnamdi I. Nwagwu, Esq. — Legal Practice Portal",
        href: "/work#law-portal",
      },
    },
    {
      id: "healthcare-systems",
      num: "02",
      category: "Healthcare & Hospital Operations",
      title: "Hospital Web Portals & Clinical Management Systems",
      tagline: "Streamlining outpatient triage, patient records, and doctor scheduling.",
      problem:
        "Healthcare organizations require systems where reliability is non-negotiable. Outdated paper records and manual coordination cause waiting room congestion and communication breakdowns.",
      approach:
        "We engineer comprehensive hospital platforms that manage patient flow, outpatient triage, doctor shift allocations, and automated appointment communications, reducing missed visits and eliminating waiting room gridlock.",
      capabilities: [
        "Real-time patient triage queue and department occupancy boards",
        "Automated patient appointment reminders via SMS & WhatsApp",
        "Doctor shift scheduling with consultation slot limits",
        "Fast EHR indexing across patient records with audit logs",
      ],
      deliverables: "Clinical EHR, Triage Dashboard, Emergency Routing, Cloud DB",
      contactService: "Custom business software",
      isReversed: true,
      imageSrc: "/images/services/business-erp.jpg",
      badge: "Clinical Management",
      caseStudyLink: {
        client: "Ogechi Hospital — Clinical Management System",
        href: "/work#hospital-system",
      },
    },
    {
      id: "logistics-systems",
      num: "03",
      category: "Logistics & Supply Chain Operations",
      title: "Freight, Cargo & Real-Time Shipment Tracking Consoles",
      tagline: "Replacing manual manifests with live tracking, instant quotes, and verified route milestones.",
      problem:
        "Logistics coordinators waste hundreds of hours each week on phone calls and paper waybills to answer basic questions about freight locations, quotes, and driver statuses.",
      approach:
        "We build integrated logistics portals featuring end-to-end cargo tracking by tracking ID, instant multi-modal freight quotes, driver assignment queues, and automated WhatsApp/email customer updates.",
      capabilities: [
        "Real-time shipment tracking ID search with verified route milestones",
        "Instant multi-modal freight quotes across road, air, and ocean cargo",
        "Dynamic driver assignment queues and digital manifest generation",
        "Direct multi-channel customer dispatch and WhatsApp integration",
      ],
      deliverables: "Operations Portal, Live Shipment Tracking, Quote Engine",
      contactService: "Custom business software",
      isReversed: false,
      imageSrc: "/images/services/mobile-apps.jpg",
      badge: "Live Tracking & Quotes",
      caseStudyLink: {
        client: "Avex Logistics Services — Freight & Tracking Portal",
        href: "/work#logistics-console",
      },
    },
    {
      id: "clinic-erp",
      num: "04",
      category: "Clinical Operations & ERP",
      title: "Clinic ERP & Outpatient Appointment Booking Suites",
      tagline: "Specialized operating systems unifying appointments, patient records, pharmacy, and billing.",
      problem:
        "Specialized private clinics and diagnostic centers often juggle three separate tools for appointments, pharmacy stock, and patient records, creating front-desk chaos.",
      approach:
        "We build unified clinic operating systems (Clinic OS) that integrate doctor appointment availability, multi-channel booking reminders, digital patient intake histories, and instant pharmacy billing into one cohesive interface.",
      capabilities: [
        "Interactive doctor appointment calendar with real-time slot locks",
        "AI assistant for patient replies and appointment scheduling guidance",
        "Digital patient intake forms with medical history logging",
        "Instant billing invoicing and pharmacy inventory coordination",
      ],
      deliverables: "Patient Booking Portal, Doctor Console, AI Booking Assistant",
      contactService: "Website or web portal",
      isReversed: true,
      imageSrc: "/images/projects/clinic_erp_and_appointment_booking.png",
      badge: "Clinic OS Suite",
      caseStudyLink: {
        client: "ZidiClinic AI — Modern Clinic Operations System",
        href: "/work#clinic-erp",
      },
    },
    {
      id: "financial-commerce",
      num: "05",
      category: "Financial Technology & Commerce Platforms",
      title: "Financial Commerce Infrastructure & Digital Store Platforms",
      tagline: "Virtual card issuance, isolated spend balances, and immutable ledger reconciliation.",
      problem:
        "Modern digital commerce platforms require sub-second payment execution, multi-currency virtual cards, and ironclad ledger reconciliation without relying on inflexible legacy banking software.",
      approach:
        "We engineer high-performance financial technology platforms with virtual Visa card issuance, isolated spend balances, 15-minute locked checkout rates on digital transactions, and atomic ledger reconciliation against Neon PostgreSQL.",
      capabilities: [
        "Virtual Visa card issuance engine funded from isolated balances",
        "15-minute locked checkout rates on digital commerce transactions",
        "Immutable ledger reconciliation with sub-second execution",
        "High-performance responsive rendering across mobile & desktop",
      ],
      deliverables: "Financial Commerce Portal, Ledger Engine, Card Issuance API",
      contactService: "Custom business software",
      isReversed: false,
      imageSrc: "/images/services/workflow-automation.jpg",
      badge: "Commerce & Ledgers",
      caseStudyLink: {
        client: "Chaen — Financial Commerce Infrastructure & Digital Store",
        href: "/work#aenbase-platform",
      },
    },
    {
      id: "cloud-infrastructure",
      num: "06",
      category: "Cloud Infrastructure & SLA Support",
      title: "Cloud Infrastructure, Neon Postgres & Maintenance",
      tagline: "High-availability serverless backends backed by continuous engineering care.",
      problem:
        "Software downtime, database connection spikes, and unresolved technical glitches erode customer trust and directly impact revenue.",
      approach:
        "We architect scalable serverless database environments on Neon PostgreSQL, configure connection pooling, optimize complex SQL queries, and provide guaranteed SLA-backed technical maintenance so your platforms stay resilient.",
      capabilities: [
        "Serverless PostgreSQL provisioning with PgBouncer connection pooling",
        "Query indexing optimization and query performance tuning (<30ms response)",
        "Automated database backups, point-in-time recovery, and zero-downtime migrations",
        "Continuous uptime monitoring with guaranteed engineering escalation SLAs",
      ],
      deliverables: "Database Tuning, Cloud Cutover, Continuous SLA Coverage",
      contactService: "Maintenance and support",
      isReversed: true,
      imageSrc: "/images/services/cloud-infrastructure.jpg",
      badge: "Neon Serverless DB",
      caseStudyLink: {
        client: "Neon Postgres Serverless Architecture (Across All Deployments)",
        href: "/work",
      },
    },
  ];

  const comparisonRows = [
    {
      dimension: "Codebase Ownership",
      techpronnet: "100% bespoke source code owned entirely by your business with zero recurring licensing fees.",
      generic: "Locked into proprietary SaaS platforms, generic themes, or closed vendor ecosystems.",
    },
    {
      dimension: "Operational Alignment",
      techpronnet: "Engineered around your exact team rules, triage procedures, and custom business logic.",
      generic: "Forces your team to compromise operational processes to fit rigid pre-built software limits.",
    },
    {
      dimension: "Database Architecture",
      techpronnet: "Modern serverless Neon PostgreSQL with sub-30ms queries and dedicated connection pooling.",
      generic: "Bloated monolithic databases, slow plugin queries, or black-box no-code databases.",
    },
    {
      dimension: "Security & Permissions",
      techpronnet: "Strict role-based access control (RBAC), server-side Zod validation, and immutable audit logs.",
      generic: "Basic admin/user roles with third-party plugin vulnerabilities and no audit trails.",
    },
    {
      dimension: "Ongoing Engineering Care",
      techpronnet: "Dedicated SLA engineering coverage with direct access to the software engineers who built it.",
      generic: "Outsourced tier-1 ticket queues with slow escalation and abandoned post-launch support.",
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
                  Core Engineering Disciplines · Techpronnet Technologies
                </p>
                <h1 className="text-[34px] sm:text-5xl lg:text-[64px] leading-[1.08] tracking-[-.05em] sm:tracking-[-.055em] font-semibold text-ink">
                  Software engineered around your business.
                  <span className="block text-muted font-normal mt-1 sm:mt-2">
                    Engineered from first principles.
                  </span>
                </h1>
                <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                  We don&apos;t resell generic templates or fragile off-the-shelf plugins. We design, engineer, and maintain custom digital platforms tailored to your operational workflows, customer interactions, and data models.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-3 bg-ink text-white px-7 py-3.5 sm:py-4 text-sm font-medium hover:bg-navy transition-colors text-center w-full sm:w-auto shadow-xs"
                  >
                    Start a Project Discussion
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center gap-3 border border-line bg-white px-7 py-3.5 sm:py-4 text-sm font-medium text-ink hover:border-ink transition-colors text-center w-full sm:w-auto"
                  >
                    Explore Production Systems
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Quick Anchor Navigation Strip */}
            <div className="mt-14 sm:mt-20 border-t border-line pt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono text-muted">
              <span className="text-navy font-semibold uppercase">Jump to Offering:</span>
              <a href="#web-portals" className="hover:text-ink transition-colors">
                01. Web Portals &amp; Platforms
              </a>
              <a href="#healthcare-systems" className="hover:text-ink transition-colors">
                02. Hospital Systems
              </a>
              <a href="#logistics-systems" className="hover:text-ink transition-colors">
                03. Logistics Consoles
              </a>
              <a href="#clinic-erp" className="hover:text-ink transition-colors">
                04. Clinic ERP Suite
              </a>
              <a href="#financial-commerce" className="hover:text-ink transition-colors">
                05. Financial Commerce
              </a>
              <a href="#cloud-infrastructure" className="hover:text-ink transition-colors">
                06. Cloud &amp; Neon Postgres
              </a>
            </div>
          </div>
        </section>

        {/* Alternating Service Offering Sections */}
        {serviceOfferings.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            className={`section-space border-b border-line scroll-mt-16 ${
              idx % 2 === 1 ? "bg-sand/30" : "bg-white"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Visual Image Display Column */}
                <div
                  className={`lg:col-span-6 ${
                    section.isReversed ? "order-2 lg:order-1" : "order-2 lg:order-2"
                  }`}
                >
                  <FadeIn direction="up">
                    <ServiceVisualFrame
                      imageSrc={section.imageSrc}
                      imageAlt={section.title}
                      category={section.category}
                      badge={section.badge}
                      caseStudyLink={section.caseStudyLink}
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
                        {section.approach}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-line/70">
                      <span className="text-xs font-mono uppercase text-ink font-semibold block mb-3">
                        Key Capabilities &amp; Engineering Scope
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

                    <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs border-t border-line/70">
                      <span className="font-mono text-muted text-[11px]">
                        Deliverables: {section.deliverables}
                      </span>
                      <Link
                        href={`/#contact?service=${encodeURIComponent(section.contactService)}`}
                        className="inline-flex items-center gap-2 font-semibold text-ink hover:text-navy transition-colors pb-1 border-b border-line hover:border-navy"
                      >
                        <span>Discuss this offering</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Engineering Standards & Comparison Matrix */}
        <section className="section-space border-b border-line bg-paper">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <div className="max-w-2xl mb-12 sm:mb-16">
                <p className="eyebrow uppercase text-[11px] sm:text-xs font-semibold text-muted mb-4">
                  Engineering Standards
                </p>
                <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
                  How our engineering differs.
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
                  We believe commercial software should be an enduring corporate asset, not an endless subscription headache.
                </p>
              </div>

              <div className="border border-line bg-white shadow-xs overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-[#F3F2EC] border-b border-line text-ink font-semibold font-mono text-xs uppercase tracking-wider">
                      <th className="p-4 sm:p-5 w-1/4">Evaluation Criteria</th>
                      <th className="p-4 sm:p-5 w-5/12 text-navy bg-sand/60 border-l border-r border-line">
                        Techpronnet Engineering
                      </th>
                      <th className="p-4 sm:p-5 w-1/3 text-muted">
                        Generic Agencies / SaaS Templates
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {comparisonRows.map((row) => (
                      <tr key={row.dimension} className="hover:bg-sand/20 transition-colors">
                        <td className="p-4 sm:p-5 font-semibold text-ink font-mono text-xs">
                          {row.dimension}
                        </td>
                        <td className="p-4 sm:p-5 text-ink leading-relaxed bg-sand/30 border-l border-r border-line font-medium">
                          {row.techpronnet}
                        </td>
                        <td className="p-4 sm:p-5 text-muted leading-relaxed">
                          {row.generic}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

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
                      className="inline-flex items-center justify-center gap-2.5 bg-ink text-white px-8 py-4 text-sm font-medium hover:bg-navy transition-colors text-center w-full sm:w-auto shadow-xs"
                    >
                      <span>Tell Us About Your Project</span>
                      <ArrowRight className="size-4" />
                    </Link>

                    <Link
                      href="/work"
                      className="inline-flex items-center justify-center gap-2 border border-line bg-paper px-6 py-3.5 text-xs font-mono font-medium text-ink hover:border-ink transition-colors text-center w-full sm:w-auto"
                    >
                      <span>Browse Real Case Studies</span>
                      <ArrowUpRight className="size-3.5" />
                    </Link>

                    <a
                      href="mailto:contact@techpronnet.com"
                      className="inline-flex items-center justify-center gap-2 text-xs font-mono text-muted hover:text-ink transition-colors text-center"
                    >
                      <Mail className="size-3 text-navy" />
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
