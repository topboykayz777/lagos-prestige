"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Palmtree, Building, Ship, Crown, Briefcase, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const categories = [
  { name: 'Island Luxury', icon: Crown },
  { name: 'Waterfront', icon: Ship },
  { name: 'Mainland Chic', icon: Building },
  { name: 'Abuja Suites', icon: Sparkles },
  { name: 'Workation', icon: Briefcase },
  { name: 'Retreats', icon: Palmtree },
];

const CategoryFilter = () => {
  return (
    <div className="relative py-20 overflow-hidden bg-[#050505]">
      {/* Subtle Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#C5A059]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-12 relative z-10">
        {categories.map((cat, i) => (
          <motion.button 
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            onClick={() => toast.success(`Filtering by ${cat.name}`)}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] group-active:scale-90 transition-all duration-500 shadow-xl backdrop-blur-sm">
              <cat.icon className="w-6 h-6 md:w-8 md:h-8 text-[#C5A059] group-hover:text-white transition-colors" />
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-[#C5A059] transition-colors">{cat.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;