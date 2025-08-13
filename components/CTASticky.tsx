'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import LeadForm from '@/components/LeadForm'
import { MessageCircle } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

export default function CTASticky() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 200px
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    setIsOpen(true)
    trackEvent('cta_click', { location: 'sticky_button' })
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              size="lg"
              className="rounded-full shadow-lg hover:shadow-xl transition-shadow bg-blue-600 hover:bg-blue-700 text-white px-6 py-6"
              onClick={handleClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk to an Expert
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Get Your Free Strategy Session</DialogTitle>
            <DialogDescription className="text-base">
              Tell us about your business and goals. We'll create a custom growth plan for you.
            </DialogDescription>
          </DialogHeader>
          <LeadForm onSuccess={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  )
}