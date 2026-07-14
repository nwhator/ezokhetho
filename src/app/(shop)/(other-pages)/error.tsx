'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home, RefreshCw, Mail } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-[#FF6B00]" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00]">
            Error
          </span>
          <div className="h-px w-12 bg-[#FF6B00]" />
        </div>

        <h1 className="font-butler text-6xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-7xl">
          Error
        </h1>

        <p className="mt-6 font-moderat text-base leading-relaxed text-zinc-500">
          Something went wrong. {error.message}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="group flex items-center justify-center gap-3 bg-[#FF6B00] px-8 py-4 font-moderat text-sm font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#e55f00]"
          >
            <RefreshCw className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
            Try Again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-3 border border-zinc-200 px-8 py-4 font-moderat text-sm font-medium uppercase tracking-[0.2em] text-zinc-800 transition-all duration-300 hover:border-[#0033A0] hover:bg-[#0033A0]/5 hover:text-[#0033A0]"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-3 border border-zinc-200 px-8 py-4 font-moderat text-sm font-medium uppercase tracking-[0.2em] text-zinc-800 transition-all duration-300 hover:border-[#FF6B00] hover:bg-[#FF6B00]/5 hover:text-[#FF6B00]"
          >
            <Mail className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}