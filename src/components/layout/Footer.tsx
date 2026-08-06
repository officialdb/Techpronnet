'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_DETAILS } from '@/lib/initial-data';

export default function Footer() {
  return (
    <footer className="bg-[#0D3B5B] text-slate-200 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F6A74] p-0.5 flex items-center justify-center border border-white/10">
                <div className="w-full h-full bg-[#0D3B5B] rounded-md flex items-center justify-center">
                  <span className="font-extrabold text-base text-[#1FA971]">TPN</span>
                </div>
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">TECHPRONNET</span>
                <span className="block text-[10px] text-[#1FA971] font-semibold tracking-widest uppercase">Technologies</span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              {COMPANY_DETAILS.mission}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <i className="fa fa-star text-[#F5B400]" />
                <span className="font-bold text-[#F5B400] text-sm">5.0 / 5.0</span>
                <span className="text-xs text-slate-300 ml-1">Google Rating</span>
              </div>

              <a
                href={COMPANY_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1FA971] hover:bg-emerald-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 border border-[#1FA971]"
              >
                <i className="fa fa-whatsapp text-sm" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-white/10 pb-2">
              Our Solutions
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/services#software" className="hover:text-[#1FA971] transition-colors flex items-center gap-1">
                  <span>Software Development</span>
                </Link>
              </li>
              <li>
                <Link href="/services#security" className="hover:text-[#1FA971] transition-colors flex items-center gap-1">
                  <span>CCTV &amp; Security Systems</span>
                </Link>
              </li>
              <li>
                <Link href="/services#solar" className="hover:text-[#1FA971] transition-colors flex items-center gap-1">
                  <span>Solar &amp; Inverter Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/services#networking" className="hover:text-[#1FA971] transition-colors flex items-center gap-1">
                  <span>Enterprise Networking</span>
                </Link>
              </li>
              <li>
                <Link href="/services#it-support" className="hover:text-[#1FA971] transition-colors flex items-center gap-1">
                  <span>Managed IT Support</span>
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-[#F5B400] font-semibold hover:underline flex items-center gap-1 pt-1">
                  <span>Interactive Quote Engine</span>
                  <i className="fa fa-[#F5B400] fa-external-link" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-white/10 pb-2">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-[#1FA971] transition-colors">About Techpronnet</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#1FA971] transition-colors">Portfolio &amp; Projects</Link></li>
              <li><Link href="/reviews" className="hover:text-[#1FA971] transition-colors">Customer Reviews</Link></li>
              <li><Link href="/blog" className="hover:text-[#1FA971] transition-colors">Tech Blog &amp; Insights</Link></li>
              <li><Link href="/careers" className="hover:text-[#1FA971] transition-colors">Careers &amp; Hiring</Link></li>
              <li><Link href="/faqs" className="hover:text-[#1FA971] transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-white/10 pb-2">
              Contact &amp; Support
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <i className="fa fa-map-marker text-[#1FA971] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa fa-phone text-[#1FA971] shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-white">{COMPANY_DETAILS.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa fa-envelope text-[#1FA971] shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white">{COMPANY_DETAILS.email}</a>
              </div>
              <div className="pt-2 text-emerald-400 font-semibold flex items-center gap-1.5">
                <i className="fa fa-shield text-[#F5B400]" />
                <span>Certified Engineers &amp; SLAs</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">Techpronnet Technologies</span>. All Rights Reserved. Tagline: <i>{COMPANY_DETAILS.tagline}</i>.
          </div>
          
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-200">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
