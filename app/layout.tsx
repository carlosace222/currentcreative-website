import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASticky from '@/components/CTASticky'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Current Creative AI | Digital Marketing & Web Development | Rockland County NY',
  description: 'Transform your business with data-driven digital marketing and custom web solutions. Serving Rockland County and Lower Hudson Valley. Free strategy session available.',
  keywords: 'digital marketing rockland county, web development nyack, seo new city ny, marketing consultant pearl river',
  openGraph: {
    title: 'Current Creative AI | Digital Marketing Excellence',
    description: 'Transform your business with data-driven digital marketing and custom web solutions.',
    images: ['/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Current Creative AI | Digital Marketing Excellence',
    description: 'Transform your business with data-driven digital marketing.',
  },
  alternates: {
    canonical: 'https://currentcreative.ai',
  },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CTASticky />
      </body>
    </html>
  )
}