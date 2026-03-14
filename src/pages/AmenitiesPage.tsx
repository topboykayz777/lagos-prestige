"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Amenities from '@/components/Amenities';
import Features from '@/components/Features';

const AmenitiesPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-4">The <span className="text-primary">Experience.</span></h1>
          <p className="text-foreground/40 text-xl max-w-2xl">From 24/7 power to private concierge services, we've thought of everything to make your stay seamless.</p>
        </div>
        <Features />
        <Amenities />
      </main>
      <Footer />
    </div>
  );
};

export default AmenitiesPage;