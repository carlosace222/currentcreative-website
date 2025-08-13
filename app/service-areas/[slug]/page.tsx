'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Section from '@/components/Section'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { cities } from '@/content/cities'
import { trackEvent } from '@/lib/analytics'
import { generateLocalBusinessSchema } from '@/lib/seo'
import Script from 'next/script'
import { MapPin, Users, Building, TrendingUp } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const faqs = [
  {
    question: 'How quickly can you start working on my business?',
    answer: 'We can typically begin work within 48-72 hours of our initial consultation. For urgent projects, we offer expedited onboarding.'
  },
  {
    question: 'Do you work with small local businesses?',
    answer: 'Absolutely! We specialize in helping local businesses of all sizes, from single-location shops to multi-location enterprises.'
  },
  {
    question: 'What makes you different from other agencies?',
    answer: 'Our deep local knowledge, proven track record in the Hudson Valley, and commitment to transparent, results-driven partnerships set us apart.'
  },
  {
    question: 'How do you measure success?',
    answer: 'We track key metrics like website traffic, lead generation, conversion rates, and most importantly, your return on investment.'
  }
]

export default function CityDetailPage({ params }: { params: { slug: string } }) {
  const city = cities.find(c => c.slug === params.slug)
  
  if (!city) {
    notFound()
  }

  const localBusinessSchema = generateLocalBusinessSchema({
    name: `Current Creative AI - ${city.name}`,
    city: city.name,
    state: city.state,
    postalCode: '10901', // Default ZIP
    latitude: city.mapCoordinates.lat,
    longitude: city.mapCoordinates.lng
  })

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-12">
        <Section>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Digital Marketing in {city.name}, {city.state}
                </h1>
                <p className="text-lg text-slate-600">{city.county}</p>
              </div>
            </div>
            <p className="text-xl text-slate-700 mb-8">
              {city.description} We help {city.name} businesses dominate their local market 
              with proven digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  size="lg"
                  onClick={() => trackEvent('book_meeting', { location: 'city_detail', city: city.slug })}
                >
                  Get Free {city.name} Marketing Consultation
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => trackEvent('download_blueprint', { location: 'city_detail', city: city.slug })}
              >
                Download Local Success Guide
              </Button>
            </div>
          </motion.div>
        </Section>
      </section>

      <Section className="py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">Local Market Insights</h2>
            <p className="text-lg text-slate-700 mb-6">{city.localInsights}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="p-4">
                <Users className="h-6 w-6 text-blue-600 mb-2" />
                <div className="text-2xl font-bold">{city.population}</div>
                <div className="text-sm text-slate-600">Population</div>
              </Card>
              <Card className="p-4">
                <Building className="h-6 w-6 text-blue-600 mb-2" />
                <div className="text-2xl font-bold">{city.competitors.length}+</div>
                <div className="text-sm text-slate-600">Business Types</div>
              </Card>
            </div>

            <h3 className="text-xl font-bold mb-4">Key Business Sectors</h3>
            <div className="space-y-2">
              {city.competitors.map((sector, index) => (
                <div key={index} className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-slate-700">{sector}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">Neighborhoods We Serve</h2>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {city.neighborhoods.map((neighborhood, index) => (
                <Card key={index} className="p-3 text-center hover:shadow-md transition-shadow">
                  <p className="font-medium">{neighborhood}</p>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-xl font-bold mb-3">Local Success Story</h3>
              <p className="text-slate-700 mb-4">
                "Current Creative helped our {city.name} restaurant increase online orders by 
                287% in just 3 months. They truly understand our local market."
              </p>
              <p className="text-sm font-medium">
                - Local Business Owner, {city.name}
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section className="py-20 bg-slate-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Section>

      <Section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate {city.name}?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Join dozens of successful {city.name} businesses that trust Current Creative 
            to drive their digital growth. Let's create your success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                onClick={() => trackEvent('book_meeting', { location: 'city_detail_bottom', city: city.slug })}
              >
                Book Your Free Strategy Session
              </Button>
            </Link>
            <Link href="/service-areas">
              <Button size="lg" variant="outline">
                View All Service Areas
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  )
}