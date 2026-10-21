export function Process() {
  const steps = [
    {
      num: "01",
      title: "Understand & Scope",
      description:
        "We evaluate your current business processes, identify bottlenecks, define architectural requirements, and establish fixed upfront timelines.",
      theme: "light",
    },
    {
      num: "02",
      title: "Architect & Build",
      description:
        "We engineer high-performance web and mobile software with Next.js 16 SSR, serverless Neon Postgres, and resilient event pipelines.",
      theme: "dark",
    },
    {
      num: "03",
      title: "Deploy & Support",
      description:
        "We execute zero-downtime cuts, configure automated encrypted backups, train your operational team, and provide direct SLA engineering support.",
      theme: "light",
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-[#E5E7EB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#4D9218] font-mono text-xs font-semibold uppercase tracking-wider block mb-3">
            How We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E] leading-[1.15]">
            A Clear Process. No Unnecessary{" "}
            <span className="bg-[#8EDE35] text-[#181B1E] px-3.5 py-0.5 rounded-xl inline-block shadow-xs">
              Complexity.
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Every deployment follows a disciplined, transparent execution cycle. From architecture design to post-launch warranties, you maintain 100% visibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((s) => {
            const isDark = s.theme === "dark";

            return (
              <div
                key={s.num}
                className={`${
                  isDark
                    ? "bg-[#181B1E] text-white border border-[#2D333B] shadow-xl"
                    : "bg-white text-[#181B1E] border border-[#E5E7EB] shadow-xs hover:border-[#8EDE35]"
                } rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`size-11 rounded-full font-mono text-sm font-bold flex items-center justify-center ${
                        isDark
                          ? "bg-[#8EDE35] text-[#181B1E]"
                          : "bg-[#FAF9F6] text-[#4D9218] border border-[#E5E7EB]"
                      }`}
                    >
                      {s.num}
                    </span>
                    <span className={`text-[11px] font-mono ${isDark ? "text-gray-400" : "text-muted"}`}>
                      Phase {s.num}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 tracking-tight ${
                      isDark ? "text-white" : "text-[#181B1E]"
                    }`}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-gray-300" : "text-[#64748B]"
                    }`}
                  >
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
