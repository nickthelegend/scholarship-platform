import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Nav from "@/components/nav"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SarasVathi - Blockchain Education Platform",
  description: "Empowering education through blockchain technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-darkbg text-white min-h-screen`}>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

function Footer() {
  return (
    <footer className="bg-darkbg/80 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Saras</span>
              <span className="text-accent">Vathi</span>
            </h3>
            <p className="text-textgray/90 mb-4">Empowering education through blockchain technology.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-textgray hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/find-scholarship" className="text-textgray hover:text-white transition-colors">
                  Find Scholarship
                </a>
              </li>
              <li>
                <a href="/give-scholarship" className="text-textgray hover:text-white transition-colors">
                  Give Scholarship
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-textgray hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-textgray hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-textgray hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-textgray hover:text-accent transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-textgray hover:text-accent transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-textgray hover:text-accent transition-colors">
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M18.93 5.34a16.89 16.89 0 00-4.07-1.23c-.03 0-.05.01-.07.03-.17.3-.37.7-.5 1.01a15.72 15.72 0 00-4.57 0c-.14-.32-.34-.71-.51-1.01-.02-.02-.04-.03-.07-.03a16.89 16.89 0 00-4.07 1.23c-.01 0-.03.01-.04.02-2.59 3.77-3.3 7.45-2.95 11.08 0 .02.01.04.03.05a16.95 16.95 0 005.04 2.52c.03 0 .06-.01.07-.03.39-.52.74-1.07 1.03-1.65.02-.04 0-.08-.04-.09-.54-.2-1.06-.44-1.56-.72-.04-.02-.04-.08-.01-.11.1-.08.21-.16.31-.24.02-.01.04-.02.06-.01 3.44 1.54 7.16 1.54 10.55 0 .02-.01.05 0 .06.01.1.08.2.16.31.24.04.03.03.09-.01.11-.5.28-1.02.52-1.56.72-.04.01-.05.06-.04.09.3.58.65 1.13 1.03 1.65.01.02.04.03.07.03a16.9 16.9 0 005.04-2.52c.02-.01.03-.03.03-.05.42-4.27-.7-7.92-2.96-11.08-.01-.01-.02-.02-.04-.02zM8.56 14.49c-.99 0-1.8-.9-1.8-2 0-1.11.8-2 1.8-2 1.01 0 1.82.9 1.8 2 0 1.11-.8 2-1.8 2zm6.6 0c-.99 0-1.8-.9-1.8-2 0-1.11.8-2 1.8-2 1.01 0 1.82.9 1.8 2 0 1.11-.8 2-1.8 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-textgray/70">
          <p>&copy; {new Date().getFullYear()} SarasVathi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

