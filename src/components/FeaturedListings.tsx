"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ApartmentCard from './ApartmentCard';
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from 'sonner';

const galleryImages = Array.from({ length: 20 }).map((_, i) => ({
  image: `https://images.unsplash.com/photo-${1600000000000 + i * 100000}?auto=format&fit=crop&q=80&w=800`,
  title: ["The Grand Entrance", "Living Room North", "Sunset Balcony", "Master Bedroom", "En-suite Spa", "Gourmet Kitchen", "Dining Detail", "Smart Home Hub", "Morning View", "Guest Suite", "Walk-in Closet", "Art Collection", "Wine Cellar", "Private Gym", "Study Nook", "Terrace Garden", "Night View", "Pool Access", "Concierge Desk", "The Lobby"][i],
  location: "The Obsidian Suite",
  price: "Full Access",
  rating: "5.0"
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
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-8 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em]">Visual Tour</span>
            </div>
            <h2 className="text-6xl font-black tracking-tighter text-white leading-none">
              The <span className="text-[#C5A059]">Space.</span>
            </h2>
          </div>
          <button 
            onClick={() => toast.info("Opening high-res gallery...")}
            className="px-10 py-5 bg-white text-[#1A241E] rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#C5A059] hover:text-white transition-all"
          >
            View Full Tour
          </button>
        </div>

        <div className="relative rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-2xl overflow-hidden">
          <ScrollArea className="h-[650px] w-full pr-6">
            <div className="space-y-16 pb-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {galleryImages.slice(0, 6).map((img, i) => (
                  <ApartmentCard key={i} {...img} index={i} />
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-[90%] mx-auto">
                {galleryImages.slice(6, 11).map((img, i) => (
                  <ApartmentCard key={i + 6} {...img} index={i} />
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[75%] mx-auto">
                {galleryImages.slice(11, 15).map((img, i) => (
                  <ApartmentCard key={i + 11} {...img} index={i} />
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[55%] mx-auto">
                {galleryImages.slice(15, 18).map((img, i) => (
                  <ApartmentCard key={i + 15} {...img} index={i} />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6 max-w-[35%] mx-auto">
                {galleryImages.slice(18, 20).map((img, i) => (
                  <ApartmentCard key={i + 18} {...img} index={i} />
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;