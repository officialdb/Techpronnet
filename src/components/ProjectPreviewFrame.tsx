"use client";

import React from "react";
import { Lock, ExternalLink, Calendar, Users, Activity, Clock, Shield, Building2, Stethoscope, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectPreviewFrameProps {
  type: "law-firm" | "hospital" | "logistics";
  url: string;
  title: string;
}

export function ProjectPreviewFrame({ type, url, title }: ProjectPreviewFrameProps) {
  return (
    <div className="w-full border border-line bg-white shadow-xs overflow-hidden rounded-xs">
      {/* Browser Chrome Header */}
      <div className="bg-[#F3F2EC] px-3.5 py-2.5 border-b border-line flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="size-2.5 rounded-full bg-[#E2E1D9] border border-[#CAC9BF]" />
          <span className="size-2.5 rounded-full bg-[#E2E1D9] border border-[#CAC9BF]" />
          <span className="size-2.5 rounded-full bg-[#E2E1D9] border border-[#CAC9BF]" />
        </div>

        <div className="flex items-center gap-2 bg-white px-3 py-1 border border-line text-[11px] font-mono text-muted max-w-xs truncate w-full sm:w-auto">
          <Lock className="size-3 text-navy shrink-0" />
          <span className="truncate">{url}</span>
        </div>

        <div className="text-[10px] text-muted font-mono uppercase hidden sm:block shrink-0">
          Production Build
        </div>
      </div>

      {/* Realistic Interactive UI Preview */}
      <div className="p-4 sm:p-6 bg-paper select-none">
        {type === "law-firm" && (
          <div className="space-y-4">
            {/* Mock Header */}
            <div className="flex items-center justify-between pb-3 border-b border-line">
              <div className="flex items-center gap-2">
                <div className="size-7 bg-ink text-white flex items-center justify-center font-bold text-xs">
                  S
                </div>
                <div>
                  <div className="font-semibold text-xs tracking-tight text-ink">
                    Sterling &amp; Partners
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-muted">
                    Barristers &amp; Solicitors
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[11px] text-muted font-medium">
                <span>Practices</span>
                <span>Attorneys</span>
                <span>Briefings</span>
                <span className="bg-sand px-2 py-0.5 border border-line text-ink">Client Portal</span>
              </div>
            </div>

            {/* Mock Law Firm Hero */}
            <div className="bg-white p-4 border border-line">
              <span className="text-[9px] font-mono uppercase text-navy font-semibold tracking-wider">
                Corporate Governance &amp; Litigation
              </span>
              <h4 className="text-base sm:text-lg font-serif font-bold text-ink mt-1">
                Discreet counsel for complex commercial ventures.
              </h4>
              <p className="text-xs text-muted mt-1 leading-relaxed max-w-md">
                Representing private equity, cross-border corporate mergers, and regulatory compliance advisory across West Africa.
              </p>

              {/* Consultation Intake Card */}
              <div className="mt-4 pt-3 border-t border-line grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className="bg-sand/60 p-2 border border-line/60">
                  <span className="text-[10px] text-muted block">Direct Partner Access</span>
                  <span className="font-semibold text-ink text-[11px]">Confidential Docket</span>
                </div>
                <div className="bg-sand/60 p-2 border border-line/60">
                  <span className="text-[10px] text-muted block">Client Document Room</span>
                  <span className="font-semibold text-ink text-[11px]">256-Bit Encrypted</span>
                </div>
                <div className="bg-sand/60 p-2 border border-line/60 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-muted block">Appointment Booking</span>
                  <span className="font-semibold text-navy text-[11px]">Real-Time Slots</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "hospital" && (
          <div className="space-y-4">
            {/* Mock Header */}
            <div className="flex items-center justify-between pb-3 border-b border-line">
              <div className="flex items-center gap-2">
                <div className="size-7 bg-navy text-white flex items-center justify-center font-bold text-xs">
                  <Stethoscope className="size-4" />
                </div>
                <div>
                  <div className="font-semibold text-xs tracking-tight text-ink">
                    St. Jude Metropolitan Health
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-muted">
                    Clinical Operations &amp; EHR
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-muted">Clinic Live</span>
              </div>
            </div>

            {/* Mock Hospital Dashboard */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white p-2.5 border border-line">
                <span className="text-[9px] text-muted block">Active Patients</span>
                <span className="font-mono text-base font-bold text-ink">142</span>
              </div>
              <div className="bg-white p-2.5 border border-line">
                <span className="text-[9px] text-muted block">Average Triage Time</span>
                <span className="font-mono text-base font-bold text-navy">12 min</span>
              </div>
              <div className="bg-white p-2.5 border border-line">
                <span className="text-[9px] text-muted block">Consultation Slots</span>
                <span className="font-mono text-base font-bold text-ink">94% Booked</span>
              </div>
            </div>

            {/* Patient Queue Table Preview */}
            <div className="bg-white border border-line p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-ink">Today&apos;s Triage &amp; Intake Queue</span>
                <span className="text-[10px] font-mono text-muted">Auto-refreshed 2s ago</span>
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between p-1.5 bg-sand/50 border border-line/40">
                  <span className="font-medium text-ink truncate">PT-8921 · Cardiology Consult</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono px-1.5 py-0.2">In Consultation</span>
                </div>
                <div className="flex items-center justify-between p-1.5 bg-sand/30 border border-line/40">
                  <span className="font-medium text-ink truncate">PT-8922 · Pediatrics Intake</span>
                  <span className="bg-amber-100 text-amber-800 text-[10px] font-mono px-1.5 py-0.2">Triage Waiting</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "logistics" && (
          <div className="space-y-4">
            {/* Mock Header */}
            <div className="flex items-center justify-between pb-3 border-b border-line">
              <div className="flex items-center gap-2">
                <div className="size-7 bg-ink text-white flex items-center justify-center font-bold text-xs">
                  <Truck className="size-4" />
                </div>
                <div>
                  <div className="font-semibold text-xs tracking-tight text-ink">
                    Apex Freight Global
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-muted">
                    Dispatch Operations Console
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-navy font-medium bg-sand px-2 py-0.5 border border-line">
                Fleet: 28 Active
              </span>
            </div>

            {/* Dispatch Status Grid */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white p-2.5 border border-line">
                <span className="text-[9px] text-muted block">In Transit</span>
                <span className="font-mono text-base font-bold text-ink">19 Vehicles</span>
              </div>
              <div className="bg-white p-2.5 border border-line">
                <span className="text-[9px] text-muted block">On-Time Rate</span>
                <span className="font-mono text-base font-bold text-navy">99.4%</span>
              </div>
              <div className="bg-white p-2.5 border border-line">
                <span className="text-[9px] text-muted block">Manifests Completed</span>
                <span className="font-mono text-base font-bold text-ink">412 Today</span>
              </div>
            </div>

            {/* Live Route Preview Bar */}
            <div className="bg-white border border-line p-3">
              <div className="flex items-center justify-between text-[11px] mb-1.5">
                <span className="font-medium text-ink">Active Route: Lagos Hub &rarr; Abuja Central</span>
                <span className="font-mono text-muted text-[10px]">ETA: 14:30</span>
              </div>
              <div className="w-full bg-sand h-2 rounded-none overflow-hidden">
                <div className="bg-navy h-full w-[78%]" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Asset Specifications Strip */}
      <div className="px-4 py-2 border-t border-line bg-[#FAF9F5] flex flex-wrap items-center justify-between text-[10px] text-muted font-mono">
        <span>UI Snapshot: {title}</span>
        <span className="text-navy font-medium">Target Size: 1200 x 750px (WebP / PNG)</span>
      </div>
    </div>
  );
}
