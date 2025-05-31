"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is ExpenseZ free to use?",
    answer: "ExpenseZ offers both free and premium plans. The free plan includes all essential expense tracking features, while the premium plan offers advanced analytics, unlimited categories, and cloud backup features."
  },
  {
    question: "Can I sync my bank accounts with ExpenseZ?",
    answer: "Yes, ExpenseZ supports secure bank synchronization in selected countries. This feature allows you to automatically import and categorize transactions from your connected accounts."
  },
  {
    question: "How secure is my financial data with ExpenseZ?",
    answer: "We take security very seriously. ExpenseZ uses bank-level encryption for all data, secure authentication methods, and never stores your bank login credentials. Your data is regularly backed up and you can enable additional security features like biometric authentication."
  },
  {
    question: "Can I use ExpenseZ for business expenses?",
    answer: "Absolutely! ExpenseZ works great for small businesses, freelancers, and professionals. You can separate business and personal expenses, create business-specific categories, and generate reports suitable for tax purposes."
  },
  {
    question: "Does ExpenseZ work offline?",
    answer: "Yes, ExpenseZ is designed to work offline. You can record expenses even without an internet connection, and they will automatically sync when you're back online."
  },
  {
    question: "Can I export my data from ExpenseZ?",
    answer: "Yes, you can export your financial data in multiple formats including PDF, CSV, and Excel. This is useful for creating backups, sharing information with your accountant, or migrating to other systems."
  }
];

const FAQSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have Questions? We Have Answers
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find answers to common questions about ExpenseZ and how it can help you manage your finances.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => {
              const ref = useRef(null);
              const isFaqInView = useInView(ref, { once: true, amount: 0.1 });
              
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-b border-border/50">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;