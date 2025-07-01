"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Award, Scale, GraduationCap, Phone, MessageCircle } from 'lucide-react';
import Breadcrumb from './ui/breadcrumb';

interface Advocate {
  name: string;
  title: string;
  isFounder: boolean;
  experienceYears?: string | null;
  industryExperienceYears?: string | null;
  education: string[];
  specializations: string[];
  email?: string | null;
  phone?: string | null;
  registration?: string | null;
  bio?: string | null;
}

export default function AdvocateProfileClient({ advocate }: { advocate: Advocate }) {
  const [isEciModalOpen, setEciModalOpen] = useState(false);

  const getExperienceYears = () => {
    return advocate.experienceYears || advocate.industryExperienceYears || 'Experienced Professional';
  };

  const getAdvocateImage = (advocateName: string) => {
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

  const breadcrumbItems = [
    { label: 'Our Team', href: '/#team' },
    { label: advocate.name }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container-max">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} className="text-blue-200" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                  {advocate.name}
                </h1>
                {advocate.isFounder && (
                  <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Founder
                  </span>
                )}
              </div>
              <p className="text-lg sm:text-xl text-blue-100 mb-3 sm:mb-4">{advocate.title}</p>
              <p className="text-blue-200 text-sm sm:text-base">{getExperienceYears()} of Legal Experience</p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-6 sm:space-y-8">
                {/* Biography */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">About {advocate.name}</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {advocate.bio || `${advocate.name} is a distinguished ${advocate.title} at Chetluru Srinivas & Associates, bringing ${getExperienceYears()} of comprehensive legal experience to the firm. Known for professional excellence and client dedication, ${advocate.name} has established a reputation for delivering strategic legal solutions across various practice areas.`}
                    </p>
                  </div>
                </div>

                {/* Professional Experience */}
                <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Professional Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Experience</h4>
                        <p className="text-gray-600 text-sm">{getExperienceYears()}</p>
                      </div>
                    </div>
                    {advocate.registration && (
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Registration</h4>
                          <p className="text-gray-600 text-sm">{advocate.registration}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Election Commission Appointment (only for Chetluru Srinivas) */}
                  {advocate.name.toLowerCase().includes('chetluru') && (
                    <>
                      <div className="mt-6 sm:mt-8 flex flex-col items-center">
                        <p className="mt-3 sm:mt-4 text-center text-blue-900 font-semibold text-xs sm:text-sm">
                          Appointed as Election Commission of India's Senior Counsel in Telangana
                        </p>
                      </div>
                      {/* Notable Judgments & Cases */}
                      <div className="mt-6 sm:mt-8">
                        <h4 className="font-semibold text-blue-900 text-sm sm:text-base mb-2">Reportable Judgments</h4>
                        <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-blue-800">
                          <li><a href="https://www.casemine.com/judgement/in/63542b3d5358106ecd0d9605" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">CaseMine: Telangana High Court Judgment (2022)</a></li>
                          <li><a href="https://www.scconline.com/blog/post/2023/09/02/telangana-high-court-discusses-power-to-decide-suit-title-under-article-226-proceedings/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">SCC Online: Power to Decide Suit Title under Article 226 (2023)</a></li>
                          <li><a href="https://indiankanoon.org/doc/173486172/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Indian Kanoon: Telangana High Court Judgment</a></li>
                          <li><a href="https://www.casemine.com/judgement/in/61857c409fca196bd40b0998/amp" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">CaseMine: Telangana High Court Judgment (2021)</a></li>
                          <li><a href="https://lextechsuite.com/Ms-Visweswara-Infrastructure-Pvt-Ltd-and-Others-Versus-The-Telangana-State-Industrial-Infrastructure-Corporation-Ltd-Telangana-Rep-by-its-Chairman-and-Others-2023-08-24#google_vignette" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">LexTechSuite: Ms Visweswara Infrastructure Pvt Ltd v. TSIIC (2023)</a></li>
                          <li><a href="https://www.casemine.com/judgement/in/5dc070cf3321bc77c50827be" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">CaseMine: Telangana High Court Judgment (2019)</a></li>
                          <li><a href="https://www.courtkutchehry.com/Judgement/Search/t/933267-pathlavath-bichya-and-others-appellant" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">CourtKutchehry: Pathlavath Bichya & Others</a></li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>

                {/* Education */}
                {advocate.education && advocate.education.length > 0 && (
                  <div className="bg-white border rounded-xl p-6 sm:p-8">
                    <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      <h3 className="text-lg sm:text-xl font-bold">Education</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {advocate.education.map((edu, index) => (
                        <div key={index} className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                          <p className="font-medium text-gray-900 text-sm sm:text-base">{edu}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specializations */}
                {advocate.specializations && advocate.specializations.length > 0 && (
                  <div className="bg-white border rounded-xl p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Areas of Expertise</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {advocate.specializations.map((spec, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 bg-blue-50 rounded-lg">
                          <Scale className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-700 text-sm sm:text-base">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              {/* Quick Info */}
              <div className="bg-blue-900 text-white rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Professional Information</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-100 mb-1 text-sm sm:text-base">Position</h4>
                    <p className="text-sm sm:text-base">{advocate.title}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100 mb-1 text-sm sm:text-base">Experience</h4>
                    <p className="text-sm sm:text-base">{getExperienceYears()}</p>
                  </div>
                  {advocate.email && (
                    <div>
                      <h4 className="font-semibold text-blue-100 mb-1 text-sm sm:text-base">Email</h4>
                      <a
                        href={`mailto:${advocate.email}`}
                        className="text-blue-200 hover:text-white transition-colors break-all text-sm sm:text-base"
                      >
                        {advocate.email}
                      </a>
                    </div>
                  )}
                </div>
                <div className="pt-4 border-t border-blue-800 mt-4 sm:mt-6">
                  {/* For Vimalanand, show only WhatsApp */}
                  {advocate.name.toLowerCase().includes('vimalanand') && advocate.phone ? (
                    <a
                      href={`https://wa.me/${advocate.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>WhatsApp</span>
                    </a>
                  ) : (
                    <a
                      href={`tel:${advocate.phone}`}
                      className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors mb-3 text-sm sm:text-base"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Contact</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 