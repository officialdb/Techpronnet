import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesLayout } from "@/components/services/ServicesLayout";
import { BreadcrumbsJsonLd, ServicesJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Explore our 6 core engineering disciplines: websites & portals, mobile applications, custom business software, workflow automation, APIs & integrations, and ongoing maintenance & support.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services & Capabilities | Techpronnet Technologies",
    description:
      "Precision software engineering, websites & portals, mobile applications, custom business software, workflow automation, APIs & integrations, and cloud maintenance.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Capabilities | Techpronnet Technologies",
    description:
      "Precision software engineering, websites & portals, mobile applications, custom business software, workflow automation, APIs & integrations, and cloud maintenance.",
  },
};

const serviceSchemas = [
  {
    name: "Websites, Booking Engines & Portals",
    description:
      "Confidential intake questionnaires, online consultation booking with calendar synchronization, and encrypted client document verification.",
    category: "Web Development",
    path: "/services#web-portals",
  },
  {
    name: "Native-Grade Mobile Applications",
    description:
      "Cross-platform iOS and Android mobile platforms with live GPS tracking, route milestones, and automated push notifications via SMS and WhatsApp.",
    category: "Mobile Application Development",
    path: "/services#mobile-apps",
  },
  {
    name: "Custom Business Software & ERPs",
    description:
      "Real-time triage queues, electronic health records (EHR), multi-warehouse logistics boards, and strict role-based access control (RBAC).",
    category: "Enterprise Software",
    path: "/services#business-software",
  },
  {
    name: "Workflow Automation & Webhook Pipelines",
    description:
      "Eliminate repetitive manual spreadsheet entry with event-driven webhook pipelines, automated customer communication, and PDF invoice generation.",
    category: "Workflow Automation",
    path: "/services#workflow-automation",
  },
  {
    name: "APIs & Third-Party Payment Integrations",
    description:
      "Secure payment rails (Paystack, Flutterwave, Stripe), WhatsApp business APIs, biometric authentication adapters, and automated banking webhooks.",
    category: "Systems Integration",
    path: "/services#apis-integrations",
  },
  {
    name: "Cloud Infrastructure & 24/7 SLA Maintenance",
    description:
      "Serverless Neon Postgres architecture, sub-30ms global queries, connection pooling telemetry, daily encrypted snapshots, and 99.9% uptime SLAs.",
    category: "Cloud Infrastructure",
    path: "/services#cloud-infrastructure",
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <ServicesJsonLd services={serviceSchemas} />
      <Header />
      <main className="flex-1">
        <ServicesLayout />
      </main>
      <Footer />
    </>
  );
}
