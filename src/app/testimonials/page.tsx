import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestimonialsPageContent } from "@/components/testimonials/TestimonialsPageContent";

export const metadata: Metadata = {
  title: "Client Testimonials & Impact | Techpronnet Technologies — Verified Client Outcomes",
  description:
    "Read real client testimonials and verified business outcomes from legal practices, healthcare hospitals, freight logistics dispatchers, and fintech platforms engineered by Techpronnet Technologies.",
  openGraph: {
    title: "Client Testimonials & Impact | Techpronnet Technologies",
    description:
      "Verified outcomes, enterprise software reliability, and direct feedback from leaders who build with Techpronnet Technologies.",
    type: "website",
    siteName: "Techpronnet Technologies",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <TestimonialsPageContent />
      </main>
      <Footer />
    </>
  );
}