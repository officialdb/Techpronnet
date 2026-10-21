"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-line transition-all">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
          aria-label="Techpronnet Technologies Home"
        >
          <span className="size-8 sm:size-9 border border-ink bg-paper flex items-center justify-center font-semibold text-base sm:text-lg text-ink group-hover:bg-sand transition-colors shrink-0">
            T
          </span>
          <span className="leading-tight">
            <span className="block font-bold tracking-tight text-[15px] sm:text-[17px] text-ink">
              Techpronnet
            </span>
            <span className="block text-[9px] sm:text-[10px] tracking-[.18em] uppercase text-muted mt-0.5">
              Technologies
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm text-muted">
          <Link
            href="/services"
            className="hover:text-[#4D9218] font-medium transition-colors"
          >
            Services
          </Link>
          <Link
            href="/work"
            className="hover:text-[#4D9218] font-medium transition-colors"
          >
            Our Work
          </Link>
          <Link
            href="/testimonials"
            className="hover:text-[#4D9218] font-medium transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="/faqs"
            className="hover:text-[#4D9218] font-medium transition-colors"
          >
            FAQs
          </Link>
          <Link
            href="/about"
            className="hover:text-[#4D9218] font-medium transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#4D9218] font-medium transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-[#8EDE35] text-[#181B1E] hover:bg-[#7ECC28] px-5 py-2.5 text-sm font-bold rounded-xl transition-colors shadow-xs"
          >
            <span>Discuss a Project</span>
            <ArrowUpRight className="size-4" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ink hover:text-navy focus:outline-none focus:ring-2 focus:ring-navy"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-paper border-b border-line px-5 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2 text-base font-medium text-ink">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 hover:bg-sand transition-colors"
            >
              Services
            </Link>
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 hover:bg-sand transition-colors"
            >
              Our Work
            </Link>
            <Link
              href="/testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 hover:bg-sand transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 hover:bg-sand transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 hover:bg-sand transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 hover:bg-sand transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 border-t border-line space-y-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#8EDE35] text-[#181B1E] px-5 py-3.5 text-sm font-bold rounded-xl hover:bg-[#7ECC28] active:scale-[0.98] transition-all text-center shadow-xs"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="size-4" />
            </Link>

            {/* Social channels in mobile drawer */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                href="https://x.com/Tech_pronnet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                title="X / Twitter"
                className="size-9 rounded-xl bg-sand border border-line flex items-center justify-center text-ink hover:bg-[#8EDE35] hover:border-[#8EDE35] transition-all"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@techpronnet1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="TikTok"
                className="size-9 rounded-xl bg-sand border border-line flex items-center justify-center text-ink hover:bg-[#8EDE35] hover:border-[#8EDE35] transition-all"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/techpronnettechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="size-9 rounded-xl bg-sand border border-line flex items-center justify-center text-ink hover:bg-[#8EDE35] hover:border-[#8EDE35] transition-all"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
