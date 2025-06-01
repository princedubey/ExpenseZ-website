"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    rating: 5,
    comment: "ExpenseZ has completely transformed how I manage my business finances. The categorization features and expense reports save me hours each month."
  },
  {
    name: "James Wilson",
    role: "Freelance Designer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    rating: 5,
    comment: "As a freelancer, keeping track of expenses was always a headache until I found ExpenseZ. Now I can easily separate business and personal expenses."
  },
  {
    name: "Emily Chen",
    role: "Graduate Student",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 4,
    comment: "Living on a tight budget as a student, ExpenseZ helps me stay on track with my spending and save for what matters most. The UI is super intuitive!"
  },
  {
    name: "Michael Rodriguez",
    role: "Finance Professional",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    rating: 5,
    comment: "Even as someone who works in finance, I find ExpenseZ incredibly useful for my personal finances. The analytics and insights are impressive."
  },
];

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col border-border/40 hover:border-border transition-all duration-300">
        <CardContent className="flex flex-col h-full p-6">
          <div className="flex space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} 
              />
            ))}
          </div>
          
          <p className="text-foreground/90 flex-grow mb-6 italic">"{testimonial.comment}"</p>
          
          <div className="flex items-center mt-auto pt-4 border-t border-border/40">
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-3">
              <h4 className="font-medium">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            USER TESTIMONIALS
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of satisfied users who have transformed their financial habits with ExpenseZ.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;