'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Section from '@/components/Section'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { services } from '@/content/services'
import { trackEvent } from '@/lib/analytics'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug)
  
  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-12">
        <Section>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
                <p className="text-lg text-slate-600">{service.price}</p>
              </div>
            </div>
            <p className="text-xl text-slate-700 mb-8">
              {service.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  size="lg"
                  onClick={() => trackEvent('book_meeting', { location: 'service_detail', service: service.slug })}
                >
                  Get Started →
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => trackEvent('download_blueprint', { location: 'service_detail', service: service.slug })}
              >
                Download Service Guide
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
            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{feature}</p>
                </motion.div>
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
            <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <Card key={index} className="p-4 border-l-4 border-blue-600">
                  <p className="font-medium text-slate-800">{benefit}</p>
                </Card>
              ))}
            </div>
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
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {service.idealFor.map((ideal, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <p className="text-lg font-medium flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                  {ideal}
                </p>
              </Card>
            ))}
          </div>
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Let's discuss how {service.title} can transform your business. 
            Schedule a free consultation to get a custom strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                onClick={() => trackEvent('book_meeting', { location: 'service_detail_bottom', service: service.slug })}
              >
                Schedule Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  )
}