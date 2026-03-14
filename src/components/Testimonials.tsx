"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';

const reviews = [
  { name: "Sarah Jenkins", text: "The attention to detail is unlike anything I've seen in Lagos. Seamless stay.", type: "whatsapp" },
  { name: "Chidi Okoro", text: "Lagos Prestige is my go-to for every business trip. Top-notch security.", type: "instagram" },
  { name: "Elena Rodriguez", text: "A true sanctuary in the heart of the city. World-class design.", type: "whatsapp" },
  { name: "David Adeleke", text: "The private chef service was the highlight of my stay. Exceptional.", type: "instagram" },
  { name: "Amina Bello", text: "Fastest internet I've experienced in Ikoyi. Perfect for remote work.", type: "whatsapp" },
  { name: "John Smith", text: "The concierge team is incredibly responsive. Highly recommended.", type: "instagram" }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const visibleReviews = [
    reviews[index % reviews.length],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  return (
    <section id="journal" className="py-20 bg-background overflow-hidden border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block px-4 py-1 bg-primary/5 border border-primary/20 rounded-full mb-4">
            <span className="text-primary text-[9px] font-black uppercase tracking-[0.4em]">Guest Journal</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground leading-none">
            What Our <span className="text-primary">Guests Say.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto min-h-[200px]">
          <AnimatePresence mode="popLayout">
            {visibleReviews.map((review, i) => (
              <motion.div
                key={`${review.name}-${index}-${i}`}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`p-6 rounded-[2rem] flex flex-col relative shadow-sm border ${
                  review.type === 'whatsapp' 
                    ? 'bg-[#E7FFDB] dark:bg-[#075E54]/20 border-[#25D366]/20 self-start rounded-tl-none' 
                    : 'bg-white dark:bg-white/5 border-primary/10 self-end rounded-br-none'
                }`}
              >
                <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-4">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <h4 className="font-black text-[10px] uppercase tracking-widest opacity-40">
                    {review.name}
                  </h4>
                  {review.type === 'whatsapp' ? (
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  ) : (
                    <Instagram className="w-4 h-4 text-[#E1306C]" />
                  )}
                </div>
                
                {/* Chat bubble tail simulation */}
                <div className={`absolute top-0 w-4 h-4 ${
                  review.type === 'whatsapp' 
                    ? '-left-2 bg-[#E7FFDB] dark:bg-[#075E54]/20 border-l border-t border-[#25D366]/20 rotate-[-45deg]' 
                    : '-right-2 bottom-0 bg-white dark:bg-white/5 border-r border-b border-primary/10 rotate-[-45deg]'
                }`} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;