
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Calendar, GraduationCap, Award, Users, ArrowLeft } from 'lucide-react'
import { ContactModal } from '@/components/contact-modal'

interface Attorney {
  name: string
  title: string
  experience: string
  education: string
  specialization: string
  slug: string
  bio: string
  expertise: string[]
}

interface AttorneyProfileProps {
  attorney: Attorney
}

export function AttorneyProfile({ attorney }: AttorneyProfileProps) {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/team" className="hover:text-white transition-colors">Our Team</Link>
            <span>/</span>
            <span className="text-white">{attorney.name}</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/team"
              className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {attorney.name}
              </h1>
              <p className="text-xl text-blue-100 mt-2">
                {attorney.title}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-8">
                {/* Profile Image Placeholder */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-16 h-16 text-blue-400" />
                </div>
                
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  {attorney.name}
                </h2>
                <p className="text-blue-600 font-semibold mb-4">
                  {attorney.title}
                </p>
                
                <div className="space-y-3 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{attorney.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>{attorney.education}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>{attorney.specialization}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowContactModal(true)}
                  className="btn-primary w-full flex items-center gap-2 justify-center"
                >
                  <Mail className="w-4 h-4" />
                  Contact {attorney.name.split(' ')[0]}
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Biography */}
                <div className="card p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Biography</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {attorney.bio}
                  </p>
                </div>

                {/* Areas of Expertise */}
                <div className="card p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Areas of Expertise</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {attorney.expertise.map((area, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                        <Award className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="card p-6 bg-blue-50">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    Need Legal Assistance?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Contact {attorney.name.split(' ')[0]} directly for personalized legal consultation and expert guidance on your specific case.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setShowContactModal(true)}
                      className="btn-primary flex items-center gap-2 justify-center"
                    >
                      <Mail className="w-4 h-4" />
                      Send Message
                    </button>
                    <Link href="/contact" className="btn-secondary text-center">
                      Schedule Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        attorney={attorney.name}
      />
    </div>
  )
}
