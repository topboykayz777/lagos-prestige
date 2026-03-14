"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-4">Our <span className="text-primary">Story.</span></h1>
          <p className="text-foreground/40 text-xl max-w-2xl">Discover the vision behind Lagos Prestige and our commitment to redefining luxury hospitality.</p>
        </div>
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default ProcessPage;