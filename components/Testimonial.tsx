import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  rating: number
  image?: string
}

export default function Testimonial({ quote, author, role, rating, image }: TestimonialProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <blockquote className="text-slate-700 mb-4 italic">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        {image ? (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full mr-3"
          />
        ) : (
          <div className="w-12 h-12 bg-blue-100 rounded-full mr-3 flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-slate-600">{role}</div>
        </div>
      </div>
    </Card>
  )
}