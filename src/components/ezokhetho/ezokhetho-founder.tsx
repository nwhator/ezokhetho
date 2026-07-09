'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const timeline = [
  { year: '2019', title: 'Fashion Degree', sub: 'Villioti Fashion Institute, Johannesburg' },
  { year: '2020', title: "Dean's Merit Award", sub: 'Excellence in Design & Innovation' },
  { year: '2021', title: 'Edcon Challenge', sub: 'Edcon Design Innovation Challenge Winner' },
  { year: '2022', title: 'SA Fashion Week', sub: '21 Steps Retail Programme' },
  { year: '2023', title: 'Milan Fashion Week', sub: 'International Debut' },
  { year: '2024', title: 'Ezokhetho', sub: 'Contemporary African Luxury House' },
]

export default function EzkoFounder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="founder"
      ref={ref}
      className="bg-[#F8F6F3] py-24 sm:py-32 lg:py-40"
    >
      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex items-center gap-3"
        >
          <div className="h-px w-8 bg-[#FF6B00]" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
            The Founder
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — Portrait + intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/ezokhetho/designer_1.jpg"
                alt="Mpumelelo Dhlamini — Founder & Creative Director, Ezokhetho"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Name tag overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="font-butler text-2xl font-light text-white">
                  Mpumelelo Dhlamini
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/60">
                  Founder & Creative Director
                </p>
              </div>
            </div>

            {/* Role chips */}
            <div className="flex flex-wrap gap-2">
              {['Founder', 'Creative Director', 'Storyteller', 'Visionary'].map((role) => (
                <span
                  key={role}
                  className="border border-zinc-200 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-zinc-600"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Heading + Timeline */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <h2 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
                Meet{' '}
                <em className="font-extralight italic">
                  Mpumelelo
                </em>
              </h2>
              <p className="mt-6 font-moderat text-[15px] leading-relaxed text-zinc-500">
                A storyteller, a visionary, a craftsman. Mpumelelo Dhlamini founded Ezokhetho to
                give voice to African identity through the medium of luxury fashion — honoring
                heritage while defining the future.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-0 h-full w-px bg-zinc-200" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.3 + index * 0.1,
                  }}
                  className="group relative flex gap-8 pb-8 last:pb-0"
                >
                  {/* Dot */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center">
                    <div className="h-3 w-3 rounded-full border-2 border-[#0033A0] bg-[#F8F6F3] transition-colors duration-300 group-hover:bg-[#0033A0]" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-0.5 pb-0 pt-1.5">
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
                      {item.year}
                    </span>
                    <h3 className="font-butler text-base font-medium text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-zinc-400">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
