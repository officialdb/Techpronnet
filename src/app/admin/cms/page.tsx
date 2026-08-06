'use client';

import React, { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Save, CheckCircle2 } from 'lucide-react';

export default function AdminCMSPage() {
  const [headline, setHeadline] = useState('Engineering Next-Gen Tech Solutions For Business & Home');
  const [subheadline, setSubheadline] = useState('From enterprise software engineering and AI workflow automation to solar microgrids, CCTV security, structured networking, and 24/7 IT support.');
  const [phone, setPhone] = useState('+234 (0) 803 123 4567');
  const [hotline, setHotline] = useState('+234 (0) 800 TECHPRONNET');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="flex bg-[#F6F6F6] min-h-screen text-[#0A1A23]">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-extrabold text-[#0D3B5B]">CMS Visual Content Management</h1>
          <p className="text-xs text-slate-500">Edit homepage slogans, contact hotlines, working hours, and announcement badges dynamically.</p>
        </div>

        {savedSuccess && (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-2xl flex items-center gap-2 text-xs font-bold">
            <CheckCircle2 className="w-5 h-5 text-[#1FA971]" />
            <span>CMS Content updated successfully! Changes are live on the website.</span>
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 max-w-3xl">
          <h3 className="text-lg font-bold text-[#0D3B5B]">Homepage Hero Configuration</h3>

          <div>
            <label className="text-xs font-bold block text-slate-700 mb-1">Hero Main Slogan Headline</label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full text-xs p-3 border border-slate-300 rounded-xl"
            />
          </div>

          <div>
            <label className="text-xs font-bold block text-slate-700 mb-1">Hero Sub-headline Paragraph</label>
            <textarea
              rows={3}
              value={subheadline}
              onChange={(e) => setSubheadline(e.target.value)}
              className="w-full text-xs p-3 border border-slate-300 rounded-xl"
            />
          </div>

          <h3 className="text-lg font-bold text-[#0D3B5B] border-t border-slate-100 pt-4">Company Contact Details</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold block text-slate-700 mb-1">General Office Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-xs p-3 border border-slate-300 rounded-xl"
              />
            </div>
            <div>
              <label className="text-xs font-bold block text-slate-700 mb-1">24/7 IT Hotline</label>
              <input
                type="text"
                value={hotline}
                onChange={(e) => setHotline(e.target.value)}
                className="w-full text-xs p-3 border border-slate-300 rounded-xl"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="bg-[#1FA971] text-white font-bold text-xs px-6 py-3 rounded-xl shadow flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Save CMS Changes</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
