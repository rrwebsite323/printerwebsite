import { siteConfig } from '@/config/site-config';
import Button from '@/components/Button';
import Image from 'next/image';
import { Award, Users, MapPin, Shield } from 'lucide-react';

export const metadata = {
  title: 'About Us | Printer Supports Online',
  description: 'Learn about our expert printer repair and support services. Certified technicians serving customers across the USA.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* About Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            Your Trusted Printer Experts
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto px-4">
            Delivering professional printer support with expertise and dedication
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="relative rounded-2xl sm:rounded-3xl h-64 sm:h-80 md:h-96 overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&q=80"
                  alt="Professional printer technician at work"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                  <div className="p-6 sm:p-8 text-white">
                    <p className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Professional Service</p>
                    <p className="text-sm sm:text-base text-blue-100">Since 2008</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 sm:mb-4">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                15+ Years of Excellence
              </h2>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008, Printer Supports Online has been providing exceptional printer repair and support services to businesses and individuals across the United States.
                </p>
                <p>
                  Our mission is simple: deliver fast, reliable, and professional printer support that keeps your business running smoothly. With over 15 years of experience, we've helped thousands of customers resolve their printer issues.
                </p>
                <p>
                  We pride ourselves on our certified technicians, comprehensive service offerings, and commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Credentials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">
              Our Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-semibold">Years Experience</div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-5xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-semibold">Certified Technicians</div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-5xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600 font-semibold">Customers Served</div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-5xl font-bold text-orange-600 mb-2">50</div>
              <div className="text-gray-600 font-semibold">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">
            Service Area
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Serving Customers Across the USA
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We provide nationwide printer support services with local expertise. Our network of certified technicians ensures fast response times wherever you are.
          </p>
          
          <div className="bg-blue-50 rounded-3xl p-12 mb-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Northeast</h3>
                <p className="text-sm text-gray-600">NY, MA, PA, NJ, CT</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Southeast</h3>
                <p className="text-sm text-gray-600">FL, GA, NC, VA, SC</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Midwest</h3>
                <p className="text-sm text-gray-600">IL, OH, MI, IN, WI</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">West</h3>
                <p className="text-sm text-gray-600">CA, WA, OR, AZ, NV</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600">
            Don't see your state? Contact us to confirm coverage.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Get Started Today
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-blue-100 px-4">
            Experience the difference of working with true printer experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button href="/contact" variant="secondary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4">
              Contact Us
            </Button>
            <Button href="/services" variant="call" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-blue-600 hover:bg-gray-100">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
