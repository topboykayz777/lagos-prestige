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
    <section className="relative h-[90vh] min-h-[700px] flex flex-col items-center pt-20 md:pt-24 px-6 overflow-hidden bg-[#0A1128]">
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Lagos Apartment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-transparent to-[#0A1128]" />
      </motion.div>
      
      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Redesigned Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-[#C5A059]/30 rounded-full mb-10 backdrop-blur-xl shadow-[0_0_20px_rgba(197,160,89,0.1)] group cursor-default"
            whileHover={{ scale: 1.02, borderColor: 'rgba(197, 160, 89, 0.6)' }}
          >
            <div className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse" />
            <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em]">Premium Stays in Lagos</span>
            <Sparkles className="w-3 h-3 text-[#C5A059] opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-serif italic text-white mb-8 tracking-tight leading-[0.9]">
            Your Perfect Stay <br /> 
            <span className="text-[#C5A059] not-italic font-sans font-medium tracking-tighter">In Lagos.</span>
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Experience the pinnacle of Nigerian hospitality. Curated luxury apartments in Ikoyi, Victoria Island, and Lekki Phase 1.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={handleBook}
              className="group relative bg-[#C5A059] text-[#0A1128] px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Apartments
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
            <button 
              onClick={() => toast.info("Opening our private gallery...")}
              className="px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] text-white border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm"
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