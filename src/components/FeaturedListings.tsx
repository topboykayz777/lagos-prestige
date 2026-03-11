"use client";

import React from 'react';
import ApartmentCard from './ApartmentCard';

const listings = [
  {
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
    title: "The Glass Pavilion",
    location: "Oslo, Norway",
    price: "$450",
    rating: "4.98"
  },
  {
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
    title: "Minimalist Loft",
    location: "Berlin, Germany",
    price: "$280",
    rating: "4.92"
  },
  {
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800",
    title: "Concrete Sanctuary",
    location: "Tokyo, Japan",
    price: "$520",
    rating: "5.0"
  },
  {
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    title: "Nordic Retreat",
    location: "Copenhagen, Denmark",
    price: "$310",
    rating: "4.89"
  }
];

const FeaturedListings = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Stays</h2>
          <p className="text-gray-500">Handpicked apartments for the modern traveler.</p>
        </div>
        <button className="text-sm font-bold underline underline-offset-8 hover:text-gray-500 transition-colors">
          View all
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {listings.map((listing, index) => (
          <ApartmentCard key={index} {...listing} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;