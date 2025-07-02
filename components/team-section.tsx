'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, User, Award } from 'lucide-react';

interface Advocate {
  name: string;
  title: string;
  isFounder: boolean;
  experienceYears?: string | null;
  industryExperienceYears?: string | null;
  education: string[];
  specializations: string[];
  email?: string | null;
  registration?: string | null;
  bio?: string | null;
}

interface TeamSectionProps {
  advocates: Advocate[];
}

export default function TeamSection({ advocates }: TeamSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('team');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const formatSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const getExperienceYears = (advocate: Advocate) => {
    return advocate.experienceYears || advocate.industryExperienceYears || 'Experienced';
  };

  const getAdvocateImage = (advocateName: string) => {
    const name = advocateName.toLowerCase();
    
    // Map advocate names to their image files
    if (name.includes('chetluru') || name.includes('srinivas')) {
      return '/images/chetluru_srinivas_optimized.jpg';
    }
    if (name.includes('vijay')) {
      return '/images/Vijay_1.jpg';
    }
    if (name.includes('kiran')) {
      return '/images/Kiran_3.jpg';
    }
    if (name.includes('vimalanand') || name.includes('vimal')) {
      return '/images/vimalanand_optimized.jpg';
    }
    if (name.includes('yajur')) {
      return '/images/yajur_3.jpg';
    }
    if (name.includes('kushal')) {
      return '/images/Kushal_2.jpg';
    }
    
    // Default fallback image
    return '/images/chetluru_srinivas_optimized.jpg';
  };

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-on-scroll in-view' : 'animate-on-scroll'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Our Legal Team</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Meet our experienced legal professionals who bring decades of combined expertise 
            to serve your legal needs with dedication and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advocates?.map((advocate, index) => (
            <Link
              key={index}
              href={`/team/${formatSlug(advocate.name)}/`}
              className={`team-card group ${
                isVisible ? 'animate-on-scroll in-view' : 'animate-on-scroll'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-blue-50 to-blue-100">
                <Image
                  src={getAdvocateImage(advocate.name)}
                  alt={`${advocate.name} - ${advocate.title}`}
                  fill
                  className="object-contain"
                />
                {advocate.isFounder && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    Founder
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-medium">{getExperienceYears(advocate)} Experience</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {advocate.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3 text-sm sm:text-base">{advocate.title}</p>
                
                {advocate.specializations && advocate.specializations.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {advocate.specializations.slice(0, 2).map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                        >
                          {spec}
                        </span>
                      ))}
                      {advocate.specializations.length > 2 && (
                        <span className="text-blue-600 text-xs font-medium">
                          +{advocate.specializations.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                {advocate.education && advocate.education.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Education:</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {advocate.education.join(', ')}
                    </p>
                  </div>
                )}

                
                <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-800 transition-colors text-sm sm:text-base">
                  View Profile →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
