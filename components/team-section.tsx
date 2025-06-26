
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Mail, Award } from 'lucide-react'
import { firmData } from '@/lib/law-firm-data'

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.team-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in')
              }, index * 150)
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
      id="team" 
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">
            Our Legal Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our experienced team of legal professionals, each bringing unique expertise 
            and dedication to serve your legal needs with excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {firmData.lawyers.map((lawyer, index) => (
            <Link 
              key={index} 
              href={`/team/${lawyer.slug}`}
              className="team-card opacity-0 block group"
            >
              <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden card-hover">
                {/* Photo */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/10">
                  <Image
                    src="https://i.pinimg.com/originals/67/ed/75/67ed757cd3b2c72e95e4e180ff9c334a.jpg"
                    alt={`${lawyer.name} - ${lawyer.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-serif font-bold text-primary group-hover:text-secondary transition-colors mb-1">
                      {lawyer.name}
                    </h3>
                    <p className="text-secondary font-medium text-sm mb-2">
                      {lawyer.title}
                    </p>
                    {lawyer.registration && (
                      <p className="text-xs text-muted-foreground mb-2">
                        Registration: {lawyer.registration}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4 text-primary" />
                      {lawyer.experience}
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Education:</strong> {lawyer.education}
                    </div>

                    {lawyer.specializations && lawyer.specializations.length > 0 && (
                      <div className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Specializations:</strong>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {lawyer.specializations.slice(0, 2).map((spec, specIndex) => (
                            <span 
                              key={specIndex}
                              className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                            >
                              {spec}
                            </span>
                          ))}
                          {lawyer.specializations.length > 2 && (
                            <span className="text-xs text-secondary">
                              +{lawyer.specializations.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Contact */}
                  {lawyer.contact?.email && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="truncate">{lawyer.contact.email}</span>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary group-hover:text-secondary transition-colors">
                    <span className="text-sm font-medium">View Profile</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary p-8 lg:p-12 rounded-2xl text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold mb-2">
              Collective Excellence
            </h3>
            <p className="text-white/90">
              Our team's combined expertise and dedication
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">90+</div>
              <div className="text-white/90">Combined Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">10+</div>
              <div className="text-white/90">Areas of Legal Expertise</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">Successful Cases</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
