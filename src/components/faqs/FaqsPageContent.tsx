"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/MotionWrapper";
import {
  ChevronRight,
  ArrowRight,
  HelpCircle,
  Clock,
  ShieldCheck,
  Code2,
  Database,
  Layers,
  Wrench,
  Search,
  MessageSquare,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsData, FaqItem } from "@/data/faqs";

export function FaqsPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const faqs: FaqItem[] = faqsData;

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "pricing", label: "Scope & Pricing" },
    { id: "tech", label: "Tech Stack & Architecture" },
    { id: "ownership", label: "IP & Code Ownership" },
    { id: "security", label: "Security & NDAs" },
    { id: "support", label: "Maintenance & SLAs" },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* 1. Hero Banner: Matte Green with Circuit Tracings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="relative rounded-3xl bg-[#8EDE35] border border-[#7ECC28] overflow-hidden py-12 sm:py-20 px-5 sm:px-10 lg:px-12 text-center shadow-sm">
          {/* Circuit Board Vector Pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="circuit-pattern-faqs"
              x="0"
              y="0"
              width="140"
              height="140"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 10 h50 v50 h60 M10 80 h30 v40 h80 M80 10 v40 h50 M30 130 v-30 h50 v-30"
                fill="none"
                stroke="#181B1E"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="60" cy="60" r="3.5" fill="#181B1E" />
              <circle cx="120" cy="120" r="3.5" fill="#181B1E" />
              <circle cx="130" cy="50" r="3.5" fill="#181B1E" />
              <circle cx="80" cy="80" r="3.5" fill="#181B1E" />
              <circle cx="10" cy="10" r="3" fill="#181B1E" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-faqs)" />
          </svg>

          <FadeIn direction="up" className="relative z-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181B1E]">
              Frequently Asked Questions
            </h1>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#181B1E]/80 mt-3 font-mono">
              <Link href="/" className="hover:text-[#181B1E] transition-colors">
                Home
              </Link>
              <ChevronRight className="size-3.5 opacity-60" />
              <span className="font-semibold text-[#181B1E]">FAQs</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Main FAQ Filter & Accordion Section (NO CARDS - Generous typographic spacing) */}
      <section id="faqs" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 scroll-mt-24">
        {/* Section Intro & Live Search */}
        <FadeIn direction="up">
          <div className="mb-12 sm:mb-16 space-y-6">
            <div>
              <span className="text-[#4D9218] font-mono text-xs font-semibold uppercase tracking-wider block mb-3">
                Answers &amp; Technical Clarifications
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E] leading-tight">
                Everything you need to know about our engineering standard.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
                Find transparent answers regarding how we estimate project costs, safeguard your intellectual property, architect reliable serverless databases, and manage ongoing production support.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. Postgres, ownership, pricing, timeline)..."
              className="w-full bg-white border border-[#E5E7EB] rounded-2xl pl-11 pr-4 py-3.5 text-sm text-[#181B1E] placeholder:text-muted/60 focus:border-[#8EDE35] focus:outline-none focus:ring-2 focus:ring-[#8EDE35]/25 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-muted hover:text-[#181B1E]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Jump Filters (Text Pills, No Badge Bloat) */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#181B1E] text-white font-bold shadow-xs"
                    : "bg-white border border-[#E5E7EB] text-[#181B1E] hover:border-[#8EDE35] hover:bg-gray-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Accordion Component (Radix UI / shadcn with Clean Dividers) */}
      <FadeIn direction="up" delay={0.08}>
        {filteredFaqs.length === 0 ? (
          <div className="py-16 text-center border-t border-b border-[#E5E7EB] text-muted space-y-3">
            <HelpCircle className="size-8 mx-auto text-muted/60" />
            <p className="font-semibold text-base text-[#181B1E]">No matching questions found</p>
            <p className="text-xs sm:text-sm">
              Try searching with different keywords or switch back to &ldquo;All Questions&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="text-xs font-mono font-bold text-[#4D9218] hover:underline pt-2 block mx-auto"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <Accordion type="single" collapsible className="w-full divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
            {filteredFaqs.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b-0 py-2 sm:py-3 transition-colors hover:bg-white/40"
              >
                <AccordionTrigger className="text-base sm:text-lg font-bold text-[#181B1E] tracking-tight hover:text-[#4D9218] hover:no-underline py-4 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted leading-relaxed pb-6 pt-1 whitespace-pre-line">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </FadeIn>
    </section>

    {/* 3. Bottom Direct Engineering Consultation */}
    <section className="bg-white border-t border-[#E5E7EB] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn direction="up">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-3">
            Direct Technical Answers
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E] leading-tight">
            Have a specific project question not covered here?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed max-w-2xl mx-auto">
            Our engineering team is ready to review your unique operational requirements, inspect system feasibility, and provide direct feedback within 24 business hours.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#8EDE35] text-[#181B1E] font-bold px-8 py-4 rounded-xl text-sm hover:bg-[#7ECC28] active:scale-[0.98] transition-all shadow-xs"
            >
              <span>Speak With An Engineer</span>
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="https://wa.me/2347062654567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF9F6] border border-[#E5E7EB] text-[#181B1E] font-mono text-xs font-bold px-6 py-4 rounded-xl hover:border-[#181B1E] transition-all shadow-2xs"
            >
              <span>Instant WhatsApp Inquiry (+234 706 265 4567)</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
    </div>
  );
}