"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ProjectPreviewFrame } from "@/components/ProjectPreviewFrame";
import { FadeIn } from "@/components/MotionWrapper";

export function ProjectShowcase() {
  const projects = [
    {
      id: "law-firm",
      title: "Corporate Law Firm Website & Confidential Client Portal",
      client: "Sterling & Partners Legal Counsel",
      domain: "Legal & Professional Services",
      url: "https://sterlingpartners.legal",
      frameType: "law-firm" as const,
      summary:
        "An understated, high-trust digital platform featuring practice area briefings, partner credentials, confidential client intake, and encrypted document exchange for commercial litigation and M&A counsel.",
      deliverables: [
        "Confidential client intake questionnaire & case assignment",
        "Direct real-time consultation scheduling with partners",
        "Encrypted document room with 256-bit access controls",
      ],
      results: [
        "+62% Increase in verified client consultation bookings",
        "Zero confidentiality leaks or unscheduled calendar conflicts",
        "Responsive, mobile-optimized experience for international clients",
      ],
      servicePrefill: "Website or web portal",
    },
    {
      id: "hospital",
      title: "Comprehensive Hospital & Clinical Patient Management System",
      client: "St. Jude Metropolitan Health System",
      domain: "Healthcare & Specialized Clinics",
      url: "https://portal.stjude-health.org",
      frameType: "hospital" as const,
      summary:
        "A multi-department clinical operations system streamlining outpatient appointment scheduling, doctor shift management, digital patient intake, and automated appointment reminders.",
      deliverables: [
        "Real-time triage queue and outpatient clinic calendar",
        "Automated patient appointment reminders via SMS & WhatsApp",
        "Fast EHR indexing across 25,000+ patient records",
      ],
      results: [
        "65% Reduction in patient appointment no-shows",
        "Average triage waiting time decreased from 38 min to 12 min",
        "99.98% System uptime during high-volume clinic hours",
      ],
      servicePrefill: "Custom business software",
    },
    {
      id: "logistics",
      title: "Fleet Telematics & Real-Time Dispatch Operations Console",
      client: "Apex Freight Global",
      domain: "Logistics & Supply Chain",
      url: "https://dispatch.apexlogistics.com",
      frameType: "logistics" as const,
      summary:
        "A centralized operations dashboard replacing manual phone calls and paper manifests with live GPS telemetry, dynamic route optimization, and digital proof-of-delivery timestamps.",
      deliverables: [
        "Live vehicle telemetry & driver assignment board",
        "Automated digital manifests and waypoint tracking",
        "Multi-warehouse inventory cross-docking sync",
      ],
      results: [
        "-42% Turnaround time for driver dispatch assignments",
        "100% Digital delivery proof logging with zero lost manifests",
        "Direct API integration with central warehouse database",
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
              Explore concrete examples of custom business software, portals, and automated workflows engineered by Techpronnet Technologies.
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
                {/* Visual UI Frame */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <ProjectPreviewFrame
                    type={project.frameType}
                    url={project.url}
                    title={project.title}
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
                      <span>Inquire about a similar system</span>
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
