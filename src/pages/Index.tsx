"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryFilter from '@/components/CategoryFilter';
import FeaturedListings from '@/components/FeaturedListings';
import Features from '@/components/Features';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-900 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <CategoryFilter />
        <AboutUs />
        <Features />
        <FeaturedListings />
        
        <section className="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
          <div className="relative h-[600px] rounded-[4rem] overflow-hidden flex items-center justify-center text-center px-6 bg-emerald-950">
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?auto=format&fit=crop&q=80&w=2000" 
              alt="Lagos Skyline" 
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            
            <div className="relative z-10 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-left"
              >
                <div className="inline-block px-6 py-2 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8 shadow-lg">
                  Partner with us
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-none">
                  Own a Piece of <br /> <span className="text-emerald-400">The Future.</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-left md:text-right"
              >
                <p className="text-white/60 mb-12 text-xl font-medium max-w-md ml-auto">
                  Join our exclusive network of property investors and earn premium returns.
                </p>
                <div className="flex flex-wrap justify-start md:justify-end gap-6">
                  <button className="bg-white text-emerald-950 px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all shadow-xl">
                    Investment Guide
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;