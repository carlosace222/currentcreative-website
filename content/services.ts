import { Search, TrendingUp, Globe, ChartBar, Megaphone, Users, Zap, Shield } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export interface Service {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  longDescription: string
  features: string[]
  benefits: string[]
  idealFor: string[]
  price: string
}

export const services: Service[] = [
  {
    slug: 'seo-local-search',
    title: 'SEO & Local Search',
    description: 'Dominate Google search results and attract more local customers.',
    icon: Search,
    longDescription: 'Our comprehensive SEO strategies are designed to boost your visibility in both organic search results and Google Maps. We focus on local SEO tactics that put your business in front of customers actively searching for your services in Rockland County and the Lower Hudson Valley.',
    features: [
      'Local keyword research and optimization',
      'Google Business Profile optimization',
      'On-page and technical SEO',
      'Local citation building',
      'Review management strategy',
      'Mobile-first optimization'
    ],
    benefits: [
      'Increase organic traffic by 150-300%',
      'Rank #1 for local service keywords',
      'Generate more phone calls and walk-ins',
      'Build lasting online authority'
    ],
    idealFor: [
      'Local service businesses',
      'Retail stores',
      'Professional services',
      'Healthcare providers'
    ],
    price: 'Starting at $1,500/month'
  },
  {
    slug: 'paid-advertising',
    title: 'Paid Advertising',
    description: 'Strategic PPC campaigns that deliver immediate results and measurable ROI.',
    icon: TrendingUp,
    longDescription: 'Our data-driven paid advertising services encompass Google Ads, Facebook/Instagram Ads, and LinkedIn campaigns. We create highly targeted campaigns that reach your ideal customers at the perfect moment in their buying journey.',
    features: [
      'Google Ads management',
      'Facebook & Instagram advertising',
      'LinkedIn B2B campaigns',
      'Retargeting campaigns',
      'Landing page optimization',
      'A/B testing and optimization'
    ],
    benefits: [
      'Average 5x return on ad spend',
      'Immediate traffic and leads',
      'Precise audience targeting',
      'Full transparency and reporting'
    ],
    idealFor: [
      'E-commerce businesses',
      'Lead generation',
      'Event promotion',
      'New business launches'
    ],
    price: 'Starting at $2,000/month + ad spend'
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Custom websites that convert visitors into customers.',
    icon: Globe,
    longDescription: 'We build lightning-fast, mobile-responsive websites that not only look stunning but are engineered to convert. Every site we develop is optimized for search engines, accessibility, and user experience from day one.',
    features: [
      'Custom design and development',
      'Mobile-first responsive design',
      'E-commerce solutions',
      'CMS integration',
      'Performance optimization',
      'Security and maintenance'
    ],
    benefits: [
      'Increase conversion rates by 40-80%',
      'Improve page load speeds',
      'Reduce bounce rates',
      'Scale with your business'
    ],
    idealFor: [
      'Business redesigns',
      'New ventures',
      'E-commerce stores',
      'Service providers'
    ],
    price: 'Starting at $5,000'
  },
  {
    slug: 'analytics-reporting',
    title: 'Analytics & Reporting',
    description: 'Turn data into actionable insights that drive growth.',
    icon: ChartBar,
    longDescription: 'We implement comprehensive analytics solutions that track every important metric of your digital presence. Our custom dashboards give you real-time insights into what\'s working and what needs improvement.',
    features: [
      'Google Analytics 4 setup',
      'Custom dashboard creation',
      'Conversion tracking',
      'Monthly performance reports',
      'Competitor analysis',
      'ROI measurement'
    ],
    benefits: [
      'Make data-driven decisions',
      'Identify growth opportunities',
      'Optimize marketing spend',
      'Track true business impact'
    ],
    idealFor: [
      'Growing businesses',
      'Multi-channel marketers',
      'E-commerce operations',
      'Performance-focused teams'
    ],
    price: 'Starting at $800/month'
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Build a loyal community and drive engagement across social platforms.',
    icon: Megaphone,
    longDescription: 'Our social media strategies go beyond posting – we build engaged communities that become brand advocates. From content creation to paid social campaigns, we handle every aspect of your social presence.',
    features: [
      'Content strategy and creation',
      'Community management',
      'Influencer partnerships',
      'Social advertising',
      'Platform optimization',
      'Performance tracking'
    ],
    benefits: [
      'Grow followers by 200-500%',
      'Increase engagement rates',
      'Drive website traffic',
      'Build brand loyalty'
    ],
    idealFor: [
      'B2C brands',
      'Restaurants and retail',
      'Professional services',
      'Event venues'
    ],
    price: 'Starting at $1,200/month'
  },
  {
    slug: 'conversion-optimization',
    title: 'Conversion Rate Optimization',
    description: 'Maximize revenue from your existing traffic with scientific testing.',
    icon: Zap,
    longDescription: 'Using advanced A/B testing and user behavior analysis, we optimize every element of your digital presence to convert more visitors into customers. Small improvements lead to massive revenue gains.',
    features: [
      'A/B and multivariate testing',
      'Heat mapping and user recording',
      'Landing page optimization',
      'Checkout flow improvement',
      'Form optimization',
      'Personalization strategies'
    ],
    benefits: [
      'Increase conversion rates 20-60%',
      'Reduce cart abandonment',
      'Improve user experience',
      'Maximize marketing ROI'
    ],
    idealFor: [
      'E-commerce sites',
      'SaaS companies',
      'Lead generation sites',
      'High-traffic websites'
    ],
    price: 'Starting at $2,500/month'
  }
]