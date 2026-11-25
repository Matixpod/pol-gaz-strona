// Jedyne źródło danych o firmie. Treść, stopka i dane strukturalne czytają stąd.
// Fakty pochodzą od właściciela. Brakujące oznaczone TODO(właściciel).

export const firma = {
  nazwa: 'POL-GAZ Szczecin Wojciech Podporski',
  krotka: 'POL-GAZ Szczecin',
  wlasciciel: 'Wojciech Podporski',
  nip: '8521839815',
  rokZalozenia: 1994,
  telefon: '601 418 645',
  telefonHref: 'tel:+48601418645',
  telefonE164: '+48601418645',
  email: 'polgazszczecin@wp.pl',
  url: 'https://polgaz-szczecin.pl',
  miasto: 'Szczecin',
  wojewodztwo: 'zachodniopomorskie',
  promienKm: 70,
  dojazdSzczecinMin: 20,
  godziny: {
    dniRobocze: 'poniedziałek–piątek 8:00–18:00',
    // Skrót do nagłówka, przy numerze telefonu.
    krotko: 'pon.–pt. 8:00–18:00',
    weekend: 'soboty i niedziele: tylko awarie, po uzgodnieniu telefonicznym',
    otwarcie: '08:00',
    zamkniecie: '18:00',
  },
  ambasadorBerettaLata: [2019, 2020, 2021, 2025],
  // TODO(właściciel): adres profilu Google i Facebooka — trafi do linków i do sameAs.
  profilGoogle: '',
  facebook: '',
  // TODO(właściciel): rodzaj i numery uprawnień (gazowe, F-gaz) do sekcji „O firmie”.
  shapoWidgetId: 'shapo-widget-4c3efbbd82f017e5593f',
} as const

export const lataNaRynku = () => new Date().getFullYear() - firma.rokZalozenia

// „32 lata”, „35 lat”: odmiana zależna od liczby.
export const lataSlownie = () => {
  const n = lataNaRynku()
  const lata = n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14)
  return `${n} ${lata ? 'lata' : 'lat'}`
}

export const ambasadorLata = firma.ambasadorBerettaLata.join(', ')

// Czasy dojazdu poza Szczecinem są szacunkiem z odległości drogowej, nie gwarancją.
export const miejscowosci = [
  { nazwa: 'Police', miejscownik: 'w Policach', km: 16, min: 30 },
  { nazwa: 'Gryfino', miejscownik: 'w Gryfinie', km: 22, min: 35 },
  { nazwa: 'Goleniów', miejscownik: 'w Goleniowie', km: 36, min: 40 },
  { nazwa: 'Stargard', miejscownik: 'w Stargardzie', km: 38, min: 45 },
  { nazwa: 'Chojna', miejscownik: 'w Chojnie', km: 62, min: 65 },
  { nazwa: 'Myślibórz', miejscownik: 'w Myśliborzu', km: 68, min: 75 },
] as const

export const dataAktualizacji = '2026-11-24'
