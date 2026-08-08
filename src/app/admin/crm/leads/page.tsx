'use client';

import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Users, Filter, Plus, Search, CheckCircle2, Clock, X, Copy, Check, Eye } from 'lucide-react';
import { TableSkeleton } from '@/components/admin/SkeletonLoader';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadSchema, type LeadInput } from '@/lib/validations/lead';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState<any | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const CopyButton = ({ text }: { text: string }) => (
    <button 
      onClick={(e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 2000);
      }}
      className="ml-2 text-slate-400 hover:text-[#0D3B5B] transition-colors"
      title="Copy to clipboard"
    >
      {copiedText === text ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
  
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
    <div className="flex flex-col lg:flex-row bg-[#F6F6F6] min-h-screen text-[#0A1A23]">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 min-w-0 overflow-y-auto">
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
                  <tr key={l.id} className="hover:bg-slate-50 cursor-pointer" onClick={() => setSelectedLead(l)}>
                    <td className="py-4 px-4 font-bold text-[#0D3B5B]">
                      <div>{l.name}</div>
                      <div className="text-[10px] text-slate-400 flex items-center">{l.email} <CopyButton text={l.email} /></div>
                    </td>
                    <td className="py-4 px-4 font-semibold">{l.company || '-'}</td>
                    <td className="py-4 px-4 text-slate-500">{l.source}</td>
                    <td className="py-4 px-4 text-slate-600 max-w-xs truncate">{l.notes}</td>
                    <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        l.status === 'NEW' ? 'bg-blue-100 text-blue-800' :
                        l.status === 'PROPOSAL_SENT' ? 'bg-amber-100 text-amber-800' :
                        'bg-emerald-100 text-[#1FA971]'
                      }`}>
                        {l.status}
                      </span>
                    </td>
                    <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center shrink-0">
              <h2 className="font-extrabold text-[#0D3B5B] text-base sm:text-lg">Add New Lead Manually</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 bg-white p-1 rounded-full shadow-sm">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit(handleAddLead)} className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Full Name *</label>
                <input {...register('name')} type="text" className={`w-full border rounded-lg p-2.5 text-sm outline-none ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#1FA971]'}`} placeholder="e.g. John Doe" />
                {errors.name && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.name.message}</p>}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              <div className="pt-4 flex flex-col sm:flex-row justify-end gap-3">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-700 order-2 sm:order-1">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="bg-[#1FA971] disabled:opacity-50 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow hover:bg-emerald-600 transition-colors order-1 sm:order-2">
                  {isSubmitting ? 'Saving...' : 'Save Lead'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-100 flex justify-between items-center shrink-0">
              <div>
                <h2 className="font-extrabold text-[#0D3B5B] text-base sm:text-lg">Lead Details</h2>
                <p className="text-xs text-slate-500 mt-0.5">Source: {selectedLead.source}</p>
              </div>
              <button onClick={() => setSelectedLead(null)} className="text-slate-400 hover:text-slate-600 bg-white p-1.5 rounded-full shadow-sm">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-slate-50/70 sm:bg-transparent p-3.5 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100 space-y-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Contact Info</h3>
                  <div className="space-y-2 text-slate-700">
                    <p><span className="font-semibold text-slate-500">Name:</span> <span className="font-bold text-[#0D3B5B]">{selectedLead.name}</span></p>
                    <p className="flex flex-wrap items-center gap-1 min-w-0 break-all"><span className="font-semibold text-slate-500 mr-1">Email:</span> <span className="font-medium">{selectedLead.email}</span> <CopyButton text={selectedLead.email} /></p>
                    <p className="flex flex-wrap items-center gap-1 min-w-0"><span className="font-semibold text-slate-500 mr-1">Phone:</span> <span className="font-medium">{selectedLead.phone}</span> <CopyButton text={selectedLead.phone} /></p>
                    {selectedLead.company && <p><span className="font-semibold text-slate-500">Company:</span> <span className="font-medium">{selectedLead.company}</span></p>}
                  </div>
                </div>
                
                <div className="bg-slate-50/70 sm:bg-transparent p-3.5 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100 space-y-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Lead Status</h3>
                  <div className="space-y-2 text-slate-700">
                    <p className="flex items-center gap-2"><span className="font-semibold text-slate-500">Status:</span> 
                      <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold">
                        {selectedLead.status}
                      </span>
                    </p>
                    <p><span className="font-semibold text-slate-500">Created At:</span> <span className="font-medium">{new Date(selectedLead.created_at).toLocaleDateString()}</span></p>
                  </div>
                </div>
              </div>

              {selectedLead.notes && (
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Notes</h3>
                  <div className="bg-[#0A1A23] p-3.5 sm:p-4 rounded-xl overflow-x-auto text-slate-300 whitespace-pre-wrap break-all text-xs font-mono">
                    {selectedLead.notes}
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
              <button 
                onClick={() => setSelectedLead(null)}
                className="w-full sm:w-auto bg-[#0D3B5B] hover:bg-[#124b73] text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
