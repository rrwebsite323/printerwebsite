import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/logo.svg" 
                alt="Printer Supports Online" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              {siteConfig.business.tagline}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Serving customers across the USA with professional printer repair and support services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{siteConfig.business.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="break-all">{siteConfig.business.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Business Hours</h3>
            <ul className="space-y-3">
              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Mon - Fri</span>
                <span className="text-gray-300">{siteConfig.business.hours.monday}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Saturday</span>
                <span className="text-gray-300">{siteConfig.business.hours.saturday}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Sunday</span>
                <span className="text-gray-300">{siteConfig.business.hours.sunday}</span>
              </div>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {currentYear} {siteConfig.business.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
