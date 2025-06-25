
import Link from 'next/link'
import { Phone, Mail, Calendar } from 'lucide-react'

export function ContactBanner() {
  return (
    <section className="bg-blue-100 py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Ready to Discuss Your Legal Matter?
          </h2>
          <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how our 35+ years of experience can help you achieve the best possible outcome
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              href="/contact" 
              className="btn-primary bg-blue-900 text-white hover:bg-blue-800 inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Free Consultation
            </Link>
            
            <div className="flex items-center gap-6 text-blue-700">
              <a 
                href="tel:+919848022338" 
                className="flex items-center gap-2 hover:text-blue-900 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 98480 22338
              </a>
              
              <a 
                href="mailto:chetluru2025@gmail.com" 
                className="flex items-center gap-2 hover:text-blue-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-blue-900 mb-1">35+</div>
              <p className="text-sm text-blue-700">Years Experience</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-900 mb-1">90%</div>
              <p className="text-sm text-blue-700">Success Rate</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-900 mb-1">24/7</div>
              <p className="text-sm text-blue-700">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
