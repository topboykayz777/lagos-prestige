"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-primary/5 border border-primary/20 rounded-full mb-4">
              <span className="text-primary text-[9px] font-black uppercase tracking-[0.4em]">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6 leading-none">
              Redefining <span className="text-primary">Hospitality.</span>
            </h2>
            <p className="text-foreground/60 text-lg font-medium leading-relaxed mb-8 max-w-md">
              Lagos Prestige provides a sanctuary of luxury and security for the global traveler in the heart of Ikoyi.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-foreground text-xs mb-0.5">Elite Security</h4>
                  <p className="text-foreground/40 text-[10px]">24/7 vetted protection.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-foreground text-xs mb-0.5">Personal Touch</h4>
                  <p className="text-foreground/40 text-[10px]">Tailored concierge care.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-primary/20 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200" 
                alt="Lagos Prestige Exterior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-md px-4 py-2 rounded-xl border border-primary/20">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Lagos Prestige</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;