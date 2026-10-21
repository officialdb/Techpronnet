import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WorkLayout } from "@/components/work/WorkLayout";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Techpronnet Technologies — Real Production Systems",
  description:
    "Explore real-world software platforms, hospital systems, corporate legal portals, clinic operating systems, and logistics dispatch consoles engineered by Techpronnet Technologies.",
  openGraph: {
    title: "Our Work & Case Studies | Techpronnet Technologies",
    description:
      "Real software systems deployed for healthcare, legal, logistics, and financial commerce enterprises since 2019.",
    type: "website",
    siteName: "Techpronnet Technologies",
  },
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <WorkLayout />
      </main>
      <Footer />
    </>
  );
}
