'use client';

import React, { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Users, Filter, Plus, Search, CheckCircle2, Clock } from 'lucide-react';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState([
    { id: 1, name: 'David Alabi', email: 'david.a@horizoncorp.com', phone: '+2348029988776', company: 'Horizon Corp Ltd', source: 'Website Hero CTA', status: 'NEW', notes: 'Interested in 10kW Solar & CCTV setup' },
    { id: 2, name: 'Evelyn Williams', email: 'evelyn@primehealth.org', phone: '+2348051122334', company: 'Prime Health Clinic', source: 'Quote Wizard', status: 'PROPOSAL_SENT', notes: 'Custom clinic portal software' },
    { id: 3, name: 'Chief Marcus Nwosu', email: 'marcus@estate.com', phone: '+2348076655443', company: 'Estate Gates Management', source: 'Direct Call', status: 'WON', notes: '64 Camera CCTV system installed' }
  ]);

  const updateStatus = (id: number, newStatus: string) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
  };

  return (
    <div className="flex bg-[#F6F6F6] min-h-screen text-[#0A1A23]">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-2xl font-extrabold text-[#0D3B5B]">CRM Lead Pipeline & Pipeline Status</h1>
            <p className="text-xs text-slate-500">Track incoming customer inquiries, set statuses, and store customer notes.</p>
          </div>
          <button className="bg-[#1FA971] text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Lead
          </button>
        </div>

        {/* Lead Table */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase">
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Company</th>
                <th className="py-3 px-4">Source</th>
                <th className="py-3 px-4">Notes</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.map((l) => (
                <tr key={l.id} className="hover:bg-slate-50">
                  <td className="py-4 px-4 font-bold text-[#0D3B5B]">
                    <div>{l.name}</div>
                    <div className="text-[10px] text-slate-400">{l.email} • {l.phone}</div>
                  </td>
                  <td className="py-4 px-4 font-semibold">{l.company}</td>
                  <td className="py-4 px-4 text-slate-500">{l.source}</td>
                  <td className="py-4 px-4 text-slate-600 max-w-xs">{l.notes}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      l.status === 'NEW' ? 'bg-blue-100 text-blue-800' :
                      l.status === 'PROPOSAL_SENT' ? 'bg-amber-100 text-amber-800' :
                      'bg-emerald-100 text-[#1FA971]'
                    }`}>
                      {l.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <select
                      value={l.status}
                      onChange={(e) => updateStatus(l.id, e.target.value)}
                      className="text-xs p-1.5 border border-slate-300 rounded-lg bg-white"
                    >
                      <option value="NEW">Mark NEW</option>
                      <option value="CONTACTED">Mark CONTACTED</option>
                      <option value="PROPOSAL_SENT">Mark PROPOSAL_SENT</option>
                      <option value="WON">Mark WON</option>
                      <option value="LOST">Mark LOST</option>
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
