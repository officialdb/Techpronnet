import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqsPageContent } from "@/components/faqs/FaqsPageContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Techpronnet Technologies — Scope, Architecture & Ownership",
  description:
    "Find transparent answers regarding how Techpronnet Technologies scopes software projects, architects with Neon Serverless Postgres, guarantees 100% code ownership, and provides 24/7 SLA maintenance.",
  openGraph: {
    title: "Frequently Asked Questions | Techpronnet Technologies",
    description:
      "Direct answers regarding software pricing, timelines, technology architecture, and full source code ownership.",
    type: "website",
    siteName: "Techpronnet Technologies",
  },
};

export default function FaqsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <FaqsPageContent />
      </main>
      <Footer />
    </>
  );
}