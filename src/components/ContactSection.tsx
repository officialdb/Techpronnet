import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-sand border-y border-line section-space scroll-mt-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Intro Column */}
          <div className="lg:col-span-5">
            <p className="eyebrow uppercase text-xs font-semibold text-muted mb-5">
              Start a conversation
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
              Have a project in mind?
            </h2>
            <p className="text-muted leading-7 mt-5 max-w-md text-base sm:text-lg">
              Tell us what you are trying to achieve. We will discuss your
              requirements and the next steps towards a suitable solution.
            </p>

            <div className="mt-10 pt-6 border-t border-[#D9D8D0]">
              <p className="font-semibold text-ink text-base">Techpronnet Technologies</p>
              <p className="text-sm text-muted mt-1.5">Engineering Digital Excellence.</p>
              <p className="text-xs text-muted/80 mt-3 font-mono">
                Direct response within 24 business hours
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
