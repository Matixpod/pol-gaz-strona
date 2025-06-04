import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kody Błędów Kotłów - Beretta, Junkers, Buderus, Vaillant | Pol-Gaz Szczecin',
  description: 'Znajdź kod błędu swojego kotła i dowiedz się jak go naprawić. Kody błędów Beretta, Junkers, Buderus, Vaillant, Unical, Saunier Duval. Serwis 601 418 645',
  keywords: 'kody błędów kotłów, EA beretta, F28 vaillant, A1 junkers, błędy kotłów szczecin'
}

export default function BledyKotlowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
