"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center px-6 pt-20 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1600607687940-4ad236f759ca?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Penthouse" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-emerald-800" />
              <span className="text-emerald-800 text-xs font-black uppercase tracking-[0.4em]">The New Standard</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-emerald-950 mb-8 tracking-tighter leading-[0.9]">
              Elevated <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #064e3b' }}>Living.</span>
            </h1>
            
            <p className="text-emerald-900/60 text-lg md:text-xl max-w-md mb-12 leading-relaxed font-medium">
              Curated luxury shortlets for the modern traveler. Experience the pinnacle of Nigerian hospitality.
            </p>
            
            <button className="bg-emerald-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-800 transition-all flex items-center gap-3 group shadow-xl">
              Explore Suites
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-emerald-900/5 shadow-2xl">
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