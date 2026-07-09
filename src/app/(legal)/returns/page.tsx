import type { Metadata } from 'next'
import EzkoHeader from '@/components/ezokhetho/ezokhetho-header'
import EzkoFooter from '@/components/ezokhetho/ezokhetho-footer'

export const metadata: Metadata = {
  title: 'Returns & Exchanges',
  description: 'Ezokhetho Returns & Exchange Policy — our commitment to your satisfaction.',
}

export default function ReturnsPage() {
  return (
    <>
      <EzkoHeader />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="container max-w-3xl">
          <div className="mb-16 border-b border-zinc-100 pb-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#FF6B00]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
                Customer Care
              </span>
            </div>
            <h1 className="font-butler text-5xl font-light text-zinc-900">
              Returns & Exchanges
            </h1>
            <p className="mt-4 text-sm text-zinc-400">Last updated: July 2025</p>
          </div>

          <div className="prose prose-zinc max-w-none font-moderat prose-headings:font-butler prose-headings:font-light prose-a:text-[#FF6B00]">
            <h2>Our Commitment</h2>
            <p>
              Every Ezokhetho piece is crafted with care and intention. If for any reason you are
              not fully satisfied with your purchase, we are here to help.
            </p>

            <h2>Return Window</h2>
            <p>
              We accept returns within <strong>14 days</strong> of delivery, provided that items
              are in their original, unworn condition with all tags attached.
            </p>

            <h2>Non-Returnable Items</h2>
            <ul>
              <li>Items that have been worn, washed, or altered</li>
              <li>Custom or made-to-order pieces</li>
              <li>Sale or archive items (unless faulty)</li>
            </ul>

            <h2>How to Initiate a Return</h2>
            <ol>
              <li>
                Email <a href="mailto:returns@ezokhetho.com">returns@ezokhetho.com</a> with your
                order number and reason for return
              </li>
              <li>We will respond within 2 business days with return instructions</li>
              <li>Package the item securely in its original packaging</li>
              <li>Ship to the address provided — return shipping costs are at your expense</li>
            </ol>

            <h2>Exchanges</h2>
            <p>
              We offer exchanges for different sizes where stock permits. Please contact us to
              confirm availability before sending your item back.
            </p>

            <h2>Refunds</h2>
            <p>
              Approved refunds will be processed within 5–10 business days of receiving your
              return. Refunds are issued to your original payment method.
            </p>

            <h2>Faulty Items</h2>
            <p>
              If you receive a damaged or faulty item, please contact us immediately at{' '}
              <a href="mailto:returns@ezokhetho.com">returns@ezokhetho.com</a> with photographs
              of the fault. We will arrange a replacement or full refund at no additional cost.
            </p>
          </div>
        </div>
      </main>
      <EzkoFooter />
    </>
  )
}
