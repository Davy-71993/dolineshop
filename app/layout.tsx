import Navbar from '@/components/layout/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/footer'
import { ThemeProvider } from '@/providers/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DolinShop',
  description: 'The easiest way to buy and sell online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-muted-foreground`}>
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
      </body>
    </html>
  )
}
