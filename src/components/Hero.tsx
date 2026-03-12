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

  // Side animation variants
  const leftSlide = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        delay: 1.1, 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const rightSlide = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        delay: 1.1, 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <section className="relative h-[80vh] flex flex-col items-center pt-24 md:pt-28 px-6 overflow-hidden bg-background">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Lagos Apartment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </motion.div>
      
      <div className="relative z-10 max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Side Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={leftSlide}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A241E]/5 dark:bg-white/5 border border-[#C5A059]/20 rounded-full mb-6 backdrop-blur-xl">
              <span className="text-[#C5A059] text-[8px] font-black uppercase tracking-[0.4em]">Premium Stays</span>
              <Sparkles className="w-2 h-2 text-[#C5A059]/60" />
            </div>
            
            <h1 className="text-2xl md:text-4xl font-serif italic text-[#1A241E] dark:text-white mb-1 tracking-tight leading-tight">
              Your Perfect Stay
            </h1>
            <h1 className="text-2xl md:text-4xl font-black text-[#C5A059] mb-6 tracking-tighter leading-tight uppercase">
              In Lagos.
            </h1>
            
            <div className="flex gap-4">
              <button 
                onClick={handleBook}
                className="group relative bg-[#1A241E] dark:bg-[#C5A059] text-white dark:text-[#1A241E] px-6 py-3 rounded-xl font-black uppercase tracking-[0.2em] text-[9px] transition-all hover:shadow-xl active:scale-95"
              >
                <span className="flex items-center gap-2">
                  Explore
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={rightSlide}
            className="flex flex-col items-start md:items-end md:text-right pt-4 md:pt-12"
          >
            <p className="text-[#1A241E]/60 dark:text-white/40 text-xs md:text-sm max-w-[280px] mb-8 leading-relaxed font-medium">
              Experience the pinnacle of Nigerian hospitality. Curated luxury apartments in Ikoyi, Victoria Island, and Lekki.
            </p>
            
            <button 
              onClick={() => toast.info("Opening our private gallery...")}
              className="px-6 py-3 rounded-xl font-black uppercase tracking-[0.2em] text-[9px] text-[#1A241E] dark:text-white border border-[#1A241E]/10 dark:border-white/10 hover:bg-[#1A241E]/5 dark:hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              View Gallery
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;