
import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Chetluru Srinivas & Associates - Professional Legal Services',
  description: 'Distinguished legal firm with 35+ years of experience and 90% success rate. Comprehensive legal services in Civil Law, Corporate Law, Criminal Cases, and more.',
  keywords: 'law firm, legal services, attorney, lawyer, civil law, corporate law, criminal cases, Hyderabad, India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
