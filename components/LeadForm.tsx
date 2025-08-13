'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { trackEvent } from '@/lib/analytics'
import { Loader2 } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().min(2, 'Company name is required'),
  city: z.string().min(2, 'City is required'),
  serviceInterest: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

interface LeadFormProps {
  onSuccess?: () => void
}

export default function LeadForm({ onSuccess }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    trackEvent('lead_form_submit', { service: data.serviceInterest })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        reset()
        if (onSuccess) onSuccess()
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" onFocus={() => trackEvent('lead_form_start')}>
      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Thank you! We'll be in touch within 24 hours.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="John Smith"
            className="mt-1"
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="john@company.com"
            className="mt-1"
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="(845) 555-0123"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="company">Company Name *</Label>
          <Input
            id="company"
            {...register('company')}
            placeholder="ABC Corp"
            className="mt-1"
            aria-invalid={errors.company ? 'true' : 'false'}
          />
          {errors.company && (
            <p className="text-sm text-red-600 mt-1">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            {...register('city')}
            placeholder="Nyack"
            className="mt-1"
            aria-invalid={errors.city ? 'true' : 'false'}
          />
          {errors.city && (
            <p className="text-sm text-red-600 mt-1">{errors.city.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="serviceInterest">Service Interest *</Label>
          <Select onValueChange={(value) => setValue('serviceInterest', value)}>
            <SelectTrigger id="serviceInterest" className="mt-1">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="seo">SEO & Local Search</SelectItem>
              <SelectItem value="ppc">Paid Advertising</SelectItem>
              <SelectItem value="web">Web Development</SelectItem>
              <SelectItem value="analytics">Analytics & Reporting</SelectItem>
              <SelectItem value="all">Full Service Marketing</SelectItem>
            </SelectContent>
          </Select>
          {errors.serviceInterest && (
            <p className="text-sm text-red-600 mt-1">{errors.serviceInterest.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="message">How can we help? *</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell us about your goals and challenges..."
          className="mt-1"
          rows={4}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="space-y-4">
        <p className="text-sm text-slate-600">
          By submitting this form, you consent to receive marketing communications from Current Creative AI. 
          You can unsubscribe at any time. We respect your privacy and will never spam you.
        </p>

        <Button 
          type="submit" 
          size="lg" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Get Your Free Strategy Session'
          )}
        </Button>
      </div>
    </form>
  )
}