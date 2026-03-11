"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ApartmentCard from './ApartmentCard';
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from 'sonner';

const listings = Array.from({ length: 20 }).map((_, i) => ({
  image: `https://images.unsplash.com/photo-${1600000000000 + i * 100000}?auto=format&fit=crop&q=80&w=800`,
  title: ["Eko Suite", "Maitama Loft", "Banana Villa", "Lekki Penthouse", "Azure Hub", "Zenith Stay", "Ocean View", "Royal Garden", "Skyline", "Sanctuary", "Emerald", "Ivory", "Marble", "Onyx", "Pearl", "Ruby", "Sapphire", "Topaz", "Amber", "Jade"][i],
  location: ["VI, Lagos", "Abuja", "Ikoyi", "Lekki", "Oniru", "Asokoro", "Eko Atlantic", "Ikeja", "Central Area", "Enugu", "Calabar", "Port Harcourt", "Ibadan", "Kano", "Kaduna", "Jos", "Benin", "Warri", "Uyo", "Abeokuta"][i],
  price: `₦${150 + i * 20}k`,
  rating: (4.5 + (i % 5) * 0.1).toFixed(1)
}));

const FeaturedListings = () => {
  return (
    <section id="collections" className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Gold Shiny Black Glitter Effect */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C5A059 1.5px, transparent 0)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)'
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#C5A059]/15 via-transparent to-[#C5A059]/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-8 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em]">My Private Collection</span>
            </div>
            <h2 className="text-6xl font-black tracking-tighter text-white leading-none">
              The <span className="text-[#C5A059]">Gallery.</span>
            </h2>
          </div>
          <button 
            onClick={() => toast.info("Opening full catalog...")}
            className="px-10 py-5 bg-white text-[#1A241E] rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#C5A059] hover:text-white active:scale-95 transition-all shadow-2xl"
          >
            View All 500+
          </button>
        </div>

        {/* Glassmorphism Scroll Container */}
        <div className="relative rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-2xl overflow-hidden">
          <ScrollArea className="h-[650px] w-full pr-6">
            <div className="space-y-16 pb-12">
              {/* Row 1: 6 items */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {listings.slice(0, 6).map((listing, i) => (
                  <ApartmentCard key={i} {...listing} index={i} />
                ))}
              </div>

              {/* Row 2: 5 items */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-[90%] mx-auto">
                {listings.slice(6, 11).map((listing, i) => (
                  <ApartmentCard key={i + 6} {...listing} index={i} />
                ))}
              </div>

              {/* Row 3: 4 items */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[75%] mx-auto">
                {listings.slice(11, 15).map((listing, i) => (
                  <ApartmentCard key={i + 11} {...listing} index={i} />
                ))}
              </div>

              {/* Row 4: 3 items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[55%] mx-auto">
                {listings.slice(15, 18).map((listing, i) => (
                  <ApartmentCard key={i + 15} {...listing} index={i} />
                ))}
              </div>

              {/* Row 5: 2 items */}
              <div className="grid grid-cols-2 gap-6 max-w-[35%] mx-auto">
                {listings.slice(18, 20).map((listing, i) => (
                  <ApartmentCard key={i + 18} {...listing} index={i} />
                ))}
              </div>
            </div>
          </ScrollArea>
          
          {/* Subtle Fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505]/80 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;