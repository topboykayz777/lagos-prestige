"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-block px-4 py-1 bg-indigo-500/10 rounded-full mb-8">
              <span className="text-indigo-400 text-[10px] font-black uppercase tracking-widest">Our Heritage</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-white mb-10 leading-[0.9]">
              Redefining <br /> 
              <span className="text-transparent stroke-indigo-500" style={{ WebkitTextStroke: '1px #6366F1' }}>Hospitality.</span>
            </h2>
            <div className="space-y-6 text-white/50 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                Founded in the heart of Lagos, ILE was born from a simple observation: the discerning traveler deserves more than just a room; they deserve a sanctuary.
              </p>
              <p>
                We curate the most exclusive properties in Nigeria, ensuring each space meets our rigorous standards for design, security, and comfort.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-4xl font-black text-white mb-2">500+</h4>
                <p className="text-xs font-black uppercase tracking-widest text-indigo-400">Curated Suites</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-2">12k</h4>
                <p className="text-xs font-black uppercase tracking-widest text-indigo-400">Happy Guests</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1600607687940-4ad236f759ca?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-600 rounded-[3rem] p-10 flex flex-col justify-end shadow-2xl hidden md:flex">
              <p className="text-white font-black text-2xl leading-tight">The New Standard of Gidi.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;