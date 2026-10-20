export function Industries() {
  const industries = [
    "Healthcare",
    "Retail & Commerce",
    "Logistics",
    "Professional Services",
    "Growing Businesses",
  ];

  return (
    <section className="border-b border-line bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-7">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <p className="text-xs uppercase eyebrow font-semibold text-muted shrink-0">
            Who we work with
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            {industries.map((item) => (
              <span
                key={item}
                className="hover:text-ink transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
