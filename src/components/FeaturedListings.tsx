"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import RoomCard from './RoomCard';
import { allRooms } from '@/data/rooms';

const FeaturedListings = () => {
  const { theme } = useTheme();
  
  // Create a pyramid-like layout with the data
  const rows = [
    allRooms.slice(0, 3),
    allRooms.slice(3, 5),
  ];

  const darkBg = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200";
  const lightBg = "https://images.unsplash.com/photo-1600607687940-467f5b637a61?auto=format&fit=crop&q=80&w=1200";

  return (
    <section id="rooms" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Collection</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-none">
            Explore Our <span className="text-primary">Rooms.</span>
          </h2>
        </div>

        <div className="relative rounded-[3rem] overflow-hidden border border-primary/20 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.img 
                key={theme}
                src={theme === 'dark' ? darkBg : lightBg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          </div>
          
          <div className="relative z-10 h-auto w-full p-8 md:p-12">
            <div className="flex flex-col gap-8 items-center">
              {rows.map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className="flex flex-wrap justify-center gap-4 md:gap-8 w-full"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;