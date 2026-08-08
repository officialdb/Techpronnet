'use client';

import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '', slug: '', client: '', domain: 'software',
    description: '', image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    completion_date: 'March 2026', is_featured: false, metrics_json: '{}'
  });

  const fetchProjects = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    try {
      const res = await fetch(`${API_BASE}/api/v1/admin/projects`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    try {
      const res = await fetch(`${API_BASE}/api/v1/admin/projects`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setShowModal(false);
        fetchProjects();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    try {
      await fetch(`${API_BASE}/api/v1/admin/projects/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#F6F6F6] min-h-screen text-[#0A1A23]">
      <AdminSidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 min-w-0 overflow-y-auto relative">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-2xl font-extrabold text-[#0D3B5B]">Portfolio & Projects Management</h1>
            <p className="text-xs text-slate-500">Manage case studies and completed client projects.</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-[#1FA971] text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-[#158f5c]"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Project</span>
          </button>
        </div>

        {isLoading ? (
          <div className="p-4 text-xs font-bold text-slate-500">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.length === 0 && <p className="text-xs text-slate-500 col-span-3">No projects found.</p>}
            {projects.map(project => (
              <div key={project.id} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3">
                <img src={project.image_url} alt={project.title} className="w-full h-32 object-cover rounded-xl" />
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-[#0D3B5B] text-sm leading-tight">{project.title}</h3>
                    {project.is_featured && <span className="bg-[#F5B400] text-xs font-bold px-2 py-0.5 rounded-full shrink-0">Featured</span>}
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">{project.domain} • {project.client}</p>
                </div>
                <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                  <button className="text-slate-400 hover:text-[#0D3B5B]" title="Edit (Coming Soon)">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(project.id)} className="text-slate-400 hover:text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 space-y-6">
              <h2 className="text-lg font-bold text-[#0D3B5B]">Add New Project</h2>
              <form onSubmit={handleCreate} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1">Project Title</label>
                    <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full p-2 border rounded-xl text-xs" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">URL Slug</label>
                    <input required type="text" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="w-full p-2 border rounded-xl text-xs" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">Client Name</label>
                    <input required type="text" value={formData.client} onChange={e => setFormData({...formData, client: e.target.value})} className="w-full p-2 border rounded-xl text-xs" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">Domain Category</label>
                    <select required value={formData.domain} onChange={e => setFormData({...formData, domain: e.target.value})} className="w-full p-2 border rounded-xl text-xs bg-white">
                      <option value="software">Software Development</option>
                      <option value="security">Security & CCTV</option>
                      <option value="solar">Solar & Electrical</option>
                      <option value="networking">Networking</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Description</label>
                  <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full p-2 border rounded-xl text-xs" rows={3}></textarea>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="is_featured" checked={formData.is_featured} onChange={e => setFormData({...formData, is_featured: e.target.checked})} className="rounded text-[#1FA971]" />
                  <label htmlFor="is_featured" className="text-xs font-bold text-slate-700">Feature on Homepage</label>
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t">
                  <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-xl">Cancel</button>
                  <button type="submit" className="px-4 py-2 text-xs font-bold bg-[#0D3B5B] text-white rounded-xl">Save Project</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
