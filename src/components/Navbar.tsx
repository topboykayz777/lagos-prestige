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
      className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-center"
    >
      <div className="w-full max-w-7xl flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-xl rounded-2xl border border-sage-100 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#7A9482] rounded-lg rotate-45 flex items-center justify-center shadow-sm">
            <ShieldCheck className="text-white w-5 h-5 -rotate-45" />
          </div>
          <span className="font-black text-xl tracking-tighter text-[#2D3A32]">ILE<span className="text-[#7A9482]">.</span></span>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#2D3A32]/50">
          <a href="#" className="hover:text-[#7A9482] transition-colors">Collections</a>
          <a href="#" className="hover:text-[#7A9482] transition-colors">Investment</a>
          <a href="#" className="hover:text-[#7A9482] transition-colors">Concierge</a>
          <a href="#" className="hover:text-[#7A9482] transition-colors">Support</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-[#7A9482] border border-[#7A9482]/20 px-4 py-2 rounded-xl hover:bg-[#7A9482] hover:text-white transition-all">
            List Property
          </button>
          <div className="w-10 h-10 bg-[#F4F7F5] rounded-xl flex items-center justify-center hover:bg-[#7A9482] transition-colors cursor-pointer group">
            <Menu className="w-5 h-5 text-[#2D3A32] group-hover:text-white" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;