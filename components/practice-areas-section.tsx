
'use client'

import { useEffect, useRef } from 'react'
import { 
  Scale, 
  Shield, 
  Building, 
  Heart, 
  CreditCard, 
  Handshake, 
  UserCheck, 
  Copyright, 
  FileText, 
  PenTool 
} from 'lucide-react'
import { firmData } from '@/lib/law-firm-data'

const practiceAreaIcons = {
  'Civil Law': Scale,
  'Criminal Cases': Shield,
  'Corporate Law': Building,
  'Matrimonial Disputes': Heart,
  'Banking and Finance': CreditCard,
  'Arbitration': Handshake,
  'Consumer Protection Cases': UserCheck,
  'Intellectual Property': Copyright,
  'Negotiation Instruments': FileText,
  'Drafting and Documentation': PenTool,
}

export default function PracticeAreasSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.practice-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in')
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="practice-areas" 
      className="section-padding bg-muted/50"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">
            Our Practice Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive legal services across multiple areas of law, 
            ensuring expert representation for all your legal needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {firmData.practice_areas.map((area, index) => {
            const IconComponent = practiceAreaIcons[area.name as keyof typeof practiceAreaIcons] || Scale
            
            return (
              <div 
                key={index}
                className="practice-card opacity-0 bg-white p-8 rounded-xl shadow-lg border border-border card-hover group cursor-pointer"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {area.name}
                  </h3>
                </div>

                {area.details && area.details.length > 0 && (
                  <div className="space-y-2">
                    {area.details.slice(0, 4).map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                    {area.details.length > 4 && (
                      <div className="text-sm text-secondary font-medium mt-3">
                        +{area.details.length - 4} more services
                      </div>
                    )}
                  </div>
                )}

                {(!area.details || area.details.length === 0) && (
                  <p className="text-sm text-muted-foreground">
                    Expert legal representation and consultation in {area.name.toLowerCase()}.
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* Key Highlights */}
        <div className="mt-16 bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-border">
          <h3 className="text-2xl font-serif font-bold text-primary mb-8 text-center">
            Why Choose Our Legal Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {firmData.firm_profile.key_highlights.slice(0, 6).map((highlight, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="h-2 w-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
