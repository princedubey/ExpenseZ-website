import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Cookie Policy - ExpenseZ App',
  description: 'Cookie policy for ExpenseZ personal finance management mobile application.'
};

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-muted-foreground">Last updated: January 2025</p>
        
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your device when you use ExpenseZ. 
          They help us provide and improve our services by remembering your preferences and 
          analyzing how you use our app.
        </p>
        
        <h2>2. Types of Cookies We Use</h2>
        
        <h3>2.1 Essential Cookies</h3>
        <p>
          These cookies are necessary for the app to function properly. They enable core 
          functionality such as security, account authentication, and remembering your preferences. 
          You cannot opt out of these cookies.
        </p>
        
        <h3>2.2 Analytics Cookies</h3>
        <p>
          We use analytics cookies to understand how you interact with our app, which helps us 
          improve our services. These cookies collect information about:
        </p>
        <ul>
          <li>Pages you visit</li>
          <li>Time spent on each feature</li>
          <li>Error messages you receive</li>
          <li>How you reached our app</li>
        </ul>
        
        <h3>2.3 Functionality Cookies</h3>
        <p>
          These cookies allow the app to remember choices you make and provide enhanced features. 
          They may include:
        </p>
        <ul>
          <li>Language preferences</li>
          <li>Theme settings</li>
          <li>Regional preferences</li>
          <li>Personal customizations</li>
        </ul>
        
        <h2>3. Third-Party Cookies</h2>
        <p>
          Some features and services are provided by third parties, which may use their own cookies. 
          These third parties include:
        </p>
        <ul>
          <li>Analytics providers</li>
          <li>Authentication services</li>
          <li>Payment processors</li>
        </ul>
        
        <h2>4. Cookie Management</h2>
        <p>You can manage cookie preferences through:</p>
        <ul>
          <li>App settings</li>
          <li>Device settings</li>
          <li>Browser settings</li>
        </ul>
        
        <h2>5. Data Collection</h2>
        <p>Through cookies, we may collect:</p>
        <ul>
          <li>Device information</li>
          <li>Usage patterns</li>
          <li>Performance data</li>
          <li>User preferences</li>
        </ul>
        
        <h2>6. How We Use Cookie Data</h2>
        <p>We use the information collected through cookies to:</p>
        <ul>
          <li>Improve app performance</li>
          <li>Enhance user experience</li>
          <li>Analyze usage patterns</li>
          <li>Debug technical issues</li>
          <li>Provide personalized features</li>
        </ul>
        
        <h2>7. Cookie Retention</h2>
        <p>
          Different cookies have different lifespans:
        </p>
        <ul>
          <li>Session cookies: Deleted when you close the app</li>
          <li>Persistent cookies: Remain until they expire or are deleted</li>
          <li>Authentication cookies: Valid until you log out</li>
        </ul>
        
        <h2>8. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy periodically. We will notify you of any material 
          changes through the app or via email.
        </p>
        
        <h2>9. Contact Us</h2>
        <p>If you have questions about our Cookie Policy, please contact:</p>
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