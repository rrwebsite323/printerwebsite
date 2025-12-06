'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactFormData } from '@/lib/types';

interface ContactFormProps {
  showServiceSelect?: boolean;
  submitButtonText?: string;
  compactMessage?: boolean;
}

export default function ContactForm({
  showServiceSelect = true,
  submitButtonText = 'Send Message',
  compactMessage = false,
}: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      // Simulate API call - replace with actual email service
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', data);
      
      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or call us directly.');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8 text-center">
        <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-blue-600 font-semibold hover:text-blue-700 active:text-blue-800 text-sm sm:text-base"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6" id="contact-form">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
          Name *
        </label>
        <input
          id="name"
          type="text"
          {...register('name', {
            required: 'Please enter your name',
            minLength: { value: 2, message: 'Name must be at least 2 characters' },
            maxLength: { value: 50, message: 'Name must be less than 50 characters' },
          })}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
            <AlertCircle className="w-4 h-4" />
            <span>{errors.name.message}</span>
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Please enter your email address',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email address',
            },
          })}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
            <AlertCircle className="w-4 h-4" />
            <span>{errors.email.message}</span>
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
          Phone *
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone', {
            required: 'Please enter your phone number',
            pattern: {
              value: /^[\d\s\-\(\)]+$/,
              message: 'Please enter a valid US phone number',
            },
          })}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
            <AlertCircle className="w-4 h-4" />
            <span>{errors.phone.message}</span>
          </p>
        )}
      </div>

      {/* Service Select */}
      {showServiceSelect && (
        <div>
          <label htmlFor="service" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
            Service Needed
          </label>
          <select
            id="service"
            {...register('service')}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          >
            <option value="">Select a service...</option>
            <option value="printer-repair">Printer Repair</option>
            <option value="maintenance">Maintenance & Support</option>
            <option value="installation">Installation & Setup</option>
            <option value="network-solutions">Network Printer Solutions</option>
            <option value="troubleshooting">Troubleshooting</option>
            <option value="emergency">Emergency Support</option>
          </select>
        </div>
      )}

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={compactMessage ? 3 : 5}
          {...register('message', {
            required: 'Please enter a message',
            minLength: { value: 10, message: 'Message must be at least 10 characters' },
            maxLength: { value: 500, message: 'Message must be less than 500 characters' },
          })}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Tell us about your printer issue..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
            <AlertCircle className="w-4 h-4" />
            <span>{errors.message.message}</span>
          </p>
        )}
      </div>

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-red-900">Error</p>
            <p className="text-sm text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitStatus === 'submitting'}
        className="w-full bg-blue-600 text-white px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 active:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {submitStatus === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <span>{submitButtonText}</span>
        )}
      </button>

    </form>
  );
}
