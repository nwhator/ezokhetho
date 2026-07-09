'use client'

import { useCart } from '@/lib/cart-context'
import { formatZAR } from '@/lib/currency'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Delete02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import Image from 'next/image'
import { Aside } from './aside/aside'
import { Button } from './button'
import { Text, TextLink } from './text'

interface Props {
  className?: string
}

const AsideSidebarCart = ({ className = '' }: Props) => {
  const { items, subtotal, removeItem, updateQty } = useCart()

  return (
    <Aside openFrom="right" type="cart" heading="Shopping Cart">
      <div className={clsx('flex h-full flex-col', className)}>
        {/* CONTENT */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto py-6 hidden-scrollbar">
          <div className="flow-root">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-48 text-zinc-400">
                <Text className="text-sm">Your cart is empty.</Text>
              </div>
            ) : (
              <ul role="list" className="-my-6 divide-y divide-zinc-900/10">
                {items.map((item) => (
                  <li key={`${item.id}-${item.color}-${item.size}`} className="flex py-6">
                    <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-md">
                      <Image
                        fill
                        alt={item.title}
                        src={item.image}
                        className="size-full object-cover"
                        sizes="(min-width: 640px) 10rem, 100vw"
                      />
                    </div>

                    <div className="ms-4 flex flex-1 flex-col">
                      <div className="flex justify-between font-medium">
                        <h3 className="leading-tight">
                          <TextLink href={'/products/' + item.handle}>{item.title}</TextLink>
                        </h3>
                        <Text className="ms-4">{formatZAR(item.price * item.quantity)}</Text>
                      </div>
                      <div className="mt-1 flex gap-1.5 text-xs text-zinc-500">
                        <Text className="text-xs">{item.color}</Text>
                        {item.size ? <Text className="text-xs">/</Text> : null}
                        {item.size ? <Text className="text-xs">{item.size}</Text> : null}
                      </div>
                      <Text className="mt-1 text-xs text-zinc-500">{formatZAR(item.price)} each</Text>
                      <div className="mt-auto flex items-center justify-between pt-2 text-sm">
                        <div className="inline-grid w-full max-w-16 grid-cols-1">
                          <select
                            name={`quantity-${item.id}-${item.color}-${item.size}`}
                            aria-label={`Quantity, ${item.title}`}
                            value={item.quantity}
                            onChange={(e) => updateQty(item.id, item.color, item.size, parseInt(e.target.value))}
                            className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-0.5 ps-3 pe-8 text-xs/6 outline-1 -outline-offset-1 outline-zinc-900/10 focus:outline-1"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((qty) => (
                              <option key={qty} value={qty}>{qty}</option>
                            ))}
                          </select>
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 me-2 size-4 self-center justify-self-end text-zinc-500"
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.color, item.size)}
                          className="p-2 cursor-pointer text-zinc-400 hover:text-zinc-600 font-medium"
                          title="Remove item"
                        >
                          <span className="sr-only">Remove</span>
                          <HugeiconsIcon icon={Delete02Icon} size={16} color="currentColor" strokeWidth={1} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <section aria-labelledby="summary-heading" className="mt-auto grid shrink-0 gap-4 border-t border-zinc-900/10 py-6">
          <h2 id="summary-heading" className="sr-only">Order summary</h2>
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <Text className="font-medium">Subtotal</Text>
              <Text className="font-medium">{formatZAR(subtotal)}</Text>
            </div>
            <Text className="mt-0.5 text-xs text-zinc-500">Shipping and taxes calculated at checkout.</Text>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Button outline href={'/cart'}>View cart</Button>
              <Button href={'/checkout'} disabled={items.length === 0}>Check out</Button>
            </div>
          </div>
        </section>
      </div>
    </Aside>
  )
}

export default AsideSidebarCart
