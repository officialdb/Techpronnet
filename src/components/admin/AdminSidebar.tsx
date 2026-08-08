'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, LogOut } from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: 'fa-tachometer' },
    { label: 'CRM Leads', href: '/admin/crm/leads', icon: 'fa-users', badge: 'Live' },
    { label: 'Quote Requests', href: '/admin/crm/quotes', icon: 'fa-table', badge: 'New' },
    { label: 'CMS Content', href: '/admin/cms', icon: 'fa-file-text' },
    { label: 'Services Manager', href: '/admin/services', icon: 'fa-wrench' },
    { label: 'Portfolio Projects', href: '/admin/portfolio', icon: 'fa-folder-open' },
    { label: 'Blog Posts', href: '/admin/blog', icon: 'fa-pencil-square-o', badge: 'New' },
    { label: 'Google Reviews', href: '/admin/reviews', icon: 'fa-star', badge: '5.0' },
    { label: 'SEO & Metadata', href: '/admin/seo', icon: 'fa-search' },
    { label: 'Audit & Settings', href: '/admin/settings', icon: 'fa-cog' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('tpn_admin_token');
    document.cookie = 'tpn_admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/admin/login';
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full justify-between p-4 text-slate-300">
      <div className="space-y-6">
        {/* Brand Header */}
        <Link href="/" className="flex items-center justify-between px-2 py-2 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0F6A74] p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-[#0D3B5B] rounded-[9px] flex items-center justify-center">
                <span className="font-extrabold text-sm text-[#1FA971]">TPN</span>
              </div>
            </div>
            <div>
              <div className="font-extrabold text-sm text-white tracking-tight">TECHPRONNET</div>
              <div className="text-[10px] text-[#1FA971] font-semibold tracking-wider uppercase">Admin System</div>
            </div>
          </div>

          {/* Close button for mobile drawer */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </Link>

        {/* Navigation items */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#1FA971] text-white shadow-md'
                    : 'text-slate-300 hover:bg-[#0D3B5B] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <i className={`fa ${item.icon} w-4 text-center`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${isActive ? 'bg-white text-[#1FA971]' : 'bg-[#0D3B5B] text-[#F5B400]'}`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer User Info & Exit */}
      <div className="pt-4 border-t border-white/10 space-y-3">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-[#0D3B5B] text-[#1FA971] font-bold text-xs flex items-center justify-center border border-white/10">
            AD
          </div>
          <div className="text-xs">
            <div className="font-bold text-white">System Admin</div>
            <div className="text-[10px] text-slate-400 truncate max-w-[140px]">admin@techpronnet.com</div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-[#0D3B5B] hover:bg-red-600/30 hover:text-red-300 text-slate-300 text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/10"
        >
          <LogOut className="w-4 h-4" />
          <span>Exit Admin Portal</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* ── Mobile Topbar ───────────────────────────────────────── */}
      <header className="lg:hidden sticky top-0 z-40 bg-[#0A1A23] text-white px-4 py-3 border-b border-white/10 flex items-center justify-between shadow-md">
        <Link href="/admin/dashboard" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#0F6A74] p-0.5 flex items-center justify-center">
            <div className="w-full h-full bg-[#0D3B5B] rounded-[7px] flex items-center justify-center">
              <span className="font-extrabold text-xs text-[#1FA971]">TPN</span>
            </div>
          </div>
          <div>
            <span className="font-extrabold text-xs tracking-tight text-white block">TECHPRONNET</span>
            <span className="text-[9px] text-[#1FA971] font-semibold uppercase tracking-wider block">Admin Panel</span>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-xl bg-[#0D3B5B] text-slate-200 hover:text-white border border-white/10 focus:outline-none transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* ── Mobile Drawer Overlay ────────────────────────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ── Mobile Slide-out Drawer ──────────────────────────────── */}
      <aside
        className={`fixed top-0 bottom-0 left-0 w-72 bg-[#0A1A23] z-50 lg:hidden transition-transform duration-300 ease-in-out shadow-2xl border-r border-white/10 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* ── Desktop Sidebar ──────────────────────────────────────── */}
      <aside className="hidden lg:flex w-64 bg-[#0A1A23] h-screen sticky top-0 border-r border-white/10 shrink-0 overflow-y-auto">
        <SidebarContent />
      </aside>
    </>
  );
}

