import { NextRequest, NextResponse } from 'next/server'

/**
 * PayFast ITN (Instant Transaction Notification) handler.
 * PayFast sends a POST to this URL when a payment completes.
 * This endpoint should verify the payment and update your order status.
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const data: Record<string, string> = {}

    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    // Log for debugging (remove in production)
    console.log('[PayFast ITN]', data)

    const paymentStatus = data['payment_status']
    const orderId = data['m_payment_id']
    const amount = data['amount_gross']

    if (paymentStatus === 'COMPLETE') {
      // TODO: Update your order in the database
      // Example: await updateOrder(orderId, { status: 'paid', amount })
      console.log(`[PayFast] Order ${orderId} paid — R${amount}`)
    }

    // PayFast expects a 200 OK response
    return new NextResponse('OK', { status: 200 })
  } catch (error) {
    console.error('[PayFast ITN Error]', error)
    return new NextResponse('Error', { status: 500 })
  }
}
