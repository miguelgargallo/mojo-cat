import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mojo CAT - Primers al món en educar amb IA',
  description: 'Integració vertical de Inteligencia Artificial al teu negoci',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
