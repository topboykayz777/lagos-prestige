"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { MadeWithDyad } from "@/components/made-with-dyad";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0A1128] font-sans selection:bg-[#C5A059] selection:text-[#0A1128]">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">Get in <span className="text-[#C5A059]">Touch.</span></h1>
          <p className="text-white/40 text-xl max-w-2xl">Our concierge team is available 24/7 to assist with bookings, inquiries, or special requests.</p>
        </div>
        <Contact />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default ContactPage;