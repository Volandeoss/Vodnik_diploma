import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import '@styles/globals.css'
import { Main } from 'next/document'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Nuwm Conf",
  description: "Dev Max S. and Vlad O.",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
  
          {children}
   
        <Footer />
      </body>
    </html>
  )
}
