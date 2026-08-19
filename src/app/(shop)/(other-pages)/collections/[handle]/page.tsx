import { getCollectionByHandle, getFashionCollections, isRunwayProduct } from '@/data'
import { Metadata } from 'next'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ProductGallery } from '../../products/product-gallery'

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

// Collections index (/collections/all)
function CollectionsIndex({ collections }: { collections: Awaited<ReturnType<typeof getFashionCollections>> }) {
  const indexCollections = collections.filter((c) => c.handle !== 'shop')

  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      <div className="bg-[#0033A0] py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#FF6B00]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#FF6B00]">Collections</span>
          </div>
          <h1 className="font-butler text-4xl font-light text-white sm:text-5xl">Discover</h1>
          <p className="mt-4 max-w-2xl font-moderat text-[15px] leading-relaxed text-white/60">
            Explore the Ezokhetho runway archive — each collection tells a story of contemporary African luxury,
            heritage and craftsmanship.
          </p>
        </div>
      </div>

      <div className="container pt-14">
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {indexCollections.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.handle}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-[#FF6B00] transition-all duration-500 group-hover:w-full" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-butler text-xl font-medium tracking-wide text-zinc-900">
                    {collection.title}
                  </h2>
                  <p className="mt-1 font-moderat text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {collection.products.length} {collection.products.length === 1 ? 'piece' : 'pieces'}
                  </p>
                </div>
                <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.2em] text-[#0033A0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex justify-center border-t border-zinc-200 pt-14">
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-[#FF6B00] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#e05e00]"
          >
            Shop the range
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default async function Collection({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const collection = await getCollectionByHandle(handle)
  if (!collection?.id) {
    return redirect('/collections/all')
  }

  if (handle === 'all') {
    return <CollectionsIndex collections={await getFashionCollections()} />
  }

  const products = collection.products
  const hasShopPieces = products.some((p: any) => !isRunwayProduct(p))

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

      {/* Editorial slideshow */}
      {collection.galleryImages?.length ? (
        <div className="container pt-14">
          <ProductGallery media={collection.galleryImages.map((src: string) => ({ src }))} />
        </div>
      ) : null}

      {/* Story */}
      <div className="container pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#FF6B00]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#FF6B00]">The Story</span>
            <div className="h-px w-8 bg-[#FF6B00]" />
          </div>
          <p className="mt-6 font-moderat text-lg leading-relaxed text-zinc-600">
            {collection.description}
          </p>
        </div>
      </div>

      {/* Editorial product grid — discover, no purchase controls */}
      <div className="container pt-20">
        <div className="mb-12 flex items-center justify-between gap-4">
          <h2 className="font-butler text-3xl font-light text-zinc-900 sm:text-4xl">
            The {` `}
            <span data-slot="italic" className="italic">{collection.title}</span> pieces
          </h2>
          {hasShopPieces ? (
            <Link
              href="/shop"
              className="hidden shrink-0 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#0033A0] hover:text-[#FF6B00] transition-colors sm:inline-flex"
            >
              Shop the collection <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : null}
        </div>

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
            {products.map((product: any) => {
              const img = product.images?.[0]?.src ?? product.featured_image?.src
              return (
                <Link key={product.id} href={`/products/${product.handle}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                    {img ? (
                      <Image
                        src={img}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : null}
                    <div className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-[#FF6B00] transition-all duration-500 group-hover:w-full" />
                  </div>
                  <p className="mt-4 font-moderat text-[15px] leading-snug text-zinc-900 group-hover:text-[#0033A0] transition-colors">
                    {product.title}
                  </p>
                </Link>
              )
            })}
          </div>
        )}

        {hasShopPieces ? (
          <div className="mt-16 flex justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-[#FF6B00] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#e05e00]"
            >
              Shop the collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  )
}
