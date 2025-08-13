// SEO utility functions and schema generation

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Current Creative AI",
  "alternateName": "Current Creative",
  "url": "https://currentcreative.ai",
  "logo": "https://currentcreative.ai/logo.png",
  "sameAs": [
    "https://facebook.com/currentcreativeai",
    "https://instagram.com/currentcreativeai",
    "https://linkedin.com/company/currentcreativeai",
    "https://twitter.com/currentcreative"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-845-555-1234",
    "contactType": "Customer Service",
    "email": "hello@currentcreative.ai",
    "availableLanguage": "English",
    "areaServed": ["Rockland County", "Westchester County", "New York"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "New City",
    "addressRegion": "NY",
    "postalCode": "10956",
    "addressCountry": "US"
  },
  "description": "Digital marketing and web development agency serving Rockland County and Lower Hudson Valley businesses with data-driven strategies and proven results.",
  "foundingDate": "2020",
  "numberOfEmployees": "10-25",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 41.1476,
      "longitude": -73.9893
    },
    "geoRadius": "50000"
  }
})

export const generateLocalBusinessSchema = (business: {
  name: string
  city: string
  state: string
  postalCode: string
  latitude: number
  longitude: number
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": business.name,
  "image": "https://currentcreative.ai/og-image.jpg",
  "@id": `https://currentcreative.ai/service-areas/${business.city.toLowerCase().replace(' ', '-')}`,
  "url": `https://currentcreative.ai/service-areas/${business.city.toLowerCase().replace(' ', '-')}`,
  "telephone": "+1-845-555-1234",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": business.city,
    "addressRegion": business.state,
    "postalCode": business.postalCode,
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": business.latitude,
    "longitude": business.longitude
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://facebook.com/currentcreativeai",
    "https://instagram.com/currentcreativeai"
  ]
})

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Current Creative AI",
  "url": "https://currentcreative.ai",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://currentcreative.ai/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
})

export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
})

export const generateServiceSchema = (service: {
  name: string
  description: string
  provider: string
  areaServed: string[]
  offers?: any
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": service.provider
  },
  "areaServed": service.areaServed.map(area => ({
    "@type": "City",
    "name": area
  })),
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name
        }
      }
    ]
  }
})

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})

export const generateReviewSchema = (reviews: Array<{
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}>) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Current Creative AI",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": reviews.length.toString()
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5"
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished
  }))
})

// Meta tag generators
export const generateMetaTags = (page: {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
}) => ({
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  canonical: page.canonical,
  openGraph: {
    title: page.title,
    description: page.description,
    images: page.ogImage ? [page.ogImage] : ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: page.title,
    description: page.description,
    images: page.ogImage ? [page.ogImage] : ['/og-image.jpg'],
  }
})

// Utility functions
export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}

export const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}