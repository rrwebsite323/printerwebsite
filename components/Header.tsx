'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site-config';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  // Function to check if a link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isSticky ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[90px] md:h-[105px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Printer Supports Online" 
              className="h-[75px] w-auto md:h-[88px]"
            />
          </Link>

          {/* Desktop Navigation - Fixed spacing */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-semibold transition-colors ${
                  isActiveLink(link.href)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">{siteConfig.business.phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <a href={`tel:${siteConfig.business.phone}`} className="p-2 text-blue-600">
              <Phone className="w-6 h-6" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold ${
                  isActiveLink(link.href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 mt-4"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
