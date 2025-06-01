"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import AnimatedText from '@/components/ui/animated-text';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/expensez-logo.png" alt="ExpenseZ Logo" width={50} height={50} 
          className='rounded-full bg-white transition-all duration-300'/>
          <AnimatedText />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/#features" className="text-foreground/80 hover:text-foreground transition">
            Features
          </Link>
          <Link href="/#benefits" className="text-foreground/80 hover:text-foreground transition">
            Benefits
          </Link>
          <Link href="/#testimonials" className="text-foreground/80 hover:text-foreground transition">
            Testimonials
          </Link>
          <Link href="/#faq" className="text-foreground/80 hover:text-foreground transition">
            FAQ
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          
          <Button asChild className="font-medium">
            <a href="https://play.google.com/expensez" target="_blank" rel="noreferrer">
              Download App
            </a>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Menu">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md p-4">
          <nav className="flex flex-col space-y-4 py-4">
            <Link 
              href="/#features" 
              className="text-foreground/80 hover:text-foreground transition px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/#benefits" 
              className="text-foreground/80 hover:text-foreground transition px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link 
              href="/#testimonials" 
              className="text-foreground/80 hover:text-foreground transition px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="/#faq" 
              className="text-foreground/80 hover:text-foreground transition px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            
            <Button asChild className="w-full mt-2">
              <a href="https://play.google.com/expensez" target="_blank" rel="noreferrer">
                Download App
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;