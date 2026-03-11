"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const AboutUs = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-block px-5 py-1.5 bg-[#FAF9F6] border border-[#C5A059]/20 rounded-full mb-8">
              <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest">The Visionary</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#1A241E] mb-10 leading-[0.85]">
              My Story, <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #C5A059' }}>Your Stay.</span>
            </h2>
            <div className="space-y-6 text-[#1A241E]/60 text-xl leading-relaxed font-medium">
              <p>
                I started ILE with a simple belief: hospitality should be personal. Every apartment in this collection is a space I would personally live in.
              </p>
              <p>
                From the hand-picked art to the 24/7 concierge service, I've designed every detail to ensure you feel at home in the heart of Lagos.
              </p>
            </div>
            
            <div className="mt-16 flex flex-wrap gap-12">
              <div className="cursor-pointer group" onClick={() => toast.info("500+ Suites available")}>
                <h4 className="text-5xl font-black text-[#1A241E] mb-2 group-hover:text-[#C5A059] transition-colors">500+</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#C5A059]">Curated Suites</p>
              </div>
              <div className="cursor-pointer group" onClick={() => toast.info("12,000+ Happy Guests")}>
                <h4 className="text-5xl font-black text-[#1A241E] mb-2 group-hover:text-[#C5A059] transition-colors">12k</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#C5A059]">Happy Guests</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border border-[#C5A059]/10">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Interior Detail" 
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              onClick={() => toast.success("Welcome to Gidi!")}
              className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#1A241E] rounded-[3.5rem] p-10 flex flex-col justify-end shadow-2xl hidden md:flex border border-[#C5A059]/20 cursor-pointer hover:scale-105 transition-transform"
            >
              <p className="text-white font-black text-2xl leading-tight">My Standard of <span className="text-[#C5A059]">Gidi.</span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;