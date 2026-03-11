"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] m-4">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Apartment" 
          className="w-full h-full object-cover brightness-75"
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
        >
          Find your sanctuary <br /> in the city.
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-md p-2 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-3xl mx-auto"
        >
          <div className="flex-1 flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-gray-100 w-full">
            <Search className="w-5 h-5 text-gray-400" />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase text-gray-400">Location</p>
              <input type="text" placeholder="Where are you going?" className="bg-transparent outline-none text-sm font-medium w-full" />
            </div>
          </div>
          
          <div className="flex-1 flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-gray-100 w-full">
            <Calendar className="w-5 h-5 text-gray-400" />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase text-gray-400">Check in</p>
              <p className="text-sm font-medium">Add dates</p>
            </div>
          </div>
          
          <div className="flex-1 flex items-center gap-3 px-6 py-3 w-full">
            <Users className="w-5 h-5 text-gray-400" />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase text-gray-400">Guests</p>
              <p className="text-sm font-medium">Add guests</p>
            </div>
          </div>
          
          <button className="bg-black text-white p-4 rounded-2xl hover:bg-gray-800 transition-colors w-full md:w-auto">
            <Search className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;