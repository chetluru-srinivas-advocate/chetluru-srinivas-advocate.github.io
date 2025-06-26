"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Award, Scale, GraduationCap, Phone } from 'lucide-react';

export default function AdvocateProfileClient({ advocate }) {
  const [isEciModalOpen, setEciModalOpen] = useState(false);

  const getExperienceYears = () => {
    return advocate.experienceYears || advocate.industryExperienceYears || 'Experienced Professional';
  };

  const getAdvocateImage = (advocateName) => {
    const name = advocateName.toLowerCase();
    if (name.includes('chetluru') || name.includes('srinivas')) {
      return '/images/chetluru_srinivas_optimized.jpg';
    }
    if (name.includes('vijay')) {
      return '/images/Vijay_1.jpg';
    }
    if (name.includes('kiran')) {
      return '/images/Kiran_3.jpg';
    }
    if (name.includes('vimalanand') || name.includes('vimal')) {
      return '/images/vimalanand_optimized.jpg';
    }
    if (name.includes('yajur')) {
      return '/images/vakil2_optimized.jpg';
    }
    if (name.includes('kushal')) {
      return '/images/vakil2_optimized.jpg';
    }
    return '/images/chetluru_srinivas_optimized.jpg';
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container-max">
          <Link
            href="/"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  {advocate.name}
                </h1>
                {advocate.isFounder && (
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Founder
                  </span>
                )}
              </div>
              <p className="text-xl text-blue-100 mb-4">{advocate.title}</p>
              <p className="text-blue-200">{getExperienceYears()} of Legal Experience</p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
                <img
                  src={getAdvocateImage(advocate?.name || '')}
                  alt={`${advocate?.name || 'Advocate'} - ${advocate?.title || 'Legal Professional'}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Biography */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">About {advocate.name}</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {advocate.bio || `${advocate.name} is a distinguished ${advocate.title} at Chetluru Srinivas & Associates, bringing ${getExperienceYears()} of comprehensive legal experience to the firm. Known for professional excellence and client dedication, ${advocate.name} has established a reputation for delivering strategic legal solutions across various practice areas.`}
                    </p>
                  </div>
                </div>

                {/* Professional Experience */}
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6">Professional Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Experience</h4>
                        <p className="text-gray-600">{getExperienceYears()}</p>
                      </div>
                    </div>
                    {advocate.registration && (
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Scale className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Registration</h4>
                          <p className="text-gray-600">{advocate.registration}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Election Commission Appointment (only for Chetluru Srinivas) */}
                  {advocate.name.toLowerCase().includes('chetluru') && (
                    <div className="mt-8 flex flex-col items-center">
                      <img
                        src="/awards/eci.jpg"
                        alt="Appointment by Election Commission of India"
                        className="rounded-xl shadow-lg max-w-xs w-full border border-blue-200 cursor-zoom-in transition-transform hover:scale-105"
                        onClick={() => setEciModalOpen(true)}
                      />
                      <p className="mt-4 text-center text-blue-900 font-semibold text-sm">
                        Appointed as Election Commission of India's Senior Counsel in Telangana
                      </p>
                      {isEciModalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setEciModalOpen(false)}>
                          <div className="relative" onClick={e => e.stopPropagation()}>
                            <img
                              src="/awards/eci.jpg"
                              alt="Appointment by Election Commission of India"
                              className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white"
                            />
                            <button
                              onClick={() => setEciModalOpen(false)}
                              className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-900 rounded-full p-2 shadow-lg"
                              aria-label="Close"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Education */}
                {advocate.education && advocate.education.length > 0 && (
                  <div className="bg-white border rounded-xl p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold">Education</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {advocate.education.map((edu, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <p className="font-medium text-gray-900">{edu}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specializations */}
                {advocate.specializations && advocate.specializations.length > 0 && (
                  <div className="bg-white border rounded-xl p-8">
                    <h3 className="text-xl font-bold mb-6">Areas of Expertise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {advocate.specializations.map((spec, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                          <Scale className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="bg-blue-900 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Professional Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-100 mb-1">Position</h4>
                    <p>{advocate.title}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100 mb-1">Experience</h4>
                    <p>{getExperienceYears()}</p>
                  </div>
                  {advocate.email && (
                    <div>
                      <h4 className="font-semibold text-blue-100 mb-1">Email</h4>
                      <a
                        href={`mailto:${advocate.email}`}
                        className="text-blue-200 hover:text-white transition-colors break-all"
                      >
                        {advocate.email}
                      </a>
                    </div>
                  )}
                </div>
                <div className="pt-4 border-t border-blue-800 mt-6">
                  <a
                    href="tel:+919440222300"
                    className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 9440222300</span>
                  </a>
                  <Link
                    href="/#contact"
                    className="btn-primary w-full bg-blue-600 hover:bg-blue-500"
                  >
                    Contact {advocate.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 