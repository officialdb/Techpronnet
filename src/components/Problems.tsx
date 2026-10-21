export function Problems() {
  const challenges = [
    {
      num: "01",
      title: "Too much manual overhead",
      description:
        "Replace repetitive spreadsheet entry, scattered paper records and fragmented communications with unified digital workflows.",
      theme: "light",
    },
    {
      num: "02",
      title: "Disconnected business software",
      description:
        "Bring customer appointments, inventory records and billing ledgers into cohesive platforms instead of juggling isolated tools.",
      theme: "dark",
    },
    {
      num: "03",
      title: "Clunky client experiences",
      description:
        "Enable clients to book consultations, verify documents and track logistics milestones directly on high-speed mobile interfaces.",
      theme: "light",
    },
  ];

  return (
    <section id="problems" className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-[#E5E7EB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#4D9218] font-mono text-xs font-semibold uppercase tracking-wider block mb-3">
            The Challenge We Solve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E] leading-[1.15]">
            Your Business Deserves Better{" "}
            <span className="bg-[#8EDE35] text-[#181B1E] px-3.5 py-0.5 rounded-xl inline-block shadow-xs">
              Tools.
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            As your enterprise scales, disconnected manual tools introduce operational blind spots. We engineer software that eliminates bottlenecks and gives your leadership team clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {challenges.map((c) => {
            const isDark = c.theme === "dark";

            return (
              <div
                key={c.num}
                className={`${
                  isDark
                    ? "bg-[#181B1E] text-white border border-[#2D333B] shadow-xl"
                    : "bg-white text-[#181B1E] border border-[#E5E7EB] shadow-xs hover:border-[#8EDE35]"
                } rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-mono text-xs font-bold px-3 py-1 rounded-full ${
                        isDark
                          ? "bg-white/10 text-[#8EDE35] border border-white/15"
                          : "bg-[#FAF9F6] text-[#4D9218] border border-[#E5E7EB]"
                      }`}
                    >
                      Issue {c.num}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 tracking-tight ${
                      isDark ? "text-white" : "text-[#181B1E]"
                    }`}
                  >
                    {c.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-gray-300" : "text-[#64748B]"
                    }`}
                  >
                    {c.description}
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
