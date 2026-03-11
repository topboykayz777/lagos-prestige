"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-block px-4 py-1 bg-[#F4F7F5] rounded-full mb-8">
              <span className="text-[#7A9482] text-[10px] font-black uppercase tracking-widest">Our Heritage</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-[#2D3A32] mb-10 leading-[0.9]">
              Redefining <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #7A9482' }}>Hospitality.</span>
            </h2>
            <div className="space-y-6 text-[#2D3A32]/60 text-lg leading-relaxed font-medium">
              <p>
                Founded in the heart of Lagos, ILE was born from a simple observation: the discerning traveler deserves more than just a room; they deserve a sanctuary.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-4xl font-black text-[#2D3A32] mb-2">500+</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#7A9482]">Curated Suites</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-[#2D3A32] mb-2">12k</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#7A9482]">Happy Guests</p>
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
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border border-sage-100">
              <img 
                src="https://images.unsplash.com/photo-1600607687940-4ad236f759ca?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#7A9482] rounded-[3rem] p-8 flex flex-col justify-end shadow-xl hidden md:flex">
              <p className="text-white font-black text-xl leading-tight">The New Standard of Gidi.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;