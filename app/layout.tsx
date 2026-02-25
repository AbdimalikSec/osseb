import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ossob Coffee',
  description: 'Experience the finest specialty coffee. Handpicked beans, artisanal roasting, and perfect brews at Ossob Coffee in Mogadishu.',
  generator: 'v0.app',
  // Favicon definitions removed
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
