import Link from 'next/link';
import { Scale, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Scale className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  <span className="hidden sm:inline">Chetluru Srinivas & Associates</span>
                  <span className="sm:hidden">CS & Associates</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Providing expert legal counsel with over 35 years of experience. 
              We are committed to delivering comprehensive legal solutions with 
              integrity and professional excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm"
              >
                Home
              </Link>
              <Link
                href="/#practice-areas"
                className="block text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm"
              >
                Practice Areas
              </Link>
              <Link
                href="/#team"
                className="block text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm"
              >
                Our Team
              </Link>
              <Link
                href="/#contact"
                className="block text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-xs sm:text-sm">
                  #6-3-248/K, Flat No:G2, Abhishek Residency,<br />
                  Banjara Hills, Road No. 1<br />
                  Hyderabad, Telangana 500034, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <a
                  href="tel:+919440222300"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                >
                  +91 9440222300
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <a
                  href="mailto:chetluru2025@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm break-all"
                >
                  chetluru2025@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">Office Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <div className="text-xs sm:text-sm">
                  <p className="text-gray-300">Monday - Saturday</p>
                  <p className="text-gray-400">10:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <div className="text-xs sm:text-sm">
                  <p className="text-gray-300">Sunday</p>
                  <p className="text-gray-400">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Chetluru Srinivas & Associates. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
