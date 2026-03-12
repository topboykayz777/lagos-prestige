"use client";

import React, { useState } from 'react';
import { Menu, ChevronDown, Map, Shield, Zap, MessageSquare, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { path: '/apartments', label: 'Our Apartments', icon: Map, desc: 'Explore our curated collection of premium suites' },
    { path: '/amenities', label: 'Luxury Amenities', icon: Shield, desc: 'Everything you need for a perfect, seamless stay' },
    { path: '/how-it-works', label: 'How It Works', icon: Zap, desc: 'Our simple 3-step booking and check-in process' },
    { path: '/contact', label: 'Contact Us', icon: MessageSquare, desc: '24/7 concierge support for all your needs' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsHovered(false);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 flex justify-center"
      >
        <div className="w-full max-w-7xl flex items-center justify-between bg-transparent">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <Logo />
          </Link>

          {/* Desktop Mega Menu Trigger */}
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
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-navy/95 backdrop-blur-3xl border border-offwhite/5 rounded-[2.5rem] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {menuItems.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNavigation(item.path)}
                        className="flex items-start gap-5 p-6 rounded-3xl hover:bg-white/5 transition-all text-left group border border-transparent hover:border-white/5"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#C5A059] transition-all duration-500">
                          <item.icon className="w-5 h-5 text-[#C5A059] group-hover:text-navy transition-colors" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-offwhite font-black text-lg tracking-tight">{item.label}</p>
                            <ArrowRight className="w-4 h-4 text-[#C5A059] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </div>
                          <p className="text-offwhite/30 text-[11px] font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-offwhite/20">Lagos Prestige Experience</p>
                    <div className="flex gap-6">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C5A059] cursor-pointer hover:text-offwhite transition-colors">Virtual Tour</span>
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C5A059] cursor-pointer hover:text-offwhite transition-colors">Private Gallery</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => handleNavigation('/contact')}
              className="hidden sm:block bg-offwhite text-navy px-7 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] hover:text-navy transition-all shadow-xl active:scale-95"
            >
              Book Now
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-[#C5A059] transition-all cursor-pointer group border border-white/5"
            >
              <Menu className="w-5 h-5 text-offwhite" />
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
            className="fixed inset-0 z-[100] bg-navy/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-between items-center mb-16">
                <Logo />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center"
                >
                  <X className="w-6 h-6 text-offwhite" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => handleNavigation(item.path)}
                    className="flex items-center gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left active:bg-[#C5A059] active:text-navy transition-all group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-active:bg-navy/20">
                      <item.icon className="w-6 h-6 text-[#C5A059] group-active:text-navy" />
                    </div>
                    <div>
                      <p className="text-offwhite font-black text-xl tracking-tight group-active:text-navy">{item.label}</p>
                      <p className="text-offwhite/30 text-[10px] font-bold uppercase tracking-widest group-active:text-navy/40">{item.desc.split(' ').slice(0, 3).join(' ')}...</p>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto">
                <button 
                  onClick={() => handleNavigation('/contact')}
                  className="w-full py-6 bg-[#C5A059] text-navy rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm shadow-2xl"
                >
                  Book Your Stay
                </button>
                <p className="text-center mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-offwhite/20">Lagos Prestige © 2026</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;