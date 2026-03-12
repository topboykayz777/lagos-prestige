"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import { MadeWithDyad } from "@/components/made-with-dyad";

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-[#0A1128] font-sans selection:bg-[#C5A059] selection:text-[#0A1128]">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">Simple <span className="text-[#C5A059]">Booking.</span></h1>
          <p className="text-white/40 text-xl max-w-2xl">Our streamlined process ensures you spend less time booking and more time enjoying your stay.</p>
        </div>
        <HowItWorks />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default ProcessPage;