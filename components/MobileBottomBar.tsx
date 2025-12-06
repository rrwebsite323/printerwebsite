'use client';

import { Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site-config';

export default function MobileBottomBar() {
  const handleMessageClick = () => {
    // Scroll to contact form or open SMS
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to SMS if no contact form on page
      window.location.href = `sms:${siteConfig.business.smsNumber}`;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-lg animate-slide-up">
      <div className="grid grid-cols-2 gap-0">
        <a
          href={`tel:${siteConfig.business.phone}`}
          className="flex items-center justify-center space-x-2 bg-green-600 text-white py-4 hover:bg-green-700 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="font-semibold">Call Now</span>
        </a>
        <button
          onClick={handleMessageClick}
          className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-4 hover:bg-blue-700 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="font-semibold">Message</span>
        </button>
      </div>
    </div>
  );
}
