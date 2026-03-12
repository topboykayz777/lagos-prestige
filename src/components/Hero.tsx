"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';

const Hero = () => {
  const { theme } = useTheme();
  
  const handleBook = () => {
    const element = document.getElementById('apartments');
    element?.scrollIntoView({ behavior: 'smooth' });
    toast.info("Exploring our premium collection...");
  };

  const lineVariant = {
    hidden: { x: -300, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 1.5 + (i * 0.3),
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const darkImage = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000";
  const lightImage = "https://images.unsplash.com/photo-1600607687940-467f5b637a61?auto=format&fit=crop&q=80&w=2000";

  return (
    <section className="relative h-screen flex flex-col items-center pt-28 md:pt-32 px-6 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={theme}
            initial={{ opacity: 0 }}
            animate={{ opacity: theme === 'dark' ? 0.25 : 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src={theme === 'dark' ? darkImage : lightImage} 
              alt="Luxury Lagos" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      
      <div className="relative z-10 max-w-md w-full flex flex-col items-center text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={lineVariant}
          className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A241E]/5 dark:bg-white/5 border border-[#C5A059]/20 rounded-full mb-5 backdrop-blur-xl"
        >
          <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em]">Premium</span>
          <Sparkles className="w-2 h-2 text-[#C5A059]/60" />
        </motion.div>
        
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={lineVariant}
          className="text-[13px] md:text-[15px] font-serif italic text-[#1A241E] dark:text-white mb-1 tracking-tight leading-tight"
        >
          Your Perfect Stay
        </motion.h1>
        
        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={lineVariant}
          className="text-xl md:text-2xl font-black text-[#C5A059] mb-5 tracking-tighter leading-tight uppercase"
        >
          In Lagos.
        </motion.h1>
        
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={lineVariant}
          className="text-[#1A241E]/60 dark:text-white/40 text-[13px] max-w-[280px] mb-10 leading-relaxed font-medium"
        >
          Experience the pinnacle of Nigerian hospitality. Curated luxury apartments in Ikoyi, VI, and Lekki.
        </motion.p>
        
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={lineVariant}
          className="flex flex-wrap justify-center gap-4"
        >
          <button 
            onClick={handleBook}
            className="group relative bg-[#1A241E] dark:bg-[#C5A059] text-white dark:text-[#1A241E] px-6 py-3 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] transition-all hover:shadow-xl active:scale-95"
          >
            <span className="flex items-center gap-2">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={() => toast.info("Opening our private gallery...")}
            className="px-6 py-3 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] text-[#1A241E] dark:text-white border border-[#1A241E]/10 dark:border-white/10 hover:bg-[#1A241E]/5 dark:hover:bg-white/5 transition-all backdrop-blur-sm"
          >
            Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;