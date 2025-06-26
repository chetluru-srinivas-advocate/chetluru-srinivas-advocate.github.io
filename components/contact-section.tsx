'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center">
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
