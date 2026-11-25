import type { MetadataRoute } from 'next'
import { firma, dataAktualizacji } from '@/data/firma'
import { uslugi } from '@/data/uslugi'
import { marki } from '@/data/marki'
import { stronyKodow } from '@/data/bledy'

// /protokol celowo pominięty (narzędzie właściciela, noindex).
export default function sitemap(): MetadataRoute.Sitemap {
  const sciezki = [
    '/',
    ...uslugi.map((u) => `/${u.slug}/`),
    ...marki.map((m) => `/${m.slug}/`),
    '/bledy-kotlow/',
    ...stronyKodow.map((k) => `/bledy-kotlow/${k.slug}/`),
    '/obszar-dzialania/',
    '/o-firmie/',
    '/kontakt/',
    '/polityka-prywatnosci/',
    '/o-stronie/',
  ]
  return sciezki.map((s) => ({ url: `${firma.url}${s}`, lastModified: dataAktualizacji }))
}
