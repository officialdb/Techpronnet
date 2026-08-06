'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QuickQuoteWidget() {
  const router = useRouter();
  const [selectedDomain, setSelectedDomain] = useState('software');

  const domains = [
    { id: 'software', name: 'Software Development', icon: 'fa-code', badge: 'Custom Web/Mobile/AI' },
    { id: 'security', name: 'Security Solutions', icon: 'fa-shield', badge: 'CCTV & Smart Home' },
    { id: 'solar', name: 'Solar & Inverters', icon: 'fa-sun-o', badge: 'Clean Power Systems' },
    { id: 'networking', name: 'Networking Infrastructure', icon: 'fa-sitemap', badge: 'Mesh Wi-Fi & Cabling' },
    { id: 'it-support', name: 'Managed IT Support', icon: 'fa-wrench', badge: '24/7 SLA Repairs' }
  ];

  const handleLaunchFullWizard = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/quote?domain=${selectedDomain}`);
  };

  return (
    <section className="py-20 bg-[#0D3B5B] text-white border-b border-white/10" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white/10 border border-white/20 rounded-xl p-8 sm:p-12 shadow-xl">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10" data-aos="fade-up">
            <span className="text-xs font-bold text-[#F5B400] uppercase tracking-widest bg-white/10 px-3 py-1 rounded border border-white/20">
              Interactive Assessment Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Instant Quote &amp; Solution Configurator
            </h2>
            <p className="text-sm text-slate-300">
              Select your required tech domain to configure your specs and calculate an estimated initial estimate.
            </p>
          </div>

          <form onSubmit={handleLaunchFullWizard} className="space-y-8">
            
            {/* Domain Selection Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {domains.map((dom, idx) => {
                const isSelected = selectedDomain === dom.id;
                return (
                  <button
                    key={dom.id}
                    type="button"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    onClick={() => setSelectedDomain(dom.id)}
                    className={`p-4 rounded-lg text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#1FA971] border-[#1FA971] text-white shadow-md'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 rounded-md ${isSelected ? 'bg-white/20' : 'bg-white/10'}`}>
                        <i className={`fa ${dom.icon} text-white text-lg`} />
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded bg-white text-[#1FA971] flex items-center justify-center">
                          <i className="fa fa-check text-xs" />
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="font-bold text-sm leading-tight mb-1 text-white">{dom.name}</div>
                      <div className="text-[10px] opacity-80">{dom.badge}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Launch Button */}
            <div className="pt-4 text-center" data-aos="zoom-in">
              <button
                type="submit"
                className="bg-[#F5B400] hover:bg-yellow-400 text-[#0A1A23] font-extrabold text-base px-10 py-3.5 rounded-lg shadow-md transition-all inline-flex items-center gap-3 hover:scale-105"
              >
                <span>Proceed to {selectedDomain.toUpperCase()} Specification Wizard</span>
                <i className="fa fa-arrow-right" />
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
