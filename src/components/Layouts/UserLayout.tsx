import React from 'react';
import SideNav from '../SideNav';
import MainLayout from './MainLayout';

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MainLayout>
      <div className="flex w-full">
        <aside className="w-1/4 bg-gray-200 p-4">
          <SideNav />
        </aside>
        <div className="flex-1 grid grid-cols-1 gap-4 p-4">
          {children}
        </div>
      </div>
    </MainLayout>
  );
};

export default UserLayout;
