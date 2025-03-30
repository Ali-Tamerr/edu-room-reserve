
import React, { useState } from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  user: {
    name: string;
    email: string;
    imageUrl: string;
  } | null;
}

const Layout = ({ user }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <TopBar toggleSidebar={toggleSidebar} user={user} />
      
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Semi-transparent overlay when sidebar is open on mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <main className="flex-1 p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
