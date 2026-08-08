'use client';

import React, { useState, useEffect, useCallback } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import RichTextEditor from '@/components/admin/RichTextEditor';
import { Plus, Edit2, Trash2, ArrowLeft, Clock, User, Tag } from 'lucide-react';

type View = 'list' | 'editor';

const DEFAULT_FORM = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  author: 'System Admin',
  read_time: '5 min read',
  tags_json: '[]',
  image_url: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800',
};

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<View>('list');
  const [formData, setFormData] = useState(DEFAULT_FORM);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    try {
      const res = await fetch(`${API_BASE}/api/v1/admin/blog`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (res.ok) setPosts(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.content || formData.content === '<p></p>') {
      alert('Please write some content before publishing.');
      return;
    }
    setIsSaving(true);
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    try {
      const res = await fetch(`${API_BASE}/api/v1/admin/blog`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSaveSuccess(true);
        setTimeout(() => {
          setSaveSuccess(false);
          setView('list');
          setFormData(DEFAULT_FORM);
          fetchPosts();
        }, 1500);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    const token = localStorage.getItem('tpn_admin_token');
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    try {
      await fetch(`${API_BASE}/api/v1/admin/blog/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  // ── LIST VIEW ──────────────────────────────────────────────────────────────

  if (view === 'list') {
    return (
      <div className="flex flex-col lg:flex-row bg-[#F6F6F6] min-h-screen text-[#0A1A23]">
        <AdminSidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 min-w-0 overflow-y-auto">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h1 className="text-2xl font-extrabold text-[#0D3B5B]">Blog Posts</h1>
              <p className="text-xs text-slate-500">Create and manage content for the company blog.</p>
            </div>
            <button
              onClick={() => setView('editor')}
              className="bg-[#1FA971] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 hover:bg-[#158f5c] transition-colors shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Write New Post</span>
            </button>
          </div>

          {isLoading ? (
            <div className="p-4 text-xs font-bold text-slate-500 animate-pulse">Loading posts...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {posts.length === 0 && (
                <div className="col-span-3 text-center py-16 text-slate-400">
                  <p className="text-4xl mb-3">✍️</p>
                  <p className="font-bold text-sm">No blog posts yet.</p>
                  <p className="text-xs mt-1">Click "Write New Post" to get started.</p>
                </div>
              )}
              {posts.map(post => (
                <div key={post.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div className="relative overflow-hidden h-36">
                    <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-[#0D3B5B] text-sm leading-snug line-clamp-2">{post.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{post.excerpt}</p>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                        <Clock className="w-3 h-3" />
                        <span>{post.read_time}</span>
                        <span className="mx-1">•</span>
                        <span>{new Date(post.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                      <div className="flex gap-1">
                        <button className="p-1.5 text-slate-400 hover:text-[#0D3B5B] hover:bg-slate-100 rounded-lg" title="Edit (Coming Soon)">
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={() => handleDelete(post.id)} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    );
  }

  // ── EDITOR VIEW ────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col lg:flex-row bg-[#F0F2F5] min-h-screen text-[#0A1A23]">
      <AdminSidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Editor Top Bar */}
        <div className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => { setView('list'); setFormData(DEFAULT_FORM); }}
              className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#0D3B5B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Posts
            </button>
            <div className="w-px h-5 bg-slate-200" />
            <span className="text-xs font-bold text-[#0D3B5B]">New Blog Post</span>
          </div>
          <div className="flex items-center gap-3">
            {saveSuccess && (
              <span className="text-xs font-bold text-[#1FA971] animate-pulse">✅ Published!</span>
            )}
            <button
              type="button"
              onClick={handlePublish}
              disabled={isSaving}
              className="bg-[#0D3B5B] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#124b73] transition-colors shadow disabled:opacity-60"
            >
              {isSaving ? 'Publishing...' : '🚀 Publish Post'}
            </button>
          </div>
        </div>

        {/* Editor Body */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto space-y-6">

            {/* Cover Image Preview */}
            <div className="relative rounded-2xl overflow-hidden h-48 shadow">
              <img src={formData.image_url || 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800'} alt="Cover" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <label className="text-white text-xs font-bold cursor-pointer bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/30">
                  📷 Change Cover Image URL
                  <input type="text" className="hidden" value={formData.image_url} onChange={e => setFormData({ ...formData, image_url: e.target.value })} />
                </label>
              </div>
            </div>
            {/* Image URL input (visible) */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Cover Image URL</label>
              <input
                type="url"
                value={formData.image_url}
                onChange={e => setFormData({ ...formData, image_url: e.target.value })}
                className="w-full text-xs p-2.5 border border-slate-300 rounded-xl bg-white"
                placeholder="https://..."
              />
            </div>

            {/* Title */}
            <div>
              <input
                required
                type="text"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                placeholder="Your blog post title..."
                className="w-full text-3xl font-extrabold text-[#0D3B5B] bg-transparent border-none outline-none placeholder:text-slate-300 focus:ring-0 p-0"
              />
            </div>

            {/* Meta row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-600 mb-1.5">
                  <span className="text-slate-400">/</span> URL Slug
                </label>
                <input
                  required
                  type="text"
                  value={formData.slug}
                  onChange={e => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="my-awesome-post"
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-xl bg-white"
                />
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-600 mb-1.5">
                  <User className="w-3 h-3" /> Author
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={e => setFormData({ ...formData, author: e.target.value })}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-xl bg-white"
                />
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-600 mb-1.5">
                  <Clock className="w-3 h-3" /> Read Time
                </label>
                <input
                  type="text"
                  value={formData.read_time}
                  onChange={e => setFormData({ ...formData, read_time: e.target.value })}
                  placeholder="5 min read"
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-xl bg-white"
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Excerpt / Summary</label>
              <textarea
                required
                value={formData.excerpt}
                onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Brief summary shown in listing pages..."
                className="w-full text-xs p-2.5 border border-slate-300 rounded-xl bg-white resize-none"
                rows={2}
              />
            </div>

            {/* Tags */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-bold text-slate-600 mb-1.5">
                <Tag className="w-3 h-3" /> Tags (comma-separated)
              </label>
              <input
                type="text"
                placeholder='e.g. Solar, Technology, Innovation'
                onChange={e => {
                  const tags = e.target.value.split(',').map(t => t.trim()).filter(Boolean);
                  setFormData({ ...formData, tags_json: JSON.stringify(tags) });
                }}
                className="w-full text-xs p-2.5 border border-slate-300 rounded-xl bg-white"
              />
            </div>

            {/* Rich Text Editor */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Content</label>
              <RichTextEditor
                content={formData.content}
                onChange={(html) => setFormData(prev => ({ ...prev, content: html }))}
              />
            </div>

            {/* Publish Button (bottom) */}
            <div className="flex justify-end pb-8">
              <button
                type="button"
                onClick={handlePublish}
                disabled={isSaving}
                className="bg-[#1FA971] text-white text-sm font-bold px-8 py-3 rounded-xl hover:bg-[#158f5c] transition-colors shadow-lg disabled:opacity-60"
              >
                {isSaving ? 'Publishing...' : '🚀 Publish Post'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
