import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Techpronnet Technologies — Enterprise Software Security & Privacy",
  description:
    "Read the Privacy Policy of Techpronnet Technologies. Learn how we safeguard your project specifications, database architectures, client confidentiality, and personal information.",
  openGraph: {
    title: "Privacy Policy | Techpronnet Technologies",
    description:
      "Enterprise confidentiality, Neon PostgreSQL database encryption, client NDA standards, and data protection policies.",
    type: "website",
    siteName: "Techpronnet Technologies",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  );
}