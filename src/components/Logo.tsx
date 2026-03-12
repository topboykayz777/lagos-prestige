"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div className="flex items-center gap-4 cursor-pointer group">
      <div className="relative">
        <motion.div 
          className="w-12 h-12 bg-[#0A1128] border border-[#C5A059]/30 rounded-full flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Animated Shimmer Effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent w-[200%]"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Minimalist 'L' Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
            <motion.path 
              d="M8 4V16C8 18.2091 9.79086 20 12 20H18" 
              stroke="#C5A059" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.circle 
              cx="18" cy="20" r="2" 
              fill="#C5A059"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            />
          </svg>
        </motion.div>
        
        {/* Floating Sparkle */}
        <motion.div 
          className="absolute -top-1 -right-1"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-3 h-3 bg-[#C5A059] rounded-full blur-[2px]" />
        </motion.div>
      </div>
      
      <div className="flex flex-col">
        <span className="font-serif italic text-2xl tracking-tight leading-none text-white group-hover:text-[#C5A059] transition-colors">Lagos</span>
        <span className="text-[9px] font-black tracking-[0.5em] text-[#C5A059] uppercase">Prestige</span>
      </div>
    </div>
  );
};

export default Logo;