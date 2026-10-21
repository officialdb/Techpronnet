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
    "Explore our 6 core engineering disciplines: websites & portals, mobile applications, custom business software, workflow automation, APIs & integrations, and ongoing maintenance & support.",
  openGraph: {
    title: "Services & Capabilities | Techpronnet Technologies",
    description:
      "Precision software engineering, websites & portals, mobile applications, custom business software, workflow automation, APIs & integrations, and cloud maintenance.",
    type: "website",
    siteName: "Techpronnet Technologies",
  },
};

export default function ServicesPage() {
  const serviceOfferings = [
    {
      id: "web-portals",
      num: "01",
      tag: "01 / Web",
      category: "Websites & Portals",
      title: "Websites & Portals",
      tagline:
        "Professional websites, booking platforms and customer portals designed around your brand and audience.",
      problem:
        "Growing professional practices and commercial businesses often struggle with fragmented communication, lost attachments, and manual scheduling back-and-forth. Off-the-shelf templates look generic, load slowly, and fail to build client trust.",
      approach:
        "We engineer high-performance web applications, responsive websites, and secure client self-service portals. Every platform is custom-built with Next.js 16 SSR, sub-second response times, and confidential intake workflows tailored to your operational needs.",
      capabilities: [
        "Confidential client intake questionnaires with role-based document routing",
        "Interactive appointment booking engines with real-time calendar synchronization",
        "Encrypted client self-service portals with secure document verification",
        "High-performance Next.js 16 architectures loading under 1 second with robust SEO",
      ],
      deliverables: "Custom Web Application, Booking Engine, Client Portal, CMS Integration",
      actionText: "Discuss a website",
      contactService: "Website or web portal",
      isReversed: false,
      imageSrc: "/images/services/web-portals.jpg",
      badge: "Next.js 16 Web Platform",
      caseStudyLink: {
        client: "Nnamdi I. Nwagwu, Esq. — Legal Practice Portal",
        href: "/work#law-portal",
      },
    },
    {
      id: "mobile-apps",
      num: "02",
      tag: "02 / Mobile",
      category: "Mobile Applications",
      title: "Mobile Applications",
      tagline:
        "Mobile experiences that help customers access your services and help teams work wherever business takes them.",
      problem:
        "Field operatives, couriers, and on-the-go clients need fast, dependable access to your systems. Relying on phone calls, spreadsheets, or desktop-only interfaces creates dispatch lags, misplaced cargo, and poor customer transparency.",
      approach:
        "We build responsive, native-grade mobile applications for iOS and Android. From real-time route telematics and driver dispatch queues to customer self-service mobile booking, our apps deliver smooth 60fps gesture interfaces and offline data resilience.",
      capabilities: [
        "Cross-platform iOS and Android mobile applications with native device capabilities",
        "Live GPS tracking, route milestone updates, and instant delivery verification",
        "Push notification pipelines for appointment reminders, order updates, and urgent alerts",
        "Offline-first local caching for field personnel operating in low-connectivity areas",
      ],
      deliverables: "iOS & Android Builds, Telematics Engine, Driver/Field Console, Push Pipelines",
      actionText: "Discuss an app",
      contactService: "Mobile application",
      isReversed: true,
      imageSrc: "/images/services/mobile-apps.jpg",
      badge: "Native-Grade Mobile",
      caseStudyLink: {
        client: "Avex Logistics Services — Freight & Tracking Console",
        href: "/work#logistics-console",
      },
    },
    {
      id: "business-software",
      num: "03",
      tag: "03 / Software",
      category: "Custom Business Software",
      title: "Custom Business Software",
      tagline:
        "Dashboards, management systems and internal tools that reflect how your business actually operates.",
      problem:
        "Commercial SaaS products force organizations to compromise their internal processes to fit rigid software constraints. Juggling disjointed subscriptions leads to duplicated data entry, operational blind spots, and rising monthly overhead.",
      approach:
        "We architect bespoke operations platforms, enterprise resource planning (ERP) suites, and clinic management consoles. Designed around your precise triage rules, inventory workflows, and team roles, our systems keep your entire organization synchronized.",
      capabilities: [
        "Real-time triage queues, occupancy dashboards, and department workflow boards",
        "Comprehensive electronic health records (EHR) & customer relationship management (CRM)",
        "Granular role-based access control (RBAC) with immutable audit logging",
        "Pharmacy inventory management, automated stock alerts, and multi-tier invoicing",
      ],
      deliverables: "Operations ERP, Multi-Role Dashboards, EHR/CRM Engine, Audit Trails",
      actionText: "Discuss your system",
      contactService: "Custom business software",
      isReversed: false,
      imageSrc: "/images/services/business-erp.jpg",
      badge: "Clinical & Operations ERP",
      caseStudyLink: {
        client: "Ogechi Hospital & ZidiClinic Management Systems",
        href: "/work#hospital-system",
      },
    },
    {
      id: "workflow-automation",
      num: "04",
      tag: "04 / Automation",
      category: "Workflow Automation",
      title: "Workflow Automation",
      tagline:
        "Connect existing tools, streamline recurring tasks and reduce unnecessary manual processes.",
      problem:
        "Teams lose countless hours every week manually copy-pasting data between spreadsheets, verifying payment receipts by hand, and chasing clients for routine confirmations. Human error inevitably causes delays and friction.",
      approach:
        "We build event-driven background pipelines, webhook orchestrations, and automated multi-channel messaging engines. Triggers instantly update ledgers, verify transactions, generate branded PDF invoices, and notify stakeholders over WhatsApp, SMS, and email.",
      capabilities: [
        "Automated multi-channel messaging via WhatsApp Business API, SMS, and transactional email",
        "Resilient webhook listeners with automatic retry policies, dead-letter monitoring, and HMAC verification",
        "Instant document generation pipelines for PDF invoices, receipts, and clinical intake summaries",
        "Automated reconciliation routines that match transactions against balances without manual intervention",
      ],
      deliverables: "Event Pipelines, Webhook Handlers, Multi-Channel Notification Engine, PDF Workers",
      actionText: "Improve a workflow",
      contactService: "Workflow automation",
      isReversed: true,
      imageSrc: "/images/services/workflow-automation.jpg",
      badge: "Event-Driven Automation",
      caseStudyLink: {
        client: "Chaen — Automated Ledger & Event Notification Pipeline",
        href: "/work#aenbase-platform",
      },
    },
    {
      id: "apis-integrations",
      num: "05",
      tag: "05 / Integration",
      category: "APIs & Integrations",
      title: "APIs & Integrations",
      tagline:
        "Connect services, payment providers and business applications to create more cohesive systems.",
      problem:
        "Modern commerce and enterprise software cannot exist in a silo. Fragile third-party connections, unhandled webhook failures, and rigid payment gateways cause transaction drop-offs and accounting discrepancies.",
      approach:
        "We design high-throughput RESTful and GraphQL API gateways, secure payment rails (Stripe, Paystack, Flutterwave), and custom financial infrastructure. From virtual Visa card issuance to multi-currency digital commerce checkouts, we ensure seamless data interchange.",
      capabilities: [
        "Direct payment gateway integration with Paystack, Flutterwave, and Stripe webhook reconciliation",
        "Virtual card issuance infrastructure with isolated spend balances and locked checkout exchange rates",
        "Third-party system connectors for accounting packages, logistics tracking, and CRM synchronization",
        "Enterprise-grade API security: strict rate limiting, JWT token authorization, and server-side Zod validation",
      ],
      deliverables: "High-Throughput API Gateways, Payment Webhook Bridges, Card Issuance Engine, Third-Party Connectors",
      actionText: "Discuss an integration",
      contactService: "API or software integration",
      isReversed: false,
      imageSrc: "/images/services/apis-integrations.jpg",
      badge: "Fintech & API Gateways",
      caseStudyLink: {
        client: "Chaen Financial Commerce Infrastructure & Virtual Cards",
        href: "/work#aenbase-platform",
      },
    },
    {
      id: "maintenance-support",
      num: "06",
      tag: "06 / Support",
      category: "Maintenance & Support",
      title: "Maintenance & Support",
      tagline:
        "Keep your digital products reliable with technical improvements, maintenance and ongoing support.",
      problem:
        "Software launches are just day one. Without proactive maintenance, systems accumulate technical debt, database connections choke under peak traffic, security patches fall behind, and sudden downtime causes revenue loss.",
      approach:
        "We provide dedicated, SLA-backed technical maintenance and cloud infrastructure engineering. Architecting on Neon Serverless PostgreSQL with PgBouncer connection pooling, sub-30ms query response, continuous monitoring, and direct access to senior engineers.",
      capabilities: [
        "Serverless PostgreSQL cluster configuration with connection pooling and automated scaling",
        "Query indexing optimization, slow-query tuning, and sub-30ms database read latency",
        "Automated encrypted daily backups, point-in-time recovery (PITR), and zero-downtime schema migrations",
        "Continuous 24/7 uptime monitoring with guaranteed SLA escalation directly to our core engineering team",
      ],
      deliverables: "Guaranteed SLA Coverage, Neon Database Tuning, Security Patching, 24/7 Telemetry",
      actionText: "Discuss ongoing support",
      contactService: "Maintenance and support",
      isReversed: true,
      imageSrc: "/images/services/cloud-infrastructure.jpg",
      badge: "Neon Serverless Cloud",
      caseStudyLink: {
        client: "Neon Serverless Postgres Architecture (Across All Deployments)",
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
                01. Websites &amp; Portals
              </a>
              <a href="#mobile-apps" className="hover:text-ink transition-colors">
                02. Mobile Applications
              </a>
              <a href="#business-software" className="hover:text-ink transition-colors">
                03. Custom Business Software
              </a>
              <a href="#workflow-automation" className="hover:text-ink transition-colors">
                04. Workflow Automation
              </a>
              <a href="#apis-integrations" className="hover:text-ink transition-colors">
                05. APIs &amp; Integrations
              </a>
              <a href="#maintenance-support" className="hover:text-ink transition-colors">
                06. Maintenance &amp; Support
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
                        <span>{section.actionText}</span>
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
