import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getCollectionByHandle, getFashionProducts } from '@/data'

export const metadata: Metadata = {
  title: 'Shop | Ezokhetho',
  description: 'Discover the full Ezokhetho range. Timeless design celebrating contemporary African luxury, heritage and storytelling.',
}

export default async function ShopPage() {
  const collection = await getCollectionByHandle('shop')
  const products = await getFashionProducts()

  if (!collection) {
    notFound()
  }

  const shopProducts = products.filter(p => 
    p.collections?.some((c: any) => c.handle === 'shop')
  )

  return (
    <main className="pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="relative container pb-16 pt-40">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00]">
            Shop
          </p>
          <h1 className="font-butler text-5xl font-light leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            {collection.title}
          </h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container py-20 sm:py-28">
        <div className="mb-16 max-w-2xl">
          <p className="font-moderat text-[15px] leading-relaxed text-zinc-500">
            {collection.description}
          </p>
        </div>

        {shopProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-moderat text-zinc-500">No products available in this collection.</p>
          </div>
        ) : (
          <ul role="list" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shopProducts.map((product) => (
              <li key={product.id} className="group">
                <Link href={`/products/${product.handle}`} className="block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-zinc-100">
                    {product.featured_image && (
                      <Image
                        src={product.featured_image.src}
                        alt={product.featured_image.alt || product.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    )}
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="font-butler text-lg font-medium tracking-wide text-zinc-900">
                      {product.title}
                    </h3>
                    <p className="font-moderat text-sm font-medium text-zinc-900">
                      R{product.price.toLocaleString()}
                    </p>
                    {product.madeToOrder && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white bg-[#FF6B00] rounded">
                        Made to Order
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}