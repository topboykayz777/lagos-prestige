"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedListings from '@/components/FeaturedListings';
import Amenities from '@/components/Amenities';
import HowItWorks from '@/components/HowItWorks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A1128] font-sans selection:bg-[#C5A059] selection:text-[#0A1128]">
      <Navbar />
      
      <main>
        <Hero />
        <FeaturedListings />
        <Amenities />
        <HowItWorks />
        <Contact />
      </main>
      
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;