"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedListings from '@/components/FeaturedListings';
import CategoryFilter from '@/components/CategoryFilter';

const RoomsPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-4">Our <span className="text-primary">Suites.</span></h1>
          <p className="text-foreground/40 text-xl max-w-2xl">Explore our hand-picked collection of premium rooms within the Lagos Prestige building.</p>
        </div>
        <CategoryFilter />
        <FeaturedListings />
      </main>
      <Footer />
    </div>
  );
};

export default RoomsPage;