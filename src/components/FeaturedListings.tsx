"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ApartmentCard from './ApartmentCard';

const listings = [
  {
    image: "https://images.unsplash.com/photo-1600607687940-467f5b637a61?auto=format&fit=crop&q=80&w=800",
    title: "The Azure Penthouse",
    location: "Eko Atlantic, VI",
    price: "₦150,000",
    rating: "4.9"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    title: "Royal Garden Suite",
    location: "Old Ikoyi, Lagos",
    price: "₦120,000",
    rating: "5.0"
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    title: "Modern Lekki Loft",
    location: "Lekki Phase 1",
    price: "₦85,000",
    rating: "4.8"
  }
];

const FeaturedListings = () => {
  return (
    <section id="apartments" className="py-32 bg-[#0A1128] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <motion.div 
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              delay: 0.2, 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-8 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em]">Our Collection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
              Featured <br /> <span className="text-[#C5A059]">Apartments.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              delay: 0.5, 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="text-white/40 text-lg max-w-xs font-medium leading-relaxed"
          >
            Hand-picked spaces designed for comfort, style, and productivity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {listings.map((item, i) => (
            <ApartmentCard key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;