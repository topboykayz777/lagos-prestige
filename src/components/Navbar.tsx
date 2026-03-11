"use client";

import React from 'react';
import { Search, Menu, User, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="w-full max-w-7xl flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-xl border border-white/20 rounded-full shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <Home className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">NEST.</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black transition-colors">Explore</a>
          <a href="#" className="hover:text-black transition-colors">Experiences</a>
          <a href="#" className="hover:text-black transition-colors">Online Hosts</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 p-1 pl-3 border border-gray-200 rounded-full hover:shadow-md transition-shadow cursor-pointer">
            <Menu className="w-4 h-4" />
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;