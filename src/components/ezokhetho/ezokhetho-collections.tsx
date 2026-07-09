'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import optimizedMappings from '@/data/optimized_mappings.json'

const collections = [
  {
    id: 'entathakusa',
    handle: 'entathakusa',
    headline: 'Entathakusa',
    subtitle: 'Robb Report Gala & SAMW \'26',
    description: optimizedMappings.collections.entathakusa.desc,
    image: optimizedMappings.collections.entathakusa.images[0] || '/images/ezokhetho/khumbulekhaya.jpg',
    imageAlt: 'Entathakusa campaign by Ezokhetho',
    accent: '#0033A0',
  },
  {
    id: 'zodwa',
    handle: 'zodwa',
    headline: 'ZODWA',
    subtitle: 'Signature Tailoring \'25',
    description: optimizedMappings.collections.zodwa.desc,
    image: optimizedMappings.collections.zodwa.images[0] || '/images/ezokhetho/ngithwale.jpg',
    imageAlt: 'Zodwa collection by Ezokhetho',
    accent: '#FF6B00',
  },
  {
    id: 'ngithwale',
    handle: 'ngithwale',
    headline: 'Ngithwale',
    subtitle: 'Carry Me \'24',
    description: optimizedMappings.collections.ngithwale.desc,
    image: optimizedMappings.collections.ngithwale.images[0] || '/images/ezokhetho/ngithwale.jpg',
    imageAlt: 'Ngithwale — Carry Me collection by Ezokhetho',
    accent: '#0033A0',
  },
  {
    id: 'kwa-suka-sukela',
    handle: 'kwa-suka-sukela',
    headline: 'Kwa-suka-sukela',
    subtitle: 'SAMW Show \'24',
    description: optimizedMappings.collections['kwa-suka-sukela'].desc,
    image: optimizedMappings.collections['kwa-suka-sukela'].images[0] || '/images/ezokhetho/izimbokodo.jpg',
    imageAlt: 'Kwa-suka-sukela collection by Ezokhetho',
    accent: '#FF6B00',
  },
  {
    id: 'inganekwane',
    handle: 'inganekwane',
    headline: 'Inganekwane',
    subtitle: 'Woven Stories \'23',
    description: optimizedMappings.collections.inganekwane.desc,
    image: optimizedMappings.collections.inganekwane.images[0] || '/images/ezokhetho/khumbulekhaya.jpg',
    imageAlt: 'Inganekwane collection by Ezokhetho',
    accent: '#0033A0',
  },
  {
    id: 'umkhathizwe',
    handle: 'umkhathizwe',
    headline: 'Umkhathizwe',
    subtitle: 'The Horizon \'23 (Lagos FW)',
    description: optimizedMappings.collections.umkhathizwe.desc,
    image: optimizedMappings.collections.umkhathizwe.images[0] || '/images/ezokhetho/ngithwale.jpg',
    imageAlt: 'Umkhathizwe collection by Ezokhetho',
    accent: '#FF6B00',
  },
  {
    id: 'khumbulekhaya',
    handle: 'khumbulekhaya',
    headline: 'Khumbulekhaya',
    subtitle: 'Remember Home \'22',
    description: optimizedMappings.collections.khumbulekhaya.desc,
    image: optimizedMappings.collections.khumbulekhaya.images[0] || '/images/ezokhetho/khumbulekhaya.jpg',
    imageAlt: 'Khumbulekhaya — Remember Home collection by Ezokhetho',
    accent: '#0033A0',
  },
  {
    id: 'izimbokodo',
    handle: 'izimbokodo',
    headline: 'Izimbokodo',
    subtitle: 'Strength of Stone \'22',
    description: optimizedMappings.collections.izimbokodo.desc,
    image: optimizedMappings.collections.izimbokodo.images[0] || '/images/ezokhetho/izimbokodo.jpg',
    imageAlt: 'Izimbokodo collection by Ezokhetho',
    accent: '#FF6B00',
  },
  {
    id: 'sophiatown',
    handle: 'sophiatown',
    headline: 'Sophiatown',
    subtitle: 'Golden Era \'21',
    description: optimizedMappings.collections.sophiatown.desc,
    image: optimizedMappings.collections.sophiatown.images[0] || '/images/ezokhetho/ngithwale.jpg',
    imageAlt: 'Sophiatown collection by Ezokhetho',
    accent: '#0033A0',
  }
]

function CollectionBlock({
  collection,
  index,
}: {
  collection: (typeof collections)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['4%', '-4%'])

  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className="grid min-h-[90vh] grid-cols-1 items-center lg:grid-cols-2"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`relative h-[60vh] overflow-hidden lg:h-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src={collection.image}
            alt={collection.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`flex flex-col justify-center gap-7 px-8 py-16 lg:px-16 xl:px-24 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
      >
        {/* Collection number */}
        <span
          className="font-butler text-[80px] font-light leading-none text-zinc-100"
          aria-hidden
        >
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </span>

        {/* Label */}
        <div className="flex items-center gap-3 -mt-8">
          <div className="h-px w-8" style={{ backgroundColor: collection.accent }} />
          <span
            className="text-xs font-medium uppercase tracking-[0.25em]"
            style={{ color: collection.accent }}
          >
            Collection
          </span>
        </div>

        {/* Headline */}
        <div>
          <h2 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-5xl xl:text-6xl">
            {collection.headline}
          </h2>
          <p className="mt-2 font-butler text-lg font-extralight italic text-zinc-400">
            — {collection.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="max-w-md font-moderat text-[15px] leading-relaxed text-zinc-500">
          {collection.description}
        </p>

        {/* CTA */}
        <Link
          href={`/collections/${collection.handle}`}
          id={`collection-cta-${collection.id}`}
          className="group mt-2 flex w-fit items-center gap-3 border-b border-zinc-300 pb-2 text-sm font-medium uppercase tracking-[0.15em] text-zinc-900 transition-all duration-300 hover:border-[#0033A0] hover:text-[#0033A0]"
        >
          Explore Collection
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  )
}

export default function EzkoCollections() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="collections" className="overflow-hidden">
      {/* Section header */}
      <div className="container py-20 sm:py-24" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#FF6B00]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
                Our Collections
              </span>
            </div>
            <h2 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Stories we
              <br />
              <em className="font-extralight italic">wear</em>
            </h2>
          </div>
          <Link
            href="/collections/all"
            id="all-collections-link"
            className="group hidden items-center gap-2 text-sm uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-[#0033A0] lg:flex"
          >
            View all collections
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Collection blocks */}
      <div className="divide-y divide-zinc-100">
        {collections.map((collection, index) => (
          <CollectionBlock key={collection.id} collection={collection} index={index} />
        ))}
      </div>
    </section>
  )
}
