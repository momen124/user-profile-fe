import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className=" bg-white shadow-md">
        <Sidebar />
      </aside>
      <div className="flex flex-col w-screen">
        <Header />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
