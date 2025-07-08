import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PageLoader } from '@/components/atoms/PageLoader';

export const RootLayout: React.FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Outlet />
  </Suspense>
);
