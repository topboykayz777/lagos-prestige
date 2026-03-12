"use client";

import React from 'react';
import { Menu, Home, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 p-6 md:p-10 flex justify-center"
    >
      <div className="w-full max-w-7xl flex items-center justify-between bg-transparent">
        {/* Eye-catching Logo */}
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="relative">
            <div className="w-12 h-12 bg-[#C5A059] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.4)] group-hover:scale-110 transition-transform duration-500">
              <Home className="text-[#0A1128] w-6 h-6" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="text-[#C5A059] w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tighter leading-none text-white group-hover:text-[#C5A059] transition-colors">LAGOS PRESTIGE</span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#C5A059] uppercase">Luxury Shortlets</span>
          </div>
        </div>

        {/* Functional Links */}
        <div className="hidden lg:flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-white/80">
          <button onClick={() => scrollToSection('apartments')} className="hover:text-[#C5A059] transition-colors relative group">
            Apartments
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#C5A059] transition-all group-hover:w-full" />
          </button>
          <button onClick={() => scrollToSection('amenities')} className="hover:text-[#C5A059] transition-colors relative group">
            Amenities
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#C5A059] transition-all group-hover:w-full" />
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#C5A059] transition-colors relative group">
            How it Works
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#C5A059] transition-all group-hover:w-full" />
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-[#C5A059] transition-colors relative group">
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#C5A059] transition-all group-hover:w-full" />
          </button>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden sm:block bg-white text-[#0A1128] px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-all shadow-2xl active:scale-95"
          >
            Book Now
          </button>
          <div 
            onClick={() => toast.info("Opening Menu")}
            className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-[#C5A059] transition-all cursor-pointer group border border-white/10"
          >
            <Menu className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;