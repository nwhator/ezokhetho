import { Divider } from '@/components/divider'
import {
  getFashionProducts,
  getProductByHandle,
  TProductItem,
} from '@/data'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductForm } from '../product-form'
import { ProductGallery } from '../product-gallery'
import ProductRelatedSection from '../product-related-section'

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const { handle } = await params
  const product = await getProductByHandle(handle)
  if (!product) {
    return {
      title: 'Product not found',
      description: 'Product not found',
    }
  }

  const { title, description } = product
  return {
    title: `${title} | Ezokhetho`,
    description: description || `${title} — Contemporary African luxury by Ezokhetho`,
  }
}

export default async function Product({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const product = await getProductByHandle(handle)
  if (!product?.id) {
    return notFound()
  }

  // Fetch other products from the same collection for related section
  const allProducts = await getFashionProducts()
  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 5)

  const { images } = product

  return (
    <div className="product-page relative space-y-12 sm:space-y-16">
      <div className="absolute inset-x-0 -top-px z-10 h-px bg-white"></div>

      <main className="container">
        <div className="lg:flex">
          {/* Galleries */}
          <div className="relative w-full lg:w-1/2">
            <div className="sticky top-0">
              <ProductGallery media={images} />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full pt-10 lg:w-1/2 lg:pt-16 lg:pl-10 xl:pl-14 2xl:pl-16">
            <div className="sticky top-16">
              {/* Heading, Price, Options, Add to cart */}
              <ProductForm product={product} />
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <>
            <Divider className="my-16 sm:my-24 lg:my-28" />
            <ProductRelatedSection products={relatedProducts} />
          </>
        )}
      </main>
    </div>
  )
}
