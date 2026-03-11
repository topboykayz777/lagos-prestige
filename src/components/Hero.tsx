"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { toast } from 'sonner';

const Hero = () => {
  const handleBook = () => {
    toast.success("Checking availability for your stay...");
  };

  return (
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden bg-[#FAF9F6]">
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.5 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=2000" 
          alt="The Obsidian Suite" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/60 via-transparent to-[#FAF9F6]" />
      </motion.div>
      
      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-[#C5A059]" />
            <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em]">Private Residence No. 01</span>
            <span className="h-[1px] w-12 bg-[#C5A059]" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-[#1A241E] mb-8 tracking-tighter leading-[0.85]">
            The <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #C5A059' }}>Obsidian.</span>
          </h1>
          
          <p className="text-[#1A241E]/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            A singular expression of luxury in the heart of Victoria Island. <br />
            Designed for the individual who demands the extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={handleBook}
              className="bg-[#1A241E] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-[#C5A059] active:scale-95 transition-all flex items-center gap-3 group shadow-2xl"
            >
              Reserve Your Stay
              <Calendar className="w-5 h-5 text-[#C5A059]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;