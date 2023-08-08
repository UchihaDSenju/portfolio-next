import { Navbar, Footer } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'This is my own Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="background-theme">
        <div className="main-page bg-[#2A2C34] mx-11">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
