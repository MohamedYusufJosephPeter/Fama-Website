import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fama Creation - Mehandi Artist & Beautician",
  description: "Professional mehandi artist specializing in bridal mehandi, makeup, and online classes",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-pink-100 p-4">
          <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="text-2xl font-bold text-pink-800">
              Fama Creation
            </Link>
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
        <main className="container mx-auto mt-8 px-4">{children}</main>
        <footer className="bg-pink-100 mt-8 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-pink-800 mb-4">Contact Us</h3>
                <div className="space-y-2">
                  <a href="tel:+919952566621" className="flex items-center gap-2 text-gray-600 hover:text-pink-600">
                    <Phone className="w-4 h-4" />
                    +91 99525 66621
                  </a>
                  <a
                    href="mailto:Famamehandhi@gmail.com"
                    className="flex items-center gap-2 text-gray-600 hover:text-pink-600"
                  >
                    <Mail className="w-4 h-4" />
                    Famamehandhi@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-800 mb-4">Follow Us</h3>
                <div className="space-y-2">
                  <a
                    href="https://www.instagram.com/fama_mehandhi_artist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-pink-600"
                  >
                    <Instagram className="w-4 h-4" />
                    @fama_mehandhi_artist
                  </a>
                  <a
                    href="https://www.youtube.com/@famacreation2105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-pink-600"
                  >
                    <Youtube className="w-4 h-4" />
                    Fama Creation
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fama-mehandi-artist-b07445326/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-pink-600"
                  >
                    <Linkedin className="w-4 h-4" />
                    Fama Mehandi Artist
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 text-gray-600">
              © 2024 Fama Creation - Mehandi Artist & Beautician. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'