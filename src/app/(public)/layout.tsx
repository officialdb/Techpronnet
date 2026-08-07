import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TopBar from '@/components/layout/TopBar';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <TopBar />
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
