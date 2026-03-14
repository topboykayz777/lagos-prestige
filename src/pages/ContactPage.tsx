"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-4">Get in <span className="text-primary">Touch.</span></h1>
          <p className="text-foreground/40 text-xl max-w-2xl">Our concierge team is available 24/7 to assist with bookings, inquiries, or special requests.</p>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;