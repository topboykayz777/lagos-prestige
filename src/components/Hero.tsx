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

  // Dramatic side-entry variants with longer delays
  const lineVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.6, // Significant delay between lines
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] // Cinematic cubic-bezier easing
      }
    })
  };

  return (
    <section className="relative h-[80vh] min-h-[550px] flex flex-col items-center pt-12 md:pt-16 px-6 overflow-hidden bg-navy">
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Lagos Apartment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />
      </motion.div>
      
      <div className="relative z-10 max-w-3xl w-full text-center mt-12 md:mt-16">
        {/* 1. Premium Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          className="inline-flex items-center gap-2.5 px-4 py-1 bg-white/5 border border-[#C5A059]/20 rounded-full mb-6 backdrop-blur-xl shadow-sm"
        >
          <div className="w-1 h-1 bg-[#C5A059] rounded-full animate-pulse" />
          <span className="text-[#C5A059] text-[8px] font-black uppercase tracking-[0.3em]">Premium Stays in Lagos</span>
          <Sparkles className="w-2 h-2 text-[#C5A059]/60" />
        </motion.div>
        
        {/* 2. Heading Line 1 */}
        <div className="overflow-hidden">
          <motion.h1 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            className="text-3xl md:text-5xl font-serif italic text-offwhite mb-1 tracking-tight leading-tight"
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
            className="text-3xl md:text-5xl font-sans font-medium text-[#C5A059] mb-4 tracking-tighter leading-tight"
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
            className="text-offwhite/60 text-[13px] md:text-sm max-w-md mx-auto mb-8 leading-relaxed font-medium"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button 
            onClick={handleBook}
            className="group relative bg-[#C5A059] text-navy px-7 py-3.5 rounded-xl font-bold uppercase tracking-widest text-[9px] overflow-hidden transition-all hover:shadow-lg active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Apartments
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
            className="px-7 py-3.5 rounded-xl font-bold uppercase tracking-widest text-[9px] text-offwhite border border-offwhite/10 hover:bg-white/5 hover:border-offwhite/20 transition-all backdrop-blur-sm"
          >
            View Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;