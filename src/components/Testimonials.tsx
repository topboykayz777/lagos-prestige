"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  { name: "Sarah Jenkins", text: "The attention to detail is unlike anything I've seen in Lagos. Seamless stay." },
  { name: "Chidi Okoro", text: "Lagos Prestige is my go-to for every business trip. Top-notch security." },
  { name: "Elena Rodriguez", text: "A true sanctuary in the heart of the city. World-class design." },
  { name: "David Adeleke", text: "The private chef service was the highlight of my stay. Exceptional." },
  { name: "Amina Bello", text: "Fastest internet I've experienced in Ikoyi. Perfect for remote work." },
  { name: "John Smith", text: "The concierge team is incredibly responsive. Highly recommended." }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Get 3 reviews at a time
  const visibleReviews = [
    reviews[index % reviews.length],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  return (
    <section id="journal" className="py-24 bg-background overflow-hidden border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/5 border border-primary/20 rounded-full mb-4">
            <span className="text-primary text-[9px] font-black uppercase tracking-[0.4em]">Guest Journal</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground leading-none">
            What Our <span className="text-primary">Guests Say.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-48">
          <AnimatePresence mode="popLayout">
            {visibleReviews.map((review, i) => (
              <motion.div
                key={`${review.name}-${index}-${i}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-[2.5rem] bg-card border border-border flex flex-col justify-center items-center text-center shadow-sm"
              >
                <p className="text-foreground/70 text-sm font-medium leading-relaxed italic mb-4">
                  "{review.text}"
                </p>
                <h4 className="font-black text-primary text-[10px] uppercase tracking-widest">
                  — {review.name}
                </h4>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;