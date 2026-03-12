"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedListings from '@/components/FeaturedListings';
import CategoryFilter from '@/components/CategoryFilter';
import { MadeWithDyad } from "@/components/made-with-dyad";

const ApartmentsPage = () => {
  return (
    <div className="min-h-screen bg-[#0A1128] font-sans selection:bg-[#C5A059] selection:text-[#0A1128]">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">Our <span className="text-[#C5A059]">Suites.</span></h1>
          <p className="text-white/40 text-xl max-w-2xl">Explore our hand-picked collection of premium short-term rentals across Lagos' most prestigious neighborhoods.</p>
        </div>
        <CategoryFilter />
        <FeaturedListings />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default ApartmentsPage;