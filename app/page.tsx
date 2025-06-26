import dynamic from 'next/dynamic';
import Header from '../components/header';
import Footer from '../components/footer';
import Breadcrumb from '../components/ui/breadcrumb';
import lawFirmContent from '../data/law_firm_content.json';

// Dynamic imports for client components to avoid hydration issues
const HeroSection = dynamic(() => import('../components/hero-section'), {
  ssr: true,
  loading: () => <div className="min-h-screen bg-blue-900 animate-pulse" />
});

const PracticeAreasSection = dynamic(() => import('../components/practice-areas-section'), {
  ssr: true,
  loading: () => <div className="section-padding bg-white animate-pulse" />
});

const TeamSection = dynamic(() => import('../components/team-section'), {
  ssr: true,
  loading: () => <div className="section-padding bg-gray-50 animate-pulse" />
});

const TestimonialsSection = dynamic(() => import('../components/testimonials-section'), {
  ssr: true,
  loading: () => <div className="section-padding bg-blue-50 animate-pulse" />
});

const ContactSection = dynamic(() => import('../components/contact-section'), {
  ssr: true,
  loading: () => <div className="section-padding bg-white animate-pulse" />
});

export default function HomePage() {
  const breadcrumbItems = [
    { label: 'Home' }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Home Page Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container-max py-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      
      <HeroSection
        firmName={lawFirmContent?.firmDetails?.name || 'Chetluru Srinivas & Associates'}
        tagline={lawFirmContent?.firmDetails?.tagline || 'Expert Legal Counsel You Can Trust'}
        description={lawFirmContent?.firmDetails?.description || ''}
        statistics={lawFirmContent?.firmDetails?.statistics || []}
      />

      <TeamSection advocates={lawFirmContent?.advocates || []} />
      
      <PracticeAreasSection practiceAreas={lawFirmContent?.practiceAreas || []} />
      
      <TestimonialsSection testimonials={lawFirmContent?.testimonials || []} />
      
      <ContactSection contactInfo={lawFirmContent?.contactInfo} />
      
      <Footer />
    </main>
  );
}
