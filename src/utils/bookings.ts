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
  return bookings ? JSON.parse(bookings) : [];
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