import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Insights | Techpronnet Technologies',
  description: 'Expert articles on solar energy, CCTV security, enterprise networking, software development, and managed IT from the Techpronnet engineering team.',
};

export const revalidate = 60;

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

async function fetchBlogPosts() {
  try {
    const res = await fetch(`${API_BASE}/api/v1/blog`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed');
    return await res.json();
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="bg-white text-[#0A1A23]">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D3B5B] to-[#0F6A74] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
            Techpronnet Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Technology Knowledge Hub
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
            Deep dives into solar energy, enterprise networking, CCTV security, custom software engineering, and IT infrastructure from our team of certified engineers.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-[#F6F6F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <p className="text-5xl mb-4">📝</p>
              <p className="font-bold text-lg text-slate-600">No posts yet. Check back soon!</p>
              <p className="text-sm mt-1">Our engineering team is working on some great content.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => {
                const tags: string[] = JSON.parse(post.tags_json || '[]');
                return (
                  <article
                    key={post.id}
                    className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B5B]/60 to-transparent" />
                      {/* First tag badge */}
                      {tags[0] && (
                        <span className="absolute top-3 left-3 bg-[#1FA971] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                          {tags[0]}
                        </span>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-1 space-y-3">
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold">
                        <i className="fa fa-clock-o" />
                        <span>{post.read_time}</span>
                        <span>·</span>
                        <span>
                          {new Date(post.published_at).toLocaleDateString('en-GB', {
                            day: 'numeric', month: 'short', year: 'numeric'
                          })}
                        </span>
                      </div>

                      <h2 className="font-extrabold text-[#0D3B5B] text-base leading-snug group-hover:text-[#1FA971] transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {tags.slice(0, 3).map((tag: string) => (
                          <span key={tag} className="text-[10px] font-bold text-[#0D3B5B] bg-slate-100 px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-2 inline-flex items-center gap-2 text-xs font-extrabold text-[#1FA971] hover:text-[#158f5c] transition-colors group/link"
                      >
                        Read Full Article
                        <i className="fa fa-arrow-right group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl font-extrabold text-[#0D3B5B]">Have a Project in Mind?</h2>
          <p className="text-sm text-slate-500">Our engineers are ready to help you find the right technology solution.</p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-[#1FA971] text-white font-extrabold text-sm px-8 py-3.5 rounded-xl hover:bg-[#158f5c] transition-colors shadow"
          >
            Get a Free Quote <i className="fa fa-arrow-right" />
          </Link>
        </div>
      </section>

    </div>
  );
}
