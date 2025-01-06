import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

function MainLayout() {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('/login')
  return (
    <div className="flex flex-col min-h-screen">
      {noHeaderFooter ||      <Navbar />}
  
      <main className="flex-grow">
        <Outlet />
      </main>
      {noHeaderFooter ||   <Footer />}
    
    </div>
  );
}

export default MainLayout;