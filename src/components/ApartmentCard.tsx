"use client";

import React from 'react';
import { Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ApartmentProps {
  image: string;
  title: string;
  location: string;
  price: string;
  rating: string;
  index?: number;
}

const ApartmentCard = ({ image, title, location, price, rating, index = 0 }: ApartmentProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.05, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer w-full"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-4 shadow-xl bg-white/5">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          loading="lazy"
        />
        <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full hover:bg-[#C5A059] hover:text-white transition-all shadow-lg">
          <Heart className="w-4 h-4" />
        </button>
        <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl flex items-center gap-1.5 shadow-lg">
          <Star className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
          <span className="text-[11px] font-black text-[#1A241E]">{rating}</span>
        </div>
      </div>
      
      <div className="px-2">
        <h3 className="font-black text-sm text-white leading-tight mb-1 truncate group-hover:text-[#C5A059] transition-colors">{title}</h3>
        <p className="text-white/60 text-[10px] mb-2 truncate uppercase tracking-widest font-bold">{location}</p>
        <p className="font-black text-sm text-[#C5A059]">
          {price} <span className="text-white/40 font-normal text-[10px]">/ night</span>
        </p>
      </div>
    </motion.div>
  );
};

export default ApartmentCard;