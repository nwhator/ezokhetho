'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function EzkoBrandStory() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="brand-story"
      ref={ref}
      className="container py-24 sm:py-32 lg:py-40"
    >
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Image — Left */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/ezokhetho/brand-story.jpg"
              alt="Ezokhetho craftsmanship — African fabric artisanship"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Decorative border frame */}
          <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-[#FF6B00]" />
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-[#0033A0]" />
        </motion.div>

        {/* Content — Right */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-8"
        >
          {/* Section label */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#FF6B00]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
              Our Story
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-butler text-4xl font-light leading-[1.15] tracking-tight text-zinc-900 sm:text-5xl lg:text-5xl">
            A Vehicle for
            <br />
            <em className="italic font-extralight">Storytelling</em>
          </h2>

          {/* Body */}
          <div className="flex flex-col gap-5 font-moderat text-[15px] leading-relaxed text-zinc-600">
            <p>
              Ezokhetho is derived from the isiZulu language by founder{' '}
              <strong className="font-medium text-zinc-900">Mpumelelo Dhlamini</strong> and his
              mother. Founded after graduating from The Villioti Fashion Institute, the brand was
              created as a vehicle for storytelling through clothing.
            </p>
            <p>
              Following recognition including the Dean&apos;s Merit Award, the Edcon Design
              Innovation Challenge, SA Fashion Week&apos;s 21 Steps Retail Programme and
              showcasing in Milan Fashion Week, Ezokhetho has grown into a contemporary African
              luxury brand.
            </p>
            <p>
              Today every collection reflects African identity while celebrating those who came
              before us.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-zinc-100" />

          {/* Pull quote */}
          <blockquote className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-[#FF6B00]" />
            <p className="font-butler text-lg font-light italic leading-snug text-zinc-900 sm:text-xl">
              &ldquo;Meticulously chosen by those
              <br />
              who came before us.&rdquo;
            </p>
            <cite className="mt-3 block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 not-italic">
              — Mpumelelo Dhlamini, Founder
            </cite>
          </blockquote>

          {/* Accolades row */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            {[
              { label: "Dean's Merit\nAward", icon: '🏆' },
              { label: 'SA Fashion\nWeek', icon: '✦' },
              { label: 'Milan Fashion\nWeek', icon: '★' },
            ].map(({ label, icon }) => (
              <div key={label} className="flex flex-col gap-1.5 text-center">
                <span className="text-lg">{icon}</span>
                <span
                  className="whitespace-pre-line text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-400"
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
