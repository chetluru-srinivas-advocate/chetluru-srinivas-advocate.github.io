
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import PracticeAreasSection from '@/components/practice-areas-section'
import TeamSection from '@/components/team-section'
import TestimonialsSection from '@/components/testimonials-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PracticeAreasSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
