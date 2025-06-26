
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, Award, Users, Calendar, Scale } from 'lucide-react'
import { firmData } from '@/lib/law-firm-data'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
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

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-white to-accent/20"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium">
                <Award className="h-4 w-4" />
                Trusted Since {firmData.firm_profile.established_year}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary leading-tight">
                Expert Legal <span className="text-gradient">Counsel</span> You Can Trust
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                {firmData.firm_profile.tagline}
              </p>
              
              <p className="text-foreground leading-relaxed">
                {firmData.firm_profile.about_summary}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">35+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">90%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/30 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-sm text-muted-foreground">Expert Lawyers</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="btn-primary text-center justify-center group"
              >
                Schedule a Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('practice-areas')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 text-center"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl">
              <Image
                src="https://i.pinimg.com/originals/e6/ac/c0/e6acc0778b414a50b17dcc42e935f55d.jpg"
                alt="Chetluru Srinivas - Founder & Senior Advocate"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-serif font-bold text-lg text-primary">Chetluru Srinivas</div>
                  <div className="text-sm text-muted-foreground">Founder & Senior Advocate</div>
                  <div className="text-xs text-secondary font-medium">35+ Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
