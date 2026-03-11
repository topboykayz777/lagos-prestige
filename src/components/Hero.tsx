"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center px-6 pt-20 bg-[#FAF9F6] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1600607687940-4ad236f759ca?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Penthouse" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#FAF9F6]/80 to-[#FAF9F6]" />
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-[#7A9482]" />
              <span className="text-[#7A9482] text-[10px] font-black uppercase tracking-[0.4em]">The New Standard</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-[#2D3A32] mb-8 tracking-tighter leading-[0.9]">
              Elevated <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #7A9482' }}>Living.</span>
            </h1>
            
            <p className="text-[#2D3A32]/60 text-lg md:text-xl max-w-md mb-12 leading-relaxed font-medium">
              Curated luxury shortlets for the modern traveler. Experience the pinnacle of Nigerian hospitality.
            </p>
            
            <button className="bg-[#7A9482] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#6B8372] transition-all flex items-center gap-3 group shadow-lg shadow-sage-200">
              Explore Suites
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-sage-100 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000" 
                alt="Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;