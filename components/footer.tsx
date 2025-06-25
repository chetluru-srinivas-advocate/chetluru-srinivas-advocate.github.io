
import Link from 'next/link'
import { MapPin, Phone, Mail, Scale } from 'lucide-react'

export function Footer() {
  const practiceAreas = [
    'Civil Law',
    'Criminal Cases',
    'Corporate Law',
    'Matrimonial Disputes',
    'Banking & Finance',
    'Arbitration',
    'Consumer Protection',
    'Intellectual Property',
    'Negotiable Instruments',
    'Legal Documentation'
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Practice Areas', href: '/practice-areas' },
    { name: 'Our Team', href: '/team' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact Us', href: '/contact' }
  ]

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">
                  Chetluru Srinivas
                </div>
                <div className="text-sm text-blue-200 leading-tight">
                  & Associates
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-100">
                  #6-3-248/K, Flat No:G2, Abhishek Residency<br />
                  Banjara Hills, Road No. 1<br />
                  Hyderabad, Telangana, India, 500034
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <a 
                  href="tel:+919848022338" 
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  +91 98480 22338
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-300" />
                <a 
                  href="mailto:chetluru2025@gmail.com" 
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  chetluru2025@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-blue-100">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} Chetluru Srinivas & Associates. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <span className="text-blue-200">
                35+ Years of Excellence
              </span>
              <span className="text-blue-200">
                90% Success Rate
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
