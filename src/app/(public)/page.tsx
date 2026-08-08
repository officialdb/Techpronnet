import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import PortfolioSection from '@/components/home/PortfolioSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import QuickQuoteWidget from '@/components/home/QuickQuoteWidget';
import { fetchServices, fetchProjects, fetchReviews, fetchCMS } from '@/lib/api';
import Link from 'next/link';
import { COMPANY_DETAILS } from '@/lib/initial-data';

export const revalidate = 60; // 1 minute ISR revalidation

export default async function HomePage() {
  const [services, projects, reviewsData, cmsData] = await Promise.all([
    fetchServices(),
    fetchProjects(),
    fetchReviews(),
    fetchCMS('homepage_hero')
  ]);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection cmsData={cmsData} />

      {/* 2. Quick Quote Configurator */}
      <QuickQuoteWidget />

      {/* 3. Core Services Grid (5 Domains) */}
      <ServicesGrid services={services} />

      {/* 4. Portfolio & Client Projects */}
      <PortfolioSection projects={projects} />

      {/* 5. Google Business Profile Reviews */}
      <ReviewsSection summary={reviewsData.summary} reviews={reviewsData.reviews} />

      {/* 6. High-Conversion Emergency & Lead Banner */}
      <section className="py-20 bg-[#0D3B5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="bg-[#1FA971] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-md inline-block">
            Immediate Response Guarantee
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Facing a Technical Emergency or Planning a New Project?
          </h2>
          <p className="text-slate-200 text-base max-w-2xl mx-auto">
            Our certified engineering teams are available for immediate site surveys, software scoping calls, and emergency IT troubleshooting.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a
              href={`tel:${cmsData?.hotline || COMPANY_DETAILS.hotline}`}
              className="bg-[#F5B400] hover:bg-yellow-400 text-[#0A1A23] font-bold text-sm px-7 py-3.5 rounded-lg shadow-lg flex items-center gap-2"
            >
              <i className="fa fa-exclamation-triangle" />
              <span>Call Emergency Hotline</span>
            </a>

            <a
              href={COMPANY_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1FA971] hover:bg-emerald-600 text-white font-bold text-sm px-7 py-3.5 rounded-lg shadow-lg flex items-center gap-2"
            >
              <i className="fa fa-whatsapp text-lg" />
              <span>Instant WhatsApp Chat</span>
            </a>

            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-7 py-3.5 rounded-lg border border-white/20 flex items-center gap-2"
            >
              <i className="fa fa-envelope" />
              <span>Contact Techpronnet</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
