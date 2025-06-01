import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - ExpenseZ | Your Data Security Matters',
  description: 'Read ExpenseZ\'s comprehensive privacy policy. Learn how we protect your financial data, ensure your privacy, and maintain transparency in our data practices.',
  keywords: [
    'ExpenseZ privacy policy',
    'expense tracker privacy',
    'financial app privacy',
    'data protection',
    'user privacy',
    'financial data security',
    'privacy policy',
    'data privacy',
    'user data protection',
    'financial privacy'
  ].join(', '),
  openGraph: {
    title: 'Privacy Policy - ExpenseZ | Your Data Security Matters',
    description: 'Read ExpenseZ\'s comprehensive privacy policy. Learn how we protect your financial data, ensure your privacy, and maintain transparency in our data practices.',
    url: 'https://expensez.princedubey.com/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy - ExpenseZ | Your Data Security Matters',
    description: 'Read ExpenseZ\'s comprehensive privacy policy. Learn how we protect your financial data, ensure your privacy, and maintain transparency in our data practices.',
  },
  alternates: {
    canonical: 'https://expensez.princedubey.com/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            At ExpenseZ, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our mobile application and 
            related services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>Account information (email, name)</li>
            <li>Financial data (expenses, income, budgets)</li>
            <li>Device information</li>
            <li>Usage data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>Provide and maintain our services</li>
            <li>Improve user experience</li>
            <li>Send important updates</li>
            <li>Analyze usage patterns</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. 
            Your financial data is encrypted and stored securely.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request data deletion</li>
            <li>Opt-out of communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:privacy@expensez.app" className="text-primary hover:underline">
              privacy@expensez.app
            </a>
          </p>
        </section>
      </div>
      
      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}