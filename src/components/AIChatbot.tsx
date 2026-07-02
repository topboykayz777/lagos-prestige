"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Bot, User } from 'lucide-react';
import { allRooms } from '@/data/rooms';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// Dynamically format all rooms into a clean text block for the AI
const formattedRoomsContext = allRooms.map(room => (
  `- Room ID: ${room.id}
   Title: ${room.title}
   Location: ${room.location}
   Price: ${room.price} per night
   Rating: ${room.rating} (${room.reviews} reviews)
   Description: ${room.description}
   Category: ${room.category}`
)).join('\n\n');

const systemPrompt = `You are the Prestige Assistant, a highly professional luxury concierge for Lagos Prestige Shortlets in Ikoyi and Victoria Island, Lagos.
Your goal is to answer guest questions politely, accurately, and encourage them to book.

Here is the EXACT real-time catalog of our 13 luxury rooms. Use this data to answer questions about specific rooms, prices, and locations:
${formattedRoomsContext}

Key General Information:
- Power: 24/7 uninterrupted power guaranteed by a dual-grid system and silent backup generators.
- Security: 24/7 on-site vetted security, CCTV, and secure electronic access.
- WiFi: Dedicated high-speed fiber-optic internet in all suites.
- Private Chef: Available upon request to prepare curated gourmet meals in the suite's kitchen.
- Chauffeur/Airport Pickup: Can be arranged by our private concierge.
- Check-in: 2:00 PM. Check-out: 11:00 AM.

Always nudge guests to click "Reserve Now" on any room page to secure their booking via WhatsApp. Keep responses concise, elegant, and extremely helpful.`;

const localKnowledgeBase = [
  { 
    keywords: ['hello', 'hi', 'hey', 'greetings', 'yo', 'morning', 'evening', 'afternoon', 'howdy'], 
    response: "Hello! Welcome to Lagos Prestige. I am your virtual concierge. How can I assist you with your luxury stay in Ikoyi today?" 
  },
  { 
    keywords: ['thank', 'thanks', 'appreciate', 'awesome', 'great', 'cool', 'perfect'], 
    response: "You are very welcome! It is my absolute pleasure. Let me know if you have any other questions or if you're ready to book your suite!" 
  },
  { 
    keywords: ['who are you', 'what is this', 'your name', 'about you', 'what do you do'], 
    response: "I am the Prestige Assistant, your dedicated virtual concierge. I can help you with details about our luxury suites, 24/7 power, elite security, private chefs, and booking process!" 
  },
  { 
    keywords: ['power', 'light', 'electricity', 'generator', 'outage', 'blackout'], 
    response: "We have 24/7 uninterrupted power guaranteed by a dual-grid system and high-capacity silent backup generators. You will never experience a blackout here!" 
  },
  { 
    keywords: ['security', 'safe', 'police', 'guard', 'secure', 'danger'], 
    response: "Your safety is our top priority. We have 24/7 on-site vetted security personnel, CCTV in common areas, and secure electronic access to all rooms." 
  },
  { 
    keywords: ['wifi', 'internet', 'speed', 'fiber', 'connection'], 
    response: "Every room is equipped with dedicated high-speed fiber-optic WiFi, perfect for video calls, streaming, and remote work." 
  },
  { 
    keywords: ['chef', 'food', 'cook', 'meal', 'dining', 'eat'], 
    response: "Yes! We offer private chef services. Our chefs can prepare curated gourmet menus directly in your suite's kitchen upon request." 
  },
  { 
    keywords: ['airport', 'pickup', 'car', 'chauffeur', 'transport', 'ride'], 
    response: "Absolutely. Our private concierge can arrange luxury chauffeur services for airport transfers and city tours." 
  },
  { 
    keywords: ['check-in', 'check-out', 'time', 'arrive', 'leave'], 
    response: "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out can be arranged based on availability." 
  },
  { 
    keywords: ['price', 'cost', 'cheap', 'expensive', 'rate', 'night'], 
    response: "Our luxury rooms start from ₦80k per night up to ₦350k per night for our Presidential Wing. You can view all pricing in the 'Our Rooms' section!" 
  },
  { 
    keywords: ['book', 'reserve', 'stay', 'payment', 'pay'], 
    response: "To book, simply navigate to any room page, click 'Reserve Now', fill in your details, and our concierge will finalize everything with you on WhatsApp instantly!" 
  }
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I am your Prestige Assistant. Ask me anything about our luxury rooms, 24/7 power, security, or amenities!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
            temperature: 0.5,
            max_tokens: 150
          })
        });

        if (!response.ok) {
          const errText = await response.text();
          console.error("Groq API Error Response Body:", errText);
          throw new Error(`Groq API error: ${response.status} - ${errText}`);
        }

        const data = await response.json();
        const botResponse = data.choices[0]?.message?.content || "I'm here to help! Please let me know how I can assist with your stay.";
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

  const triggerFallback = (userText: string) => {
    let botResponse = "I'm here to help! For specific booking inquiries, feel free to click 'Reserve Now' on any room page to chat directly with our human concierge on WhatsApp.";
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
                placeholder="Ask about power, security, wifi..."
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