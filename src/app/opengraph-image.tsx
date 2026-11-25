import { ImageResponse } from 'next/og'
import { firma } from '@/data/firma'

export const alt = 'POL-GAZ Szczecin – serwis pieców i kotłów gazowych'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#12245b', color: '#fff', padding: 72 }}>
        <div style={{ display: 'flex', fontSize: 34, color: '#ffc61a', fontWeight: 700 }}>POL-GAZ Szczecin · od {firma.rokZalozenia} roku</div>
        <div style={{ display: 'flex', fontSize: 82, fontWeight: 700, lineHeight: 1.05, maxWidth: 950 }}>Serwis pieców i kotłów gazowych</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', background: '#ffc61a', color: '#0b1738', fontSize: 64, fontWeight: 700, padding: '14px 28px', borderRadius: 6 }}>{firma.telefon}</div>
          <div style={{ display: 'flex', fontSize: 30, color: '#d5dcf0' }}>Ambasador marki Beretta</div>
        </div>
      </div>
    ),
    size,
  )
}
