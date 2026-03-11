"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Coffee, Car } from 'lucide-react';

const features = [
  { icon: Shield, title: "Vetted Security", desc: "24/7 armed security.", color: "bg-blue-500/10 text-blue-500" },
  { icon: Zap, title: "Uninterrupted Power", desc: "Dual-grid systems.", color: "bg-yellow-500/10 text-yellow-500" },
  { icon: Coffee, title: "Premium Concierge", desc: "Private chefs.", color: "bg-emerald-500/10 text-emerald-500" },
  { icon: Car, title: "Prime Locations", desc: "Heart of Ikoyi.", color: "bg-purple-500/10 text-purple-500" }
];

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-5xl font-black tracking-tighter text-black mb-6">The ILE <br /> <span className="text-[#D4AF37]">Standard.</span></h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We don't just provide apartments; we curate experiences. Every property in our collection undergoes a 50-point inspection.
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
            <div key={i} className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-black text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;