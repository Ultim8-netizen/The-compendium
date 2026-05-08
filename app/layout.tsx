import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/theme'
import ThemeToggle from '@/components/ThemeToggle'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Compendium',
  description: 'A classified archive of deeply unnecessary human behavioral intelligence.',
  metadataBase: new URL('https://the-compendium-eight.vercel.app'),
  openGraph: {
    title: 'The Compendium',
    description: 'A classified archive of deeply unnecessary human behavioral intelligence.',
    type: 'website',
    url: 'https://the-compendium-eight.vercel.app',
    siteName: 'The Compendium',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Compendium',
    description: 'A classified archive of deeply unnecessary human behavioral intelligence.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="gold"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        {/* Flash-prevention: apply saved theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            try {
              var t = localStorage.getItem('compendium-theme');
              if (t) document.documentElement.setAttribute('data-theme', t);
            } catch(e) {}
          })();
        `}} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}