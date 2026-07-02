"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, MessageSquare, Phone, User, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { saveBooking } from '@/utils/bookings';
import { Room } from '@/data/rooms';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: Room;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

const BookingModal = ({ isOpen, onClose, room, initialCheckIn = '', initialCheckOut = '', initialGuests = 2 }: BookingModalProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [guests, setGuests] = useState(initialGuests);
  const [note, setNote] = useState('');

  // Sync with initial values when modal opens
  useEffect(() => {
    if (isOpen) {
      setCheckIn(initialCheckIn);
      setCheckOut(initialCheckOut);
      setGuests(initialGuests);
    }
  }, [isOpen, initialCheckIn, initialCheckOut, initialGuests]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !checkIn || !checkOut) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Save to local storage database
    saveBooking({
      roomId: room.id,
      roomTitle: room.title,
      guestName: name,
      whatsappNumber: phone,
      checkIn,
      checkOut,
      guests,
      note
    });

    // Format WhatsApp Message
    const message = `Hello Lagos Prestige! I would like to book the *${room.title}* (${room.location}).

*Booking Details:*
• *Name:* ${name}
• *WhatsApp:* ${phone}
• *Check-In:* ${checkIn}
• *Check-Out:* ${checkOut}
• *Guests:* ${guests}
${note ? `• *Special Request:* ${note}` : ''}

Please confirm availability and send payment details. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2349157802693?text=${encodedMessage}`;

    toast.success("Booking request saved! Redirecting to WhatsApp...");
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-card border border-border rounded-[3rem] p-8 md:p-10 shadow-2xl z-10 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            <div className="mb-8 text-center">
              <span className="text-primary text-[9px] font-black uppercase tracking-[0.3em] block mb-2 text-center">Pre-Booking Request</span>
              <h3 className="text-2xl font-black text-foreground tracking-tight leading-none text-center">
                Secure Your Stay
              </h3>
              <p className="text-foreground/40 text-xs font-bold mt-2 text-center">
                {room.title} • {room.price} / night
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Guest Name */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-primary uppercase tracking-widest block text-center">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-background border border-border rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-primary/50 transition-colors text-center"
                  />
                </div>
              </div>

              {/* WhatsApp Number */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-primary uppercase tracking-widest block text-center">WhatsApp Number *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234 803 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-background border border-border rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-primary/50 transition-colors text-center"
                  />
                </div>
              </div>

              {/* Dates Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-primary uppercase tracking-widest block text-center">Check-In *</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-background border border-border rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold focus:outline-none focus:border-primary/50 transition-colors text-center"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-primary uppercase tracking-widest block text-center">Check-Out *</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-background border border-border rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold focus:outline-none focus:border-primary/50 transition-colors text-center"
                    />
                  </div>
                </div>
              </div>

              {/* Guests & Notes */}
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 space-y-1.5">
                  <label className="text-[9px] font-black text-primary uppercase tracking-widest block text-center">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-background border border-border rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold focus:outline-none focus:border-primary/50 transition-colors appearance-none text-center"
                    >
                      {[1, 2, 3, 4, 5, 6].map(n => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-span-2 space-y-1.5">
                  <label className="text-[9px] font-black text-primary uppercase tracking-widest block text-center">Special Note</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                    <input
                      type="text"
                      placeholder="e.g. Airport pickup, early check-in"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full bg-background border border-border rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold focus:outline-none focus:border-primary/50 transition-colors text-center"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-primary text-background rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 mt-4 text-center"
              >
                Confirm & Chat on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;