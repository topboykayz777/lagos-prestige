"use client";

import React, { useState, useEffect } from 'react';
import { Menu, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${isScrolled ? 'p-4' : 'p-8'}`}>
      <div className={`w-full max-w-7xl flex items-center justify-between px-8 py-4 transition-all duration-500 rounded-2xl ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl' 
          : 'bg-transparent border border-transparent'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#D4AF37] rounded-lg rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <ShieldCheck className="text-black w-5 h-5 -rotate-45" />
          </div>
          <span className="font-black text-2xl tracking-tighter text-white">ILE<span className="text-[#D4AF37]">.</span></span>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Collections</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Investment</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Concierge</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Support</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-2 rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all">
            List Property
          </button>
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors border border-white/5">
              <Menu className="w-5 h-5 text-white group-hover:text-black" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;