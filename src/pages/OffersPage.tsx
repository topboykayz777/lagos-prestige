"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tag, Briefcase, Calendar, Users } from 'lucide-react';

const OffersPage = () => {
  const offers = [
    { title: "Long Stay Discount", desc: "Save up to 25% on stays over 14 days.", icon: Calendar, tag: "Best Value" },
    { title: "Corporate Rates", desc: "Special pricing for business travelers.", icon: Briefcase, tag: "Business" },
    { title: "Early Bird", desc: "Book 30 days in advance for 15% off.", icon: Tag, tag: "Limited" },
    { title: "Group Bookings", desc: "Custom packages for teams and families.", icon: Users, tag: "Custom" }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-4">Exclusive <span className="text-primary">Offers.</span></h1>
          <p className="text-foreground/40 text-xl max-w-2xl mb-16">Premium experiences at exceptional value. Explore our current promotions and corporate packages.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer, i) => (
              <div key={i} className="relative p-12 rounded-[4rem] bg-card border border-border overflow-hidden group">
                <div className="absolute top-8 right-8 px-4 py-1 bg-primary text-background text-[10px] font-black uppercase tracking-widest rounded-full">
                  {offer.tag}
                </div>
                <offer.icon className="w-12 h-12 text-primary mb-8" />
                <h3 className="font-black text-3xl text-foreground mb-4">{offer.title}</h3>
                <p className="text-foreground/40 text-lg mb-8">{offer.desc}</p>
                <button className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                  Claim Offer <span className="text-xl">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OffersPage;