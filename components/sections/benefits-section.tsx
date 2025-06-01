"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const benefits = [
  {
    title: "Save Time Tracking Expenses",
    description: "Quickly log expenses on-the-go with our intuitive interface. No more tedious manual entry or keeping paper receipts.",
    image: "https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg"
  },
  {
    title: "Stay Within Your Budget",
    description: "Set realistic budgets and receive notifications before you exceed them. Build better spending habits over time.",
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg"
  },
  {
    title: "Make Informed Financial Decisions",
    description: "Visualize your spending patterns with intuitive charts and reports. Identify areas where you can save money.",
    image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg"
  }
];

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            WHY USE EXPENSEZ
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transform Your Financial Future
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ExpenseZ helps you take control of your finances, build better habits, and work toward your financial goals.
          </motion.p>
        </div>
        
        <div className="space-y-24 md:space-y-32">
          {benefits.map((benefit, index) => {
            const isEven = index % 2 === 0;
            const ref = useRef(null);
            const isBenefitInView = useInView(ref, { once: true, amount: 0.3 });
            
            return (
              <div 
                key={index} 
                ref={ref}
                className={`grid grid-cols-1 ${isEven ? 'md:grid-cols-[55%_45%]' : 'md:grid-cols-[45%_55%]'} gap-8 md:gap-16 items-center`}
              >
                <motion.div 
                  className={`${isEven ? 'md:order-1' : 'md:order-2'}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isBenefitInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-sm uppercase tracking-wider mb-1">ExpenseZ Feature</p>
                      <h3 className="text-2xl font-bold">{benefit.title}</h3>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={`${isEven ? 'md:order-2' : 'md:order-1'} flex flex-col justify-center`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  animate={isBenefitInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
                  transition={{ duration: 0.7 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">{benefit.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8">{benefit.description}</p>
                  
                  <ul className="space-y-4">
                    {[
                      "Track expenses in real-time",
                      "Visualize spending patterns",
                      "Set and monitor financial goals",
                      "Receive personalized insights"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="mr-3 mt-1.5 h-5 w-5 flex-shrink-0 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;