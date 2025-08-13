import Section from '@/components/Section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <section className="pt-24 pb-12">
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Marketing Insights Blog
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Expert tips, local market insights, and digital marketing strategies 
            to help your business grow.
          </p>
          
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Blog Posts Coming Soon</h2>
            <p className="text-slate-600 mb-6">
              We're preparing valuable content covering local SEO, paid advertising, 
              web development, and more. Subscribe to be notified when we publish.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button>
                  Get Personalized Advice
                </Button>
              </Link>
              <Button variant="outline">
                Subscribe to Updates
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </section>
  )
}