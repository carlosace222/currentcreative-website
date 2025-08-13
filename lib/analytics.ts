declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID

// Event tracking function
export const trackEvent = (action: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag && GA_ID) {
    window.gtag('event', action, {
      event_category: parameters?.category || 'engagement',
      event_label: parameters?.label,
      value: parameters?.value,
      ...parameters,
    })
  }
}

// Page view tracking
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_ID) {
    window.gtag('config', GA_ID, {
      page_title: document.title,
      page_location: url,
    })
  }
}

// Conversion tracking
export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag && GA_ID) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value || 1,
      currency: 'USD',
    })
  }
}

// Lead generation events
export const trackLeadFormStart = (location?: string) => {
  trackEvent('lead_form_start', {
    category: 'lead_generation',
    location,
    event_label: 'Form Started',
  })
}

export const trackLeadFormSubmit = (location?: string, service?: string) => {
  trackEvent('lead_form_submit', {
    category: 'lead_generation',
    location,
    service,
    event_label: 'Form Submitted',
  })
}

export const trackBookMeeting = (location?: string) => {
  trackEvent('book_meeting', {
    category: 'conversion',
    location,
    event_label: 'Meeting Booked',
  })
}

export const trackDownloadBlueprint = (location?: string) => {
  trackEvent('download_blueprint', {
    category: 'lead_magnet',
    location,
    event_label: 'Blueprint Downloaded',
  })
}

export const trackCTAClick = (ctaText: string, location?: string) => {
  trackEvent('cta_click', {
    category: 'engagement',
    cta_text: ctaText,
    location,
    event_label: 'CTA Clicked',
  })
}

// E-commerce tracking (if needed later)
export const trackPurchase = (transactionId: string, value: number, items: any[]) => {
  if (typeof window !== 'undefined' && window.gtag && GA_ID) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value,
      currency: 'USD',
      items,
    })
  }
}

// User engagement tracking
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', {
    category: 'engagement',
    event_label: `${percentage}% Scroll`,
    value: percentage,
  })
}

export const trackVideoPlay = (videoTitle: string, location?: string) => {
  trackEvent('video_play', {
    category: 'engagement',
    video_title: videoTitle,
    location,
    event_label: 'Video Played',
  })
}

export const trackPhoneClick = (location?: string) => {
  trackEvent('phone_click', {
    category: 'conversion',
    location,
    event_label: 'Phone Clicked',
  })
}

export const trackEmailClick = (location?: string) => {
  trackEvent('email_click', {
    category: 'conversion',
    location,
    event_label: 'Email Clicked',
  })
}