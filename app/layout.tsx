import type { Metadata } from 'next'
import './globals.css'
import DisclaimerProvider from '../components/disclaimer-provider'

export const metadata: Metadata = {
  title: 'Chetluru Srinivas & Associates - Top Lawyers in Hyderabad | 35+ Years Experience',
  description: 'Leading law firm in Hyderabad with 35+ years of experience. Expert advocates for corporate law, civil litigation, criminal cases, IP law, and family disputes. Chetluru Srinivas & Associates - Trusted legal counsel in Telangana.',
  keywords: 'Chetluru Srinivas, advocates in Hyderabad, lawyers Hyderabad, law firm Hyderabad, corporate lawyers Hyderabad, civil litigation Hyderabad, criminal lawyers Hyderabad, IP lawyers Hyderabad, family lawyers Hyderabad, legal services Telangana, best lawyers Hyderabad, senior advocate Hyderabad, Chetluru Srinivas advocate, Hyderabad law firm, legal counsel Hyderabad',
  authors: [{ name: 'Chetluru Srinivas & Associates' }],
  creator: 'Chetluru Srinivas & Associates',
  publisher: 'Chetluru Srinivas & Associates',
  category: 'Legal Services',
  classification: 'Law Firm',
  openGraph: {
    title: 'Chetluru Srinivas & Associates - Top Lawyers in Hyderabad | 35+ Years Experience',
    description: 'Leading law firm in Hyderabad with 35+ years of experience. Expert advocates for corporate law, civil litigation, criminal cases, IP law, and family disputes. Trusted legal counsel in Telangana.',
    url: 'https://chetluru-srinivas-advocate.github.io',
    siteName: 'Chetluru Srinivas & Associates',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://chetluru-srinivas-advocate.github.io/images/chetluru_srinivas_optimized.jpg',
        width: 1200,
        height: 630,
        alt: 'Chetluru Srinivas - Founder & Senior Advocate in Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chetluru Srinivas & Associates - Top Lawyers in Hyderabad',
    description: 'Leading law firm in Hyderabad with 35+ years of experience. Expert legal counsel for all practice areas.',
    images: ['https://chetluru-srinivas-advocate.github.io/images/chetluru_srinivas_optimized.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: 'https://chetluru-srinivas-advocate.github.io',
  },
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Hyderabad',
    'geo.position': '17.409487;78.446064',
    'ICBM': '17.409487, 78.446064',
    'DC.title': 'Chetluru Srinivas & Associates - Law Firm Hyderabad',
    'DC.creator': 'Chetluru Srinivas',
    'DC.subject': 'Legal Services, Law Firm, Advocates, Lawyers',
    'DC.description': 'Leading law firm in Hyderabad with 35+ years of experience',
    'DC.publisher': 'Chetluru Srinivas & Associates',
    'DC.contributor': 'Chetluru Srinivas',
    'DC.date': '2025',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://chetluru-srinivas-advocate.github.io',
    'DC.language': 'en',
    'DC.coverage': 'Hyderabad, Telangana, India',
    'DC.rights': 'Copyright 2025 Chetluru Srinivas & Associates',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://chetluru-srinivas-advocate.github.io" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Chetluru Srinivas & Associates",
              "description": "Leading law firm in Hyderabad with 35+ years of experience in corporate law, civil litigation, criminal cases, and intellectual property law.",
              "url": "https://chetluru-srinivas-advocate.github.io",
              "logo": "https://chetluru-srinivas-advocate.github.io/images/chetluru_srinivas_optimized.jpg",
              "image": "https://chetluru-srinivas-advocate.github.io/images/chetluru_srinivas_optimized.jpg",
              "telephone": "+919440222300",
              "email": "chetluru2025@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "#6-3-248/K, Flat No:G2, Abhishek Residency, Banjara Hills, Road No. 1",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500034",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.409487,
                "longitude": 78.446064
              },
              "openingHours": "Mo-Sa 10:00-18:00",
              "priceRange": "$$",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Hyderabad"
                },
                {
                  "@type": "State",
                  "name": "Telangana"
                },
                {
                  "@type": "Country",
                  "name": "India"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 17.409487,
                  "longitude": 78.446064
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Legal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Corporate Law",
                      "description": "Company formation, NCLT proceedings, mergers & acquisitions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Civil Litigation",
                      "description": "Land disputes, property litigation, contract disputes"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Criminal Law",
                      "description": "Criminal defense, CBI cases, PMLA violations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Intellectual Property",
                      "description": "Patent prosecution, trademark registration, IP litigation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Family Law",
                      "description": "Divorce, matrimonial disputes, child custody"
                    }
                  }
                ]
              },
              "founder": {
                "@type": "Person",
                "name": "Chetluru Srinivas",
                "jobTitle": "Founder & Senior Advocate",
                "description": "Founder with 35+ years of legal experience"
              },
              "employee": [
                {
                  "@type": "Person",
                  "name": "Chetluru Srinivas",
                  "jobTitle": "Founder & Senior Advocate",
                  "description": "35+ years experience in corporate law and civil litigation"
                },
                {
                  "@type": "Person",
                  "name": "Kiran Kumar Tirunahari",
                  "jobTitle": "Senior Associate",
                  "description": "25+ years experience in civil and criminal law"
                },
                {
                  "@type": "Person",
                  "name": "P. Vijaya Saradhi",
                  "jobTitle": "Advocate",
                  "description": "23+ years experience in family law and matrimonial disputes"
                },
                {
                  "@type": "Person",
                  "name": "Challa Vimalanand",
                  "jobTitle": "IP Law Specialist & Patent Agent",
                  "description": "Registered Patent Agent (IN/PA 6235) with 12+ years experience"
                }
              ],
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Rajesh Kumar"
                },
                "reviewBody": "Chetluru Srinivas handled my property dispute with exceptional professionalism. Their thorough understanding of civil law and strategic approach led to a favorable settlement that exceeded my expectations."
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "500",
                "bestRating": "5"
              },
              "foundingDate": "1991",
              "award": "Appointed as Election Commission of India's Senior Counsel in Telangana",
              "sameAs": [
                "https://www.google.com/maps?q=17.409487459594366,78.44606468320032"
              ]
            })
          }}
        />

        {/* Person Schema for Chetluru Srinivas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Chetluru Srinivas",
              "jobTitle": "Founder & Senior Advocate",
              "worksFor": {
                "@type": "Organization",
                "name": "Chetluru Srinivas & Associates"
              },
              "description": "Founder and senior advocate with 35+ years of legal experience in corporate law and civil litigation",
              "url": "https://chetluru-srinivas-advocate.github.io/team/chetluru-srinivas/",
              "image": "https://chetluru-srinivas-advocate.github.io/images/chetluru_srinivas_optimized.jpg",
              "telephone": "+919440222300",
              "email": "chetluru2025@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "#6-3-248/K, Flat No:G2, Abhishek Residency, Banjara Hills, Road No. 1",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500034",
                "addressCountry": "IN"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Law College"
              },
              "knowsAbout": [
                "Corporate Law",
                "Civil Litigation",
                "High Court Practice",
                "Appellate Advocacy",
                "Legal Services"
              ],
              "award": "Appointed as Election Commission of India's Senior Counsel in Telangana",
              "sameAs": [
                "https://chetluru-srinivas-advocate.github.io"
              ]
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Chetluru Srinivas & Associates",
              "url": "https://chetluru-srinivas-advocate.github.io",
              "logo": "https://chetluru-srinivas-advocate.github.io/images/chetluru_srinivas_optimized.jpg",
              "description": "Leading law firm in Hyderabad with 35+ years of experience in corporate law, civil litigation, criminal cases, and intellectual property law.",
              "foundingDate": "1991",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "#6-3-248/K, Flat No:G2, Abhishek Residency, Banjara Hills, Road No. 1",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500034",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919440222300",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "English, Telugu, Hindi"
              },
              "sameAs": [
                "https://www.google.com/maps?q=17.409487459594366,78.44606468320032"
              ]
            })
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        
        {/* Local SEO */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.409487;78.446064" />
        <meta name="ICBM" content="17.409487, 78.446064" />
        
        {/* Business Hours */}
        <meta name="business:hours" content="Monday-Saturday 10:00-18:00" />
        
        {/* Language Alternates */}
        <link rel="alternate" hrefLang="en" href="https://chetluru-srinivas-advocate.github.io" />
        <link rel="alternate" hrefLang="x-default" href="https://chetluru-srinivas-advocate.github.io" />
      </head>
      <body suppressHydrationWarning={true}>
        <DisclaimerProvider>
          {children}
        </DisclaimerProvider>
      </body>
    </html>
  )
}
