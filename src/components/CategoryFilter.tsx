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
    <div className="relative py-20 overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-12 relative z-10">
        {categories.map((cat, i) => (
          <motion.button 
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-400 transition-all duration-500 shadow-xl backdrop-blur-sm">
              <cat.icon className="w-6 h-6 md:w-8 md:h-8 text-indigo-400 group-hover:text-white" />
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-indigo-400 transition-colors">{cat.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;