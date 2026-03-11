"use client";

import React from 'react';
import { Menu, ShieldCheck, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-center"
    >
      <div className="w-full max-w-7xl flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 bg-[#1A241E] rounded-lg rotate-45 flex items-center justify-center shadow-sm">
            <ShieldCheck className="text-[#C5A059] w-5 h-5 -rotate-45" />
          </div>
          <span className="font-black text-xl tracking-tighter text-[#1A241E]">ILE<span className="text-[#C5A059]">.</span></span>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#1A241E]/60">
          <button onClick={() => toast.info("Browsing My Collections")} className="hover:text-[#C5A059] transition-colors">Collections</button>
          <button onClick={() => toast.info("Investment Opportunities")} className="hover:text-[#C5A059] transition-colors">Investment</button>
          <button onClick={() => toast.info("Personal Concierge Services")} className="hover:text-[#C5A059] transition-colors">Concierge</button>
          <button onClick={() => toast.info("Contacting Support")} className="hover:text-[#C5A059] transition-colors">Support</button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => toast.success("Redirecting to Host Portal")}
            className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#C5A059] border border-[#C5A059]/30 px-4 py-2 rounded-xl hover:bg-[#C5A059] hover:text-white transition-all"
          >
            <User className="w-3 h-3" />
            Host Login
          </button>
          <div 
            onClick={() => toast.info("Opening Menu")}
            className="w-10 h-10 bg-[#1A241E] rounded-xl flex items-center justify-center hover:bg-[#C5A059] transition-colors cursor-pointer group"
          >
            <Menu className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;