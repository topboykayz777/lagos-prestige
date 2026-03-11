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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer w-full max-w-[240px] mx-auto"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] mb-3">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <button className="absolute top-3 right-3 p-1.5 bg-white/20 backdrop-blur-md rounded-full hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-white group-hover:text-red-500 transition-colors" />
        </button>
        <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-white/90 backdrop-blur-md rounded-full flex items-center gap-1">
          <Star className="w-2.5 h-2.5 fill-black" />
          <span className="text-[10px] font-bold">{rating}</span>
        </div>
      </div>
      
      <div className="px-1">
        <h3 className="font-bold text-sm leading-tight mb-0.5 truncate">{title}</h3>
        <p className="text-gray-500 text-[10px] mb-1 truncate">{location}</p>
        <p className="font-black text-sm">
          {price} <span className="text-gray-400 font-normal text-[10px]">/ night</span>
        </p>
      </div>
    </motion.div>
  );
};

export default ApartmentCard;