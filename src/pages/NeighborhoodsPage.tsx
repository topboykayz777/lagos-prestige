"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Coffee, ShoppingBag, Utensils } from 'lucide-react';

const NeighborhoodsPage = () => {
  const areas = [
    { name: "Old Ikoyi", desc: "The pinnacle of prestige and quiet luxury.", icon: MapPin },
    { name: "Victoria Island", desc: "The heartbeat of business and nightlife.", icon: Utensils },
    { name: "Lekki Phase 1", desc: "Trendy, vibrant, and full of character.", icon: Coffee },
    { name: "Eko Atlantic", desc: "The future of modern coastal living.", icon: ShoppingBag }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-4">Lagos <span className="text-primary">Guides.</span></h1>
          <p className="text-foreground/40 text-xl max-w-2xl mb-16">Discover the unique character of the neighborhoods where we host our most exclusive properties.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-card border border-border backdrop-blur-md hover:border-primary/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <area.icon className="w-7 h-7 text-primary group-hover:text-background" />
                </div>
                <h3 className="font-black text-2xl text-foreground mb-3">{area.name}</h3>
                <p className="text-foreground/30 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NeighborhoodsPage;