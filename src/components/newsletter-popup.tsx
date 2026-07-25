'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if the popup has been shown before
    const hasSeenPopup = localStorage.getItem('ezokhetho-newsletter-seen')
    
    if (!hasSeenPopup) {
      // Small delay before showing popup
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 5000) // Show after 5 seconds
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('ezokhetho-newsletter-seen', 'true')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic to handle newsletter subscription would go here
    setIsOpen(false)
    localStorage.setItem('ezokhetho-newsletter-seen', 'true')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-md bg-white overflow-hidden shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              <span className="sr-only">Close</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="p-8 sm:p-10 text-center">
              <h2 className="font-butler text-3xl font-medium text-zinc-900 mb-2">
                Join the <em className="font-extralight italic">Ezokhetho</em> family
              </h2>
              <p className="text-sm text-zinc-500 mb-8 font-moderat">
                Subscribe to our newsletter to receive updates on new collections, exclusive offers, and the latest in African luxury fashion.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 w-full flex-auto rounded-none border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="flex-none rounded-none bg-[#FF6B00] px-4 py-3 text-sm font-medium uppercase tracking-[0.1em] text-white hover:bg-[#e66000] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <button onClick={handleClose} className="mt-6 text-xs text-zinc-400 hover:text-zinc-600 uppercase tracking-widest font-medium">
                No thanks
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
