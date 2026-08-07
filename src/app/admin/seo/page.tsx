'use client';

import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Search, Save, CheckCircle2, Globe, FileCode } from 'lucide-react';

export default function AdminSEOPage() {
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDesc, setMetaDesc] = useState('');
  const [savedAlert, setSavedAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSEO = async () => {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      try {
        const res = await fetch(`${API_BASE}/api/v1/cms/global_seo`);
        if (res.ok) {
          const data = await res.json();
          if (data.value) {
            const parsed = JSON.parse(data.value);
            setMetaTitle(parsed.metaTitle || '');
            setMetaDesc(parsed.metaDesc || '');
          }
        }
      } catch (err) {
        console.error('Failed to load SEO data:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSEO();
  }, []);

  const handleSaveSEO = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    try {
      const payload = JSON.stringify({ metaTitle, metaDesc });
      const res = await fetch(`${API_BASE}/api/v1/admin/cms/global_seo`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: payload })
      });
      if (res.ok) {
        setSavedAlert(true);
        setTimeout(() => setSavedAlert(false), 2500);
      }
    } catch (err) {
      console.error('Failed to save SEO data:', err);
    }
  };

  return (
    <div className="flex bg-[#F6F6F6] min-h-screen text-[#0A1A23]">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-extrabold text-[#0D3B5B]">Site-wide SEO & Schema.org JSON-LD Manager</h1>
          <p className="text-xs text-slate-500">Configure global Search Engine Meta tags, OpenGraph previews, Sitemap, and LocalBusiness schema.</p>
        </div>

        {savedAlert && (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-2xl flex items-center gap-2 text-xs font-bold">
            <CheckCircle2 className="w-5 h-5 text-[#1FA971]" />
            <span>SEO Metadata and Schema.org configuration updated!</span>
          </div>
        )}

        <form onSubmit={handleSaveSEO} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 max-w-3xl">
          <h3 className="text-lg font-bold text-[#0D3B5B]">Global Default Meta Tags</h3>

          <div>
            <label className="text-xs font-bold block text-slate-700 mb-1">Meta Title Template</label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className="w-full text-xs p-3 border border-slate-300 rounded-xl"
            />
          </div>

          <div>
            <label className="text-xs font-bold block text-slate-700 mb-1">Meta Description</label>
            <textarea
              rows={3}
              value={metaDesc}
              onChange={(e) => setMetaDesc(e.target.value)}
              className="w-full text-xs p-3 border border-slate-300 rounded-xl"
            />
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <div className="font-bold text-xs text-[#0D3B5B] flex items-center gap-2">
              <FileCode className="w-4 h-4 text-[#1FA971]" />
              <span>Generated Structured Data (Schema.org JSON-LD)</span>
            </div>
            <pre className="text-[10px] bg-[#0A1A23] text-emerald-400 p-3 rounded-xl overflow-x-auto font-mono">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Techpronnet Technologies",
  "image": "https://techpronnet.com/images/logo.png",
  "telephone": "+2348031234567",
  "email": "info@techpronnet.com",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "132"
  }
}`}
            </pre>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="bg-[#1FA971] text-white font-bold text-xs px-6 py-3 rounded-xl shadow flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Update SEO Config</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
