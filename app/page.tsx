'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import StatsBand from '@/components/StatsBand'
import Testimonial from '@/components/Testimonial'
import Section from '@/components/Section'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { services } from '@/content/services'
import { trackEvent } from '@/lib/analytics'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <Section className="py-20 bg-slate-50">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Services That Drive Results
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12">
            From strategy to execution, we deliver comprehensive digital marketing solutions that transform your business.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </motion.div>
      </Section>

      <StatsBand />

      <Section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <Card className="p-8 md:p-12 border-2 border-slate-100 hover:border-blue-100 transition-colors">
            <h3 className="text-2xl font-bold mb-4">
              Local Restaurant Chain Increases Revenue 312%
            </h3>
            <p className="text-slate-600 mb-6">
              Discover how we transformed a struggling restaurant group into a regional powerhouse through strategic digital marketing and operational efficiency.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600">312%</div>
                  <div className="text-sm text-slate-600">Revenue Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">5x</div>
                  <div className="text-sm text-slate-600">ROAS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">89%</div>
                  <div className="text-sm text-slate-600">Customer Retention</div>
                </div>
              </div>
              <Link href="/case-studies">
                <Button variant="outline" size="lg">
                  View Case Study →
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </Section>

      <Section className="py-20 bg-slate-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial
              quote="Current Creative transformed our online presence. We went from invisible to industry leaders in just 6 months."
              author="Sarah Chen"
              role="CEO, TechStart Solutions"
              rating={5}
            />
            <Testimonial
              quote="The ROI has been incredible. Every dollar we spend with them returns tenfold. They're true partners."
              author="Michael Rodriguez"
              role="Owner, Rodriguez Construction Group"
              rating={5}
            />
            <Testimonial
              quote="Professional, responsive, and results-driven. They helped us dominate our local market in Rockland County."
              author="Jennifer Park"
              role="Director, Wellness Center of Nyack"
              rating={5}
            />
          </div>
        </motion.div>
      </Section>

      <Section className="py-20 bg-blue-600 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Free Local Marketing Blueprint
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Discover the exact strategies we use to help local businesses dominate their markets. 
            Download our proven 5-step framework used by 100+ successful clients.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50"
            onClick={() => trackEvent('download_blueprint', { location: 'home_cta' })}
          >
            Download Free Blueprint →
          </Button>
        </motion.div>
      </Section>

      <Section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Join 200+ businesses in Rockland County and the Lower Hudson Valley that trust Current Creative to drive their growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" onClick={() => trackEvent('book_meeting', { location: 'home_bottom' })}>
                Book Your Free Strategy Session
              </Button>
            </Link>
            <Link href="/service-areas">
              <Button size="lg" variant="outline">
                View Service Areas
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  )
}