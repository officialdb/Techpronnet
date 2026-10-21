import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TermsContent } from "@/components/legal/TermsContent";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Review the Terms and Conditions of Techpronnet Technologies. Guaranteed 100% source code ownership, transparent milestone pricing, 30-day post-launch warranty, and mutual NDA standards.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms and Conditions | Techpronnet Technologies",
    description:
      "Enterprise software terms, milestone-based delivery, 100% bespoke source code ownership, and 30-day warranty standards.",
    url: "/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Techpronnet Technologies",
    description:
      "Enterprise software terms, milestone-based delivery, 100% bespoke source code ownership, and 30-day warranty standards.",
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Terms and Conditions", path: "/terms" },
        ]}
      />
      <Header />
      <main className="flex-1">
        <TermsContent />
      </main>
      <Footer />
    </>
  );
}