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

  const lineVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="relative h-screen flex flex-col items-center pt-32 md:pt-40 px-6 overflow-hidden bg-background">
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
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
      
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* 1. Premium Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1A241E]/5 dark:bg-white/5 border border-[#C5A059]/20 rounded-full mb-8 backdrop-blur-xl"
        >
          <div className="w-1 h-1 bg-[#C5A059] rounded-full animate-pulse" />
          <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-[0.4em]">Premium Stays in Lagos</span>
          <Sparkles className="w-2.5 h-2.5 text-[#C5A059]/60" />
        </motion.div>
        
        {/* 2. Heading Line 1 */}
        <div className="overflow-hidden">
          <motion.h1 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            className="text-4xl md:text-6xl font-serif italic text-[#1A241E] dark:text-white mb-2 tracking-tight leading-tight"
          >
            Your Perfect Stay
          </motion.h1>
        </div>

        {/* 3. Heading Line 2 */}
        <div className="overflow-hidden">
          <motion.h1 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            className="text-4xl md:text-6xl font-black text-[#C5A059] mb-6 tracking-tighter leading-tight uppercase"
          >
            In Lagos.
          </motion.h1>
        </div>
        
        {/* 4. Description Paragraph */}
        <div className="overflow-hidden">
          <motion.p 
            custom={3}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            className="text-[#1A241E]/60 dark:text-white/40 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed font-medium"
          >
            Experience the pinnacle of Nigerian hospitality. Curated luxury apartments in Ikoyi, Victoria Island, and Lekki Phase 1.
          </motion.p>
        </div>
        
        {/* 5. Action Buttons */}
        <motion.div 
          custom={4}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={handleBook}
            className="group relative bg-[#1A241E] dark:bg-[#C5A059] text-white dark:text-[#1A241E] px-10 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(26,36,30,0.3)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Apartments
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button 
            onClick={() => toast.info("Opening our private gallery...")}
            className="px-10 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] text-[#1A241E] dark:text-white border border-[#1A241E]/10 dark:border-white/10 hover:bg-[#1A241E]/5 dark:hover:bg-white/5 transition-all backdrop-blur-sm"
          >
            View Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;