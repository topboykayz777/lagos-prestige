"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Wind, Zap, ShieldCheck, Car, Utensils, Coffee, Tv } from 'lucide-react';

const amenities = [
  { icon: Wifi, title: "Fiber WiFi", desc: "High-speed connectivity.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600" },
  { icon: Wind, title: "Climate Control", desc: "Central AC comfort.", img: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600" },
  { icon: Zap, title: "24/7 Power", desc: "Dual-grid backup.", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" },
  { icon: ShieldCheck, title: "Elite Security", desc: "Vetted personnel.", img: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=800" },
  { icon: Car, title: "Secure Parking", desc: "Dedicated spots.", img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=600" },
  { icon: Utensils, title: "Chef's Kitchen", desc: "Gourmet ready.", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600" },
  { icon: Coffee, title: "Concierge", desc: "Lifestyle management.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600" },
  { icon: Tv, title: "Smart Ent.", desc: "Premium streaming.", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600" }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-background relative overflow-hidden border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="text-center md:text-left">
            <span className="text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-2 block">The Experience</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground leading-none">
              Everything You <span className="text-primary">Need.</span>
            </h2>
          </div>
          <p className="text-foreground/40 text-sm font-medium max-w-xs text-center md:text-right">
            Seamless essentials for a perfect stay.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="p-6 rounded-[2rem] bg-card border border-border hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-background" />
                </div>
                <h3 className="text-sm font-black text-foreground mb-1">{item.title}</h3>
                <p className="text-foreground/40 text-[10px] font-medium leading-tight">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;