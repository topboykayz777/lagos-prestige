"use client";

import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface RoomProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  rating: string;
  index: number;
}

const RoomCard = ({ id, image, title, location, price, rating, index }: RoomProps) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/rooms/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group cursor-pointer w-full max-w-[180px]"
      onClick={handleDetails}
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl mb-3 shadow-lg border border-border/50">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 px-2 py-0.5 bg-background/90 backdrop-blur-md rounded-lg flex items-center gap-1 shadow-sm">
          <Star className="w-2 h-2 fill-primary text-primary" />
          <span className="text-[9px] font-black text-foreground">{rating}</span>
        </div>
      </div>
      
      <div className="px-1">
        <h3 className="font-black text-[11px] text-foreground truncate group-hover:text-primary transition-colors">{title}</h3>
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center gap-1 text-foreground/60 text-[8px] font-bold uppercase tracking-tighter">
            <MapPin className="w-2 h-2 text-primary" />
            {location}
          </div>
          <p className="font-black text-[10px] text-primary">{price}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;