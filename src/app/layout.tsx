'use client';

import '@/styles/global.css';

import LeftNavigation from '@/components/LeftNavigation';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <LeftNavigation />
      <div className="w-11/12 bg-gray-100">{children}</div>
    </div>
  );
};

export default RootLayout;
