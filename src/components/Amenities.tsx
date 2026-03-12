"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Wind, Zap, ShieldCheck, Car, Utensils, Coffee, Tv } from 'lucide-react';

const amenities = [
  { icon: Wifi, title: "Fiber WiFi", desc: "Uninterrupted high-speed connectivity.", size: "col-span-1" },
  { icon: Wind, title: "Climate Control", desc: "Central AC for your comfort.", size: "col-span-1" },
  { icon: Zap, title: "24/7 Power", desc: "Dual-grid backup systems.", size: "col-span-2" },
  { icon: ShieldCheck, title: "Elite Security", desc: "Vetted personnel & CCTV.", size: "col-span-2" },
  { icon: Car, title: "Secure Parking", desc: "Dedicated spots for every guest.", size: "col-span-1" },
  { icon: Utensils, title: "Chef's Kitchen", desc: "Fully equipped for gourmet meals.", size: "col-span-1" },
  { icon: Coffee, title: "Private Concierge", desc: "Personalized lifestyle management.", size: "col-span-1" },
  { icon: Tv, title: "Smart Entertainment", desc: "Premium streaming & sound.", size: "col-span-1" }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-32 bg-[#0A1128] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">The Experience</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
              Everything You <br /> <span className="text-primary">Need.</span>
            </h2>
          </div>
          <p className="text-white/40 text-xl font-medium max-w-xs text-right">
            We provide the essentials and the extras to make your stay seamless.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ y: -5, borderColor: 'rgba(197, 160, 89, 0.5)' }}
              className={`${item.size} p-8 md:p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 group cursor-default relative overflow-hidden`}
            >
              {/* Subtle Inner Glow on Hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-[#0A1128] transition-colors" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-white/30 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;