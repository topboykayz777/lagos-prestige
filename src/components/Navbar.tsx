"use client";

import React from 'react';
import { Menu, ShieldCheck } from 'lucide-react';
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
      <div className="w-full max-w-7xl flex items-center justify-between px-6 py-4 bg-[#0A1128]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-[#C5A059] rounded-xl flex items-center justify-center shadow-lg">
            <ShieldCheck className="text-[#0A1128] w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-tighter leading-none text-white">LAGOS PRESTIGE</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#C5A059] uppercase">Shortlets</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
          <a href="#apartments" className="hover:text-[#C5A059] transition-colors">Apartments</a>
          <a href="#amenities" className="hover:text-[#C5A059] transition-colors">Amenities</a>
          <a href="#how-it-works" className="hover:text-[#C5A059] transition-colors">How it Works</a>
          <a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => toast.success("Opening Booking Portal")}
            className="hidden sm:block bg-[#C5A059] text-[#0A1128] px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg"
          >
            Book Now
          </button>
          <div 
            onClick={() => toast.info("Opening Menu")}
            className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#C5A059] transition-colors cursor-pointer group border border-white/10"
          >
            <Menu className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;