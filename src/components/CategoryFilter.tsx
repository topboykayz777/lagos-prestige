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
    <div className="bg-[#FAF7F2] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex justify-center gap-10">
        {/* Left half slides from left */}
        <motion.div 
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-10"
        >
          {categories.slice(0, 3).map((cat) => (
            <button key={cat.name} className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 rounded-[2rem] bg-white border border-[#2D1B08]/5 flex items-center justify-center group-hover:bg-[#8B4513] group-hover:text-white transition-all duration-500 shadow-sm">
                <cat.icon className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D1B08]/40">{cat.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Right half slides from right */}
        <motion.div 
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-10"
        >
          {categories.slice(3).map((cat) => (
            <button key={cat.name} className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 rounded-[2rem] bg-white border border-[#2D1B08]/5 flex items-center justify-center group-hover:bg-[#8B4513] group-hover:text-white transition-all duration-500 shadow-sm">
                <cat.icon className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D1B08]/40">{cat.name}</span>
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryFilter;