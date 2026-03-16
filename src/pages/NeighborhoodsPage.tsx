"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Coffee, ShoppingBag, Utensils, Landmark, Waves } from 'lucide-react';

const NeighborhoodsPage = () => {
  const areas = [
    { 
      name: "Old Ikoyi", 
      desc: "The pinnacle of prestige and quiet luxury. Home to the city's most exclusive residences and diplomatic missions.", 
      highlights: ["Ikoyi Club 1938", "Lagos Polo Club", "Bourdillon Road"],
      icon: Landmark,
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800"
    },
    { 
      name: "Victoria Island", 
      desc: "The heartbeat of business and nightlife. A vibrant mix of corporate headquarters and the city's best dining.", 
      highlights: ["Eko Hotels", "Landmark Beach", "Civic Centre"],
      icon: Utensils,
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
    },
    { 
      name: "Lekki Phase 1", 
      desc: "Trendy, vibrant, and full of character. The cultural hub for young professionals and creative entrepreneurs.", 
      highlights: ["Nike Art Gallery", "Lekki Conservation Centre", "Admiralty Way"],
      icon: Coffee,
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
    },
    { 
      name: "Eko Atlantic", 
      desc: "The future of modern coastal living. A world-class city built on reclaimed land with stunning ocean views.", 
      highlights: ["The Marina", "Eko Boulevard", "Coastal Road"],
      icon: Waves,
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-6">Lagos <span className="text-primary">Guides.</span></h1>
            <p className="text-foreground/40 text-xl max-w-2xl mb-16">Discover the unique character of the neighborhoods where we host our most exclusive properties. Each area offers a distinct flavor of Lagos luxury.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {areas.map((area, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[4rem] bg-card border border-border"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={area.img} alt={area.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                
                <div className="p-10 relative z-10 -mt-20">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-xl">
                    <area.icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="font-black text-3xl text-foreground mb-4">{area.name}</h3>
                  <p className="text-foreground/60 text-lg leading-relaxed mb-8">{area.desc}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {area.highlights.map((h, j) => (
                      <span key={j} className="px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black uppercase tracking-widest text-primary">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NeighborhoodsPage;