"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryFilter from '@/components/CategoryFilter';
import FeaturedListings from '@/components/FeaturedListings';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans selection:bg-[#8B4513] selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <CategoryFilter />
        <FeaturedListings />
        
        {/* Call to Action Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="relative h-[500px] rounded-[4rem] overflow-hidden flex items-center justify-center text-center px-6">
            <img 
              src="https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?auto=format&fit=crop&q=80&w=2000" 
              alt="Lagos Skyline" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
            />
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">Host with <br /> <span className="text-[#D4AF37]">Distinction.</span></h2>
              <p className="text-white/70 mb-10 text-xl font-medium max-w-xl mx-auto">Join Nigeria's most exclusive network of luxury property owners.</p>
              <button className="bg-[#D4AF37] text-[#2D1B08] px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">
                Start Hosting
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;