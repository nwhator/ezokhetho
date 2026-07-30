'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const POPUP_KEY = 'ezokhetho-popup'
const SUBSCRIBED_KEY = 'ezokhetho-subscribed'

function shouldShow(): boolean {
  if (typeof window === 'undefined') return false
  const subscribed = localStorage.getItem(SUBSCRIBED_KEY)
  if (subscribed === 'true') return false
  const lastSeen = localStorage.getItem(POPUP_KEY)
  if (!lastSeen) return true
  const today = new Date().toDateString()
  return lastSeen !== today
}

function markSeen() {
  localStorage.setItem(POPUP_KEY, new Date().toDateString())
}

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (shouldShow()) {
      const timer = setTimeout(() => setIsOpen(true), 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    markSeen()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem(SUBSCRIBED_KEY, 'true')
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-md bg-white shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center bg-white/90 hover:bg-white transition-colors"
            >
              <span className="sr-only">Close</span>
              <svg className="h-4 w-4 text-zinc-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
              <Image
                src="/images/cover/Mapetla Ext. '27.jpg"
                alt="Mapetla Ext. '27"
                fill
                className="object-cover object-top"
                sizes="(max-width: 448px) 100vw, 448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 text-center">
              <h2 className="font-butler text-3xl font-medium text-zinc-900 mb-2">
                Join the <em className="font-extralight italic">Ezokhetho</em> family
              </h2>
              <p className="text-sm text-zinc-500 mb-7 font-moderat leading-relaxed">
                Subscribe to our newsletter to receive updates on new collections, exclusive offers, and the latest in African luxury fashion.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  id="popup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="w-full bg-[#0033A0] px-4 py-3 text-sm font-medium uppercase tracking-[0.1em] text-white hover:bg-[#002a8a] focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:ring-offset-2 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <button
                onClick={handleClose}
                className="mt-5 text-xs text-zinc-400 hover:text-zinc-600 uppercase tracking-widest font-medium transition-colors"
              >
                No thanks
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
