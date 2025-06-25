
'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Mail, Phone, Award, Calendar, GraduationCap, Users } from 'lucide-react'
import { ContactModal } from '@/components/contact-modal'

const attorneys = [
  {
    name: "Chetluru Srinivas",
    title: "Founder & Senior Advocate",
    experience: "35+ years",
    education: "B.A., LL.B",
    specialization: "Corporate Law & Civil Litigation",
    image: "https://i.pinimg.com/736x/39/a1/bc/39a1bcb2033bceefb8cd6ac115417945.jpg",
    bio: "As the Founder and Senior Advocate of the firm, Chetluru Srinivas is a distinguished legal practitioner with over 35 years of extensive experience in the field. Holding B.A. and LL.B degrees, he has established a formidable reputation for his deep expertise and strategic acumen, particularly in the complex domains of Corporate Law and Civil Litigation. His visionary leadership has been the guiding force behind the firm's growth and its unwavering commitment to legal excellence and client success since its establishment in 1991."
  },
  {
    name: "Kiran Kumar Tirunahari",
    title: "Senior Associate",
    experience: "25+ years",
    education: "LL.B",
    specialization: "Civil & Criminal Law",
    image: "https://i.pinimg.com/736x/2e/3c/79/2e3c7911a51c311b02412bc58c0a91a3.jpg",
    bio: "Kiran Kumar Tirunahari serves as a Senior Associate, bringing more than 25 years of seasoned legal experience to the firm. With an LL.B degree, he has developed a specialized practice that skillfully navigates the intersection of Civil and Criminal Law. His comprehensive understanding of both fields allows him to provide versatile and effective representation, handling a wide range of disputes with a strategic and results-oriented approach that greatly benefits the firm's diverse clientele."
  },
  {
    name: "P. Vijaya Saradhi",
    title: "Advocate",
    experience: "23+ years",
    education: "LL.B",
    specialization: "Civil, Criminal & Family Law",
    image: "https://i.pinimg.com/originals/92/7b/81/927b81dd1fe12e251a30a1759ff98f44.png",
    bio: "P. Vijaya Saradhi is a highly respected Advocate with over 23 years of professional experience. An LL.B graduate, his practice is characterized by its breadth, covering Civil, Criminal, and Family Law. This tripartite expertise enables him to handle multifaceted cases that often involve overlapping legal issues. He is known for his diligent representation and his ability to provide empathetic yet strong counsel, particularly in sensitive family law matters."
  },
  {
    name: "Yajur Putta",
    title: "Advocate",
    experience: "6+ years",
    education: "BBA LLB (Hons.), M.B.A",
    specialization: "Corporate & Commercial Law",
    image: "https://i.pinimg.com/736x/24/31/17/243117284a1f1c515f8d92b77b673483.jpg",
    bio: "Yajur Putta is a dynamic Advocate whose modern legal education is reflected in his dual qualifications of a BBA LLB (Hons.) and an M.B.A. With over six years of experience, he brings a unique, business-oriented perspective to the practice of law. This combination of legal and business acumen makes him particularly effective in corporate and commercial matters, where he can provide holistic advice that considers both legal risk and business objectives."
  },
  {
    name: "K.S. Kushal",
    title: "Advocate",
    experience: "4+ years",
    education: "BBA LLB (Hons.), PG Diploma in IPR",
    specialization: "Intellectual Property Rights",
    image: "https://i.pinimg.com/originals/73/31/ff/7331ff7776f461c258528cc062124a24.jpg",
    bio: "K.S. Kushal is an Advocate with four years of experience who holds a BBA LLB (Hons.) degree complemented by a Post Graduate Diploma in Intellectual Property Rights (IPR). This specialized qualification makes him a key asset in the firm's IP practice. His contemporary training and focused expertise in IPR allow him to provide clients with up-to-date and knowledgeable advice on protecting their valuable intellectual assets in a rapidly evolving legal landscape."
  },
  {
    name: "Ch. Vimalanand",
    title: "IP Law Specialist",
    experience: "12+ years",
    education: "B.Tech., LL.B",
    specialization: "Patent & Trademark Law",
    image: "https://i.pinimg.com/originals/e2/a3/15/e2a3153f463542e3221266b7c5dc9910.jpg",
    bio: "Ch. Vimalanand is the firm's IP Law Specialist, bringing a unique and valuable background to the team. With a B.Tech. degree in addition to his LL.B, and over 12 years of industry experience, he possesses a deep, practical understanding of technology and innovation. As a registered Patent Agent and Trademark Attorney, he is exceptionally qualified to handle the technical and legal intricacies of patent and trademark law, from drafting and filing to litigation."
  }
]

export default function TeamPage() {
  const [selectedAttorney, setSelectedAttorney] = useState<typeof attorneys[0] | null>(null)
  const [showContactModal, setShowContactModal] = useState(false)
  const [contactAttorney, setContactAttorney] = useState<string>('')

  const handleContactAttorney = (attorneyName: string) => {
    setContactAttorney(attorneyName)
    setShowContactModal(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Meet Our Attorneys
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A distinguished team of legal professionals with combined experience of over 100 years
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney, index) => (
              <div key={attorney.name} className="card overflow-hidden fade-in-up">
                {/* Profile Image */}
                <div className="relative aspect-[3/4] bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
                    <Users className="w-16 h-16 text-blue-400" />
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">
                    {attorney.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1">
                    {attorney.title}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
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
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedAttorney(attorney)}
                      className="btn-secondary text-sm flex-1"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => handleContactAttorney(attorney.name)}
                      className="btn-primary text-sm px-4"
                    >
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      {selectedAttorney && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">
                    {selectedAttorney.name}
                  </h2>
                  <p className="text-blue-600 font-semibold">
                    {selectedAttorney.title}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedAttorney(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedAttorney.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <GraduationCap className="w-4 h-4" />
                    <span>{selectedAttorney.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Award className="w-4 h-4" />
                    <span>{selectedAttorney.specialization}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-900">Biography</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedAttorney.bio}
                </p>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => handleContactAttorney(selectedAttorney.name)}
                  className="btn-primary flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact {selectedAttorney.name.split(' ')[0]}
                </button>
                <button
                  onClick={() => setSelectedAttorney(null)}
                  className="btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        attorney={contactAttorney}
      />
    </div>
  )
}
