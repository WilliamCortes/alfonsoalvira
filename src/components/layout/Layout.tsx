import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import WhatsAppFloat from '../common/WhatsAppFloat';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-cream-light">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
