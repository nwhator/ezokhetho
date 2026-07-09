import { NextRequest, NextResponse } from 'next/server'
import { getTransactions } from '@/lib/transactions'

export async function GET() {
  try {
    const list = getTransactions()
    return NextResponse.json(list)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch transactions' }, { status: 500 })
  }
}
