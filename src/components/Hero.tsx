import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  BarChart3,
  RefreshCw,
  Check,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="border-b border-[#E5E7EB] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] mb-6 shadow-2xs">
              <span className="size-2 rounded-full bg-[#8EDE35]" />
              <span className="font-mono text-[11px] sm:text-xs font-semibold text-[#4D9218] uppercase tracking-wider">
                Software · Websites · Mobile Applications
              </span>
            </div>

            <h1 className="text-[36px] sm:text-6xl lg:text-[68px] leading-[1.08] tracking-[-.05em] font-extrabold max-w-3xl text-[#181B1E] break-words">
              Better technology.
              <span className="block mt-1 sm:mt-1.5 font-extrabold text-[#181B1E]">
                Better{" "}
                <span className="bg-[#8EDE35] text-[#181B1E] px-3.5 py-0.5 rounded-xl inline-block shadow-xs">
                  business.
                </span>
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
              We engineer bespoke software systems, modern client portals, and resilient automated pipelines designed around your exact operational workflows.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#8EDE35] text-[#181B1E] font-bold px-7 sm:px-8 py-4 rounded-xl text-sm hover:bg-[#7ECC28] transition-colors shadow-sm text-center w-full sm:w-auto"
              >
                <span>Tell Us About Your Project</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 bg-[#181B1E] text-white font-medium px-7 sm:px-8 py-4 rounded-xl text-sm hover:bg-[#334655] transition-colors shadow-xs text-center w-full sm:w-auto"
              >
                <span>Explore Services &amp; Pricing</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-3 text-xs text-muted font-mono">
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

          {/* Operations Preview Console Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#181B1E] text-white border border-[#2D333B] rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group">
              {/* Circuit board vector background */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern
                  id="circuit-pattern-hero"
                  x="0"
                  y="0"
                  width="120"
                  height="120"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M10 10 h40 v40 h50 M10 70 h20 v30 h60 M70 10 v30 h40"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="50" cy="50" r="2.5" fill="#FFFFFF" />
                  <circle cx="100" cy="100" r="2.5" fill="#FFFFFF" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit-pattern-hero)" />
              </svg>

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
                  <div>
                    <span className="font-mono text-[10px] uppercase font-semibold text-[#8EDE35] block">
                      Operational Console · Live Telemetry
                    </span>
                    <h2 className="text-xl font-bold tracking-tight text-white mt-1">
                      Your Operations, Simplified.
                    </h2>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#8EDE35] text-[#181B1E] text-[10px] font-mono font-bold shrink-0">
                    Active
                  </span>
                </div>

                <div className="py-6 space-y-4">
                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#8EDE35]/50 transition-colors">
                    <div className="size-10 shrink-0 rounded-xl bg-[#8EDE35] text-[#181B1E] flex items-center justify-center font-bold">
                      <CalendarCheck className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">Client Bookings &amp; Intakes</h3>
                      <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                        Direct scheduling, automated SMS confirmations and intake forms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#8EDE35]/50 transition-colors">
                    <div className="size-10 shrink-0 rounded-xl bg-white/10 text-[#8EDE35] border border-white/15 flex items-center justify-center font-bold">
                      <BarChart3 className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">Operations &amp; Triage Queues</h3>
                      <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                        Department dispatch, pharmacy inventory and real-time patient queues.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#8EDE35]/50 transition-colors">
                    <div className="size-10 shrink-0 rounded-xl bg-white/10 text-white border border-white/15 flex items-center justify-center font-bold">
                      <RefreshCw className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">Automated API Pipelines</h3>
                      <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                        WhatsApp notifications, payment verification &amp; webhook processing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-400">Sub-30ms Neon Postgres</span>
                  <Link
                    href="/work"
                    className="font-semibold text-[#8EDE35] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Case Studies</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
