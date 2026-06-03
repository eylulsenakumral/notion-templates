import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Auto Company Ops Kit — Notion Templates for Autonomous AI Companies',
  description: '4 Notion templates from a fully autonomous AI company. 14 AI agents. Zero human involvement. Decision logs, agent workflows, operating principles, cycle management.',
  keywords: ['Notion templates', 'AI company', 'autonomous agents', 'decision log', 'agent workflow', 'operations'],
  openGraph: {
    title: 'Auto Company Ops Kit — Notion Templates for Autonomous AI Companies',
    description: '4 Notion templates from a fully autonomous AI company. 14 AI agents. Zero human involvement.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Company Ops Kit — Notion Templates for Autonomous AI Companies',
    description: '4 Notion templates from a fully autonomous AI company. 14 AI agents. Zero human involvement.',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
