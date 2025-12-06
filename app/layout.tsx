import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import FloatingContactButton from '@/components/FloatingContactButton';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Printer Supports Online | Expert Printer Repair & Support',
  description: 'Professional printer repair and support services across the USA. Fast response, certified technicians, all brands supported. Get a free quote today!',
  keywords: 'printer repair, printer support, printer service, USA, HP, Canon, Epson, Brother',
  robots: 'index, follow',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Printer Supports Online | Expert Printer Repair & Support',
    description: 'Professional printer repair and support services across the USA',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <main className="min-h-screen pt-[90px] md:pt-[105px] pb-16 md:pb-0 overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
        <FloatingContactButton />
      </body>
    </html>
  );
}
