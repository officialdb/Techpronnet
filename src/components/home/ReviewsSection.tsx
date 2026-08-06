'use client';

import React from 'react';
import Link from 'next/link';
import { ReviewItem } from '@/lib/initial-data';

interface ReviewsSectionProps {
  summary: {
    average_rating: number;
    total_reviews: number;
    stars: string;
    source: string;
  };
  reviews: ReviewItem[];
}

export default function ReviewsSection({ summary, reviews }: ReviewsSectionProps) {
  return (
    <section className="py-24 bg-white text-[#0A1A23] border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Google Business Rating Summary */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 pb-10 border-b border-slate-100" data-aos="fade-up">
          
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0D3B5B] text-white text-xs font-bold uppercase tracking-wider">
              <i className="fa fa-google text-blue-400" />
              <span>Google Business Synchronized</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3B5B] tracking-tight">
              Client Feedback &amp; Verified Reviews
            </h2>

            <p className="text-sm text-slate-600 max-w-xl">
              Real reviews automatically synchronized from our official Google Business Profile across Software, Solar, CCTV, and Networking projects.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-[#0D3B5B] text-white p-6 rounded-xl border border-white/10 shadow-lg flex items-center gap-6 shrink-0" data-aos="zoom-in">
            <div className="text-center">
              <div className="font-numbers text-4xl font-extrabold text-[#F5B400]">
                {summary.average_rating.toFixed(1)}
              </div>
              <div className="flex items-center gap-0.5 my-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa fa-star text-[#F5B400]" />
                ))}
              </div>
              <div className="text-[11px] text-slate-300 font-medium">
                {summary.total_reviews}+ Verified Reviews
              </div>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div className="space-y-1">
              <div className="text-xs text-[#1FA971] font-bold flex items-center gap-1">
                <i className="fa fa-shield text-[#1FA971]" />
                <span>100% Google Verified</span>
              </div>
              <div className="text-xs text-slate-300">
                Top Rated General Tech Provider
              </div>
              <Link
                href="/reviews"
                className="text-xs text-[#F5B400] font-semibold hover:underline flex items-center gap-1 pt-1"
              >
                <span>Read All Reviews</span>
                <i className="fa fa-arrow-right" />
              </Link>
            </div>
          </div>

        </div>

        {/* AI Customer Feedback Summary Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#0F6A74] text-white rounded-lg shrink-0">
              <i className="fa fa-magic text-[#F5B400] text-xl" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F6A74] uppercase tracking-wider mb-1">
                AI Customer Feedback Intelligence
              </div>
              <p className="text-sm font-medium text-[#0D3B5B] max-w-2xl">
                &ldquo;Clients consistently highlight prompt solar microgrid installation, high-density Wi-Fi mesh reliability, clean physical cabling, and clear software development communication.&rdquo;
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            <span className="text-xs bg-white text-[#0D3B5B] font-semibold px-3 py-1.5 rounded border border-slate-200 shadow-sm">
              ⚡ Rapid Deployment
            </span>
            <span className="text-xs bg-white text-[#0D3B5B] font-semibold px-3 py-1.5 rounded border border-slate-200 shadow-sm">
              ☀️ Reliable Solar Power
            </span>
            <span className="text-xs bg-white text-[#0D3B5B] font-semibold px-3 py-1.5 rounded border border-slate-200 shadow-sm">
              🔒 Crisp CCTV Security
            </span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.slice(0, 4).map((rev, idx) => (
            <div
              key={rev.id}
              data-aos="fade-up"
              data-aos-delay={(idx % 2) * 150}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div>
                {/* User & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {rev.reviewer_avatar ? (
                      <img
                        src={rev.reviewer_avatar}
                        alt={rev.reviewer_name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-300"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#0D3B5B] text-white font-bold flex items-center justify-center text-sm">
                        {rev.reviewer_name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-sm text-[#0D3B5B] flex items-center gap-1.5">
                        <span>{rev.reviewer_name}</span>
                        {rev.verified_google && (
                          <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5">
                            <i className="fa fa-google text-[10px]" /> Verified
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500">{rev.category} • {rev.review_date}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa fa-star text-[#F5B400]" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{rev.review_text}&rdquo;
                </p>

                {rev.ai_summary_tags && (
                  <div className="mt-3 text-[11px] text-[#0F6A74] font-semibold">
                    Highlights: <span className="text-slate-600 font-normal">{rev.ai_summary_tags}</span>
                  </div>
                )}
              </div>

              {/* Owner Reply */}
              {rev.owner_reply && (
                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1">
                  <div className="font-bold text-[#0D3B5B] flex items-center gap-1">
                    <i className="fa fa-comment text-[#1FA971]" />
                    <span>Techpronnet Technologies Reply:</span>
                  </div>
                  <p>{rev.owner_reply}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center" data-aos="zoom-in">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 bg-[#0D3B5B] hover:bg-[#124b73] text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-md transition-all"
          >
            <span>Explore All Verified Customer Reviews &amp; Leave Yours</span>
            <i className="fa fa-arrow-right" />
          </Link>
        </div>

      </div>
    </section>
  );
}
