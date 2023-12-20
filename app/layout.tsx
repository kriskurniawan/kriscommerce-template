import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { METADATA } from '../common/constant/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: METADATA.title + METADATA.bTitle,
  description: METADATA.description,
  keywords: METADATA.keywords,
  authors: {
    name: METADATA.author,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
