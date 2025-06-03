import { MetadataRoute } from 'next'
import servicesData from '@/data/services.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pol-gaz.szczecin.pl'
  
  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/serwis/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/uslugi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...servicePages,
  ]
}
