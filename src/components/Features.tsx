"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Coffee, Car } from 'lucide-react';

const features = [
  { icon: Shield, title: "Vetted Security", desc: "24/7 armed security.", color: "bg-indigo-500/10 text-indigo-400" },
  { icon: Zap, title: "Uninterrupted Power", desc: "Dual-grid systems.", color: "bg-indigo-500/10 text-indigo-400" },
  { icon: Coffee, title: "Premium Concierge", desc: "Private chefs.", color: "bg-indigo-500/10 text-indigo-400" },
  { icon: Car, title: "Prime Locations", desc: "Heart of Ikoyi.", color: "bg-indigo-500/10 text-indigo-400" }
];

const Features = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-[#050505]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-block px-4 py-1 border border-indigo-500/30 rounded-full mb-6 w-fit">
              <span className="text-indigo-400 text-[10px] font-black uppercase tracking-widest">The ILE Standard</span>
            </div>
            <h2 className="text-6xl font-black tracking-tighter text-white mb-8 leading-none">
              Uncompromising <br /> 
              <span className="text-transparent stroke-indigo-500" style={{ WebkitTextStroke: '1px #6366F1' }}>Excellence.</span>
            </h2>
            <p className="text-white/40 text-xl leading-relaxed max-w-md">
              We don't just provide apartments; we curate experiences. Every property undergoes a rigorous 50-point inspection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md hover:border-indigo-500/50 transition-all duration-500 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${f.color} group-hover:scale-110 transition-transform`}>
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="font-black text-xl text-white mb-3">{f.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;