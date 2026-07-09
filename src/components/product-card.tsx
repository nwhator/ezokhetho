import { TProductItem } from '@/data'
import { formatZAR } from '@/lib/currency'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { Text, TextLink } from './text'

interface ProductCardProps {
  product: TProductItem
  className?: string
  imageRatio?: string
}

export default function ProductCard({ product, className, imageRatio = 'aspect-3/4' }: ProductCardProps) {
  const { title, price, featured_image, handle, images, selected_options, vendor } = product

  // Safely get image src — handles both string and object formats
  const getImgSrc = (img: unknown): string => {
    if (!img) return '/images/placeholder.webp'
    if (typeof img === 'string') return img
    if (typeof img === 'object' && img !== null && 'src' in img) return (img as { src: string }).src
    return '/images/placeholder.webp'
  }

  const img1 = getImgSrc(images?.[0] ?? featured_image)
  const img2 = images?.[1] ? getImgSrc(images[1]) : null

  const color = selected_options.find((option) => option.name === 'Color')?.value
  const size = selected_options.find((option) => option.name === 'Size')?.value

  return (
    <div className={clsx('group/prd relative w-full', className)}>
      {/* Product Image */}
      <div className={clsx('relative w-full overflow-hidden', imageRatio)}>
        <Image
          src={img1}
          alt={title}
          fill
          className="z-0 object-cover transition-transform duration-700 group-hover/prd:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
          priority
        />
        {img2 && (
          <Image
            src={img2}
            alt={title}
            fill
            className="z-0 object-cover opacity-0 transition-opacity duration-500 group-hover/prd:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
          />
        )}
        {/* Blue reveal line */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-[#0033A0] transition-all duration-500 group-hover/prd:w-full" />
      </div>

      {/* Vendor label */}
      <div className="absolute top-3 left-3">
        <div className="bg-white px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-[#0033A0]">
          {vendor}
        </div>
      </div>

      {/* Cart icon */}
      <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-300 group-hover/prd:opacity-100">
        <div className="flex h-8 w-8 items-center justify-center bg-[#0033A0] text-white transition-colors hover:bg-[#FF6B00]">
          <ShoppingBagIcon className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* Product Info */}
      <div className="pt-3">
        <div className="flex items-start justify-between gap-2">
          <TextLink href={`/products/${handle}`}>
            <span className="absolute inset-0" />
            {title}
          </TextLink>
          <Text className="shrink-0 font-medium text-[#0033A0]">{formatZAR(price)}</Text>
        </div>
        <Text className="mt-0.5 text-xs text-zinc-400">{color ?? size ?? ''}</Text>
      </div>
    </div>
  )
}
