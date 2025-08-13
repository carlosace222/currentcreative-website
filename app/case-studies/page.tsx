import Section from '@/components/Section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CaseStudiesPage() {
  return (
    <section className="pt-24 pb-12">
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Discover how we've helped businesses like yours achieve extraordinary growth.
          </p>
          
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Case Studies Coming Soon</h2>
            <p className="text-slate-600 mb-6">
              We're currently compiling our most impressive client success stories. 
              Check back soon to see detailed case studies with real numbers and results.
            </p>
            <Link href="/contact">
              <Button>
                Discuss Your Project
              </Button>
            </Link>
          </Card>
        </div>
      </Section>
    </section>
  )
}