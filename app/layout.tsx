import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Compendium',
  description: 'A classified archive of deeply unnecessary human behavioral intelligence.',
  metadataBase: new URL('https://the-compendium-eight.vercel.app'),
  openGraph: {
    title: 'The Compendium',
    description: 'Enter if you have been cleared. Clearance takes 90 seconds.',
    type: 'website',
    url: 'https://the-compendium-eight.vercel.app',
    siteName: 'The Compendium',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Compendium',
    description: 'Enter if you have been cleared. Clearance takes 90 seconds.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}