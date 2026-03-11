"use client";

import React from 'react';
import { Shield, Zap, Coffee, Car } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Vetted Security",
    desc: "24/7 armed security and smart surveillance in all locations.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: Zap,
    title: "Uninterrupted Power",
    desc: "Dual-grid systems and solar backups for 100% uptime.",
    color: "bg-yellow-500/10 text-yellow-500"
  },
  {
    icon: Coffee,
    title: "Premium Concierge",
    desc: "Private chefs, laundry, and airport pickups on demand.",
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    icon: Car,
    title: "Prime Locations",
    desc: "The heart of Ikoyi, Lekki, and Maitama at your doorstep.",
    color: "bg-purple-500/10 text-purple-500"
  }
];

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2 flex flex-col justify-center pr-12">
          <h2 className="text-5xl font-black tracking-tighter text-black mb-6">The ILE <br /> <span className="text-[#D4AF37]">Standard.</span></h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We don't just provide apartments; we curate experiences. Every property in our collection undergoes a 50-point inspection to ensure it meets the highest global standards.
          </p>
        </div>
        {features.map((f, i) => (
          <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:shadow-xl transition-all group">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${f.color} group-hover:scale-110 transition-transform`}>
              <f.icon className="w-7 h-7" />
            </div>
            <h3 className="font-black text-xl mb-3">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;