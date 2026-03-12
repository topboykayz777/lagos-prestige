"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import RevealWrapper from './RevealWrapper';

const AboutUs = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper>
          <div className="pr-0 lg:pr-20 mb-16 lg:mb-0">
            <div className="inline-block px-5 py-1.5 bg-primary/5 border border-primary/20 rounded-full mb-8">
              <span className="text-primary text-[10px] font-black uppercase tracking-widest">The Visionary</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-10 leading-[0.85]">
              My Story, <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px hsl(var(--primary))' }}>Your Stay.</span>
            </h2>
            <div className="space-y-6 text-foreground/60 text-xl leading-relaxed font-medium">
              <p>
                I started Lagos Prestige with a simple belief: hospitality should be personal. Every apartment in this collection is a space I would personally live in.
              </p>
              <p>
                From the hand-picked art to the 24/7 concierge service, I've designed every detail to ensure you feel at home in the heart of Lagos.
              </p>
            </div>
            
            <div className="mt-16 flex flex-wrap gap-12">
              <div className="cursor-pointer group" onClick={() => toast.info("500+ Suites available")}>
                <h4 className="text-5xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">500+</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-primary">Curated Suites</p>
              </div>
              <div className="cursor-pointer group" onClick={() => toast.info("12,000+ Happy Guests")}>
                <h4 className="text-5xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">12k</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-primary">Happy Guests</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border border-primary/10">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Interior Detail" 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 0.8 }}
              onClick={() => toast.success("Welcome to Gidi!")}
              className="absolute -bottom-10 -left-10 w-64 h-64 bg-foreground rounded-[3.5rem] p-10 flex flex-col justify-end shadow-2xl hidden md:flex border border-primary/20 cursor-pointer hover:scale-105 transition-transform"
            >
              <p className="text-background font-black text-2xl leading-tight">My Standard of <span className="text-primary">Gidi.</span></p>
            </motion.div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default AboutUs;