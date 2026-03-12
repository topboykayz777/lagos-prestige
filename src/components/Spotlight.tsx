"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronRight } from 'lucide-react';

const spotlightRooms = [
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    title: "The Executive Master Suite",
    rating: "5.0",
    review: "Absolute perfection. The view of the city at night is unmatched.",
    author: "Marcus T."
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
    title: "Deluxe King Room",
    rating: "4.9",
    review: "The private chef service was the highlight of our stay. Truly world-class.",
    author: "Elena R."
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    title: "Modern Studio",
    rating: "4.8",
    review: "Sleek, modern, and incredibly secure. Perfect for my business trip.",
    author: "Chidi O."
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    title: "Skyline View Suite",
    rating: "5.0",
    review: "The attention to detail in the interior design is simply breathtaking.",
    author: "Sarah J."
  },
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200",
    title: "The Sanctuary Room",
    rating: "4.9",
    review: "A true oasis in the heart of the city. We'll definitely be back.",
    author: "David K."
  }
];

const Spotlight = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % spotlightRooms.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = spotlightRooms[index];

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Prestige Spotlight</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
            The Guest <br /> <span className="text-primary">Verdict.</span>
          </h2>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img src={current.image} alt={current.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row items-end justify-between gap-8">
            <motion.div 
              key={`info-${index}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-md"
            >
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">{current.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(Number(current.rating)) ? 'fill-primary text-primary' : 'text-white/20'}`} />
                  ))}
                </div>
                <span className="text-primary text-xs font-black">{current.rating} / 5.0</span>
              </div>
            </motion.div>

            <motion.div 
              key={`review-${index}`}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] max-w-sm relative group cursor-pointer hover:bg-white/15 transition-colors"
            >
              <Quote className="absolute -top-4 -left-4 w-10 h-10 text-primary/40" />
              <p className="text-white/80 text-lg font-medium italic mb-4 leading-relaxed">
                "{current.review}"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-primary text-[10px] font-black uppercase tracking-widest">— {current.author}</span>
                <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </div>

          <div className="absolute top-10 right-10 flex gap-2">
            {spotlightRooms.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setIndex(i)}
                className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;