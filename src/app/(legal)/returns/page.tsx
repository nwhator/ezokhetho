import type { Metadata } from 'next'
import EzkoHeader from '@/components/ezokhetho/ezokhetho-header'
import EzkoFooter from '@/components/ezokhetho/ezokhetho-footer'

export const metadata: Metadata = {
  title: 'Refund & Returns Policy',
  description: 'Ezokhetho Returns & Refund Policy — 14-day returns, store credit, R150 standard shipping.',
}

export default function ReturnsPage() {
  return (
    <>
      <EzkoHeader />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="container max-w-3xl">
          <div className="mb-16 border-b border-[#0033A0]/10 pb-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#FF6B00]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
                Customer Care
              </span>
            </div>
            <h1 className="font-butler text-5xl font-light text-[#0033A0]">
              Refund &amp; Returns
            </h1>
            <p className="mt-4 font-moderat text-sm text-zinc-400">Last updated: July 2025</p>
          </div>

          <div className="prose prose-zinc max-w-none font-moderat prose-headings:font-butler prose-headings:font-light prose-headings:text-[#0033A0] prose-a:text-[#FF6B00] prose-a:no-underline hover:prose-a:underline">

            <p className="text-base leading-relaxed text-zinc-600">
              <strong>R150 standard shipping</strong> applies to all local deliveries within South Africa.
            </p>

            <p className="leading-relaxed text-zinc-600">
              We have a <strong>14-day return policy</strong>, which means you have 14 days after
              receiving your item to request a return.
            </p>

            <p className="leading-relaxed text-zinc-600">
              To be eligible for a return, your item must be in the same condition in which you
              received it — unworn, unused, with all original tags attached, and in its original
              packaging. You will also need to provide proof of purchase.
            </p>

            <p className="leading-relaxed text-zinc-600">
              To initiate a return, please contact us at{' '}
              <a href="mailto:sales@ezokhetho.com">sales@ezokhetho.com</a>. If your return is
              approved, we will provide instructions on how and where to send your item.{' '}
              <strong>Returns sent without prior approval will not be accepted.</strong>
            </p>

            <p className="leading-relaxed text-zinc-600">
              For any questions regarding returns, please contact{' '}
              <a href="mailto:sales@ezokhetho.com">sales@ezokhetho.com</a>.
            </p>

            <h2>Damages and Issues</h2>
            <p className="leading-relaxed text-zinc-600">
              Please inspect your order upon delivery and contact us immediately if the item is
              defective, damaged, or if you have received the incorrect item. We will assess the
              issue and work with you to resolve it as quickly as possible.
            </p>

            <h2>Exceptions / Non-Returnable Items</h2>
            <p className="leading-relaxed text-zinc-600">
              The following items are <strong>not eligible</strong> for return, exchange, or store credit:
            </p>
            <ul className="text-zinc-600">
              <li>Sale or discounted items</li>
              <li>Gift cards</li>
              <li>Competition prizes or promotional giveaways</li>
              <li>Custom-made, made-to-measure, or altered garments</li>
              <li>Any garment that has been personalised or specially commissioned</li>
            </ul>
            <p className="leading-relaxed text-zinc-600">
              <strong>Custom garments are strictly non-returnable and non-exchangeable.</strong>
            </p>

            <h2>Return Shipping</h2>
            <p className="leading-relaxed text-zinc-600">
              Customers are responsible for all return shipping costs. For international orders,
              any duties, taxes, or import fees associated with the return shipment are the
              responsibility of the customer.
            </p>

            <h2>Exchanges</h2>
            <p className="leading-relaxed text-zinc-600">
              The quickest way to receive a different size or item is to return the original item
              (subject to approval) and place a new order once your return has been processed.
            </p>

            <h2>Store Credit</h2>
            <p className="leading-relaxed text-zinc-600">
              Once we receive and inspect your returned item, we will notify you whether the return
              has been approved.
            </p>
            <p className="leading-relaxed text-zinc-600">
              Approved returns will be issued in the form of an{' '}
              <strong>Ezokhetho store voucher</strong> equal to the value of the returned item. The
              voucher can be used toward any future purchase on our website or through our studio.
            </p>
            <p className="leading-relaxed text-zinc-600">
              Please note that <strong>shipping costs are non-refundable</strong>, and store
              vouchers cannot be exchanged for cash.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 border border-[#0033A0]/10 bg-[#0033A0]/5 p-8">
            <p className="font-butler text-2xl font-light text-[#0033A0]">Need help?</p>
            <p className="mt-2 font-moderat text-sm text-zinc-500">
              Our team is available to assist with any queries.
            </p>
            <a
              href="mailto:sales@ezokhetho.com"
              className="mt-5 inline-flex items-center gap-2 bg-[#0033A0] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#FF6B00]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <EzkoFooter />
    </>
  )
}
