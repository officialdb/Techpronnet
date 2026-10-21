import { ContactForm } from "./ContactForm";
import { Clock, ShieldCheck, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#FAF9F6] border-b border-[#E5E7EB] py-16 sm:py-24 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Intro Column */}
          <div className="lg:col-span-5">
            <span className="text-[#4D9218] font-mono text-xs font-semibold uppercase tracking-wider block mb-3">
              Start A Conversation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E] leading-[1.15]">
              Have A Project In{" "}
              <span className="bg-[#8EDE35] text-[#181B1E] px-3.5 py-0.5 rounded-xl inline-block shadow-xs">
                Mind?
              </span>
            </h2>
            <p className="text-muted leading-relaxed mt-4 sm:mt-5 text-sm sm:text-base">
              Tell us what you are trying to build, improve or automate. We provide upfront technical evaluations, scope clarity, and architectural recommendations without obligation.
            </p>

            <div className="mt-8 space-y-3.5 text-xs text-muted font-mono">
              <div className="flex items-center gap-2.5">
                <Clock className="size-4 text-[#4D9218] shrink-0" />
                <span>Direct engineer response within 24 business hours</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="size-4 text-[#4D9218] shrink-0" />
                <span>NDA &amp; confidential documentation handling</span>
              </div>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs">
              <p className="font-bold text-[#181B1E] text-base">Techpronnet Technologies</p>
              <p className="text-xs text-muted mt-1">High-Reliability Software &amp; Enterprise Workflows</p>
              <div className="mt-4 pt-4 border-t border-[#E5E7EB] space-y-2 text-xs font-mono text-muted">
                <p className="flex items-center gap-2">
                  <Mail className="size-3.5 text-[#4D9218]" />
                  <span>contact@techpronnet.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="size-3.5 text-[#4D9218]" />
                  <span>Lagos &amp; Abuja, Nigeria · Global Remote Delivery</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
