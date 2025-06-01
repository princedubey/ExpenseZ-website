import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Mail, 
  MessageCircle, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github 
} from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/expensez-logo.png" alt="ExpenseZ Logo" width={50} height={50} 
              className='rounded-full bg-white'/>
              <span className="font-bold text-xl">ExpenseZ</span>
            </div>
            <p className="text-muted-foreground">
              Track expenses, manage budgets, and gain financial insights with ExpenseZ, your personal finance companion.
            </p>
            <div className="flex space-x-4 pt-2">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-muted-foreground hover:text-foreground transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#benefits" className="text-muted-foreground hover:text-foreground transition">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-muted-foreground hover:text-foreground transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-muted-foreground hover:text-foreground transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:support@expensez.app" className="text-muted-foreground hover:text-foreground transition">
                  princedubey.info@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  In-app support chat
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild className="w-full">
                <a href="https://play.google.com/expensez" target="_blank" rel="noreferrer">
                  Download ExpenseZ
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ExpenseZ. All rights reserved.</p>
          <p className="mt-2">Built with ♥ by Prince Dubey for better financial management</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;