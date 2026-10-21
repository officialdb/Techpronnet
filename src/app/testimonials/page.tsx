import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestimonialsPageContent } from "@/components/testimonials/TestimonialsPageContent";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Client Testimonials & Outcomes",
  description:
    "Read real client testimonials and verified business outcomes from legal practices, healthcare hospitals, freight logistics dispatchers, and fintech platforms engineered by Techpronnet Technologies.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Client Testimonials & Outcomes | Techpronnet Technologies",
    description:
      "Verified outcomes, enterprise software reliability, and direct feedback from leaders who build with Techpronnet Technologies.",
    url: "/testimonials",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials & Outcomes | Techpronnet Technologies",
    description:
      "Verified outcomes, enterprise software reliability, and direct feedback from leaders who build with Techpronnet Technologies.",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ]}
      />
      <Header />
      <main className="flex-1">
        <TestimonialsPageContent />
      </main>
      <Footer />
    </>
  );
}