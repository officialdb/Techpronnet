import React from 'react';
import { fetchProjects } from '@/lib/api';
import PortfolioSection from '@/components/home/PortfolioSection';

export const revalidate = 60;

export default async function PortfolioPage() {
  const projects = await fetchProjects();
  return (
    <div className="bg-[#0A1A23]">
      <PortfolioSection projects={projects} />
    </div>
  );
}
