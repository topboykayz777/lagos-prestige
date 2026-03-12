"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookingBar from '@/components/BookingBar';
import FeaturedListings from '@/components/FeaturedListings';
import Amenities from '@/components/Amenities';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-background">
      <Navbar />
      
      <main>
        <Hero />
        <BookingBar />
        <FeaturedListings />
        <Amenities />
        <Testimonials />
        <HowItWorks />
        <Contact />
      </main>
      
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;