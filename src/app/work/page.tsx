import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WorkLayout } from "@/components/work/WorkLayout";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Work & Case Studies",
  description:
    "Explore real-world software platforms, hospital systems, corporate legal portals, clinic operating systems, and logistics dispatch consoles engineered by Techpronnet Technologies.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work & Case Studies | Techpronnet Technologies",
    description:
      "Real software systems deployed for healthcare, legal, logistics, and financial commerce enterprises since 2019.",
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work & Case Studies | Techpronnet Technologies",
    description:
      "Real software systems deployed for healthcare, legal, logistics, and financial commerce enterprises since 2019.",
  },
};

export default function WorkPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/work" },
        ]}
      />
      <Header />
      <main className="flex-1">
        <WorkLayout />
      </main>
      <Footer />
    </>
  );
}
