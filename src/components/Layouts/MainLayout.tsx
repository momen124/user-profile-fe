import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <aside className="w-64 bg-white shadow-md">
          <Sidebar />
        </aside>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
