"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Coffee, Car } from 'lucide-react';

const features = [
  { icon: Shield, title: "Vetted Security", desc: "24/7 armed security.", color: "bg-[#D4AF37]/10 text-[#D4AF37]" },
  { icon: Zap, title: "Uninterrupted Power", desc: "Dual-grid systems.", color: "bg-[#D4AF37]/10 text-[#D4AF37]" },
  { icon: Coffee, title: "Premium Concierge", desc: "Private chefs.", color: "bg-[#D4AF37]/10 text-[#D4AF37]" },
  { icon: Car, title: "Prime Locations", desc: "Heart of Ikoyi.", color: "bg-[#D4AF37]/10 text-[#D4AF37]" }
];

const Features = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0A0A0A]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="inline-block px-4 py-1 border border-[#D4AF37]/30 rounded-full mb-6 w-fit">
              <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">The ILE Standard</span>
            </div>
            <h2 className="text-6xl font-black tracking-tighter text-white mb-8 leading-none">
              Uncompromising <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #D4AF37' }}>Excellence.</span>
            </h2>
            <p className="text-white/50 text-xl leading-relaxed max-w-md">
              We don't just provide apartments; we curate experiences. Every property in our collection undergoes a rigorous 50-point inspection.
            </p>
          </motion.div>

          <motion.div 
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((f, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#D4AF37]/50 transition-all duration-500 group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${f.color} group-hover:scale-110 transition-transform`}>
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="font-black text-xl text-white mb-3">{f.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;