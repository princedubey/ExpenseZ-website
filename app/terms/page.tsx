import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - ExpenseZ | User Agreement & Guidelines',
  description: 'Read ExpenseZ\'s Terms of Service. Understand our user agreement, guidelines, and policies for using our expense tracking and personal finance management app.',
  keywords: [
    'ExpenseZ terms of service',
    'expense tracker terms',
    'financial app terms',
    'user agreement',
    'terms and conditions',
    'app terms of use',
    'service agreement',
    'user guidelines',
    'app policies',
    'terms of use'
  ].join(', '),
  openGraph: {
    title: 'Terms of Service - ExpenseZ | User Agreement & Guidelines',
    description: 'Read ExpenseZ\'s Terms of Service. Understand our user agreement, guidelines, and policies for using our expense tracking and personal finance management app.',
    url: 'https://expensez.princedubey.com/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service - ExpenseZ | User Agreement & Guidelines',
    description: 'Read ExpenseZ\'s Terms of Service. Understand our user agreement, guidelines, and policies for using our expense tracking and personal finance management app.',
  },
  alternates: {
    canonical: 'https://expensez.princedubey.com/terms',
  },
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using ExpenseZ, you agree to be bound by these Terms of Service 
            and all applicable laws and regulations. If you do not agree with any of these terms, 
            you are prohibited from using this app.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>Permission is granted to use ExpenseZ for personal, non-commercial purposes, subject to the following restrictions:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>You must not modify or copy the app</li>
            <li>You must not use the app for any commercial purpose</li>
            <li>You must not attempt to reverse engineer the app</li>
            <li>You must not remove any copyright or proprietary notations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <p>As a user of ExpenseZ, you agree to:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>Provide accurate information</li>
            <li>Maintain the security of your account</li>
            <li>Use the app in compliance with laws</li>
            <li>Not misuse or abuse the service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Service Modifications</h2>
          <p>
            We reserve the right to modify or discontinue ExpenseZ at any time without notice. 
            We shall not be liable to you or any third party for any modification, suspension, 
            or discontinuance of the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p>
            ExpenseZ shall not be liable for any indirect, incidental, special, consequential, 
            or punitive damages resulting from your use of or inability to use the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
            <br />
            <a href="mailto:terms@expensez.app" className="text-primary hover:underline">
              terms@expensez.app
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