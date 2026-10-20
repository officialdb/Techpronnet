"use client";

import React from "react";
import {
  Lock,
  Calendar,
  Users,
  Activity,
  Clock,
  Shield,
  Building2,
  Stethoscope,
  Truck,
  Smartphone,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle2,
  Wifi,
  Sparkles,
} from "lucide-react";

interface ProjectPreviewFrameProps {
  type: "law-firm" | "hospital" | "logistics" | "mobile-app" | "automation" | "cloud-db";
  url: string;
  title: string;
  aspectRatio?: "16/10" | "4/3" | "16/9";
}

export function ProjectPreviewFrame({
  type,
  url,
  title,
  aspectRatio = "16/10",
}: ProjectPreviewFrameProps) {
  return (
    <div className="w-full border border-line bg-white shadow-xs overflow-hidden rounded-xs">
      {/* Browser Chrome Header */}
      <div className="bg-[#F3F2EC] px-3.5 py-2.5 border-b border-line flex items-center justify-between gap-3 text-xs select-none">
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
          Live System
        </div>
      </div>

      {/* Realistic Interactive UI Preview */}
      <div className="p-4 sm:p-6 bg-paper select-none">
        {/* 1. Law Firm Site & Portal */}
        {type === "law-firm" && (
          <div className="space-y-4">
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

        {/* 2. Hospital & Clinical EHR */}
        {type === "hospital" && (
          <div className="space-y-4">
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

        {/* 3. Logistics & Fleet Dispatch */}
        {type === "logistics" && (
          <div className="space-y-4">
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

        {/* 4. Mobile Application */}
        {type === "mobile-app" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-line">
              <div className="flex items-center gap-2">
                <div className="size-7 bg-sand text-navy flex items-center justify-center font-bold text-xs">
                  <Smartphone className="size-4" />
                </div>
                <div>
                  <div className="font-semibold text-xs tracking-tight text-ink">
                    FieldOps Mobile Suite
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-muted">
                    iOS &amp; Android PWA
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                <Wifi className="size-3" />
                <span>Offline Engine Ready</span>
              </div>
            </div>

            <div className="bg-white border border-line p-3.5 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-ink">Driver Waypoint Navigation</span>
                <span className="font-mono text-muted text-[10px]">Trip ID #8492</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-sand/60 p-2 border border-line/60">
                  <span className="text-[10px] text-muted block">Next Checkpoint</span>
                  <span className="font-semibold text-ink text-[11px]">Warehouse Bay 04</span>
                </div>
                <div className="bg-sand/60 p-2 border border-line/60">
                  <span className="text-[10px] text-muted block">Signature Capture</span>
                  <span className="font-semibold text-navy text-[11px]">Biometric / Digital</span>
                </div>
              </div>

              <div className="p-2 bg-sage/50 border border-[#D6DCD0] flex items-center justify-between text-xs">
                <span className="text-[11px] text-navy font-medium">Automatic background sync when cellular reconnects</span>
                <span className="size-2 rounded-full bg-navy shrink-0" />
              </div>
            </div>
          </div>
        )}

        {/* 5. Workflow Automation & APIs */}
        {type === "automation" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-line">
              <div className="flex items-center gap-2">
                <div className="size-7 bg-navy text-white flex items-center justify-center font-bold text-xs">
                  <Cpu className="size-4" />
                </div>
                <div>
                  <div className="font-semibold text-xs tracking-tight text-ink">
                    Automated Event Pipeline
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-muted">
                    Webhook &amp; Data Synchronization
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                Processed 14,892 Events / hr
              </span>
            </div>

            <div className="bg-white border border-line p-3 space-y-2 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-line/60">
                <span className="font-semibold text-ink text-[11px]">Multi-Step Execution Pipeline</span>
                <span className="font-mono text-muted text-[10px]">Latency: 18ms</span>
              </div>

              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center justify-between p-1.5 bg-sand/40 border border-line/40">
                  <span className="text-ink truncate">1. Webhook Received: Order.Completed</span>
                  <span className="text-emerald-700 font-semibold">&check; 200 OK</span>
                </div>
                <div className="flex items-center justify-between p-1.5 bg-sand/40 border border-line/40">
                  <span className="text-ink truncate">2. Neon Postgres: SKU Inventory Deducted</span>
                  <span className="text-emerald-700 font-semibold">&check; Committed</span>
                </div>
                <div className="flex items-center justify-between p-1.5 bg-sand/40 border border-line/40">
                  <span className="text-ink truncate">3. PDF Invoice &amp; Customer WhatsApp Alert</span>
                  <span className="text-emerald-700 font-semibold">&check; Dispatched</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. Cloud Infrastructure & Database */}
        {type === "cloud-db" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-line">
              <div className="flex items-center gap-2">
                <div className="size-7 bg-ink text-white flex items-center justify-center font-bold text-xs">
                  <Database className="size-4" />
                </div>
                <div>
                  <div className="font-semibold text-xs tracking-tight text-ink">
                    Neon Postgres &amp; Cloud Edge
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-muted">
                    Pooled Serverless Database
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-navy bg-sand px-2 py-0.5 border border-line">
                Uptime SLA: 99.99%
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white p-2.5 border border-line">
                <span className="text-[9px] text-muted block">Query Latency</span>
                <span className="font-mono text-base font-bold text-navy">&lt; 28ms</span>
              </div>
              <div className="bg-white p-2.5 border border-line">
                <span className="text-[9px] text-muted block">Connection Pooling</span>
                <span className="font-mono text-base font-bold text-ink">Active (AWS)</span>
              </div>
              <div className="bg-white p-2.5 border border-line">
                <span className="text-[9px] text-muted block">Security &amp; Backup</span>
                <span className="font-mono text-base font-bold text-ink">Encrypted</span>
              </div>
            </div>

            <div className="bg-white border border-line p-3 text-xs flex items-center justify-between">
              <div>
                <span className="font-semibold text-ink text-[11px] block">Global Edge Replication</span>
                <span className="text-[10px] text-muted">Zero-downtime automated branch cutover</span>
              </div>
              <span className="size-2 rounded-full bg-emerald-500" />
            </div>
          </div>
        )}
      </div>

      {/* Asset Specifications Strip */}
      <div className="px-4 py-2 border-t border-line bg-[#FAF9F5] flex flex-wrap items-center justify-between text-[10px] text-muted font-mono">
        <span>UI Snapshot: {title}</span>
        <span className="text-navy font-medium">Specs: 1200 x 750px (WebP / PNG)</span>
      </div>
    </div>
  );
}
