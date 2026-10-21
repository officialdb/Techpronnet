"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Lock,
  Activity,
  Truck,
  CreditCard,
  Database,
  ShieldCheck,
} from "lucide-react";

interface TelemetrySystem {
  id: string;
  tabLabel: string;
  client: string;
  title: string;
  route: string;
  latency: string;
  throughput: string;
  uptime: string;
  events: {
    id: string;
    action: string;
    meta: string;
    status: string;
    statusType: "success" | "active" | "neutral";
  }[];
}

export function Hero() {
  const [activeTab, setActiveTab] = useState<string>("hospital");

  const systems: Record<string, TelemetrySystem> = {
    hospital: {
      id: "hospital",
      tabLabel: "Hospital EHR",
      client: "Ogechi Hospital",
      title: "Clinical Appointment & Triage Queue",
      route: "api.techpronnet.com/v1/ehr/triage",
      latency: "14ms",
      throughput: "99.98%",
      uptime: "Zero-Downtime",
      events: [
        {
          id: "1",
          action: "Outpatient Intake Confirmed",
          meta: "Cardiology Clinic · Dr. Okonkwo · ID #8491",
          status: "Checked In",
          statusType: "success",
        },
        {
          id: "2",
          action: "Pharmacy Inventory Allocated",
          meta: "Dispense Order #2041 · Multi-tier ledger",
          status: "Verified",
          statusType: "active",
        },
        {
          id: "3",
          action: "Emergency Care Line Dispatched",
          meta: "Triage Priority 1 · Direct WhatsApp alert",
          status: "Dispatched",
          statusType: "neutral",
        },
      ],
    },
    logistics: {
      id: "logistics",
      tabLabel: "Logistics",
      client: "Avex Logistics",
      title: "Freight Telematics & Dispatch Milestones",
      route: "api.techpronnet.com/v1/fleet/dispatch",
      latency: "19ms",
      throughput: "188 Waybills",
      uptime: "GPS Synced",
      events: [
        {
          id: "4",
          action: "Lagos-Kano Freight Milestone",
          meta: "Truck AV-402 · Waybill #9021 verified",
          status: "Milestone OK",
          statusType: "success",
        },
        {
          id: "5",
          action: "Automated WhatsApp Notice",
          meta: "Consignee delivery confirmation sent",
          status: "Delivered",
          statusType: "active",
        },
        {
          id: "6",
          action: "Hub Inbound Bay Clearance",
          meta: "Central Sorting Terminal · Depot 4",
          status: "Cleared",
          statusType: "neutral",
        },
      ],
    },
    fintech: {
      id: "fintech",
      tabLabel: "FinTech API",
      client: "Chaen Financial",
      title: "Virtual Card Issuance & Atomic Balance",
      route: "api.techpronnet.com/v1/ledger/transact",
      latency: "9ms",
      throughput: "2.4k req/s",
      uptime: "99.99%",
      events: [
        {
          id: "7",
          action: "Virtual Card Spend Authorized",
          meta: "Stripe & Paystack Rail · Txn #49102",
          status: "200 OK",
          statusType: "success",
        },
        {
          id: "8",
          action: "Isolated Spend Balance Settled",
          meta: "Neon Postgres atomic connection pool",
          status: "Reconciled",
          statusType: "active",
        },
        {
          id: "9",
          action: "Webhook Payload Signed & Sent",
          meta: "Multi-channel event stream · 0 retries",
          status: "Settled",
          statusType: "neutral",
        },
      ],
    },
  };

  const currentSystem = systems[activeTab] || systems.hospital;

  return (
    <section className="border-b border-[#E5E7EB] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] mb-6 shadow-2xs">
              <span className="size-2 rounded-full bg-[#8EDE35]" />
              <span className="font-mono text-[11px] sm:text-xs font-semibold text-[#4D9218] uppercase tracking-wider">
                Software · Websites · Mobile Applications
              </span>
            </div>

            <h1 className="text-[36px] sm:text-6xl lg:text-[68px] leading-[1.08] tracking-[-.05em] font-extrabold max-w-3xl text-[#181B1E] break-words">
              Better technology.
              <span className="block mt-1 sm:mt-1.5 font-extrabold text-[#181B1E]">
                Better{" "}
                <span className="bg-[#8EDE35] text-[#181B1E] px-3.5 py-0.5 rounded-xl inline-block shadow-xs">
                  business.
                </span>
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
              We engineer bespoke software systems, modern client portals, and resilient automated pipelines designed around your exact operational workflows.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#8EDE35] text-[#181B1E] font-bold px-7 sm:px-8 py-4 rounded-xl text-sm hover:bg-[#7ECC28] active:scale-[0.98] transition-all duration-150 shadow-sm text-center w-full sm:w-auto"
              >
                <span>Tell Us About Your Project</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 bg-[#181B1E] text-white font-medium px-7 sm:px-8 py-4 rounded-xl text-sm hover:bg-[#334655] active:scale-[0.98] transition-all duration-150 shadow-xs text-center w-full sm:w-auto"
              >
                <span>Explore Services &amp; Pricing</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-3 text-xs text-muted font-mono">
              <span className="inline-flex items-center gap-2">
                <Check className="size-4 text-[#4D9218] shrink-0" />
                <span>100% Bespoke Code Ownership</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="size-4 text-[#4D9218] shrink-0" />
                <span>Predictable Delivery &amp; Upfront Scope</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="size-4 text-[#4D9218] shrink-0" />
                <span>Ongoing SLA Engineering Support</span>
              </span>
            </div>
          </div>

          {/* High-Craft Interactive System Telemetry Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#181B1E] text-white border border-[#2D333B] rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden transition-all duration-200">
              {/* Window Chrome Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 select-none">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-white/20" />
                  <span className="size-2.5 rounded-full bg-white/20" />
                  <span className="size-2.5 rounded-full bg-white/20" />
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300">
                  <Lock className="size-3 text-[#8EDE35]" />
                  <span className="truncate max-w-[150px] sm:max-w-none">{currentSystem.route}</span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#8EDE35]/15 border border-[#8EDE35]/30 text-[#8EDE35] text-[10px] font-mono font-bold">
                  <span className="size-1.5 rounded-full bg-[#8EDE35]" />
                  <span>LIVE</span>
                </div>
              </div>

              {/* Interactive Segmented Control Tabs */}
              <div className="mt-4 p-1 rounded-xl bg-white/5 border border-white/10 grid grid-cols-3 gap-1">
                {Object.values(systems).map((sys) => {
                  const isActive = activeTab === sys.id;
                  return (
                    <button
                      key={sys.id}
                      type="button"
                      onClick={() => setActiveTab(sys.id)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-mono font-semibold transition-all duration-150 active:scale-[0.98] cursor-pointer text-center truncate ${
                        isActive
                          ? "bg-[#8EDE35] text-[#181B1E] shadow-sm font-bold"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {sys.tabLabel}
                    </button>
                  );
                })}
              </div>

              {/* System Overview Strip */}
              <div className="mt-5 pt-1 pb-3 flex items-center justify-between border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#8EDE35] block">
                    {currentSystem.client}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-0.5 tracking-tight">
                    {currentSystem.title}
                  </h3>
                </div>
              </div>

              {/* 3 Telemetry Stat Chips */}
              <div className="grid grid-cols-3 gap-2.5 my-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                    Read Latency
                  </span>
                  <span className="text-sm font-bold text-white font-mono mt-1 block">
                    {currentSystem.latency}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                    Throughput
                  </span>
                  <span className="text-sm font-bold text-[#8EDE35] font-mono mt-1 block truncate">
                    {currentSystem.throughput}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                    Architecture
                  </span>
                  <span className="text-sm font-bold text-white font-mono mt-1 block truncate">
                    Neon DB
                  </span>
                </div>
              </div>

              {/* Real Operational Event Stream */}
              <div className="space-y-2 mb-5">
                {currentSystem.events.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-3 hover:bg-white/[0.07] transition-colors duration-150"
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-white truncate">
                        {evt.action}
                      </p>
                      <p className="text-[11px] text-gray-400 font-mono mt-0.5 truncate">
                        {evt.meta}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                        evt.statusType === "success"
                          ? "bg-[#8EDE35] text-[#181B1E]"
                          : evt.statusType === "active"
                          ? "bg-white/15 text-white border border-white/20"
                          : "bg-white/10 text-gray-300"
                      }`}
                    >
                      {evt.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Inspection Link */}
              <div className="border-t border-white/10 pt-3.5 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <Database className="size-3.5 text-[#8EDE35]" />
                  <span>Neon Serverless Postgres</span>
                </span>
                <Link
                  href="/work"
                  className="font-bold text-[#8EDE35] hover:text-white transition-colors duration-150 inline-flex items-center gap-1 active:scale-[0.98]"
                >
                  <span>Inspect Case Studies</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
