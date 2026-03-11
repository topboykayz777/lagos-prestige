"use client";

import React from 'react';
import { Menu, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 p-4 md:p-8 flex justify-center"
    >
      <div className="w-full max-w-7xl flex items-center justify-between px-6 md:px-8 py-4 bg-black/20 backdrop-blur-md rounded-2xl border border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)]">
            <ShieldCheck className="text-white w-5 h-5 -rotate-45" />
          </div>
          <span className="font-black text-xl md:text-2xl tracking-tighter text-white">ILE<span className="text-indigo-500">.</span></span>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
          <a href="#" className="hover:text-indigo-400 transition-colors">Collections</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Investment</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Concierge</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Support</a>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-indigo-400 border border-indigo-500/30 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
            List Property
          </button>
          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors border border-white/5 cursor-pointer group">
            <Menu className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;