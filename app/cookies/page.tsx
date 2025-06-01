import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - ExpenseZ | How We Use Cookies',
  description: 'Learn about how ExpenseZ uses cookies and similar technologies to enhance your experience. Understand our cookie policy and your privacy choices.',
  keywords: [
    'ExpenseZ cookie policy',
    'expense tracker cookies',
    'financial app cookies',
    'cookie usage',
    'privacy cookies',
    'app cookies',
    'cookie consent',
    'tracking cookies',
    'essential cookies',
    'cookie preferences'
  ].join(', '),
  openGraph: {
    title: 'Cookie Policy - ExpenseZ | How We Use Cookies',
    description: 'Learn about how ExpenseZ uses cookies and similar technologies to enhance your experience. Understand our cookie policy and your privacy choices.',
    url: 'https://expensez.princedubey.com/cookies',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Cookie Policy - ExpenseZ | How We Use Cookies',
    description: 'Learn about how ExpenseZ uses cookies and similar technologies to enhance your experience. Understand our cookie policy and your privacy choices.',
  },
  alternates: {
    canonical: 'https://expensez.princedubey.com/cookies',
  },
};

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device when you use ExpenseZ. 
            They help us provide you with a better experience and enable certain features to work properly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>Essential cookies for app functionality</li>
            <li>Authentication and security</li>
            <li>Performance and analytics</li>
            <li>User preferences and settings</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
              <p>Required for basic app functionality and security.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
              <p>Help us understand how users interact with our app.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Preference Cookies</h3>
              <p>Remember your settings and preferences.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
          <p>
            You can control and manage cookies through your device settings. However, please note 
            that disabling certain cookies may affect the functionality of ExpenseZ.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
          <p>
            Some third-party services we use may also set cookies. These services include analytics 
            providers and essential service partners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at:
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