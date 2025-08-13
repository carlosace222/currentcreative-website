'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import CityCard from '@/components/CityCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cities } from '@/content/cities'
import { trackEvent } from '@/lib/analytics'
import { MapPin } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function ServiceAreasPage() {
  const rocklandCities = cities.filter(city => city.county === 'Rockland County')
  const westchesterCities = cities.filter(city => city.county === 'Westchester County')

  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-12">
        <Section>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Serving Rockland County & Lower Hudson Valley
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              We're proud to serve businesses throughout the region with local expertise 
              and proven digital marketing strategies tailored to each community.
            </p>
            <Link href="/contact">
              <Button size="lg" onClick={() => trackEvent('book_meeting', { location: 'service_areas_hero' })}>
                Get Local Marketing Help →
              </Button>
            </Link>
          </motion.div>
        </Section>
      </section>

      <Section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Rockland County</h2>
          <p className="text-slate-600 mb-8">
            Our home base and primary service area, where we've helped hundreds of local businesses thrive.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {rocklandCities.map((city, index) => (
              <motion.div
                key={city.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeIn}
              >
                <CityCard city={city} />
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-4">Westchester County</h2>
          <p className="text-slate-600 mb-8">
            Expanding our reach to serve the dynamic businesses of Lower Westchester.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {westchesterCities.map((city, index) => (
              <motion.div
                key={city.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeIn}
              >
                <CityCard city={city} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section className="py-20 bg-slate-900 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your City?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            We serve businesses throughout the entire Lower Hudson Valley region. 
            Contact us to discuss how we can help your business grow, wherever you're located.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-blue-50"
                onClick={() => trackEvent('book_meeting', { location: 'service_areas_bottom' })}
              >
                Get in Touch →
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
              onClick={() => trackEvent('download_blueprint', { location: 'service_areas_bottom' })}
            >
              Download Local Marketing Guide
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  )
}