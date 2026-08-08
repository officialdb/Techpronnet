import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchServiceBySlug, fetchServices } from '@/lib/api';
import type { Metadata } from 'next';

export const revalidate = 60;

// Pre-generate slugs at build time for static rendering
export async function generateStaticParams() {
  const services = await fetchServices();
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await fetchServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found | Techpronnet' };
  return {
    title: `${service.name} | Techpronnet Technologies`,
    description: service.tagline,
  };
}

const domainGradients: Record<string, string> = {
  software:      'from-[#0D3B5B] to-[#0F6A74]',
  security:      'from-[#1a1a2e] to-[#16213e]',
  solar:         'from-[#b45309] to-[#0D3B5B]',
  networking:    'from-[#0D3B5B] to-[#1e3a5f]',
  'it-support':  'from-[#374151] to-[#0D3B5B]',
  tracking:      'from-[#064e3b] to-[#0D3B5B]',
  'street-power':'from-[#78350f] to-[#0D3B5B]',
};

const domainAccent: Record<string, string> = {
  software:      '#1FA971',
  security:      '#3b82f6',
  solar:         '#F5B400',
  networking:    '#1FA971',
  'it-support':  '#6366f1',
  tracking:      '#10b981',
  'street-power':'#f59e0b',
};

// Map each domain to its hero image in /public
const domainImages: Record<string, string> = {
  software:       '/img-software.jpg',
  security:       '/img-cctv-security.jpg',
  solar:          '/img-solar.jpg',
  networking:     '/img-networking.jpg',
  'it-support':   '/img-it-support.jpg',
  tracking:       '/img-cctv-security.jpg',      // closest available
  'street-power': '/img-solar.jpg',              // closest available
};

