import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://expensez.princedubey.com'),
  title: 'ExpenseZ - Best Personal Finance & Expense Tracking App',
  description: 'ExpenseZ is the #1 expense tracking and personal finance management app. Track expenses, manage budgets, and gain financial insights with our intuitive and powerful mobile app. Download now for free!',
  keywords: [
    'ExpenseZ',
    'expensez',
    'expense z',
    'expense tracker',
    'expense tracking app',
    'personal finance app',
    'budget app',
    'money tracker',
    'expense management',
    'financial management',
    'budget tracker',
    'expense manager',
    'personal finance tracker',
    'best expense app',
    'free expense tracker',
    'expense tracking software',
    'financial tracker',
    'budget management app',
    'expense calculator',
    'money management app'
  ].join(', '),
  authors: [{ name: 'ExpenseZ Team', url: 'https://expensez.princedubey.com' }],
  creator: 'ExpenseZ',
  publisher: 'ExpenseZ',
  openGraph: {
    title: 'ExpenseZ - Best Personal Finance & Expense Tracking App',
    description: 'Track expenses, manage budgets, and gain financial insights with ExpenseZ - the #1 expense tracking and personal finance management app. Download now for free!',
    url: 'https://expensez.princedubey.com',
    siteName: 'ExpenseZ',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ExpenseZ - Best Personal Finance Management App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExpenseZ - Best Personal Finance & Expense Tracking App',
    description: 'Track expenses, manage budgets, and gain financial insights with ExpenseZ - the #1 expense tracking and personal finance management app. Download now for free!',
    images: ['/twitter-image.jpg'],
    creator: '@expensez',
    site: '@expensez',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
  alternates: {
    canonical: 'https://expensez.princedubey.com',
    languages: {
      'en-US': 'https://expensez.princedubey.com',
    },
  },
  category: 'finance',
  classification: 'Finance App',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'theme-color': '#ffffff',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="application-name" content="ExpenseZ" />
        <meta name="apple-mobile-web-app-title" content="ExpenseZ" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}