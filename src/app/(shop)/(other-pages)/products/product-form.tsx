'use client'

import { useAside } from '@/components/aside'
import Breadcrumb from '@/components/breadcrumb'
import ButtonLargeWithIcon from '@/components/button-large-with-icon'
import { Heading } from '@/components/heading'
import InputNumber from '@/components/input-number'
import { Text } from '@/components/text'
import { TProductItem } from '@/data'
import { ShoppingBag03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useCart } from '@/lib/cart-context'

import { formatZAR } from '@/lib/currency'

export function ProductForm({ product, hidePrice }: { product: TProductItem; hidePrice?: boolean }) {
  const { open: openAside } = useAside()
  const { addItem } = useCart()
  const { options, selected_options, collections, title, price, id, images, handle } = product
  const stock = (product as any).stock as Record<string, number> | undefined
  const sizesToConfirm = (product as any).sizesToConfirm === true

  const collection = collections[0]
  const currentColor =
    selected_options.find((option: { name: string; value: string }) => option.name === 'Color')?.value ??
    selected_options.find((option: { name: string; value: string }) => option.name === 'Colour')?.value ??
    ''

  // NOTE: this for demo ...
  // You need to recalculate according to your data structure and project
  const [quantity, setQuantity] = useState(1)
  const [stateSelectedOption, setStateSelectedOption] = useState<{ name: string; value: string }[]>(selected_options)

  const selectedSize = stateSelectedOption.find((opt) => opt.name === 'Size')?.value ?? ''
  const maxQty = selectedSize && stock ? (stock[selectedSize] ?? 99) : 99

  useEffect(() => {
    if (quantity > maxQty) {
      setQuantity(maxQty)
    }
  }, [maxQty, quantity])

  const handleAddToCart = () => {
    const color = stateSelectedOption.find((opt) => opt.name === 'Color')?.value ?? ''
    const size = stateSelectedOption.find((opt) => opt.name === 'Size')?.value ?? ''
    addItem({
      id,
      handle,
      title,
      price,
      image: images?.[0]?.src ?? '/images/placeholder.webp',
      color,
      size,
      quantity,
    })
    openAside('cart')
  }

  const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    {
      id: 2,
      name: collection.title,
      href: '/collections/all',
    },
  ]
  //
  return (
    <div>
      {/* ---------- HEADING ----------  */}
      <div>
        <Breadcrumb breadcrumbs={breadcrumbs} currentPage={title} />

        <Heading level={1} className="mt-4" title={title} bigger>
          <span data-slot="italic" className="text-[14px]">{currentColor}</span>
          <br />
          <span className="lowercase" data-slot="dim">
            {title}
          </span>
        </Heading>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="rounded-full bg-zinc-900 px-5 py-2">
            <Text className="text-xs text-white">{product.vendor}</Text>
          </div>
          {hidePrice ? (
            <span className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#FF6B00]">Contact us</span>
          ) : (
            <Text className="text-xl">{formatZAR(price)}</Text>
          )}
          <Text className="font-light text-zinc-400">/</Text>
        </div>
      </div>

      {/* ---------- ADD TO CART FORM ----------  */}
      <form className="mt-10 block">
        {/* Variants */}
        <div className="flex flex-col gap-7">
          {options?.map(({ name: optionName, optionValues }: { name: string; optionValues: Array<{ name: string; swatch: TSwatch }> }) => {
            return (
              <div key={optionName}>
                <Text>{optionName}</Text>

                <div
                  className={clsx(
                    'mt-2',
                    optionName === 'Color' ? 'flex items-center gap-x-3' : 'flex flex-wrap gap-3'
                  )}
                >
                  {optionValues.map(({ name, swatch }, index) => {
                    const selected = stateSelectedOption.some((opt) => opt.name === optionName && opt.value === name)
                    const inStock = stock ? (stock[name] ?? 0) > 0 : true
                    const url = '#'

                    return (
                      <div
                        key={optionName + name}
                        className={clsx(
                          'block shrink-0',
                          inStock ? 'cursor-pointer' : 'cursor-not-allowed',
                          selected && ''
                        )}
                        aria-disabled={!inStock}
                        onClick={() => {
                          if (inStock) {
                            setStateSelectedOption((prev) => {
                              const newOptions = [...prev]
                              const optionIndex = newOptions.findIndex((opt) => opt.name === optionName)
                              if (optionIndex !== -1) {
                                newOptions[optionIndex] = { name: optionName, value: name }
                              } else {
                                newOptions.push({ name: optionName, value: name })
                              }
                              return newOptions
                            })
                          }
                        }}
                      >
                        <ProductOptionSwatch swatch={swatch} name={name} isSelected={selected} inStock={inStock} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Product details */}
        <div className="mt-10 rounded-lg border border-zinc-200 p-6">
          <div className="grid gap-4 text-sm text-zinc-600 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">Collection</p>
              <p className="mt-1 font-medium text-zinc-900">{collection?.title ?? 'Ezokhetho'}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">Category</p>
              <p className="mt-1 font-medium text-zinc-900">{product.category ?? 'Collection piece'}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">Fabric Composition</p>
              <p className="mt-1 font-medium text-zinc-900">{product.fabricComposition ?? '—'}</p>
            </div>
            {product.detailComposition ? (
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">Detail Composition</p>
                <p className="mt-1 font-medium text-zinc-900">{product.detailComposition}</p>
              </div>
            ) : null}
            {product.washCare ? (
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">Wash Care</p>
                <p className="mt-1 font-medium text-zinc-900">{product.washCare}</p>
              </div>
            ) : null}
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">Availability</p>
              <p className="mt-1 font-medium text-zinc-900">{product.availability ?? 'In Stock'}</p>
            </div>
          </div>
          {product.madeToOrder ? (
            <div className="mt-4 inline-flex rounded-full bg-[#FF6B00] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
              Made to Order
            </div>
          ) : null}
        </div>

        {/* Add to cart / Contact us */}
        <div className="mt-14 flex flex-col gap-8">
          {hidePrice ? (
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#FF6B00] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[#e05e00] transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contact us for inquiries
            </a>
          ) : sizesToConfirm ? (
            <>
              <Text className="text-sm font-medium text-zinc-600">
                Sizes to be confirmed. Enquire to find your fit.
              </Text>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#FF6B00] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[#e05e00] transition-colors"
              >
                Enquire
              </a>
            </>
          ) : (
            <>
              <InputNumber className="gap-x-5" label="Qty" min={1} max={maxQty} defaultValue={quantity} onChange={setQuantity} />
              <ButtonLargeWithIcon
                icon={<HugeiconsIcon icon={ShoppingBag03Icon} size={20} color="currentColor" strokeWidth={1.5} />}
                onClick={handleAddToCart}
              >
                Add to cart
              </ButtonLargeWithIcon>
            </>
          )}
        </div>
      </form>
    </div>
  )
}

type TSwatch = {
  color?: string | null
  image?: {
    src: string
    alt?: string
  } | null
}
function ProductOptionSwatch({
  swatch,
  name,
  isSelected,
  inStock,
}: {
  swatch?: TSwatch | null
  name: string
  isSelected: boolean
  inStock: boolean
}) {
  const image = swatch?.image
  const color = swatch?.color

  if (!image && !color) {
    return (
      <div
        className={clsx(
          inStock ? 'cursor-pointer focus:outline-hidden' : 'cursor-not-allowed opacity-25',
          'flex shrink items-center justify-center rounded-md px-4 py-2.5 transition-all sm:min-w-16',
          isSelected
            ? 'bg-zinc-900 text-white shadow-sm ring-1 ring-zinc-900'
            : 'bg-white text-zinc-800 ring-1 ring-zinc-200 hover:border-zinc-400 hover:bg-zinc-50'
        )}
        title={inStock ? name : 'Out of stock'}
        aria-disabled={!inStock}
        aria-label={name}
      >
        <span className={clsx('text-xs uppercase tracking-wider font-semibold', isSelected ? 'text-white' : 'text-zinc-900')}>
          {name}
        </span>
      </div>
    )
  }

  return (
    <div
      className={clsx('h-8 w-8 rounded-full', isSelected && 'ring-2 ring-slate-900 ring-offset-2')}
      style={{
        backgroundColor: color || 'transparent',
      }}
      title={inStock ? name : 'Out of stock'}
      aria-disabled={!inStock}
      aria-label={name}
    >
      {/* {!!image && <Image src={image.src} alt={name} fill className="w-full object-cover" />} */}
    </div>
  )
}
