"use client";

import React, { useState } from "react";
import {
  Lock,
  ExternalLink,
  Maximize2,
  X,
  Stethoscope,
  Truck,
  Smartphone,
  Cpu,
  Database,
  Wifi,
} from "lucide-react";

interface ProjectPreviewFrameProps {
  type?: "law-firm" | "hospital" | "logistics" | "mobile-app" | "automation" | "cloud-db";
  imageSrc?: string;
  imageAlt?: string;
  url: string;
  title: string;
  tag?: string;
}

export function ProjectPreviewFrame({
  type = "law-firm",
  imageSrc,
  imageAlt,
  url,
  title,
  tag = "Production System",
}: ProjectPreviewFrameProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="w-full border border-line bg-white shadow-xs overflow-hidden rounded-xs group transition-all hover:border-navy/50">
        {/* Browser Chrome Header */}
        <div className="bg-[#F3F2EC] px-3.5 py-2.5 border-b border-line flex items-center justify-between gap-3 text-xs select-none">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="size-2.5 rounded-full bg-[#E2E1D9] border border-[#CAC9BF]" />
            <span className="size-2.5 rounded-full bg-[#E2E1D9] border border-[#CAC9BF]" />
            <span className="size-2.5 rounded-full bg-[#E2E1D9] border border-[#CAC9BF]" />
          </div>

          {/* Clickable Address Bar Matching Exact Project URL */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-sand/70 px-3 py-1 border border-line text-[11px] font-mono text-muted hover:text-ink max-w-sm truncate w-full sm:w-auto transition-colors group/link"
            title={`Visit live site: ${url}`}
          >
            <Lock className="size-3 text-navy shrink-0" />
            <span className="truncate">{url}</span>
            <ExternalLink className="size-2.5 text-muted group-hover/link:text-navy shrink-0 opacity-70" />
          </a>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted font-mono uppercase hidden sm:block shrink-0">
              {tag}
            </span>
            {imageSrc && (
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-muted hover:text-ink p-0.5 transition-colors cursor-pointer"
                aria-label={`Enlarge screenshot: ${title}`}
                title="View full resolution"
              >
                <Maximize2 className="size-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Real Screenshot or Interactive Fallback */}
        {imageSrc ? (
          <div
            className="relative w-full overflow-hidden bg-sand/20 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <img
              src={imageSrc}
              alt={imageAlt || title}
              width={1366}
              height={696}
              loading="lazy"
              className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
            />
          </div>
        ) : (
          <div className="p-4 sm:p-6 bg-paper select-none">
            {type === "law-firm" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-line">
                  <div className="flex items-center gap-2">
                    <div className="size-7 bg-ink text-white flex items-center justify-center font-bold text-xs">
                      N
                    </div>
                    <div>
                      <div className="font-semibold text-xs tracking-tight text-ink">
                        Nnamdi I. Nwagwu, Esq.
                      </div>
                      <div className="text-[9px] uppercase tracking-widest text-muted">
                        Barrister &amp; Solicitor
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 text-[11px] text-muted font-medium">
                    <span>Practice Areas</span>
                    <span>Articles</span>
                    <span>Contact</span>
                    <span className="bg-sand px-2 py-0.5 border border-line text-ink">Consultation</span>
                  </div>
                </div>

                <div className="bg-white p-4 border border-line">
                  <span className="text-[9px] font-mono uppercase text-navy font-semibold tracking-wider">
                    Civil, Corporate &amp; Property Law
                  </span>
                  <h4 className="text-base sm:text-lg font-serif font-bold text-ink mt-1">
                    Sound legal counsel, plainly explained.
                  </h4>
                  <p className="text-xs text-muted mt-1 leading-relaxed max-w-md">
                    Representing individuals and businesses across civil, corporate, and property matters with direct, honest communication from consultation to resolution.
                  </p>

                  <div className="mt-4 pt-3 border-t border-line grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div className="bg-sand/60 p-2 border border-line/60">
                      <span className="text-[10px] text-muted block">Direct Legal Access</span>
                      <span className="font-semibold text-ink text-[11px]">Private Consultation</span>
                    </div>
                    <div className="bg-sand/60 p-2 border border-line/60">
                      <span className="text-[10px] text-muted block">Document Room</span>
                      <span className="font-semibold text-ink text-[11px]">256-Bit Encrypted</span>
                    </div>
                    <div className="bg-sand/60 p-2 border border-line/60 col-span-2 sm:col-span-1">
                      <span className="text-[10px] text-muted block">Practice Coverage</span>
                      <span className="font-semibold text-navy text-[11px]">Nationwide Practice</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {type === "hospital" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-line">
                  <div className="flex items-center gap-2">
                    <div className="size-7 bg-navy text-white flex items-center justify-center font-bold text-xs">
                      <Stethoscope className="size-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs tracking-tight text-ink">
                        Ogechi Hospital
                      </div>
                      <div className="text-[9px] uppercase tracking-widest text-muted">
                        Best Caring, Better Doctors
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
                    <span className="text-[9px] text-muted block">Emergency Care</span>
                    <span className="font-mono text-base font-bold text-navy">24/7 Available</span>
                  </div>
                  <div className="bg-white p-2.5 border border-line">
                    <span className="text-[9px] text-muted block">Consultation Slots</span>
                    <span className="font-mono text-base font-bold text-ink">Open</span>
                  </div>
                </div>

                <div className="bg-white border border-line p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-ink">Clinical Triage &amp; Intake System</span>
                    <span className="text-[10px] font-mono text-muted">Live Sync</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between p-1.5 bg-sand/50 border border-line/40">
                      <span className="font-medium text-ink truncate">Direct Inpatient &amp; Outpatient Records</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono px-1.5 py-0.2">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {type === "logistics" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-line">
                  <div className="flex items-center gap-2">
                    <div className="size-7 bg-ink text-white flex items-center justify-center font-bold text-xs">
                      <Truck className="size-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs tracking-tight text-ink">
                        Avex Logistics Services
                      </div>
                      <div className="text-[9px] uppercase tracking-widest text-muted">
                        Your Cargo. Our Priority.
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-navy font-medium bg-sand px-2 py-0.5 border border-line">
                    Shipment Tracking
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white p-2.5 border border-line">
                    <span className="text-[9px] text-muted block">Track Shipments</span>
                    <span className="font-mono text-base font-bold text-ink">Real-Time</span>
                  </div>
                  <div className="bg-white p-2.5 border border-line">
                    <span className="text-[9px] text-muted block">Freight Coverage</span>
                    <span className="font-mono text-base font-bold text-navy">International</span>
                  </div>
                  <div className="bg-white p-2.5 border border-line">
                    <span className="text-[9px] text-muted block">Instant Quotes</span>
                    <span className="font-mono text-base font-bold text-ink">Online</span>
                  </div>
                </div>

                <div className="bg-white border border-line p-3">
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span className="font-medium text-ink">Tracking Portal: AAE1... Route Verified</span>
                    <span className="font-mono text-muted text-[10px]">Verified Dispatch</span>
                  </div>
                  <div className="w-full bg-sand h-2 rounded-none overflow-hidden">
                    <div className="bg-navy h-full w-[85%]" />
                  </div>
                </div>
              </div>
            )}

            {type === "mobile-app" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-line">
                  <div className="flex items-center gap-2">
                    <div className="size-7 bg-sand text-navy flex items-center justify-center font-bold text-xs">
                      <Smartphone className="size-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs tracking-tight text-ink">
                        ZidiClinic AI — Clinic OS
                      </div>
                      <div className="text-[9px] uppercase tracking-widest text-muted">
                        zidiai.vercel.app
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    <Wifi className="size-3" />
                    <span>Clinic OS Live</span>
                  </div>
                </div>

                <div className="bg-white border border-line p-3.5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-ink">Appointments, Records, Billing &amp; Pharmacy</span>
                    <span className="font-mono text-muted text-[10px]">Vercel Edge</span>
                  </div>
                  <div className="p-2 bg-sage/50 border border-[#D6DCD0] text-xs text-navy font-medium">
                    Polished operational visibility built for modern private clinics
                  </div>
                </div>
              </div>
            )}

            {type === "automation" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-line">
                  <div className="flex items-center gap-2">
                    <div className="size-7 bg-navy text-white flex items-center justify-center font-bold text-xs">
                      <Cpu className="size-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs tracking-tight text-ink">
                        Chaen / Aenbase Infrastructure
                      </div>
                      <div className="text-[9px] uppercase tracking-widest text-muted">
                        www.aenbase.com
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    Ledger &amp; Virtual Cards
                  </span>
                </div>

                <div className="bg-white border border-line p-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-line/60">
                    <span className="font-semibold text-ink text-[11px]">Financial Commerce Infrastructure</span>
                    <span className="font-mono text-muted text-[10px]">Active</span>
                  </div>
                  <div className="p-1.5 bg-sand/40 border border-line/40 font-mono text-[11px] text-ink">
                    Virtual card issuance, locked rates, immutable ledger reconciliation
                  </div>
                </div>
              </div>
            )}

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
        )}

        {/* Technical Footer Bar */}
        <div className="px-4 py-2.5 border-t border-line bg-[#FAF9F5] flex flex-wrap items-center justify-between text-[11px] text-muted font-mono">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="truncate max-w-[260px] sm:max-w-none hover:text-navy hover:underline inline-flex items-center gap-1.5"
          >
            <span>{url}</span>
            <ExternalLink className="size-3" />
          </a>
          <span className="text-navy font-medium">1366 &times; 696px HD</span>
        </div>
      </div>

      {/* Full Resolution Modal Lightbox */}
      {modalOpen && imageSrc && (
        <div
          className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-white border border-line p-2 sm:p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-line mb-2 text-xs">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-ink font-semibold truncate hover:text-navy hover:underline inline-flex items-center gap-1.5"
              >
                <span>{title} ({url})</span>
                <ExternalLink className="size-3" />
              </a>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1 text-muted hover:text-ink cursor-pointer"
                aria-label="Close preview"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="max-h-[80vh] overflow-auto">
              <img
                src={imageSrc}
                alt={imageAlt || title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
