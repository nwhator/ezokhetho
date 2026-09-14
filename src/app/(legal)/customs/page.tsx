import type { Metadata } from 'next'
import EzkoHeader from '@/components/ezokhetho/ezokhetho-header'
import EzkoFooter from '@/components/ezokhetho/ezokhetho-footer'

export const metadata: Metadata = {
  title: 'Taxes, Import Duties and Customs | Ezokhetho',
  description:
    'Information regarding international taxes, customs duties, clearance fees, and compliance for Ezokhetho orders.',
}

export default function CustomsPage() {
  return (
    <>
      <EzkoHeader />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="container max-w-3xl">
          <div className="mb-16 border-b border-zinc-100 pb-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#FF6B00]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
                Customer Care &amp; Compliance
              </span>
            </div>
            <h1 className="font-butler text-4xl font-light text-zinc-900 sm:text-5xl">
              Taxes, Import Duties and Customs
            </h1>
            <p className="mt-4 text-sm text-zinc-400">Applicable to all international shipments</p>
          </div>

          <div className="space-y-8 font-moderat text-[15px] leading-relaxed text-zinc-600">
            <p>
              Any import duties, taxes, customs charges, clearance fees or other charges imposed by
              the destination country are the sole responsibility of the recipient. Ezokhetho will
              not be responsible for any additional costs incurred by the recipient in connection
              with the importation or delivery of an order.
            </p>

            <p>
              Customers are responsible for ensuring that their order complies with all applicable
              customs requirements, laws and regulations of the country to which the products are
              being shipped. Ezokhetho will not be liable for any delays, additional charges,
              confiscation or other consequences arising from a recipient’s failure to comply with
              the applicable laws and regulations of the destination country.
            </p>

            <p>
              Please note that international orders may be subject to inspection by customs
              authorities. Customs authorities may open and inspect packages where required by
              law. The value and relevant details of the goods will be accurately declared on the
              documentation accompany.
            </p>

            <div className="mt-12 rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-6">
              <h3 className="font-butler text-lg font-medium text-zinc-900">Need Assistance?</h3>
              <p className="mt-2 text-sm text-zinc-500">
                For further clarification regarding international orders, declarations, or shipping
                logistics, please contact our team at{' '}
                <a
                  href="mailto:info@ezokhetho.com"
                  className="font-medium text-[#0033A0] underline hover:text-[#FF6B00] transition-colors"
                >
                  info@ezokhetho.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <EzkoFooter />
    </>
  )
}
