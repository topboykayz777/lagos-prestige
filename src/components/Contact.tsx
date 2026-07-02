"use client";

import React from 'react';
import { MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Contact = () => {
  const handleWhatsApp = () => {
    toast.success("Opening WhatsApp chat...");
    window.open('https://wa.me/2349157802693', '_blank');
  };

  const handleCall = () => {
    toast.success("Calling Lagos Prestige...");
    window.location.href = 'tel:+2349157802693';
  };

  const handleEmail = () => {
    toast.success("Opening email client...");
    window.location.href = 'mailto:kaelfelix0120@gmail.com';
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden flex justify-center items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full flex justify-center">
        <div className="bg-card border border-border rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 lg:p-24 backdrop-blur-xl shadow-2xl overflow-hidden relative w-full max-w-5xl flex flex-col items-center text-center">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10 w-full">
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
              <div className="inline-block px-4 py-1 bg-primary/5 border border-primary/20 rounded-full mb-6 mx-auto lg:mx-0">
                <span className="text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-center">Get in Touch</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground mb-6 md:mb-8 leading-none text-center lg:text-left">
                Ready to <br className="hidden lg:block" /> <span className="text-primary">Book?</span>
              </h2>
              <p className="text-foreground/60 text-base md:text-xl font-medium mb-8 md:mb-12 max-w-md leading-relaxed text-center lg:text-left">
                Our concierge team is available 24/7 to assist with your luxury stay in Lagos. Experience the prestige you deserve.
              </p>
              
              <div className="flex gap-6 justify-center lg:justify-start w-full">
                <button 
                  onClick={handleCall}
                  className="flex items-center justify-center gap-4 px-6 py-4 rounded-2xl bg-primary/5 border border-border hover:border-primary/30 transition-all group text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary group-hover:text-background" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-foreground text-center">Call Us</span>
                </button>

                <button 
                  onClick={handleEmail}
                  className="flex items-center justify-center gap-4 px-6 py-4 rounded-2xl bg-primary/5 border border-border hover:border-primary/30 transition-all group text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-background" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-foreground text-center">Email Us</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 items-center justify-center w-full">
              <motion.button 
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="w-full py-8 md:py-10 bg-[#25D366] text-white rounded-[2rem] md:rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-lg md:text-xl flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(37,211,102,0.3)] group text-center"
              >
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </motion.button>
              
              <p className="text-center text-[9px] md:text-[10px] font-black text-foreground/30 uppercase tracking-[0.3em] mt-2 text-center">
                Instant Confirmation • 24/7 Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;