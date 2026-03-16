export interface Room {
  id: string;
  image: string;
  gallery: string[];
  title: string;
  location: string;
  price: string;
  priceRaw: number;
  rating: string;
  reviews: string;
  description: string;
  bookedDates: string[]; // ISO strings
  category: string;
}

export const allRooms: Room[] = [
  { 
    id: "1", 
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800", 
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200"
    ],
    title: "Executive Master Suite", 
    location: "Old Ikoyi", 
    price: "₦150k", 
    priceRaw: 150000,
    rating: "4.9",
    reviews: "128",
    category: "Master Suite",
    description: "Our flagship suite offering panoramic views of the Lagos skyline. Features a king-sized orthopedic bed, private lounge, and a spa-inspired bathroom with a walk-in rainfall shower and deep soaking tub. Perfect for high-profile executives seeking absolute privacy.",
    bookedDates: ["2024-05-10", "2024-05-11", "2024-06-01"]
  },
  { 
    id: "2", 
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", 
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200"
    ],
    title: "Deluxe King Room", 
    location: "Victoria Island", 
    price: "₦120k", 
    priceRaw: 120000,
    rating: "5.0",
    reviews: "94",
    category: "Living Lounge",
    description: "A perfect blend of business and leisure. This room features a dedicated workspace with ergonomic seating, high-speed fiber internet, and a private balcony overlooking the VI business district. Designed for the modern professional who values comfort and efficiency.",
    bookedDates: ["2024-05-15", "2024-05-16"]
  },
  { 
    id: "3", 
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800", 
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200"
    ],
    title: "Modern Studio", 
    location: "Lekki Phase 1", 
    price: "₦85k", 
    priceRaw: 85000,
    rating: "4.8",
    reviews: "210",
    category: "Chef's Kitchen",
    description: "Chic, compact, and incredibly functional. Ideal for solo travelers or couples looking for a vibrant city stay. Features a fully equipped kitchenette, smart home controls, and premium linens. Located just minutes away from the best cafes and boutiques in Lekki.",
    bookedDates: []
  },
  { 
    id: "4", 
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800", 
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200"
    ],
    title: "Skyline View Suite", 
    location: "Old Ikoyi", 
    price: "₦110k", 
    priceRaw: 110000,
    rating: "4.7",
    reviews: "56",
    category: "Cinema Room",
    description: "Wake up to the sunrise over the Atlantic. This suite offers floor-to-ceiling windows, a premium sound system, and automated blackout curtains. The open-plan layout creates a sense of space and light that is unmatched in the city.",
    bookedDates: ["2024-05-20"]
  },
  { 
    id: "5", 
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800", 
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200"
    ],
    title: "The Sanctuary Room", 
    location: "Banana Island", 
    price: "₦200k", 
    priceRaw: 200000,
    rating: "5.0",
    reviews: "32",
    category: "Spa Bath",
    description: "Ultimate privacy in Lagos' most exclusive neighborhood. Includes private elevator access, 24/7 butler service, and a private terrace. The interior is finished with rare marble and custom-made furniture for the discerning traveler.",
    bookedDates: []
  },
  { 
    id: "6", 
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800", 
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200"
    ],
    title: "Presidential Wing", 
    location: "Old Ikoyi", 
    price: "₦350k", 
    priceRaw: 350000,
    rating: "5.0",
    reviews: "18",
    category: "Master Suite",
    description: "The pinnacle of luxury. A sprawling three-bedroom wing with a private dining room, cinema, and dedicated security quarters. Designed for heads of state and global icons who require the absolute best in security and service.",
    bookedDates: ["2024-06-10", "2024-06-11", "2024-06-12"]
  }
];