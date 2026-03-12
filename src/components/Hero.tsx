"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const Hero = () => {
  const handleBook = () => {
    const element = document.getElementById('apartments');
    element?.scrollIntoView({ behavior: 'smooth' });
    toast.info("Exploring our premium collection...");
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] flex flex-col items-center pt-24 md:pt-32 px-6 overflow-hidden bg-navy">
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Lagos Apartment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />
      </motion.div>
      
      <div className="relative z-10 max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Refined Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-2.5 px-5 py-1.5 bg-white/5 border border-[#C5A059]/20 rounded-full mb-8 backdrop-blur-xl shadow-sm group cursor-default"
            whileHover={{ scale: 1.02, borderColor: 'rgba(197, 160, 89, 0.4)' }}
          >
            <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-pulse" />
            <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-[0.3em]">Premium Stays in Lagos</span>
            <Sparkles className="w-2.5 h-2.5 text-[#C5A059]/60 group-hover:text-[#C5A059] transition-colors" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-serif italic text-offwhite mb-6 tracking-tight leading-[1.1]">
            Your Perfect Stay <br /> 
            <span className="text-[#C5A059] not-italic font-sans font-medium tracking-tighter">In Lagos.</span>
          </h1>
          
          <p className="text-offwhite/60 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed font-medium">
            Experience the pinnacle of Nigerian hospitality. Curated luxury apartments in Ikoyi, Victoria Island, and Lekki Phase 1.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleBook}
              className="group relative bg-[#C5A059] text-navy px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:shadow-lg active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Apartments
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-offwhite"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
            <button 
              onClick={() => toast.info("Opening our private gallery...")}
              className="px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] text-offwhite border border-offwhite/10 hover:bg-white/5 hover:border-offwhite/20 transition-all backdrop-blur-sm"
            >
              View Gallery
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;