'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ZoomIn, ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'

const products = [
  {
    id: 'ngithwale-structured-coat',
    name: 'Structural Coat',
    collection: 'Ngithwale',
    price: 'R 8,500',
    image: '/images/fashion/coat.jpg',
    href: '/products/structural-coat',
  },
  {
    id: 'izimbokodo-draped-jacket',
    name: 'Draped Jacket',
    collection: 'Izimbokodo',
    price: 'R 6,200',
    image: '/images/fashion/jacket.jpg',
    href: '/products/draped-jacket',
  },
  {
    id: 'khumbulekhaya-wide-trousers',
    name: 'Wide-leg Trousers',
    collection: 'Khumbulekhaya',
    price: 'R 3,800',
    image: '/images/fashion/jean.jpg',
    href: '/products/wide-leg-trousers',
  },
  {
    id: 'ngithwale-tshirt',
    name: 'Signature Tee',
    collection: 'Ngithwale',
    price: 'R 1,950',
    image: '/images/fashion/tshirt.jpg',
    href: '/products/signature-tee',
  },
  {
    id: 'izimbokodo-c1',
    name: 'Editorial Piece',
    collection: 'Izimbokodo',
    price: 'R 7,800',
    image: '/images/fashion/c1.jpg',
    href: '/products/editorial-piece',
  },
  {
    id: 'khumbulekhaya-shoes',
    name: 'Heritage Shoes',
    collection: 'Khumbulekhaya',
    price: 'R 4,500',
    image: '/images/fashion/shoes.jpg',
    href: '/products/heritage-shoes',
  },
]

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [wished, setWished] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.1 }}
      className="group relative flex flex-col gap-4"
      id={`product-card-${product.id}`}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-50">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.collection} by Ezokhetho`}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Overlay actions */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/20 group-hover:opacity-100">
          <Link
            href={product.href}
            className="flex items-center gap-2 bg-white px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-900 transition-colors hover:bg-[#0033A0] hover:text-white"
          >
            <ZoomIn className="h-3.5 w-3.5" />
            Quick View
          </Link>
        </div>

        {/* Wishlist */}
        <button
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={() => setWished(!wished)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-white/90 backdrop-blur-sm transition-colors hover:bg-white"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${wished ? 'fill-[#0033A0] text-[#0033A0]' : 'text-zinc-400'}`}
          />
        </button>

        {/* Blue bottom accent on hover */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#0033A0] transition-all duration-500 group-hover:w-full" />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#0033A0]">
          {product.collection}
        </span>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-butler text-sm font-medium text-zinc-900">
            {product.name}
          </h3>
          <span className="shrink-0 font-moderat text-sm text-[#0033A0] font-medium">
            {product.price}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function EzkoFeaturedProducts() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="featured-products" className="py-24 sm:py-32">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#FF6B00]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
                Featured Pieces
              </span>
            </div>
            <h2 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Craft in every
              <br />
              <em className="font-extralight italic">detail</em>
            </h2>
          </div>
          <Link
            href="/collections/all"
            id="view-all-products"
            className="group flex w-fit items-center gap-2 text-sm uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-[#0033A0]"
          >
            Shop all pieces
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
