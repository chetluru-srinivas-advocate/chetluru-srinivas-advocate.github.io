
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Scale, 
  Gavel, 
  Building, 
  Heart, 
  CreditCard, 
  Users, 
  Shield, 
  Lightbulb, 
  FileText, 
  DollarSign,
  ChevronRight 
} from 'lucide-react';

interface PracticeArea {
  name: string;
  description: string | null;
  services: string[];
}

interface PracticeAreasSectionProps {
  practiceAreas: PracticeArea[];
}

export default function PracticeAreasSection({ practiceAreas }: PracticeAreasSectionProps) {
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

    const section = document.getElementById('practice-areas');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const getPracticeAreaIcon = (name: string) => {
    const iconProps = { className: "w-8 h-8 text-blue-600" };
    
    switch (name.toLowerCase()) {
      case 'civil law':
        return <Scale {...iconProps} />;
      case 'criminal cases':
        return <Gavel {...iconProps} />;
      case 'corporate law':
        return <Building {...iconProps} />;
      case 'matrimonial disputes':
        return <Heart {...iconProps} />;
      case 'banking and finance':
        return <CreditCard {...iconProps} />;
      case 'arbitration':
        return <Users {...iconProps} />;
      case 'consumer protection cases':
        return <Shield {...iconProps} />;
      case 'intellectual property':
        return <Lightbulb {...iconProps} />;
      case 'negotiable instruments':
        return <DollarSign {...iconProps} />;
      case 'drafting and documentation':
        return <FileText {...iconProps} />;
      default:
        return <Scale {...iconProps} />;
    }
  };

  const formatSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  return (
    <section id="practice-areas" className="section-padding bg-white">
      <div className="container-max">
        <div className={`text-center mb-16 ${isVisible ? 'animate-on-scroll in-view' : 'animate-on-scroll'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Practice Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive legal services across diverse areas of law, 
            delivering expert counsel with proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas?.map((area, index) => (
            <div
              key={index}
              className={`card-hover bg-white rounded-xl shadow-lg border border-gray-100 p-8 group ${
                isVisible ? 'animate-on-scroll in-view' : 'animate-on-scroll'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="practice-area-icon mb-6">
                {getPracticeAreaIcon(area.name)}
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                {area.name}
              </h3>
              
              <p className="text-gray-600 mb-6 line-clamp-3">
                {area.description || 'Expert legal services and representation in this practice area.'}
              </p>
              
              {area.services && area.services.length > 0 && (
                <div className="mb-6">
                  <ul className="space-y-2">
                    {area.services.slice(0, 3).map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                    {area.services.length > 3 && (
                      <li className="text-sm text-blue-600 font-medium">
                        +{area.services.length - 3} more services
                      </li>
                    )}
                  </ul>
                </div>
              )}
              
              <Link
                href={`/practice-areas/${formatSlug(area.name)}/`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
              >
                Learn More
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
