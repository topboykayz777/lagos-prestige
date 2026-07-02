export interface BookingInquiry {
  id: string;
  roomId: string;
  roomTitle: string;
  guestName: string;
  whatsappNumber: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  note?: string;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Confirmed';
}

export const getBookings = (): BookingInquiry[] => {
  const bookings = localStorage.getItem('prestige_bookings');
  return bookings ? JSON.parse(bookings) : [
    // Seed some realistic demo data
    {
      id: "demo-1",
      roomId: "1",
      roomTitle: "Executive Master Suite",
      guestName: "Sarah Jenkins",
      whatsappNumber: "+234 803 123 4567",
      checkIn: "2026-04-12",
      checkOut: "2026-04-15",
      guests: 2,
      note: "Please arrange airport pickup if possible.",
      submittedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
      status: "New"
    },
    {
      id: "demo-2",
      roomId: "2",
      roomTitle: "Deluxe King Room",
      guestName: "Chidi Okoro",
      whatsappNumber: "+234 812 987 6543",
      checkIn: "2026-04-18",
      checkOut: "2026-04-20",
      guests: 1,
      note: "Late check-in around 8 PM.",
      submittedAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      status: "Contacted"
    }
  ];
};

export const saveBooking = (inquiry: Omit<BookingInquiry, 'id' | 'submittedAt' | 'status'>) => {
  const bookings = getBookings();
  const newInquiry: BookingInquiry = {
    ...inquiry,
    id: `booking-${Date.now()}`,
    submittedAt: new Date().toISOString(),
    status: 'New'
  };
  bookings.unshift(newInquiry);
  localStorage.setItem('prestige_bookings', JSON.stringify(bookings));
  return newInquiry;
};

export const updateBookingStatus = (id: string, status: BookingInquiry['status']) => {
  const bookings = getBookings();
  const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
  localStorage.setItem('prestige_bookings', JSON.stringify(updated));
  return updated;
};

export const deleteBooking = (id: string) => {
  const bookings = getBookings();
  const filtered = bookings.filter(b => b.id !== id);
  localStorage.setItem('prestige_bookings', JSON.stringify(filtered));
  return filtered;
};