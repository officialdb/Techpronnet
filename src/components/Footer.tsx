"use client";

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
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted text-center sm:text-left">
          &copy; {currentYear} Techpronnet Technologies. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          type="button"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
