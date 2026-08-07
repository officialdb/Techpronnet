'use client';

import React from 'react';

// Route protection is now strictly handled at the Edge via middleware.ts.
// This component remains as a simple passthrough to preserve the layout structure.
export default function AdminGuard({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
