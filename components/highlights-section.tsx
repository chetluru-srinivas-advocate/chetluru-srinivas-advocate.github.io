
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, TrendingUp, Users, Calendar } from 'lucide-react'

const highlights = [
  {
    icon: Calendar,
    number: "35+",
    label: "Years Experience",
    description: "Decades of legal expertise"
  },
  {
    icon: TrendingUp,
    number: "90%",
    label: "Success Rate",
    description: "Proven track record"
  },
  {
    icon: Users,
    number: "10",
    label: "Practice Areas",
    description: "Comprehensive legal services"
  },
  {
    icon: Award,
    number: "1000+",
    label: "Satisfied Clients",
    description: "Trusted legal partner"
  }
]

export function HighlightsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="bg-white py-16 border-b" ref={ref}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Why Choose Our Firm
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A distinguished legal firm built on integrity, professionalism, and client success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            return (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center card p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="text-3xl font-bold text-blue-900 mb-2 count-up"
                >
                  {highlight.number}
                </motion.div>
                
                <h3 className="font-semibold text-blue-900 mb-1">
                  {highlight.label}
                </h3>
                <p className="text-sm text-gray-600">
                  {highlight.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
