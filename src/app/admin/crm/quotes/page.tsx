'use client';

import React, { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { FileSpreadsheet, Eye, CheckCircle2, XCircle } from 'lucide-react';

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState([
    { id: 1, ref: 'TPN-20260806-9281', name: 'David Alabi', email: 'david@horizon.com', phone: '+2348029988776', domain: 'solar', budget: '$15,000+', urgency: 'Immediate', status: 'PENDING' },
    { id: 2, ref: 'TPN-20260806-4410', name: 'Sarah Jenkins', email: 'sarah@logistics.com', phone: '+2348051122334', domain: 'software', budget: '$5,000 - $15,000', urgency: '1-2 Weeks', status: 'ESTIMATE_SENT' }
  ]);

  const updateQuoteStatus = (id: number, st: string) => {
    setQuotes(quotes.map(q => q.id === id ? { ...q, status: st } : q));
  };

  return (
    <div className="flex bg-[#F6F6F6] min-h-screen text-[#0A1A23]">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-extrabold text-[#0D3B5B]">Quote Request Inbox & Estimator</h1>
          <p className="text-xs text-slate-500">Manage incoming interactive quote specifications and send estimates.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase">
                <th className="py-3 px-4">Ref Code</th>
                <th className="py-3 px-4">Client</th>
                <th className="py-3 px-4">Domain</th>
                <th className="py-3 px-4">Budget Range</th>
                <th className="py-3 px-4">Urgency</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {quotes.map((q) => (
                <tr key={q.id} className="hover:bg-slate-50">
                  <td className="py-4 px-4 font-mono font-bold text-[#0D3B5B]">{q.ref}</td>
                  <td className="py-4 px-4 font-bold">
                    <div>{q.name}</div>
                    <div className="text-[10px] text-slate-400">{q.email} • {q.phone}</div>
                  </td>
                  <td className="py-4 px-4 uppercase text-slate-600 font-bold">{q.domain}</td>
                  <td className="py-4 px-4 font-numbers text-[#1FA971] font-bold">{q.budget}</td>
                  <td className="py-4 px-4">{q.urgency}</td>
                  <td className="py-4 px-4">
                    <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded text-[10px] font-bold">
                      {q.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <select
                      value={q.status}
                      onChange={(e) => updateQuoteStatus(q.id, e.target.value)}
                      className="text-xs p-1.5 border border-slate-300 rounded-lg bg-white"
                    >
                      <option value="PENDING">PENDING</option>
                      <option value="ESTIMATE_SENT">ESTIMATE_SENT</option>
                      <option value="SCHEDULED">SCHEDULED</option>
                      <option value="COMPLETED">COMPLETED</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
