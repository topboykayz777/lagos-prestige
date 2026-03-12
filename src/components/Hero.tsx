"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Link } from 'react-router-dom';

const floatingRooms = [
  { id: 'executive-suite', img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop", rating: "5.0", pos: { top: '12%', left: '8%' } },
  { id: 'deluxe-king', img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop", rating: "4.9", pos: { top: '18%', right: '10%' } },
  { id: 'penthouse-master', img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop", rating: "4.8", pos: { bottom: '22%', left: '12%' } },
  { id: 'skyline-studio', img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop", rating: "5.0", pos: { bottom: '18%', right: '8%' } },
  { id: 'garden-view', img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop", rating: "4.9", pos: { top: '45%', right: '4%' } },
];

const Hero = () => {
  const { theme } = useTheme();
  const [activeRoom, setActiveRoom] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoom((prev) => (prev + 1) % floatingRooms.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const darkImage = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000";
  const lightImage = "https://images.unsplash.com/photo-1600607687940-467f5b637a61?auto=format&fit=crop&q=80&w=2000";

  return (
    <section className="relative h-screen flex flex-col items-center justify-start pt-32 px-6 overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={theme}
            initial={{ opacity: 0 }}
            animate={{ opacity: theme === 'dark' ? 0.2 : 0.4 }}
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
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ ...room.pos, position: 'absolute' }}
                className="w-44 h-44 rounded-[2.5rem] overflow-hidden border-2 border-primary/30 shadow-2xl bg-background/80 backdrop-blur-md p-1.5 pointer-events-auto"
              >
                <Link to={`/rooms`} className="block w-full h-full relative rounded-[2rem] overflow-hidden group">
                  <img src={room.img} alt="Room" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">View Room</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-xl flex items-center gap-1">
                    <Star className="w-2.5 h-2.5 fill-primary text-primary" />
                    <span className="text-[10px] font-black text-white">{room.rating}</span>
                  </div>
                </Link>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
      
      {/* Central Content - Moved Upwards */}
      <div className="relative z-20 max-w-2xl w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase mb-2">
            Lagos <span className="text-primary">Prestige</span>
          </h1>
          <p className="text-foreground/60 text-sm md:text-base max-w-xs leading-relaxed font-medium">
            A curated luxury short-let experience in the heart of Ikoyi.
          </p>
          <div className="w-12 h-[1px] bg-primary/30 mt-4" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;