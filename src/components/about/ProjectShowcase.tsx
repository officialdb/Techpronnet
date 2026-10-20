"use client";

import Link from "next/link";
import { ArrowUpRight, TrendingUp, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export function ProjectShowcase() {
  const projects = [
    {
      id: "fleet-logistics",
      title: "Fleet & Dispatch Operations Console",
      clientSector: "Logistics & Fleet Telematics",
      summary:
        "Centralized real-time dispatch dashboard replacing manual phone coordination and scattered paper manifests for a commercial regional fleet.",
      tags: ["Real-Time Telemetry", "Next.js", "PostgreSQL", "Driver App"],
      imageProps: {
        label: "Fleet Dispatch Live Operations Map",
        recommendedSize: "1200 x 750 px (16:10)",
        description:
          "Screenshot showing vehicle live status map, driver assignment queue, route telemetry, and delivery proof timeline.",
        badgeText: "Add Production Screenshot",
      },
      results: [
        "-42% Turnaround time for driver dispatch",
        "Zero lost delivery manifests since rollout",
        "Sub-second vehicle telemetry sync",
      ],
      serviceLink: "Custom business software",
    },
    {
      id: "clinical-portal",
      title: "Patient Care & Clinical Booking Platform",
      clientSector: "Healthcare & Specialized Clinics",
      summary:
        "Patient-facing web application and administrative practice console for self-service appointment scheduling, secure health records, and automated reminders.",
      tags: ["Healthcare Portal", "Automated SMS/Email", "HIPAA Ready", "Mobile Web"],
      imageProps: {
        label: "Clinical Appointment & Intake Portal",
        recommendedSize: "1200 x 750 px (16:10)",
        description:
          "Screenshot showing patient appointment booking grid with doctor time slots, intake questionnaire, and practitioner queue.",
        badgeText: "Add Production Screenshot",
      },
      results: [
        "65% Reduction in missed appointments",
        "3x Faster patient check-in at reception",
        "99.98% System uptime across peak hours",
      ],
      serviceLink: "Website or web portal",
    },
    {
      id: "inventory-sync",
      title: "Multi-Warehouse B2B Inventory Sync Engine",
      clientSector: "Wholesale & Commerce Distribution",
      summary:
        "Automated inventory data pipeline connecting warehouse barcode scanning, supplier purchase triggers, and multi-channel order fulfillment.",
      tags: ["Workflow Automation", "API Integration", "Neon Postgres", "ERP"],
      imageProps: {
        label: "Multi-Warehouse Inventory & Reconciliation Engine",
        recommendedSize: "1200 x 750 px (16:10)",
        description:
          "Screenshot showing live SKU stock across warehouses, low-threshold automated reorder triggers, and ERP synchronization log.",
        badgeText: "Add Production Screenshot",
      },
      results: [
        "4.5 Hours saved per warehouse location daily",
        "100% Real-time inventory reconciliation",
        "Eliminated backorder stock discrepancy errors",
      ],
      serviceLink: "Workflow automation",
    },
  ];

  return (
    <section className="section-space border-b border-line bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <Badge variant="outline" className="mb-4 uppercase tracking-[.14em] text-[10px] sm:text-xs font-semibold text-muted bg-sand border-line py-1 px-3">
              Proven Deployments
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
              Real systems in production.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Explore concrete examples of custom business software, portals, and automated workflows engineered by Techpronnet Technologies.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} direction="up" delay={0.1 * idx}>
              <Card className="border-line bg-white shadow-xs overflow-hidden">
                <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                  {/* Visual Screenshot / Placeholder Side */}
                  <div className="lg:col-span-7 bg-sand/30 p-4 sm:p-6 lg:p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-line">
                    <ImagePlaceholder
                      label={project.imageProps.label}
                      recommendedSize={project.imageProps.recommendedSize}
                      description={project.imageProps.description}
                      badgeText={project.imageProps.badgeText}
                      aspectRatio="16/10"
                    />
                  </div>

                  {/* Editorial Details Side */}
                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="sage" className="text-[11px] font-mono">
                          {project.clientSector}
                        </Badge>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink mb-3">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-[11px]">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-line/60">
                        <p className="text-xs font-mono uppercase text-navy font-semibold mb-2.5 flex items-center gap-1.5">
                          <TrendingUp className="size-3.5" />
                          <span>Measured Business Impact</span>
                        </p>
                        <ul className="space-y-2">
                          {project.results.map((res) => (
                            <li key={res} className="flex items-start gap-2 text-xs text-ink/80">
                              <CheckCircle className="size-3.5 text-navy mt-0.5 shrink-0" />
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-line">
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-navy transition-colors group"
                      >
                        <span>Discuss a similar solution for your business</span>
                        <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
