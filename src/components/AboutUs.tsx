"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 rounded-full mb-8">
              <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">Our Heritage</span>
            </div>
            <h2 className="text-7xl font-black tracking-tighter text-black mb-10 leading-[0.9]">
              Redefining <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #000' }}>Hospitality.</span>
            </h2>
            <div className="space-y-6 text-gray-500 text-xl leading-relaxed font-medium">
              <p>
                Founded in the heart of Lagos, ILE was born from a simple observation: the discerning traveler deserves more than just a room; they deserve a sanctuary.
              </p>
              <p>
                We curate the most exclusive properties in Nigeria, ensuring each space meets our rigorous standards for design, security, and comfort. Our mission is to bridge the gap between luxury living and the warmth of home.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-4xl font-black text-black mb-2">500+</h4>
                <p className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">Curated Suites</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-black mb-2">12k</h4>
                <p className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">Happy Guests</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600607687940-4ad236f759ca?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#D4AF37] rounded-[3rem] p-10 flex flex-col justify-end shadow-2xl hidden md:flex">
              <p className="text-black font-black text-2xl leading-tight">The Gold Standard of Gidi.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;