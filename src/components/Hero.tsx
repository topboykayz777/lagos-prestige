"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[95vh] min-h-[700px] flex items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 overflow-hidden rounded-[3rem] m-4">
        <img 
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Lekki Villa" 
          className="w-full h-full object-cover brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2D1B08]/40" />
      </div>
      
      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
        >
          <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">Premium Shortlets in Nigeria</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]"
        >
          Experience <br /> <span className="text-[#D4AF37]">Modern Gidi.</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-3 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto"
        >
          <div className="flex-1 flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-100 w-full">
            <MapPin className="w-6 h-6 text-[#8B4513]" />
            <div className="text-left">
              <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Location</p>
              <input type="text" placeholder="Lekki, Ikoyi, Victoria Island..." className="bg-transparent outline-none text-base font-bold text-[#2D1B08] w-full placeholder:text-gray-300" />
            </div>
          </div>
          
          <div className="flex-1 flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-100 w-full">
            <Calendar className="w-6 h-6 text-[#8B4513]" />
            <div className="text-left">
              <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Stay Period</p>
              <p className="text-base font-bold text-[#2D1B08]">Select dates</p>
            </div>
          </div>
          
          <button className="bg-[#2D1B08] text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest hover:bg-[#8B4513] transition-all w-full md:w-auto flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;