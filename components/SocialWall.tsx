'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Instagram, ExternalLink, Play } from 'lucide-react'

interface SocialPost {
  id: string
  platform: 'instagram' | 'tiktok'
  url: string
  thumbnail: string
  caption: string
  type: 'image' | 'video'
  likes: number
  comments: number
}

// Mock social media posts - replace with real API data
const mockPosts: SocialPost[] = [
  {
    id: '1',
    platform: 'instagram',
    url: 'https://instagram.com/p/example1',
    thumbnail: '/images/social/post1.jpg',
    caption: '5 Local SEO tips that increased our client\'s foot traffic by 200%! 📈',
    type: 'image',
    likes: 127,
    comments: 23,
  },
  {
    id: '2',
    platform: 'instagram',
    url: 'https://instagram.com/p/example2',
    thumbnail: '/images/social/post2.jpg',
    caption: 'Behind the scenes: Strategy session with a Nyack restaurant owner',
    type: 'video',
    likes: 89,
    comments: 15,
  },
  {
    id: '3',
    platform: 'instagram',
    url: 'https://instagram.com/p/example3',
    thumbnail: '/images/social/post3.jpg',
    caption: 'Case study results: How we helped this Pearl River business triple their online sales 🚀',
    type: 'image',
    likes: 156,
    comments: 31,
  },
]

export default function SocialWall() {
  const [hasConsented, setHasConsented] = useState(false)

  if (!hasConsented) {
    return (
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Follow Our Journey
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              See real results, behind-the-scenes content, and marketing tips from our social media.
              We respect your privacy and only load social content with your consent.
            </p>
            <Card className="p-8 max-w-md mx-auto">
              <Instagram className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Load Social Media Content</h3>
              <p className="text-sm text-slate-600 mb-6">
                This will load content from Instagram and may set cookies for analytics purposes.
              </p>
              <Button 
                onClick={() => setHasConsented(true)}
                className="w-full"
              >
                Load Social Content
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Follow Our Journey
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Get marketing tips, see client results, and go behind the scenes with Current Creative.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SocialPostCard post={post} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://instagram.com/currentcreativeai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <Instagram className="h-5 w-5" />
            Follow @currentcreativeai for more
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function SocialPostCard({ post }: { post: SocialPost }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative aspect-square bg-slate-200">
        {/* Placeholder for social media content */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600">
          <div className="text-center text-white">
            <Instagram className="h-12 w-12 mx-auto mb-2 opacity-80" />
            <p className="text-sm opacity-90">Social content placeholder</p>
          </div>
        </div>
        
        {post.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="h-12 w-12 text-white opacity-80" />
          </div>
        )}

        <div className="absolute top-2 right-2">
          <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            {post.platform === 'instagram' ? 'IG' : 'TT'}
          </span>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-slate-700 mb-3 line-clamp-2">
          {post.caption}
        </p>
        
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
          <span>❤️ {post.likes}</span>
          <span>💬 {post.comments}</span>
        </div>

        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          View on {post.platform === 'instagram' ? 'Instagram' : 'TikTok'}
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </Card>
  )
}