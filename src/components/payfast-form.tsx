'use client'

import { useEffect, useRef } from 'react'

interface PayFastFormProps {
  fields: Record<string, string>
  actionUrl: string
  autoSubmit?: boolean
}

/**
 * PayFast Payment Form
 * Renders a hidden POST form pointing to PayFast's payment gateway.
 * Set autoSubmit=true to redirect immediately on mount.
 */
export default function PayFastForm({ fields, actionUrl, autoSubmit = false }: PayFastFormProps) {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (autoSubmit && formRef.current) {
      formRef.current.submit()
    }
  }, [autoSubmit])

  return (
    <form ref={formRef} action={actionUrl} method="POST" id="payfast-payment-form">
      {Object.entries(fields).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}

      {!autoSubmit && (
        <button
          type="submit"
          id="payfast-submit"
          className="flex w-full items-center justify-center gap-3 bg-[#0033A0] px-8 py-4 font-moderat text-sm font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#FF6B00]"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
          </svg>
          Pay with PayFast
        </button>
      )}
    </form>
  )
}
