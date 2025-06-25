
import { HeroSection } from '@/components/hero-section'
import { TeamSection } from '@/components/team-section'
import { PracticeAreasPreview } from '@/components/practice-areas-preview'
import { TestimonialsSlider } from '@/components/testimonials-slider'
import { ContactBanner } from '@/components/contact-banner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <PracticeAreasPreview />
      <TestimonialsSlider />
      <ContactBanner />
    </>
  )
}
