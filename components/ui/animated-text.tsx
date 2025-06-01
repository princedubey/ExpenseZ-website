"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  "It's ExpenseZ",
  "Your Cashbook",
  "Smart Finance",
  "Money Manager",
  "Expense Tracker"
];

const AnimatedText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const animate = () => {
      setIsVisible(false);
      timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 300);
    };

    const intervalId = setInterval(animate, 2500);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative h-[2em] w-[200px] flex items-center">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ 
              duration: 0.2,
              ease: "easeInOut"
            }}
            className="absolute inset-0 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-500 leading-tight"
          >
            {phrases[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText; 