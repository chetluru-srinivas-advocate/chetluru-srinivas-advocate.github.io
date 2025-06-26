
'use client'

import Link from 'next/link'
import { Scale, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { firmData } from '@/lib/law-firm-data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Firm Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Scale className="h-6 w-6" />
              </div>
              <div>
                <div className="font-serif font-bold text-lg">
                  {firmData.firm_profile.name}
                </div>
                <div className="text-white/80 text-sm">
                  Since {firmData.firm_profile.established_year}
                </div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              {firmData.firm_profile.tagline}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{firmData.contact_info.address.area}, {firmData.contact_info.address.city}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:+91${firmData.contact_info.phone}`} className="hover:text-white transition-colors">
                  +91 {firmData.contact_info.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${firmData.contact_info.email}`} className="hover:text-white transition-colors">
                  {firmData.contact_info.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-lg">Quick Links</h3>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-white/80 hover:text-white transition-colors text-sm"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block text-white/80 hover:text-white transition-colors text-sm"
              >
                Our Team
              </button>
              <button 
                onClick={() => scrollToSection('practice-areas')}
                className="block text-white/80 hover:text-white transition-colors text-sm"
              >
                Practice Areas
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-white/80 hover:text-white transition-colors text-sm"
              >
                Contact Us
              </button>
            </nav>
          </div>

          {/* Practice Areas */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-lg">Practice Areas</h3>
            <div className="space-y-2">
              {firmData.practice_areas.slice(0, 6).map((area, index) => (
                <div key={index} className="text-sm text-white/80">
                  {area.name}
                </div>
              ))}
              {firmData.practice_areas.length > 6 && (
                <div className="text-sm text-white/60">
                  +{firmData.practice_areas.length - 6} more areas
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/80">
              © {currentYear} {firmData.firm_profile.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span>Built for legal excellence</span>
              <div className="h-4 w-px bg-white/20"></div>
              <a 
                href="https://chetluru-srinivas-advocate.github.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                Visit Website
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
