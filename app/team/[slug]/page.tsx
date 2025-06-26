import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, Award, GraduationCap, Scale, Phone } from 'lucide-react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import lawFirmContent from '../../../data/law_firm_content.json';

interface Advocate {
  name: string;
  title: string;
  isFounder: boolean;
  experienceYears?: string | null;
  industryExperienceYears?: string | null;
  education: string[];
  specializations: string[];
  email?: string | null;
  registration?: string | null;
  bio?: string | null;
}

interface TeamMemberPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  const advocates = lawFirmContent?.advocates || [];
  
  return advocates.map((advocate) => ({
    slug: advocate.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
  }));
}

export async function generateMetadata({ params }: TeamMemberPageProps) {
  const resolvedParams = await params;
  const advocate = lawFirmContent?.advocates?.find(
    (member) => member.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === resolvedParams.slug
  );

  if (!advocate) {
    return {
      title: 'Team Member Not Found',
    };
  }

  return {
    title: `${advocate.name} - ${advocate.title} | Chetluru Srinivas & Associates`,
    description: advocate.bio || `${advocate.name} is a ${advocate.title} at Chetluru Srinivas & Associates with ${advocate.experienceYears || advocate.industryExperienceYears || ''} of legal experience.`,
  };
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const resolvedParams = await params;
  const advocate = lawFirmContent?.advocates?.find(
    (member) => member.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === resolvedParams.slug
  );

  if (!advocate) {
    notFound();
  }

  // Get other team members (excluding current one)
  const otherMembers = lawFirmContent?.advocates?.filter(
    (member) => member.name !== advocate.name
  ).slice(0, 3) || [];

  const getExperienceYears = () => {
    return advocate.experienceYears || advocate.industryExperienceYears || 'Experienced Professional';
  };

  const getAdvocateImage = (advocateName: string) => {
    const name = advocateName.toLowerCase();
    
    // Map advocate names to their image files
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
    
    // Default fallback image
    return '/images/chetluru_srinivas_optimized.jpg';
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container-max">
          <Link
            href="/"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
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
                {(() => {
                  const imagePath = getAdvocateImage(advocate?.name || '');
                  console.log('Loading image for:', advocate?.name, 'Path:', imagePath);
                  return (
                    <img
                      src={imagePath}
                      alt={`${advocate?.name || 'Advocate'} - ${advocate?.title || 'Legal Professional'}`}
                      className="w-full h-full object-cover"
                    />
                  );
                })()}
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
                </div>

                {/* Why Choose This Advocate */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Why Choose {advocate.name}?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Extensive experience in legal practice with proven results</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Client-focused approach with personalized legal strategies</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Strong track record of successful case outcomes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Commitment to transparency and clear communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="bg-blue-900 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Professional Information</h3>
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
                    href="tel:+919848022338"
                    className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 9848022338</span>
                  </a>
                  <Link
                    href="/#contact"
                    className="btn-primary w-full bg-blue-600 hover:bg-blue-500"
                  >
                    Contact {advocate.name}
                  </Link>
                </div>
              </div>

              {/* Education */}
              {advocate.education && advocate.education.length > 0 && (
                <div className="bg-white border rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold">Education</h3>
                  </div>
                  <div className="space-y-2">
                    {advocate.education.map((edu, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-medium text-gray-900">{edu}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specializations */}
              {advocate.specializations && advocate.specializations.length > 0 && (
                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Areas of Expertise</h3>
                  <div className="space-y-2">
                    {advocate.specializations.map((spec, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <Scale className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Team Members */}
              {otherMembers.length > 0 && (
                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Other Team Members</h3>
                  <div className="space-y-3">
                    {otherMembers.map((member, index) => (
                      <Link
                        key={index}
                        href={`/team/${member.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}/`}
                        className="block p-3 rounded-lg border hover:bg-blue-50 hover:border-blue-200 transition-colors"
                      >
                        <h4 className="font-semibold text-gray-900">{member.name}</h4>
                        <p className="text-blue-600 text-sm">{member.title}</p>
                        {(member.experienceYears || member.industryExperienceYears) && (
                          <p className="text-gray-600 text-sm">
                            {member.experienceYears || member.industryExperienceYears} Experience
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
