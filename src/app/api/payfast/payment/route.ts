import { NextRequest, NextResponse } from 'next/server'
import { createPayFastPaymentData, PayFastPaymentData } from '@/lib/payfast-signature'

const PAYFAST_ACTION_URL = 'https://www.payfast.co.za/eng/process'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      return_url,
      cancel_url,
      notify_url,
      name_first,
      name_last,
      email_address,
      m_payment_id,
      amount,
      item_name,
    } = body

    if (!return_url || !cancel_url || !notify_url || !m_payment_id || !amount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const merchant_id = process.env.PAYFAST_MERCHANT_ID ?? ''
    const merchant_key = process.env.PAYFAST_MERCHANT_KEY ?? ''

    if (!merchant_id || !merchant_key) {
      return NextResponse.json({ error: 'PayFast credentials not configured' }, { status: 500 })
    }

    const paymentData: PayFastPaymentData = {
      merchant_id,
      merchant_key,
      return_url,
      cancel_url,
      notify_url,
      name_first: name_first || '',
      name_last: name_last || '',
      email_address: email_address || '',
      m_payment_id,
      amount,
      item_name: item_name || 'Order',
    }

    const signedData = createPayFastPaymentData(paymentData)

<<<<<<< HEAD
    return NextResponse.json({ success: true, data: signedData, actionUrl: PAYFAST_ACTION_URL })
=======
    return NextResponse.json({
      success: true,
      data: signedData,
      actionUrl: 'https://www.payfast.co.za/eng/process',
    })
>>>>>>> 181daf269f01d55423a78f9af9ddb508dad0a12b
  } catch (error) {
    console.error('Failed to generate PayFast payment data:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}