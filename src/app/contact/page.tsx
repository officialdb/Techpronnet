import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Techpronnet Technologies. Discuss custom web portals, mobile applications, hospital systems, and enterprise workflow automation. Direct response within 24 business hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Techpronnet Technologies",
    description:
      "Start a project conversation with Techpronnet Technologies. Upfront technical evaluations and reliable software architecture.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Techpronnet Technologies",
    description:
      "Start a project conversation with Techpronnet Technologies. Upfront technical evaluations and reliable software architecture.",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <Header />
      <main className="flex-1">
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}