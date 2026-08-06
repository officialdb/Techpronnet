'use client';

import React from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/lib/initial-data';

interface ServicesGridProps {
  services: ServiceItem[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-24 bg-white text-[#0A1A23]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" data-aos="fade-up">
          <div className="inline-block bg-[#0D3B5B] text-white px-3.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
            Our Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D3B5B] tracking-tight">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Techpronnet Technologies delivers end-to-end engineering, installation, and support across 5 key technology pillars tailored for modern businesses and residences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const features = JSON.parse(service.features_json || '[]');
            return (
              <div
                key={service.id}
                id={service.domain}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 150}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group"
              >
                {service.is_popular && (
                  <span className="absolute top-4 right-4 bg-[#F5B400] text-[#0A1A23] font-bold text-[10px] uppercase px-2.5 py-1 rounded tracking-wider">
                    Most Requested
                  </span>
                )}

                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-lg bg-[#0D3B5B] text-white flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110">
                    <i className={`fa ${service.icon} text-xl`} />
                  </div>

                  <h3 className="text-xl font-bold text-[#0D3B5B] mb-2 group-hover:text-[#1FA971] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#0F6A74] mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Included Capabilities:
                    </div>
                    {features.slice(0, 5).map((feat: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <i className="fa fa-check-circle text-[#1FA971] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                    {features.length > 5 && (
                      <div className="text-[11px] text-[#0F6A74] font-semibold pt-1">
                        + {features.length - 5} additional specialized sub-services
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Starting From</span>
                    <span className="font-numbers text-lg font-extrabold text-[#0D3B5B]">
                      {service.pricing_starting || 'Custom Quote'}
                    </span>
                  </div>

                  <Link
                    href={`/quote?domain=${service.domain}`}
                    className="bg-[#0D3B5B] hover:bg-[#1FA971] text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Get Quote</span>
                    <i className="fa fa-arrow-right" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 bg-[#0D3B5B] rounded-xl p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-md border border-white/10" data-aos="zoom-in">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Need a multi-service package or custom integration?</h3>
            <p className="text-sm text-slate-200">
              Combine Software, CCTV Security, Solar Power, and Networking into a single enterprise SLA project.
            </p>
          </div>

          <Link
            href="/quote"
            className="bg-[#F5B400] hover:bg-yellow-400 text-[#0A1A23] font-extrabold text-sm px-8 py-3.5 rounded-lg transition-all shadow-md shrink-0 whitespace-nowrap"
          >
            Launch Interactive Quote Engine
          </Link>
        </div>

      </div>
    </section>
  );
}
