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
}

const ApartmentCard = ({ image, title, location, price, rating }: ApartmentProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white transition-colors">
          <Heart className="w-5 h-5 text-white group-hover:text-red-500 transition-colors" />
        </button>
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 fill-black" />
          <span className="text-xs font-bold">{rating}</span>
        </div>
      </div>
      
      <div className="px-2">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
        </div>
        <p className="text-gray-500 text-sm mb-2">{location}</p>
        <p className="font-bold text-lg">
          {price} <span className="text-gray-400 font-normal text-sm">/ night</span>
        </p>
      </div>
    </motion.div>
  );
};

export default ApartmentCard;