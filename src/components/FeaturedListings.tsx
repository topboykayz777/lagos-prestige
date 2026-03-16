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
  
  // Create a pyramid-like layout: 3 rooms in first row, 2 in second, 1 in third, then repeat or scroll
  const rows = [
    rooms.slice(0, 3),
    rooms.slice(3, 5),
    rooms.slice(5, 6),
    rooms.slice(6, 9),
  ].filter(row => row.length > 0);

  const darkBg = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200";
  const lightBg = "https://images.unsplash.com/photo-1600607687940-467f5b637a61?auto=format&fit=crop&q=80&w=1200";

  return (
    <section id="rooms" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Collection</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-none">
            Explore Our <span className="text-primary">Rooms.</span>
          </h2>
        </div>

        <div className="relative rounded-[3rem] overflow-hidden border border-primary/20 shadow-2xl bg-card/50 backdrop-blur-md">
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.img 
                key={theme}
                src={theme === 'dark' ? darkBg : lightBg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          
          <div className="relative z-10 h-auto w-full p-6 md:p-12 max-h-[800px] overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-8 md:gap-12 items-center">
              {rows.map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className="flex flex-wrap justify-center gap-6 md:gap-10 w-full"
                >
                  {row.map((room, i) => (
                    <RoomCard 
                      key={room.id} 
                      {...room} 
                      index={rowIndex * 3 + i} 
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
              className="w-1 h-8 bg-primary/20 rounded-full overflow-hidden"
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