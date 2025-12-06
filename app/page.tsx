import Link from 'next/link';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import ServiceCard from '@/components/ServiceCard';
import BenefitCard from '@/components/BenefitCard';
import BrandLogosGrid from '@/components/BrandLogosGrid';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Form on Right */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-8 sm:py-12 md:py-16 w-full mb-12 sm:mb-16 md:mb-20">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 box-border">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-center">
            {/* Left Side - Hero Content (3 columns) */}
            <div className="lg:col-span-3">
              <div className="max-w-3xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 sm:px-5 py-2 mb-4 sm:mb-6">
                  <span className="text-blue-100 font-semibold text-xs sm:text-sm">⚡ Same-Day Service Available</span>
                </div>
                
                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
                  Professional<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Printer Support
                  </span>
                </h1>
                
                {/* Subheadline */}
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                  Expert repair and maintenance for all major printer brands across the USA
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
                  <a
                    href={`tel:${siteConfig.business.phone}`}
                    className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-xl hover:scale-105 active:scale-100"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-sm sm:text-base">{siteConfig.business.phone}</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-xl hover:scale-105 active:scale-100"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                
                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-300 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="font-medium">Certified Technicians</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="font-medium">All Brands</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="font-medium">Fast Response</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form (2 columns) */}
            <div className="lg:col-span-2 mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-gray-900">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Get a Free Quote
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Fill out the form and we&apos;ll contact you within 1 hour
                  </p>
                </div>
                
                <ContactForm submitButtonText="Get Free Quote" showServiceSelect={true} compactMessage={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white w-full mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 sm:mb-4">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive printer solutions to keep your business running
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {siteConfig.content.services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features.slice(0, 3)}
                ctaText="Learn More"
                ctaHref="/services"
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:text-blue-700 group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 w-full mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 sm:mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              The Difference
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Professional service backed by expertise and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {siteConfig.content.benefits.map((benefit) => (
              <BenefitCard
                key={benefit.id}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <BrandLogosGrid brands={siteConfig.content.brands} />

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white w-full flex justify-center mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 px-4">Trusted by Thousands</h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 px-4">Our numbers speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-center">
            <div className="px-2">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2">15+</div>
              <div className="text-sm sm:text-base md:text-lg text-blue-100">Years Experience</div>
            </div>
            <div className="px-2">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2">10K+</div>
              <div className="text-sm sm:text-base md:text-lg text-blue-100">Repairs Done</div>
            </div>
            <div className="px-2">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2">98%</div>
              <div className="text-sm sm:text-base md:text-lg text-blue-100">Satisfaction</div>
            </div>
            <div className="px-2">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2">24/7</div>
              <div className="text-sm sm:text-base md:text-lg text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-white w-full flex justify-center mb-0">
        <div className="max-w-4xl w-full mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-4">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 px-4">
              Get expert printer support today. Free quotes, fast service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-xl hover:scale-105 active:scale-100"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-xl hover:scale-105 active:scale-100"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
