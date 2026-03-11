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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: (index % 4) * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer w-full"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-3 shadow-sm">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-emerald-900 hover:text-white transition-all shadow-sm">
          <Heart className="w-3.5 h-3.5" />
        </button>
        <div className="absolute bottom-3 left-3 px-2 py-1 bg-emerald-950/90 backdrop-blur-md rounded-lg flex items-center gap-1">
          <Star className="w-2.5 h-2.5 fill-emerald-400 text-emerald-400" />
          <span className="text-[10px] font-bold text-white">{rating}</span>
        </div>
      </div>
      
      <div className="px-1">
        <h3 className="font-bold text-xs text-emerald-950 leading-tight mb-0.5 truncate">{title}</h3>
        <p className="text-emerald-900/40 text-[9px] mb-1 truncate uppercase tracking-wider font-bold">{location}</p>
        <p className="font-black text-xs text-emerald-900">
          {price} <span className="text-emerald-900/30 font-normal text-[9px]">/ night</span>
        </p>
      </div>
    </motion.div>
  );
};

export default ApartmentCard;