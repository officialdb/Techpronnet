import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of Techpronnet Technologies. Learn how we safeguard your project specifications, database architectures, client confidentiality, and personal information.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Techpronnet Technologies",
    description:
      "Enterprise confidentiality, Neon PostgreSQL database encryption, client NDA standards, and data protection policies.",
    url: "/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Techpronnet Technologies",
    description:
      "Enterprise confidentiality, Neon PostgreSQL database encryption, client NDA standards, and data protection policies.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <Header />
      <main className="flex-1">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  );
}