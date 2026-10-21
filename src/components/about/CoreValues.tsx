"use client";

import { FadeIn } from "@/components/MotionWrapper";

export function CoreValues() {
  const values = [
    {
      num: "01",
      title: "Pragmatic Craftsmanship",
      description:
        "We reject unnecessary complexity and vanity stacks. We choose proven, high-performance technologies, write clean, maintainable code, and design systems built to perform without constant firefighting.",
    },
    {
      num: "02",
      title: "Business-First Thinking",
      icon: null,
      description:
        "Code has zero value if it doesn't solve a real business challenge. Every feature, database query, and automation is engineered to save team hours, reduce errors, or improve customer satisfaction.",
    },
    {
      num: "03",
      title: "Radical Transparency",
      description:
        "No hidden caveats, no technical gatekeeping, and no opaque estimates. We provide direct communication, clear roadmaps, and complete client ownership of all intellectual property and data.",
    },
    {
      num: "04",
      title: "Enduring Stewardship",
      description:
        "Deployment is day one, not the finish line. We establish proactive monitoring, perform ongoing security audits, and provide continuous improvements so your software evolves alongside your business.",
    },
  ];

  return (
    <section className="section-space border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-3">
              The Techpronnet Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#181B1E]">
              Values that anchor our engineering.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              These four principles dictate how we write software, communicate with partners, and deliver long-term value.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <article
              key={v.num}
              className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#8EDE35] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#181B1E] bg-[#8EDE35] px-2.5 py-0.5 rounded-lg inline-block mb-4">
                  {v.num} / PRINCIPLE
                </span>
                <h3 className="text-lg font-extrabold text-[#181B1E] tracking-tight mb-2.5">
                  {v.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {v.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
