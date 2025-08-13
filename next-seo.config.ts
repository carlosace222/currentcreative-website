export const defaultSEO = {
  titleTemplate: '%s | Current Creative AI',
  defaultTitle: 'Current Creative AI | Digital Marketing & Web Development | Rockland County NY',
  description: 'Transform your business with data-driven digital marketing and custom web solutions. Serving Rockland County and Lower Hudson Valley. Free strategy session available.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://currentcreative.ai/',
    siteName: 'Current Creative AI',
    title: 'Current Creative AI | Digital Marketing Excellence',
    description: 'Transform your business with data-driven digital marketing and custom web solutions.',
    images: [
      {
        url: 'https://currentcreative.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Current Creative AI - Digital Marketing Agency',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@currentcreative',
    site: '@currentcreative',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'author',
      content: 'Current Creative AI',
    },
    {
      name: 'robots',
      content: 'index,follow',
    },
    {
      name: 'googlebot',
      content: 'index,follow',
    },
    {
      httpEquiv: 'Content-Type',
      content: 'text/html; charset=utf-8',
    },
    {
      name: 'theme-color',
      content: '#2563eb',
    },
    {
      name: 'msapplication-TileColor',
      content: '#2563eb',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
    // Local Business Schema
    {
      name: 'geo.region',
      content: 'US-NY',
    },
    {
      name: 'geo.placename',
      content: 'Rockland County',
    },
    {
      name: 'geo.position',
      content: '41.1476;-73.9893',
    },
    {
      name: 'ICBM',
      content: '41.1476, -73.9893',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'canonical',
      href: 'https://currentcreative.ai',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
  ],
}

export const businessInfo = {
  name: 'Current Creative AI',
  legalName: 'Current Creative AI LLC',
  phone: '+1-845-555-1234',
  email: 'hello@currentcreative.ai',
  website: 'https://currentcreative.ai',
  address: {
    street: '123 Main Street',
    city: 'New City',
    state: 'NY',
    zipCode: '10956',
    country: 'US',
  },
  hours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 2:00 PM',
    sunday: 'Closed',
  },
  services: [
    'Digital Marketing',
    'Search Engine Optimization',
    'Pay-Per-Click Advertising',
    'Web Development',
    'Social Media Marketing',
    'Analytics & Reporting',
  ],
  serviceAreas: [
    'Rockland County, NY',
    'Westchester County, NY',
    'Nyack, NY',
    'New City, NY',
    'Pearl River, NY',
    'Nanuet, NY',
    'Suffern, NY',
    'Spring Valley, NY',
    'Tarrytown, NY',
    'White Plains, NY',
  ],
}