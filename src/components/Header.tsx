"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <div className="hidden lg:flex items-center gap-8 text-sm text-muted">
          <Link
            href="/#problems"
            className="hover:text-ink font-medium transition-colors"
          >
            The Challenge
          </Link>
          <Link
            href="/#solutions"
            className="hover:text-ink font-medium transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="/#process"
            className="hover:text-ink font-medium transition-colors"
          >
            Our Process
          </Link>
          <Link
            href="/about"
            className="hover:text-ink font-medium transition-colors"
          >
            About Us
          </Link>
        </div>

        {/* Desktop CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 text-sm font-medium hover:bg-navy transition-colors shadow-xs"
          >
            Discuss a Project
            <ArrowUpRight className="w-4 h-4" />
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
              href="/#problems"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 hover:bg-sand transition-colors"
            >
              The Challenge
            </Link>
            <Link
              href="/#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 hover:bg-sand transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 hover:bg-sand transition-colors"
            >
              Our Process
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 hover:bg-sand transition-colors"
            >
              About Us
            </Link>
          </div>
          <div className="pt-4 border-t border-line">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-ink text-white px-5 py-3.5 text-sm font-medium hover:bg-navy transition-colors text-center"
            >
              Discuss a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
