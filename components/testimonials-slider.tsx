
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import Link from 'next/link'

const testimonials = [
  {
    quote: "Chetluru Srinivas handled my property dispute with exceptional professionalism. Their thorough understanding of civil law and strategic approach led to a favorable settlement that exceeded my expectations.",
    client: "Rajesh Kumar",
    case: "Property Dispute Client",
    rating: 5,
    icon: "🏠"
  },
  {
    quote: "When our company faced a complex commercial dispute, Chetluru Srinivas & Associates guided us through the arbitration process with exceptional skill. Their strategic approach and thorough preparation resulted in a favorable award.",
    client: "Vikram Malhotra",
    case: "CEO, Construction Company",
    rating: 5,
    icon: "🏢"
  },
  {
    quote: "During my difficult divorce, the team at Chetluru Srinivas & Associates provided not only excellent legal representation but also emotional support. They helped me secure a fair custody arrangement that prioritized my children's well-being.",
    client: "Meena Patel",
    case: "Family Law Client",
    rating: 5,
    icon: "👨‍👩‍👧‍👦"
  }
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-blue-900">
            Client Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our expertise and dedication have helped clients achieve favorable outcomes across various legal matters
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="card p-6 md:p-8"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                    {testimonials[currentIndex].icon}
                  </div>
                  
                  <Quote className="w-6 h-6 text-blue-600 mx-auto mb-4" />
                  
                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-4 italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-900">
                      {testimonials[currentIndex].client}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentIndex].case}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/testimonials" className="btn-secondary">
            Read All Testimonials
          </Link>
        </div>
      </div>
    </section>
  )
}
