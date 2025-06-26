
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

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className={`text-center mb-16 ${isVisible ? 'animate-on-scroll in-view' : 'animate-on-scroll'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Legal Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced legal professionals who bring decades of combined expertise 
            to serve your legal needs with dedication and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advocates?.map((advocate, index) => (
            <Link
              key={index}
              href={`/team/${formatSlug(advocate.name)}/`}
              className={`team-card group ${
                isVisible ? 'animate-on-scroll in-view' : 'animate-on-scroll'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-50 to-blue-100">
                <Image
                  src="https://i.pinimg.com/originals/45/23/50/452350e9d256a82d0d6f76d2b42fb5ae.jpg"
                  alt={`${advocate.name} - ${advocate.title}`}
                  fill
                  className="object-cover"
                />
                {advocate.isFounder && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Founder
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">{getExperienceYears(advocate)} Experience</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {advocate.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{advocate.title}</p>
                
                {advocate.specializations && advocate.specializations.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
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
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Education:</h4>
                    <p className="text-sm text-gray-600">
                      {advocate.education.join(', ')}
                    </p>
                  </div>
                )}
                
                {advocate.email && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="truncate">{advocate.email}</span>
                  </div>
                )}
                
                {advocate.registration && (
                  <div className="mt-2 text-sm text-gray-600">
                    <strong>Registration:</strong> {advocate.registration}
                  </div>
                )}
                
                <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
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
