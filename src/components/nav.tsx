"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useWallet } from "@txnlab/use-wallet-react"
import ConnectWalletModal from "./connect-wallet-modal"

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const pathname = usePathname()
  const { wallets, activeAccount } = useWallet()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/find-scholarship", label: "Find" },
    { href: "/give-scholarship", label: "Give" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const handleConnectWallet = () => {
    setIsWalletModalOpen(true)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-2 backdrop-blur-xl bg-gradient-to-r from-black/70 via-primary/20 to-black/70 border-b border-white/10"
          : "py-4 bg-transparent"
      }`}
    >
      {/* Decorative elements for the navbar */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 left-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -top-10 right-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center z-50 relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="relative h-12 w-12 mr-3 overflow-hidden rounded-full border-2 border-white/20 group-hover:border-accent/50 transition-all duration-300 shadow-lg shadow-accent/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/887deb8b-5963-4349-9e20-b1c2ebb5ea3d.png-sjof72SPeN9ODDE2aODvKK4RzrQvZz.jpeg"
                  alt="Sarasvathi Logo"
                  width={48}
                  height={48}
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-2xl font-bold flex flex-col leading-tight">
                  <span className="text-white group-hover:text-accent transition-colors duration-300">SarasVathi</span>
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="relative px-6 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 shadow-lg">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link relative px-1 py-1 ${
                      pathname === link.href ? "text-accent" : "text-textgray hover:text-white"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>
            <motion.button
              onClick={handleConnectWallet}
              className="ml-6 px-5 py-2 rounded-md bg-gradient-to-r from-accent/80 to-accent border border-accent/50 text-white font-medium transition-all duration-300 shadow-md hover:shadow-accent/30 transform hover:-translate-y-1 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">
                {activeAccount
                  ? `${activeAccount.address.slice(0, 4)}...${activeAccount.address.slice(-4)}`
                  : "Connect Wallet"}
              </span>
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-textgray focus:outline-none z-50 w-10 h-10 flex items-center justify-center bg-black/30 backdrop-blur-md rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-0 z-40 bg-gradient-to-b from-black/90 to-primary/40 flex flex-col items-center justify-center"
          >
            {/* Decorative elements for mobile menu */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-20 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="relative z-10 w-full max-w-sm mx-auto px-8">
              <div className="flex flex-col items-center space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className={`block text-center text-xl py-3 px-6 rounded-lg backdrop-blur-sm ${
                        pathname === link.href
                          ? "text-accent bg-white/5 font-bold"
                          : "text-white hover:text-accent hover:bg-white/5"
                      } transition-all duration-300`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  onClick={handleConnectWallet}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-4 w-full py-4 px-5 rounded-md bg-gradient-to-r from-accent/80 to-accent border border-accent/50 text-white font-medium transition-all duration-300 shadow-md hover:shadow-accent/30"
                >
                  <span className="relative z-10">
                    {activeAccount
                      ? `${activeAccount.address.slice(0, 4)}...${activeAccount.address.slice(-4)}`
                      : "Connect Wallet"}
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wallet Connection Modal */}
      <ConnectWalletModal wallets={wallets} isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} />
    </header>
  )
}

export default Nav

