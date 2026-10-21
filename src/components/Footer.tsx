"use client";

import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

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
    <footer className="bg-[#181B1E] text-white border-t border-[#2D333B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* 1. Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Techpronnet Technologies"
            >
              <span className="size-9 rounded-xl bg-[#8EDE35] text-[#181B1E] flex items-center justify-center font-bold text-lg shadow-sm">
                T
              </span>
              <span className="leading-tight">
                <span className="block font-bold tracking-tight text-[18px] text-white">
                  Techpronnet
                </span>
                <span className="block text-[10px] tracking-[.18em] uppercase text-[#8EDE35] font-mono">
                  Technologies
                </span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Engineering high-performance web applications, custom hospital &amp; logistics systems, and resilient workflow automation pipelines.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-gray-400">
              <ShieldCheck className="size-4 text-[#8EDE35]" />
              <span>100% Bespoke Client Source Code Ownership</span>
            </div>
          </div>

          {/* 2. Other Pages */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8EDE35] block">
              Other Pages
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-mono">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#8EDE35] font-bold">+</span>
                  <span>Homepage</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#8EDE35] font-bold">+</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#8EDE35] font-bold">+</span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#8EDE35] font-bold">+</span>
                  <span>Our Work</span>
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#8EDE35] font-bold">+</span>
                  <span>Process</span>
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#8EDE35] font-bold">+</span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Quick Links / Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8EDE35] block">
              Core Services
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-mono">
              <li>
                <Link href="/services#web-portals" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#8EDE35] font-bold">+</span>
                  <span>Websites &amp; Portals</span>
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-apps" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#8EDE35] font-bold">+</span>
                  <span>Mobile Applications</span>
                </Link>
              </li>
              <li>
                <Link href="/services#business-software" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#8EDE35] font-bold">+</span>
                  <span>Custom Business ERP</span>
                </Link>
              </li>
              <li>
                <Link href="/services#workflow-automation" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#8EDE35] font-bold">+</span>
                  <span>Workflow Automation</span>
                </Link>
              </li>
              <li>
                <Link href="/services#apis-integrations" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#8EDE35] font-bold">+</span>
                  <span>APIs &amp; Integrations</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8EDE35] block">
              Contact Info
            </span>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 text-[#8EDE35] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Abuja &amp; Lagos, Nigeria · Worldwide Remote Delivery</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-[#8EDE35] shrink-0" />
                <span>contact@techpronnet.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-[#8EDE35] shrink-0" />
                <span>+234 812 000 0000</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                type="button"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-gray-300 hover:text-white border border-white/20 bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="size-3.5 text-[#8EDE35]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-mono">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Techpronnet Technologies. All rights reserved.
          </p>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#8EDE35] text-[11px]">
            Next.js 16 SSR · Neon Serverless Postgres
          </span>
        </div>
      </div>
    </footer>
  );
}
