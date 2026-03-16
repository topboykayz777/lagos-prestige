"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Amenities from '@/components/Amenities';
import Features from '@/components/Features';
import { motion } from 'framer-motion';
import { Shield, Zap, Wifi, Coffee, Utensils, Car, Tv, Wind } from 'lucide-react';

const AmenitiesPage = () => {
  const detailedAmenities = [
    { icon: Zap, title: "Uninterrupted Power", desc: "Our dual-grid system and high-capacity silent generators ensure you never experience a blackout. Work and relax with total peace of mind." },
    { icon: Shield, title: "Elite Security", desc: "24/7 on-site vetted security personnel, CCTV monitoring, and secure electronic access to all suites and common areas." },
    { icon: Wifi, title: "Fiber Connectivity", desc: "Dedicated high-speed fiber-optic internet in every suite, optimized for video conferencing, streaming, and heavy remote work." },
    { icon: Coffee, title: "Private Concierge", desc: "From airport transfers to grocery shopping, our dedicated lifestyle managers are available 24/7 to handle your every request." },
    { icon: Utensils, title: "Gourmet Dining", desc: "Access to private chefs who can prepare curated menus in your suite's kitchen, or enjoy our premium room service options." },
    { icon: Car, title: "Secure Parking", desc: "Dedicated, well-lit, and monitored parking spaces for all guests and their visitors within our gated perimeter." },
    { icon: Tv, title: "Smart Entertainment", desc: "Every suite features large 4K Smart TVs with premium streaming services, high-fidelity sound systems, and universal connectivity." },
    { icon: Wind, title: "Climate Control", desc: "Individually controlled central air conditioning systems with advanced air filtration for your ultimate comfort." }
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
            <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-6">The <span className="text-primary">Experience.</span></h1>
            <p className="text-foreground/40 text-xl max-w-2xl mb-16">We've redefined luxury by focusing on the details that matter most. From 24/7 power to elite security, your comfort is our only priority.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {detailedAmenities.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-background" />
                </div>
                <h3 className="font-black text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/40 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <Features />
        <Amenities />
      </main>
      <Footer />
    </div>
  );
};

export default AmenitiesPage;