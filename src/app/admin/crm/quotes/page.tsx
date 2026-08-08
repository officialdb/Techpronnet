'use client';

import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Copy, Check, X, FileSpreadsheet, Eye } from 'lucide-react';
import { TableSkeleton } from '@/components/admin/SkeletonLoader';

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [selectedQuote, setSelectedQuote] = useState<any | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      const token = localStorage.getItem('tpn_admin_token');
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      try {
        const res = await fetch(`${API_BASE}/api/v1/admin/quotes`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          // Map to format
          const formattedQuotes = data.map((q: any) => ({
            id: q.id,
            ref: q.reference_code,
            name: q.name || q.company,
            email: q.email,
            phone: q.phone,
            domain: q.domain,
            budget: q.budget_range || 'N/A',
            urgency: q.urgency,
            status: q.status,
            full: q // Keep full raw object for modal
          }));
          setQuotes(formattedQuotes);
        }
      } catch (err) {
        console.error('Failed to load quotes:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuotes();
  }, []);

  const updateQuoteStatus = async (id: number, st: string) => {
    setQuotes(quotes.map(q => q.id === id ? { ...q, status: st } : q));
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    try {
      await fetch(`${API_BASE}/api/v1/admin/quotes/${id}?status=${st}`, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${token}` }
      });
    } catch (err) {
      console.error('Failed to update quote status:', err);
    }
  };

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.stopPropagation(); // Prevent row click
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const CopyButton = ({ text }: { text: string }) => (
    <button
      onClick={(e) => handleCopy(e, text)}
      className="ml-1.5 p-1 rounded hover:bg-slate-200 text-slate-400 hover:text-[#0D3B5B] transition-colors"
      title="Copy to clipboard"
    >
      {copiedText === text ? <Check className="w-3 h-3 text-[#1FA971]" /> : <Copy className="w-3 h-3" />}
    </button>
  );

  return (
    <div className="flex flex-col lg:flex-row bg-[#F6F6F6] min-h-screen text-[#0A1A23]">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 min-w-0 overflow-y-auto">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-extrabold text-[#0D3B5B]">Quote Request Inbox & Estimator</h1>
          <p className="text-xs text-slate-500">Manage incoming interactive quote specifications and send estimates.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm overflow-x-auto">
          {isLoading ? (
            <div className="pt-2"><TableSkeleton rows={6} columns={7} /></div>
          ) : (
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
                  <tr 
                    key={q.id} 
                    className="hover:bg-slate-50 cursor-pointer transition-colors"
                    onClick={() => setSelectedQuote(q.full)}
                  >
                    <td className="py-4 px-4 font-mono font-bold text-[#0D3B5B]">{q.ref}</td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-[#0D3B5B]">{q.name}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5 flex items-center flex-wrap gap-x-2 gap-y-1">
                        <span className="flex items-center">
                          {q.email} <CopyButton text={q.email} />
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                          {q.phone} <CopyButton text={q.phone} />
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 uppercase text-slate-600 font-bold">{q.domain}</td>
                    <td className="py-4 px-4 font-numbers text-[#1FA971] font-bold">{q.budget}</td>
                    <td className="py-4 px-4 text-slate-600">{q.urgency}</td>
                    <td className="py-4 px-4">
                      <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded text-[10px] font-bold">
                        {q.status}
                      </span>
                    </td>
                    <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                      <select
                        value={q.status}
                        onChange={(e) => updateQuoteStatus(q.id, e.target.value)}
                        className="text-xs p-1.5 border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-[#1FA971]"
                      >
                        <option value="PENDING">PENDING</option>
                        <option value="ESTIMATE_SENT">ESTIMATE_SENT</option>
                        <option value="SCHEDULED">SCHEDULED</option>
                        <option value="COMPLETED">COMPLETED</option>
                      </select>
                    </td>
                  </tr>
                ))}
                {quotes.length === 0 && !isLoading && (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-500">
                      No quote requests found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* View Quote Details Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-100 flex justify-between items-center shrink-0">
              <div>
                <h2 className="font-extrabold text-[#0D3B5B] text-base sm:text-lg">Quote Request Details</h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Ref: {selectedQuote.reference_code}</p>
              </div>
              <button onClick={() => setSelectedQuote(null)} className="text-slate-400 hover:text-slate-600 bg-white p-1.5 rounded-full shadow-sm">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-slate-50/70 sm:bg-transparent p-3.5 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100 space-y-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Customer Info</h3>
                  <div className="space-y-2 text-slate-700">
                    <p><span className="font-semibold text-slate-500">Name:</span> <span className="font-bold text-[#0D3B5B]">{selectedQuote.name}</span></p>
                    <p className="flex flex-wrap items-center gap-1 min-w-0 break-all"><span className="font-semibold text-slate-500 mr-1">Email:</span> <span className="font-medium">{selectedQuote.email}</span> <CopyButton text={selectedQuote.email} /></p>
                    <p className="flex flex-wrap items-center gap-1 min-w-0"><span className="font-semibold text-slate-500 mr-1">Phone:</span> <span className="font-medium">{selectedQuote.phone}</span> <CopyButton text={selectedQuote.phone} /></p>
                    {selectedQuote.company && <p><span className="font-semibold text-slate-500">Company:</span> <span className="font-medium">{selectedQuote.company}</span></p>}
                    {selectedQuote.address && <p><span className="font-semibold text-slate-500">Address:</span> <span className="font-medium">{selectedQuote.address}</span></p>}
                  </div>
                </div>
                
                <div className="bg-slate-50/70 sm:bg-transparent p-3.5 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100 space-y-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Project Scope</h3>
                  <div className="space-y-2 text-slate-700">
                    <p><span className="font-semibold text-slate-500">Domain:</span> <span className="uppercase text-[#1FA971] font-bold">{selectedQuote.domain}</span></p>
                    <p><span className="font-semibold text-slate-500">Budget:</span> <span className="font-numbers font-bold text-[#0D3B5B]">{selectedQuote.budget_range || 'Not specified'}</span></p>
                    <p><span className="font-semibold text-slate-500">Urgency:</span> <span className="font-medium">{selectedQuote.urgency}</span></p>
                    <p className="flex items-center gap-2"><span className="font-semibold text-slate-500">Status:</span> 
                      <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold">
                        {selectedQuote.status}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technical Requirements</h3>
                <div className="bg-[#0A1A23] p-3.5 sm:p-4 rounded-xl overflow-x-auto">
                  <pre className="text-[11px] font-mono text-[#1FA971] whitespace-pre-wrap break-all sm:break-normal">
                    {(() => {
                      try {
                        const reqs = JSON.parse(selectedQuote.requirements_json || '{}');
                        return JSON.stringify(reqs, null, 2);
                      } catch {
                        return selectedQuote.requirements_json || 'No technical requirements submitted.';
                      }
                    })()}
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
              <button 
                onClick={() => setSelectedQuote(null)}
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
