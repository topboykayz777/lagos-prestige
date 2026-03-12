"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Wind, Zap, ShieldCheck, Car, Utensils } from 'lucide-react';

const amenities = [
  { icon: Wifi, title: "High-Speed WiFi", desc: "Fiber optic connection in every room." },
  { icon: Wind, title: "Full AC", desc: "Central cooling for your comfort." },
  { icon: Zap, title: "24/7 Power", desc: "Dual backup generator systems." },
  { icon: ShieldCheck, title: "Top Security", desc: "Vetted personnel and CCTV." },
  { icon: Car, title: "Secure Parking", desc: "Dedicated spots for every guest." },
  { icon: Utensils, title: "Chef's Kitchen", desc: "Fully equipped for gourmet meals." }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-32 bg-white rounded-[4rem] mx-4 md:mx-6 my-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">The Experience</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#0A1128] mb-8 leading-none">
            Everything You <br /> <span className="text-[#C5A059]">Need.</span>
          </h2>
          <p className="text-[#0A1128]/60 text-xl font-medium">
            We provide the essentials and the extras to make your stay seamless.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
          {amenities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-3xl bg-[#0A1128]/5 flex items-center justify-center mb-6 group-hover:bg-[#C5A059] transition-all duration-500">
                <item.icon className="w-8 h-8 text-[#C5A059] group-hover:text-[#0A1128] transition-colors" />
              </div>
              <h3 className="text-xl font-black text-[#0A1128] mb-3">{item.title}</h3>
              <p className="text-[#0A1128]/40 text-sm font-medium max-w-[200px]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;