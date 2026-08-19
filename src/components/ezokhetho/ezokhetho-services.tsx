'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 'custom',
    title: 'Custom',
    description: 'Collaborate with Mpumelelo to customize an existing Ezokhetho design with unique details — one-of-a-kind pieces made exclusively for you.',
    href: '/services/commissions',
    icon: 'gem',
  },
  {
    id: 'ready-to-wear',
    title: 'Ready-to-Wear',
    description: 'Discover and shop Ezokhetho pieces online — designed, cut and finished in our atelier, ready to wear.',
    href: '/contact',
    icon: 'pen',
  },
]

const icons = {
  pen: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  ),
  gem: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 3h12l4 4v12l-4 4H6l-4-4V7l4-4z" />
      <path d="M12 3v18" />
      <path d="M6 7l6 6 6-6" />
      <path d="M6 17l6-6 6 6" />
    </svg>
  ),
}

export default function EzokhethoServices() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 sm:py-32 lg:py-40 bg-white"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl text-center mx-auto"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#FF6B00]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
              Our Services
            </span>
            <div className="h-px w-8 bg-[#FF6B00]" />
          </div>
          <h2 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Ezokhetho
            <br />
            <em className="font-extralight italic">Services</em>
          </h2>
          <p className="mt-6 font-moderat text-[15px] leading-relaxed text-zinc-500">
            Two ways to wear Ezokhetho — order a ready-to-wear piece from our range,
            or commission a custom creation made exclusively for you.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15 + index * 0.1,
              }}
              className="group flex flex-col gap-5 p-8 bg-white border border-zinc-100 hover:border-zinc-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center border border-zinc-200 transition-colors duration-300 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00]/5">
                {icons[service.icon as keyof typeof icons]}
              </div>

              {/* Title */}
              <h3 className="font-butler text-xl font-medium tracking-wide text-zinc-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-moderat text-[14px] leading-relaxed text-zinc-500 flex-1">
                {service.description}
              </p>

              {/* CTA Link */}
              <Link
                href={service.href}
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-[#0033A0] hover:text-[#FF6B00] transition-colors duration-300"
              >
                Enquire
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}