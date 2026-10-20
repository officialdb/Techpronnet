export function Problems() {
  const challenges = [
    {
      num: "01",
      title: "Too much manual work",
      description:
        "Reduce repetitive data entry, scattered records and avoidable administrative tasks.",
    },
    {
      num: "02",
      title: "Tools that don't work together",
      description:
        "Bring important information and workflows together instead of switching between disconnected applications.",
    },
    {
      num: "03",
      title: "Customer experiences that need improvement",
      description:
        "Make it easier for customers to discover your services, place orders, book appointments and get support.",
    },
  ];

  return (
    <section id="problems" className="section-space scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow uppercase text-xs font-semibold text-muted mb-5">
              The challenge
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-[-.04em] leading-tight font-semibold text-ink">
              Your business deserves better tools.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-muted leading-8 max-w-2xl text-base sm:text-lg">
              As your business grows, disconnected systems and manual processes
              can slow your team down. The right technology makes everyday work
              simpler and gives you more room to focus on your customers.
            </p>

            <div className="mt-9">
              {challenges.map((c, index) => (
                <article
                  key={c.num}
                  className={`grid sm:grid-cols-[48px_1fr] gap-4 py-6 border-t border-line ${
                    index === challenges.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="text-sm text-muted font-medium font-mono">{c.num}</span>
                  <div>
                    <h3 className="font-semibold text-ink text-base sm:text-lg">{c.title}</h3>
                    <p className="text-sm text-muted leading-7 mt-2">
                      {c.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
