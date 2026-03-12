"use client";

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const BookingBar = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const handleSearch = () => {
    if (!checkIn || !checkOut) {
      toast.error("Please select both check-in and check-out dates.");
      return;
    }
    toast.success(`Searching for stays from ${format(checkIn, "PPP")} to ${format(checkOut, "PPP")}`);
  };

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 -mt-12 px-6 w-full max-w-5xl mx-auto"
    >
      <div className="bg-background/80 backdrop-blur-2xl border border-border rounded-[2.5rem] p-3 md:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center gap-4">
        
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
          {/* Check In */}
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex flex-col px-6 py-3 hover:bg-primary/5 rounded-2xl transition-colors cursor-pointer group">
                <span className="text-[9px] font-black uppercase tracking-widest text-primary mb-1">Check In</span>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                  <span className={cn("text-sm font-bold", !checkIn && "text-foreground/40")}>
                    {checkIn ? format(checkIn, "MMM dd, yyyy") : "Add Date"}
                  </span>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 rounded-3xl" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                className="rounded-3xl border-none"
              />
            </PopoverContent>
          </Popover>
          
          {/* Check Out */}
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex flex-col px-6 py-3 hover:bg-primary/5 rounded-2xl transition-colors cursor-pointer group border-l border-border/50">
                <span className="text-[9px] font-black uppercase tracking-widest text-primary mb-1">Check Out</span>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                  <span className={cn("text-sm font-bold", !checkOut && "text-foreground/40")}>
                    {checkOut ? format(checkOut, "MMM dd, yyyy") : "Add Date"}
                  </span>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 rounded-3xl" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                className="rounded-3xl border-none"
              />
            </PopoverContent>
          </Popover>

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