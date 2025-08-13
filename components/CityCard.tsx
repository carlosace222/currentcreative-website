import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

interface City {
  slug: string
  name: string
  county: string
  description: string
  population: string
}

interface CityCardProps {
  city: City
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{city.name}</h3>
          <p className="text-sm text-slate-600">{city.county}</p>
        </div>
        <MapPin className="h-5 w-5 text-blue-600" />
      </div>
      <p className="text-slate-600 mb-4">{city.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">Population: {city.population}</span>
        <Link href={`/service-areas/${city.slug}`}>
          <Button variant="link" className="p-0 h-auto font-semibold">
            View Details →
          </Button>
        </Link>
      </div>
    </Card>
  )
}