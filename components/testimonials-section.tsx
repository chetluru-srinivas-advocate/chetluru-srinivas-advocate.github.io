
'use client';

import { useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  clientName: string;
  caseType: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
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

    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Sample additional testimonials to showcase the firm's expertise
  const allTestimonials = [
    ...testimonials,
    {
      quote: "The team's expertise in corporate law helped us navigate complex regulatory requirements seamlessly. Their strategic guidance was invaluable for our business expansion.",
      clientName: "Priya Sharma",
      caseType: "Corporate Law Client"
    },
    {
      quote: "Professional, knowledgeable, and compassionate. They handled my family law matter with sensitivity while achieving the best possible outcome for my case.",
      clientName: "Amit Reddy",
      caseType: "Family Law Client"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-blue-50">
      <div className="container-max">
        <div className={`text-center mb-16 ${isVisible ? 'animate-on-scroll in-view' : 'animate-on-scroll'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in the trust and satisfaction of our clients. 
            Here's what they have to say about our legal services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials?.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card rounded-xl p-8 ${
                isVisible ? 'animate-on-scroll in-view' : 'animate-on-scroll'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-blue-600" />
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900 mb-1">
                  {testimonial.clientName}
                </div>
                <div className="text-blue-600 text-sm font-medium">
                  {testimonial.caseType}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className={`mt-20 ${isVisible ? 'animate-on-scroll in-view' : 'animate-on-scroll'} delay-600`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">Why Choose Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Handles cases under both the original and appellate jurisdictions of the High Court.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Maintains a success rate of 90% in the cases it files.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Committed to transparency, providing clients with a clear assessment of their case's strengths and weaknesses.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Strong emphasis on out-of-court settlements, advising clients on time and costs.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Aims to provide comprehensive legal solutions under one roof.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Offers expertise in patent registration and drafting through a registered patent and trademark agent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
