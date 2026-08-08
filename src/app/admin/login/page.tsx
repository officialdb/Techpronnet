'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { adminLoginSchema, type AdminLoginInput } from '@/lib/validations/admin';

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdminLoginInput>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: AdminLoginInput) => {
    setError('');
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.detail || 'Invalid email or password.');
      }

      const resData = await res.json();
      localStorage.setItem('tpn_admin_token', resData.access_token);
      document.cookie = `tpn_admin_token=${resData.access_token}; path=/; max-age=28800; SameSite=Strict`;
      
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials and try again.');
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
            Enterprise Management Platform. Authorised Access Only
          </p>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/40 text-red-200 text-xs p-3 rounded-xl flex items-center gap-2">
            <i className="fa fa-exclamation-circle text-red-400" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-white">
          <div>
            <label htmlFor="admin-email" className="text-xs font-bold text-slate-300 block mb-1">
              Admin Email
            </label>
            <div className="relative">
              <i className="fa fa-envelope text-slate-400 absolute left-3 top-3.5 text-sm" />
              <input
                id="admin-email"
                type="email"
                autoComplete="username"
                {...register('email')}
                placeholder="you@techpronnet.com"
                className={`w-full bg-[#0A1A23] border text-xs pl-9 pr-3 py-3 rounded-xl focus:ring-2 focus:outline-none placeholder:text-slate-600 ${
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-[#1FA971]'
                }`}
              />
            </div>
            {errors.email && <p className="text-red-400 text-[10px] mt-1 font-bold">{errors.email.message}</p>}
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
                autoComplete="current-password"
                {...register('password')}
                placeholder="••••••••"
                className={`w-full bg-[#0A1A23] border text-xs pl-9 pr-3 py-3 rounded-xl focus:ring-2 focus:outline-none placeholder:text-slate-600 ${
                  errors.password ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-[#1FA971]'
                }`}
              />
            </div>
            {errors.password && <p className="text-red-400 text-[10px] mt-1 font-bold">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1FA971] hover:bg-emerald-600 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? (
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
