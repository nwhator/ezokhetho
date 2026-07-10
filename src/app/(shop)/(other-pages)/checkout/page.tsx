'use client'

import { useCart } from '@/lib/cart-context'
import { formatZAR } from '@/lib/currency'
import { Button } from '@/components/button'
import { Divider } from '@/components/divider'
import { Description, Field, Fieldset, Label } from '@/components/fieldset'
import { Heading } from '@/components/heading'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import Image from 'next/image'
import Link from 'next/link'
import DeliveryRadio from './delivery-radio'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const { items, subtotal, shipping, total, clearCart } = useCart()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const payfastFormRef = useRef<HTMLFormElement>(null)

  // Form Fields
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [phone, setPhone] = useState('')

  // PayFast Form Fields State
  const [payfastData, setPayfastData] = useState({
    merchant_id: '10000100', // PayFast Sandbox Sandbox Credentials
    merchant_key: '46f0z43gja9aw',
    return_url: '',
    cancel_url: '',
    notify_url: '',
    name_first: '',
    name_last: '',
    email_address: '',
    m_payment_id: '',
    amount: '0.00',
    item_name: 'Ezokhetho Order Checkout',
  })

  useEffect(() => {
    setMounted(true)
    const host = window.location.origin
    setPayfastData((prev) => ({
      ...prev,
      return_url: `${host}/order-successful`,
      cancel_url: `${host}/cart`,
      notify_url: `${host}/api/payfast/notify`,
    }))
  }, [])

  if (!mounted) {
    return (
      <div className="container min-h-96 flex items-center justify-center">
        <TextLoader />
      </div>
    )
  }

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !firstName || !lastName || !address || !city || !postalCode) {
      alert('Please fill in all the required shipping and contact details.')
      return
    }

    const mPaymentId = `EZ-${Date.now()}`

    // 1. Save Pending Transaction to API
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: mPaymentId,
          email,
          name: `${firstName} ${lastName}`,
          items: items.map(i => ({
            title: i.title,
            quantity: i.quantity,
            price: i.price,
            color: i.color,
            size: i.size
          })),
          subtotal,
          shipping,
          total,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to record transaction')
      }

      // 2. Set fields and submit to PayFast sandbox form
      setPayfastData((prev) => {
        const next = {
          ...prev,
          name_first: firstName,
          name_last: lastName,
          email_address: email,
          m_payment_id: mPaymentId,
          amount: total.toFixed(2),
        }

        // Trigger PayFast Form Submission after state updates
        setTimeout(() => {
          if (payfastFormRef.current) {
            clearCart() // clear cart now that redirecting
            payfastFormRef.current.submit()
          }
        }, 150)

        return next
      })

    } catch (err) {
      console.error(err)
      alert('Something went wrong during checkout. Please try again.')
    }
  }

  return (
    <div className="container">
      <div className="mx-auto max-w-7xl pt-16 pb-24">
        <h2 className="sr-only">Checkout</h2>

        {/* Real Checkout Page Form */}
        <form onSubmit={handleCheckoutSubmit} className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20">
          <div>
            {/* Contact */}
            <div>
              <Heading fontSize="text-2xl font-medium text-zinc-950" level={3}>
                <span data-slot="italic">Contact</span> information
              </Heading>

              <Field className="mt-10">
                <Label>Email address</Label>
                <Input 
                  type="email" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <Description>We’ll send your order confirmation and invoice here.</Description>
              </Field>
            </div>

            {/* Shipping */}
            <div className="mt-10 border-t border-zinc-200 pt-10">
              <Heading fontSize="text-2xl font-medium text-zinc-950" level={3}>
                <span data-slot="italic">Shipping</span> information
              </Heading>
              <div className="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <Field>
                  <Label>First name</Label>
                  <Input 
                    type="text" 
                    required 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                  />
                </Field>

                <Field>
                  <Label>Last name</Label>
                  <Input 
                    type="text" 
                    required 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                  />
                </Field>

                <Field className="sm:col-span-2">
                  <Label>Address</Label>
                  <Input 
                    type="text" 
                    required 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                  />
                </Field>

                <Field>
                  <Label>City</Label>
                  <Input 
                    type="text" 
                    required 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                  />
                </Field>

                <Field>
                  <Label>Country / Region</Label>
                  <Select className="mt-3 sm:col-span-2 sm:mt-0" name="country">
                    <option>South Africa</option>
                  </Select>
                </Field>

                <Field>
                  <Label>Postal code</Label>
                  <Input 
                    type="text" 
                    required 
                    value={postalCode} 
                    onChange={(e) => setPostalCode(e.target.value)} 
                  />
                </Field>

                <Field className="sm:col-span-2">
                  <Label>Phone Number</Label>
                  <Input 
                    type="tel" 
                    required 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                  />
                </Field>
              </div>
            </div>

            {/* Delivery */}
            <div className="mt-10 border-t border-zinc-200 pt-10">
              <Fieldset>
                <Heading fontSize="text-2xl font-medium text-zinc-950" level={3}>
                  <span data-slot="italic">Delivery</span> method
                </Heading>

                <DeliveryRadio />
              </Fieldset>
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <Heading fontSize="text-2xl font-medium text-zinc-950" level={3}>
              <span data-slot="italic">Order</span> summary
            </Heading>

            <div className="mt-5 rounded-lg border border-zinc-200 bg-white">
              <h3 className="sr-only">Items in your cart</h3>
              
              {items.length === 0 ? (
                <div className="px-4 py-8 text-center text-zinc-500">
                  Your cart is empty.
                </div>
              ) : (
                <ul role="list" className="divide-y divide-zinc-200">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.color}-${item.size}`} className="flex px-4 py-6 sm:px-6">
                      <div className="relative h-24 w-18 shrink-0 overflow-hidden rounded-md">
                        <Image
                          fill
                          alt={item.title}
                          src={item.image}
                          className="size-full object-cover"
                          sizes="100px"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between font-medium">
                          <h4 className="text-sm uppercase">{item.title}</h4>
                          <p className="text-sm font-semibold">{formatZAR(item.price * item.quantity)}</p>
                        </div>
                        <p className="mt-1 text-xs text-zinc-500">{item.color} / {item.size}</p>
                        <p className="mt-1 text-xs text-zinc-400">Qty: {item.quantity}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <dl className="space-y-6 border-t border-zinc-200 px-4 py-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm uppercase">Subtotal</dt>
                  <dd className="text-sm font-medium text-zinc-900">{formatZAR(subtotal)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm uppercase">Shipping</dt>
                  <dd className="text-sm font-medium text-zinc-900">{formatZAR(shipping)}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-200 pt-6">
                  <dt className="text-base font-semibold uppercase">Total</dt>
                  <dd className="text-base font-bold text-[#0033A0]">{formatZAR(total)}</dd>
                </div>
              </dl>

              <div className="border-t border-zinc-200 px-4 py-6 sm:px-6">
                <Button className="w-full font-medium" type="submit" disabled={items.length === 0}>
                  Pay with PayFast
                </Button>
              </div>
            </div>
          </div>
        </form>

        {/* Hidden PayFast Form redirecting to sandbox */}
        <form 
          ref={payfastFormRef} 
          action="https://payfast.co.za/eng/process" 
          method="POST"
          className="hidden"
        >
          <input type="hidden" name="merchant_id" value={payfastData.merchant_id} />
          <input type="hidden" name="merchant_key" value={payfastData.merchant_key} />
          <input type="hidden" name="return_url" value={payfastData.return_url} />
          <input type="hidden" name="cancel_url" value={payfastData.cancel_url} />
          <input type="hidden" name="notify_url" value={payfastData.notify_url} />
          <input type="hidden" name="name_first" value={payfastData.name_first} />
          <input type="hidden" name="name_last" value={payfastData.name_last} />
          <input type="hidden" name="email_address" value={payfastData.email_address} />
          <input type="hidden" name="m_payment_id" value={payfastData.m_payment_id} />
          <input type="hidden" name="amount" value={payfastData.amount} />
          <input type="hidden" name="item_name" value={payfastData.item_name} />
        </form>
      </div>
    </div>
  )
}

function TextLoader() {
  return (
    <p className="text-sm font-medium uppercase tracking-widest text-[#0033A0] animate-pulse">
      Loading checkout...
    </p>
  )
}
