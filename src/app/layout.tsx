import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AGENTOU — Resultados em Dias, Não Meses',
  description: 'Automatizamos o que te faz perder tempo. Você foca no que gera dinheiro. Soluções de IA para PMEs brasileiras.',
  openGraph: {
    title: 'AGENTOU — Resultados em Dias, Não Meses',
    description: 'Automatizamos o que te faz perder tempo. Você foca no que gera dinheiro.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
