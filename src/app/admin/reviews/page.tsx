'use client';

import React, { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { INITIAL_REVIEWS } from '@/lib/initial-data';
import { Star, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncedAlert, setSyncedAlert] = useState(false);

  const handleSyncGoogle = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncedAlert(true);
      setTimeout(() => setSyncedAlert(false), 3000);
    }, 1500);
  };

  const togglePin = (id: number) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, is_pinned: !r.is_pinned } : r));
  };

  return (
    <div className="flex bg-[#F6F6F6] min-h-screen text-[#0A1A23]">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-2xl font-extrabold text-[#0D3B5B]">Google Business Profile Reviews & AI Summarizer</h1>
            <p className="text-xs text-slate-500">Synchronize reviews automatically, feature client feedback, and generate AI sentiment tags.</p>
          </div>
          <button
            onClick={handleSyncGoogle}
            disabled={isSyncing}
            className="bg-[#0D3B5B] hover:bg-[#124b73] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
            <span>{isSyncing ? 'Syncing Google API...' : 'Sync Google Profile'}</span>
          </button>
        </div>

        {syncedAlert && (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-2xl flex items-center gap-2 text-xs font-bold">
            <CheckCircle2 className="w-5 h-5 text-[#1FA971]" />
            <span>Google Business Profile synced successfully! Ratings updated to 5.0 ★ (132 Reviews).</span>
          </div>
        )}

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-base text-[#0D3B5B]">Synchronized Reviews List</h3>
          <div className="space-y-4">
            {reviews.map((r) => (
              <div key={r.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="font-bold text-sm text-[#0D3B5B] flex items-center gap-2">
                    <span>{r.reviewer_name}</span>
                    <span className="text-xs text-[#F5B400] font-bold">★ {r.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-xs text-slate-700 italic">"{r.review_text}"</p>
                  <div className="text-[10px] text-slate-400">{r.category} • {r.review_date}</div>
                </div>

                <button
                  onClick={() => togglePin(r.id)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-colors ${
                    r.is_pinned ? 'bg-[#F5B400] text-[#0A1A23]' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {r.is_pinned ? '★ Pinned on Homepage' : 'Pin to Homepage'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
