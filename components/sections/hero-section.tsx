"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative pt-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Master Your Finances with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                ExpenseZ
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Track expenses, manage budgets, and gain valuable financial insights with our intuitive and powerful mobile app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="gap-2 text-lg">
                <a href="https://play.google.com/expensez" target="_blank" rel="noreferrer">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.609 2.75L13.792 12L3.61 21.25C3.25 21.25 3 21 3 20.64V3.36C3 3 3.25 2.75 3.609 2.75Z" fill="currentColor"/>
                    <path d="M17.7089 8.49995L5.44995 1.64995C5.17895 1.49995 4.86995 1.49995 4.60895 1.63995L15.0489 12L17.7089 8.49995Z" fill="currentColor"/>
                    <path d="M15.0489 12L4.60889 22.36C4.86989 22.5 5.17889 22.5 5.44989 22.35L17.7089 15.5L15.0489 12Z" fill="currentColor"/>
                    <path d="M19.1909 11.17L17.0309 9.9L14.1909 12L17.0309 14.1L19.1909 12.83C19.9609 12.38 19.9609 11.62 19.1909 11.17Z" fill="currentColor"/>
                  </svg>
                  Download App
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Available on Android. iOS coming soon.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative h-[600px] w-full">
              <div className="absolute top-0 right-0 md:right-10 h-[500px] w-[250px] bg-gradient-to-b from-blue-500 to-primary rounded-3xl overflow-hidden shadow-2xl transform rotate-3">
                <Image
                  src="home.jpg"
                  alt="ExpenseZ App Dashboard"
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[220px] h-[450px] rounded-2xl overflow-hidden border-4 border-white/20">
                    <Image
                      src="home.jpg"
                      alt="ExpenseZ App Dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 md:left-10 h-[500px] w-[250px] bg-gradient-to-b from-primary to-blue-600 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3">
                <Image
                  src="splash.jpg"
                  alt="ExpenseZ App Insights"
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[220px] h-[450px] rounded-2xl overflow-hidden border-4 border-white/20">
                    <Image
                      src="splash.jpg"
                      alt="ExpenseZ App Insights"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 md:mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-medium mb-6 text-muted-foreground">Trusted by thousands of users worldwide</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-bold">4.8</span>
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium">App Rating</p>
                  <p className="text-sm text-muted-foreground">Play Store</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-bold">100+</span>
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium">Downloads</p>
                  <p className="text-sm text-muted-foreground">And growing</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-bold">99%</span>
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium">Satisfaction</p>
                  <p className="text-sm text-muted-foreground">User reviews</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;