const whyChoosePoints = [
  { icon: 'fa-clock-o',   title: 'Rapid Deployment',     desc: 'From survey to completion, our project timelines are tight and fully communicated upfront.' },
  { icon: 'fa-shield',    title: 'Quality Guaranteed',   desc: 'Every installation and deployment is backed by workmanship warranties and post-delivery SLA support.' },
  { icon: 'fa-users',     title: 'Dedicated Team',       desc: 'Certified engineers, project managers, and 24/7 support technicians at every stage.' },
  { icon: 'fa-bar-chart', title: 'Proven ROI',           desc: 'Our clients see measurable operational improvements within the first 3 months of deployment.' },
];

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await fetchServiceBySlug(slug);

  if (!service) notFound();

  const features: string[] = JSON.parse(service.features_json || '[]');
  const gradient = domainGradients[service.domain] || domainGradients.software;
  const accent   = domainAccent[service.domain] || '#1FA971';
  const heroImage = domainImages[service.domain] || '/img-software.jpg';

  return (
    <div className="bg-white text-[#0A1A23]">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative text-white overflow-hidden min-h-[600px] lg:min-h-[680px] flex items-center">

        {/* Full-bleed background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Strong dark gradient overlay — left heavy for text legibility */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-90`}
        />

        {/* Subtle noise / vignette layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        {/* Decorative accent glow */}
        <div
          className="absolute top-10 right-[15%] w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none hidden lg:block"
          style={{ background: accent }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white font-semibold">{service.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* ── Left: Text Content ── */}
            <div className="space-y-6">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                {service.name}
              </h1>

              <p className="text-lg text-white/85 leading-relaxed font-medium">
                {service.tagline}
              </p>

              <p className="text-sm text-white/70 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/quote?domain=${service.domain}`}
                  className="inline-flex items-center gap-2 bg-[#1FA971] hover:bg-emerald-500 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                >
                  Get a Free Quote <i className="fa fa-arrow-right" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-xl backdrop-blur-sm transition-all"
                >
                  Talk to an Engineer
                </Link>
              </div>
            </div>

            {/* ── Right: Image Panel with Pricing Card ── */}
            <div className="relative hidden lg:block">
              {/* Framed image window */}
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl h-[380px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={heroImage}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                {/* Bottom gradient fade */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Floating price badge on top of image */}
                <div className="absolute bottom-5 left-5 right-5 bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-0.5">Starting From</div>
                    <div className="text-3xl font-extrabold" style={{ color: accent }}>
                      {service.pricing_starting || 'Custom'}
                    </div>
                  </div>
                  <Link
                    href={`/quote?domain=${service.domain}`}
                    className="text-xs font-extrabold px-4 py-2.5 rounded-xl text-white transition-all hover:opacity-90 shadow-lg"
                    style={{ background: accent }}
                  >
                    Get Quote →
                  </Link>
                </div>
              </div>

              {/* Stats strip below image */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {['Free Site Survey', 'SLA Warranty', '24/7 Support'].map((tag) => (
                  <div key={tag} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-2.5 flex items-center justify-center gap-1.5">
                    <i className="fa fa-check-circle text-[#1FA971] text-xs shrink-0" />
                    <span className="text-[10px] font-bold text-white/80 uppercase tracking-wide">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Mobile: Compact pricing card ── */}
            <div className="lg:hidden bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-white/60">Starting Assessment Price</div>
              <div className="text-4xl font-extrabold" style={{ color: accent }}>
                {service.pricing_starting || 'Custom'}
              </div>
              <div className="space-y-2 text-left">
                {['Free Initial Engineering Survey', 'Certified Installation Engineers', 'Hardware Warranty Included', '24/7 Post-Installation Support'].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-xs text-white/80">
                    <i className="fa fa-check-circle text-[#1FA971]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <Link
                href={`/quote?domain=${service.domain}`}
                className="block w-full py-3.5 rounded-xl font-extrabold text-sm text-white transition-all hover:opacity-90"
                style={{ background: accent }}
              >
                Configure Your Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F6F6F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D3B5B]">
              What&apos;s Included in This Service
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              A full breakdown of every deliverable included under the {service.name} package.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature: string, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md hover:border-[#1FA971]/30 transition-all group"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white text-sm mt-0.5"
                  style={{ background: accent }}
                >
                  <i className="fa fa-check" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0D3B5B] group-hover:text-[#1FA971] transition-colors">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Techpronnet ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D3B5B]">
              Why Choose Techpronnet?
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              The difference between us and the rest. Built into every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((point) => (
              <div key={point.title} className="text-center space-y-3 p-6 rounded-2xl border border-slate-100 hover:border-[#1FA971]/30 hover:shadow-md transition-all">
                <div
                  className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center text-white text-lg"
                  style={{ background: accent }}
                >
                  <i className={`fa ${point.icon}`} />
                </div>
                <h3 className="font-extrabold text-[#0D3B5B] text-sm">{point.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className={`bg-gradient-to-br ${gradient} py-20 relative overflow-hidden`}>
        {/* Reuse hero image as subtle CTA background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">
            Talk to one of our senior engineers today. We&apos;ll assess your requirements, recommend the right solution, and send you a detailed proposal at zero cost.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/quote?domain=${service.domain}`}
              className="inline-flex items-center gap-2 font-extrabold text-sm px-8 py-4 rounded-xl shadow-lg text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: accent }}
            >
              Request a Quote <i className="fa fa-arrow-right" />
            </Link>
            <a
              href="https://wa.me/2348031234567?text=Hello%20Techpronnet%2C%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold text-sm px-8 py-4 rounded-xl hover:bg-white/20 transition-all"
            >
              <i className="fa fa-whatsapp" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Back Link ─────────────────────────────────────────────────────── */}
      <div className="py-8 text-center bg-[#F6F6F6]">
        <Link href="/services" className="text-xs font-bold text-[#0D3B5B] hover:text-[#1FA971] transition-colors inline-flex items-center gap-2">
          <i className="fa fa-arrow-left" /> View All Services
        </Link>
      </div>

    </div>
  );
}
