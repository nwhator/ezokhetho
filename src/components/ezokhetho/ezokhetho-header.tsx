'use client'

import { Logo } from '@/app/logo'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/theme-toggle'

const navLinks = [
  { name: 'Shop', href: '/collections/all' },
  { name: 'Collections', href: '/collections' },
  { name: 'About', href: '/#brand-story' },
  { name: 'Sustainability', href: '/#sustainability' },
  { name: 'Journal', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const collectionsMenu = [
  { name: 'Ngithwale — Carry Me', href: '/collections/ngithwale', desc: 'Honouring mothers' },
  { name: 'Izimbokodo', href: '/collections/izimbokodo', desc: 'Strength of stone' },
  { name: 'Khumbulekhaya', href: '/collections/khumbulekhaya', desc: 'Remember home' },
  { name: 'All Collections', href: '/collections/all', desc: 'Browse everything' },
]

export default function EzkoHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  // On the homepage the header starts transparent over the hero.
  // On all other pages it starts solid immediately.
  const isHomePage = pathname === '/'

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60)
  })

  // On non-home pages, treat it as always-scrolled (solid)
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
                    {/* Dropdown */}
                    {collectionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 bg-white shadow-xl shadow-black/10"
                      >
                        <div className="flex flex-col divide-y divide-zinc-100">
                          {collectionsMenu.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="group flex flex-col gap-0.5 px-5 py-4 transition-colors hover:bg-[#0033A0]/5"
                            >
                              <span className="text-[12px] font-medium text-zinc-900 group-hover:text-[#0033A0]">
                                {item.name}
                              </span>
                              <span className="text-[11px] text-zinc-400">{item.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
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
            {/* Light / Dark toggle */}
            <div className={isSolid ? '' : 'hidden lg:block'}>
              <ThemeToggle />
            </div>
            <Link
              href="/cart"
              id="header-cart"
              aria-label="Shopping cart"
              className={`flex items-center gap-1.5 transition-colors ${
                isSolid ? 'text-[#0033A0] hover:text-[#FF6B00]' : 'text-white/70 hover:text-white'
              }`}
            >
              <ShoppingBag className="h-4.5 w-4.5" />
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
