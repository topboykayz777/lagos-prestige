"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { MapPin, Coffee, ShoppingBag, Utensils } from 'lucide-react';

const NeighborhoodsPage = () => {
  const areas = [
    { name: "Old Ikoyi", desc: "The pinnacle of prestige and quiet luxury.", icon: MapPin },
    { name: "Victoria Island", desc: "The heartbeat of business and nightlife.", icon: Utensils },
    { name: "Lekki Phase 1", desc: "Trendy, vibrant, and full of character.", icon: Coffee },
    { name: "Eko Atlantic", desc: "The future of modern coastal living.", icon: ShoppingBag }
  ];

  return (
    <div className="min-h-screen bg-[#0A1128] font-sans selection:bg-[#C5A059] selection:text-[#0A1128]">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">Lagos <span className="text-[#C5A059]">Guides.</span></h1>
          <p className="text-white/40 text-xl max-w-2xl mb-16">Discover the unique character of the neighborhoods where we host our most exclusive properties.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#C5A059]/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/10 flex items-center justify-center mb-6 group-hover:bg-[#C5A059] transition-colors">
                  <area.icon className="w-7 h-7 text-[#C5A059] group-hover:text-navy" />
                </div>
                <h3 className="font-black text-2xl text-white mb-3">{area.name}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default NeighborhoodsPage;