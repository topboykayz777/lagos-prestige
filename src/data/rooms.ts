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
  bookedDates: string[]; // ISO strings (YYYY-MM-DD)
  category: string;
}

export const allRooms: Room[] = [
  { 
    id: "1", 
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800", 
    gallery: ["https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200"],
    title: "Executive Master Suite", 
    location: "Old Ikoyi", 
    price: "₦150k", 
    priceRaw: 150000,
    rating: "4.9",
    reviews: "128",
    category: "Master Suite",
    description: "Our flagship suite offering panoramic views of the Lagos skyline. Features a king-sized orthopedic bed and a spa-inspired bathroom.",
    bookedDates: ["2026-03-10", "2026-03-11", "2026-03-12"]
  },
  { 
    id: "2", 
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", 
    gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"],
    title: "Deluxe King Room", 
    location: "Victoria Island", 
    price: "₦120k", 
    priceRaw: 120000,
    rating: "5.0",
    reviews: "94",
    category: "Living Lounge",
    description: "A perfect blend of business and leisure with a dedicated workspace and high-speed fiber internet.",
    bookedDates: ["2026-03-15", "2026-03-16"]
  },
  { 
    id: "3", 
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800", 
    gallery: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200"],
    title: "Modern Studio", 
    location: "Lekki Phase 1", 
    price: "₦85k", 
    priceRaw: 85000,
    rating: "4.8",
    reviews: "210",
    category: "Chef's Kitchen",
    description: "Chic, compact, and incredibly functional. Ideal for solo travelers or couples looking for a vibrant city stay.",
    bookedDates: ["2026-03-20"]
  },
  { 
    id: "4", 
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800", 
    gallery: ["https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200"],
    title: "Skyline View Suite", 
    location: "Old Ikoyi", 
    price: "₦110k", 
    priceRaw: 110000,
    rating: "4.7",
    reviews: "56",
    category: "Cinema Room",
    description: "Wake up to the sunrise over the Atlantic. This suite offers floor-to-ceiling windows and automated blackout curtains.",
    bookedDates: ["2026-03-10", "2026-03-11"]
  },
  { 
    id: "5", 
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800", 
    gallery: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200"],
    title: "The Sanctuary Room", 
    location: "Banana Island", 
    price: "₦200k", 
    priceRaw: 200000,
    rating: "5.0",
    reviews: "32",
    category: "Spa Bath",
    description: "Ultimate privacy in Lagos' most exclusive neighborhood. Includes private elevator access and 24/7 butler service.",
    bookedDates: ["2026-03-25", "2026-03-26"]
  },
  { 
    id: "6", 
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800", 
    gallery: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200"],
    title: "Presidential Wing", 
    location: "Old Ikoyi", 
    price: "₦350k", 
    priceRaw: 350000,
    rating: "5.0",
    reviews: "18",
    category: "Master Suite",
    description: "The pinnacle of luxury. A sprawling three-bedroom wing with a private dining room and dedicated security quarters.",
    bookedDates: ["2026-03-15"]
  },
  { 
    id: "7", 
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800", 
    gallery: ["https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200"],
    title: "Garden Terrace Suite", 
    location: "Old Ikoyi", 
    price: "₦135k", 
    priceRaw: 135000,
    rating: "4.9",
    reviews: "42",
    category: "Living Lounge",
    description: "A serene escape featuring a private garden terrace. Perfect for morning coffee or evening relaxation.",
    bookedDates: ["2026-03-18"]
  },
  { 
    id: "8", 
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800", 
    gallery: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200"],
    title: "Penthouse Studio", 
    location: "Victoria Island", 
    price: "₦95k", 
    priceRaw: 95000,
    rating: "4.8",
    reviews: "88",
    category: "Chef's Kitchen",
    description: "High-altitude living with a modern touch. This studio offers a compact yet luxurious space with high-end appliances.",
    bookedDates: ["2026-03-22"]
  },
  { 
    id: "9", 
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800", 
    gallery: ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200"],
    title: "Royal Guest Room", 
    location: "Old Ikoyi", 
    price: "₦115k", 
    priceRaw: 115000,
    rating: "4.9",
    reviews: "64",
    category: "Master Suite",
    description: "Elegance meets comfort in this royal-themed guest room. Features a plush queen bed and antique-style furniture.",
    bookedDates: ["2026-03-12"]
  },
  { 
    id: "10", 
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800", 
    gallery: ["https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=1200"],
    title: "Urban Loft", 
    location: "Lekki Phase 1", 
    price: "₦90k", 
    priceRaw: 90000,
    rating: "4.7",
    reviews: "112",
    category: "Living Lounge",
    description: "Industrial chic design with high ceilings and open spaces. Perfect for the creative traveler.",
    bookedDates: ["2026-03-14"]
  },
  { 
    id: "11", 
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800", 
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200"
    ],
    title: "The Heritage Suite", 
    location: "Old Ikoyi", 
    price: "₦140k", 
    priceRaw: 140000,
    rating: "4.9",
    reviews: "45",
    category: "Master Suite",
    description: "A tribute to Lagosian history with modern luxury. Features hand-crafted furniture, local textiles, and a private library nook.",
    bookedDates: ["2026-03-16"]
  },
  { 
    id: "12", 
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800", 
    gallery: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200"],
    title: "Ocean Breeze Room", 
    location: "Victoria Island", 
    price: "₦105k", 
    priceRaw: 105000,
    rating: "4.8",
    reviews: "76",
    category: "Spa Bath",
    description: "Light and airy room with subtle nautical touches. Enjoy the refreshing breeze from your private balcony.",
    bookedDates: ["2026-03-19"]
  },
  { 
    id: "13", 
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800", 
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200"],
    title: "The Minimalist", 
    location: "Lekki Phase 1", 
    price: "₦80k", 
    priceRaw: 80000,
    rating: "4.6",
    reviews: "154",
    category: "Chef's Kitchen",
    description: "Clean lines and functional design. A peaceful retreat from the bustling city life.",
    bookedDates: ["2026-03-21"]
  }
];