
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Scale, Menu, X } from 'lucide-react'
import { firmData } from '@/lib/law-firm-data'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-primary rounded-lg group-hover:bg-primary/90 transition-colors">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-serif font-bold text-lg lg:text-xl text-primary">
                {firmData.firm_profile.name}
              </div>
              <div className="text-xs text-muted-foreground">
                Legal Excellence Since {firmData.firm_profile.established_year}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Our Team
            </button>
            <button 
              onClick={() => scrollToSection('practice-areas')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Practice Areas
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Our Team
              </button>
              <button 
                onClick={() => scrollToSection('practice-areas')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Practice Areas
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
