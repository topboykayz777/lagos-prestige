"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Palmtree, Building, Ship, Crown, Briefcase, Sparkles } from 'lucide-react';

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
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-[#1A1510]">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#D4AF37 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 relative z-10">
        <motion.div 
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-8 md:gap-16"
        >
          {categories.slice(0, 3).map((cat) => (
            <button key={cat.name} className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500 shadow-xl backdrop-blur-sm">
                <cat.icon className="w-8 h-8 text-[#D4AF37] group-hover:text-black" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-[#D4AF37] transition-colors">{cat.name}</span>
            </button>
          ))}
        </motion.div>

        <motion.div 
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-8 md:gap-16"
        >
          {categories.slice(3).map((cat) => (
            <button key={cat.name} className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500 shadow-xl backdrop-blur-sm">
                <cat.icon className="w-8 h-8 text-[#D4AF37] group-hover:text-black" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-[#D4AF37] transition-colors">{cat.name}</span>
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryFilter;