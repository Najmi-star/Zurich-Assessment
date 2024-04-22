import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from './StoreProvider'
import NextAuthProvider from '@/app/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zurich Assesment',
  description: ''
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang='en'>
        <NextAuthProvider>
          <body className={inter.className}>{children}</body>
        </NextAuthProvider>
      </html>
    </StoreProvider>
  )
}
