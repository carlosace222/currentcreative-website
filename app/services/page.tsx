'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { services } from '@/content/services'
import { trackEvent } from '@/lib/analytics'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function ServicesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Marketing Services That Deliver Results
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              From SEO to social media, we offer comprehensive digital marketing solutions 
              tailored to businesses in Rockland County and the Lower Hudson Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" onClick={() => trackEvent('book_meeting', { location: 'services_hero' })}>
                  Get a Free Consultation
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => trackEvent('download_blueprint', { location: 'services_hero' })}
              >
                Download Service Guide
              </Button>
            </div>
          </motion.div>
        </Section>
      </section>

      <Section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeIn}
              >
                <ServiceCard service={service} />
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
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Our experts will analyze your business and create a custom digital marketing 
            strategy that combines the right services to achieve your goals.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-blue-50"
              onClick={() => trackEvent('book_meeting', { location: 'services_bottom' })}
            >
              Get Your Custom Strategy →
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  )
}