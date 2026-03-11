"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden bg-[#FAF9F6]">
      {/* Full Background Image with Delay */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/90 via-[#FAF9F6]/40 to-[#FAF9F6]" />
      </motion.div>
      
      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-[#C5A059]" />
            <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em]">The New Standard</span>
            <span className="h-[1px] w-12 bg-[#C5A059]" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-[#1A241E] mb-8 tracking-tighter leading-[0.85]">
            Elevated <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #C5A059' }}>Living.</span>
          </h1>
          
          <p className="text-[#1A241E]/70 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-medium">
            Curated luxury shortlets for the modern traveler. <br className="hidden md:block" /> 
            Experience the pinnacle of Nigerian hospitality.
          </p>
          
          <button className="bg-[#1A241E] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-[#C5A059] transition-all flex items-center gap-3 group shadow-2xl shadow-black/20">
            Explore Suites
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-[#C5A059]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;