"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronRight } from 'lucide-react';

const spotlightReviews = [
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    review: "Absolute perfection. The view of the city at night is unmatched. Truly the gold standard of Lagos short-lets.",
    author: "Marcus T.",
    rating: "5.0"
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    review: "The private chef service was the highlight of our stay. World-class hospitality in the heart of Ikoyi.",
    author: "Elena R.",
    rating: "4.9"
  },
  {
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
    review: "Sleek, modern, and incredibly secure. Perfect for my business trip. The fiber WiFi was flawless.",
    author: "Chidi O.",
    rating: "4.8"
  },
  {
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200",
    review: "The attention to detail in the interior design is simply breathtaking. Every corner is a masterpiece.",
    author: "Sarah J.",
    rating: "5.0"
  }
];

const Spotlight = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % spotlightReviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = spotlightReviews[index];

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Guest Verdict</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
            The Prestige <br /> <span className="text-primary">Experience.</span>
          </h2>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img src={current.image} alt="Luxury Room" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-center p-10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={`review-${index}`}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl text-center"
              >
                <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
                <p className="text-white text-2xl md:text-4xl font-medium italic mb-10 leading-tight">
                  "{current.review}"
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(Number(current.rating)) ? 'fill-primary text-primary' : 'text-white/20'}`} />
                    ))}
                  </div>
                  <span className="text-primary text-sm font-black uppercase tracking-[0.3em]">— {current.author}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {spotlightReviews.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-700 ${i === index ? 'w-12 bg-primary' : 'w-3 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;