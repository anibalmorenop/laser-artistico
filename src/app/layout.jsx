import './globals.css'

export const metadata = {
  title: 'Laser Artístico — Grabado Láser en Mármol, MDF y Acrílico',
  description: 'Especialistas en grabado láser de alta precisión en mármol, MDF y acrílico. Lápidas, columbarios, placas conmemorativas y trabajos personalizados en Venezuela, Colombia y EE.UU.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
