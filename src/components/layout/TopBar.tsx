'use client';

import React from 'react';
import { COMPANY_DETAILS } from '@/lib/initial-data';

export default function TopBar() {
  return (
    <div className="bg-[#0D3B5B] text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href={`tel:${COMPANY_DETAILS.phone}`} className="flex items-center gap-1.5 hover:text-[#1FA971] transition-colors">
            <i className="fa fa-phone text-[#1FA971]" />
            <span>{COMPANY_DETAILS.phone}</span>
          </a>
          <a href={`tel:${COMPANY_DETAILS.hotline}`} className="flex items-center gap-1.5 text-[#F5B400] font-semibold hover:underline">
            <i className="fa fa-exclamation-triangle text-[#F5B400]" />
            <span>24/7 Hotline: {COMPANY_DETAILS.hotline}</span>
          </a>
          <div className="flex items-center gap-1.5 text-slate-300">
            <i className="fa fa-clock-o text-slate-400" />
            <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <div className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
            <i className="fa fa-star text-[#F5B400]" />
            <span className="font-bold text-[#F5B400]">5.0</span>
            <span className="text-slate-300 text-[11px]">(Google Reviews)</span>
          </div>
          <a
            href={COMPANY_DETAILS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#1FA971] hover:text-emerald-300 font-medium"
          >
            <i className="fa fa-whatsapp text-sm" />
            <span>Instant WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
