import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://expensez.app'),
  title: 'ExpenseZ - Personal Finance Management App',
  description: 'Track expenses, manage budgets, and gain financial insights with ExpenseZ, your personal finance companion app.',
  keywords: 'expense tracker, budget app, finance management, money tracker, personal finance app',
  authors: [{ name: 'ExpenseZ Team' }],
  creator: 'ExpenseZ',
  publisher: 'ExpenseZ',
  openGraph: {
    title: 'ExpenseZ - Personal Finance Management App',
    description: 'Track expenses, manage budgets, and gain financial insights with ExpenseZ',
    url: 'https://expensez.app',
    siteName: 'ExpenseZ',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ExpenseZ App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExpenseZ - Personal Finance Management App',
    description: 'Track expenses, manage budgets, and gain financial insights with ExpenseZ',
    images: ['/twitter-image.jpg'],
    creator: '@expensez',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://expensez.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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