"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Amenities from '@/components/Amenities';
import Features from '@/components/Features';
import { MadeWithDyad } from "@/components/made-with-dyad";

const AmenitiesPage = () => {
  return (
    <div className="min-h-screen bg-[#0A1128] font-sans selection:bg-[#C5A059] selection:text-[#0A1128]">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">The <span className="text-[#C5A059]">Experience.</span></h1>
          <p className="text-white/40 text-xl max-w-2xl">From 24/7 power to private concierge services, we've thought of everything to make your stay seamless.</p>
        </div>
        <Features />
        <Amenities />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default AmenitiesPage;