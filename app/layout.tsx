
import Navbar from '@/components/layout/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/footer'
import { ThemeProvider } from '@/providers/theme'
import React from 'react'
import PageSession from '@/components/layout/Page'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'DolinShop',
  description: 'The easiest way to buy and sell online',
}

type props = {
  children: React.ReactNode,
  session: any,
}

export default function RootLayout({
  children, session,
}:props) {

  return (
    <html lang="en">
      <body className={`${inter.className} text-muted-foreground`}>
        <PageSession session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="container min-h-screen mt-24 lg:mt-28">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </PageSession>
      </body>
    </html>
  )
}
