'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import LeadForm from '@/components/LeadForm'
import { Card } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function ContactPage() {
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
              Let's Transform Your Business Together
            </h1>
            <p className="text-lg text-slate-600">
              Ready to take your digital marketing to the next level? 
              Get in touch for a free consultation and custom growth strategy.
            </p>
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
            <h2 className="text-3xl font-bold mb-6">Get Your Free Strategy Session</h2>
            <p className="text-slate-600 mb-8">
              Fill out the form and we'll contact you within 24 hours to schedule 
              your free consultation. No obligations, just honest advice on how to grow your business.
            </p>
            <Card className="p-6">
              <LeadForm />
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-4">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-slate-600">Call or text us at</p>
                      <a href="tel:+18455551234" className="text-blue-600 font-medium hover:underline">
                        (845) 555-1234
                      </a>
                      <p className="text-sm text-slate-500 mt-1">
                        Available Mon-Fri 9am-6pm EST
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-slate-600">Send us a message at</p>
                      <a href="mailto:hello@currentcreative.ai" className="text-blue-600 font-medium hover:underline">
                        hello@currentcreative.ai
                      </a>
                      <p className="text-sm text-slate-500 mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Office</h3>
                      <p className="text-slate-600">
                        123 Main Street<br />
                        New City, NY 10956
                      </p>
                      <p className="text-sm text-slate-500 mt-1">
                        By appointment only
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-slate-600">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday: 10:00 AM - 2:00 PM EST<br />
                        Sunday: Closed
                      </p>
                      <p className="text-sm text-slate-500 mt-1">
                        Emergency support available for clients
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="font-bold mb-3">What Happens Next?</h3>
              <ol className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600">1.</span>
                  We'll review your submission and research your business
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600">2.</span>
                  Schedule a 30-minute strategy call at your convenience
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600">3.</span>
                  Receive a custom growth plan tailored to your goals
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600">4.</span>
                  Decide if we're the right partner for your success
                </li>
              </ol>
            </Card>
          </motion.div>
        </div>
      </Section>
    </>
  )
}