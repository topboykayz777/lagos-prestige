"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const floatingRooms = [
  { id: 'executive-suite', img: "https://images.unsplash.com/photo-1600607687940-467f5b637a61?w=400", rating: "5.0", pos: { top: '15%', left: '10%' } },
  { id: 'deluxe-king', img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400", rating: "4.9", pos: { top: '20%', right: '12%' } },
  { id: 'penthouse-master', img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400", rating: "4.8", pos: { bottom: '25%', left: '15%' } },
  { id: 'skyline-studio', img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", rating: "5.0", pos: { bottom: '20%', right: '10%' } },
  { id: 'garden-view', img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400", rating: "4.9", pos: { top: '50%', right: '5%' } },
];

const Hero = () => {
  const { theme } = useTheme();
  const [activeRoom, setActiveRoom] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoom((prev) => (prev + 1) % floatingRooms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleExplore = () => {
    const element = document.getElementById('rooms');
    element?.scrollIntoView({ behavior: 'smooth' });
    toast.info("Exploring our premium rooms...");
  };

  const darkImage = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000";
  const lightImage = "https://images.unsplash.com/photo-1600607687940-467f5b637a61?auto=format&fit=crop&q=80&w=2000";

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={theme}
            initial={{ opacity: 0 }}
            animate={{ opacity: theme === 'dark' ? 0.2 : 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src={theme === 'dark' ? darkImage : lightImage} 
              alt="Luxury Lagos" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Scattered Flashing Rooms */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        <AnimatePresence mode="wait">
          {floatingRooms.map((room, i) => (
            i === activeRoom && (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ ...room.pos, position: 'absolute' }}
                className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl bg-background/80 backdrop-blur-md p-1 pointer-events-auto"
              >
                <Link to={`/rooms`} className="block w-full h-full relative rounded-2xl overflow-hidden group">
                  <img src={room.img} alt="Room" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[8px] font-black text-white uppercase tracking-widest">View Room</span>
                  </div>
                  <div className="absolute top-1 right-1 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded-lg flex items-center gap-1">
                    <Star className="w-2 h-2 fill-primary text-primary" />
                    <span className="text-[8px] font-black text-white">{room.rating}</span>
                  </div>
                </Link>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
      
      {/* Central Content */}
      <div className="relative z-20 max-w-2xl w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full mb-8 backdrop-blur-xl"
        >
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">The Gold Standard</span>
          <Sparkles className="w-3 h-3 text-primary" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-6xl md:text-8xl font-black text-foreground tracking-tighter leading-[0.85] mb-8"
        >
          Lagos <br /> 
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px hsl(var(--primary))' }}>Prestige.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-foreground/60 text-lg md:text-xl max-w-md mb-12 leading-relaxed font-medium"
        >
          A curated luxury short-let experience in the heart of Lagos' most exclusive neighborhood.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button 
            onClick={handleExplore}
            className="group bg-foreground text-background px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all hover:bg-primary hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] active:scale-95"
          >
            <span className="flex items-center gap-3">
              Explore Rooms
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={() => toast.info("Opening our private gallery...")}
            className="px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs text-foreground border border-foreground/10 hover:bg-foreground/5 transition-all backdrop-blur-sm"
          >
            View Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;