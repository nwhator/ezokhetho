import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'src/data/products.json')

export async function GET() {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([])
    }
    const fileData = fs.readFileSync(filePath, 'utf-8')
    return NextResponse.json(JSON.parse(fileData))
  } catch (error) {
    console.error('Failed to read products:', error)
    return NextResponse.json({ error: 'Failed to read products' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const products = await request.json()
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf-8')
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to save products:', error)
    return NextResponse.json({ error: 'Failed to save products' }, { status: 500 })
  }
}
