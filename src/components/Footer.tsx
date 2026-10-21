"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showFloatingTop, setShowFloatingTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingTop(true);
      } else {
        setShowFloatingTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
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
                <a
                  href="https://wa.me/2347062654567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-mono"
                >
                  +234 706 265 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-mono">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Techpronnet Technologies. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button (Left Hand Side) */}
      <a
        href="https://wa.me/2347062654567?text=Hello%20Techpronnet%2C%20I%20would%20like%20to%20inquire%20about%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Techpronnet on WhatsApp (+234 706 265 4567)"
        className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3 sm:px-4 sm:py-3 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20 group cursor-pointer"
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="currentColor"
          className="shrink-0 transition-transform group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.33C16.32 14.2 15.1 13.6 14.87 13.52C14.65 13.44 14.49 13.4 14.33 13.65C14.17 13.9 13.7 14.48 13.56 14.64C13.42 14.81 13.27 14.83 13.02 14.71C12.78 14.58 11.99 14.32 11.06 13.49C10.33 12.84 9.84 12.04 9.7 11.79C9.55 11.55 9.68 11.41 9.81 11.29C9.92 11.18 10.05 11 10.18 10.86C10.3 10.71 10.34 10.61 10.42 10.45C10.5 10.28 10.46 10.14 10.4 10.02C10.34 9.89 9.84 8.67 9.64 8.16C9.44 7.67 9.24 7.74 9.09 7.73C8.95 7.72 8.79 7.72 8.62 7.72C8.46 7.72 8.19 7.78 7.97 8.03C7.74 8.27 7.11 8.86 7.11 10.07C7.11 11.27 7.99 12.43 8.11 12.59C8.23 12.76 9.83 15.22 12.28 16.28C12.87 16.53 13.32 16.68 13.68 16.79C14.27 16.98 14.81 16.95 15.24 16.89C15.71 16.82 16.7 16.29 16.9 15.72C17.11 15.15 17.11 14.66 17.05 14.56C16.98 14.45 16.82 14.41 16.57 14.33Z" />
        </svg>
        <span className="hidden sm:inline font-mono text-xs font-bold tracking-tight">
          WhatsApp
        </span>
      </a>

      {/* Floating Back to Top Button (Right Hand Side) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 size-11 sm:size-12 rounded-2xl bg-[#181B1E] text-[#8EDE35] border border-white/20 shadow-2xl flex items-center justify-center hover:bg-[#252824] hover:border-[#8EDE35] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group ${
          showFloatingTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="size-5 transition-transform group-hover:-translate-y-0.5" />
        <span className="sr-only">Back to top</span>
      </button>
    </footer>
  );
}
