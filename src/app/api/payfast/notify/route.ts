import { NextRequest, NextResponse } from 'next/server'
import { updateTransactionStatus, getTransactions } from '@/lib/transactions'
import { sendOrderAcknowledgement } from '@/lib/acknowledgement-email'

/**
 * PayFast ITN (Instant Transaction Notification) handler.
 * PayFast sends a POST to this URL when a payment completes.
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const data: Record<string, string> = {}

    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    console.log('[PayFast ITN Received]', data)

    const paymentStatus = data['payment_status']
    const mPaymentId = data['m_payment_id'] // This is our local transaction.id
    const pfPaymentId = data['pf_payment_id'] // PayFast unique reference

    if (mPaymentId) {
      if (paymentStatus === 'COMPLETE') {
        updateTransactionStatus(mPaymentId, 'COMPLETE', pfPaymentId)
        console.log(`[PayFast] Transaction ${mPaymentId} marked as COMPLETE.`)

        // Send order acknowledgement email to the customer
        const transaction = getTransactions().find((t) => t.id === mPaymentId)
        if (transaction) {
          const sent = await sendOrderAcknowledgement(transaction)
          console.log(
            sent
              ? `[PayFast] Acknowledgement email sent to ${transaction.email}`
              : `[PayFast] Acknowledgement email not sent (see log above)`
          )
        } else {
          console.log(`[PayFast] No stored transaction found for ${mPaymentId} — email not sent.`)
        }
      } else if (paymentStatus === 'FAILED') {
        updateTransactionStatus(mPaymentId, 'FAILED', pfPaymentId)
        console.log(`[PayFast] Transaction ${mPaymentId} marked as FAILED.`)
      }
    }

    return new NextResponse('OK', { status: 200 })
  } catch (error) {
    console.error('[PayFast ITN Error]', error)
    return new NextResponse('Error', { status: 500 })
  }
}
