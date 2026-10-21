import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TermsContent } from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms and Conditions | Techpronnet Technologies — 100% Code Ownership & SLAs",
  description:
    "Review the Terms and Conditions of Techpronnet Technologies. Guaranteed 100% source code ownership, transparent milestone pricing, 30-day post-launch warranty, and mutual NDA standards.",
  openGraph: {
    title: "Terms and Conditions | Techpronnet Technologies",
    description:
      "Enterprise software terms, milestone-based delivery, 100% bespoke source code ownership, and 30-day warranty standards.",
    type: "website",
    siteName: "Techpronnet Technologies",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <TermsContent />
      </main>
      <Footer />
    </>
  );
}