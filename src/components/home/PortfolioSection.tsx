'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/lib/initial-data';

interface PortfolioSectionProps {
  projects: ProjectItem[];
}

export default function PortfolioSection({ projects }: PortfolioSectionProps) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.domain === activeTab);

  const tabs = [
    { id: 'all', label: 'All Showcase Projects' },
    { id: 'software', label: 'Software & SaaS' },
    { id: 'solar', label: 'Solar & Inverters' },
    { id: 'security', label: 'CCTV Security' },
    { id: 'networking', label: 'Networking' },
  ];

  return (
    <section className="py-24 bg-[#0D3B5B] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-aos="fade-up">
          <div className="space-y-3">
            <div className="inline-block bg-white/10 text-[#1FA971] px-3.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border border-white/10">
              Proven Enterprise Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Client Projects &amp; Case Studies
            </h2>
            <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
              Explore real-world engineering deployments executed by Techpronnet Technologies across commercial enterprises, logistics hubs, and medical centers.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="text-sm font-semibold text-[#F5B400] hover:underline flex items-center gap-1.5 shrink-0"
          >
            <span>Browse Full Portfolio Gallery</span>
            <i className="fa fa-arrow-right" />
          </Link>
        </div>

        {/* Domain Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-white/10" data-aos="fade-up" data-aos-delay="100">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === t.id
                  ? 'bg-[#1FA971] text-white shadow-md'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white border border-white/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj, idx) => {
            const metrics = proj.metrics_json ? JSON.parse(proj.metrics_json) : null;
            return (
              <div
                key={proj.id}
                data-aos="fade-up"
                data-aos-delay={(idx % 2) * 200}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xl flex flex-col justify-between group hover:border-[#1FA971] transition-colors"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                    <img
                      src={proj.image_url}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0D3B5B]/40" />
                    
                    <span className="absolute top-4 left-4 bg-[#0D3B5B] text-[#1FA971] text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-md tracking-wider border border-white/10">
                      {proj.domain.toUpperCase()}
                    </span>

                    <span className="absolute bottom-4 left-4 text-xs text-white flex items-center gap-1">
                      <i className="fa fa-calendar text-[#F5B400]" />
                      <span>Completed {proj.completion_date}</span>
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">
                      Client: {proj.client}
                    </div>

                    <h3 className="text-xl font-bold text-[#0D3B5B] group-hover:text-[#1FA971] transition-colors leading-snug">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Key Metrics */}
                    {metrics && (
                      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-center">
                        {Object.entries(metrics).map(([k, v]: [string, any], idx2) => (
                          <div key={idx2} className="bg-slate-50 p-2 rounded-md border border-slate-200">
                            <div className="font-numbers text-sm font-extrabold text-[#F5B400]">{v}</div>
                            <div className="text-[10px] text-slate-500">{k}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/portfolio#${proj.slug}`}
                    className="w-full bg-[#0D3B5B] hover:bg-[#1FA971] text-white font-semibold text-xs py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Read Full Case Study</span>
                    <i className="fa fa-external-link" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
