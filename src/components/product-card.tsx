import { TProductItem } from '@/data'
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

  // Format price — show as ZAR if >= 100, else $ for legacy data
  const priceDisplay = price >= 100
    ? `R ${price.toLocaleString('en-ZA')}`
    : `$${Number(price).toFixed(2)}`

  return (
    <div className={clsx('group/prd relative w-full', className)}>
      {/* Product Image */}
      <div className={clsx('relative w-full overflow-hidden', imageRatio)}>
        <Image
          src={img1}
          alt={title}
          fill
          className="z-0 object-cover transition-transform duration-500 group-hover/prd:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
          priority
        />
        {img2 && (
          <Image
            src={img2}
            alt={title}
            fill
            className="z-0 object-cover opacity-0 transition-opacity duration-300 group-hover/prd:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
          />
        )}
        {/* Blue hover border */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-[#0033A0] transition-all duration-500 group-hover/prd:w-full" />
      </div>

      {/* Vendor label */}
      <div className="absolute top-3 left-3">
        <div className="bg-white px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#0033A0]">
          {vendor}
        </div>
      </div>

      {/* Cart icon */}
      <div className="absolute top-3 right-3">
        <div className="flex h-8 w-8 items-center justify-center bg-white text-[#0033A0] transition-colors hover:bg-[#0033A0] hover:text-white">
          <ShoppingBagIcon className="h-4 w-4" />
        </div>
      </div>

      {/* Product Info */}
      <div className="pt-3">
        <div className="flex justify-between gap-2">
          <TextLink href={`/products/${handle}`}>
            <span className="absolute inset-0" />
            {title}
          </TextLink>
          <Text className="shrink-0 text-[#0033A0]">{priceDisplay}</Text>
        </div>
        <Text className="mt-0.5 text-xs text-zinc-400">{color ?? size ?? ''}</Text>
      </div>
    </div>
  )
}
