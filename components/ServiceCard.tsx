import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface Service {
  slug: string
  title: string
  description: string
  icon: LucideIcon
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow group border-2 hover:border-blue-100">
      <div className="mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
          <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-slate-600 mb-4">{service.description}</p>
      <Link href={`/services/${service.slug}`}>
        <Button variant="link" className="p-0 h-auto font-semibold">
          Learn More →
        </Button>
      </Link>
    </Card>
  )
}