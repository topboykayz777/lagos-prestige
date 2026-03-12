"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Hero = () => {
  const handleBook = () => {
    const element = document.getElementById('apartments');
    element?.scrollIntoView({ behavior: 'smooth' });
    toast.info("Exploring our premium collection...");
  };

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center px-6 overflow-hidden bg-[#0A1128]">
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
      
      <div className="relative z-10 max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
            <MapPin className="w-3 h-3 text-[#C5A059]" />
            <span className="text-[#C5A059] text-[10px] font-medium uppercase tracking-[0.2em]">Premium Stays in Lagos, Nigeria</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-medium text-white mb-8 tracking-tighter leading-[0.9]">
            Your Perfect Stay <br /> 
            <span className="text-[#C5A059]">In Lagos.</span>
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Experience the pinnacle of Nigerian hospitality. Curated luxury apartments in Ikoyi, Victoria Island, and Lekki Phase 1.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={handleBook}
              className="bg-[#C5A059] text-[#0A1128] px-10 py-5 rounded-2xl font-medium uppercase tracking-widest hover:bg-white active:scale-95 transition-all flex items-center gap-3 shadow-2xl"
            >
              Explore Apartments
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => toast.info("Contacting our concierge...")}
              className="px-10 py-5 rounded-2xl font-medium uppercase tracking-widest text-white border border-white/20 hover:bg-white/5 transition-all"
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