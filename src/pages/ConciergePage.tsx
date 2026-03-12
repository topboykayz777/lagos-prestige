"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { UserCheck, Car, UtensilsCrossed, ShieldCheck } from 'lucide-react';

const ConciergePage = () => {
  const services = [
    { title: "Private Chefs", desc: "Gourmet meals prepared in your suite.", icon: UtensilsCrossed },
    { title: "Chauffeur Service", desc: "Luxury transport across the city.", icon: Car },
    { title: "Personal Security", desc: "Vetted protection for total peace of mind.", icon: ShieldCheck },
    { title: "Lifestyle Manager", desc: "Bookings, reservations, and errands.", icon: UserCheck }
  ];

  return (
    <div className="min-h-screen bg-[#0A1128] font-sans selection:bg-[#C5A059] selection:text-[#0A1128]">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">Private <span className="text-[#C5A059]">Concierge.</span></h1>
          <p className="text-white/40 text-xl max-w-2xl mb-16">Our dedicated team is here to ensure every aspect of your stay is perfectly tailored to your needs.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="flex items-start gap-8 p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#C5A059] flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="font-black text-2xl text-white mb-2">{service.title}</h3>
                  <p className="text-white/40 text-lg leading-relaxed">{service.desc}</p>
                </div>
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

export default ConciergePage;