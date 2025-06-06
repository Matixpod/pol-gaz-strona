import HeroSection from '@/components/sections/HeroSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import AboutSection from '@/components/sections/AboutSection'  // NOWY IMPORT
import BrandsSection from '@/components/sections/BrandsSection'    
import ServicesSection from '@/components/sections/ServicesSection' 
import MapSection from '@/components/sections/MapSection'
import ReviewsSection from '@/components/sections/ReviewsSection'


// Strukturalne dane dla SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Pol-Gaz Szczecin',
  description: 'Serwis kotłów w Szczecinie od 1994 roku. Ambasador firmy Beretta.',
  url: 'https://polgaz-szczecin.pl',
  telephone: '+48601418645',
  email: 'polgazszczecin@wp.pl',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Szczecin',
    addressRegion: 'Zachodniopomorskie',
    addressCountry: 'PL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.4285,
    longitude: 14.5528
  },
  openingHours: [
    'Mo-Fr 08:00-18:00',
    'Sa 09:00-15:00'
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 53.4285,
      longitude: 14.5528
    },
    geoRadius: '60000'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Usługi serwisowe kotłów',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Naprawa kotłów',
          description: 'Profesjonalna naprawa kotłów wszystkich marek'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Montaż kotłów',
          description: 'Montaż nowych kotłów i urządzeń grzewczych'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Przeglądy techniczne',
          description: 'Regularne przeglądy i konserwacja kotłów'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '47'
  },
  foundingDate: '1994',
  founder: {
    '@type': 'Person',
    name: 'Właściciel Pol-Gaz'
  }
}

export default function Home() {
  return (
    <>
          {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ExperienceSection />
      <BrandsSection />    
      <ServicesSection />   
      <AboutSection />
      <MapSection />
      <ReviewsSection />
    </>
  )
}
