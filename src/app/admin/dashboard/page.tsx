'use client';

import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Users, FileSpreadsheet, Star, ShieldCheck, Wrench, FolderGit2, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';
import { CardSkeleton, TableSkeleton } from '@/components/admin/SkeletonLoader';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<any>({
    total_leads: 0,
    new_leads: 0,
    total_quotes: 0,
    pending_quotes: 0,
    google_rating: 5.0,
    customer_satisfaction: '99.8%'
  });

  const [recentQuotes, setRecentQuotes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem('tpn_admin_token');
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      
      try {
        const [statsRes, quotesRes] = await Promise.all([
          fetch(`${API_BASE}/api/v1/admin/stats`, {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch(`${API_BASE}/api/v1/admin/quotes`, {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        ]);

        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(statsData);
        }
        
        if (quotesRes.ok) {
          const quotesData = await quotesRes.json();
          // Map to match the frontend structure and limit to top 5
          const formattedQuotes = quotesData.slice(0, 5).map((q: any) => ({
            ref: q.reference_code,
            name: q.name || q.company,
            domain: q.domain,
            budget: q.budget_range || 'N/A',
            status: q.status
          }));
          setRecentQuotes(formattedQuotes);
        }
      } catch (err) {
        console.error('Failed to load dashboard data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="flex bg-[#F6F6F6] min-h-screen text-[#0A1A23]">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-[#0D3B5B]">
              Techpronnet Business Operating System
            </h1>
            <p className="text-xs text-slate-500">
              Real-time lead generation pipeline, CMS content, quote engine, and customer relationship analytics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs bg-emerald-100 text-[#1FA971] px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#1FA971] animate-ping" />
              Python FastAPI Backend Connected
            </span>
            <Link
              href="/admin/crm/quotes"
              className="bg-[#0D3B5B] hover:bg-[#124b73] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
            >
              Manage Quotes
            </Link>
          </div>
        </div>

        {/* Stats KPI Cards */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-bold uppercase">CRM Active Leads</span>
                <div className="p-2 bg-[#0D3B5B] text-white rounded-lg"><Users className="w-4 h-4" /></div>
              </div>
              <div className="font-numbers text-3xl font-extrabold text-[#0D3B5B]">{stats.total_leads}</div>
              <div className="text-xs text-[#1FA971] font-semibold">{stats.new_leads} New Leads Awaiting Follow-up</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-bold uppercase">Quote Requests</span>
                <div className="p-2 bg-[#0F6A74] text-white rounded-lg"><FileSpreadsheet className="w-4 h-4" /></div>
              </div>
              <div className="font-numbers text-3xl font-extrabold text-[#0D3B5B]">{stats.total_quotes}</div>
              <div className="text-xs text-amber-600 font-semibold">{stats.pending_quotes} Proposals Pending Review</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-bold uppercase">Google Rating</span>
                <div className="p-2 bg-[#F5B400] text-[#0A1A23] rounded-lg"><Star className="w-4 h-4 fill-current" /></div>
              </div>
              <div className="font-numbers text-3xl font-extrabold text-[#0D3B5B]">5.0 ★</div>
              <div className="text-xs text-slate-500">132+ Synchronized Reviews</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-bold uppercase">CSAT Performance</span>
                <div className="p-2 bg-[#1FA971] text-white rounded-lg"><ShieldCheck className="w-4 h-4" /></div>
              </div>
              <div className="font-numbers text-3xl font-extrabold text-[#0D3B5B]">99.8%</div>
              <div className="text-xs text-[#1FA971] font-semibold">Enterprise SLA Rating</div>
            </div>
          </div>
        )}

        {/* Middle Section: Recent Quote Inbox & Quick CMS Shortcuts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Quotes Inbox Table */}
          <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="font-bold text-lg text-[#0D3B5B]">Recent Quote Submissions</h3>
              <Link href="/admin/crm/quotes" className="text-xs text-[#1FA971] font-bold hover:underline">
                View All Inbox
              </Link>
            </div>

            {isLoading ? (
              <div className="pt-4"><TableSkeleton rows={4} columns={5} /></div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 uppercase">
                      <th className="py-2.5 px-3">Ref Code</th>
                      <th className="py-2.5 px-3">Client</th>
                      <th className="py-2.5 px-3">Domain</th>
                      <th className="py-2.5 px-3">Budget</th>
                      <th className="py-2.5 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {recentQuotes.map((q, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="py-3 px-3 font-mono font-bold text-[#0D3B5B]">{q.ref}</td>
                        <td className="py-3 px-3 font-semibold">{q.name}</td>
                        <td className="py-3 px-3 text-slate-600">{q.domain}</td>
                        <td className="py-3 px-3 font-numbers text-[#1FA971] font-bold">{q.budget}</td>
                        <td className="py-3 px-3">
                          <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px]">
                            {q.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {recentQuotes.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-slate-500">
                          No recent quotes.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* CMS & Content Management Shortcuts */}
          <div className="lg:col-span-4 bg-[#0A1A23] text-white p-6 rounded-3xl border border-white/10 shadow-xl space-y-4">
            <h3 className="font-bold text-base text-white border-b border-white/10 pb-3">
              CMS Visual Editor Shortcuts
            </h3>
            
            <div className="space-y-3">
              <Link
                href="/admin/cms"
                className="p-3 bg-[#0D3B5B] hover:bg-[#124b73] rounded-xl flex items-center justify-between transition-colors block"
              >
                <span className="text-xs font-semibold text-white">Edit Homepage Hero & Slogan</span>
                <ArrowUpRight className="w-4 h-4 text-[#F5B400]" />
              </Link>

              <Link
                href="/admin/services"
                className="p-3 bg-[#0D3B5B] hover:bg-[#124b73] rounded-xl flex items-center justify-between transition-colors block"
              >
                <span className="text-xs font-semibold text-white">Update 5 Core Services & Pricing</span>
                <ArrowUpRight className="w-4 h-4 text-[#1FA971]" />
              </Link>

              <Link
                href="/admin/portfolio"
                className="p-3 bg-[#0D3B5B] hover:bg-[#124b73] rounded-xl flex items-center justify-between transition-colors block"
              >
                <span className="text-xs font-semibold text-white">Add Portfolio Case Study</span>
                <ArrowUpRight className="w-4 h-4 text-[#F5B400]" />
              </Link>

              <Link
                href="/admin/reviews"
                className="p-3 bg-[#0D3B5B] hover:bg-[#124b73] rounded-xl flex items-center justify-between transition-colors block"
              >
                <span className="text-xs font-semibold text-white">Sync Google Business Reviews</span>
                <ArrowUpRight className="w-4 h-4 text-[#1FA971]" />
              </Link>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
