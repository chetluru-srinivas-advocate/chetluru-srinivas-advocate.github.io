import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, Scale, Mail, Phone } from 'lucide-react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import lawFirmContent from '../../../data/law_firm_content.json';

interface PracticeArea {
  name: string;
  description: string | null;
  services: string[];
}

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

interface PracticeAreaPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  const practiceAreas = lawFirmContent?.practiceAreas || [];
  
  return practiceAreas.map((area) => ({
    slug: area.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
  }));
}

export async function generateMetadata({ params }: PracticeAreaPageProps) {
  const resolvedParams = await params;
  const practiceArea = lawFirmContent?.practiceAreas?.find(
    (area) => area.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === resolvedParams.slug
  );

  if (!practiceArea) {
    return {
      title: 'Practice Area Not Found',
    };
  }

  return {
    title: `${practiceArea.name} - Chetluru Srinivas & Associates`,
    description: practiceArea.description || `Expert ${practiceArea.name.toLowerCase()} services from experienced legal professionals.`,
  };
}

export default async function PracticeAreaPage({ params }: PracticeAreaPageProps) {
  const resolvedParams = await params;
  const practiceArea = lawFirmContent?.practiceAreas?.find(
    (area) => area.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === resolvedParams.slug
  );

  if (!practiceArea) {
    notFound();
  }

  // Get related practice areas (excluding current one)
  const relatedAreas = lawFirmContent?.practiceAreas?.filter(
    (area) => area.name !== practiceArea.name
  ).slice(0, 3) || [];

  // Get relevant advocates for this practice area
  const relevantAdvocates = lawFirmContent?.advocates?.filter(
    (advocate) => 
      advocate.specializations?.some(
        (spec) => spec.toLowerCase().includes(practiceArea.name.toLowerCase().split(' ')[0])
      ) || advocate.specializations?.length === 0
  ).slice(0, 2) || [];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container-max">
          <div className="max-w-4xl">
            <Link
              href="/"
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              {practiceArea.name}
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              {practiceArea.description || `Expert ${practiceArea.name.toLowerCase()} services from our experienced legal team.`}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6">Our {practiceArea.name} Services</h2>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {practiceArea.description || `At Chetluru Srinivas & Associates, we provide comprehensive ${practiceArea.name.toLowerCase()} services with over 35 years of combined legal experience. Our team of dedicated professionals ensures that each client receives personalized attention and strategic legal counsel tailored to their specific needs.`}
                </p>

                {practiceArea.services && practiceArea.services.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Services We Offer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {practiceArea.services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                          <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact CTA */}
              <div className="bg-blue-900 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Need Legal Assistance?</h3>
                <p className="text-blue-100 mb-6">
                  Contact us today for a consultation regarding your {practiceArea.name.toLowerCase()} matter.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919440222300"
                    className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 9440222300</span>
                  </a>
                  <a
                    href="mailto:chetluru2025@gmail.com"
                    className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>chetluru2025@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Related Practice Areas */}
              {relatedAreas.length > 0 && (
                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Other Practice Areas</h3>
                  <div className="space-y-3">
                    {relatedAreas.map((area, index) => (
                      <Link
                        key={index}
                        href={`/practice-areas/${area.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}/`}
                        className="block p-3 rounded-lg border hover:bg-blue-50 hover:border-blue-200 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <Scale className="w-5 h-5 text-blue-600" />
                          <span className="font-medium text-gray-900">{area.name}</span>
                        </div>
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
