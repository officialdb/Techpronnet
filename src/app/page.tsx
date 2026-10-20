import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Industries />
        <Problems />
        <Services />
        <Process />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
