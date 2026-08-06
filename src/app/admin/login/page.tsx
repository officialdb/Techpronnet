'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Lock, Mail, ArrowRight } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@techpronnet.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await res.json();
      localStorage.setItem('tpn_admin_token', data.access_token);
      router.push('/admin/dashboard');
    } catch (err: any) {
      // Fallback client approval for initial demo
      if (email === 'admin@techpronnet.com' && password === 'admin123') {
        localStorage.setItem('tpn_admin_token', 'demo-token');
        router.push('/admin/dashboard');
      } else {
        setError('Invalid admin credentials. Use admin@techpronnet.com / admin123');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1A23] flex items-center justify-center p-4">
      <div className="bg-[#0D3B5B]/80 border border-white/10 p-8 sm:p-10 rounded-3xl max-w-md w-full shadow-2xl backdrop-blur-xl space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0F6A74] to-[#1FA971] p-0.5 mx-auto flex items-center justify-center shadow-lg">
            <div className="w-full h-full bg-[#0D3B5B] rounded-[14px] flex items-center justify-center text-[#1FA971]">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            TECHPRONNET ADMIN
          </h1>
          <p className="text-xs text-slate-300">
            Enterprise Operating System & Management Platform
          </p>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-200 text-xs p-3 rounded-xl">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 text-white">
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Admin Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0A1A23] border border-white/10 text-xs pl-10 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-[#1FA971] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0A1A23] border border-white/10 text-xs pl-10 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-[#1FA971] focus:outline-none"
              />
            </div>
          </div>

          <div className="text-[11px] text-slate-400">
            Demo Credentials: <span className="text-[#F5B400] font-mono">admin@techpronnet.com</span> / <span className="text-[#F5B400] font-mono">admin123</span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1FA971] hover:bg-emerald-600 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
          >
            {isLoading ? <span>Authenticating...</span> : (
              <>
                <span>Sign In to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
