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

  // Dramatic side animation variant
  const lineVariant = {
    hidden: { x: -300, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 1.5 + (i * 0.3), // Much longer base delay and stagger
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="relative h-screen flex flex-col items-center pt-28 md:pt-32 px-6 overflow-hidden bg-background">
      {/* Big Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Lagos Apartment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </motion.div>
      
      {/* Centered Minimalist Content - Positioned high up */}
      <div className="relative z-10 max-w-md w-full flex flex-col items-center text-center">
        
        {/* Line 1: Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={lineVariant}
          className="inline-flex items-center gap-2 px-2 py-0.5 bg-[#1A241E]/5 dark:bg-white/5 border border-[#C5A059]/20 rounded-full mb-4 backdrop-blur-xl"
        >
          <span className="text-[#C5A059] text-[7px] font-black uppercase tracking-[0.4em]">Premium</span>
          <Sparkles className="w-1.5 h-1.5 text-[#C5A059]/60" />
        </motion.div>
        
        {/* Line 2: Small Title */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={lineVariant}
          className="text-sm md:text-base font-serif italic text-[#1A241E] dark:text-white mb-0.5 tracking-tight leading-tight"
        >
          Your Perfect Stay
        </motion.h1>
        
        {/* Line 3: Main Brand Text */}
        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={lineVariant}
          className="text-lg md:text-xl font-black text-[#C5A059] mb-4 tracking-tighter leading-tight uppercase"
        >
          In Lagos.
        </motion.h1>
        
        {/* Line 4: Description */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={lineVariant}
          className="text-[#1A241E]/60 dark:text-white/40 text-[9px] max-w-[240px] mb-8 leading-relaxed font-medium"
        >
          Experience the pinnacle of Nigerian hospitality. Curated luxury apartments in Ikoyi, VI, and Lekki.
        </motion.p>
        
        {/* Line 5: Action Buttons */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={lineVariant}
          className="flex flex-wrap justify-center gap-3"
        >
          <button 
            onClick={handleBook}
            className="group relative bg-[#1A241E] dark:bg-[#C5A059] text-white dark:text-[#1A241E] px-4 py-2 rounded-lg font-black uppercase tracking-[0.2em] text-[8px] transition-all hover:shadow-xl active:scale-95"
          >
            <span className="flex items-center gap-1.5">
              Explore
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={() => toast.info("Opening our private gallery...")}
            className="px-4 py-2 rounded-lg font-black uppercase tracking-[0.2em] text-[8px] text-[#1A241E] dark:text-white border border-[#1A241E]/10 dark:border-white/10 hover:bg-[#1A241E]/5 dark:hover:bg-white/5 transition-all backdrop-blur-sm"
          >
            Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;