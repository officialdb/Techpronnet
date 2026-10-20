export function Process() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      description:
        "We learn about your business, challenges, goals and the people who will use the solution.",
    },
    {
      num: "02",
      title: "Plan & Build",
      description:
        "We define the scope, agree on the timeline and develop a solution that fits your requirements.",
    },
    {
      num: "03",
      title: "Launch & Support",
      description:
        "We test, deliver and help you get started, with ongoing support agreed for your project.",
    },
  ];

  return (
    <section id="process" className="section-space scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow uppercase text-xs font-semibold text-muted mb-5">
              How we work
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-.045em] leading-tight text-ink">
              A clear process. No unnecessary complexity.
            </h2>
            <p className="text-muted leading-7 mt-5 max-w-md text-base sm:text-lg">
              Every project starts with understanding your needs. From there, we
              agree on the scope, build thoughtfully and support you through
              delivery.
            </p>
          </div>

          <div className="lg:col-span-7">
            {steps.map((s, index) => (
              <article
                key={s.num}
                className={`grid grid-cols-[56px_1fr] gap-5 py-7 border-t border-line ${
                  index === steps.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="text-2xl font-medium text-muted font-mono">
                  {s.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="text-sm text-muted mt-2 leading-7">
                    {s.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
