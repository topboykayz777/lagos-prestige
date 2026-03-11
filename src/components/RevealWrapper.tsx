"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const RevealWrapper = ({ children, className = "" }: RevealWrapperProps) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 1.1, duration: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 w-full"
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            delay: 1.1, 
            duration: 1, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="w-full"
        >
          {/* We split the children or wrap the first half if needed, 
              but for simplicity we'll apply the logic to the container's children in the components */}
          {Array.isArray(children) ? children[0] : children}
        </motion.div>
        
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            delay: 1.1, 
            duration: 1, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="w-full"
        >
          {Array.isArray(children) ? children[1] : null}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RevealWrapper;