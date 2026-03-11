"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ApartmentCard from './ApartmentCard';

const listings = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    title: "The Eko Atlantic Penthouse",
    location: "Victoria Island, Lagos",
    price: "₦450,000",
    rating: "5.0"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687940-4ad236f759ca?auto=format&fit=crop&q=80&w=800",
    title: "Maitama Executive Suite",
    location: "Maitama, Abuja",
    price: "₦320,000",
    rating: "4.95"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    title: "Banana Island Waterfront",
    location: "Ikoyi, Lagos",
    price: "₦750,000",
    rating: "4.98"
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    title: "The Heritage Loft",
    location: "Lekki Phase 1, Lagos",
    price: "₦180,000",
    rating: "4.88"
  }
];

const FeaturedListings = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
      >
        <div>
          <h2 className="text-5xl font-black tracking-tighter text-[#2D1B08] mb-4">Curated Stays.</h2>
          <p className="text-[#2D1B08]/50 text-lg max-w-md leading-relaxed">
            Handpicked luxury spaces across Nigeria's most prestigious neighborhoods.
          </p>
        </div>
        <button className="px-8 py-4 bg-[#FAF7F2] border border-[#2D1B08]/10 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#2D1B08] hover:text-white transition-all">
          Explore All Listings
        </button>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {listings.map((listing, index) => (
          <ApartmentCard key={index} {...listing} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;