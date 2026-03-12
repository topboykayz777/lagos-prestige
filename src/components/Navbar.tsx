"use client";

import React, { useState } from 'react';
import { Menu, ChevronDown, Map, Shield, Zap, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import Logo from './Logo';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsHovered(false);
  };

  const menuItems = [
    { id: 'apartments', label: 'Our Apartments', icon: Map, desc: 'Explore our curated collection' },
    { id: 'amenities', label: 'Luxury Amenities', icon: Shield, desc: 'Everything you need for a perfect stay' },
    { id: 'how-it-works', label: 'How It Works', icon: Zap, desc: 'Simple 3-step booking process' },
    { id: 'contact', label: 'Contact Us', icon: MessageSquare, desc: '24/7 concierge support' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 flex justify-center"
    >
      <div className="w-full max-w-7xl flex items-center justify-between bg-transparent">
        <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Logo />
        </div>

        {/* Desktop Hover Dropdown */}
        <div className="hidden lg:block relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-offwhite/70 hover:text-offwhite transition-colors py-4">
            Discover
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[380px] bg-navy/95 backdrop-blur-2xl border border-offwhite/5 rounded-[2rem] p-5 shadow-2xl"
              >
                <div className="grid grid-cols-1 gap-1.5">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-4 p-3.5 rounded-2xl hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors">
                        <item.icon className="w-4.5 h-4.5 text-[#C5A059] group-hover:text-navy" />
                      </div>
                      <div>
                        <p className="text-offwhite font-medium text-sm">{item.label}</p>
                        <p className="text-offwhite/30 text-[9px] uppercase tracking-wider">{item.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden sm:block bg-offwhite text-navy px-7 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] hover:text-navy transition-all shadow-xl active:scale-95"
          >
            Book Now
          </button>
          
          <div 
            onClick={() => toast.info("Opening Mobile Menu")}
            className="lg:hidden w-11 h-11 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-[#C5A059] transition-all cursor-pointer group border border-white/5"
          >
            <Menu className="w-5 h-5 text-offwhite" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;