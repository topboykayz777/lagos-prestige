"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 bg-primary/5 border border-primary/20 rounded-full mb-6">
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Our Story</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-8 leading-none">
              Redefining <br /> <span className="text-primary">Hospitality.</span>
            </h2>
            <p className="text-foreground/60 text-xl font-medium leading-relaxed mb-10">
              Lagos Prestige was born from a simple vision: to provide a sanctuary of luxury and security for the global traveler in the heart of Nigeria's most vibrant city.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-foreground text-sm mb-1">Unmatched Security</h4>
                  <p className="text-foreground/40 text-xs">Vetted personnel and 24/7 surveillance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-foreground text-sm mb-1">Personal Touch</h4>
                  <p className="text-foreground/40 text-xs">Concierge services tailored to you.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[4rem] overflow-hidden border border-primary/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;