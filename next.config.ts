/** @type {import('next').NextConfig} */
const nextConfig = {
  // Wyłącz SSR dla komponentów z mapami
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig
