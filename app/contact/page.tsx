import { siteConfig } from '@/config/site-config';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Printer Supports Online',
  description: 'Get in touch with our printer support experts. Call, email, or fill out our contact form for fast assistance.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Contact Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto px-4">
            We&apos;re here to help with all your printer support needs
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a
                        href={`tel:${siteConfig.business.phone}`}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {siteConfig.business.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a
                        href={`mailto:${siteConfig.business.email}`}
                        className="text-blue-600 hover:text-blue-700 break-all"
                      >
                        {siteConfig.business.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Service Area</p>
                      <p className="text-gray-600">Nationwide USA Coverage</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Business Hours</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600 font-medium">Mon - Fri</span>
                    <span className="font-semibold text-gray-900">
                      {siteConfig.business.hours.monday}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600 font-medium">Saturday</span>
                    <span className="font-semibold text-gray-900">
                      {siteConfig.business.hours.saturday}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600 font-medium">Sunday</span>
                    <span className="font-semibold text-gray-900">
                      {siteConfig.business.hours.sunday}
                    </span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm font-semibold text-green-600">
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>Fast response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>Free diagnostic and quote</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>Certified expert technicians</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>All major brands supported</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-4">
            Other Ways to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all border-2 border-gray-100 hover:border-green-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Now</h3>
              <p className="text-gray-600 mb-3">Speak with an expert immediately</p>
              <p className="text-blue-600 font-semibold">{siteConfig.business.phone}</p>
            </a>

            <a
              href={`sms:${siteConfig.business.smsNumber}`}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all border-2 border-gray-100 hover:border-blue-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Send SMS</h3>
              <p className="text-gray-600 mb-3">Quick text message support</p>
              <p className="text-blue-600 font-semibold">Text Us</p>
            </a>

            <a
              href={`mailto:${siteConfig.business.email}`}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all border-2 border-gray-100 hover:border-purple-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">Send us a detailed message</p>
              <p className="text-blue-600 font-semibold text-sm break-all">
                {siteConfig.business.email}
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
