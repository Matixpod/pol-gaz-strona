import type { MetadataRoute } from 'next'
import { firma } from '@/data/firma'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${firma.url}/sitemap.xml`,
  }
}
