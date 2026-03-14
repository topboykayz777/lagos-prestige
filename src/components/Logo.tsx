"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

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
    <div className="flex items-center gap-4 group">
      {/* Icon part - Theme Toggle */}
      <div className="relative cursor-pointer" onClick={toggleTheme}>
        <motion.div 
          className="w-14 h-14 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center overflow-hidden shadow-2xl relative"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div
                key="moon-skin"
                initial={{ y: 40, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -40, opacity: 0, rotate: 90 }}
                transition={{ type: "spring", damping: 12 }}
                className="absolute inset-0 bg-gradient-to-br from-[#1A241E] to-[#0A1128] flex items-center justify-center"
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-2 left-3 w-3 h-3 bg-white rounded-full blur-[1px]" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full blur-[1px]" />
                  <div className="absolute top-6 right-2 w-1.5 h-1.5 bg-white rounded-full blur-[1px]" />
                </div>
                <motion.div 
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-blue-400/10 blur-xl" 
                />
              </motion.div>
            ) : (
              <motion.div
                key="sun-skin"
                initial={{ y: 40, opacity: 0, rotate: 90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -40, opacity: 0, rotate: -90 }}
                transition={{ type: "spring", damping: 12 }}
                className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#C5A059] flex items-center justify-center"
              >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute top-1/2 left-1/2 w-full h-1 bg-white/30 -translate-y-1/2 -translate-x-1/2"
                      style={{ transform: `translate(-50%, -50%) rotate(${i * 45}deg)` }}
                    />
                  ))}
                </motion.div>
                <svg className="absolute bottom-3 w-4 h-2 text-white/60" viewBox="0 0 20 10">
                  <path d="M2 2C2 2 6 8 10 8C14 8 18 2 18 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
          
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-md">
            <motion.path 
              d="M8 4V16C8 18.2091 9.79086 20 12 20H18" 
              stroke={theme === 'dark' ? "#C5A059" : "#1A241E"} 
              strokeWidth="3" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute -inset-2 border border-primary/10 rounded-full pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#C5A059]" />
        </motion.div>
      </div>
      
      {/* Text part - Homepage Link */}
      <Link to="/" className="flex flex-col cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
        <span className="font-serif italic text-2xl tracking-tight leading-none text-foreground group-hover:text-primary transition-colors">Lagos</span>
        <span className="text-[9px] font-black tracking-[0.5em] text-primary uppercase">Prestige</span>
      </Link>
    </div>
  );
};

export default Logo;