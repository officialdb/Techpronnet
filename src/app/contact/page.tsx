import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | Techpronnet Technologies — Start A Project Conversation",
  description:
    "Get in touch with Techpronnet Technologies. Discuss custom web portals, mobile applications, hospital systems, and enterprise workflow automation. Direct response within 24 business hours.",
  openGraph: {
    title: "Contact Us | Techpronnet Technologies",
    description:
      "Start a project conversation with Techpronnet Technologies. Upfront technical evaluations and reliable software architecture.",
    type: "website",
    siteName: "Techpronnet Technologies",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}