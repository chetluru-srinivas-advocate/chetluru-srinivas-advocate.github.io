'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Award, Users, Scale, Trophy } from 'lucide-react';

interface Statistic {
  label: string;
  value: string;
}

interface HeroSectionProps {
  firmName: string;
  tagline: string;
  description: string;
  statistics: Statistic[];
}

export default function HeroSection({ firmName, tagline, description, statistics }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getStatIcon = (label: string) => {
    if (label.includes('Experience') || label.includes('Years')) {
      return <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />;
    }
    if (label.includes('Clients') || label.includes('Happy')) {
      return <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />;
    }
    if (label.includes('Rate') || label.includes('Success')) {
      return <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />;
    }
    return <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800"
      itemScope
      itemType="https://schema.org/LegalService"
    >
      {/* Header spacer to prevent overlay */}
      <div className="h-20 sm:h-24 lg:h-28"></div>
      <div className="container-max pt-4 sm:pt-8 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`text-white space-y-6 sm:space-y-8 ${isVisible ? 'animate-on-scroll in-view' : 'animate-on-scroll'}`}>
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white" itemProp="name">
                {tagline}
              </h1>
              <p className="text-base sm:text-lg text-blue-50 leading-relaxed max-w-2xl" itemProp="description">
                {description}
              </p>
              {/* Local SEO Keywords */}
              <div className="text-xs sm:text-sm text-blue-200 space-y-1">
                <p><strong>📍 Location:</strong> Banjara Hills, Hyderabad, Telangana</p>
                <p><strong>⚖️ Specializations:</strong> Corporate Law, Civil Litigation, Criminal Cases, IP Law</p>
                <p><strong>👨‍⚖️ Founder:</strong> Chetluru Srinivas - Senior Advocate with 34+ Years Experience</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center space-x-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                aria-label="Schedule a consultation with Chetluru Srinivas & Associates"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => {
                  const practiceSection = document.getElementById('practice-areas');
                  if (practiceSection) {
                    practiceSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 text-base sm:text-lg"
                aria-label="View our legal services and practice areas"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className={`${isVisible ? 'animate-on-scroll in-view' : 'animate-on-scroll'} delay-300`}>
            <div className="relative">
              <div className="relative w-full h-64 sm:h-80 lg:h-[500px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                <Image
                  src="/images/chetlu.jpg"
                  alt="Chetluru Srinivas - Founder & Senior Advocate in Hyderabad - Expert Corporate and Civil Litigation Lawyer"
                  fill
                  className="object-cover"
                  priority
                  itemProp="image"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl font-semibold" itemProp="founder" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Chetluru Srinivas</span>
                  </h3>
                  <p className="text-blue-100 text-sm sm:text-base" itemProp="jobTitle">Founder & Senior Advocate</p>
                  <p className="text-blue-200 text-xs sm:text-sm">34+ Years of Legal Excellence in Hyderabad</p>
                  <p className="text-blue-200 text-xs mt-1">📍 Banjara Hills, Hyderabad, Telangana</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className={`mt-12 sm:mt-16 lg:mt-20 ${isVisible ? 'animate-on-scroll in-view' : 'animate-on-scroll'} delay-600`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
            {statistics?.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                <div className="flex justify-center mb-2 sm:mb-3">
                  {getStatIcon(stat.label)}
                </div>
                <div className="stats-counter text-white mb-1 sm:mb-2 text-xl sm:text-2xl lg:text-3xl">{stat.value}</div>
                <p className="text-blue-100 text-xs sm:text-sm font-medium leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
