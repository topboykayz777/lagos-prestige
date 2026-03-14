"use client";

import React from 'react';
import { Instagram, Twitter, Facebook, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background pt-32 pb-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-background w-5 h-5" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-foreground">LAGOS PRESTIGE</span>
            </div>
            <p className="text-foreground/40 max-w-xs leading-relaxed font-medium">
              Redefining luxury short-let stays in Nigeria's most vibrant city. Experience the prestige you deserve.
            </p>
            <p className="text-foreground/60 text-sm font-bold mt-4">topboykayz@gmail.com</p>
          </div>
          
          <div>
            <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-primary">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold text-foreground/60">
              <li><a href="/rooms" className="hover:text-primary transition-colors">Our Rooms</a></li>
              <li><a href="/amenities" className="hover:text-primary transition-colors">Amenities</a></li>
              <li><a href="/how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-primary">Social</h4>
            <div className="flex gap-6">
              <Instagram className="w-6 h-6 text-foreground/40 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-foreground/40 hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="w-6 h-6 text-foreground/40 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border/50 gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/20">© 2026 Lagos Prestige Shortlets. All Rights Reserved.</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-foreground/20">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;