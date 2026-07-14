'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
}

export default function EzokhethoHero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/ezokhetho/hero.jpg"
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
      </video>

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Content */}
      <div className="relative container flex flex-col items-center justify-center gap-8 py-32 text-center text-white">
        {/* Pre-title */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3"
        >
          <div className="h-px w-12 bg-[#FF6B00]" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            Est. Johannesburg
          </span>
          <div className="h-px w-12 bg-[#FF6B00]" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl font-butler text-5xl font-light leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Contemporary
          <br />
          <em className="font-extralight italic text-white/80">African</em>{' '}
          Luxury Fashion
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-md font-moderat text-base font-light leading-relaxed text-white/70 sm:text-lg"
        >
          Fashion that carries stories of heritage,
          <br />
          identity and craftsmanship.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={0.45}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/collections/all"
            id="hero-explore-cta"
            className="group flex items-center gap-3 bg-[#FF6B00] px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#e55f00] hover:gap-5"
          >
            Explore Collection
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="#brand-story"
            id="hero-story-cta"
            className="flex items-center gap-3 border border-white/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 hover:text-white"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}

