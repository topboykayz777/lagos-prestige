"use client";

import React from 'react';
import { Building2, Waves, TreePine, Landmark, Coffee, Sparkles } from 'lucide-react';

const categories = [
  { name: 'Urban', icon: Building2 },
  { name: 'Coastal', icon: Waves },
  { name: 'Nature', icon: TreePine },
  { name: 'Historic', icon: Landmark },
  { name: 'Workation', icon: Coffee },
  { name: 'Luxury', icon: Sparkles },
];

const CategoryFilter = () => {
  return (
    <div className="flex items-center justify-center gap-8 py-12 overflow-x-auto no-scrollbar px-6">
      {categories.map((cat) => (
        <button 
          key={cat.name}
          className="flex flex-col items-center gap-2 group min-w-fit"
        >
          <div className="p-4 rounded-2xl bg-gray-50 group-hover:bg-black group-hover:text-white transition-all duration-300">
            <cat.icon className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
            {cat.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;