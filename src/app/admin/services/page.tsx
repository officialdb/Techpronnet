'use client';

import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { ServiceItem } from '@/lib/initial-data';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function AdminServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  const [formData, setFormData] = useState({
    domain: 'software', name: '', slug: '', tagline: '',
    description: '', icon: 'fa-cog', features_json: '[]',
    pricing_starting: '$0', is_popular: false, order_index: 0
  });

  const fetchServices = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    try {
      const res = await fetch(`${API_BASE}/api/v1/admin/services`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setServices(data);
      }
    } catch (err) {
      console.error('Failed to load services:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    try {
      const res = await fetch(`${API_BASE}/api/v1/admin/services`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setShowModal(false);
        fetchServices();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    try {
      await fetch(`${API_BASE}/api/v1/admin/services/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchServices();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex bg-[#F6F6F6] min-h-screen text-[#0A1A23]">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-2xl font-extrabold text-[#0D3B5B]">Services & Solutions Management</h1>
            <p className="text-xs text-slate-500">Edit subservices, features list, starting prices, and icons across the 5 solution domains.</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-[#1FA971] text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-[#158f5c]"
          >
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
                  <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600" title="Edit (Coming Soon)"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(s.id)} className="p-2 hover:bg-red-50 rounded-lg text-red-600"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
              <p className="text-xs text-slate-600">{s.tagline}</p>
              <div className="text-xs font-numbers font-bold text-[#0D3B5B]">Starting: {s.pricing_starting}</div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 space-y-6">
              <h2 className="text-lg font-bold text-[#0D3B5B]">Add Service Domain</h2>
              <form onSubmit={handleCreate} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1">Service Name</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-2 border rounded-xl text-xs" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">URL Slug</label>
                    <input required type="text" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="w-full p-2 border rounded-xl text-xs" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">Domain Category</label>
                    <select required value={formData.domain} onChange={e => setFormData({...formData, domain: e.target.value})} className="w-full p-2 border rounded-xl text-xs bg-white">
                      <option value="software">Software Development</option>
                      <option value="security">Security & CCTV</option>
                      <option value="solar">Solar & Electrical</option>
                      <option value="networking">Networking</option>
                      <option value="it-support">IT Support</option>
                      <option value="tracking">Vehicle Tracking</option>
                      <option value="street-power">Street Power</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">Starting Price</label>
                    <input required type="text" value={formData.pricing_starting} onChange={e => setFormData({...formData, pricing_starting: e.target.value})} className="w-full p-2 border rounded-xl text-xs" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold mb-1">Tagline</label>
                    <input required type="text" value={formData.tagline} onChange={e => setFormData({...formData, tagline: e.target.value})} className="w-full p-2 border rounded-xl text-xs" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold mb-1">Description</label>
                    <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full p-2 border rounded-xl text-xs" rows={3}></textarea>
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">FontAwesome Icon</label>
                    <input required type="text" value={formData.icon} onChange={e => setFormData({...formData, icon: e.target.value})} className="w-full p-2 border rounded-xl text-xs" placeholder="fa-cog" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="is_popular" checked={formData.is_popular} onChange={e => setFormData({...formData, is_popular: e.target.checked})} className="rounded text-[#1FA971]" />
                  <label htmlFor="is_popular" className="text-xs font-bold text-slate-700">Mark as Popular</label>
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t">
                  <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-xl">Cancel</button>
                  <button type="submit" className="px-4 py-2 text-xs font-bold bg-[#0D3B5B] text-white rounded-xl">Save Service</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
