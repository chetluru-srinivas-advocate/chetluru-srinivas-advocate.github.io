
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chetluru Srinivas & Associates - Expert Legal Counsel',
  description: 'Professional law firm with 35+ years of experience in corporate law, civil litigation, criminal cases, and intellectual property. Serving clients across India with expertise and integrity.',
  keywords: 'law firm, legal services, corporate law, civil litigation, criminal defense, intellectual property, Hyderabad lawyers, legal counsel',
  authors: [{ name: 'Chetluru Srinivas & Associates' }],
  openGraph: {
    title: 'Chetluru Srinivas & Associates - Expert Legal Counsel',
    description: 'Professional law firm with 35+ years of experience serving clients across India',
    url: 'https://chetluru-srinivas-advocate.github.io',
    siteName: 'Chetluru Srinivas & Associates',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chetluru Srinivas & Associates - Expert Legal Counsel',
    description: 'Professional law firm with 35+ years of experience serving clients across India',
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
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
