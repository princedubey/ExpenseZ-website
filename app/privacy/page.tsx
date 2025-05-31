import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Privacy Policy - ExpenseZ App',
  description: 'Privacy policy for ExpenseZ personal finance management mobile application.'
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-muted-foreground">Last updated: January 2025</p>
        
        <h2>1. Introduction</h2>
        <p>
          Welcome to ExpenseZ. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you about how we look after your personal data when you use our 
          application and tell you about your privacy rights.
        </p>
        
        <h2>2. Data We Collect</h2>
        <h3>2.1 Personal Information</h3>
        <ul>
          <li>Email address</li>
          <li>User authentication data</li>
          <li>Profile information (name, profile picture)</li>
        </ul>

        <h3>2.2 Financial Information</h3>
        <ul>
          <li>Expense records</li>
          <li>Budget data</li>
          <li>Transaction history</li>
          <li>Financial categories and tags</li>
        </ul>

        <h3>2.3 Device Information</h3>
        <ul>
          <li>Device type</li>
          <li>Operating system</li>
          <li>App version</li>
          <li>IP address</li>
          <li>Usage statistics</li>
        </ul>

        <h2>3. How We Use Your Data</h2>
        <p>We use your data to:</p>
        <ul>
          <li>Provide and maintain our service</li>
          <li>Process your transactions</li>
          <li>Send you important updates</li>
          <li>Improve our application</li>
          <li>Detect and prevent fraud</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>4. Data Storage and Security</h2>
        <ul>
          <li>All data is encrypted during transmission</li>
          <li>We use secure servers to store your information</li>
          <li>Regular security audits are conducted</li>
          <li>Access to your data is strictly controlled</li>
        </ul>

        <h2>5. Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share your data with:
        </p>
        <ul>
          <li>Service providers who assist in operating our app</li>
          <li>Legal authorities when required by law</li>
          <li>Third-party analytics providers (anonymized data only)</li>
        </ul>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Export your data</li>
          <li>Opt-out of marketing communications</li>
        </ul>

        <h2>7. Data Retention</h2>
        <ul>
          <li>We retain your data as long as your account is active</li>
          <li>You can request data deletion at any time</li>
          <li>Some data may be retained for legal compliance</li>
        </ul>

        <h2>8. Children's Privacy</h2>
        <p>
          Our service is not intended for users under 13 years of age. We do not knowingly 
          collect data from children under 13.
        </p>

        <h2>9. Changes to Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any 
          changes by posting the new policy on this page.
        </p>

        <h2>10. Contact Information</h2>
        <p>For any privacy-related questions, please contact:</p>
        <ul>
          <li>Email: astropunjapp@gmail.com</li>
          <li>Developer: Prince Dubey</li>
          <li>App: ExpenseZ</li>
        </ul>

        <h2>11. Third-Party Services</h2>
        <p>Our app may use third-party services that collect information. These services include:</p>
        <ul>
          <li>Firebase (Authentication and Analytics)</li>
          <li>Google Sign-In</li>
          <li>Other necessary service providers</li>
        </ul>

        <h2>12. Data Protection</h2>
        <p>We implement appropriate security measures to protect your data, including:</p>
        <ul>
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security assessments</li>
          <li>Access controls and authentication</li>
          <li>Secure data backup procedures</li>
        </ul>

        <h2>13. International Data Transfers</h2>
        <p>
          Your data may be transferred to and processed in countries other than your country 
          of residence. We ensure appropriate safeguards are in place for such transfers.
        </p>

        <h2>14. Automated Decision Making</h2>
        <p>We do not use automated decision-making processes that significantly affect you.</p>

        <h2>15. Cookies and Tracking</h2>
        <p>We use cookies and similar tracking technologies to:</p>
        <ul>
          <li>Remember your preferences</li>
          <li>Analyze app usage</li>
          <li>Improve our services</li>
        </ul>

        <h2>16. Data Breach Procedures</h2>
        <p>In case of a data breach, we will:</p>
        <ul>
          <li>Notify affected users promptly</li>
          <li>Take immediate action to mitigate the breach</li>
          <li>Report to relevant authorities as required</li>
          <li>Implement measures to prevent future breaches</li>
        </ul>

        <h2>17. User Consent</h2>
        <p>By using ExpenseZ, you consent to:</p>
        <ul>
          <li>The collection and use of your data as described</li>
          <li>The processing of your data in accordance with this policy</li>
          <li>The transfer of your data as necessary for service provision</li>
        </ul>

        <h2>18. Compliance</h2>
        <p>We comply with:</p>
        <ul>
          <li>General Data Protection Regulation (GDPR)</li>
          <li>California Consumer Privacy Act (CCPA)</li>
          <li>Other applicable data protection laws</li>
        </ul>

        <h2>19. Data Portability</h2>
        <p>You can request a copy of your data in a commonly used format.</p>

        <h2>20. Complaints</h2>
        <p>
          If you have concerns about our data practices, please contact us at astropunjapp@gmail.com.
        </p>
      </div>
      
      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}