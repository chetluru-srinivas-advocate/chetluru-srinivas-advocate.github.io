'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactInfo {
  address: {
    street1: string;
    street2: string;
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
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Contact Us</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to discuss your legal needs? Get in touch with our experienced team 
            for a consultation tailored to your specific requirements.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Office Address</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {contactInfo?.address?.street1}<br />
                    {contactInfo?.address?.street2}<br />
                    {contactInfo?.address?.city}, {contactInfo?.address?.state}, {contactInfo?.address?.postalCode}<br />
                    {contactInfo?.address?.country}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Phone Number</h4>
                  <a
                    href={`tel:${contactInfo?.phone}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors text-sm sm:text-base"
                  >
                    {contactInfo?.phone}
                  </a>
                  {contactInfo?.emergencyPhone && contactInfo.emergencyPhone !== contactInfo.phone && (
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">
                      Emergency: {contactInfo.emergencyPhone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 sm:space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Email Address</h4>
                  <a
                    href={`mailto:${contactInfo?.email}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors text-sm sm:text-base break-all"
                  >
                    {contactInfo?.email}
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Office Hours</h4>
                  <div className="space-y-1">
                    {contactInfo?.officeHours?.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-gray-600 text-sm sm:text-base">
                        <span className="font-medium">{schedule.days}:</span>
                        <span>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map - Google Maps Embed */}
          <div className="mt-8 sm:mt-12">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7614.095854283244!2d78.44606468320032!3d17.409487459594366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9738c73e379f%3A0xda17483d8b6b4e3e!2sChetluru%20Sreenivas%20%26%20Associates!5e0!3m2!1sen!2sus!4v1750911998236!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
