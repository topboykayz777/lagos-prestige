"use client";

import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 px-6 mt-20 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <span className="font-bold text-2xl tracking-tight mb-6 block">NEST.</span>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Redefining the shortlet experience with curated spaces that inspire and rejuvenate.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Cancellation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-200 gap-6">
          <p className="text-sm text-gray-400">© 2026 Nest Technologies Inc.</p>
          <div className="flex gap-6">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;