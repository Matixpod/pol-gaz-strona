import HeroSection from '@/components/sections/HeroSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import AboutSection from '@/components/sections/AboutSection'  // NOWY IMPORT
import BrandsSection from '@/components/sections/BrandsSection'    
import ServicesSection from '@/components/sections/ServicesSection' 
import MapSection from '@/components/sections/MapSection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import FaqSection from '@/components/sections/FaqSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <BrandsSection />    
      <ServicesSection />   
      <AboutSection />
      <MapSection />
      <FaqSection />
      <ReviewsSection />
    </>
  )
}
