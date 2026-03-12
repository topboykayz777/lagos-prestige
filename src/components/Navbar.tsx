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
          <button className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-white/80 hover:text-white transition-colors py-4">
            Discover
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-[#0A1128]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl"
              >
                <div className="grid grid-cols-1 gap-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors">
                        <item.icon className="w-5 h-5 text-[#C5A059] group-hover:text-[#0A1128]" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{item.label}</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-wider">{item.desc}</p>
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
            className="hidden sm:block bg-white text-[#0A1128] px-8 py-3.5 rounded-2xl text-[11px] font-medium uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-all shadow-2xl active:scale-95"
          >
            Book Now
          </button>
          
          <div 
            onClick={() => toast.info("Opening Mobile Menu")}
            className="lg:hidden w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-[#C5A059] transition-all cursor-pointer group border border-white/10"
          >
            <Menu className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;