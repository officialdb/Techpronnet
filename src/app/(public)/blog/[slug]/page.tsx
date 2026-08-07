import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const revalidate = 60;

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

async function fetchPost(slug: string) {
  try {
    const res = await fetch(`${API_BASE}/api/v1/blog/${slug}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function fetchAllPosts() {
  try {
    const res = await fetch(`${API_BASE}/api/v1/blog`, { cache: 'no-store' });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  const posts = await fetchAllPosts();
  return posts.map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) return { title: 'Post Not Found | Techpronnet' };
  return {
    title: `${post.title} | Techpronnet Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) notFound();

  const tags: string[] = JSON.parse(post.tags_json || '[]');
  const allPosts = await fetchAllPosts();
  const related = allPosts.filter((p: any) => p.slug !== slug).slice(0, 3);

  return (
    <div className="bg-white text-[#0A1A23]">

      {/* Hero Image */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A23]/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span className="text-white/80 truncate max-w-xs">{post.title}</span>
          </nav>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <span key={tag} className="text-[10px] font-extrabold uppercase tracking-wider bg-[#1FA971] text-white px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full bg-[#0D3B5B] text-white text-[10px] font-extrabold flex items-center justify-center">
              {post.author.charAt(0)}
            </div>
            <span className="font-semibold text-slate-600">{post.author}</span>
          </div>
          <span>·</span>
          <span className="flex items-center gap-1"><i className="fa fa-clock-o" /> {post.read_time}</span>
          <span>·</span>
          <span>
            {new Date(post.published_at).toLocaleDateString('en-GB', {
              weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
            })}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0D3B5B] leading-tight tracking-tight mb-6">
          {post.title}
        </h1>

        {/* Body */}
        <div
          className="prose prose-sm max-w-none text-slate-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
          <span className="text-xs font-bold text-slate-500 mr-1">Tags:</span>
          {tags.map((tag: string) => (
            <span key={tag} className="text-xs font-bold text-[#0D3B5B] bg-slate-100 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-br from-[#0D3B5B] to-[#0F6A74] rounded-3xl p-8 text-white text-center space-y-4">
          <h3 className="text-xl font-extrabold">Ready to Work With Us?</h3>
          <p className="text-sm text-white/70">Get a free engineering consultation and no-obligation proposal from our team.</p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-[#1FA971] text-white font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-emerald-500 transition-colors"
          >
            Get a Free Quote <i className="fa fa-arrow-right" />
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-12 bg-[#F6F6F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-extrabold text-[#0D3B5B] mb-8">More From Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p: any) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all group">
                  <img src={p.image_url} alt={p.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-4 space-y-2">
                    <p className="text-[10px] text-slate-400">{p.read_time}</p>
                    <h3 className="font-bold text-[#0D3B5B] text-sm line-clamp-2 group-hover:text-[#1FA971] transition-colors">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="py-8 text-center bg-white">
        <Link href="/blog" className="text-xs font-bold text-[#0D3B5B] hover:text-[#1FA971] transition-colors inline-flex items-center gap-2">
          <i className="fa fa-arrow-left" /> Back to All Posts
        </Link>
      </div>
    </div>
  );
}
