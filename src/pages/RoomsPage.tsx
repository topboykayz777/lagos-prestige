"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RoomCard from '@/components/RoomCard';
import CategoryFilter from '@/components/CategoryFilter';
import { motion, AnimatePresence } from 'framer-motion';
import { allRooms, Room } from '@/data/rooms';
import { Search, SlidersHorizontal } from 'lucide-react';

const RoomsPage = () => {
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(allRooms);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filtered = allRooms.filter(room => 
      room.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRooms(filtered);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Premium Header Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1 bg-primary/5 border border-primary/20 rounded-full mb-6">
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">The Collection</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter leading-none mb-6">
                Our <span className="text-primary">Suites.</span>
              </h1>
              <p className="text-foreground/40 text-xl font-medium leading-relaxed">
                Discover 13 hand-picked luxury apartments across Lagos' most prestigious neighborhoods.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-80">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                <input 
                  type="text" 
                  placeholder="Search by name or area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-card border border-border rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </section>

        <CategoryFilter />

        {/* Room Grid Section */}
        <section className="max-w-7xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredRooms.map((room, i) => (
                <motion.div
                  key={room.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="w-full"
                >
                  {/* We use a modified version of RoomCard logic here for a larger display */}
                  <div 
                    onClick={() => {
                      window.location.href = `/rooms/${room.id}`;
                      window.scrollTo(0, 0);
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-4 shadow-xl border border-border">
                      <img 
                        src={room.image} 
                        alt={room.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-md rounded-xl flex items-center gap-1.5 shadow-sm">
                        <span className="text-[10px] font-black text-primary">★ {room.rating}</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">View Details →</span>
                      </div>
                    </div>
                    
                    <div className="px-2">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-black text-lg text-foreground leading-tight group-hover:text-primary transition-colors">{room.title}</h3>
                        <span className="font-black text-primary text-sm">{room.price}</span>
                      </div>
                      <p className="text-foreground/40 text-[10px] font-black uppercase tracking-widest">{room.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredRooms.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-foreground/30 font-black uppercase tracking-[0.3em]">No suites match your search.</p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoomsPage;