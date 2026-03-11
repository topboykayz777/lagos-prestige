"use client";

import React from 'react';
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
    <div className="flex items-center justify-center gap-10 py-16 overflow-x-auto no-scrollbar px-6 bg-[#FAF7F2]">
      {categories.map((cat) => (
        <button 
          key={cat.name}
          className="flex flex-col items-center gap-4 group min-w-fit"
        >
          <div className="w-20 h-20 rounded-[2rem] bg-white border border-[#2D1B08]/5 flex items-center justify-center group-hover:bg-[#8B4513] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
            <cat.icon className="w-8 h-8" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D1B08]/40 group-hover:text-[#2D1B08] transition-colors">
            {cat.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;