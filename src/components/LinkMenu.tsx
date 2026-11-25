'use client'

import { usePathname } from 'next/navigation'

// Link menu z oznaczeniem bieżącej strony (aria-current). Bez JavaScriptu działa jak zwykły link.
// Zwykłe <a> zamiast <Link>: pełne przeładowanie zamyka menu mobilne na <details>.
export default function LinkMenu({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  const sciezka = usePathname()
  const aktywny = href === '/' ? sciezka === '/' : sciezka === href || sciezka === href.replace(/\/$/, '') || sciezka.startsWith(href)
  return (
    <a href={href} className={className} aria-current={aktywny ? 'page' : undefined}>
      {children}
    </a>
  )
}
