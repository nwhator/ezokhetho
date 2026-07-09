import ProductCard from '@/components/product-card'
import { getCollectionByHandle } from '@/data'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const { handle } = await params
  const collection = await getCollectionByHandle(handle)
  if (!collection) {
    return {
      title: 'Collection not found',
      description: 'The collection you are looking for does not exist.',
    }
  }
  return {
    title: `${collection.title} — Ezokhetho`,
    description: collection.description,
  }
}

export default async function Collection({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const collection = await getCollectionByHandle(handle)
  if (!collection?.id) {
    return redirect('/collections/all')
  }
  const products = collection.products

  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      {/* Collection hero banner */}
      <div className="bg-[#0033A0] py-16">
        <div className="container">
          <Link
            href="/collections/all"
            className="mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            All Collections
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#FF6B00]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#FF6B00]">Collection</span>
          </div>
          <h1 className="font-butler text-4xl font-light text-white sm:text-5xl">
            {collection.title}
          </h1>
          <p className="mt-4 max-w-2xl font-moderat text-[15px] leading-relaxed text-white/60">
            {collection.description}
          </p>
          <p className="mt-6 font-moderat text-sm text-white/40">
            {products.length} {products.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      {/* Products grid */}
      <div className="container pt-14">
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-5 py-24 text-center">
            <p className="font-butler text-3xl font-light text-zinc-300">Coming soon</p>
            <p className="font-moderat text-sm text-zinc-400">
              New pieces from this collection are on their way.
            </p>
            <Link
              href="/collections/all"
              className="mt-4 bg-[#0033A0] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white hover:bg-[#FF6B00] transition-colors"
            >
              Browse all collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
