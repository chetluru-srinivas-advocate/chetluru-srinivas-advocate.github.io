
import { Metadata } from 'next'
import { Star, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Client Testimonials - Chetluru Srinivas & Associates',
  description: 'Read what our clients say about our professional legal services and successful case outcomes.',
}

const testimonials = [
  {
    quote: "Chetluru Srinivas handled my property dispute with exceptional professionalism. Their thorough understanding of civil law and strategic approach led to a favorable settlement that exceeded my expectations.",
    client: "Rajesh Kumar",
    case: "Property Dispute Client",
    icon: "🏠"
  },
  {
    quote: "When our company faced a complex commercial dispute, Chetluru Srinivas & Associates guided us through the arbitration process with exceptional skill. Their strategic approach and thorough preparation resulted in a favorable award.",
    client: "Vikram Malhotra",
    case: "CEO, Construction Company",
    icon: "🏢"
  },
  {
    quote: "During my difficult divorce, the team at Chetluru Srinivas & Associates provided not only excellent legal representation but also emotional support. They helped me secure a fair custody arrangement that prioritized my children's well-being.",
    client: "Meena Patel",
    case: "Family Law Client",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    quote: "The team at Chetluru Srinivas helped our company draft watertight promissory notes for a major business transaction. Their attention to detail and understanding of financial instruments gave us complete confidence in the process.",
    client: "Lakshmi Rao",
    case: "CFO, Tech Solutions Ltd.",
    icon: "💼"
  }
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Our Clients Say
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the experiences of clients who have trusted us with their legal matters and achieved successful outcomes
            </p>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="bg-white py-12 border-b">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="fade-in-up">
              <div className="text-3xl font-bold text-blue-900 mb-2">90%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="fade-in-up">
              <div className="text-3xl font-bold text-blue-900 mb-2">35+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="fade-in-up">
              <div className="text-3xl font-bold text-blue-900 mb-2">1000+</div>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8 fade-in-up">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-blue-600 mb-3" />
                      <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <div className="border-l border-gray-300 pl-4">
                        <p className="font-semibold text-blue-900">
                          {testimonial.client}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.case}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Ready to Share Your Success Story?
              </h3>
              <p className="text-gray-700 mb-6">
                Join our satisfied clients and experience the difference that professional legal representation can make.
              </p>
              <a 
                href="/contact" 
                className="btn-primary inline-flex items-center gap-2"
              >
                Start Your Legal Journey
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
