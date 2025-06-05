import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kody Błędów Kotłów - Beretta, Junkers, Buderus, Vaillant | Pol-Gaz Szczecin',
  description: 'Znajdź kod błędu swojego kotła i dowiedz się jak go naprawić. Kody błędów Beretta, Junkers, Buderus, Vaillant, Unical, Saunier Duval. Serwis 601 418 645',
  keywords: [
    // Kody błędów ogólne
    'kody błędów kotłów',
    'błędy kotłów',
    'awarie kotłów',
    'diagnostyka kotłów',
    
    // Beretta błędy
    'błąd EA Beretta',
    'błąd EB Beretta',
    'błąd EC Beretta',
    'kody błędów Beretta',
    
    // Junkers błędy
    'błąd A1 Junkers',
    'błąd A6 Junkers',
    'błąd A7 Junkers',
    'kody błędów Junkers',
    
    // Buderus błędy
    'błąd 2P Buderus',
    'błąd 3P Buderus',
    'błąd 4P Buderus',
    'kody błędów Buderus',
    
    // Vaillant błędy
    'błąd F22 Vaillant',
    'błąd F28 Vaillant',
    'błąd F75 Vaillant',
    'kody błędów Vaillant',
    
    // Unical błędy
    'błąd E01 Unical',
    'błąd E02 Unical',
    'kody błędów Unical',
    
    // Saunier Duval błędy
    'błąd F1 Saunier Duval',
    'błąd F5 Saunier Duval',
    'kody błędów Saunier Duval',
    
    // Lokalizacja
    'naprawa kotłów Szczecin',
    'serwis kotłów Szczecin',
    'pomoc z kotłem Szczecin',
    
    // Rozwiązania
    'jak naprawić kocioł',
    'rozwiązanie błędu kotła',
    'naprawa błędów kotłów',
    'pomoc techniczna kotły'
  ].join(', '),
  
  openGraph: {
    title: 'Kody Błędów Kotłów - Pol-Gaz Szczecin',
    description: 'Znajdź kod błędu swojego kotła i dowiedz się jak go naprawić',
    url: 'https://polgaz-szczecin.pl/bledy-kotlow',
  },
}


export default function BledyKotlowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}