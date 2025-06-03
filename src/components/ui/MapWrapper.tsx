'use client'
import dynamic from 'next/dynamic'

// Dynamiczny import mapy z wyłączonym SSR
const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
      <span className="text-gray-500">Ładowanie mapy...</span>
    </div>
  )
})

export default function MapWrapper() {
  return <InteractiveMap />
}
