'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function EzkoPhilosophy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Deep texture gradient — CSS-only since no philosophy bg image was generated */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0033A010_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#FF6B0008_0%,_transparent_70%)]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Large decorative quote mark */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-butler text-[280px] font-bold leading-none text-white/[0.025] select-none"
      >
        &ldquo;
      </div>

      {/* Content */}
      <div className="relative container flex flex-col items-center py-28 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="h-px w-8 bg-[#FF6B00]" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00]">
            Our Philosophy
          </span>
          <div className="h-px w-8 bg-[#FF6B00]" />
        </motion.div>

        {/* Main quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="max-w-3xl"
        >
          <p className="font-butler text-3xl font-light leading-[1.3] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            &ldquo;Fashion is our medium
            <br />
            <em className="font-extralight italic text-white/70">for storytelling.</em>&rdquo;
          </p>
          <cite className="mt-8 block text-xs font-medium uppercase not-italic tracking-[0.3em] text-white/30">
            — Mpumelelo Dhlamini, Founder of Ezokhetho
          </cite>
        </motion.blockquote>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mt-16 h-px w-32 origin-center bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent"
        />
      </div>
    </section>
  )
}
