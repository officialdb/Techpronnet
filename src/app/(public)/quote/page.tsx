'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { submitQuoteRequest } from '@/lib/api';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quoteSchema, type QuoteInput } from '@/lib/validations/quote';

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const initialDomain = searchParams.get('domain') || 'software';

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      domain: initialDomain as any,
      requirements: [],
      customNotes: '',
      budgetRange: '$1,000 - $5,000',
      urgency: '1-2 Weeks',
      name: '',
      email: '',
      phone: '',
      company: '',
      address: '',
    }
  });

  const domain = watch('domain');
  const requirements = watch('requirements');
  const budgetRange = watch('budgetRange');
  const urgency = watch('urgency');
  const name = watch('name');
  const email = watch('email');

  const [step, setStep] = useState(1);
  const [successResult, setSuccessResult] = useState<any>(null);

  const domainConfigs: Record<string, { title: string; icon: string; options: string[] }> = {
    software: {
      title: 'Software & SaaS Requirements',
      icon: 'fa-code',
      options: [
        'Custom Web Application Development',
        'Mobile App (iOS & Android)',
        'Enterprise ERP / CRM System',
        'API Integration & Microservices',
        'SaaS Multi-Tenant Portal',
        'AI Solutions & Automation',
        'UI/UX Design Mockups',
        'SEO Optimization & Audits'
      ]
    },
    security: {
      title: 'CCTV & Security Specs',
      icon: 'fa-shield',
      options: [
        'CCTV HD IP Cameras (4 - 16 Cameras)',
        'Enterprise Surveillance (16+ Cameras & NVR)',
        'Biometric Access Control & Turnstiles',
        'Intercom System Installation',
        'Smart Door Bell Installation',
        'Electric Fence Installation & Monitoring',
        'High-Security Armored Doors',
        'Smart Home Automation System',
        'Perimeter Motion & Intrusion Alarm'
      ]
    },
    solar: {
      title: 'Solar & Renewable Power System Specs',
      icon: 'fa-sun-o',
      options: [
        'Solar/Inverter & Battery Installation',
        '5kVA Hybrid Solar Inverter System',
        '10kVA - 15kVA Commercial Solar Array',
        '50kVA Industrial Microgrid Array',
        'Lithium-Ion Wall Battery Backup Storage',
        'Solar Roof Panels & Racking Mounts',
        'Solar Street Light Installation',
        'Smart Energy Audit & Surge Protection'
      ]
    },
    networking: {
      title: 'Structured Networking & Wi-Fi Specs',
      icon: 'fa-sitemap',
      options: [
        'Cat6a/Cat7 Structured Cable Drops',
        'High-Density Wi-Fi 6 Mesh System',
        'Server Rack & Patch Panel Assembly',
        'Fiber Optic Backhaul & Splicing',
        'Firewall & VPN Network Security'
      ]
    },
    'it-support': {
      title: 'Managed IT Support SLA Specs',
      icon: 'fa-wrench',
      options: [
        'Desktop & Laptop Hardware Repairs',
        'Monthly Server & Cloud Backup Maintenance',
        '24/7 IT Helpdesk Hotline SLA',
        'On-site Emergency Technician Visits',
        'Software Licensing & Compliance Management'
      ]
    },
    tracking: {
      title: 'Car Tracking & Fleet Monitoring Specs',
      icon: 'fa-map-marker',
      options: [
        'Single Vehicle GPS Tracker Installation',
        'Multi-Vehicle Fleet Tracking Setup',
        'Geofencing & Zone Alert Notifications',
        'Engine Immobilizer & Remote Cut-Off',
        'Live Web Fleet Monitoring Dashboard',
        'Driver Behavior & Mileage Reports',
        'Anti-Theft Tracking & Recovery Support'
      ]
    },
    'street-power': {
      title: 'Solar Street Lights & Outdoor Power Specs',
      icon: 'fa-lightbulb-o',
      options: [
        'Estate Road Solar Street Light Installation',
        'Compound & Perimeter Solar Flood Lights',
        'Motion-Activated Dusk-to-Dawn Lights',
        'Commercial Parking Lot Solar Lighting',
        'Warehouse & Factory Outdoor Lighting',
        'Maintenance & Bulb Replacement Service'
      ]
    }
  };

  const handleRequirementToggle = (option: string) => {
    if (requirements.includes(option)) {
      setValue('requirements', requirements.filter((item) => item !== option), { shouldValidate: true });
    } else {
      setValue('requirements', [...requirements, option], { shouldValidate: true });
    }
  };

  const handleNextStep = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (step === 1) {
      const isValid = await trigger(['domain']);
      if (isValid) setStep(2);
    } else if (step === 2) {
      const isValid = await trigger(['requirements', 'budgetRange', 'urgency', 'customNotes']);
      if (isValid) setStep(3);
    }
  };

  const onSubmit = async (data: QuoteInput) => {
    try {
      const response = await submitQuoteRequest({
        domain: data.domain,
        requirements_json: JSON.stringify({
          specs: data.requirements,
          custom_notes: data.customNotes
        }),
        budget_range: data.budgetRange,
        urgency: data.urgency,
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        address: data.address
      });
      setSuccessResult(response);
    } catch (err) {
      console.error(err);
    }
  };

  if (successResult) {
    return (
      <div className="bg-white rounded-xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6 max-w-3xl mx-auto my-12">
        <div className="w-16 h-16 bg-emerald-100 text-[#1FA971] rounded-full flex items-center justify-center mx-auto text-3xl">
          <i className="fa fa-check-circle" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#1FA971] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded">
            Proposal Request Submitted
          </span>
          <h2 className="text-3xl font-extrabold text-[#0D3B5B]">Thank You, {name}!</h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Your technical request has been logged. Our lead solutions architect will review your project scope and contact you at <span className="font-bold text-[#0D3B5B]">{email}</span> within 24 hours.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-left text-xs text-slate-700 space-y-3">
          <div className="font-bold text-[#0D3B5B] border-b pb-2 flex items-center justify-between">
            <span>Request Details Summary</span>
            <span className="text-[10px] bg-[#0D3B5B] text-white px-2 py-0.5 rounded">Reference #{successResult.id || 'TPN-894'}</span>
          </div>
          <div><strong className="text-[#0D3B5B]">Domain:</strong> {domain.toUpperCase()}</div>
          <div><strong className="text-[#0D3B5B]">Specs Selected:</strong> {requirements.join(', ') || 'General Consultation'}</div>
          <div><strong className="text-[#0D3B5B]">Budget Target:</strong> {budgetRange}</div>
          <div><strong className="text-[#0D3B5B]">Timeline:</strong> {urgency}</div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="bg-[#0D3B5B] hover:bg-[#124b73] text-white font-bold text-xs px-6 py-3 rounded-lg transition-colors"
          >
            Return to Home Page
          </a>
        </div>
      </div>
    );
  }

  const currentConfig = domainConfigs[domain] || domainConfigs.software;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Wizard Progress Bar */}
      <div className="flex items-center justify-between mb-8 px-4">
        {[
          { number: 1, label: 'Select Domain' },
          { number: 2, label: 'Configure Specs' },
          { number: 3, label: 'Contact Details' }
        ].map((s) => (
          <div key={s.number} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                step === s.number
                  ? 'bg-[#1FA971] text-white'
                  : step > s.number
                  ? 'bg-[#0D3B5B] text-white'
                  : 'bg-slate-200 text-slate-500'
              }`}
            >
              {step > s.number ? <i className="fa fa-check" /> : s.number}
            </div>
            <span className={`text-xs font-semibold hidden sm:inline ${step === s.number ? 'text-[#0D3B5B]' : 'text-slate-500'}`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-md">
        
        {/* Step 1: Select Domain */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-2xl font-bold text-[#0D3B5B]">Step 1: Choose Your Technology Domain</h2>
              <p className="text-xs text-slate-500">Select the primary service area you require assistance with.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(domainConfigs).map(([domKey, cfg]) => {
                const isSelected = domain === domKey;
                return (
                  <button
                    key={domKey}
                    type="button"
                    onClick={() => setValue('domain', domKey as any, { shouldValidate: true })}
                    className={`p-5 rounded-lg border text-left transition-all ${
                      isSelected
                        ? 'bg-[#0D3B5B] text-white border-[#0D3B5B] shadow-md'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-md ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#0D3B5B]'}`}>
                        <i className={`fa ${cfg.icon} text-lg`} />
                      </div>
                      {isSelected && <i className="fa fa-check text-sm text-[#1FA971]" />}
                    </div>
                    <div className="font-bold text-sm mb-1">{cfg.title.split(' ')[0]}</div>
                    <div className="text-[11px] opacity-80">{cfg.options.length} Specification Options</div>
                  </button>
                );
              })}
            </div>

            <div className="pt-6 flex justify-end">
              <button
                type="button"
                onClick={() => handleNextStep()}
                className="bg-[#1FA971] hover:bg-emerald-600 text-white font-extrabold text-xs px-8 py-3.5 rounded-lg flex items-center gap-2"
              >
                <span>Continue to Specifications</span>
                <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Configure Specs */}
        {step === 2 && (
          <form onSubmit={(e) => { e.preventDefault(); handleNextStep(e); }} className="space-y-6">
            <div className="space-y-2 mb-4">
              <span className="text-xs font-bold text-[#1FA971] uppercase tracking-wider">
                Domain: {domain.toUpperCase()}
              </span>
              <h2 className="text-2xl font-bold text-[#0D3B5B]">{currentConfig.title}</h2>
              <p className="text-xs text-slate-500">Check all options that apply to your requirements.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentConfig.options.map((option, idx) => {
                const isChecked = requirements.includes(option);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleRequirementToggle(option)}
                    className={`p-3.5 rounded-lg border text-left text-xs font-medium transition-all flex items-center justify-between ${
                      isChecked
                        ? 'bg-[#0D3B5B] text-white border-[#0D3B5B]'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span>{option}</span>
                    <i className={`fa ${isChecked ? 'fa-check-square text-[#1FA971]' : 'fa-square-o text-slate-300'} text-base`} />
                  </button>
                );
              })}
            </div>

            {/* Custom Scope Notes */}
            <div>
              <label className="text-xs font-bold text-[#0D3B5B] block mb-1">Additional Project Specifications / Notes</label>
              <textarea
                rows={3}
                {...register('customNotes')}
                placeholder="Specify camera counts, estimated kVA load, user counts, or software features..."
                className={`w-full text-xs p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.customNotes ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-[#1FA971]'}`}
              />
              {errors.customNotes && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.customNotes.message}</p>}
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#0D3B5B] block mb-1">Estimated Budget Range</label>
                <select
                  {...register('budgetRange')}
                  className={`w-full text-xs p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.budgetRange ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-[#1FA971]'}`}
                >
                  <option>$500 - $1,000 (Small/Basic Setup)</option>
                  <option>$1,000 - $5,000 (Standard Commercial)</option>
                  <option>$5,000 - $15,000 (Enterprise Infrastructure)</option>
                  <option>$15,000+ (Large Custom Build)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#0D3B5B] block mb-1">Desired Timeline</label>
                <select
                  {...register('urgency')}
                  className={`w-full text-xs p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.urgency ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-[#1FA971]'}`}
                >
                  <option>Immediate / Emergency</option>
                  <option>1-2 Weeks</option>
                  <option>1 Month</option>
                  <option>Flexible Planning</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <i className="fa fa-arrow-left" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="bg-[#1FA971] hover:bg-emerald-600 text-white font-extrabold text-xs px-8 py-3 rounded-lg flex items-center gap-2"
              >
                <span>Continue to Contact Info</span>
                <i className="fa fa-arrow-right" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2 mb-4">
              <h2 className="text-2xl font-bold text-[#0D3B5B]">Step 3: Client &amp; Location Details</h2>
              <p className="text-xs text-slate-500">Provide contact details so we can deliver your detailed proposal.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#0D3B5B] block mb-1">Full Name *</label>
                <input
                  type="text"
                  {...register('name')}
                  placeholder="e.g. Sarah Connor"
                  className={`w-full text-xs p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-[#1FA971]'}`}
                />
                {errors.name && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.name.message}</p>}
              </div>

              <div>
                <label className="text-xs font-bold text-[#0D3B5B] block mb-1">Email Address *</label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="e.g. sarah@cyberdyne.com"
                  className={`w-full text-xs p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-[#1FA971]'}`}
                />
                {errors.email && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#0D3B5B] block mb-1">Phone Number *</label>
                <input
                  type="tel"
                  {...register('phone')}
                  placeholder="e.g. +234 802 345 6789"
                  className={`w-full text-xs p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-[#1FA971]'}`}
                />
                {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="text-xs font-bold text-[#0D3B5B] block mb-1">Company / Organization</label>
                <input
                  type="text"
                  {...register('company')}
                  placeholder="e.g. Cyberdyne Systems"
                  className={`w-full text-xs p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.company ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-[#1FA971]'}`}
                />
                {errors.company && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.company.message}</p>}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#0D3B5B] block mb-1">Site / Installation Location</label>
              <input
                type="text"
                {...register('address')}
                placeholder="e.g. Ikeja Industrial Estate, Lagos"
                className={`w-full text-xs p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.address ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-[#1FA971]'}`}
              />
              {errors.address && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.address.message}</p>}
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <i className="fa fa-arrow-left" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#1FA971] hover:bg-emerald-600 text-white font-extrabold text-xs px-10 py-3.5 rounded-lg flex items-center gap-2 shadow-md"
              >
                {isSubmitting ? (
                  <span>Submitting Proposal...</span>
                ) : (
                  <>
                    <span>Submit &amp; Generate Quote Request</span>
                    <i className="fa fa-check-circle" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}

export default function QuotePage() {
  return (
    <div className="py-16 bg-white text-[#0A1A23] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-[#0D3B5B] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-md inline-block">
            Interactive Cost Configurator
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0D3B5B]">
            Configure Your Custom Tech Solution
          </h1>
          <p className="text-sm text-slate-600">
            Build your project specs across Software, Solar Microgrids, CCTV Surveillance, and Enterprise Networking.
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-12">Loading Quote Engine...</div>}>
          <QuoteFormContent />
        </Suspense>
      </div>
    </div>
  );
}
