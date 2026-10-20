import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  BarChart3,
  RefreshCw,
  Check,
} from "lucide-react";

export function Hero() {
  return (
    <section className="border-b border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7">
            <p className="eyebrow uppercase text-xs font-semibold text-muted mb-7">
              Software · Websites · Mobile Applications
            </p>

            <h1 className="text-[42px] sm:text-6xl lg:text-[68px] leading-[1.08] tracking-[-.055em] font-semibold max-w-3xl text-ink">
              Better technology.
              <span className="block text-muted font-normal">Better business.</span>
            </h1>

            <p className="mt-7 text-base sm:text-lg text-muted leading-8 max-w-xl">
              We design and build practical digital solutions that help businesses
              simplify operations, serve customers better and grow with confidence.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-ink text-white px-7 py-4 text-sm font-medium hover:bg-navy transition-colors"
              >
                Tell Us About Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#solutions"
                className="inline-flex items-center justify-center gap-3 border border-line bg-paper px-7 py-4 text-sm font-medium text-ink hover:border-ink transition-colors"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted">
              <span className="inline-flex items-center">
                <Check className="w-3.5 h-3.5 text-navy mr-2 shrink-0" />
                Solutions built for your needs
              </span>
              <span className="inline-flex items-center">
                <Check className="w-3.5 h-3.5 text-navy mr-2 shrink-0" />
                Clear project communication
              </span>
              <span className="inline-flex items-center">
                <Check className="w-3.5 h-3.5 text-navy mr-2 shrink-0" />
                Ongoing technical support
              </span>
            </div>
          </div>

          {/* Understated Operations Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-line p-6 sm:p-8 shadow-xs">
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-line">
                <div>
                  <p className="eyebrow text-[10px] uppercase text-muted font-semibold">
                    A more connected business
                  </p>
                  <h2 className="text-xl font-semibold tracking-tight mt-2 text-ink">
                    Your operations, simplified.
                  </h2>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted mt-1" />
              </div>

              <div className="py-6 space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 shrink-0 bg-sand flex items-center justify-center text-navy transition-colors group-hover:bg-sage">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">Customer bookings</h3>
                    <p className="text-sm text-muted mt-1 leading-6">
                      Organise appointments and enquiries in one place.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 shrink-0 bg-sage flex items-center justify-center text-navy transition-colors group-hover:bg-sand">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">Business operations</h3>
                    <p className="text-sm text-muted mt-1 leading-6">
                      Manage orders, inventory and daily activity more efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 shrink-0 bg-sand flex items-center justify-center text-navy transition-colors group-hover:bg-sage">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">Connected workflows</h3>
                    <p className="text-sm text-muted mt-1 leading-6">
                      Reduce repetitive work by connecting the tools you use.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-line pt-5 flex items-center justify-between gap-3 text-xs">
                <span className="text-muted">Designed around your workflow</span>
                <span className="font-medium text-navy">Built with purpose.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
