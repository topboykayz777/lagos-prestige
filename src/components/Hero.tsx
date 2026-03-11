"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center px-6 pt-20 bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687940-4ad236f759ca?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Penthouse" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.4em]">The Gold Standard of Gidi</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
            Beyond <br /> 
            <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px white' }}>Living.</span>
          </h1>
          
          <p className="text-white/60 text-xl max-w-md mb-12 leading-relaxed font-medium">
            Curated luxury shortlets for the discerning traveler. Experience the pinnacle of Nigerian hospitality.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button className="bg-[#D4AF37] text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all flex items-center gap-3 group">
              Explore Suites
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="flex items-center gap-4 text-white group">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">Virtual Tour</span>
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000" 
              alt="Interior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl max-w-[280px]">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-1 bg-[#D4AF37] rounded-full" />)}
            </div>
            <p className="text-black font-black text-lg leading-tight mb-2">"The best stay I've had in Lagos, period."</p>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">— Tunde O., CEO</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;