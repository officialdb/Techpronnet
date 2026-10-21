"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Lock,
  Scale,
  Stethoscope,
  Truck,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface ClientTestimonial {
  id: string;
  num: string;
  client: string;
  role: string;
  organization: string;
  sector: string;
  quote: string;
  metric: string;
  metricLabel: string;
  url?: string;
  icon: typeof Scale;
}

export function TestimonialCarousel() {
  const shouldReduceMotion = useReducedMotion();
  const testimonials: ClientTestimonial[] = [
    {
      id: "legal",
      num: "01",
      client: "Barrister Nnamdi I. Nwagwu, Esq.",
      role: "Principal Partner",
      organization: "Nnamdi I. Nwagwu & Co. (Legal Practitioners)",
      sector: "Legal & Professional Advisory",
      quote:
        "Techpronnet delivered a legal practice portal that fundamentally transformed how our chambers intake client briefs. The system is secure, rapid on mobile devices, and conveys the exact level of prestige our clients expect from senior counsel.",
      metric: "+62%",
      metricLabel: "Increase in verified client consultation bookings",
      url: "https://nnamdinwagwu.com",
      icon: Scale,
    },
    {
      id: "hospital",
      num: "02",
      client: "Dr. Chidinma Ogechi, MBBS, FWACS",
      role: "Medical Director",
      organization: "Ogechi Specialist Hospital",
      sector: "Healthcare & Clinical Operations",
      quote:
        "Before working with Techpronnet, our front desk was overwhelmed by double-bookings and lost paper records. Their platform synchronized four clinical departments and eliminated scheduling conflicts completely.",
      metric: "99.98%",
      metricLabel: "Clinical system uptime across 12,000+ patient sessions",
      url: "https://ogechihospital.com",
      icon: Stethoscope,
    },
    {
      id: "logistics",
      num: "03",
      client: "Tunde Adeyemi",
      role: "Operations Director",
      organization: "Avex Global Logistics Services",
      sector: "Freight & Interstate Logistics Dispatch",
      quote:
        "In commercial logistics, software failure halts freight trucks and costs millions. Techpronnet engineered an event-driven dispatch platform that handles live telemetry and automated SMS notifications with zero latency hiccups.",
      metric: "14 Hubs",
      metricLabel: "Synchronized with 100% automated digital manifest tracking",
      url: "https://avexlogistics.com",
      icon: Truck,
    },
    {
      id: "telehealth",
      num: "04",
      client: "Dr. Sarah Kalu",
      role: "Clinical Product Lead",
      organization: "Zidiclinic AI Telehealth",
      sector: "HealthTech & Clinical Telehealth",
      quote:
        "Techpronnet's software architecture gave us the rock-solid Postgres connection pooling and Next.js SSR performance required to launch our clinical assist workflows to thousands of concurrent users safely.",
      metric: "<30ms",
      metricLabel: "Global query latency via Neon Serverless Postgres",
      url: "https://zidiclinic.com",
      icon: Stethoscope,
    },
    {
      id: "fintech",
      num: "05",
      client: "Michael Okonjo",
      role: "Chief Technology Officer",
      organization: "Chaen Financial Services",
      sector: "Financial Commerce & Virtual Card Infrastructure",
      quote:
        "Finding an engineering team that deeply understands atomic database transactions, idempotency keys, and zero-loss ledger reconciliation is extraordinarily rare. Techpronnet delivered enterprise-grade financial software that passed our rigorous audit.",
      metric: "Zero Loss",
      metricLabel: "Automated ledger balancing across high-volume card transactions",
      url: "https://chaen.tech",
      icon: CreditCard,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);

  const total = testimonials.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay timer with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  const current = testimonials[currentIndex];
  const CurrentIcon = current.icon;

  return (
    <section
      id="testimonials"
      className="bg-[#FAF9F6] border-b border-[#E5E7EB] py-16 sm:py-24 overflow-hidden relative scroll-mt-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Client Testimonials Carousel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Minimal & Editorial (NO CARDS) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block mb-3">
              Verified Client Outcomes
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181B1E] leading-tight">
              What leaders say about building with{" "}
              <span className="bg-[#8EDE35] text-[#181B1E] px-3.5 py-0.5 rounded-xl inline-block shadow-xs">
                Techpronnet.
              </span>
            </h2>
          </div>

          {/* Carousel Navigation Buttons & Counter */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <span className="font-mono text-xs font-bold text-muted select-none">
              <span className="text-[#181B1E]">{current.num}</span> / 0{total}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="size-10 sm:size-11 rounded-full border border-[#E5E7EB] bg-white text-[#181B1E] hover:bg-[#8EDE35] hover:border-[#8EDE35] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="size-10 sm:size-11 rounded-full border border-[#E5E7EB] bg-white text-[#181B1E] hover:bg-[#8EDE35] hover:border-[#8EDE35] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Content Stage (Pure Editorial Format - No Heavy Card Boxes) */}
        <div className="relative min-h-[360px] sm:min-h-[320px] lg:min-h-[290px] flex items-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: shouldReduceMotion ? 0 : direction * -24 }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              <div className="space-y-8 sm:space-y-10">
                {/* Big Quote */}
                <div className="relative">
                  <Quote className="size-8 sm:size-10 text-[#8EDE35] mb-4 opacity-80" />
                  <p className="text-xl sm:text-2xl lg:text-[30px] font-extrabold text-[#181B1E] leading-snug sm:leading-relaxed tracking-tight max-w-5xl">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </div>

                {/* Attribution & Impact Row (Generous spacing, clean divider) */}
                <div className="pt-6 border-t border-[#E5E7EB] grid sm:grid-cols-12 gap-6 items-center">
                  {/* Left: Client Profile */}
                  <div className="sm:col-span-8 flex items-start sm:items-center gap-3.5">
                    <div className="size-11 rounded-xl bg-[#181B1E] text-[#8EDE35] flex items-center justify-center shrink-0">
                      <CurrentIcon className="size-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="font-bold text-[#181B1E] text-base sm:text-lg">
                          {current.client}
                        </span>
                        <span className="hidden sm:inline text-muted/40">·</span>
                        <span className="text-xs font-mono font-semibold text-[#4D9218] uppercase">
                          {current.sector}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted mt-0.5">
                        {current.role} &mdash;{" "}
                        <span className="text-[#181B1E]/90 font-medium">
                          {current.organization}
                        </span>
                      </p>
                      {current.url && (
                        <a
                          href={current.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-[#4D9218] transition-colors mt-1.5"
                        >
                          <Lock className="size-3 text-[#4D9218]" />
                          <span>{current.url.replace("https://", "")}</span>
                          <ArrowUpRight className="size-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Concrete Verified Metric */}
                  <div className="sm:col-span-4 sm:border-l sm:border-[#E5E7EB] sm:pl-6 space-y-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#181B1E] tracking-tight block">
                      {current.metric}
                    </span>
                    <p className="text-xs text-muted font-mono leading-relaxed">
                      {current.metricLabel}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Bottom Strip: Dot Progress & 'See More Client Feedback' Link */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-[#181B1E]"
                    : "w-2.5 bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                }`}
              />
            ))}
          </div>

          {/* 'See More Client Feedback' Link */}
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#181B1E] hover:text-[#4D9218] transition-colors group"
          >
            <span>See More Client Feedback</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}