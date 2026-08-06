'use client';

import React, { useState } from 'react';
import { INITIAL_REVIEWS } from '@/lib/initial-data';

export default function ReviewsPage() {
  const [reviewsList, setReviewsList] = useState(INITIAL_REVIEWS);
  const [showForm, setShowForm] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState('Solar & Electrical');
  const [reviewText, setReviewText] = useState('');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    const newRev = {
      id: Date.now(),
      reviewer_name: reviewerName,
      rating: Number(rating),
      review_text: reviewText,
      review_date: 'Just now',
      verified_google: true,
      is_featured: true,
      category: category,
      owner_reply: 'Thank you for your feedback! Techpronnet appreciates your trust in our services.',
      ai_summary_tags: 'Verified Feedback, Prompt Service'
    };
    setReviewsList([newRev, ...reviewsList]);
    setSubmittedSuccess(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmittedSuccess(false);
      setReviewerName('');
      setReviewText('');
    }, 2500);
  };

  return (
    <div className="py-16 bg-white text-[#0A1A23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="bg-[#0D3B5B] text-white rounded-xl p-8 sm:p-12 mb-12 shadow-xl border border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold uppercase px-3 py-1 rounded-md border border-white/20">
              <i className="fa fa-google text-blue-400" />
              <span>Google Business Profile Integration</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Customer Reviews &amp; Feedback Hub
            </h1>
            <p className="text-sm text-slate-200 max-w-xl">
              Transparent client testimonials automatically synchronized from Google Business Profile across Software, Solar, CCTV, Networking, and IT Support projects.
            </p>
          </div>

          {/* Rating Badge Card */}
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center shrink-0 space-y-2">
            <div className="font-numbers text-5xl font-extrabold text-[#F5B400]">5.0</div>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa fa-star text-[#F5B400]" />
              ))}
            </div>
            <div className="text-xs text-slate-200 font-semibold">132+ Verified Google Reviews</div>
            <button
              onClick={() => setShowForm(true)}
              className="mt-3 bg-[#1FA971] hover:bg-emerald-600 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 mx-auto"
            >
              <i className="fa fa-plus-circle" />
              <span>Leave a Review</span>
            </button>
          </div>
        </div>

        {/* AI Customer Feedback Insights */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#0F6A74] text-white rounded-lg">
              <i className="fa fa-magic text-[#F5B400] text-xl" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F6A74] uppercase tracking-wider">AI Sentiment Summary</div>
              <div className="text-sm font-bold text-[#0D3B5B]">98.4% Customer Satisfaction Rate across 500+ Projects</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white text-[#1FA971] font-semibold px-3 py-1 rounded-md border border-slate-200 shadow-sm">
              ✓ Clean Cabling &amp; Solar Installations
            </span>
            <span className="bg-white text-[#0D3B5B] font-semibold px-3 py-1 rounded-md border border-slate-200 shadow-sm">
              ✓ Responsive Web &amp; Mobile Engineering
            </span>
          </div>
        </div>

        {/* Submit Review Modal Form */}
        {showForm && (
          <div className="bg-white rounded-xl p-8 border-2 border-[#1FA971] shadow-2xl mb-12 max-w-2xl mx-auto space-y-6">
            {submittedSuccess ? (
              <div className="text-center space-y-3 py-6">
                <i className="fa fa-check-circle text-[#1FA971] text-5xl mx-auto" />
                <h3 className="text-xl font-bold text-[#0D3B5B]">Review Submitted!</h3>
                <p className="text-xs text-slate-500">Thank you for rating Techpronnet Technologies.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <h3 className="text-xl font-bold text-[#0D3B5B]">Submit Google Verified Review</h3>
                <div>
                  <label className="text-xs font-bold block text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    placeholder="e.g. Chief Johnson"
                    className="w-full text-xs p-3 border border-slate-300 rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold block text-slate-700 mb-1">Rating (Stars)</label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="w-full text-xs p-3 border border-slate-300 rounded-lg"
                    >
                      <option value={5}>5 Stars (Excellent)</option>
                      <option value={4}>4 Stars (Very Good)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold block text-slate-700 mb-1">Service Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full text-xs p-3 border border-slate-300 rounded-lg"
                    >
                      <option>Solar &amp; Electrical</option>
                      <option>Software Development</option>
                      <option>CCTV &amp; Security</option>
                      <option>Networking</option>
                      <option>Managed IT Support</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold block text-slate-700 mb-1">Review Comments</label>
                  <textarea
                    rows={4}
                    required
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Share your experience working with Techpronnet Technologies..."
                    className="w-full text-xs p-3 border border-slate-300 rounded-lg"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-xs font-bold text-slate-500 px-4 py-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#1FA971] text-white font-bold text-xs px-6 py-2.5 rounded-lg shadow"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {rev.reviewer_avatar ? (
                      <img src={rev.reviewer_avatar} alt={rev.reviewer_name} className="w-10 h-10 rounded-full object-cover border" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#0D3B5B] text-white font-bold flex items-center justify-center text-sm">
                        {rev.reviewer_name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-base text-[#0D3B5B]">{rev.reviewer_name}</div>
                      <div className="text-xs text-slate-500">{rev.category} • {rev.review_date}</div>
                    </div>
                  </div>

                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa fa-star text-[#F5B400]" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{rev.review_text}&rdquo;
                </p>
              </div>

              {rev.owner_reply && (
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1">
                  <div className="font-bold text-[#0D3B5B] flex items-center gap-1.5">
                    <i className="fa fa-comment text-[#1FA971]" />
                    <span>Techpronnet Owner Reply:</span>
                  </div>
                  <p>{rev.owner_reply}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
