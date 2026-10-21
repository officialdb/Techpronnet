"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Lock, Clock, Mail, Phone, FileText } from "lucide-react";

export function PrivacyPolicyContent() {
  const sections = [
    { id: "overview", title: "1. Overview & Commitment" },
    { id: "collection", title: "2. Information We Collect" },
    { id: "usage", title: "3. How We Use Your Data" },
    { id: "database-security", title: "4. Database & Infrastructure Security" },
    { id: "nda-confidentiality", title: "5. Client NDAs & IP Protection" },
    { id: "cookies", title: "6. Cookies & Tracking Technologies" },
    { id: "third-parties", title: "7. Third-Party Service Providers" },
    { id: "retention", title: "8. Data Retention & Erasure" },
    { id: "your-rights", title: "9. Your Data Rights" },
    { id: "contact-dpo", title: "10. Contacting Our Privacy Team" },
  ];

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="relative rounded-3xl bg-[#8EDE35] border border-[#7ECC28] overflow-hidden py-12 sm:py-16 px-5 sm:px-10 lg:px-12 text-center shadow-sm">
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181B1E]">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#181B1E]/80 mt-3 font-mono">
              <Link href="/" className="hover:text-[#181B1E] transition-colors">
                Home
              </Link>
              <ChevronRight className="size-3.5 opacity-60" />
              <span className="font-semibold text-[#181B1E]">Privacy Policy</span>
            </div>
            <p className="mt-4 text-xs font-mono text-[#181B1E]/80">
              Last Updated &amp; Effective: October 2026 · Version 2.4
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Legal Content (NO CARDS - Pure Swiss editorial typography) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Sticky Table of Contents on Desktop */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 p-6 rounded-2xl bg-white border border-[#E5E7EB] space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D9218] block">
                Table of Contents
              </span>
              <nav className="space-y-2 text-xs font-mono text-muted">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block hover:text-[#181B1E] hover:underline transition-colors py-1 truncate"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-[#E5E7EB] text-xs font-mono text-muted space-y-2">
                <p className="flex items-center gap-2">
                  <ShieldCheck className="size-3.5 text-[#4D9218]" />
                  <span>TLS 1.3 &amp; AES-256 Encrypted</span>
                </p>
                <p className="flex items-center gap-2">
                  <Lock className="size-3.5 text-[#4D9218]" />
                  <span>Client Confidentiality Priority</span>
                </p>
              </div>
            </div>
          </aside>

          {/* Right Main Editorial Content */}
          <main className="lg:col-span-8 space-y-12 text-[#181B1E]">
            {/* 1. Overview */}
            <section id="overview" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                1. Overview &amp; Commitment
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Techpronnet Technologies (&ldquo;Techpronnet&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is an enterprise software engineering company that builds custom web platforms, mobile applications, hospital operating systems, and workflow automation for commercial enterprises.
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We respect your personal privacy and proprietary business secrets. This Privacy Policy details how we collect, process, store, and protect information when you visit our website (<code>techpronnet.com</code>), submit project inquiries, execute development contracts, or interface with systems engineered by our team.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section id="collection" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                2. Information We Collect
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We only gather information directly necessary to evaluate project feasibility, deliver software engineering services, and fulfill commercial contracts:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted pl-4 list-disc marker:text-[#4D9218]">
                <li>
                  <strong>Contact &amp; Identification Data:</strong> Full name, professional email address, telephone number, business or organization name, and country of operation provided via our project enquiry forms.
                </li>
                <li>
                  <strong>Project Specifications:</strong> Functional briefs, technical diagrams, existing system descriptions, data flows, and feature wishlists submitted for architectural evaluation.
                </li>
                <li>
                  <strong>Commercial Contract Data:</strong> Invoices, billing entities, tax identification numbers, and payment confirmations processed for milestone delivery.
                </li>
                <li>
                  <strong>Technical Telemetry:</strong> Standard non-identifying server request logs including IP address, browser type, referring URLs, and response timestamps to ensure platform uptime and prevent automated denial-of-service abuse.
                </li>
              </ul>
            </section>

            {/* 3. How We Use Your Data */}
            <section id="usage" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                3. How We Use Your Data
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We process collected data exclusively under legitimate commercial interests and contractual necessity:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted pl-4 list-disc marker:text-[#4D9218]">
                <li>To evaluate technical feasibility, estimate sprint effort, and prepare binding project proposals.</li>
                <li>To communicate sprint progress, coordinate milestone deployments, and deliver ongoing maintenance.</li>
                <li>To generate unique enquiry reference identifiers (e.g. <code>TPN-YYYYMM-XXXX</code>) tracking correspondence.</li>
                <li>To maintain legal and financial audit records required by commercial regulatory bodies.</li>
              </ul>
              <p className="text-xs sm:text-sm font-semibold text-[#181B1E] bg-[#FAF9F6] border border-[#E5E7EB] p-4 rounded-xl">
                We strictly DO NOT sell, rent, monetize, or broker personal information or client business data to advertising brokers or marketing intermediaries under any circumstance.
              </p>
            </section>

            {/* 4. Database Security */}
            <section id="database-security" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                4. Database &amp; Infrastructure Security
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Our technology stack is built with defensive architectural principles:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted pl-4 list-disc marker:text-[#4D9218]">
                <li>
                  <strong>Neon Serverless PostgreSQL:</strong> All persistent inquiry and operational records reside in isolated PostgreSQL clusters encrypted at rest via AES-256. Database access is strictly governed by least-privilege connection strings never exposed to client-side bundles.
                </li>
                <li>
                  <strong>Encryption In Transit:</strong> All HTTP traffic is enforced over TLS 1.3 encryption with strict HTTPS redirects and HSTS headers.
                </li>
                <li>
                  <strong>Input Validation &amp; Sanitization:</strong> Inquiries are strictly validated using Zod schemas with stringent length bounds on the server to prevent SQL injection, cross-site scripting (XSS), or buffer overflows.
                </li>
                <li>
                  <strong>Continuous Backups:</strong> Point-in-time recovery and snapshot replication ensure data redundancy against system failures.
                </li>
              </ul>
            </section>

            {/* 5. Client NDAs & IP Protection */}
            <section id="nda-confidentiality" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                5. Client NDAs &amp; Intellectual Property Protection
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                As a software engineering partner to clinical hospitals, legal practices, and fintech startups, we treat all client business logic, patient protocols, trade secrets, and proprietary database architectures as strictly confidential.
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We execute bilateral Non-Disclosure Agreements (NDAs) prior to deep architectural inspections. Our engineers are legally bound by strict confidentiality clauses that survive the completion of any commercial engagement.
              </p>
            </section>

            {/* 6. Cookies */}
            <section id="cookies" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                6. Cookies &amp; Tracking Technologies
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Techpronnet operates a clean, privacy-respecting website. We do not use third-party behavioral advertising trackers, invasive profiling cookies, or cross-site fingerprinting scripts.
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We use only strictly necessary session cookies required for form state handling, CSRF defense tokens, and responsive UI preferences (e.g. navigation drawer state).
              </p>
            </section>

            {/* 7. Third Parties */}
            <section id="third-parties" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                7. Third-Party Service Providers
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                To host and deliver reliable software, we partner with premier cloud infrastructure providers:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted pl-4 list-disc marker:text-[#4D9218]">
                <li><strong>Neon Inc.:</strong> Serverless PostgreSQL database infrastructure and connection pooling.</li>
                <li><strong>Vercel Inc.:</strong> High-performance Next.js hosting, serverless edge compute, and CDN routing.</li>
                <li><strong>WhatsApp / Meta Business:</strong> Direct client communication channel when initiated by the client.</li>
              </ul>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Each infrastructure partner complies with international standards including SOC 2 Type II, ISO 27001, and GDPR.
              </p>
            </section>

            {/* 8. Retention & Erasure */}
            <section id="retention" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                8. Data Retention &amp; Erasure
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We retain project inquiry records only for the duration required to evaluate feasibility and fulfill ongoing customer service obligations. Active client project databases and git repositories are preserved according to the terms of your commercial Statement of Work.
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                If an inquiry does not result in an active contract, you may request complete deletion of your records from our systems at any time.
              </p>
            </section>

            {/* 9. Your Rights */}
            <section id="your-rights" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                9. Your Data Rights
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Depending on your jurisdiction (including Nigeria Data Protection Act 2023, GDPR, and international privacy regimes), you have the right to:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted pl-4 list-disc marker:text-[#4D9218]">
                <li>Access all personal data and inquiry records maintained by Techpronnet.</li>
                <li>Request rectification of incorrect contact or organizational records.</li>
                <li>Request permanent erasure of your data (&ldquo;Right to be Forgotten&rdquo;).</li>
                <li>Restrict or object to processing of your information.</li>
                <li>Request a portable export of your data in standard JSON or CSV format.</li>
              </ul>
            </section>

            {/* 10. Contacting DPO */}
            <section id="contact-dpo" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                10. Contacting Our Privacy Team
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                If you have questions regarding this Privacy Policy, wish to exercise your data rights, or require an executed NDA prior to an architecture consultation, please contact our Data Protection Officer:
              </p>

              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-7 space-y-3 font-mono text-xs sm:text-sm">
                <p className="font-bold text-[#181B1E] text-base font-sans">
                  Techpronnet Technologies — Data Protection &amp; Legal
                </p>
                <p className="flex items-center gap-2 text-muted">
                  <Mail className="size-4 text-[#4D9218]" />
                  <span>Email: contact@techpronnet.com (Subject: &ldquo;Privacy &amp; Data Request&rdquo;)</span>
                </p>
                <p className="flex items-center gap-2 text-muted">
                  <Phone className="size-4 text-[#4D9218]" />
                  <span>Direct: +234 706 265 4567</span>
                </p>
                <p className="text-muted text-xs pt-2 border-t border-[#E5E7EB]">
                  Headquarters: Abuja &amp; Lagos, Nigeria · Worldwide Remote Delivery
                </p>
              </div>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}