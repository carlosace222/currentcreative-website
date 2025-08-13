import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const services = [
  { name: 'SEO & Local Search', href: '/services/seo-local-search' },
  { name: 'Paid Advertising', href: '/services/paid-advertising' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Analytics & Reporting', href: '/services/analytics-reporting' },
]

const serviceAreas = [
  { name: 'Nyack', href: '/service-areas/nyack' },
  { name: 'New City', href: '/service-areas/new-city' },
  { name: 'Pearl River', href: '/service-areas/pearl-river' },
  { name: 'White Plains', href: '/service-areas/white-plains' },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Accessibility', href: '/accessibility' },
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              Current Creative
            </Link>
            <p className="text-blue-100 mb-6">
              Transforming businesses in Rockland County and the Lower Hudson Valley 
              with data-driven digital marketing solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">123 Main Street, New City, NY 10956</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+18455551234" className="text-sm hover:text-blue-400 transition-colors">
                  (845) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:hello@currentcreative.ai" className="text-sm hover:text-blue-400 transition-colors">
                  hello@currentcreative.ai
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Mon-Fri 9am-6pm EST</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
              <p className="text-blue-100">Get digital marketing tips and local business insights.</p>
            </div>
            <div className="mt-6 lg:mt-0">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 flex-1 min-w-0"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2024 Current Creative AI. All rights reserved.</p>
          <p className="mt-1">Proudly serving Rockland County and the Lower Hudson Valley</p>
        </div>
      </div>
    </footer>
  )
}