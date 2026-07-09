import type { Metadata } from 'next'
import EzkoHeader from '@/components/ezokhetho/ezokhetho-header'
import EzkoFooter from '@/components/ezokhetho/ezokhetho-footer'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms and conditions governing the use of the Ezokhetho website and services.',
}

export default function TermsPage() {
  return (
    <>
      <EzkoHeader />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="mb-16 border-b border-zinc-100 pb-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#FF6B00]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
                Legal
              </span>
            </div>
            <h1 className="font-butler text-5xl font-light text-zinc-900">Terms of Use</h1>
            <p className="mt-4 text-sm text-zinc-400">Last updated: July 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-zinc max-w-none font-moderat prose-headings:font-butler prose-headings:font-light prose-a:text-[#FF6B00]">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Ezokhetho website (ezokhetho.com), you agree to be bound
              by these Terms of Use and all applicable laws and regulations. If you do not agree
              with any of these terms, you are prohibited from using this site.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              All content on this website — including designs, text, graphics, logos, images, and
              collections — is the exclusive property of Ezokhetho and is protected by copyright
              and intellectual property laws. No content may be reproduced without prior written
              consent from Ezokhetho.
            </p>

            <h2>3. Product Information</h2>
            <p>
              We endeavour to display our products as accurately as possible. Colours may vary
              slightly due to monitor settings. All pieces are handcrafted and may have minor
              natural variations — these are a mark of their authenticity.
            </p>

            <h2>4. Purchases & Payments</h2>
            <p>
              All prices are displayed in South African Rand (ZAR). We reserve the right to modify
              prices at any time. Payment is required in full before items are dispatched.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              Ezokhetho shall not be liable for any indirect, incidental, or consequential damages
              arising from the use of our products or website.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Republic of South Africa. Any disputes
              shall be subject to the exclusive jurisdiction of South African courts.
            </p>

            <h2>7. Contact</h2>
            <p>
              For questions regarding these terms, please contact us at{' '}
              <a href="mailto:legal@ezokhetho.com">legal@ezokhetho.com</a>.
            </p>
          </div>
        </div>
      </main>
      <EzkoFooter />
    </>
  )
}
