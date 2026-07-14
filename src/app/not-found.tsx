import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Home, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found | Ezokhetho',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
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

        <h1 className="font-butler text-6xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-7xl lg:text-8xl">
          404
        </h1>

        <p className="mt-6 font-butler text-2xl font-light leading-[1.2] text-zinc-900 sm:text-3xl">
          Page Not Found
        </p>

        <p className="mt-6 font-moderat text-base leading-relaxed text-zinc-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group flex items-center justify-center gap-3 bg-[#0033A0] px-8 py-4 font-moderat text-sm font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#FF6B00]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <Link
            href="/shop"
            className="flex items-center justify-center gap-3 border border-zinc-200 px-8 py-4 font-moderat text-sm font-medium uppercase tracking-[0.2em] text-zinc-800 transition-all duration-300 hover:border-[#0033A0] hover:bg-[#0033A0]/5 hover:text-[#0033A0]"
          >
            <Home className="h-4 w-4" />
            Browse Shop
          </Link>
        </div>
      </div>
    </main>
  )
}