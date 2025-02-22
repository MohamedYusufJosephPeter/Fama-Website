import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone, Youtube, Facebook } from "lucide-react"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fama Makeover & Mehandi Studio",
  description: "Professional mehandi artist specializing in bridal mehandi, makeup, and online classes",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
      <header className="fixed top-0 left-0 right-0 bg-pink-100 p-4 z-50">
          <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img src="/Logo/Logo.jpg" alt="Logo" className="w-11 h-11 mr-2 rounded-full" />
              <Link href="/" className="text-4xl font-extrabold text-pink-800" style={{ fontFamily: 'cursive' }}>
                Fama Beautician
              </Link>
            </div>
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <Link href="/" className="text-pink-800 hover:text-pink-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-pink-800 hover:text-pink-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-pink-800 hover:text-pink-600">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-pink-800 hover:text-pink-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-pink-800 hover:text-pink-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto mt-32 px-4 min-h-[calc(100vh-theme(space.32)-theme(space.40))]">{children}</main>


        <footer className="bg-gradient-to-b from-pink-50 to-pink-100 mt-10">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-pink-800 mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919952566621"
                    className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +91 99525 66621
                  </a>
                  <a
                    href="mailto:Famamehandhi@gmail.com"
                    className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Famamehandhi@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-800 mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/fama_mehandhi_artist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@famacreation2105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fama-mehandi-artist-b07445326/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/kathija6?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-800 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/gallery/bridal-mehandi"
                      className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      Bridal Mehandi
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery/bridal-makeup" className="text-gray-600 hover:text-pink-600 transition-colors">
                      Bridal Makeup
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery/online-classes"
                      className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      Online Classes
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12 text-gray-600">
              2024 Fama Creation - Mehandi Artist & Beautician. All rights reserved.
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  )
}