import type { Metadata } from 'next'
import EzkoHeader from '@/components/ezokhetho/ezokhetho-header'
import EzkoFooter from '@/components/ezokhetho/ezokhetho-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Ezokhetho Privacy Policy — how we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <>
      <EzkoHeader />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="container max-w-3xl">
          <div className="mb-16 border-b border-zinc-100 pb-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#FF6B00]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
                Legal
              </span>
            </div>
            <h1 className="font-butler text-5xl font-light text-zinc-900">Privacy Policy</h1>
            <p className="mt-4 text-sm text-zinc-400">Last updated: July 2025</p>
          </div>

          <div className="prose prose-zinc max-w-none font-moderat prose-headings:font-butler prose-headings:font-light prose-a:text-[#FF6B00]">
            <h2>1. Information We Collect</h2>
            <p>
              When you visit our website or make a purchase, we may collect personal information
              including your name, email address, shipping address, and payment details. We also
              collect non-personal data such as browser type and browsing behaviour.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use your information to process orders, communicate with you about your purchases,
              send newsletters (only with your consent), and improve our website experience.
            </p>

            <h2>3. Data Protection</h2>
            <p>
              We are committed to protecting your personal data in compliance with the Protection
              of Personal Information Act (POPIA) of South Africa. Your data is stored securely
              and never sold to third parties.
            </p>

            <h2>4. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You may disable cookies
              in your browser settings, though some features may not function as intended.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information at any
              time. To exercise these rights, contact us at{' '}
              <a href="mailto:privacy@ezokhetho.com">privacy@ezokhetho.com</a>.
            </p>

            <h2>6. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be posted on this page
              with an updated revision date.
            </p>
          </div>
        </div>
      </main>
      <EzkoFooter />
    </>
  )
}
