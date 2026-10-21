import { ContactForm } from "./ContactForm";
import { Clock, ShieldCheck, Mail, MapPin } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#FAF9F6] border-b border-[#E5E7EB] py-16 sm:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Intro Column */}
          <FadeIn direction="up" className="lg:col-span-5">
            <span className="text-[#4D9218] font-mono text-xs font-semibold uppercase tracking-wider block mb-3">
              Start A Conversation
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E] leading-tight">
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

              {/* Social Channels */}
              <div className="mt-4 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted uppercase font-semibold">Socials:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://x.com/Tech_pronnet"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter (@Tech_pronnet)"
                    title="X / Twitter: @Tech_pronnet"
                    className="size-8 rounded-lg bg-[#FAF9F6] border border-[#E5E7EB] flex items-center justify-center text-[#181B1E] hover:bg-[#8EDE35] hover:border-[#8EDE35] transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@techpronnet1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok (@techpronnet1)"
                    title="TikTok: @techpronnet1"
                    className="size-8 rounded-lg bg-[#FAF9F6] border border-[#E5E7EB] flex items-center justify-center text-[#181B1E] hover:bg-[#8EDE35] hover:border-[#8EDE35] transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/techpronnettechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook (techpronnettechnologies)"
                    title="Facebook: techpronnettechnologies"
                    className="size-8 rounded-lg bg-[#FAF9F6] border border-[#E5E7EB] flex items-center justify-center text-[#181B1E] hover:bg-[#8EDE35] hover:border-[#8EDE35] transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Form Column */}
          <FadeIn direction="up" delay={0.1} className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
