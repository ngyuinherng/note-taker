import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Note Taker',
  description: 'Capture your thoughts, stay organized',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
