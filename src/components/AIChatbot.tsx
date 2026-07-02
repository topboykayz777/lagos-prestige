"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User } from 'lucide-react';
import { allRooms } from '@/data/rooms';
import { saveBooking } from '@/utils/bookings';
import { toast } from 'sonner';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

type BookingStep = 'idle' | 'awaiting_room' | 'awaiting_name' | 'awaiting_phone' | 'awaiting_checkin' | 'awaiting_checkout' | 'awaiting_guests' | 'awaiting_note';

const localKnowledgeBase = [
  { 
    keywords: ['hello', 'hi', 'hey', 'greetings', 'yo', 'morning', 'evening', 'afternoon', 'howdy'], 
    response: "Welcome to Lagos Prestige. How can I assist you with your luxury stay today?" 
  },
  { 
    keywords: ['thank', 'thanks', 'appreciate', 'awesome', 'great', 'cool', 'perfect'], 
    response: "My pleasure. Let me know when you are ready to book." 
  },
  { 
    keywords: ['who are you', 'what is this', 'your name', 'about you', 'what do you do'], 
    response: "I am the Prestige Assistant, your virtual concierge. I provide direct details on our luxury suites and amenities." 
  },
  { 
    keywords: ['power', 'light', 'electricity', 'generator', 'outage', 'blackout'], 
    response: "We guarantee 24/7 uninterrupted power via a dual-grid system and silent backup generators. Blackouts are impossible." 
  },
  { 
    keywords: ['security', 'safe', 'police', 'guard', 'secure', 'danger'], 
    response: "Your safety is absolute. We have 24/7 on-site vetted security, CCTV, and secure electronic access." 
  },
  { 
    keywords: ['wifi', 'internet', 'speed', 'fiber', 'connection'], 
    response: "Every suite features dedicated high-speed fiber-optic WiFi, optimized for remote work." 
  },
  { 
    keywords: ['chef', 'food', 'cook', 'meal', 'dining', 'eat'], 
    response: "Yes. Private chefs are available upon request to prepare curated gourmet meals in your suite." 
  },
  { 
    keywords: ['airport', 'pickup', 'car', 'chauffeur', 'transport', 'ride'], 
    response: "Absolutely. Our concierge can arrange luxury chauffeur services for airport transfers and city tours." 
  },
  { 
    keywords: ['check-in', 'check-out', 'time', 'arrive', 'leave'], 
    response: "Check-in is at 2:00 PM. Check-out is at 11:00 AM. Early or late times can be arranged based on availability." 
  },
  { 
    keywords: ['price', 'cost', 'cheap', 'expensive', 'rate', 'night'], 
    response: "Our luxury suites range from ₦80k to ₦350k per night. View exact pricing in the 'Our Rooms' section." 
  }
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome to Lagos Prestige. Ask me anything about our luxury suites, 24/7 power, or security." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Smart Booking State Machine
  const [bookingStep, setBookingStep] = useState<BookingStep>('idle');
  const [bookingData, setBookingData] = useState({
    roomId: '',
    roomTitle: '',
    guestName: '',
    whatsappNumber: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    note: ''
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Helper to extract number of guests from natural language
  const extractGuests = (text: string): number => {
    const lower = text.toLowerCase();
    const wordsToNumbers: { [key: string]: number } = {
      'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
      'just me': 1, 'myself': 1, 'solo': 1, 'couple': 2, 'me and my friend': 2, 'me and my partner': 2
    };

    // Check for direct digits
    const match = lower.match(/\d+/);
    if (match) return parseInt(match[0]);

    // Check for word matches
    for (const key in wordsToNumbers) {
      if (lower.includes(key)) {
        return wordsToNumbers[key];
      }
    }

    return 2; // Default fallback
  };

  // Helper to check if user input is a question or general inquiry
  const isQuestionOrInquiry = (text: string): string | null => {
    const lowerText = text.toLowerCase();
    
    // Check if it matches any local knowledge base keywords
    for (const entry of localKnowledgeBase) {
      if (entry.keywords.some(keyword => lowerText.includes(keyword))) {
        return entry.response;
      }
    }

    // Check for specific room questions (e.g., "is room 10 a nice choice?")
    const roomMatch = allRooms.find(r => lowerText.includes(`room ${r.id}`) || lowerText.includes(r.title.toLowerCase()));
    if (roomMatch) {
      return `Yes, the ${roomMatch.title} in ${roomMatch.location} is an exceptional choice. It features premium amenities and is rated ${roomMatch.rating}/5.`;
    }

    // General question detection
    if (lowerText.includes('?') || lowerText.startsWith('is ') || lowerText.startsWith('can ') || lowerText.startsWith('do ') || lowerText.startsWith('how ') || lowerText.startsWith('what ')) {
      return "We offer premium luxury suites with 24/7 power, elite security, and dedicated fiber WiFi in Old Ikoyi and Victoria Island.";
    }

    return null;
  };

  const getStepPrompt = (step: BookingStep): string => {
    switch (step) {
      case 'awaiting_room':
        return "Which suite would you like to reserve? (e.g., Executive Master Suite, Deluxe King Room, etc.)";
      case 'awaiting_name':
        return "What is your full name for the reservation?";
      case 'awaiting_phone':
        return "What is your WhatsApp number so our concierge can reach you?";
      case 'awaiting_checkin':
        return "What is your check-in date? (e.g., YYYY-MM-DD or 'tomorrow')";
      case 'awaiting_checkout':
        return "What is your check-out date? (e.g., YYYY-MM-DD)";
      case 'awaiting_guests':
        return "How many guests will be staying with us?";
      case 'awaiting_note':
        return "Any special requests or notes for our team? (Type 'none' if none)";
      default:
        return "";
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    const updatedMessages = [...messages, { role: 'user' as const, content: userText }];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    // 1. If we are in an active booking session, handle it directly with the local state machine!
    if (bookingStep !== 'idle') {
      const inquiryAnswer = isQuestionOrInquiry(userText);
      if (inquiryAnswer) {
        setTimeout(() => {
          setMessages(prev => [
            ...prev, 
            { role: 'assistant', content: inquiryAnswer },
            { role: 'assistant', content: `To continue your booking: ${getStepPrompt(bookingStep)}` }
          ]);
          setIsTyping(false);
        }, 800);
        return;
      }
      await handleBookingStep(userText);
      return;
    }

    // 2. Check if user wants to start booking
    const lowerText = userText.toLowerCase();
    if (lowerText.includes('book') || lowerText.includes('reserve') || lowerText.includes('rent') || lowerText.includes('stay')) {
      const matchedRoom = allRooms.find(r => lowerText.includes(r.title.toLowerCase()) || lowerText.includes(`room ${r.id}`));
      if (matchedRoom) {
        setBookingData(prev => ({ ...prev, roomId: matchedRoom.id, roomTitle: matchedRoom.title }));
        setBookingStep('awaiting_name');
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'assistant', content: `Excellent choice. Let's book the ${matchedRoom.title}. What is your full name?` }]);
          setIsTyping(false);
        }, 800);
      } else {
        setBookingStep('awaiting_room');
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'assistant', content: "I can help you book right now. Which suite would you like to reserve?" }]);
          setIsTyping(false);
        }, 800);
      }
      return;
    }

    // 3. General Conversation Fallback (No active booking)
    const inquiryAnswer = isQuestionOrInquiry(userText);
    setTimeout(() => {
      const answer = inquiryAnswer || "For bespoke requests or complex inquiries, you can connect directly with our 24/7 concierge team on WhatsApp at +234 915 780 2693.";
      setMessages(prev => [...prev, { role: 'assistant', content: answer }]);
      setIsTyping(false);
    }, 800);
  };

  const handleBookingStep = async (userInputText: string) => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    switch (bookingStep) {
      case 'awaiting_room':
        const matchedRoom = allRooms.find(r => r.title.toLowerCase().includes(userInputText.toLowerCase()) || userInputText.toLowerCase().includes(r.title.toLowerCase()) || r.id === userInputText);
        if (matchedRoom) {
          setBookingData(prev => ({ ...prev, roomId: matchedRoom.id, roomTitle: matchedRoom.title }));
          setBookingStep('awaiting_name');
          setMessages(prev => [...prev, { role: 'assistant', content: `Perfect. Let's book the ${matchedRoom.title}. What is your full name?` }]);
        } else {
          setMessages(prev => [...prev, { role: 'assistant', content: "I couldn't find that suite. Please specify which room you'd like to book (e.g., Executive Master Suite)." }]);
        }
        break;

      case 'awaiting_name':
        setBookingData(prev => ({ ...prev, guestName: userInputText }));
        setBookingStep('awaiting_phone');
        setMessages(prev => [...prev, { role: 'assistant', content: `Thank you, ${userInputText}. What is your WhatsApp number?` }]);
        break;

      case 'awaiting_phone':
        setBookingData(prev => ({ ...prev, whatsappNumber: userInputText }));
        setBookingStep('awaiting_checkin');
        setMessages(prev => [...prev, { role: 'assistant', content: "Got it. What is your check-in date? (e.g., tomorrow, or YYYY-MM-DD)" }]);
        break;

      case 'awaiting_checkin':
        let checkInDate = userInputText;
        if (userInputText.toLowerCase() === 'tomorrow') {
          const tomorrow = new Date(today);
          tomorrow.setDate(today.getDate() + 1);
          checkInDate = tomorrow.toISOString().split('T')[0];
        } else if (userInputText.toLowerCase() === 'today') {
          checkInDate = todayStr;
        }

        setBookingData(prev => ({ ...prev, checkIn: checkInDate }));
        setBookingStep('awaiting_checkout');
        setMessages(prev => [...prev, { role: 'assistant', content: `Got it. Check-in set to ${checkInDate}. What is your check-out date? (e.g., YYYY-MM-DD)` }]);
        break;

      case 'awaiting_checkout':
        let checkOutDate = userInputText;
        if (userInputText.toLowerCase() === 'tomorrow') {
          const tomorrow = new Date(today);
          tomorrow.setDate(today.getDate() + 1);
          checkOutDate = tomorrow.toISOString().split('T')[0];
        }

        setBookingData(prev => ({ ...prev, checkOut: checkOutDate }));
        setBookingStep('awaiting_guests');
        setMessages(prev => [...prev, { role: 'assistant', content: `Perfect. Check-out set to ${checkOutDate}. How many guests will be staying?` }]);
        break;

      case 'awaiting_guests':
        const numGuests = extractGuests(userInputText);
        setBookingData(prev => ({ ...prev, guests: numGuests }));
        setBookingStep('awaiting_note');
        setMessages(prev => [...prev, { role: 'assistant', content: `I've noted ${numGuests} guests. Any special requests or notes? (Type 'none' if none)` }]);
        break;

      case 'awaiting_note':
        const finalNote = userInputText.toLowerCase() === 'none' ? '' : userInputText;
        const finalBooking = { ...bookingData, note: finalNote };
        
        // Save to local storage database
        saveBooking({
          roomId: finalBooking.roomId,
          roomTitle: finalBooking.roomTitle,
          guestName: finalBooking.guestName,
          whatsappNumber: finalBooking.whatsappNumber,
          checkIn: finalBooking.checkIn,
          checkOut: finalBooking.checkOut,
          guests: finalBooking.guests,
          note: finalBooking.note
        });

        // Format WhatsApp Message
        const message = `Hello Lagos Prestige! I would like to book the *${finalBooking.roomTitle}*.

*Booking Details:*
• *Name:* ${finalBooking.guestName}
• *WhatsApp:* ${finalBooking.whatsappNumber}
• *Check-In:* ${finalBooking.checkIn}
• *Check-Out:* ${finalBooking.checkOut}
• *Guests:* ${finalBooking.guests}
${finalBooking.note ? `• *Special Request:* ${finalBooking.note}` : ''}

Please confirm availability and send payment details. Thank you!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/2349157802693?text=${encodedMessage}`;

        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "Perfect! Your booking request has been logged. I am opening WhatsApp now to finalize your stay with our concierge." 
        }]);

        toast.success("Booking request saved! Redirecting to WhatsApp...");
        
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 1500);

        // Reset booking state
        setBookingStep('idle');
        setBookingData({
          roomId: '',
          roomTitle: '',
          guestName: '',
          whatsappNumber: '',
          checkIn: '',
          checkOut: '',
          guests: 2,
          note: ''
        });
        break;
    }

    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-background rounded-full flex items-center justify-center shadow-2xl relative group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <X className="w-6 h-6" key="close" />
          ) : (
            <MessageSquare className="w-6 h-6" key="open" />
          )}
        </AnimatePresence>
        <span className="absolute right-full mr-3 bg-card border border-border text-foreground text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:inline-block">
          Ask Prestige Assistant
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 -right-2 sm:right-0 w-[calc(100vw-2rem)] sm:w-[350px] h-[480px] max-h-[calc(100dvh-120px)] bg-card border border-border rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-primary/5 border-b border-border flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-xl bg-[#1A241E] flex items-center justify-center shrink-0 border border-primary/20">
                <img src="/prestige.png" alt="Lagos Prestige Logo" className="w-8 h-8 object-contain" />
              </div>
              <div className="text-center">
                <h4 className="font-black text-sm text-foreground leading-none text-center">Prestige Assistant</h4>
                <span className="text-[9px] font-bold text-primary uppercase tracking-widest mt-1 block text-center">Smart Concierge</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 no-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-primary/10' : 'bg-[#1A241E] border border-primary/10'}`}>
                    {msg.role === 'user' ? (
                      <User className="w-4 h-4 text-primary" />
                    ) : (
                      <img src="/prestige.png" alt="Lagos Prestige Logo" className="w-5 h-5 object-contain" />
                    )}
                  </div>
                  <div className={`p-4 rounded-2xl text-xs leading-relaxed max-w-[75%] ${msg.role === 'user' ? 'bg-primary text-background rounded-tr-none text-center' : 'bg-foreground/5 text-foreground/80 rounded-tl-none text-center'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1A241E] border border-primary/10 flex items-center justify-center shrink-0">
                    <img src="/prestige.png" alt="Lagos Prestige Logo" className="w-5 h-5 object-contain" />
                  </div>
                  <div className="p-4 rounded-2xl bg-foreground/5 text-foreground/40 text-xs rounded-tl-none flex items-center gap-1 justify-center">
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-4 border-t border-border flex gap-2">
              <input
                type="text"
                placeholder={bookingStep !== 'idle' ? "Type your answer here..." : "Ask about power, security, wifi..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-background border border-border rounded-xl px-4 py-3 text-base md:text-xs font-bold focus:outline-none focus:border-primary/50 text-center"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-primary text-background rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatbot;