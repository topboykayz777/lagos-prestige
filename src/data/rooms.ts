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
    description: "Our flagship suite offering panoramic views of the Lagos skyline. Features a king-sized orthopedic bed, private lounge, and a spa-inspired bathroom.",
    bookedDates: ["2024-05-10", "2024-05-11", "2024-06-01"]
  },
  { 
    id: "2", 
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", 
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200"
    ],
    title: "Deluxe King Room", 
    location: "Victoria Island", 
    price: "₦120k", 
    priceRaw: 120000,
    rating: "5.0",
    reviews: "94",
    description: "A perfect blend of business and leisure. This room features a dedicated workspace and high-speed fiber internet.",
    bookedDates: ["2024-05-15", "2024-05-16"]
  },
  { 
    id: "3", 
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800", 
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200"
    ],
    title: "Modern Studio", 
    location: "Lekki Phase 1", 
    price: "₦85k", 
    priceRaw: 85000,
    rating: "4.8",
    reviews: "210",
    description: "Chic, compact, and incredibly functional. Ideal for solo travelers or couples looking for a vibrant city stay.",
    bookedDates: []
  },
  { 
    id: "4", 
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800", 
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200"
    ],
    title: "Skyline View Suite", 
    location: "Old Ikoyi", 
    price: "₦110k", 
    priceRaw: 110000,
    rating: "4.7",
    reviews: "56",
    description: "Wake up to the sunrise over the Atlantic. This suite offers floor-to-ceiling windows and premium amenities.",
    bookedDates: ["2024-05-20"]
  },
  { 
    id: "5", 
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800", 
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200"
    ],
    title: "The Sanctuary Room", 
    location: "Banana Island", 
    price: "₦200k", 
    priceRaw: 200000,
    rating: "5.0",
    reviews: "32",
    description: "Ultimate privacy in Lagos' most exclusive neighborhood. Includes private elevator access and 24/7 butler service.",
    bookedDates: []
  }
];