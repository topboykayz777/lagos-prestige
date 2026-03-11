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
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <CategoryFilter />
        <FeaturedListings />
        
        {/* Call to Action Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="relative h-[400px] rounded-[3rem] overflow-hidden flex items-center justify-center text-center px-6">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
              alt="Host" 
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Become a host.</h2>
              <p className="text-white/80 mb-8 text-lg">Earn extra income and unlock new opportunities by sharing your space.</p>
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Learn More
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