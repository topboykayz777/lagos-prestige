"use client";

import React, { useState } from 'react';
import { Menu, ChevronDown, Map, Shield, MessageSquare, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { path: '/rooms', label: 'Our Rooms', icon: Map, desc: 'Explore our curated collection of premium suites' },
    { path: '/amenities', label: 'Luxury Amenities', icon: Shield, desc: 'Everything you need for a perfect, seamless stay' },
    { path: '/contact', label: 'Contact Us', icon: MessageSquare, desc: '24/7 concierge support for all your needs' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsHovered(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 lg:p-8 flex justify-center"
      >
        <div className="w-full max-w-7xl flex items-center justify-between bg-background/40 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] px-4 md:px-8 py-2 md:py-3 shadow-2xl relative">
          
          {/* Logo Container */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Logo />
          </div>

          {/* Desktop Mega Menu Trigger */}
          <div 
            className="hidden lg:block"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/70 hover:text-primary transition-colors py-4">
              Discover
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 right-0 w-full bg-background/95 backdrop-blur-3xl border border-border rounded-[3rem] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.1)] mt-4"
                >
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {menuItems.map((item) => (
                      <button
                        key={item.path + item.label}
                        onClick={() => handleNavigation(item.path)}
                        className="flex flex-col gap-4 p-6 rounded-[2rem] transition-all text-left group border border-transparent hover:bg-[#1A241E] dark:hover:bg-white/5 hover:border-[#C5A059]/30"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-[#C5A059] transition-all duration-500">
                          <item.icon className="w-5 h-5 text-primary group-hover:text-[#1A241E] transition-colors" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-foreground font-black text-sm tracking-tight group-hover:text-[#C5A059] transition-colors">{item.label}</p>
                            <ArrowRight className="w-3 h-3 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </div>
                          <p className="text-foreground/30 text-[10px] font-medium leading-relaxed group-hover:text-[#C5A059]/60 transition-colors">{item.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex-1 flex items-center justify-end gap-4 md:gap-6">
            <button 
              onClick={() => handleNavigation('/contact')}
              className="hidden sm:block bg-primary text-background px-6 md:px-8 py-2.5 md:py-3.5 rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              Book Now
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 md:w-12 md:h-12 bg-foreground/5 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-primary transition-all cursor-pointer group border border-border"
            >
              <Menu className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-2xl lg:hidden overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col p-6 md:p-8">
              <div className="flex justify-between items-center mb-12">
                <Logo />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 md:w-14 md:h-14 bg-foreground/5 rounded-2xl flex items-center justify-center active:scale-90 transition-transform"
                >
                  <X className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 mb-12">
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item.path + item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => handleNavigation(item.path)}
                    className="flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] bg-foreground/5 border border-border text-left active:bg-primary active:text-background transition-all group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-foreground/5 flex items-center justify-center group-active:bg-background/20">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-active:text-background" />
                    </div>
                    <div>
                      <p className="text-foreground font-black text-base md:text-lg tracking-tight group-active:text-background">{item.label}</p>
                      <p className="text-foreground/30 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] group-active:text-background/40">Explore</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;