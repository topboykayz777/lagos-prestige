"use client";

import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown, Map, Shield, Zap, MessageSquare, X, ArrowRight, Compass, UserCheck, Tag, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/rooms', label: 'Our Rooms', icon: Map, desc: 'Explore our curated collection of premium suites' },
    { path: '/amenities', label: 'Luxury Amenities', icon: Shield, desc: 'Everything you need for a perfect, seamless stay' },
    { path: '/neighborhoods', label: 'Neighborhood Guide', icon: Compass, desc: 'Discover the best of Ikoyi, VI, and Lekki' },
    { path: '/concierge', label: 'Private Concierge', icon: UserCheck, desc: 'Personalized services from chefs to chauffeurs' },
    { path: '/how-it-works', label: 'How It Works', icon: Zap, desc: 'Our simple 3-step booking and check-in process' },
    { path: '/offers', label: 'Special Offers', icon: Tag, desc: 'Exclusive rates for extended stays and corporate' },
    { path: '/contact', label: 'Contact Us', icon: MessageSquare, desc: '24/7 concierge support for all your needs' },
    { path: '/#journal', label: 'Guest Journal', icon: BookOpen, desc: 'Stories and reviews from our global community' },
  ];

  const handleNavigation = (path: string) => {
    if (path.startsWith('/#')) {
      const id = path.split('#')[1];
      if (window.location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
    setIsHovered(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 flex justify-center"
      >
        <div className="w-full max-w-7xl flex items-center justify-between bg-transparent relative">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <Logo />
          </Link>

          {/* Desktop Mega Menu Trigger - Only on Homepage and when NOT scrolled */}
          <div 
            className={`hidden lg:block transition-all duration-500 ${(!isHomePage || isScrolled) ? 'opacity-0 pointer-events-none translate-y-[-20px]' : 'opacity-100 translate-y-0'}`}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/70 hover:text-foreground transition-colors py-4">
              Discover
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 right-0 w-full bg-background/95 backdrop-blur-3xl border border-border rounded-[3rem] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.1)] mt-2"
                >
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {menuItems.map((item) => (
                      <button
                        key={item.path + item.label}
                        onClick={() => handleNavigation(item.path)}
                        className="flex flex-col gap-4 p-6 rounded-[2rem] hover:bg-primary/5 transition-all text-left group border border-transparent hover:border-primary/10"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                          <item.icon className="w-5 h-5 text-primary group-hover:text-background transition-colors" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-foreground font-black text-sm tracking-tight">{item.label}</p>
                            <ArrowRight className="w-3 h-3 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </div>
                          <p className="text-foreground/30 text-[10px] font-medium leading-relaxed">{item.desc}</p>
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
              onClick={() => handleNavigation('/contact')}
              className="hidden sm:block bg-foreground text-background px-8 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-background transition-all shadow-2xl active:scale-95"
            >
              Book Now
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-12 h-12 bg-foreground/5 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-primary transition-all cursor-pointer group border border-border"
            >
              <Menu className="w-6 h-6 text-foreground" />
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
            <div className="min-h-screen flex flex-col p-8">
              <div className="flex justify-between items-center mb-12">
                <Logo />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-14 h-14 bg-foreground/5 rounded-2xl flex items-center justify-center active:scale-90 transition-transform"
                >
                  <X className="w-7 h-7 text-foreground" />
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
                    className="flex items-center gap-5 p-5 rounded-[2rem] bg-foreground/5 border border-border text-left active:bg-primary active:text-background transition-all group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center group-active:bg-background/20">
                      <item.icon className="w-6 h-6 text-primary group-active:text-background" />
                    </div>
                    <div>
                      <p className="text-foreground font-black text-lg tracking-tight group-active:text-background">{item.label}</p>
                      <p className="text-foreground/30 text-[9px] font-black uppercase tracking-[0.2em] group-active:text-background/40">Explore</p>
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