import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesLayout } from "@/components/services/ServicesLayout";

export const metadata: Metadata = {
  title: "Services & Capabilities | Techpronnet Technologies — Software Built Around Your Business",
  description:
    "Explore our 6 core engineering disciplines: websites & portals, mobile applications, custom business software, workflow automation, APIs & integrations, and ongoing maintenance & support.",
  openGraph: {
    title: "Services & Capabilities | Techpronnet Technologies",
    description:
      "Precision software engineering, websites & portals, mobile applications, custom business software, workflow automation, APIs & integrations, and cloud maintenance.",
    type: "website",
    siteName: "Techpronnet Technologies",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ServicesLayout />
      </main>
      <Footer />
    </>
  );
}
