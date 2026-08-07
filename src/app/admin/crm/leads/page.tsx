'use client';

import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Users, Filter, Plus, Search, CheckCircle2, Clock, X } from 'lucide-react';
import { TableSkeleton } from '@/components/admin/SkeletonLoader';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadSchema, type LeadInput } from '@/lib/validations/lead';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      source: 'Manual Entry',
      notes: ''
    }
  });

  const fetchLeads = async () => {
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    
    try {
      const res = await fetch(`${API_BASE}/api/v1/admin/leads`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      }
    } catch (err) {
      console.error('Failed to load leads:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateStatus = async (id: number, newStatus: string) => {
    // Optimistic UI update
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
    
    // Update backend
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    try {
      await fetch(`${API_BASE}/api/v1/admin/leads/${id}?status=${newStatus}`, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${token}` }
      });
    } catch (err) {
      console.error('Failed to update lead status:', err);
    }
  };

  const handleAddLead = async (data: LeadInput) => {
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    
    try {
      const res = await fetch(`${API_BASE}/api/v1/admin/leads`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setShowModal(false);
        reset();
        fetchLeads(); // Refresh the list
      }
    } catch (err) {
      console.error('Failed to add lead:', err);
    }
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
          <button 
            onClick={() => setShowModal(true)}
            className="bg-[#1FA971] hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Lead
          </button>
        </div>

        {/* Lead Table */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm overflow-x-auto">
          {isLoading ? (
            <div className="pt-2"><TableSkeleton rows={6} columns={6} /></div>
          ) : leads.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <p>No leads found in the pipeline.</p>
            </div>
          ) : (
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
                    <td className="py-4 px-4 font-semibold">{l.company || '-'}</td>
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
                        className="text-xs p-1.5 border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-[#1FA971]"
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
          )}
        </div>
      </main>

      {/* Add Lead Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
              <h2 className="font-extrabold text-[#0D3B5B]">Add New Lead manually</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit(handleAddLead)} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Full Name *</label>
                <input {...register('name')} type="text" className={`w-full border rounded-lg p-2.5 text-sm outline-none ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#1FA971]'}`} placeholder="e.g. John Doe" />
                {errors.name && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.name.message}</p>}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Email *</label>
                  <input {...register('email')} type="email" className={`w-full border rounded-lg p-2.5 text-sm outline-none ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#1FA971]'}`} placeholder="john@company.com" />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Phone *</label>
                  <input {...register('phone')} type="tel" className={`w-full border rounded-lg p-2.5 text-sm outline-none ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#1FA971]'}`} placeholder="+234..." />
                  {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.phone.message}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Company (Optional)</label>
                <input {...register('company')} type="text" className={`w-full border rounded-lg p-2.5 text-sm outline-none ${errors.company ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#1FA971]'}`} placeholder="Company Name" />
                {errors.company && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.company.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Notes</label>
                <textarea {...register('notes')} rows={3} className={`w-full border rounded-lg p-2.5 text-sm outline-none ${errors.notes ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#1FA971]'}`} placeholder="Initial requirements or context..."></textarea>
                {errors.notes && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.notes.message}</p>}
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-700">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="bg-[#1FA971] disabled:opacity-50 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow hover:bg-emerald-600 transition-colors">
                  {isSubmitting ? 'Saving...' : 'Save Lead'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
