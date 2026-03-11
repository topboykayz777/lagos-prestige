"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { toast } from 'sonner';

const Hero = () => {
  const handleExplore = () => {
    toast.success("Welcome to my private collection.");
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden bg-[#FAF9F6]">
      {/* Full Background Image with Cinematic Delay */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1600607687940-4ad236f759ca?auto=format&fit=crop&q=80&w=2000" 
          alt="My Curated Living Space" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/70 via-[#FAF9F6]/20 to-[#FAF9F6]" />
      </motion.div>
      
      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-[#C5A059]" />
            <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em]">A Personal Collection</span>
            <span className="h-[1px] w-12 bg-[#C5A059]" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-[#1A241E] mb-8 tracking-tighter leading-[0.85]">
            Elevated <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #C5A059' }}>Living.</span>
          </h1>
          
          <p className="text-[#1A241E]/70 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-medium">
            I've curated these spaces for the modern traveler who seeks more than just a stay. <br className="hidden md:block" /> 
            Experience my personal standard of Nigerian hospitality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={handleExplore}
              className="bg-[#1A241E] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-[#C5A059] active:scale-95 transition-all flex items-center gap-3 group shadow-2xl shadow-black/20"
            >
              Explore My Suites
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-[#C5A059]" />
            </button>
            
            <button 
              onClick={() => toast.info("Playing Virtual Tour...")}
              className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#1A241E] hover:text-[#C5A059] transition-colors group"
            >
              <div className="w-12 h-12 rounded-full border border-[#1A241E]/20 flex items-center justify-center group-hover:border-[#C5A059] transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </div>
              Watch Tour
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;