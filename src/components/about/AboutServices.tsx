"use client";

import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Layers,
  Cpu,
  Plug,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export function AboutServices() {
  const serviceMatrix = [
    {
      id: "web",
      num: "01",
      title: "Websites & Digital Portals",
      icon: Monitor,
      description:
        "High-performance corporate websites, customer self-service portals, booking platforms, and client dashboards built with modern Next.js and React.",
      capabilities: [
        "Customer Portals & Dashboards",
        "Interactive Booking Engines",
        "SEO-Engineered Brand Platforms",
        "Secure User Authentication",
      ],
      servicePrefill: "Website or web portal",
    },
    {
      id: "mobile",
      num: "02",
      title: "Mobile Applications",
      icon: Smartphone,
      description:
        "Native-grade iOS and Android mobile experiences engineered for on-the-go customer access and field workforce coordination.",
      capabilities: [
        "Cross-Platform Native Apps",
        "Offline-First Data Sync",
        "Push Notifications & Telemetry",
        "Role-Based Driver / Field Access",
      ],
      servicePrefill: "Mobile application",
    },
    {
      id: "software",
      num: "03",
      title: "Custom Business Software",
      icon: Layers,
      description:
        "Tailor-made ERP systems, inventory management, operational dispatch consoles, and reporting systems reflecting your actual business logic.",
      capabilities: [
        "Internal Operations Consoles",
        "Inventory & Order Tracking",
        "Role & Permission Hierarchies",
        "Audit Logging & Governance",
      ],
      servicePrefill: "Custom business software",
    },
    {
      id: "automation",
      num: "04",
      title: "Workflow Automation",
      icon: Cpu,
      description:
        "Automated data pipelines, webhook consumers, and document generators that connect separated applications to eliminate manual human intervention.",
      capabilities: [
        "Automated Invoicing & Alerts",
        "Multi-Tool Webhook Bridges",
        "Scheduled Data Pipelines",
        "Error Alerting & Recovery",
      ],
      servicePrefill: "Workflow automation",
    },
    {
      id: "integration",
      num: "05",
      title: "APIs & System Integrations",
      icon: Plug,
      description:
        "Custom REST & GraphQL endpoints, third-party payment gateway bridges, CRM integrations, and database synchronizers.",
      capabilities: [
        "Stripe / Payment Gateways",
        "CRM & Logistics Webhooks",
        "Legacy Database Bridges",
        "Rate-Limited Secure APIs",
      ],
      servicePrefill: "API or software integration",
    },
    {
      id: "support",
      num: "06",
      title: "Maintenance & SLA Support",
      icon: Wrench,
      description:
        "Continuous performance monitoring, database optimization, security patch application, and SLA-backed engineering coverage.",
      capabilities: [
        "24/7 Health Monitoring",
        "Postgres Query Optimization",
        "Dependency & Security Audits",
        "Priority Bug Fix Escalation",
      ],
      servicePrefill: "Maintenance and support",
    },
  ];

  return (
    <section className="section-space border-b border-line bg-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <Badge variant="outline" className="mb-4 uppercase tracking-[.14em] text-[10px] sm:text-xs font-semibold text-muted bg-white border-line py-1 px-3">
              Core Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
              Comprehensive technical services.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              We cover the entire lifecycle of modern digital products, from exploratory architecture through to multi-year maintenance.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          staggerDelay={0.08}
        >
          {serviceMatrix.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <Card className="h-full border-line bg-white shadow-xs hover:border-ink transition-colors flex flex-col justify-between group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-10 bg-sand text-navy flex items-center justify-center group-hover:bg-sage transition-colors">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-xs text-muted font-semibold">
                        {item.num}
                      </span>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-ink">
                      {item.title}
                    </CardTitle>
                    <p className="text-sm text-muted leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0 pb-6 flex-1">
                    <p className="text-xs font-mono uppercase text-navy font-semibold mb-3">
                      Key Deliverables
                    </p>
                    <ul className="space-y-2">
                      {item.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-xs text-muted">
                          <CheckCircle2 className="size-3.5 text-navy shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-line/60">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-ink group-hover:text-navy transition-colors"
                    >
                      <span>Inquire about this capability</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
