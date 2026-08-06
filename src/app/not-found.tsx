import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#0A1A23] text-white flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="font-numbers text-8xl font-extrabold text-[#F5B400] tracking-tight">404</div>
        <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
        <p className="text-xs text-slate-300">
          The technology page or resource you are looking for has moved or does not exist.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Link
            href="/"
            className="bg-[#1FA971] text-white font-bold text-xs px-6 py-3 rounded-xl shadow flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
