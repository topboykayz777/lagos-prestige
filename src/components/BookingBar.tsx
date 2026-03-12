"use client";

import React from 'react';
import { Calendar, Users, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const BookingBar = () => {
  const handleSearch = () => {
    toast.success("Searching for available suites...");
  };

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 -mt-12 px-6 w-full max-w-5xl mx-auto"
    >
      <div className="bg-background/80 backdrop-blur-2xl border border-border rounded-[2.5rem] p-3 md:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center gap-4">
        
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
          <div className="flex flex-col px-6 py-3 hover:bg-primary/5 rounded-2xl transition-colors cursor-pointer group">
            <span className="text-[9px] font-black uppercase tracking-widest text-primary mb-1">Check In</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
              <span className="text-sm font-bold text-foreground">Add Date</span>
            </div>
          </div>
          
          <div className="flex flex-col px-6 py-3 hover:bg-primary/5 rounded-2xl transition-colors cursor-pointer group border-l border-border/50">
            <span className="text-[9px] font-black uppercase tracking-widest text-primary mb-1">Check Out</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
              <span className="text-sm font-bold text-foreground">Add Date</span>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col px-6 py-3 hover:bg-primary/5 rounded-2xl transition-colors cursor-pointer group border-l border-border/50">
            <span className="text-[9px] font-black uppercase tracking-widest text-primary mb-1">Guests</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
              <span className="text-sm font-bold text-foreground">2 Guests</span>
            </div>
          </div>
        </div>

        <button 
          onClick={handleSearch}
          className="w-full md:w-auto bg-primary text-background px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
        >
          <Search className="w-4 h-4" />
          Search
        </button>
      </div>
    </motion.div>
  );
};

export default BookingBar;