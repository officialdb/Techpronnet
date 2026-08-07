import React from 'react';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div className={`animate-pulse bg-slate-200/60 rounded-lg ${className}`} />
  );
}

export function TableSkeleton({ rows = 5, columns = 5 }) {
  return (
    <div className="w-full">
      <div className="border-b border-slate-100 pb-4 mb-4 flex gap-4 px-4">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} className="h-4 flex-1" />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="flex gap-4 mb-6 px-4">
          {Array.from({ length: columns }).map((_, c) => (
            <Skeleton key={c} className="h-8 flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-8 w-8 rounded-lg" />
      </div>
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-3 w-1/3" />
    </div>
  );
}
