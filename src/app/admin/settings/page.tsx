'use client';

import React from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Settings, Shield, History } from 'lucide-react';

export default function AdminSettingsPage() {
  const auditLogs = [
    { id: 1, action: 'NEW_LEAD', entity: 'LEAD #18', user: 'System Generator', time: '10 mins ago', details: 'Lead submitted from Homepage Hero' },
    { id: 2, action: 'UPDATE_STATUS', entity: 'QUOTE #4410', user: 'Admin User', time: '1 hour ago', details: 'Marked quote request ESTIMATE_SENT' },
    { id: 3, action: 'CMS_UPDATE', entity: 'CMS #HERO', user: 'Admin User', time: '3 hours ago', details: 'Updated main slogan headline text' }
  ];

  return (
    <div className="flex bg-[#F6F6F6] min-h-screen text-[#0A1A23]">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-extrabold text-[#0D3B5B]">Audit Logs & Security Settings</h1>
          <p className="text-xs text-slate-500">Track system administrative actions, security event history, and role-based permissions.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-base text-[#0D3B5B] flex items-center gap-2">
            <History className="w-5 h-5 text-[#1FA971]" />
            <span>Administrative Audit Log Trail</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase">
                  <th className="py-2.5 px-3">Action</th>
                  <th className="py-2.5 px-3">Entity</th>
                  <th className="py-2.5 px-3">Performed By</th>
                  <th className="py-2.5 px-3">Time</th>
                  <th className="py-2.5 px-3">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {auditLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-bold text-[#0D3B5B]">{log.action}</td>
                    <td className="py-3 px-3 font-semibold">{log.entity}</td>
                    <td className="py-3 px-3 text-slate-600">{log.user}</td>
                    <td className="py-3 px-3 text-slate-400">{log.time}</td>
                    <td className="py-3 px-3 text-slate-600">{log.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
