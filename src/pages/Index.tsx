"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryFilter from '@/components/CategoryFilter';
import FeaturedListings from '@/components/FeaturedListings';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <CategoryFilter />
        <Features />
        <FeaturedListings />
        
        {/* Call to Action Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="relative h-[600px] rounded-[4rem] overflow-hidden flex items-center justify-center text-center px-6">
            <img 
              src="https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?auto=format&fit=crop&q=80&w=2000" 
              alt="Lagos Skyline" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
            />
            <div className="relative z-10 max-w-4xl">
              <div className="inline-block px-6 py-2 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
                Partner with us
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">Own a Piece of <br /> <span className="text-[#D4AF37]">The Future.</span></h2>
              <p className="text-white/60 mb-12 text-xl font-medium max-w-2xl mx-auto">Join our exclusive network of property investors and earn premium returns on your luxury assets.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-white text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#D4AF37] transition-all shadow-xl">
                  Investment Guide
                </button>
                <button className="bg-transparent border border-white/20 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                  Contact Sales
                </button>
              </div>
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