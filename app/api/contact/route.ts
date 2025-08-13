import { NextRequest, NextResponse } from 'next/server'
import * as z from 'zod'

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, number[]>()

// Validation schema matching the form
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().min(2).max(100),
  city: z.string().min(2).max(100),
  serviceInterest: z.string(),
  message: z.string().min(10).max(1000),
})

// Simple rate limiting: 5 requests per minute per IP
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const minute = 60 * 1000
  const requests = rateLimitStore.get(ip) || []
  
  // Filter out old requests
  const recentRequests = requests.filter(time => now - time < minute)
  
  if (recentRequests.length >= 5) {
    return true
  }
  
  recentRequests.push(now)
  rateLimitStore.set(ip, recentRequests)
  return false
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Log the submission (in production, save to database)
    console.log('New lead submission:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      ip,
    })

    // TODO: Send email notification using Resend
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'leads@currentcreative.ai',
    //   to: 'team@currentcreative.ai',
    //   subject: `New Lead: ${validatedData.name} from ${validatedData.company}`,
    //   html: formatLeadEmail(validatedData),
    // })

    // TODO: Add to CRM (HubSpot)
    // await createHubSpotContact(validatedData)

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your submission. We will contact you within 24 hours.' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ status: 'Contact API is running' })
}