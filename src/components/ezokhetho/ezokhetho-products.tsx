'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ArrowRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { formatZAR } from '@/lib/currency'

type Product = {
  id: number
  title: string
  handle: string
  price: number
  images: { src: string; alt: string }[]
  collections: { title: string; handle: string }[]
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [wished, setWished] = useState(false)

  const image = product.images?.[0]
  const collection = product.collections?.[0]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.12 }}
      className="group relative flex flex-col gap-4"
      id={`product-card-${product.handle}`}
    >
      {/* Image */}
      <Link href={`/products/${product.handle}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-50">
          {image && (
            <Image
              src={image.src}
              alt={image.alt || product.title}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-95"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 pb-6">
            <span className="flex items-center gap-2 bg-white px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-900 transition-colors hover:bg-[#0033A0] hover:text-white">
              View Piece
            </span>
          </div>

          {/* Wishlist */}
          <button
            aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
            onClick={(e) => { e.preventDefault(); setWished(!wished) }}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-white/90 backdrop-blur-sm transition-colors hover:bg-white"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${wished ? 'fill-[#0033A0] text-[#0033A0]' : 'text-zinc-400'}`}
            />
          </button>

          {/* Bottom accent on hover */}
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#0033A0] transition-all duration-500 group-hover:w-full" />
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-col gap-1">
        {collection && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#0033A0]">
            {collection.title}
          </span>
        )}
        <div className="flex items-start justify-between gap-2">
          <Link href={`/products/${product.handle}`}>
            <h3 className="font-butler text-sm font-medium text-zinc-900 hover:text-[#0033A0] transition-colors">
              {product.title}
            </h3>
          </Link>
          <span className="shrink-0 font-moderat text-sm text-[#0033A0] font-medium">
            {formatZAR(product.price)}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function EzkoFeaturedProducts() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/admin/products')
      .then(r => r.json())
      .then((data: Product[]) => {
        // Show 6 latest products
        setProducts(data.slice(0, 6))
      })
      .catch(() => setProducts([]))
  }, [])

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
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="aspect-[3/4] animate-pulse bg-zinc-100" />
                <div className="h-3 w-2/3 animate-pulse rounded bg-zinc-100" />
                <div className="h-3 w-1/3 animate-pulse rounded bg-zinc-100" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
