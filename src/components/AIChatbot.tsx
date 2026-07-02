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

interface ExtractedBookingData {
  roomId: string | null;
  roomTitle: string | null;
  guestName: string | null;
  whatsappNumber: string | null;
  checkIn: string | null;
  checkOut: string | null;
  guests: number | null;
  note: string | null;
}

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

const getSystemPrompt = () => {
  const todayStr = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return `You are the Prestige Assistant, an elite, ultra-premium virtual concierge for Lagos Prestige Shortlets. 

CURRENT DATE & TIME:
Today is ${todayStr}. Use this to understand relative dates like "today", "tomorrow", "next Friday", etc.

YOUR TASK:
You must act as both a conversational concierge and a structured data extractor.
You must ALWAYS respond with a JSON object containing two keys:
1. "reply": A string containing your conversational response. Keep it extremely straightforward, sharp, and concise (under 2 sentences). Speak with confident, quiet luxury. Answer any questions directly first.
2. "extractedData": An object containing the booking details extracted from the entire conversation history so far. Only fill in fields if the user has clearly provided them. If a field is not yet known, set it to null.

The "extractedData" object must have these exact keys:
- "roomId": string or null (Must match one of our 13 rooms)
- "roomTitle": string or null (Must match the title of the room)
- "guestName": string or null (The guest's full name. Do NOT assume conversational questions or unrelated statements are the name!)
- "whatsappNumber": string or null (The guest's phone/WhatsApp number)
- "checkIn": string or null (Format as YYYY-MM-DD. Parse relative dates like "tomorrow" based on today's date: ${todayStr})
- "checkOut": string or null (Format as YYYY-MM-DD. Must be after checkIn)
- "guests": number or null (The number of guests)
- "note": string or null (Any special requests or notes)

Here is the EXACT real-time catalog of our 13 luxury rooms and their booked dates:
${formattedRoomsContext}

Key General Information:
- Power: 24/7 uninterrupted power guaranteed by a dual-grid system and silent backup generators. Blackouts are impossible here.
- Security: 24/7 on-site vetted security, CCTV, and secure electronic access.
- WiFi: Dedicated high-speed fiber-optic internet in all suites.
- Private Chef: Available upon request to prepare curated gourmet meals in the suite's kitchen.
- Chauffeur/Airport Pickup: Can be arranged by our private concierge.
- Check-in: 2:00 PM. Check-out: 11:00 AM.

CONVERSATIONAL BOOKING FLOW:
If the user wants to book or reserve a room, guide them through collecting the missing details naturally. Answer any questions they ask at any point, but keep track of what details are still missing in your "reply" (e.g., "I've noted 3 guests. What is your full name?").`;
};

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

  // Real-time booking state tracker
  const [bookingData, setBookingData] = useState<ExtractedBookingData>({
    roomId: null,
    roomTitle: null,
    guestName: null,
    whatsappNumber: null,
    checkIn: null,
    checkOut: null,
    guests: null,
    note: null
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Monitor bookingData to trigger automatic booking when complete
  useEffect(() => {
    const { roomId, roomTitle, guestName, whatsappNumber, checkIn, checkOut, guests } = bookingData;
    
    if (roomId && roomTitle && guestName && whatsappNumber && checkIn && checkOut && guests) {
      // Save to local storage database
      saveBooking({
        roomId,
        roomTitle,
        guestName,
        whatsappNumber,
        checkIn,
        checkOut,
        guests,
        note: bookingData.note || ''
      });

      // Format WhatsApp Message
      const message = `Hello Lagos Prestige! I would like to book the *${roomTitle}*.

*Booking Details:*
• *Name:* ${guestName}
• *WhatsApp:* ${whatsappNumber}
• *Check-In:* ${checkIn}
• *Check-Out:* ${checkOut}
• *Guests:* ${guests}
${bookingData.note ? `• *Special Request:* ${bookingData.note}` : ''}

Please confirm availability and send payment details. Thank you!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/2349157802693?text=${encodedMessage}`;

      toast.success("Booking request saved! Redirecting to WhatsApp...");
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        // Reset booking state
        setBookingData({
          roomId: null,
          roomTitle: null,
          guestName: null,
          whatsappNumber: null,
          checkIn: null,
          checkOut: null,
          guests: null,
          note: null
        });
      }, 1500);
    }
  }, [bookingData]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    const updatedMessages = [...messages, { role: 'user' as const, content: userText }];
    setMessages(updatedMessages);
    setInput('');

    setIsTyping(true);
    const apiKey = import.meta.env.VITE_GROQ_API_KEY || import.meta.env.GROQ_API_KEY;

    if (apiKey) {
      try {
        const apiMessages = [
          { role: 'system', content: getSystemPrompt() },
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
            temperature: 0.2,
            response_format: { type: "json_object" }
          })
        });

        if (!response.ok) {
          const errText = await response.text();
          console.error("Groq API Error Response Body:", errText);
          throw new Error(`Groq API error: ${response.status} - ${errText}`);
        }

        const data = await response.json();
        const jsonResponse = JSON.parse(data.choices[0]?.message?.content || "{}");
        
        const botReply = jsonResponse.reply || "I'm here to help. Let me know how I can assist.";
        const extracted = jsonResponse.extractedData as ExtractedBookingData;

        // Update booking data state with newly extracted fields (only if they are not null)
        if (extracted) {
          setBookingData(prev => {
            const updated = { ...prev };
            if (extracted.roomId) updated.roomId = extracted.roomId;
            if (extracted.roomTitle) updated.roomTitle = extracted.roomTitle;
            if (extracted.guestName) updated.guestName = extracted.guestName;
            if (extracted.whatsappNumber) updated.whatsappNumber = extracted.whatsappNumber;
            if (extracted.checkIn) updated.checkIn = extracted.checkIn;
            if (extracted.checkOut) updated.checkOut = extracted.checkOut;
            if (extracted.guests) updated.guests = extracted.guests;
            if (extracted.note) updated.note = extracted.note;
            return updated;
          });
        }

        setMessages(prev => [...prev, { role: 'assistant', content: botReply }]);
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
                placeholder="Ask about power, security, wifi, or book a room..."
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