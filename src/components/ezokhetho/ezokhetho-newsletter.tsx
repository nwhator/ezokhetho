'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function EzkoNewsletter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section
      id="newsletter"
      ref={ref}
      className="relative overflow-hidden bg-[#0033A0] py-24 text-white sm:py-32"
    >
      {/* Decorative subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '15px 15px',
        }}
      />

      <div className="container relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#FF6B00]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
              Stay Connected
            </span>
            <div className="h-px w-8 bg-[#FF6B00]" />
          </div>

          {/* Heading */}
          <h2 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Join the{' '}
            <em className="font-extralight italic text-white/70">Journey</em>
          </h2>

          {/* Subtext */}
          <p className="max-w-md font-moderat text-[15px] leading-relaxed text-white/80">
            Receive exclusive collection launches, stories and behind-the-scenes updates from
            Ezokhetho.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-10 w-full max-w-md"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 border border-white/20 bg-white/10 px-5 py-4 font-moderat text-sm text-white placeholder-white/40 outline-none transition-all focus:border-white focus:bg-white/20"
              />
              <button
                id="newsletter-submit"
                type="submit"
                className="group flex items-center justify-center gap-2 bg-[#FF6B00] px-7 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-[#0033A0]"
              >
                Subscribe
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B00]">
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="font-butler text-lg font-light text-white">
                Welcome to the journey.
              </p>
              <p className="text-sm text-white/60">We&apos;ll be in touch soon.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Privacy note */}
        {!submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 text-[11px] text-white/50"
          >
            No spam. Unsubscribe anytime. View our{' '}
            <a href="/privacy" className="underline text-white/65 transition-colors hover:text-[#FF6B00]">
              Privacy Policy
            </a>
            .
          </motion.p>
        )}
      </div>
    </section>
  )
}
