"use client";

import React from 'react';
import { Search, Menu, User, MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="w-full max-w-7xl flex items-center justify-between px-6 py-3 bg-[#FAF7F2]/80 backdrop-blur-2xl border border-white/20 rounded-full shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#8B4513] rounded-full flex items-center justify-center">
            <MapPin className="text-white w-5 h-5" />
          </div>
          <span className="font-black text-2xl tracking-tighter text-[#2D1B08]">ILE.</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-[#2D1B08]/60">
          <a href="#" className="hover:text-[#8B4513] transition-colors">The Island</a>
          <a href="#" className="hover:text-[#8B4513] transition-colors">The Mainland</a>
          <a href="#" className="hover:text-[#8B4513] transition-colors">Abuja Luxury</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#8B4513]/10 rounded-full transition-colors">
            <Search className="w-5 h-5 text-[#2D1B08]" />
          </button>
          <div className="flex items-center gap-2 p-1 pl-3 border border-[#2D1B08]/10 rounded-full hover:shadow-md transition-shadow cursor-pointer bg-white">
            <Menu className="w-4 h-4 text-[#2D1B08]" />
            <div className="w-8 h-8 bg-[#2E4635] rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;