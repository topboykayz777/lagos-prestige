"use client";

import React from 'react';
import { Star, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface ApartmentProps {
  image: string;
  title: string;
  location: string;
  price: string;
  rating: string;
  index: number;
}

const ApartmentCard = ({ image, title, location, price, rating, index }: ApartmentProps) => {
  const handleDetails = () => {
    toast.info(`Viewing details for ${title}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group cursor-pointer"
      onClick={handleDetails}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-6 shadow-2xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-6 right-6 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl flex items-center gap-1.5 shadow-lg">
          <Star className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
          <span className="text-[11px] font-black text-[#0A1128]">{rating}</span>
        </div>

        <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full py-4 bg-[#C5A059] text-[#0A1128] rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
            View Details
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="px-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-black text-xl text-white leading-tight group-hover:text-[#C5A059] transition-colors">{title}</h3>
          <p className="font-black text-lg text-[#C5A059]">{price}</p>
        </div>
        <div className="flex items-center gap-2 text-white/40 text-[11px] font-bold uppercase tracking-widest">
          <MapPin className="w-3 h-3 text-[#C5A059]" />
          {location}
        </div>
      </div>
    </motion.div>
  );
};

export default ApartmentCard;