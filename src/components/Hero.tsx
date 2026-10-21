import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

export function Hero() {
  return (
    <section className="border-b border-[#E5E7EB] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] mb-6 shadow-2xs">
            <span className="size-2 rounded-full bg-[#8EDE35]" />
            <span className="font-mono text-[11px] sm:text-xs font-semibold text-[#4D9218] uppercase tracking-wider">
              Software · Websites · Mobile Applications
            </span>
          </div>

          <h1 className="text-[38px] sm:text-6xl lg:text-[72px] leading-[1.06] tracking-[-.05em] font-extrabold text-[#181B1E] break-words">
            Better technology.
            <span className="block mt-1 sm:mt-2 font-extrabold text-[#181B1E]">
              Better{" "}
              <span className="bg-[#8EDE35] text-[#181B1E] px-3.5 py-0.5 rounded-xl inline-block shadow-xs">
                business.
              </span>
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            We engineer bespoke software systems, modern client portals, and resilient automated pipelines designed around your exact operational workflows.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#8EDE35] text-[#181B1E] font-bold px-8 py-4 rounded-xl text-sm hover:bg-[#7ECC28] active:scale-[0.98] transition-all duration-150 shadow-sm text-center w-full sm:w-auto"
            >
              <span>Tell Us About Your Project</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2.5 bg-[#181B1E] text-white font-medium px-8 py-4 rounded-xl text-sm hover:bg-[#334655] active:scale-[0.98] transition-all duration-150 shadow-xs text-center w-full sm:w-auto"
            >
              <span>Explore Services &amp; Pricing</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3 text-xs text-muted font-mono pt-8 border-t border-[#E5E7EB]">
            <span className="inline-flex items-center gap-2">
              <Check className="size-4 text-[#4D9218] shrink-0" />
              <span>100% Bespoke Code Ownership</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="size-4 text-[#4D9218] shrink-0" />
              <span>Predictable Delivery &amp; Upfront Scope</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="size-4 text-[#4D9218] shrink-0" />
              <span>Ongoing SLA Engineering Support</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
