"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useWallet } from "@txnlab/use-wallet-react"
import { motion } from "framer-motion"
import { Wallet } from "lucide-react"
import ConnectWalletModal from "./connect-wallet-modal"

interface WalletAuthWrapperProps {
  children: React.ReactNode
}

export default function WalletAuthWrapper({ children }: WalletAuthWrapperProps) {
  const { activeAccount, wallets } = useWallet()
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Prevent hydration errors by only rendering after client-side hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  // If wallet is connected, render the children
  if (activeAccount) {
    return <>{children}</>
  }

  // If wallet is not connected, show the connect wallet message
  return (
    <div className="flex-grow pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center glass-dark p-10 rounded-xl w-full max-w-2xl"
        >
          <div className="bg-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Wallet size={40} className="text-accent" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Wallet Connection Required</h1>
          <p className="text-textgray/90 mb-8 text-lg">
            Please connect your wallet to access scholarship opportunities and manage your applications.
          </p>
          <motion.button
            onClick={() => setIsWalletModalOpen(true)}
            className="px-6 py-3 rounded-md bg-gradient-to-r from-accent/80 to-accent border border-accent/50 text-white font-medium transition-all duration-300 shadow-md hover:shadow-accent/30 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect Wallet
          </motion.button>
        </motion.div>
      </div>

      {/* Wallet Connection Modal */}
      <ConnectWalletModal wallets={wallets} isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} />
    </div>
  )
}

