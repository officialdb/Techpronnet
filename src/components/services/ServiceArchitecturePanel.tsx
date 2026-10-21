"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Cpu, Database, Server, Smartphone, Globe, Shield, Terminal, Zap } from "lucide-react";

export interface ArchitectureLayer {
  step: string;
  label: string;
  desc: string;
  metric?: string;
}

export interface ServiceArchitecturePanelProps {
  systemCode: string;
  runtimeBadge: string;
  status: string;
  layers: ArchitectureLayer[];
  techStack: string[];
  specs: { label: string; value: string }[];
  caseStudyLink?: {
    client: string;
    href: string;
  };
}

export function ServiceArchitecturePanel({
  systemCode,
  runtimeBadge,
  status,
  layers,
  techStack,
  specs,
  caseStudyLink,
}: ServiceArchitecturePanelProps) {
  return (
    <div className="w-full border border-line bg-white shadow-xs overflow-hidden rounded-xs transition-all hover:border-navy/50">
      {/* Top Architecture Console Header */}
      <div className="bg-[#F3F2EC] px-4 py-2.5 border-b border-line flex flex-wrap items-center justify-between gap-3 text-xs select-none">
        <div className="flex items-center gap-2">
          <Terminal className="size-3.5 text-navy" />
          <span className="font-mono text-[11px] font-semibold text-ink uppercase tracking-wider">
            {systemCode}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] text-muted uppercase">
            {status}
          </span>
          <span className="hidden sm:inline-block text-line">|</span>
          <span className="hidden sm:inline-block font-mono text-[10px] text-navy font-medium bg-sand px-2 py-0.5 border border-line">
            {runtimeBadge}
          </span>
        </div>
      </div>

      {/* Architecture Stages / Layers */}
      <div className="p-5 sm:p-6 bg-paper space-y-3.5">
        <div className="space-y-2.5">
          {layers.map((layer, idx) => (
            <div
              key={layer.step}
              className="bg-white p-3.5 border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors hover:border-navy/40"
            >
              <div className="flex items-start gap-3">
                <span className="font-mono text-[10px] font-bold text-navy bg-sand/80 px-2 py-1 border border-line shrink-0 mt-0.5">
                  {layer.step}
                </span>
                <div>
                  <h4 className="text-xs font-semibold text-ink tracking-tight">
                    {layer.label}
                  </h4>
                  <p className="text-[11px] text-muted leading-relaxed mt-0.5">
                    {layer.desc}
                  </p>
                </div>
              </div>

              {layer.metric && (
                <div className="sm:text-right shrink-0">
                  <span className="inline-block font-mono text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    {layer.metric}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-3 border-t border-line flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-mono text-muted uppercase mr-1">
            Core Stack:
          </span>
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] bg-white text-ink border border-line px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Technical Spec Telemetry Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-line border-t border-line bg-white text-xs">
        {specs.map((spec) => (
          <div key={spec.label} className="p-3">
            <span className="text-[10px] font-mono text-muted block uppercase">
              {spec.label}
            </span>
            <span className="font-mono text-[11px] font-semibold text-ink mt-0.5 block truncate">
              {spec.value}
            </span>
          </div>
        ))}
      </div>

      {/* Case Study Reference Strip Linking to /work */}
      {caseStudyLink && (
        <div className="px-4 py-2.5 border-t border-line bg-sand/40 flex items-center justify-between text-xs font-mono">
          <span className="text-muted text-[11px] truncate mr-2">
            Production Deployment:
          </span>
          <Link
            href={caseStudyLink.href}
            className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-navy hover:underline transition-colors shrink-0 text-[11px]"
          >
            <span>{caseStudyLink.client}</span>
            <ArrowUpRight className="size-3 text-navy" />
          </Link>
        </div>
      )}
    </div>
  );
}
