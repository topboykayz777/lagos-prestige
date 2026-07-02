"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { getBookings, updateBookingStatus, deleteBooking, BookingInquiry } from '@/utils/bookings';
import { Calendar, Users, Phone, MessageSquare, Trash2, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const OwnerDashboard = () => {
  const [bookings, setBookings] = useState<BookingInquiry[]>([]);

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  const handleStatusChange = (id: string, status: BookingInquiry['status']) => {
    const updated = updateBookingStatus(id, status);
    setBookings(updated);
    toast.success(`Status updated to ${status}`);
  };

  const handleDelete = (id: string) => {
    const updated = deleteBooking(id);
    setBookings(updated);
    toast.success("Inquiry deleted");
  };

  const getStatusIcon = (status: BookingInquiry['status']) => {
    switch (status) {
      case 'New': return <AlertCircle className="w-4 h-4 text-blue-500" />;
      case 'Contacted': return <Clock className="w-4 h-4 text-amber-500" />;
      case 'Confirmed': return <CheckCircle className="w-4 h-4 text-emerald-500" />;
    }
  };

  const getStatusClass = (status: BookingInquiry['status']) => {
    switch (status) {
      case 'New': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Contacted': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Confirmed': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-background">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-block px-4 py-1 bg-primary/5 border border-primary/20 rounded-full mb-4">
                <span className="text-primary text-[9px] font-black uppercase tracking-[0.4em]">Owner Portal</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-none">
                Booking <span className="text-primary">Inquiries.</span>
              </h1>
              <p className="text-foreground/40 text-sm font-bold mt-2">
                Manage and track guest requests collected from your website.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-card border border-border rounded-2xl text-center">
                <span className="text-[9px] font-black text-foreground/40 uppercase tracking-widest block">Total Requests</span>
                <span className="text-2xl font-black text-primary">{bookings.length}</span>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-2xl text-center">
                <span className="text-[9px] font-black text-foreground/40 uppercase tracking-widest block">New</span>
                <span className="text-2xl font-black text-blue-500">{bookings.filter(b => b.status === 'New').length}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {bookings.map((booking, i) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8"
              >
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 ${getStatusClass(booking.status)}`}>
                      {getStatusIcon(booking.status)}
                      {booking.status}
                    </span>
                    <span className="text-[10px] font-bold text-foreground/30">
                      Submitted {new Date(booking.submittedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-foreground tracking-tight">{booking.guestName}</h3>
                    <p className="text-primary text-xs font-black uppercase tracking-widest mt-1">{booking.roomTitle}</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                    <div className="flex items-center gap-2.5 text-foreground/60">
                      <Calendar className="w-4 h-4 text-primary" />
                      <div>
                        <span className="text-[8px] font-black text-foreground/30 uppercase tracking-widest block">Check-In</span>
                        <span className="text-xs font-bold">{booking.checkIn}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 text-foreground/60">
                      <Calendar className="w-4 h-4 text-primary" />
                      <div>
                        <span className="text-[8px] font-black text-foreground/30 uppercase tracking-widest block">Check-Out</span>
                        <span className="text-xs font-bold">{booking.checkOut}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 text-foreground/60">
                      <Users className="w-4 h-4 text-primary" />
                      <div>
                        <span className="text-[8px] font-black text-foreground/30 uppercase tracking-widest block">Guests</span>
                        <span className="text-xs font-bold">{booking.guests} Guests</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 text-foreground/60">
                      <Phone className="w-4 h-4 text-primary" />
                      <div>
                        <span className="text-[8px] font-black text-foreground/30 uppercase tracking-widest block">WhatsApp</span>
                        <span className="text-xs font-bold">{booking.whatsappNumber}</span>
                      </div>
                    </div>
                  </div>

                  {booking.note && (
                    <div className="p-4 rounded-2xl bg-background border border-border flex items-start gap-3">
                      <MessageSquare className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-xs font-medium text-foreground/60 leading-relaxed">"{booking.note}"</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap lg:flex-col gap-3 shrink-0">
                  <button
                    onClick={() => handleStatusChange(booking.id, 'Contacted')}
                    className="px-5 py-3 bg-background border border-border hover:border-amber-500/30 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                  >
                    Mark Contacted
                  </button>
                  <button
                    onClick={() => handleStatusChange(booking.id, 'Confirmed')}
                    className="px-5 py-3 bg-primary text-background hover:scale-105 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                  >
                    Confirm Booking
                  </button>
                  <button
                    onClick={() => handleDelete(booking.id)}
                    className="p-3 bg-destructive/10 hover:bg-destructive text-destructive hover:text-white rounded-xl transition-all flex items-center justify-center"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}

            {bookings.length === 0 && (
              <div className="py-32 text-center bg-card border border-border rounded-[3rem]">
                <p className="text-foreground/30 font-black uppercase tracking-[0.3em]">No booking inquiries yet.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OwnerDashboard;