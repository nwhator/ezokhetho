import { NextRequest, NextResponse } from 'next/server'
import { addTransaction } from '@/lib/transactions'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, email, name, items, subtotal, shipping, total } = body

    if (!id || !email) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
    }

    addTransaction({
      id,
      email,
      name,
      items,
      subtotal,
      shipping,
      total,
      status: 'PENDING',
      createdAt: new Date().toISOString()
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to create pending transaction:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
