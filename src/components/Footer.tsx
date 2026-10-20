"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-paper border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-line items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Techpronnet Technologies"
            >
              <span className="size-8 border border-ink bg-paper flex items-center justify-center font-semibold text-base text-ink group-hover:bg-sand transition-colors">
                T
              </span>
              <span className="leading-tight">
                <span className="block font-bold tracking-tight text-[16px] text-ink">
                  Techpronnet
                </span>
                <span className="block text-[9px] tracking-[.18em] uppercase text-muted">
                  Technologies
                </span>
              </span>
            </Link>
            <p className="text-xs text-muted max-w-sm leading-relaxed">
              Engineering practical digital solutions, custom software platforms, and resilient workflow automation for forward-thinking organizations.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
            <Link href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-ink transition-colors">
              About Us
            </Link>
            <Link href="/services" className="hover:text-ink transition-colors">
              Services
            </Link>
            <Link href="/work" className="hover:text-ink transition-colors">
              Our Work
            </Link>
            <Link href="/#process" className="hover:text-ink transition-colors">
              Process
            </Link>
            <Link href="/#contact" className="hover:text-ink transition-colors">
              Contact
            </Link>
          </div>

          {/* Badge / Back to top */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-2 text-xs font-medium text-muted hover:text-ink border border-line px-3.5 py-2 hover:border-ink transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Techpronnet Technologies. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-muted/70">
            Precision Software · Enterprise Workflows · Established 2019
          </p>
        </div>
      </div>
    </footer>
  );
}
