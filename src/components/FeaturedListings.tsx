"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ApartmentCard from './ApartmentCard';

const listings = Array.from({ length: 20 }).map((_, i) => ({
  image: `https://images.unsplash.com/photo-${1600000000000 + i * 100000}?auto=format&fit=crop&q=80&w=800`,
  title: ["Eko Suite", "Maitama Loft", "Banana Villa", "Lekki Penthouse", "Azure Hub", "Zenith Stay", "Ocean View", "Royal Garden", "Skyline", "Sanctuary", "Emerald", "Ivory", "Marble", "Onyx", "Pearl", "Ruby", "Sapphire", "Topaz", "Amber", "Jade"][i],
  location: ["VI, Lagos", "Abuja", "Ikoyi", "Lekki", "Oniru", "Asokoro", "Eko Atlantic", "Ikeja", "Central Area", "Enugu", "Calabar", "Port Harcourt", "Ibadan", "Kano", "Kaduna", "Jos", "Benin", "Warri", "Uyo", "Abeokuta"][i],
  price: `₦${150 + i * 20}k`,
  rating: (4.5 + (i % 5) * 0.1).toFixed(1)
}));

const FeaturedListings = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pyramidY = useTransform(scrollYProgress, [0, 1], ["5%", "-85%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-[#F8F9F8] overflow-hidden">
      {/* Clean Aesthetic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(16,185,129,0.03)_0%,_transparent_50%)]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-900/5 blur-[120px] rounded-full" />
      </div>

      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Fixed Header */}
        <motion.div 
          style={{ opacity: headerOpacity }}
          className="absolute top-32 left-0 right-0 z-20 pointer-events-none"
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-xl">
              <h2 className="text-6xl font-black tracking-tighter text-emerald-950 mb-4 leading-none">Curated <br /> <span className="text-emerald-600">Collections.</span></h2>
              <p className="text-emerald-900/40 text-lg leading-relaxed font-medium">
                Twenty handpicked sanctuaries across Nigeria's most prestigious postcodes.
              </p>
            </div>
            <button className="px-10 py-5 bg-emerald-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-emerald-800 transition-all shadow-xl pointer-events-auto">
              View All Suites
            </button>
          </div>
        </motion.div>

        {/* Scrolling Pyramid Content (6-5-4-3-2 = 20 items) */}
        <motion.div 
          style={{ y: pyramidY }}
          className="max-w-7xl mx-auto px-6 w-full space-y-20 pt-[45vh] pb-32"
        >
          {/* Row 1: 6 items */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {listings.slice(0, 6).map((listing, i) => (
              <ApartmentCard key={i} {...listing} index={i} />
            ))}
          </div>

          {/* Row 2: 5 items */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-[90%] mx-auto">
            {listings.slice(6, 11).map((listing, i) => (
              <ApartmentCard key={i + 6} {...listing} index={i} />
            ))}
          </div>

          {/* Row 3: 4 items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[75%] mx-auto">
            {listings.slice(11, 15).map((listing, i) => (
              <ApartmentCard key={i + 11} {...listing} index={i} />
            ))}
          </div>

          {/* Row 4: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[55%] mx-auto">
            {listings.slice(15, 18).map((listing, i) => (
              <ApartmentCard key={i + 15} {...listing} index={i} />
            ))}
          </div>

          {/* Row 5: 2 items */}
          <div className="grid grid-cols-2 gap-4 max-w-[35%] mx-auto">
            {listings.slice(18, 20).map((listing, i) => (
              <ApartmentCard key={i + 18} {...listing} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedListings;