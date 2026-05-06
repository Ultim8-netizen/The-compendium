import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Compendium',
  description: 'A classified archive of deeply unnecessary human behavioral intelligence.',
  openGraph: {
    title: 'The Compendium',
    description: 'Enter if you have been cleared. Clearance takes 90 seconds.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}