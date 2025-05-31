"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';

const DownloadCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Start Managing Your Finances Today
          </motion.h2>
          
          <motion.p
            className="text-xl mb-8  max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Download ExpenseZ now and take the first step towards financial freedom. Track expenses, manage budgets, and gain valuable insights - all in one app.
          </motion.p>
          
          <motion.div
            className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" asChild className="">
              <a href="https://play.google.com/expensez" target="_blank" rel="noreferrer" className="flex items-center space-x-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.609 2.75L13.792 12L3.61 21.25C3.25 21.25 3 21 3 20.64V3.36C3 3 3.25 2.75 3.609 2.75Z" fill="currentColor"/>
                  <path d="M17.7089 8.49995L5.44995 1.64995C5.17895 1.49995 4.86995 1.49995 4.60895 1.63995L15.0489 12L17.7089 8.49995Z" fill="currentColor"/>
                  <path d="M15.0489 12L4.60889 22.36C4.86989 22.5 5.17889 22.5 5.44989 22.35L17.7089 15.5L15.0489 12Z" fill="currentColor"/>
                  <path d="M19.1909 11.17L17.0309 9.9L14.1909 12L17.0309 14.1L19.1909 12.83C19.9609 12.38 19.9609 11.62 19.1909 11.17Z" fill="currentColor"/>
                </svg>
                <span>Download on Play Store</span>
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="">
              <a href="#features">Learn More</a>
            </Button>
          </motion.div>
          
          <motion.div
            className="mt-8 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p>Available on Android devices. iOS version coming soon.</p>
            <p className="mt-1">Free to download with in-app purchases</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;