'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site-config';

interface FloatingContactButtonProps {
  appearAfterScroll?: number;
}

export default function FloatingContactButton({ appearAfterScroll = 300 }: FloatingContactButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > appearAfterScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [appearAfterScroll]);

  if (!isVisible) return null;

  return (
    <a
      href={`tel:${siteConfig.business.phone}`}
      className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-30 w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-all duration-300 animate-fade-in hover:scale-110"
      aria-label="Call us"
    >
      <Phone className="w-6 h-6 animate-pulse" />
    </a>
  );
}
