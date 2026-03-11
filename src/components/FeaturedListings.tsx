"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ApartmentCard from './ApartmentCard';

const listings = [
  // Row 1 (4 items)
  { image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800", title: "Eko Penthouse", location: "VI, Lagos", price: "₦450k", rating: "5.0" },
  { image: "https://images.unsplash.com/photo-1600607687940-4ad236f759ca?q=80&w=800", title: "Maitama Suite", location: "Maitama, Abuja", price: "₦320k", rating: "4.9" },
  { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800", title: "Banana Island", location: "Ikoyi, Lagos", price: "₦750k", rating: "5.0" },
  { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800", title: "Heritage Loft", location: "Lekki, Lagos", price: "₦180k", rating: "4.8" },
  // Row 2 (3 items)
  { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800", title: "Azure Villa", location: "Oniru, Lagos", price: "₦280k", rating: "4.9" },
  { image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800", title: "The Zenith", location: "Asokoro, Abuja", price: "₦400k", rating: "5.0" },
  { image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800", title: "Ocean View", location: "Eko Atlantic", price: "₦550k", rating: "4.9" },
  // Row 3 (2 items)
  { image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800", title: "Royal Garden", location: "GRA, Ikeja", price: "₦150k", rating: "4.7" },
  { image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800", title: "Skyline Hub", location: "Central Area, Abuja", price: "₦220k", rating: "4.8" },
  // Row 4 (1 item)
  { image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800", title: "The Sanctuary", location: "Enugu, Nigeria", price: "₦120k", rating: "4.9" }
];

const FeaturedListings = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pyramidY = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#FAF9F6]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col pt-32">
        <div className="max-w-7xl mx-auto px-6 w-full mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end gap-8"
          >
            <div className="max-w-xl">
              <h2 className="text-6xl font-black tracking-tighter text-black mb-6 leading-none">Curated <br /> <span className="text-[#D4AF37]">Collections.</span></h2>
              <p className="text-black/50 text-xl leading-relaxed">
                Handpicked luxury spaces across Nigeria's most prestigious neighborhoods.
              </p>
            </div>
            <button className="px-10 py-5 bg-black text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#D4AF37] hover:text-black transition-all shadow-2xl">
              View All Suites
            </button>
          </motion.div>
        </div>

        <motion.div 
          style={{ y: pyramidY }}
          className="max-w-7xl mx-auto px-6 w-full space-y-12 pb-32"
        >
          {/* Row 1: 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {listings.slice(0, 4).map((listing, i) => (
              <ApartmentCard key={i} {...listing} index={i} />
            ))}
          </div>

          {/* Row 2: 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[85%] mx-auto">
            {listings.slice(4, 7).map((listing, i) => (
              <ApartmentCard key={i + 4} {...listing} index={i} />
            ))}
          </div>

          {/* Row 3: 2 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[60%] mx-auto">
            {listings.slice(7, 9).map((listing, i) => (
              <ApartmentCard key={i + 7} {...listing} index={i} />
            ))}
          </div>

          {/* Row 4: 1 item */}
          <div className="grid grid-cols-1 gap-8 max-w-[30%] mx-auto">
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