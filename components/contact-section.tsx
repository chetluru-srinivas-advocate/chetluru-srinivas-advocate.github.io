
'use client';

import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface ContactInfo {
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  phone: string;
  emergencyPhone?: string;
  email: string;
  officeHours: Array<{
    days: string;
    hours: string;
  }>;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

export default function ContactSection({ contactInfo }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your legal needs? Get in touch with our experienced team 
            for a consultation tailored to your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you for your message! We'll get back to you within 24 hours.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                Sorry, there was an error sending your message. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Please describe your legal matter or questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                Contact us today to schedule a consultation. We're here to help you navigate 
                your legal challenges with expertise and dedication.
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Office Address</h4>
                <p className="text-gray-600 leading-relaxed">
                  {contactInfo?.address?.street}<br />
                  {contactInfo?.address?.city}, {contactInfo?.address?.state} {contactInfo?.address?.postalCode}<br />
                  {contactInfo?.address?.country}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phone Number</h4>
                <a
                  href={`tel:${contactInfo?.phone}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {contactInfo?.phone}
                </a>
                {contactInfo?.emergencyPhone && contactInfo.emergencyPhone !== contactInfo.phone && (
                  <p className="text-gray-600 text-sm mt-1">
                    Emergency: {contactInfo.emergencyPhone}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email Address</h4>
                <a
                  href={`mailto:${contactInfo?.email}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {contactInfo?.email}
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                <div className="space-y-1">
                  {contactInfo?.officeHours?.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-gray-600">
                      <span className="font-medium">{schedule.days}:</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Interactive Map Coming Soon</p>
                <p className="text-sm">Banjara Hills, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
