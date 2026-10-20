import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { MissionVision } from "@/components/about/MissionVision";
import { CoreValues } from "@/components/about/CoreValues";
import { AboutServices } from "@/components/about/AboutServices";
import { AboutProcessTimeline } from "@/components/about/AboutProcessTimeline";
import { ProjectShowcase } from "@/components/about/ProjectShowcase";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | Techpronnet Technologies — Software Built Around Your Business",
  description:
    "Learn about Techpronnet Technologies, our story since 2019, our core values, mission, vision, engineering process, and real client deployments in healthcare, logistics, and commerce.",
  openGraph: {
    title: "About Us | Techpronnet Technologies",
    description:
      "Engineering digital excellence with quiet precision since 2019. Discover our story, mission, services, and real client software deployments.",
    type: "website",
    siteName: "Techpronnet Technologies",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutHero />
        <OurStory />
        <MissionVision />
        <CoreValues />
        <AboutServices />
        <AboutProcessTimeline />
        <ProjectShowcase />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
