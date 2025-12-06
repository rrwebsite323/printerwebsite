import { siteConfig } from '@/config/site-config';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import * as Icons from 'lucide-react';
import { Phone } from 'lucide-react';

export const metadata = {
  title: 'Printer Services | Printer Supports Online',
  description: 'Professional printer repair, maintenance, installation, and support services for all major brands.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Services Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            Professional Printer Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto px-4">
            Comprehensive printer support solutions for businesses across the USA
          </p>
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 sm:mb-4">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Complete Printer Solutions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.content.services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                ctaText="Get Quote"
                ctaHref="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 sm:mb-4">
              We Fix
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Common Printer Problems
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Expert solutions for all your printer issues
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.content.problems.map((problem) => {
              const iconName = problem.icon.split('-').map((word, index) => 
                index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1)
              ).join('');
              const IconComponent = (Icons as any)[iconName] || Icons.AlertCircle;

              return (
                <div key={problem.id} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-red-300">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Get Help Now
            </Button>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Need Help With Your Printer?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-blue-100 px-4">
            Contact us today for fast, professional printer support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button href="/contact" variant="secondary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4">
              Contact Us Today
            </Button>
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-gray-100 active:bg-gray-200 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm sm:text-base">Call {siteConfig.business.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
