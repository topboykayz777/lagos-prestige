"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { motion } from 'framer-motion';
import { Star, MapPin, Shield, Zap, Wifi, Coffee, Utensils, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { allRooms } from '@/data/rooms';

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const room = allRooms.find(r => r.id === id) || allRooms[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const amenities = [
    { icon: Zap, label: "24/7 Power" },
    { icon: Shield, label: "Elite Security" },
    { icon: Wifi, label: "Fiber Internet" },
    { icon: Coffee, label: "Nespresso" },
    { icon: Utensils, label: "Chef Service" },
    { icon: CheckCircle2, label: "Smart TV" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="aspect-[16/9] rounded-[3rem] overflow-hidden border border-border shadow-2xl">
                  <img 
                    src={room.gallery[selectedImg] || room.image} 
                    alt={room.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                  {(room.gallery.length > 0 ? room.gallery : [room.image]).map((img, i) => (
                    <button 
                      key={i}
                      onClick={() => setSelectedImg(i)}
                      className={`w-24 h-24 rounded-2xl overflow-hidden border-2 shrink-0 transition-all ${selectedImg === i ? 'border-primary scale-95' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                <div className="pt-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full">
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      <span className="text-[10px] font-black text-primary">{room.rating}</span>
                    </div>
                    <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">{room.reviews} Reviews</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground mb-6">{room.title}</h1>
                  
                  <div className="flex items-center gap-2 text-foreground/60 mb-8">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-bold">{room.location}, Lagos</span>
                  </div>

                  <p className="text-foreground/60 text-lg leading-relaxed mb-12 max-w-3xl">
                    {room.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {amenities.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span className="text-xs font-black uppercase tracking-widest text-foreground/80">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-32 p-10 rounded-[3rem] bg-card border border-border shadow-2xl"
              >
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest block mb-1">Price per night</span>
                    <span className="text-4xl font-black text-primary">{room.price}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-2xl bg-background border border-border">
                    <span className="text-[9px] font-black text-primary uppercase tracking-widest block mb-1">Dates</span>
                    <p className="text-sm font-bold">Select dates in search</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-background border border-border">
                    <span className="text-[9px] font-black text-primary uppercase tracking-widest block mb-1">Guests</span>
                    <p className="text-sm font-bold">2 Adults</p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-6 bg-primary text-background rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-xl mb-4"
                >
                  Reserve Now
                </button>
                
                <p className="text-center text-[9px] font-black text-foreground/30 uppercase tracking-widest">
                  No payment required yet
                </p>

                <div className="mt-8 pt-8 border-t border-border/50 space-y-4">
                  <div className="flex items-center gap-3 text-foreground/60">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Vetted Security Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/60">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">24/7 Power Backup</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        room={room} 
      />

      <Footer />
    </div>
  );
};

export default RoomDetail;