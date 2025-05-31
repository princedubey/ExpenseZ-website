import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Terms of Service - ExpenseZ App',
  description: 'Terms of service for ExpenseZ personal finance management mobile application.'
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-muted-foreground">Last updated: January 2025</p>
        
        <h2>1. Agreement to Terms</h2>
        <p>
          By downloading, installing, or using ExpenseZ ("the App"), you agree to be bound by these Terms of Service. 
          If you disagree with any part of these terms, you may not access or use the App.
        </p>
        
        <h2>2. Account Registration</h2>
        <ul>
          <li>You must provide accurate and complete information when creating an account</li>
          <li>You are responsible for maintaining the security of your account credentials</li>
          <li>You must notify us immediately of any unauthorized access to your account</li>
          <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
        </ul>
        
        <h2>3. User Responsibilities</h2>
        <p>You agree to:</p>
        <ul>
          <li>Use the App in compliance with all applicable laws and regulations</li>
          <li>Not attempt to gain unauthorized access to the App or its systems</li>
          <li>Not use the App for any illegal or unauthorized purpose</li>
          <li>Not interfere with or disrupt the App's operation</li>
        </ul>
        
        <h2>4. Subscription and Payments</h2>
        <ul>
          <li>Some features of the App may require a paid subscription</li>
          <li>All payments are processed through authorized payment providers</li>
          <li>Subscription fees are non-refundable except where required by law</li>
          <li>We reserve the right to modify subscription prices with notice</li>
        </ul>
        
        <h2>5. Intellectual Property</h2>
        <p>
          The App, including its original content, features, and functionality, is owned by ExpenseZ 
          and is protected by international copyright, trademark, and other intellectual property laws.
        </p>
        
        <h2>6. Data Usage</h2>
        <ul>
          <li>We collect and process data as described in our Privacy Policy</li>
          <li>You retain ownership of your personal data</li>
          <li>We may use anonymized data for improving our services</li>
        </ul>
        
        <h2>7. App Updates</h2>
        <ul>
          <li>We may release updates to improve functionality and security</li>
          <li>Updates may be automatic or require user action</li>
          <li>Continued use of the App may require accepting updates</li>
        </ul>
        
        <h2>8. Third-Party Services</h2>
        <p>
          The App may integrate with third-party services. Use of such services is subject to their 
          respective terms and conditions.
        </p>
        
        <h2>9. Disclaimer of Warranties</h2>
        <p>
          The App is provided "as is" without warranties of any kind, either express or implied, 
          including but not limited to merchantability and fitness for a particular purpose.
        </p>
        
        <h2>10. Limitation of Liability</h2>
        <p>
          We shall not be liable for any indirect, incidental, special, consequential, or punitive 
          damages resulting from your use or inability to use the App.
        </p>
        
        <h2>11. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify users of any 
          material changes through the App or via email.
        </p>
        
        <h2>12. Termination</h2>
        <p>
          We may terminate or suspend your account and access to the App at our sole discretion, 
          without prior notice, for conduct that we believe violates these Terms.
        </p>
        
        <h2>13. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
          in which ExpenseZ operates.
        </p>
        
        <h2>14. Contact Information</h2>
        <p>For any questions about these Terms, please contact us at:</p>
        <ul>
          <li>Email: astropunjapp@gmail.com</li>
          <li>Developer: Prince Dubey</li>
          <li>App: ExpenseZ</li>
        </ul>
      </div>
      
      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}