import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqsPageContent } from "@/components/faqs/FaqsPageContent";
import { BreadcrumbsJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { faqsData } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find transparent answers regarding how Techpronnet Technologies scopes software projects, architects with Neon Serverless Postgres, guarantees 100% code ownership, and provides 24/7 SLA maintenance.",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions | Techpronnet Technologies",
    description:
      "Direct answers regarding software pricing, timelines, technology architecture, and full source code ownership.",
    url: "/faqs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Techpronnet Technologies",
    description:
      "Direct answers regarding software pricing, timelines, technology architecture, and full source code ownership.",
  },
};

export default function FaqsPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "FAQs", path: "/faqs" },
        ]}
      />
      <FaqJsonLd faqs={faqsData} />
      <Header />
      <main className="flex-1">
        <FaqsPageContent />
      </main>
      <Footer />
    </>
  );
}