
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Shield, Scale, Building, Heart, Banknote, FileText, UserCheck, Lightbulb, PenTool, ArrowRight } from 'lucide-react'

const practiceAreas = [
  {
    title: "Civil Law",
    icon: Scale,
    description: "Land disputes, property litigation, and civil matters with comprehensive representation."
  },
  {
    title: "Criminal Cases",
    icon: Shield,
    description: "Defense in CBI, ACB cases, PMLA matters, and criminal appeals with expertise."
  },
  {
    title: "Corporate Law",
    icon: Building,
    description: "NCLT representation, company law compliance, and tax litigation services."
  },
  {
    title: "Matrimonial Disputes",
    icon: Heart,
    description: "Divorce proceedings, custody matters, and family law with compassionate support."
  },
  {
    title: "Banking & Finance",
    icon: Banknote,
    description: "DRT litigation, SARFAESI matters, and financial dispute resolution."
  },
  {
    title: "Arbitration",
    icon: FileText,
    description: "Alternative dispute resolution with efficient and cost-effective solutions."
  },
  {
    title: "Consumer Protection",
    icon: UserCheck,
    description: "Consumer rights enforcement and protection from unfair trade practices."
  },
  {
    title: "Intellectual Property",
    icon: Lightbulb,
    description: "Patent registration, trademark protection, and IP litigation services."
  },
  {
    title: "Negotiable Instruments",
    icon: PenTool,
    description: "Cheque dishonor cases and payment system legal guidance."
  }
]

export function PracticeAreasPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Our Practice Areas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive legal services across diverse areas of law with specialized expertise and proven success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card p-6 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-blue-900">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                
                <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/practice-areas" className="btn-primary inline-flex items-center gap-2">
            <FileText className="w-5 h-5" />
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
