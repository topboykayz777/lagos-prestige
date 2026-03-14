"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookingBar from '@/components/BookingBar';
import FeaturedListings from '@/components/FeaturedListings';
import Amenities from '@/components/Amenities';
import Testimonials from '@/components/Testimonials';
import AboutUs from '@/components/AboutUs';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
        <AboutUs />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;