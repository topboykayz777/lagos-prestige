"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ApartmentCard from './ApartmentCard';

const listings = [
  { image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800", title: "Eko Penthouse", location: "VI, Lagos", price: "₦450k", rating: "5.0" },
  { image: "https://images.unsplash.com/photo-1600607687940-4ad236f759ca?q=80&w=800", title: "Maitama Suite", location: "Maitama, Abuja", price: "₦320k", rating: "4.9" },
  { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800", title: "Banana Island", location: "Ikoyi, Lagos", price: "₦750k", rating: "5.0" },
  { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800", title: "Heritage Loft", location: "Lekki, Lagos", price: "₦180k", rating: "4.8" },
  { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800", title: "Azure Villa", location: "Oniru, Lagos", price: "₦280k", rating: "4.9" },
  { image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800", title: "The Zenith", location: "Asokoro, Abuja", price: "₦400k", rating: "5.0" },
  { image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800", title: "Ocean View", location: "Eko Atlantic", price: "₦550k", rating: "4.9" },
  { image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800", title: "Royal Garden", location: "GRA, Ikeja", price: "₦150k", rating: "4.7" },
  { image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800", title: "Skyline Hub", location: "Central Area, Abuja", price: "₦220k", rating: "4.8" },
  { image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800", title: "The Sanctuary", location: "Enugu, Nigeria", price: "₦120k", rating: "4.9" }
];

const FeaturedListings = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pyramidY = useTransform(scrollYProgress, [0, 1], ["10%", "-80%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-black overflow-hidden">
      {/* Dark Gold Mural Background */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2000" 
          alt="Dark Gold Mural" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Fixed Header - Fades out on scroll */}
        <motion.div 
          style={{ opacity: headerOpacity, y: headerY }}
          className="absolute top-32 left-0 right-0 z-20 pointer-events-none"
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-xl">
              <h2 className="text-6xl font-black tracking-tighter text-white mb-4 leading-none">Curated <br /> <span className="text-indigo-500">Collections.</span></h2>
              <p className="text-white/40 text-lg leading-relaxed">
                Handpicked luxury spaces across Nigeria's most prestigious neighborhoods.
              </p>
            </div>
            <button className="px-10 py-5 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-2xl pointer-events-auto">
              View All Suites
            </button>
          </div>
        </motion.div>

        {/* Scrolling Pyramid Content */}
        <motion.div 
          style={{ y: pyramidY }}
          className="max-w-5xl mx-auto px-6 w-full space-y-16 pt-[40vh] pb-32"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {listings.slice(0, 4).map((listing, i) => (
              <ApartmentCard key={i} {...listing} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[80%] mx-auto">
            {listings.slice(4, 7).map((listing, i) => (
              <ApartmentCard key={i + 4} {...listing} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-[55%] mx-auto">
            {listings.slice(7, 9).map((listing, i) => (
              <ApartmentCard key={i + 7} {...listing} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 max-w-[25%] mx-auto">
            {listings.slice(9, 10).map((listing, i) => (
              <ApartmentCard key={i + 9} {...listing} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedListings;