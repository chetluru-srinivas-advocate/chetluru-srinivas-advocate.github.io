
import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Chetluru Srinivas & Associates - Expert Legal Counsel in Hyderabad',
  description: 'Professional law firm in Hyderabad providing expert legal representation in civil law, criminal cases, corporate law, matrimonial disputes, and intellectual property. Serving clients since 1991.',
  keywords: 'law firm Hyderabad, legal services, civil law, criminal law, corporate law, matrimonial disputes, intellectual property, Chetluru Srinivas',
  authors: [{ name: 'Chetluru Srinivas & Associates' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Chetluru Srinivas & Associates - Expert Legal Counsel',
    description: 'Professional law firm providing comprehensive legal services in Hyderabad since 1991.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Chetluru Srinivas & Associates',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chetluru Srinivas & Associates - Expert Legal Counsel',
    description: 'Professional law firm providing comprehensive legal services in Hyderabad since 1991.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${merriweather.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
