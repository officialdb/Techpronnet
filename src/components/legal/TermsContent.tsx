"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, FileCheck, CheckCircle2, Mail, Phone, Scale } from "lucide-react";

export function TermsContent() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "scope", title: "2. Engineering Scope & SOWs" },
    { id: "ip-ownership", title: "3. 100% Code Ownership & IP" },
    { id: "payments", title: "4. Fees, Invoicing & Milestones" },
    { id: "client-duties", title: "5. Client Obligations & Reviews" },
    { id: "warranty", title: "6. 30-Day Warranty & SLAs" },
    { id: "confidentiality", title: "7. Confidentiality & NDAs" },
    { id: "liability", title: "8. Limitation of Liability" },
    { id: "termination", title: "9. Termination & Code Handover" },
    { id: "governing-law", title: "10. Governing Law & Jurisdiction" },
  ];

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="relative rounded-3xl bg-[#8EDE35] border border-[#7ECC28] overflow-hidden py-12 sm:py-16 px-5 sm:px-10 lg:px-12 text-center shadow-sm">
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181B1E]">
              Terms &amp; Conditions
            </h1>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#181B1E]/80 mt-3 font-mono">
              <Link href="/" className="hover:text-[#181B1E] transition-colors">
                Home
              </Link>
              <ChevronRight className="size-3.5 opacity-60" />
              <span className="font-semibold text-[#181B1E]">Terms &amp; Conditions</span>
            </div>
            <p className="mt-4 text-xs font-mono text-[#181B1E]/80">
              Commercial Engineering Standard · Effective October 2026 · Version 2.2
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Legal Content (NO CARDS - Swiss Editorial Format) */}
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
                  <CheckCircle2 className="size-3.5 text-[#4D9218]" />
                  <span>100% Client Code Ownership</span>
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="size-3.5 text-[#4D9218]" />
                  <span>30-Day Defect Warranty Included</span>
                </p>
              </div>
            </div>
          </aside>

          {/* Right Main Editorial Content */}
          <main className="lg:col-span-8 space-y-12 text-[#181B1E]">
            {/* 1. Acceptance of Terms */}
            <section id="acceptance" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                These Terms and Conditions (&ldquo;Agreement&rdquo;) govern the professional software engineering, systems architecture, cloud infrastructure, and maintenance services provided by Techpronnet Technologies (&ldquo;Techpronnet&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) to clients (&ldquo;Client&rdquo;, &ldquo;you&rdquo;).
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                By signing a Statement of Work, executing a project contract, approving a development milestone, or accessing systems engineered by Techpronnet, you acknowledge and agree to be bound by these Terms.
              </p>
            </section>

            {/* 2. Engineering Scope & SOW */}
            <section id="scope" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                2. Engineering Scope &amp; Statements of Work
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                All engineering engagements are executed pursuant to a mutually executed Statement of Work (&ldquo;SOW&rdquo;) or formal project proposal. Each SOW details:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted pl-4 list-disc marker:text-[#4D9218]">
                <li>Architectural specifications, user personas, and data schema requirements.</li>
                <li>Key milestone deliverables, acceptance criteria, and demo dates.</li>
                <li>Fixed-price milestone disbursements or dedicated sprint budget.</li>
                <li>Third-party integrations, API dependencies, and infrastructure environments.</li>
              </ul>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Any work outside the written SOW constitutes a Change Order and will be estimated and scheduled transparently before development commences.
              </p>
            </section>

            {/* 3. 100% Code Ownership & IP Assignment */}
            <section id="ip-ownership" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                3. 100% Code Ownership &amp; Intellectual Property
              </h2>
              <div className="bg-[#FAF9F6] border-l-4 border-[#8EDE35] p-5 rounded-r-xl space-y-2">
                <span className="font-mono text-xs font-bold uppercase text-[#4D9218] block">
                  The Techpronnet Guarantee
                </span>
                <p className="text-sm font-bold text-[#181B1E]">
                  You own 100% of your custom software. We do not hold code hostage or charge proprietary ongoing software license fees.
                </p>
              </div>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Upon receipt of full payment for the relevant milestone deliverables, Techpronnet irrevocably assigns to Client all right, title, and interest in and to all bespoke source code, database schemas, API definitions, user interface designs, and documentation developed specifically for Client.
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Standard open-source libraries (e.g. Next.js, React, Tailwind CSS, Lucide icons, PostgreSQL drivers) remain subject to their respective MIT or Apache permissive licenses.
              </p>
            </section>

            {/* 4. Fees, Invoicing & Milestones */}
            <section id="payments" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                4. Fees, Invoicing &amp; Milestones
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Our projects follow predictable milestone releases:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted pl-4 list-disc marker:text-[#4D9218]">
                <li><strong>Initial Commitment Deposit:</strong> Mobilizes engineering resources, provisions staging infrastructure, and initiates technical discovery.</li>
                <li><strong>Milestone Payments:</strong> Invoiced upon delivery of verified functional milestones and walkthrough demonstrations.</li>
                <li><strong>Final Production Cutover:</strong> Invoiced prior to production server deployment and full git repository transfer.</li>
              </ul>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Invoices are due within fourteen (14) calendar days of receipt. Cloud hosting infrastructure costs (Neon PostgreSQL, domain registration, edge hosting) are paid directly by Client to respective service providers.
              </p>
            </section>

            {/* 5. Client Obligations */}
            <section id="client-duties" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                5. Client Obligations &amp; Approvals
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Predictable delivery requires active partnership. Client agrees to:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted pl-4 list-disc marker:text-[#4D9218]">
                <li>Designate a primary product owner with authority to make functional and architectural decisions.</li>
                <li>Provide third-party API credentials, domain access, and design assets in a timely manner.</li>
                <li>Review and provide written feedback on milestone demos within seven (7) business days of delivery.</li>
              </ul>
            </section>

            {/* 6. 30-Day Warranty & SLAs */}
            <section id="warranty" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                6. 30-Day Warranty &amp; Service Level Agreements
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Techpronnet warrants that all software delivered under a Statement of Work will conform in all material respects to the agreed technical specifications for a period of thirty (30) calendar days following production launch (&ldquo;Warranty Period&rdquo;).
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                During the Warranty Period, any reproducible software defects, database errors, or broken workflows will be corrected promptly at zero additional charge. Ongoing support beyond 30 days is provided under our dedicated Engineering SLA Maintenance agreements.
              </p>
            </section>

            {/* 7. Confidentiality & NDAs */}
            <section id="confidentiality" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                7. Confidentiality &amp; Non-Disclosure
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Both parties agree that all confidential information, business records, patient data, financial models, and trade secrets disclosed during the engagement shall be maintained in strict confidence and not disclosed to any unauthorized third party without prior written consent.
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                This confidentiality obligation survives the termination of any project engagement indefinitely.
              </p>
            </section>

            {/* 8. Limitation of Liability */}
            <section id="liability" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                8. Limitation of Liability
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                To the maximum extent permitted by applicable commercial law, neither party shall be liable for indirect, incidental, consequential, special, or punitive damages (including loss of profits, data corruption, or business interruption) arising out of or related to this Agreement.
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Techpronnet&rsquo;s total aggregate liability under any Statement of Work shall not exceed the total fees paid by Client to Techpronnet under that specific Statement of Work during the preceding six (6) months.
              </p>
            </section>

            {/* 9. Termination & Code Handover */}
            <section id="termination" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                9. Termination &amp; Code Handover
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Either party may terminate an SOW upon fourteen (14) days written notice if the other party breaches any material term and fails to cure such breach within the notice window.
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Upon termination, Client shall pay for all completed milestones and work performed up to the termination date. Techpronnet shall immediately transfer all source code, database dumps, and assets corresponding to paid milestones.
              </p>
            </section>

            {/* 10. Governing Law & Jurisdiction */}
            <section id="governing-law" className="scroll-mt-24 space-y-4 pt-6 border-t border-[#E5E7EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#181B1E]">
                10. Governing Law &amp; Jurisdiction
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                This Agreement shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without giving effect to conflict of laws principles. The parties agree to resolve disputes in good faith through senior executive mediation before initiating arbitration.
              </p>

              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-7 space-y-3 font-mono text-xs sm:text-sm">
                <p className="font-bold text-[#181B1E] text-base font-sans">
                  Techpronnet Technologies — Legal &amp; Commercial Contracts
                </p>
                <p className="flex items-center gap-2 text-muted">
                  <Mail className="size-4 text-[#4D9218]" />
                  <span>Email: contact@techpronnet.com (Subject: &ldquo;Legal &amp; Contracts&rdquo;)</span>
                </p>
                <p className="flex items-center gap-2 text-muted">
                  <Phone className="size-4 text-[#4D9218]" />
                  <span>Phone: +234 706 265 4567</span>
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