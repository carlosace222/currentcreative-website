'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Users, Target, Award, TrendingUp } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function AboutPage() {
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
              About Current Creative AI
            </h1>
            <p className="text-lg text-slate-600">
              We're a results-driven digital marketing agency dedicated to helping businesses 
              in Rockland County and the Lower Hudson Valley achieve extraordinary growth through 
              data-driven strategies and cutting-edge technology.
            </p>
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
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-slate-700 mb-4">
              Founded in 2020, Current Creative AI was born from a simple observation: 
              local businesses needed more than just generic marketing solutions—they needed 
              a partner who understood their unique challenges and markets.
            </p>
            <p className="text-slate-700 mb-4">
              Starting in Rockland County, we've helped over 200 businesses transform their 
              digital presence and achieve measurable growth. Our approach combines deep local 
              market knowledge with cutting-edge digital marketing strategies.
            </p>
            <p className="text-slate-700">
              Today, we're proud to be the trusted growth partner for businesses throughout 
              the Lower Hudson Valley, delivering an average 5.2x return on marketing investment 
              for our clients.
            </p>
          </div>
          <Card className="p-8 bg-blue-50 border-blue-200">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-slate-600">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5.2x</div>
                <div className="text-sm text-slate-600">Average ROAS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-slate-600">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">$47M+</div>
                <div className="text-sm text-slate-600">Revenue Generated</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      <Section className="py-20 bg-slate-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Partnership</h3>
              <p className="text-sm text-slate-600">
                We're not just a vendor—we're your growth partner, invested in your success.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Results-Driven</h3>
              <p className="text-sm text-slate-600">
                Every strategy is designed with measurable outcomes and ROI in mind.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Excellence</h3>
              <p className="text-sm text-slate-600">
                We maintain the highest standards in everything we do.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Innovation</h3>
              <p className="text-sm text-slate-600">
                We stay ahead of trends to keep your business competitive.
              </p>
            </Card>
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
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Join the growing family of successful businesses we're proud to serve. 
            Let's discuss how we can help you achieve your growth goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Start Your Growth Journey
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline">
                View Success Stories
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  )
}