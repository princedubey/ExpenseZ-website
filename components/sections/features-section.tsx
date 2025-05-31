"use client"

import React, { useRef, ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from 'framer-motion';
import { 
  Receipt, 
  PieChart, 
  Wallet, 
  Bell, 
  Shield, 
  FileText, 
  Tag, 
  Search 
} from 'lucide-react';

const features = [
  {
    icon: <Receipt className="h-10 w-10 text-primary" />,
    title: "Easy Expense Tracking",
    description: "Quickly log expenses, categorize them, and attach receipts or notes to your transactions. Support for multiple currencies included.",
  },
  {
    icon: <Wallet className="h-10 w-10 text-primary" />,
    title: "Smart Budget Management",
    description: "Set monthly budgets for different categories with visual progress indicators and alerts when approaching limits.",
  },
  {
    icon: <PieChart className="h-10 w-10 text-primary" />,
    title: "Comprehensive Analytics",
    description: "Gain insights with detailed spending reports, visual charts, and category-wise analysis of your finances.",
  },
  {
    icon: <Bell className="h-10 w-10 text-primary" />,
    title: "Smart Notifications",
    description: "Get timely alerts for upcoming bills, budget limits, unusual spending patterns, and financial goals.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Data Security",
    description: "Your financial data is protected with secure authentication, encryption, and regular backups.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Export Reports",
    description: "Generate and export detailed financial reports in multiple formats for your records.",
  },
  {
    icon: <Tag className="h-10 w-10 text-primary" />,
    title: "Custom Categories",
    description: "Create and customize expense categories that match your unique spending habits and financial needs.",
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Advanced Search",
    description: "Quickly find transactions with powerful search, filter, and sort options across all your financial data.",
  }
];

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-md border border-border/40">
        <CardHeader className="pb-2">
          <div className="mb-4">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            POWERFUL FEATURES
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything You Need for Financial Control
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ExpenseZ combines powerful features with an intuitive interface to give you complete control over your finances.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;