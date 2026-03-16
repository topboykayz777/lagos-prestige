"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import RoomCard from './RoomCard';
import { Room } from '@/data/rooms';

interface FeaturedListingsProps {
  rooms: Room[];
}

const FeaturedListings = ({ rooms }: FeaturedListingsProps) => {
  const { theme } = useTheme();
  
  // Pyramid layout for 13 rooms: 4, 3, 2, 1, 3
  const rows = [
    rooms.slice(0, 4),
    rooms.slice(4, 7),
    rooms.slice(7, 9),
    rooms.slice(9, 10),
    rooms.slice(10, 13),
  ].filter(row => row.length > 0);

  const darkBg = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200";
  const lightBg = "https://images.unsplash.com/photo-1600607687940-467f5b637a61?auto=format&fit=crop&q=80&w=1200";

  return (
    <section id="rooms" className="py-16 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-10 text-center">
          <span className="text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-3 block">The Collection</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground leading-none">
            Explore Our <span className="text-primary">Rooms.</span>
          </h2>
        </div>

        <div className="relative rounded-[2.5rem] overflow-hidden border border-primary/20 shadow-2xl bg-card/30 backdrop-blur-md">
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.img 
                key={theme}
                src={theme === 'dark' ? darkBg : lightBg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.08 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          
          <div className="relative z-10 h-[600px] w-full p-6 md:p-10 overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-6 md:gap-10 items-center">
              {rows.map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className="flex flex-wrap justify-center gap-4 md:gap-8 w-full"
                >
                  {row.map((room, i) => (
                    <RoomCard 
                      key={room.id} 
                      {...room} 
                      index={rowIndex * 4 + i} 
                    />
                  ))}
                </div>
              ))}
              
              {rooms.length === 0 && (
                <div className="py-20 text-center">
                  <p className="text-foreground/40 font-black uppercase tracking-widest">No rooms found for these criteria.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-6 bg-primary/20 rounded-full overflow-hidden"
            >
              <div className="w-full h-1/2 bg-primary" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;