export interface City {
  slug: string
  name: string
  county: string
  state: string
  population: string
  description: string
  neighborhoods: string[]
  mapCoordinates: { lat: number; lng: number }
  localInsights: string
  competitors: string[]
}

export const cities: City[] = [
  {
    slug: 'nyack',
    name: 'Nyack',
    county: 'Rockland County',
    state: 'NY',
    population: '7,265',
    description: 'A vibrant village known for its arts scene, restaurants, and Hudson River views.',
    neighborhoods: ['Upper Nyack', 'Central Nyack', 'South Nyack', 'West Nyack'],
    mapCoordinates: { lat: 41.0907, lng: -73.9180 },
    localInsights: 'Nyack\'s thriving downtown and artistic community make it perfect for businesses targeting affluent, culturally-engaged consumers.',
    competitors: ['Local boutiques', 'Art galleries', 'Specialty restaurants', 'Professional services']
  },
  {
    slug: 'new-city',
    name: 'New City',
    county: 'Rockland County',
    state: 'NY',
    population: '34,038',
    description: 'The county seat of Rockland County, a major commercial and residential hub.',
    neighborhoods: ['New City Park', 'Germonds', 'Lake Nanuet', 'Congers'],
    mapCoordinates: { lat: 41.1476, lng: -73.9893 },
    localInsights: 'As the county seat, New City attracts government workers and families seeking suburban convenience with urban amenities.',
    competitors: ['Chain retailers', 'Medical practices', 'Legal services', 'Family restaurants']
  },
  {
    slug: 'pearl-river',
    name: 'Pearl River',
    county: 'Rockland County',
    state: 'NY',
    population: '16,387',
    description: 'A family-friendly hamlet with strong Irish-American heritage and community spirit.',
    neighborhoods: ['Downtown Pearl River', 'Nauraushaun', 'Middletown', 'Pearl River Heights'],
    mapCoordinates: { lat: 41.0590, lng: -74.0218 },
    localInsights: 'Pearl River\'s strong community ties and family focus make it ideal for businesses serving families and local traditions.',
    competitors: ['Irish pubs', 'Family services', 'Home improvement', 'Local retailers']
  },
  {
    slug: 'nanuet',
    name: 'Nanuet',
    county: 'Rockland County',
    state: 'NY',
    population: '19,750',
    description: 'A commercial center featuring major shopping destinations and growing residential areas.',
    neighborhoods: ['Central Nanuet', 'Bardonia', 'Nanuet Mall area', 'Route 59 corridor'],
    mapCoordinates: { lat: 41.0887, lng: -74.0135 },
    localInsights: 'Nanuet\'s retail dominance on Route 59 creates opportunities for businesses that complement the shopping experience.',
    competitors: ['Big box stores', 'Chain restaurants', 'Service businesses', 'Medical offices']
  },
  {
    slug: 'tarrytown',
    name: 'Tarrytown',
    county: 'Westchester County',
    state: 'NY',
    population: '11,860',
    description: 'A historic river town blending rich heritage with modern suburban convenience.',
    neighborhoods: ['Tarrytown Heights', 'Philipse Manor', 'Sleepy Hollow border', 'Waterfront District'],
    mapCoordinates: { lat: 41.0762, lng: -73.8588 },
    localInsights: 'Tarrytown\'s mix of history, tourism, and local affluence creates diverse opportunities for upscale and specialty businesses.',
    competitors: ['Historic attractions', 'Upscale dining', 'Boutique shops', 'Professional services']
  },
  {
    slug: 'white-plains',
    name: 'White Plains',
    county: 'Westchester County',
    state: 'NY',
    population: '59,559',
    description: 'Westchester\'s commercial capital with a thriving downtown and diverse economy.',
    neighborhoods: ['Downtown', 'Battle Hill', 'Fisher Hill', 'Gedney', 'North White Plains'],
    mapCoordinates: { lat: 41.0340, lng: -73.7629 },
    localInsights: 'White Plains\' role as a regional business center attracts both B2B and B2C opportunities, especially in professional services.',
    competitors: ['Corporate offices', 'Upscale retail', 'Business services', 'Entertainment venues']
  },
  {
    slug: 'suffern',
    name: 'Suffern',
    county: 'Rockland County',
    state: 'NY',
    population: '11,402',
    description: 'A gateway village connecting Rockland County to New Jersey and Orange County.',
    neighborhoods: ['Downtown Suffern', 'Montebello Commons', 'Viola', 'Airmont'],
    mapCoordinates: { lat: 41.1148, lng: -74.1496 },
    localInsights: 'Suffern\'s strategic location at major highway intersections makes it ideal for businesses serving commuters and travelers.',
    competitors: ['Transit-oriented businesses', 'Quick service restaurants', 'Professional services', 'Retail chains']
  },
  {
    slug: 'spring-valley',
    name: 'Spring Valley',
    county: 'Rockland County',
    state: 'NY',
    population: '33,066',
    description: 'The county\'s most diverse village with a rich multicultural business environment.',
    neighborhoods: ['Downtown Spring Valley', 'Hillcrest', 'North Spring Valley', 'Ewing Avenue corridor'],
    mapCoordinates: { lat: 41.1132, lng: -74.0438 },
    localInsights: 'Spring Valley\'s cultural diversity creates unique opportunities for international cuisine, specialty retail, and multilingual services.',
    competitors: ['Ethnic restaurants', 'International markets', 'Community services', 'Small businesses']
  }
]