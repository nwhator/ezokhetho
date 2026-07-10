'use client'

import { Logo } from '@/app/logo'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Search, Menu, X, ArrowRight } from 'lucide-react'
import ThemeToggle from '@/components/theme-toggle'
import { useCart } from '@/lib/cart-context'

const navLinks = [
  { name: 'Shop', href: '/collections/all' },
  { name: 'Collections', href: '/collections' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/#brand-story' },
  { name: 'Sustainability', href: '/#sustainability' },
  { name: 'Journal', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

// The 9 collections with thumbnails from optimized images
const collectionsMenu = [
  {
    name: 'All Collections',
    href: '/collections/all',
    desc: 'Browse everything',
    thumb: null,
    year: '',
  },
  {
    name: "Mapetla",
    href: '/collections/mapetla',
    desc: 'Latest Chapter',
    thumb: '/images/ezokhetho/mapetla_1.jpg',
    year: "'26",
  },
  {
    name: "Entathakusa",
    href: '/collections/entathakusa',
    desc: 'Robb Report & SAMW',
    thumb: '/images/ezokhetho/entathakusa_1.jpg',
    year: "'26",
  },
  {
    name: "Zodwa",
    href: '/collections/zodwa',
    desc: 'Signature Tailoring',
    thumb: '/images/ezokhetho/zodwa_1.jpg',
    year: "'25",
  },
  {
    name: "Ngithwale",
    href: '/collections/ngithwale',
    desc: 'Carry Me (SAFW)',
    thumb: '/images/ezokhetho/ngithwale_1.jpg',
    year: "'24",
  },
  {
    name: "Kwa-suka-sukela",
    href: '/collections/kwa-suka-sukela',
    desc: 'SAMW Show',
    thumb: '/images/ezokhetho/kwa-suka-sukela_1.jpg',
    year: "'24",
  },
  {
    name: "Inganekwane",
    href: '/collections/inganekwane',
    desc: 'Woven Stories',
    thumb: '/images/ezokhetho/inganekwane_1.jpg',
    year: "'23",
  },
  {
    name: "Umkhathizwe",
    href: '/collections/umkhathizwe',
    desc: 'Lagos Fashion Week',
    thumb: '/images/ezokhetho/umkhathizwe_2.jpg',
    year: "'23",
  },
  {
    name: "Khumbulekhaya",
    href: '/collections/khumbulekhaya',
    desc: 'Remember Home',
    thumb: '/images/ezokhetho/khumbulekhaya_1.jpg',
    year: "'22",
  },
  {
    name: "Izimbokodo",
    href: '/collections/izimbokodo',
    desc: 'Strength of Stone',
    thumb: '/images/ezokhetho/izimbokodo_1.jpg',
    year: "'22",
  },
  {
    name: "Sophiatown",
    href: '/collections/sophiatown',
    desc: 'Golden Era Jazz',
    thumb: '/images/ezokhetho/sophiatown_1.jpg',
    year: "'21",
  },
]

// Split: first item is "All Collections", rest are the 9
const allCollectionsItem = collectionsMenu[0]
const collectionItems = collectionsMenu.slice(1)

export default function EzkoHeader() {
  const { count } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  const isHomePage = pathname === '/'

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60)
  })

  const isSolid = !isHomePage || scrolled

  return (
    <>
      <motion.header
        id="site-header"
        className="fixed inset-x-0 top-0 z-50"
        animate={{
          backgroundColor: isSolid ? 'rgba(255,255,255,0.97)' : 'rgba(0,0,0,0)',
          backdropFilter: isSolid ? 'blur(16px)' : 'blur(0px)',
          borderBottomColor: isSolid ? 'rgba(0,51,160,0.12)' : 'transparent',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <nav className="container flex items-center justify-between py-5 lg:py-6">
          {/* Logo */}
          <Link href="/" aria-label="Ezokhetho Home" className="-m-1 p-1">
            <Logo variant={isSolid ? 'dark' : 'light'} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              if (link.name === 'Collections') {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setCollectionsOpen(true)}
                    onMouseLeave={() => setCollectionsOpen(false)}
                  >
                    <button
                      className={`text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                        isSolid ? 'text-[#0033A0] hover:text-[#FF6B00]' : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </button>

                    {/* MEGA MENU — full-width landscape panel */}
                    <AnimatePresence>
                      {collectionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          // Position anchored to viewport width
                          className="fixed left-0 right-0 top-[72px] z-50 bg-white shadow-2xl shadow-black/10 border-t border-[#0033A0]/10"
                        >
                          <div className="container py-8">
                            {/* Top row: headline + "All Collections" CTA */}
                            <div className="mb-6 flex items-center justify-between border-b border-zinc-100 pb-5">
                              <div className="flex items-center gap-3">
                                <div className="h-px w-6 bg-[#FF6B00]" />
                                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#FF6B00]">
                                  Collections
                                </span>
                              </div>
                              <Link
                                href={allCollectionsItem.href}
                                onClick={() => setCollectionsOpen(false)}
                                className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#0033A0] transition-colors hover:text-[#FF6B00]"
                              >
                                Browse all
                                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </div>

                            {/* Grid: 3 columns × 3 rows of collections */}
                            <div className="grid grid-cols-3 gap-px bg-zinc-100 lg:grid-cols-3 xl:grid-cols-3">
                              {collectionItems.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setCollectionsOpen(false)}
                                  className="group relative flex items-center gap-4 bg-white px-5 py-4 transition-colors duration-200 hover:bg-[#0033A0]/[0.04]"
                                >
                                  {/* Thumbnail */}
                                  {item.thumb ? (
                                    <div className="relative h-14 w-10 shrink-0 overflow-hidden bg-zinc-100">
                                      <Image
                                        src={item.thumb}
                                        alt={item.name}
                                        fill
                                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                        sizes="40px"
                                      />
                                    </div>
                                  ) : (
                                    <div className="h-14 w-10 shrink-0 bg-[#0033A0]/10" />
                                  )}

                                  {/* Text */}
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <div className="flex items-baseline gap-1.5">
                                      <span className="truncate text-[12px] font-medium text-zinc-900 group-hover:text-[#0033A0] transition-colors">
                                        {item.name}
                                      </span>
                                      {item.year && (
                                        <span className="shrink-0 text-[10px] text-zinc-400">{item.year}</span>
                                      )}
                                    </div>
                                    <span className="text-[11px] text-zinc-400 group-hover:text-zinc-500 transition-colors">
                                      {item.desc}
                                    </span>
                                  </div>

                                  {/* Arrow indicator */}
                                  <ArrowRight className="ml-auto h-3 w-3 shrink-0 text-zinc-200 transition-all group-hover:translate-x-0.5 group-hover:text-[#0033A0]" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isSolid ? 'text-[#0033A0] hover:text-[#FF6B00]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`hidden transition-colors lg:flex ${
                isSolid ? 'text-[#0033A0] hover:text-[#FF6B00]' : 'text-white/70 hover:text-white'
              }`}
            >
              <Search className="h-4.5 w-4.5" />
            </button>
            <div className={isSolid ? '' : 'hidden lg:block'}>
              <ThemeToggle />
            </div>
            <Link
              href="/cart"
              id="header-cart"
              aria-label="Shopping cart"
              className={`flex items-center gap-1.5 transition-colors relative ${
                isSolid ? 'text-[#0033A0] hover:text-[#FF6B00]' : 'text-white/70 hover:text-white'
              }`}
            >
              <ShoppingBag className="h-4.5 w-4.5" />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF6B00] text-[9px] font-bold text-white">
                  {count}
                </span>
              )}
            </Link>
            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={`flex transition-colors lg:hidden ${
                isSolid ? 'text-[#0033A0]' : 'text-white'
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="fixed inset-0 z-[100] flex flex-col bg-[#0033A0]"
        >
          <div className="container flex items-center justify-between py-5">
            <Logo variant="light" />
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="container flex flex-1 flex-col justify-center gap-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center gap-3 py-3 font-butler text-3xl font-light text-white/80 transition-colors hover:text-[#FF6B00]"
                >
                  {link.name}
                  <span className="h-px w-0 bg-[#FF6B00] transition-all duration-300 group-hover:w-8" />
                </Link>
              </motion.div>
            ))}

            {/* Mobile collection links */}
            <div className="mt-6 border-t border-white/10 pt-4">
              <span className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-white/30">Collections</span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {collectionsMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[12px] text-white/60 hover:text-white transition-colors py-1"
                  >
                    {item.name} {item.year}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="container flex items-center justify-between py-8 border-t border-white/10">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              Contemporary African Luxury
            </span>
            <Link
              href="/cart"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            >
              <ShoppingBag className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </>
  )
}
