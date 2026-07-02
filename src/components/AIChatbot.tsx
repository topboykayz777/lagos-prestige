"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Bot, User } from 'lucide-react';
import { allRooms } from '@/data/rooms';
import { saveBooking } from '@/utils/bookings';
import { toast } from 'sonner';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

type BookingStep = 'idle' | 'awaiting_room' | 'awaiting_name' | 'awaiting_phone' | 'awaiting_checkin' | 'awaiting_checkout' | 'awaiting_guests' | 'awaiting_note';

// Dynamically format all rooms into a clean text block for the AI
const formattedRoomsContext = allRooms.map(room => (
  `- Room ID: ${room.id}
   Title: ${room.title}
   Location: ${room.location}
   Price: ${room.price} per night
   Rating: ${room.rating} (${room.reviews} reviews)
   Description: ${room.description}
   Category: ${room.category}
   Booked Dates (Unavailable): ${room.bookedDates.join(', ')}`
)).join('\n\n');

const systemPrompt = `You are the Prestige Assistant, an elite, ultra-premium virtual concierge for Lagos Prestige Shortlets. 

TONE & STYLE RULES:
- Be extremely straightforward, sharp, and concise. No fluff, no long paragraphs.
- Keep responses under 2 sentences whenever possible.
- Speak with confident, quiet luxury. Do not over-explain.
- Answer the question directly first, then stop.

Here is the EXACT real-time catalog of our 13 luxury rooms and their booked dates:
${formattedRoomsContext}

Key General Information:
- Power: 24/7 uninterrupted power guaranteed by a dual-grid system and silent backup generators. Blackouts are impossible here.
- Security: 24/7 on-site vetted security, CCTV, and secure electronic access.
- WiFi: Dedicated high-speed fiber-optic internet in all suites.
- Private Chef: Available upon request to prepare curated gourmet meals in the suite's kitchen.
- Chauffeur/Airport Pickup: Can be arranged by our private concierge.
- Check-in: 2:00 PM. Check-out: 11:00 AM.

If a guest wants to book or reserve a room, tell them: "I can help you book that right now. Let's get started."`;

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

  // Conversational Booking State
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

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    const updatedMessages = [...messages, { role: 'user' as const, content: userText }];
    setMessages(updatedMessages);
    setInput('');

    // Check if we are currently in a booking flow
    if (bookingStep !== 'idle') {
      handleBookingFlow(userText);
      return;
    }

    // Check if user wants to start booking
    const lowerText = userText.toLowerCase();
    if (lowerText.includes('book') || lowerText.includes('reserve') || lowerText.includes('rent') || lowerText.includes('stay at')) {
      // Try to detect which room they want to book
      const matchedRoom = allRooms.find(r => lowerText.includes(r.title.toLowerCase()) || lowerText.includes(r.id));
      if (matchedRoom) {
        setBookingData(prev => ({ ...prev, roomId: matchedRoom.id, roomTitle: matchedRoom.title }));
        setBookingStep('awaiting_name');
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'assistant', content: `Excellent choice. Let's book the ${matchedRoom.title}. What is your full name?` }]);
          setIsTyping(false);
        }, 800);
      } else {
        setBookingStep('awaiting_room');
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'assistant', content: "I can help you book right now. Which suite would you like to reserve?" }]);
          setIsTyping(false);
        }, 800);
      }
      return;
    }

    setIsTyping(true);
    const apiKey = import.meta.env.VITE_GROQ_API_KEY || import.meta.env.GROQ_API_KEY;

    if (apiKey) {
      try {
        const apiMessages = [
          { role: 'system', content: systemPrompt },
          ...updatedMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        ];

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'llama-3.1-8b-instant',
            messages: apiMessages,
            temperature: 0.3,
            max_tokens: 100
          })
        });

        if (!response.ok) {
          const errText = await response.text();
          console.error("Groq API Error Response Body:", errText);
          throw new Error(`Groq API error: ${response.status} - ${errText}`);
        }

        const data = await response.json();
        const botResponse = data.choices[0]?.message?.content || "I'm here to help. Let me know how I can assist.";
        setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
      } catch (error) {
        console.error("Groq API failed, falling back to local knowledge base:", error);
        triggerFallback(userText);
      } finally {
        setIsTyping(false);
      }
    } else {
      setTimeout(() => {
        triggerFallback(userText);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleBookingFlow = (input: string) => {
    setIsTyping(true);

    setTimeout(() => {
      switch (bookingStep) {
        case 'awaiting_room':
          const matchedRoom = allRooms.find(r => r.title.toLowerCase().includes(input.toLowerCase()) || input.toLowerCase().includes(r.title.toLowerCase()) || r.id === input);
          if (matchedRoom) {
            setBookingData(prev => ({ ...prev, roomId: matchedRoom.id, roomTitle: matchedRoom.title }));
            setBookingStep('awaiting_name');
            setMessages(prev => [...prev, { role: 'assistant', content: `Perfect. Let's book the ${matchedRoom.title}. What is your full name?` }]);
          } else {
            setMessages(prev => [...prev, { role: 'assistant', content: "I couldn't find that suite. Please specify which room you'd like to book (e.g., Executive Master Suite)." }]);
          }
          break;

        case 'awaiting_name':
          setBookingData(prev => ({ ...prev, guestName: input }));
          setBookingStep('awaiting_phone');
          setMessages(prev => [...prev, { role: 'assistant', content: `Thank you, ${input}. What is your WhatsApp number?` }]);
          break;

        case 'awaiting_phone':
          setBookingData(prev => ({ ...prev, whatsappNumber: input }));
          setBookingStep('awaiting_checkin');
          setMessages(prev => [...prev, { role: 'assistant', content: "Got it. What is your check-in date? (e.g., YYYY-MM-DD)" }]);
          break;

        case 'awaiting_checkin':
          setBookingData(prev => ({ ...prev, checkIn: input }));
          setBookingStep('awaiting_checkout');
          setMessages(prev => [...prev, { role: 'assistant', content: "And your check-out date? (e.g., YYYY-MM-DD)" }]);
          break;

        case 'awaiting_checkout':
          setBookingData(prev => ({ ...prev, checkOut: input }));
          setBookingStep('awaiting_guests');
          setMessages(prev => [...prev, { role: 'assistant', content: "How many guests will be staying?" }]);
          break;

        case 'awaiting_guests':
          const numGuests = parseInt(input) || 2;
          setBookingData(prev => ({ ...prev, guests: numGuests }));
          setBookingStep('awaiting_note');
          setMessages(prev => [...prev, { role: 'assistant', content: "Any special requests or notes? (Type 'none' if none)" }]);
          break;

        case 'awaiting_note':
          const finalNote = input.toLowerCase() === 'none' ? '' : input;
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
    }, 1000);
  };

  const triggerFallback = (userText: string) => {
    let botResponse = "I'm here to help. Click 'Reserve Now' on any room page to chat directly with our concierge on WhatsApp.";
    const lowerText = userText.toLowerCase();
    for (const entry of localKnowledgeBase) {
      if (entry.keywords.some(keyword => lowerText.includes(keyword))) {
        botResponse = entry.response;
        break;
      }
    }
    setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
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
        <span className="absolute right-full mr-3 bg-card border border-border text-foreground text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
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
            className="absolute bottom-20 right-0 w-[350px] h-[480px] bg-card border border-border rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-primary/5 border-b border-border flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-background" />
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
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-primary/10' : 'bg-foreground/5'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-primary" /> : <Bot className="w-4 h-4 text-foreground" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-xs leading-relaxed max-w-[75%] ${msg.role === 'user' ? 'bg-primary text-background rounded-tr-none text-center' : 'bg-foreground/5 text-foreground/80 rounded-tl-none text-center'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-foreground" />
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
                className="flex-1 bg-background border border-border rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:border-primary/50 text-center"
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