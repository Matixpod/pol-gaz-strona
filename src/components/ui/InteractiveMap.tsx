'use client'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix dla ikon w Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Współrzędne Szczecina
const SZCZECIN_COORDS: [number, number] = [53.4285, 14.5528]
const SERVICE_RADIUS = 60000 // 60km w metrach

export default function InteractiveMap() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Ładowanie mapy...</span>
      </div>
    )
  }

  return (
    <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg border">
      <MapContainer
        center={SZCZECIN_COORDS}
        zoom={9}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Marker dla Pol-Gaz */}
        <Marker position={SZCZECIN_COORDS}>
          <Popup>
            <div className="text-center p-2">
              <h3 className="font-bold text-blue-900 mb-2">Pol-Gaz Szczecin</h3>
              <p className="text-sm text-gray-700 mb-2">
                Rodzinny serwis kotłów od 1996 roku
              </p>
              <div className="text-sm">
                <p><strong>Tel:</strong> 601 418 645</p>
                <p><strong>Email:</strong> polgazszczecin@wp.pl</p>
              </div>
              <div className="mt-2">
                <a 
                  href="tel:601418645"
                  className="bg-blue-900 text-white px-3 py-1 rounded text-xs hover:bg-blue-800"
                >
                  Zadzwoń teraz
                </a>
              </div>
            </div>
          </Popup>
        </Marker>

        {/* Okrąg zasięgu działania */}
        <Circle
          center={SZCZECIN_COORDS}
          radius={SERVICE_RADIUS}
          pathOptions={{
            color: '#fbbf24',
            fillColor: '#fbbf24',
            fillOpacity: 0.1,
            weight: 2
          }}
        />
      </MapContainer>
    </div>
  )
}
