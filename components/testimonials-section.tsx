
'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { firmData } from '@/lib/law-firm-data'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  
  const testimonials = firmData.testimonials

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-muted/50 via-white to-accent/20"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience with our legal services 
            and the successful outcomes we've achieved together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl border border-border p-8 lg:p-12 overflow-hidden">
            {/* Background Quote Icon */}
            <div className="absolute top-8 right-8 opacity-5">
              <Quote className="h-24 w-24 text-primary" />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-8 left-8 flex gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
              >
                <ChevronLeft className="h-5 w-5 text-primary group-hover:text-secondary" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
              >
                <ChevronRight className="h-5 w-5 text-primary group-hover:text-secondary" />
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 pt-8">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg lg:text-xl text-center text-foreground leading-relaxed mb-8 font-serif italic">
                "{testimonials[currentIndex]?.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                <div className="font-semibold text-primary text-lg mb-1">
                  {testimonials[currentIndex]?.client_name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonials[currentIndex]?.client_description}
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Success Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <div className="text-muted-foreground">Success Rate</div>
              <div className="text-sm text-muted-foreground mt-1">in filed cases</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-border">
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
              <div className="text-sm text-muted-foreground mt-1">served nationwide</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">35+</div>
              <div className="text-muted-foreground">Years Experience</div>
              <div className="text-sm text-muted-foreground mt-1">in legal practice</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
