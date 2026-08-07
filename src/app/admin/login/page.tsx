'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.detail || 'Invalid email or password.');
      }

      const data = await res.json();
      // Store JWT — for production, switch to httpOnly cookie via a Next.js API route
      localStorage.setItem('tpn_admin_token', data.access_token);
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1A23] flex items-center justify-center p-4">
      <div className="bg-[#0D3B5B]/80 border border-white/10 p-8 sm:p-10 rounded-2xl max-w-md w-full shadow-2xl backdrop-blur-xl space-y-6">

        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0F6A74] to-[#1FA971] mx-auto flex items-center justify-center shadow-lg">
            <i className="fa fa-shield text-white text-2xl" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            TECHPRONNET ADMIN
          </h1>
          <p className="text-xs text-slate-400">
            Enterprise Management Platform — Authorised Access Only
          </p>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/40 text-red-200 text-xs p-3 rounded-xl flex items-center gap-2">
            <i className="fa fa-exclamation-circle text-red-400" />
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 text-white">
          <div>
            <label htmlFor="admin-email" className="text-xs font-bold text-slate-300 block mb-1">
              Admin Email
            </label>
            <div className="relative">
              <i className="fa fa-envelope text-slate-400 absolute left-3 top-3.5 text-sm" />
              <input
                id="admin-email"
                type="email"
                required
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@techpronnet.com"
                className="w-full bg-[#0A1A23] border border-white/10 text-xs pl-9 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-[#1FA971] focus:outline-none placeholder:text-slate-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="admin-password" className="text-xs font-bold text-slate-300 block mb-1">
              Password
            </label>
            <div className="relative">
              <i className="fa fa-lock text-slate-400 absolute left-3 top-3.5 text-sm" />
              <input
                id="admin-password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#0A1A23] border border-white/10 text-xs pl-9 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-[#1FA971] focus:outline-none placeholder:text-slate-600"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1FA971] hover:bg-emerald-600 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <i className="fa fa-spinner fa-spin" />
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <i className="fa fa-arrow-right" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-[11px] text-slate-500">
          Protected by JWT authentication. Unauthorised access is logged and monitored.
        </p>
      </div>
    </div>
  );
}
