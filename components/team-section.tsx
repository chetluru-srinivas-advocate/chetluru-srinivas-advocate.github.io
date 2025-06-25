
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Users, Calendar, GraduationCap, Award } from 'lucide-react'

const attorneys = [
  {
    name: "Chetluru Srinivas",
    title: "Founder & Senior Advocate",
    experience: "35+ years",
    education: "B.A., LL.B",
    specialization: "Corporate Law & Civil Litigation",
    slug: "chetluru-srinivas"
  },
  {
    name: "Kiran Kumar Tirunahari",
    title: "Senior Associate",
    experience: "25+ years",
    education: "LL.B",
    specialization: "Civil & Criminal Law",
    slug: "kiran-kumar-tirunahari"
  },
  {
    name: "P. Vijaya Saradhi",
    title: "Advocate",
    experience: "23+ years",
    education: "LL.B",
    specialization: "Civil, Criminal & Family Law",
    slug: "p-vijaya-saradhi"
  },
  {
    name: "Yajur Putta",
    title: "Advocate",
    experience: "6+ years",
    education: "BBA LLB (Hons.), M.B.A",
    specialization: "Corporate & Commercial Law",
    slug: "yajur-putta"
  },
  {
    name: "K.S. Kushal",
    title: "Advocate",
    experience: "4+ years",
    education: "BBA LLB (Hons.), PG Diploma in IPR",
    specialization: "Intellectual Property Rights",
    slug: "ks-kushal"
  },
  {
    name: "Ch. Vimalanand",
    title: "IP Law Specialist",
    experience: "12+ years",
    education: "B.Tech., LL.B",
    specialization: "Patent & Trademark Law",
    slug: "ch-vimalanand"
  }
]

export function TeamSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="bg-gray-50 py-16 border-b" ref={ref}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A distinguished team of legal professionals with combined experience of over 100 years
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <motion.div
              key={attorney.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <Link href={`/team/${attorney.slug}`}>
                {/* Profile Image Placeholder */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <Users className="w-16 h-16 text-blue-400" />
                </div>
                
                {/* Profile Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900 group-hover:text-blue-700 transition-colors">
                    {attorney.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {attorney.title}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
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
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/team" className="btn-secondary">
            View All Team Members
          </Link>
        </div>
      </div>
    </section>
  )
}
