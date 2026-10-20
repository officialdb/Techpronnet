import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectPreviewFrame } from "@/components/ProjectPreviewFrame";
import { FadeIn } from "@/components/MotionWrapper";
import { ArrowRight, Check, ArrowUpRight, Clock, ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Techpronnet Technologies",
  description:
    "Explore real production software systems, hospital platforms, corporate legal portals, and logistics dispatch consoles engineered by Techpronnet Technologies.",
  openGraph: {
    title: "Our Work | Techpronnet Technologies",
    description:
      "Real software systems deployed for healthcare, legal, logistics, and commercial enterprises since 2019.",
    type: "website",
    siteName: "Techpronnet Technologies",
  },
};

export default function WorkPage() {
  const caseStudies = [
    {
      id: "law-portal",
      num: "01",
      sector: "Legal & Professional Services",
      client: "Sterling & Partners Legal Counsel",
      title: "Corporate Law Firm Website & Confidential Client Portal",
      url: "https://sterlingpartners.legal",
      imageSrc: "/images/projects/law.png",
      description:
        "Designed and engineered for a premier commercial law firm. The system unifies public practice area briefings, partner credentials, confidential client consultation intake, and encrypted document transmission.",
      capabilities: [
        "Confidential multi-step intake questionnaire with partner notification routing",
        "Direct real-time consultation appointment scheduling",
        "Encrypted document room with 256-bit access controls",
        "Fast Next.js rendering optimized for mobile and desktop executive access",
      ],
      impact: [
        "+62% Increase in verified client consultation bookings",
        "Zero confidentiality leaks or unscheduled calendar conflicts",
        "Sub-1s page load across international mobile devices",
      ],
      serviceLink: "Website or web portal",
    },
    {
      id: "hospital-system",
      num: "02",
      sector: "Healthcare & Hospital Operations",
      client: "Metropolitan Healthcare Center",
      title: "Comprehensive Hospital & Clinical Management System",
      url: "https://portal.hospital-system.org",
      imageSrc: "/images/projects/hospotal.png",
      description:
        "A multi-department clinical operations platform engineered to eliminate waiting room congestion and coordinate outpatient triage, doctor shift allocation, and real-time patient queue updates.",
      capabilities: [
        "Real-time triage queue and department bed occupancy boards",
        "Automated patient appointment reminders via SMS & WhatsApp",
        "Doctor consultation slot allocation with shift capacity limits",
        "High-speed electronic health records search across 25,000+ patient profiles",
      ],
      impact: [
        "65% Reduction in patient appointment no-shows",
        "Average triage waiting time decreased from 38 min to 12 min",
        "99.98% System uptime during high-volume hospital hours",
      ],
      serviceLink: "Custom business software",
    },
    {
      id: "logistics-console",
      num: "03",
      sector: "Logistics & Fleet Operations",
      client: "Apex Freight Global",
      title: "Fleet Telematics & Real-Time Dispatch Operations Console",
      url: "https://dispatch.apexlogistics.com",
      imageSrc: "/images/projects/logistics.png",
      description:
        "Replacing disjointed phone calls and paper manifests with an integrated operations dashboard featuring live vehicle telemetry, dynamic route assignment, and digital proof-of-delivery milestones.",
      capabilities: [
        "Live GPS vehicle telemetry and driver assignment queue",
        "Automated digital manifests and waypoint tracking",
        "Multi-warehouse inventory cross-docking and stock reconciliation",
        "Granular role-based permissions with comprehensive activity logging",
      ],
      impact: [
        "-42% Turnaround time for driver dispatch assignments",
        "100% Digital delivery proof logging with zero lost manifests",
        "Direct API integration with central warehouse database",
      ],
      serviceLink: "Custom business software",
    },
    {
      id: "clinic-erp",
      num: "04",
      sector: "Clinical Operations & Scheduling",
      client: "MetroCare Health Partners",
      title: "Clinic ERP & Outpatient Appointment Booking Suite",
      url: "https://clinic.metrocare.org",
      imageSrc: "/images/projects/clinic_erp_and_appointment_booking.png",
      description:
        "Specialized clinic ERP managing patient onboarding, doctor calendars, automated consultation reminders, and billing receipts in one unified interface.",
      capabilities: [
        "Interactive doctor appointment booking calendar",
        "Automated patient reminder pipeline via SMS & email",
        "Clinical billing invoices and prescription logging",
        "Multi-branch clinic access with central administrative oversight",
      ],
      impact: [
        "+54% Online patient self-service booking adoption",
        "Saved 3.5 front-desk hours per clinic location daily",
        "Sub-second patient history lookup times",
      ],
      serviceLink: "Website or web portal",
    },
    {
      id: "aenbase-platform",
      num: "05",
      sector: "Enterprise Software & Cloud Platforms",
      client: "Aenbase Technologies",
      title: "Aenbase Custom Business Platform & Operations Hub",
      url: "https://aenbase.com",
      imageSrc: "/images/projects/aenbase.png",
      description:
        "A custom web portal and operational management system engineered with reactive Next.js frontend, Neon Postgres backend, and automated workflow triggers.",
      capabilities: [
        "Custom administrative portal with role-based permissions",
        "Serverless database queries with sub-30ms response times",
        "Automated audit trails and transaction reconciliations",
        "High-performance responsive rendering across mobile & desktop",
      ],
      impact: [
        "100% Custom workflow match with zero external software bloat",
        "Zero downtime recorded across continuous production updates",
        "High-performance responsive rendering across mobile & desktop",
      ],
      serviceLink: "Custom business software",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Work Hero */}
        <section className="border-b border-line bg-paper">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
            <div className="max-w-3xl">
              <FadeIn direction="up">
                <p className="eyebrow uppercase text-[11px] sm:text-xs font-semibold text-muted mb-4 sm:mb-6">
                  Selected Work &amp; Case Studies · Techpronnet Technologies
                </p>
                <h1 className="text-[34px] sm:text-5xl lg:text-[64px] leading-[1.08] tracking-[-.05em] sm:tracking-[-.055em] font-semibold text-ink">
                  Proven systems.
                  <span className="block text-muted font-normal mt-1 sm:mt-2">
                    Delivered in production.
                  </span>
                </h1>
                <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                  Explore real-world software platforms, hospital systems, legal portals, and logistics dispatch consoles engineered by Techpronnet Technologies since 2019. Click any screenshot to view in full resolution.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Alternating Case Studies */}
        <div className="divide-y divide-line">
          {caseStudies.map((project, idx) => (
            <section
              key={project.id}
              className={`section-space ${idx % 2 === 1 ? "bg-sand/30" : "bg-white"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  {/* Screenshot Frame Column */}
                  <div
                    className={`lg:col-span-7 ${
                      idx % 2 === 1 ? "order-2 lg:order-1" : "order-2 lg:order-2"
                    }`}
                  >
                    <FadeIn direction="up">
                      <ProjectPreviewFrame
                        imageSrc={project.imageSrc}
                        imageAlt={project.title}
                        url={project.url}
                        title={project.title}
                        tag={project.sector}
                      />
                    </FadeIn>
                  </div>

                  {/* Editorial Copy Column */}
                  <div
                    className={`lg:col-span-5 space-y-6 ${
                      idx % 2 === 1 ? "order-1 lg:order-2" : "order-1 lg:order-1"
                    }`}
                  >
                    <FadeIn direction="up">
                      <div>
                        <span className="font-mono text-xs uppercase text-navy font-semibold tracking-wider block mb-2">
                          {project.num} / {project.sector}
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
                          {project.title}
                        </h2>
                        <p className="text-sm font-mono text-muted mt-1">
                          Client: {project.client}
                        </p>
                        <p className="text-sm sm:text-base text-muted leading-relaxed mt-4">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-5 border-t border-line/70">
                        <span className="text-xs font-mono uppercase text-ink font-semibold block mb-2.5">
                          Architectural Capabilities
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm text-muted">
                          {project.capabilities.map((cap) => (
                            <li key={cap} className="flex items-start gap-2.5">
                              <Check className="size-4 text-navy mt-0.5 shrink-0" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-line/70">
                        <span className="text-xs font-mono uppercase text-navy font-semibold block mb-2">
                          Measured Business Impact
                        </span>
                        <ul className="space-y-1.5 text-xs text-ink font-medium">
                          {project.impact.map((imp) => (
                            <li key={imp} className="flex items-baseline gap-2">
                              <span className="font-mono text-navy">&rarr;</span>
                              <span>{imp}</span>
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
                    </FadeIn>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

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
                      Ready to build your next digital platform?
                    </h2>
                    <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                      Whether you are looking to replace legacy systems, deploy a customer portal, or automate operations, we provide upfront architectural evaluations and reliable execution.
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
