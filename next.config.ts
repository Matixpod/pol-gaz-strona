import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    // Stara strona na Hostingerze odpowiadała także pod /index.html.
    return [{ source: '/index.html', destination: '/', permanent: true }]
  },
  async rewrites() {
    return {
      // /protokol to wierna kopia narzędzia właściciela (public/protokol-app). Nie zmieniać.
      beforeFiles: [{ source: '/protokol', destination: '/protokol-app/index.html' }],
      afterFiles: [],
      fallback: [],
    }
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      { source: '/fonts/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/protokol', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
      { source: '/protokol-app/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
    ]
  },
}

export default nextConfig
