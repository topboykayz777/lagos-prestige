"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Digital Nomad",
    text: "The attention to detail is unlike anything I've seen in Lagos. From the fiber-optic internet to the private chef, everything was seamless.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Chidi Okoro",
    role: "Business Executive",
    text: "Lagos Prestige is my go-to for every business trip. The security is top-notch and the locations in Ikoyi are unbeatable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Elena Rodriguez",
    role: "Travel Blogger",
    text: "A true sanctuary in the heart of the city. The interior design is world-class and the concierge service is incredibly responsive.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials = () => {
  return (
    <section id="journal" className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-block px-4 py-1 bg-primary/5 border border-primary/20 rounded-full mb-6">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Guest Journal</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-none">
            Stories from <br /> <span className="text-primary">Our Guests.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="p-10 rounded-[3rem] bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 group relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-primary/20">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black text-foreground text-lg leading-tight">{review.name}</h4>
                  <p className="text-primary text-[10px] font-black uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
              
              <p className="text-foreground/60 text-lg font-medium leading-relaxed italic">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;