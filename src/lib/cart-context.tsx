'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { formatZAR } from '@/lib/currency'

export interface CartItem {
  id: number
  handle: string
  title: string
  price: number
  image: string
  color: string
  size: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (id: number, color: string, size: string) => void
  updateQty: (id: number, color: string, size: string, qty: number) => void
  clearCart: () => void
  subtotal: number
  shipping: number
  total: number
  count: number
}

const CartContext = createContext<CartContextType | null>(null)

const SHIPPING_RATE = 150 // R150 flat rate per brand policy

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('ezokhetho-cart')
    if (stored) {
      try { setItems(JSON.parse(stored)) } catch {}
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('ezokhetho-cart', JSON.stringify(items))
    }
  }, [items, mounted])

  const addItem = (newItem: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setItems(prev => {
      const existing = prev.find(
        i => i.id === newItem.id && i.color === newItem.color && i.size === newItem.size
      )
      if (existing) {
        return prev.map(i =>
          i.id === newItem.id && i.color === newItem.color && i.size === newItem.size
            ? { ...i, quantity: i.quantity + (newItem.quantity ?? 1) }
            : i
        )
      }
      return [...prev, { ...newItem, quantity: newItem.quantity ?? 1 }]
    })
  }

  const removeItem = (id: number, color: string, size: string) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.color === color && i.size === size)))
  }

  const updateQty = (id: number, color: string, size: string, qty: number) => {
    if (qty < 1) return removeItem(id, color, size)
    setItems(prev =>
      prev.map(i =>
        i.id === id && i.color === color && i.size === size ? { ...i, quantity: qty } : i
      )
    )
  }

  const clearCart = () => setItems([])

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const shipping = items.length > 0 ? SHIPPING_RATE : 0
  const total = subtotal + shipping
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, subtotal, shipping, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
