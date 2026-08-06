'use client';

import React, { useState } from 'react';
import { submitLead } from '@/lib/api';
import { COMPANY_DETAILS } from '@/lib/initial-data';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitLead({
      name,
      email,
      phone,
      company,
      source: 'Contact Page Form',
      notes: message
    });
    setIsSubmitting(false);
    setSuccess(true);
  };

  return (
    <div className="py-16 bg-white text-[#0A1A23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block bg-[#0D3B5B] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-md">
            Contact Techpronnet Technologies
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0D3B5B]">
            Get In Touch With Our Engineering Team
          </h1>
          <p className="text-base text-slate-600">
            Have questions about a new software build, solar microgrid installation, CCTV security, or emergency IT hotline support?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-md">
            {success ? (
              <div className="text-center py-12 space-y-4">
                <i className="fa fa-check-circle text-[#1FA971] text-6xl" />
                <h2 className="text-2xl font-bold text-[#0D3B5B]">Message Sent Successfully!</h2>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you <span className="font-bold">{name}</span>. A Techpronnet support representative will respond to your message shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-[#0D3B5B]">Send Us an Inquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#0D3B5B] block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Michael Scott"
                      className="w-full text-xs p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1FA971]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#0D3B5B] block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. michael@company.com"
                      className="w-full text-xs p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1FA971]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#0D3B5B] block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +234 803 123 4567"
                      className="w-full text-xs p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1FA971]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#0D3B5B] block mb-1">Company / Entity</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Dunder Mifflin"
                      className="w-full text-xs p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1FA971]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0D3B5B] block mb-1">Message / Technical Scope *</label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe how we can assist you..."
                    className="w-full text-xs p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1FA971]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1FA971] hover:bg-emerald-600 text-white font-extrabold text-sm py-4 rounded-lg shadow flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <span>Sending...</span> : (
                    <>
                      <span>Submit Inquiry</span>
                      <i className="fa fa-send" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Address & Hotline Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Emergency Hotline Card */}
            <div className="bg-[#0D3B5B] text-white p-8 rounded-xl border border-white/10 shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-[#F5B400] font-bold text-xs uppercase tracking-wider">
                <i className="fa fa-exclamation-triangle text-[#F5B400]" />
                <span>24/7 IT Emergency Hotline</span>
              </div>
              <div className="font-numbers text-2xl font-extrabold text-white">
                {COMPANY_DETAILS.hotline}
              </div>
              <p className="text-xs text-slate-300">
                For server down emergencies, critical camera security outages, or solar battery power failures.
              </p>
              <a
                href={COMPANY_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1FA971] hover:bg-emerald-600 text-white font-bold text-xs py-3 rounded-lg flex items-center justify-center gap-2 transition-colors block text-center"
              >
                <i className="fa fa-whatsapp text-base" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>

            {/* Address & Hours Card */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-md space-y-5">
              <h3 className="font-bold text-lg text-[#0D3B5B] border-b border-slate-100 pb-3">
                Headquarters &amp; Hours
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <i className="fa fa-map-marker text-[#1FA971] text-lg shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#0D3B5B]">Innovation Center Location:</div>
                    <div>{COMPANY_DETAILS.address}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <i className="fa fa-phone text-[#1FA971] text-lg shrink-0" />
                  <div>
                    <div className="font-bold text-[#0D3B5B]">General Line:</div>
                    <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:underline">{COMPANY_DETAILS.phone}</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <i className="fa fa-envelope text-[#1FA971] text-lg shrink-0" />
                  <div>
                    <div className="font-bold text-[#0D3B5B]">Email Support:</div>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:underline">{COMPANY_DETAILS.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-100 pt-3">
                  <i className="fa fa-clock-o text-[#F5B400] text-lg shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#0D3B5B]">Opening Hours:</div>
                    <div>{COMPANY_DETAILS.hours}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Full-Width Google Map */}
        <div className="mt-12 rounded-xl overflow-hidden border border-slate-200 shadow-md">
          <iframe
            title="Techpronnet Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7262100806497!2d3.379205314770222!3d6.44203199533934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a36e058230!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1650000000000!5m2!1sen!2sng"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
}
