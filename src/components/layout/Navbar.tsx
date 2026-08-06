'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const servicesList = [
    { title: 'Software Development', slug: 'software', icon: 'fa-code', desc: 'Web, Mobile, SaaS & AI Automation' },
    { title: 'Security Solutions', slug: 'security', icon: 'fa-shield', desc: 'CCTV, Smart Home & Access Control' },
    { title: 'Solar & Electrical', slug: 'solar', icon: 'fa-sun-o', desc: 'Inverters, Panels & Lithium Backup' },
    { title: 'Networking Infrastructure', slug: 'networking', icon: 'fa-sitemap', desc: 'Wi-Fi Mesh, Cabling & Server Racks' },
    { title: 'Managed IT Support', slug: 'it-support', icon: 'fa-wrench', desc: 'Remote Helpdesk & Repairs' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0D3B5B] text-white border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#0F6A74] p-0.5 flex items-center justify-center border border-white/10 group-hover:bg-[#1FA971] transition-colors">
              <div className="w-full h-full bg-[#0D3B5B] rounded-md flex items-center justify-center">
                <span className="font-extrabold text-base tracking-tighter text-[#1FA971]">TPN</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1">
                TECHPRONNET
                <span className="w-2 h-2 bg-[#F5B400] inline-block"></span>
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <Link href="/" className={`hover:text-[#1FA971] transition-colors ${pathname === '/' ? 'text-[#1FA971] font-semibold' : 'text-slate-200'}`}>
              Home
            </Link>
            
            <Link href="/about" className={`hover:text-[#1FA971] transition-colors ${pathname === '/about' ? 'text-[#1FA971] font-semibold' : 'text-slate-200'}`}>
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 hover:text-[#1FA971] transition-colors py-2 ${pathname.startsWith('/services') ? 'text-[#1FA971] font-semibold' : 'text-slate-200'}`}
              >
                <span>Services</span>
                <i className={`fa fa-chevron-down transition-transform ${servicesOpen ? 'fa-rotate-180 text-[#1FA971]' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#0D3B5B] rounded-xl shadow-2xl border border-white/10 p-3 grid gap-2 z-50">
                  <div className="px-3 py-1.5 border-b border-white/10 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Our 5 Core Domains
                  </div>
                  {servicesList.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services#${item.slug}`}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-[#0F6A74] text-[#1FA971] group-hover:bg-[#1FA971] group-hover:text-white transition-colors">
                        <i className={`fa ${item.icon}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-white group-hover:text-[#1FA971]">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-400 leading-tight">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#F5B400] hover:underline pt-2 border-t border-white/10"
                  >
                    <span>View All Services Breakdown</span>
                    <i className="fa fa-arrow-right" />
                  </Link>
                </div>
              )}
            </div>

            <Link href="/portfolio" className={`hover:text-[#1FA971] transition-colors ${pathname === '/portfolio' ? 'text-[#1FA971] font-semibold' : 'text-slate-200'}`}>
              Portfolio
            </Link>

            <Link href="/reviews" className={`hover:text-[#1FA971] transition-colors ${pathname === '/reviews' ? 'text-[#1FA971] font-semibold' : 'text-slate-200'}`}>
              Reviews
            </Link>

            <Link href="/blog" className={`hover:text-[#1FA971] transition-colors ${pathname === '/blog' ? 'text-[#1FA971] font-semibold' : 'text-slate-200'}`}>
              Blog
            </Link>

            <Link href="/contact" className={`hover:text-[#1FA971] transition-colors ${pathname === '/contact' ? 'text-[#1FA971] font-semibold' : 'text-slate-200'}`}>
              Contact
            </Link>
          </nav>

          {/* Right Action CTA Button (Admin Portal hidden from public nav) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/quote"
              className="bg-[#1FA971] hover:bg-emerald-600 text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-md transition-colors flex items-center gap-2"
            >
              <span>Get a Quote</span>
              <i className="fa fa-arrow-right" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <Link
              href="/quote"
              className="bg-[#1FA971] text-white text-xs font-semibold px-3 py-2 rounded-lg"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-slate-200 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <i className="fa fa-times text-2xl" />
                : <i className="fa fa-bars text-2xl" />
              }
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0D3B5B] border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-slate-200 hover:text-[#1FA971] font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-slate-200 hover:text-[#1FA971] font-medium"
          >
            About Us
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-[#1FA971] font-medium"
          >
            All Services &amp; Solutions
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-slate-200 hover:text-[#1FA971] font-medium"
          >
            Portfolio
          </Link>
          <Link
            href="/reviews"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-slate-200 hover:text-[#1FA971] font-medium"
          >
            Google Reviews (5.0 ★)
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-slate-200 hover:text-[#1FA971] font-medium"
          >
            Tech Insights Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-slate-200 hover:text-[#1FA971] font-medium"
          >
            Contact &amp; Hotline
          </Link>
        </div>
      )}
    </header>
  );
}
