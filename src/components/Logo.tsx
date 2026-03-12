"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { toast } from 'sonner';

const Logo = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    toast.info(`Switching to ${newTheme} mode`, {
      icon: newTheme === 'dark' ? '🌙' : '☀️',
      duration: 1500
    });
  };

  return (
    <div 
      className="flex items-center gap-4 cursor-pointer group"
      onClick={toggleTheme}
    >
      <div className="relative">
        <motion.div 
          className="w-12 h-12 bg-background border border-primary/30 rounded-full flex items-center justify-center overflow-hidden shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Theme Background Elements */}
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div
                key="moon-bg"
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.5, rotate: 45 }}
                className="absolute inset-0 flex items-center justify-center bg-navy/20"
              >
                <Moon className="w-6 h-6 text-primary/20 fill-primary/10" />
              </motion.div>
            ) : (
              <motion.div
                key="sun-bg"
                initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.5, rotate: -45 }}
                className="absolute inset-0 flex items-center justify-center bg-primary/5"
              >
                <Sun className="w-6 h-6 text-primary/20 fill-primary/10" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Minimalist 'L' Icon - Always visible */}
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
          <div className="w-3 h-3 bg-primary rounded-full blur-[2px]" />
        </motion.div>
      </div>
      
      <div className="flex flex-col">
        <span className="font-serif italic text-2xl tracking-tight leading-none text-foreground group-hover:text-primary transition-colors">Lagos</span>
        <span className="text-[9px] font-black tracking-[0.5em] text-primary uppercase">Prestige</span>
      </div>
    </div>
  );
};

export default Logo;