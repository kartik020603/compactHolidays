import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactFAB from './ContactFAB';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full pt-20">
        {children}
      </main>
      <Footer />
      <ContactFAB />
    </div>
  );
}
