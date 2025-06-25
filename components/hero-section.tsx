
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Award, Users } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://img.freepik.com/premium-photo/repeating-minimalist-halftone-pattern-with-small-blue-circles-arranged-grid-ar-916-v-52-job-id-fb9ddb426d144cf58306400b18abc354_941600-384704.jpg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Chetluru Srinivas
                <span className="block text-blue-200">& Associates</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
                <span className="font-semibold">35+ Years of Proven Success</span>
                <br />
                Distinguished legal representation with unwavering integrity and professionalism
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/practice-areas" className="btn-primary bg-white text-blue-900 hover:bg-blue-50">
                  Explore Our Services
                </Link>
                <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
                  Free Consultation
                </Link>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-200 mb-1">35+</div>
                  <div className="text-sm text-blue-100">Years</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-200 mb-1">90%</div>
                  <div className="text-sm text-blue-100">Success Rate</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-200 mb-1">10</div>
                  <div className="text-sm text-blue-100">Practice Areas</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative w-80 h-80 bg-blue-800/50 rounded-lg border-2 border-dashed border-blue-400 flex items-center justify-center">
                <div className="text-center text-blue-200">
                  <div className="text-lg font-semibold mb-2">Image Placeholder</div>
                  <div className="text-sm opacity-80">Add your image here</div>
                </div>
                
                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <Award className="w-8 h-8 text-blue-600" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <Users className="w-8 h-8 text-blue-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-blue-200"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
