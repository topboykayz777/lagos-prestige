"use client";

import React from 'react';
import { motion } from 'framer-motion';
import RoomCard from './RoomCard';

const allRooms = [
  { id: "1", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=400", title: "Executive Master Suite", location: "Floor 12", price: "₦150k", rating: "4.9" },
  { id: "2", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400", title: "Deluxe King Room", location: "Floor 10", price: "₦120k", rating: "5.0" },
  { id: "3", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=400", title: "Modern Studio", location: "Floor 8", price: "₦85k", rating: "4.8" },
  { id: "4", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=400", title: "Skyline View Suite", location: "Floor 11", price: "₦110k", rating: "4.7" },
  { id: "5", image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=400", title: "The Sanctuary Room", location: "Floor 5", price: "₦200k", rating: "5.0" },
  { id: "6", image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=400", title: "Urban Oasis Suite", location: "Floor 7", price: "₦95k", rating: "4.6" },
  { id: "7", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=400", title: "Gold Coast Room", location: "Floor 9", price: "₦140k", rating: "4.9" },
  { id: "8", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=400", title: "Palm View Suite", location: "Floor 6", price: "₦75k", rating: "4.5" },
  { id: "9", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=400", title: "The Zenith Suite", location: "Floor 14", price: "₦180k", rating: "5.0" },
  { id: "10", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=400", title: "Harbor Light Room", location: "Floor 4", price: "₦105k", rating: "4.7" },
  { id: "11", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=400", title: "Ivory Tower Suite", location: "Floor 15", price: "₦250k", rating: "5.0" },
  { id: "12", image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=400", title: "The Retreat Room", location: "Floor 3", price: "₦130k", rating: "4.8" },
  { id: "13", image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&q=80&w=400", title: "Neon Loft Suite", location: "Floor 2", price: "₦90k", rating: "4.6" },
  { id: "14", image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=400", title: "Ocean Breeze Room", location: "Floor 13", price: "₦160k", rating: "4.9" },
  { id: "15", image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80&w=400", title: "The Manor Suite", location: "Floor 1", price: "₦195k", rating: "5.0" },
];

const FeaturedListings = () => {
  const rows = [
    allRooms.slice(0, 5),
    allRooms.slice(5, 9),
    allRooms.slice(9, 12),
    allRooms.slice(12, 14),
    allRooms.slice(14, 15),
  ];

  return (
    <section id="rooms" className="py-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Collection</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none">
            Explore Our <span className="text-primary">Rooms.</span>
          </h2>
        </div>

        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0A1128] via-[#1A1A1A] to-[#0A1128] p-1 shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-primary/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          
          <div className="h-[500px] w-full rounded-[2.8rem] bg-black/40 backdrop-blur-sm p-8 md:p-12 overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-8 items-center">
              {rows.map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className="flex flex-wrap justify-center gap-4 md:gap-8 w-full"
                >
                  {row.map((room, i) => (
                    <RoomCard 
                      key={room.title} 
                      {...room} 
                      index={rowIndex * 5 + i} 
                    />
                  ))}
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
          </div>
        </div>
        
        <div className="mt-10 flex justify-center">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">Scroll to explore the pyramid</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;