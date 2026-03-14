"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How do you handle power outages?",
    answer: "We provide 24/7 uninterrupted power through a dual-grid system and high-capacity silent backup generators. You will never experience a blackout during your stay."
  },
  {
    question: "What are your security measures?",
    answer: "Your safety is our priority. We have 24/7 on-site vetted security personnel, CCTV in common areas, and secure electronic access to all suites."
  },
  {
    question: "Is there high-speed internet for remote work?",
    answer: "Yes, every suite is equipped with dedicated fiber-optic WiFi, ensuring stable and high-speed connectivity for video calls and streaming."
  },
  {
    question: "Do you offer airport pickup?",
    answer: "Absolutely. Our private concierge can arrange luxury chauffeur services for airport transfers and city tours upon request."
  },
  {
    question: "What is your check-in and check-out policy?",
    answer: "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out can be arranged based on availability."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Common Inquiries</span>
          <h2 className="text-4xl font-black tracking-tighter text-foreground">
            Peace of <span className="text-primary">Mind.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="border border-border rounded-[2rem] px-8 bg-card/50 backdrop-blur-sm overflow-hidden"
              >
                <AccordionTrigger className="text-left font-black text-sm py-6 hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/60 text-sm leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;