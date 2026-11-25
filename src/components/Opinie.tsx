'use client'

import { useEffect, useRef } from 'react'
import { firma } from '@/data/firma'

// Opinie z Google przez widżet Shapo. Skrypt doczytuje się dopiero, gdy sekcja zbliża się do ekranu.
// TODO(właściciel): po podaniu adresu profilu Google dodać link „Zobacz wszystkie opinie w Google”
// i rozważyć zastąpienie widżetu kilkoma opiniami w HTML.
export default function Opinie() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obserwator = new IntersectionObserver(
      (wpisy) => {
        if (!wpisy.some((w) => w.isIntersecting)) return
        obserwator.disconnect()
        if (document.getElementById('shapo-embed-js')) return
        const s = document.createElement('script')
        s.id = 'shapo-embed-js'
        s.src = 'https://cdn.shapo.io/js/embed.js'
        s.defer = true
        document.body.appendChild(s)
      },
      { rootMargin: '400px' },
    )
    obserwator.observe(el)
    return () => obserwator.disconnect()
  }, [])

  return (
    <section className="sekcja" id="opinie">
      <div className="kontener">
        <h2 className="h2">Opinie klientów z Google</h2>
        <div ref={ref} className="mt-8 min-h-[330px] md:min-h-[362px]">
          <div id={firma.shapoWidgetId} />
        </div>
      </div>
    </section>
  )
}
