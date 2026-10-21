export function Industries() {
  const industries = [
    "Healthcare & Clinics",
    "Legal & Advisory Chambers",
    "Freight & Logistics Dispatch",
    "Financial Commerce & APIs",
    "Growing Enterprises",
  ];

  return (
    <section className="border-b border-[#E5E7EB] bg-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="size-2 rounded-full bg-[#8EDE35]" />
            <p className="font-mono text-xs uppercase font-semibold text-[#4D9218] tracking-wider">
              Who We Work With
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
            {industries.map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E5E7EB] text-[#181B1E] hover:border-[#8EDE35] hover:bg-white transition-all cursor-default font-medium"
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
