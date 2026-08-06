import React from 'react';
import Link from 'next/link';
import { COMPANY_DETAILS } from '@/lib/initial-data';

export default function AboutPage() {
  return (
    <div className="py-16 bg-white text-[#0A1A23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-[#0D3B5B] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">
            About Techpronnet Technologies
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0D3B5B]">
            Your General Tech Solution Providers
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            {COMPANY_DETAILS.mission}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#0D3B5B] text-white flex items-center justify-center font-bold">
              <i className="fa fa-shield text-[#1FA971] text-xl" />
            </div>
            <h3 className="text-xl font-bold text-[#0D3B5B]">Uncompromising Reliability</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every solar installation, CCTV camera loop, and software deployment is engineered for 99.9% uptime and longevity.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#0D3B5B] text-white flex items-center justify-center font-bold">
              <i className="fa fa-trophy text-[#F5B400] text-xl" />
            </div>
            <h3 className="text-xl font-bold text-[#0D3B5B]">Certified Engineers</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our multidisciplinary team holds industry certifications in Full-stack Software Engineering, Cisco Networking, and Renewable Energy.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#0D3B5B] text-white flex items-center justify-center font-bold">
              <i className="fa fa-users text-[#0F6A74] text-xl" />
            </div>
            <h3 className="text-xl font-bold text-[#0D3B5B]">Customer-Centric SLA</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We back all projects with 24/7 dedicated IT support hotlines, routine solar audits, and responsive maintenance.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0D3B5B] text-white rounded-xl p-10 text-center space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to transform your tech infrastructure?</h2>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-[#1FA971] text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-lg"
          >
            <span>Request a Solution Consultation</span>
            <i className="fa fa-arrow-right" />
          </Link>
        </div>

      </div>
    </div>
  );
}
