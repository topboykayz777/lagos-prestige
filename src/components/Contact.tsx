"use client";

import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Contact = () => {
  const handleWhatsApp = () => {
    toast.success("Opening WhatsApp chat...");
    window.open('https://wa.me/2348000000000', '_blank');
  };

  return (
    <section id="contact" className="py-32 bg-[#0A1128] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[4rem] p-12 md:p-24 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 leading-none">
                Ready to <br /> <span className="text-[#C5A059]">Book?</span>
              </h2>
              <p className="text-white/60 text-xl font-medium mb-12 max-w-md">
                Have questions or need a custom quote? Our concierge team is available 24/7 to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <span className="font-bold">+234 800 000 0000</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <span className="font-bold">hello@lagosprestige.com</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <button 
                onClick={handleWhatsApp}
                className="w-full py-8 bg-[#25D366] text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xl flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform shadow-2xl"
              >
                <MessageCircle className="w-8 h-8 fill-current" />
                Chat on WhatsApp
              </button>
              <button 
                onClick={() => toast.info("Opening booking form...")}
                className="w-full py-8 bg-[#C5A059] text-[#0A1128] rounded-3xl font-black uppercase tracking-[0.2em] text-xl flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform shadow-2xl"
              >
                Book Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;