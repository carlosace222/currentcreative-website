'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-sm font-medium">
              Serving Rockland County & Lower Hudson Valley
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Data-Driven Marketing
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
          >
            We help ambitious businesses in Nyack, New City, Pearl River, and beyond achieve 
            explosive growth through strategic digital marketing and cutting-edge web solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                onClick={() => trackEvent('book_meeting', { location: 'hero' })}
              >
                Book a Strategy Session →
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg"
              onClick={() => trackEvent('download_blueprint', { location: 'hero' })}
            >
              Get the Local Blueprint
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">200+</div>
              <div className="text-sm text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">5.2x</div>
              <div className="text-sm text-blue-200">Average ROAS</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">98%</div>
              <div className="text-sm text-blue-200">Client Retention</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </section>
  )
}