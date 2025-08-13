import Section from '@/components/Section'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="pt-24 pb-12 min-h-screen flex items-center">
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg text-slate-600 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">What you can do:</h2>
            <div className="space-y-3 text-left">
              <p className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Use your browser's back button
              </p>
              <p className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Check the URL for typos
              </p>
              <p className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Return to our homepage
              </p>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Support
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="font-bold mb-4">Popular Pages:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="text-blue-600 hover:underline">Services</Link>
              <Link href="/service-areas" className="text-blue-600 hover:underline">Service Areas</Link>
              <Link href="/about" className="text-blue-600 hover:underline">About</Link>
              <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </Section>
    </section>
  )
}