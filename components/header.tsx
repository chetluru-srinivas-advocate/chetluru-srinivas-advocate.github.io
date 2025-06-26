
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Scale, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg backdrop-blur-sm bg-white/95'
            : 'bg-blue-950 shadow-md'
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className={`text-xl font-bold transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Chetluru Srinivas & Associates
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('practice-areas')}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Practice Areas
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Our Team
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white hover:text-blue-200'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div
          className={`mobile-menu ${
            isMobileMenuOpen ? 'open' : ''
          } absolute right-0 top-0 h-full w-80 bg-white shadow-lg`}
        >
          <div className="p-6 pt-20">
            <nav className="space-y-6">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('practice-areas')}
                className="block w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Practice Areas
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="block w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full mt-6"
              >
                Request Consultation
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
