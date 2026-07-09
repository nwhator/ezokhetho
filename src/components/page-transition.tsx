'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

/**
 * Wraps page content with a smooth fade-up entrance animation.
 * Use this on inner page content (not the header/footer).
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
