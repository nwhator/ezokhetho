import type { Metadata } from 'next'
import EzkoHeader from '@/components/ezokhetho/ezokhetho-header'
import EzkoFooter from '@/components/ezokhetho/ezokhetho-footer'
import { Truck, RotateCcw, ShieldAlert, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refund & Returns Policy | Ezokhetho',
  description: 'Ezokhetho Returns & Refund Policy — 14-day returns, store credit, R150 standard shipping.',
}

export default function ReturnsPage() {
  return (
    <>
      <EzkoHeader />
      <main className="min-h-screen bg-white pt-36 pb-28">
        <div className="container max-w-4xl px-6 sm:px-8">
          {/* Header */}
          <div className="mb-16 border-b border-zinc-200/80 pb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#FF6B00]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
                Customer Care &amp; Policies
              </span>
            </div>
            <h1 className="font-butler text-4xl font-light tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Refund &amp; Returns
            </h1>
            <p className="mt-4 font-moderat text-sm text-zinc-400">
              Last updated: July 2025 · Applicable to all online orders
            </p>
          </div>

          {/* Key Policy Highlights Grid */}
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/50 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0033A0]/10 text-[#0033A0]">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="font-butler text-lg font-medium text-zinc-900">Standard Shipping</h3>
              <p className="mt-2 font-moderat text-sm leading-relaxed text-zinc-600">
                <strong>R150 standard shipping</strong> applies to all domestic deliveries throughout South Africa.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/50 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF6B00]/10 text-[#FF6B00]">
                <RotateCcw className="h-5 w-5" />
              </div>
              <h3 className="font-butler text-lg font-medium text-zinc-900">14-Day Return Window</h3>
              <p className="mt-2 font-moderat text-sm leading-relaxed text-zinc-600">
                Request a return within <strong>14 days</strong> of receiving your garment. Items must be unworn with original tags.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/50 p-6 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0033A0]/10 text-[#0033A0]">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-butler text-lg font-medium text-zinc-900">Store Credit</h3>
              <p className="mt-2 font-moderat text-sm leading-relaxed text-zinc-600">
                Approved returns are issued as an <strong>Ezokhetho Store Voucher</strong> redeemable on all future purchases.
              </p>
            </div>
          </div>

          {/* Main Content Body */}
          <div className="space-y-12 font-moderat text-[15px] leading-relaxed text-zinc-600">
            <section className="space-y-4">
              <h2 className="font-butler text-2xl font-light text-zinc-900 sm:text-3xl">
                Eligibility &amp; Guidelines
              </h2>
              <p>
                To be eligible for a return, your garment must be in the exact condition in which you
                received it — unworn, unwashed, unaltered, free of scents or makeup marks, with all
                original luxury tags attached, and in its original Ezokhetho packaging.
              </p>
              <p>
                To initiate a return, please email us at{' '}
                <a href="mailto:info@ezokhetho.com" className="font-medium text-[#0033A0] underline hover:text-[#FF6B00] transition-colors">
                  info@ezokhetho.com
                </a>{' '}
                with your order number and reason for return. Once reviewed and approved, we will provide full shipping instructions.{' '}
                <strong className="text-zinc-900">Returns sent without prior authorisation will not be accepted.</strong>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-butler text-2xl font-light text-zinc-900 sm:text-3xl">
                Damages and Order Issues
              </h2>
              <p>
                Please inspect your order immediately upon delivery. If any garment is defective, damaged in transit, or if you have received an incorrect size or piece, notify us at{' '}
                <a href="mailto:info@ezokhetho.com" className="font-medium text-[#0033A0] underline hover:text-[#FF6B00] transition-colors">
                  info@ezokhetho.com
                </a>{' '}
                within 48 hours of delivery. We will prioritise assessing and resolving the issue promptly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-butler text-2xl font-light text-zinc-900 sm:text-3xl">
                Exceptions &amp; Non-Returnable Items
              </h2>
              <p>
                Due to the artisanal and custom nature of bespoke tailoring, certain items cannot be returned or exchanged:
              </p>
              <ul className="my-4 space-y-2.5 list-disc pl-5 marker:text-[#FF6B00]">
                <li><strong className="text-zinc-900">Custom &amp; Commissioned Pieces:</strong> Made-to-measure, customized, or altered garments are strictly non-returnable.</li>
                <li><strong className="text-zinc-900">Sale &amp; Archival Items:</strong> Discounted, promotional, or archive sale pieces are final sale.</li>
                <li><strong className="text-zinc-900">Gift Cards &amp; Vouchers:</strong> Non-refundable and cannot be redeemed for cash.</li>
                <li><strong className="text-zinc-900">Personalised Items:</strong> Specially monogrammed or custom-fitted garments.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-butler text-2xl font-light text-zinc-900 sm:text-3xl">
                Return Shipping &amp; Exchanges
              </h2>
              <p>
                Customers are responsible for return courier arrangements and associated shipping costs. For international returns, customs duties, taxes, and import clearances are the responsibility of the customer.
              </p>
              <p>
                The most seamless way to exchange a size is to return the original item for store credit upon approval and place a new order for your desired size.
              </p>
            </section>
          </div>

          {/* Contact & Support Callout */}
          <div className="mt-16 rounded-2xl border border-[#0033A0]/15 bg-gradient-to-br from-[#0033A0]/5 to-transparent p-8 sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-butler text-2xl font-light text-zinc-900">Have questions about a return?</h3>
                <p className="mt-1 font-moderat text-sm text-zinc-500">
                  Our customer care team is here to assist with sizing, exchanges, and order enquiries.
                </p>
              </div>
              <a
                href="mailto:info@ezokhetho.com"
                className="inline-flex shrink-0 items-center justify-center bg-[#0033A0] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#FF6B00]"
              >
                Contact Studio
              </a>
            </div>
          </div>
        </div>
      </main>
      <EzkoFooter />
    </>
  )
}
