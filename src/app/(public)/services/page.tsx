import React from 'react';
import Link from 'next/link';
import { fetchServices } from '@/lib/api';

export const revalidate = 60;

export default async function ServicesPage() {
  const services = await fetchServices();

  const domainIcons: Record<string, string> = {
    software: 'fa-code',
    security: 'fa-shield',
    solar: 'fa-sun-o',
    networking: 'fa-sitemap',
    'it-support': 'fa-wrench'
  };

  return (
    <div className="py-16 bg-white text-[#0A1A23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block bg-[#0D3B5B] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-md">
            Full Service Breakdown
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0D3B5B]">
            Enterprise Solutions & Engineering Services
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Techpronnet Technologies provides scalable software, security surveillance, solar power microgrids, structured network cabling, and managed IT support.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {services.map((s) => {
          const iconClass = domainIcons[s.domain] || 'fa-cog';
            const features = JSON.parse(s.features_json || '[]');
            return (
              <div
                key={s.id}
                id={s.domain}
                className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#0D3B5B] text-white rounded-md">
                      <i className={`fa ${iconClass} text-xl`} />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#1FA971] bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
                      {s.domain.toUpperCase()} DOMAIN
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D3B5B]">
                    {s.name}
                  </h2>

                  <p className="text-sm font-semibold text-[#0F6A74]">
                    {s.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {features.map((f: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <i className="fa fa-check-circle text-[#1FA971] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Action Column */}
                <div className="lg:col-span-5 bg-[#0D3B5B] text-white p-8 rounded-xl border border-white/10 space-y-6 text-center">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                    Starting Assessment
                  </div>
                  <div className="font-numbers text-4xl font-extrabold text-[#F5B400]">
                    {s.pricing_starting || 'Custom SLA'}
                  </div>
                  <p className="text-xs text-slate-300">
                    Includes initial engineering survey, detailed specification proposal, hardware warranties, and SLA support.
                  </p>

                  <div className="space-y-3 pt-2">
                    <Link
                      href={`/quote?domain=${s.domain}`}
                      className="w-full bg-[#1FA971] hover:bg-emerald-600 text-white font-extrabold text-sm py-3.5 rounded-lg shadow flex items-center justify-center gap-2"
                    >
                       <span>Configure Quote for {s.name.split(' ')[0]}</span>
                       <i className="fa fa-arrow-right" />
                     </Link>

                    <Link
                      href={`/services/${s.slug}`}
                      className="w-full bg-[#0D3B5B] hover:bg-[#124b73] text-white font-semibold text-xs py-3 rounded-lg block border border-white/10"
                    >
                      View Dedicated Service Specs
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
