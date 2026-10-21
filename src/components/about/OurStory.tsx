"use client";

import { FadeIn } from "@/components/MotionWrapper";

export function OurStory() {
  const milestones = [
    {
      year: "2019",
      title: "Founding & Systems Architecture",
      description:
        "Techpronnet Technologies was founded to solve a clear problem: growing organizations were stuck between rigid off-the-shelf software that didn't fit, and fragile scripts that broke under load. We began by engineering tailored internal tools and custom business systems for regional commerce and service providers.",
      impact: "Established high-reliability engineering standards and client-first delivery.",
    },
    {
      year: "2021",
      title: "Enterprise Workflows & Customer Portals",
      description:
        "As client operations scaled, the focus expanded from standalone tools to connected ecosystems. We broadened our practice to include cross-platform mobile apps, customer self-service portals, and automated workflow engines that eliminated hundreds of hours of manual administrative data entry.",
      impact: "Connected multi-channel tools into synchronized, automated operational pipelines.",
    },
    {
      year: "2023",
      title: "Serverless Cloud & Resilient Data Engines",
      description:
        "To deliver sub-second response times and zero-maintenance reliability, we modernized our engineering stack around resilient cloud infrastructure, reactive frontends, and managed Postgres databases (including Neon). This gave our clients enterprise-grade performance without operational bloat.",
      impact: "Achieved sub-100ms global query execution and 99.9% uptime across all managed client systems.",
    },
    {
      year: "2025 – Present",
      title: "End-to-End Digital Engineering & SLA Support",
      description:
        "Today, Techpronnet serves organizations across Healthcare, Logistics, Commerce, Legal, and Professional Services. We operate as an embedded senior technology partner, delivering custom software, hospital systems, portals, and multi-warehouse automation pipelines backed by continuous SLA support.",
      impact: "Continuously helping forward-looking businesses scale with confidence.",
    },
  ];

  return (
    <section id="story" className="section-space border-b border-[#E5E7EB] bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <FadeIn direction="up">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-3">
                Our Genesis &amp; Evolution
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E] leading-tight">
                Our story since{" "}
                <span className="bg-[#8EDE35] text-[#181B1E] px-2.5 py-0.5 rounded-lg inline-block">
                  2019.
                </span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
                Most software either forces your business into someone else&apos;s rigid template or is built so hastily that it crumbles under growth. Techpronnet was created to deliver the middle path: software engineered with architectural rigor, intuitive simplicity, and deep alignment with how you actually operate.
              </p>

              <div className="mt-8 pt-6 border-t border-[#E5E7EB] space-y-3.5 text-xs sm:text-sm text-muted">
                <div className="flex items-center gap-3">
                  <span className="size-6 rounded-lg bg-[#181B1E] text-[#8EDE35] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    01
                  </span>
                  <span>Founded in 2019 with an unwavering focus on durability.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="size-6 rounded-lg bg-[#181B1E] text-[#8EDE35] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    02
                  </span>
                  <span>Direct developer-to-client collaboration with zero bureaucratic layers.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="size-6 rounded-lg bg-[#181B1E] text-[#8EDE35] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    03
                  </span>
                  <span>Complete client ownership of all written source code and data.</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Chronological Timeline Cards */}
          <div className="lg:col-span-7 space-y-5">
            {milestones.map((milestone) => (
              <article
                key={milestone.year}
                className="bg-[#FAF9F6] border border-[#E5E7EB] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#8EDE35] transition-all"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="font-mono text-xs font-bold text-[#181B1E] bg-[#8EDE35] px-2.5 py-0.5 rounded-lg">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#181B1E] tracking-tight">
                    {milestone.title}
                  </h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {milestone.description}
                </p>
                <div className="text-xs font-mono font-semibold text-[#4D9218] mt-4 pt-3 border-t border-[#E5E7EB] flex items-center gap-2">
                  <span>&rarr;</span>
                  <span>{milestone.impact}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
