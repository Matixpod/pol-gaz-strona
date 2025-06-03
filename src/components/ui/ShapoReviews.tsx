'use client'
import { useEffect } from 'react'

export default function ShapoReviews() {
  useEffect(() => {
    // Dynamiczne ładowanie skryptu Shapo
    const script = document.createElement('script')
    script.id = 'shapo-embed-js'
    script.type = 'text/javascript'
    script.src = 'https://cdn.shapo.io/js/embed.js'
    script.defer = true
    
    // Sprawdź czy skrypt już nie został załadowany
    if (!document.getElementById('shapo-embed-js')) {
      document.body.appendChild(script)
    }

    return () => {
      // Cleanup przy unmount
      const existingScript = document.getElementById('shapo-embed-js')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="w-full">
      <div id="shapo-widget-4c3efbbd82f017e5593f"></div>
    </div>
  )
}
