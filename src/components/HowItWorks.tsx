"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, CreditCard, Key } from 'lucide-react';

const steps = [
  { icon: Search, title: "Browse", desc: "Explore our curated collection of premium apartments." },
  { icon: CreditCard, title: "Book", desc: "Secure your dates with our easy booking process." },
  { icon: Key, title: "Check In", desc: "Receive your digital key and enjoy your stay." }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-block px-4 py-1 border border-[#C5A059]/30 rounded-full mb-6">
            <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest">Simple Process</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
            How It <span className="text-[#C5A059]">Works.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-[#0A1128] border-2 border-[#C5A059] flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(197,160,89,0.2)]">
                <step.icon className="w-10 h-10 text-[#C5A059]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{step.title}</h3>
              <p className="text-white/40 text-lg font-medium max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;