"use client";

import React from 'react';
import { MessageCircle, Phone, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Contact = () => {
  const handleWhatsApp = () => {
    toast.success("Opening WhatsApp chat...");
    window.open('https://wa.me/2349157802693', '_blank');
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-card border border-border rounded-[4rem] p-12 md:p-24 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-primary/5 border border-primary/20 rounded-full mb-6">
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Get in Touch</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-8 leading-none">
                Ready to <br /> <span className="text-primary">Book?</span>
              </h2>
              <p className="text-foreground/60 text-xl font-medium mb-12 max-w-md">
                Our concierge team is available 24/7 to assist with your luxury stay in Lagos.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-6 h-6 text-primary group-hover:text-background" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Call Us</p>
                    <span className="text-xl font-black text-foreground">+234 915 780 2693</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-6 h-6 text-primary group-hover:text-background" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Email Us</p>
                    <span className="text-xl font-black text-foreground">kaelfelix0120@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="w-full py-10 bg-[#25D366] text-white rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-xl flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="w-8 h-8 fill-current" />
                Chat on WhatsApp
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toast.info("Opening booking portal...")}
                className="w-full py-10 bg-primary text-background rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-xl flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(197,160,89,0.3)]"
              >
                <Calendar className="w-8 h-8" />
                Book Online
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;