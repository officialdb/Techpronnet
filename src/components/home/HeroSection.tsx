'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const phrases = [
    "Enterprise Software & AI",
    "Solar Microgrids & Inverters",
    "CCTV & Biometric Security",
    "Wi-Fi 6 Mesh & Networking",
    "24/7 Managed IT Support"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[textIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000; // Pause at end of phrase
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % phrases.length);
      typingSpeed = 500;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const currentText = phrases[textIndex].substring(0, charIndex);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: 'fa-check-circle' },
    { number: '99.8%', label: 'CSAT Uptime Rating', icon: 'fa-line-chart' },
    { number: '5.0 ★', label: 'Google Business Score', icon: 'fa-star' },
    { number: '24/7', label: 'Emergency IT Hotline', icon: 'fa-headphones' }
  ];

  return (
    <section className="relative bg-[#0D3B5B] text-white min-h-[calc(100vh-80px)] flex flex-col justify-center border-b border-white/10 py-16 overflow-hidden">
      
      {/* Geometric SVG Background Patterns & Node Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Geometric Hexagonal Grid Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-pattern" width="60" height="103.923" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z M30 103.923 L60 86.602 L60 51.962 L30 69.282 L0 51.962 L0 86.602 Z" fill="none" stroke="#1FA971" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>

        {/* Geometric Circuit Connection Lines & Glowing Nodes */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
          {/* Constellation / Tech Nodes */}
          <line x1="100" y1="150" x2="300" y2="80" stroke="#1FA971" strokeWidth="1.5" strokeDasharray="6,6" />
          <line x1="300" y1="80" x2="550" y2="200" stroke="#F5B400" strokeWidth="1" />
          <line x1="550" y1="200" x2="900" y2="100" stroke="#1FA971" strokeWidth="1.5" />
          <line x1="900" y1="100" x2="1100" y2="280" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,4" />
          
          <line x1="150" y1="600" x2="400" y2="520" stroke="#1FA971" strokeWidth="1.5" />
          <line x1="400" y1="520" x2="700" y2="650" stroke="#F5B400" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="700" y1="650" x2="1050" y2="550" stroke="#1FA971" strokeWidth="1.5" />

          {/* Geometric Circles & Node Pulsing Anchors */}
          <circle cx="300" cy="80" r="4" fill="#1FA971" />
          <circle cx="550" cy="200" r="6" fill="#F5B400" className="animate-ping" />
          <circle cx="550" cy="200" r="4" fill="#F5B400" />
          <circle cx="900" cy="100" r="5" fill="#1FA971" />
          <circle cx="400" cy="520" r="4" fill="#1FA971" />
          <circle cx="700" cy="650" r="5" fill="#F5B400" />
        </svg>

        {/* Floating Geometric Wireframe Shapes */}
        <div className="absolute top-16 left-10 w-32 h-32 border border-emerald-400/20 rotate-45 animate-spin-slow pointer-events-none" style={{ animationDuration: '30s' }} />
        <div className="absolute bottom-20 left-1/4 w-48 h-48 border border-amber-400/15 rotate-12 pointer-events-none" />
        <div className="absolute top-1/3 right-12 w-40 h-40 border border-white/10 rounded-full border-dashed animate-spin-slow pointer-events-none" style={{ animationDuration: '45s' }} />

        {/* Gradient Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#1FA971]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0F6A74]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">

        {/* Main Hero Body */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]" data-aos="fade-up">
            Engineering Next-Gen <br />
            <span className="text-[#1FA971]">Tech Solutions</span> For <br />
            Business &amp; Home
          </h1>

          {/* High-Tech Typing Effect Subheadline */}
          <div className="h-16 sm:h-12 flex items-center justify-center" data-aos="fade-up" data-aos-delay="150">
            <div className="inline-block bg-white/10 px-6 py-2.5 rounded-xl border border-white/15 backdrop-blur-md shadow-inner text-base sm:text-xl font-mono text-emerald-300">
              <span className="text-slate-400 font-sans mr-2 text-sm sm:text-base">Specializing in:</span>
              <span className="text-white font-bold">{currentText}</span>
              <span className="animate-pulse text-[#1FA971] font-bold ml-0.5">|</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="250">
            Techpronnet Technologies integrates software development, solar microgrid energy, high-definition CCTV security, structured networking, and 24/7 IT support into one seamless digital operating system.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 pt-4 justify-center" data-aos="fade-up" data-aos-delay="350">
            <Link
              href="/quote"
              className="w-full sm:w-auto bg-[#1FA971] hover:bg-emerald-600 text-white font-extrabold text-base sm:text-lg px-9 py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 hover:scale-105"
            >
              <span>Request a Free Quote</span>
              <i className="fa fa-arrow-right text-sm" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md hover:scale-105"
            >
              <span>Explore 5 Solution Domains</span>
            </Link>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto" data-aos="zoom-in" data-aos-delay="450">
          {stats.map((item, idx) => (
            <div key={idx} className="space-y-1 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm hover:border-[#1FA971] transition-all">
              <div className="flex justify-center mb-1 text-[#1FA971]">
                <i className={`fa ${item.icon} text-lg`} />
              </div>
              <div className="font-numbers text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {item.number}
              </div>
              <div className="text-xs text-slate-300 uppercase tracking-wider font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
