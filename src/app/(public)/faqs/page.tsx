'use client';

import React, { useState } from 'react';

export default function FAQsPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What core services does Techpronnet Technologies provide?',
      a: 'Techpronnet is a full-service general technology solution provider offering Custom Software Development (Web, Mobile, SaaS, AI), Security Solutions (CCTV, Access Control, Smart Doors), Solar & Electrical (Panels, Inverters, Lithium Backup), Enterprise Networking (Cat6a Cabling, Wi-Fi 6 Mesh), and Managed IT Support.'
    },
    {
      q: 'How do I request a site inspection or quote for a Solar installation or CCTV security setup?',
      a: 'You can use our online Interactive Quote Engine (/quote) to select your domain, specify camera count or power load, and submit your contact details. Our team will send an estimate within 24 hours or schedule an engineer for an on-site survey.'
    },
    {
      q: 'What warranties and SLAs do you offer on hardware and software?',
      a: 'All solar panels come with up to 25-year manufacturer warranties, inverters carry 2-5 year warranties, CCTV hardware includes 1-2 year replacement guarantees, and software projects come with standard 90-day bug-free warranty and optional ongoing SLA maintenance.'
    },
    {
      q: 'Do you provide 24/7 emergency support for IT or power outages?',
      a: 'Yes, we operate a 24/7 IT Emergency Hotline for SLA clients and critical business outages.'
    }
  ];

  return (
    <div className="py-16 bg-white text-[#0A1A23] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-12">
          <span className="bg-[#0D3B5B] text-white text-xs font-bold uppercase px-4 py-1.5 rounded-md inline-block">
            Knowledge Base
          </span>
          <h1 className="text-4xl font-extrabold text-[#0D3B5B]">Frequently Asked Questions</h1>
          <p className="text-sm text-slate-600">Find quick answers to common inquiries about Techpronnet Technologies solutions.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 font-bold text-base text-[#0D3B5B] flex justify-between items-center gap-4 hover:bg-slate-50"
                >
                  <span className="flex items-center gap-3">
                    <i className="fa fa-question-circle text-[#1FA971] text-lg shrink-0" />
                    <span>{f.q}</span>
                  </span>
                  <i className={`fa fa-chevron-down text-slate-400 transition-transform ${isOpen ? 'text-[#1FA971]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
