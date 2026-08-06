'use client';

import React, { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { INITIAL_SERVICES, ServiceItem } from '@/lib/initial-data';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function AdminServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>(INITIAL_SERVICES);

  return (
    <div className="flex bg-[#F6F6F6] min-h-screen text-[#0A1A23]">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-2xl font-extrabold text-[#0D3B5B]">Services & Solutions Management</h1>
            <p className="text-xs text-slate-500">Edit subservices, features list, starting prices, and icons across the 5 solution domains.</p>
          </div>
          <button className="bg-[#1FA971] text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Service Domain
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D3B5B] text-white flex items-center justify-center">
                    <i className={`fa ${s.icon} text-lg`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#0D3B5B]">{s.name}</h3>
                    <span className="text-[10px] uppercase font-bold text-[#1FA971] bg-emerald-50 px-2 py-0.5 rounded">{s.domain}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600"><Edit2 className="w-4 h-4" /></button>
                  <button className="p-2 hover:bg-red-50 rounded-lg text-red-600"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
              <p className="text-xs text-slate-600">{s.tagline}</p>
              <div className="text-xs font-numbers font-bold text-[#0D3B5B]">Starting: {s.pricing_starting}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
