import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import '@styles/globals.css'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import '@/styles/globals.css'
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
  authors: "Max Siokh and Vlad Ossas",
  description: "Вебсайт для проведення конференцій",

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
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
