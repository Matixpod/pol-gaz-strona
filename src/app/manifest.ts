import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'POL-GAZ Szczecin – serwis pieców gazowych',
    short_name: 'POL-GAZ',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#12245b',
    icons: [
      { src: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
