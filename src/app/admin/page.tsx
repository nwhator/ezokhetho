'use client'

import { useState, useEffect } from 'react'
import { Logo } from '@/app/logo'
import Link from 'next/link'
import { ArrowLeft, Package, Plus, Edit2, Trash2, Tag, Loader2, CreditCard } from 'lucide-react'

interface TransactionItem {
  title: string
  quantity: number
  price: number
  color: string
  size: string
}

interface Transaction {
  id: string
  email: string
  name: string
  items: TransactionItem[]
  subtotal: number
  shipping: number
  total: number
  status: 'PENDING' | 'COMPLETE' | 'FAILED'
  createdAt: string
  paymentId?: string
}

interface Product {
  id: number
  title: string
  handle: string
  vendor: string
  tags: string[]
  price: number
  images: Array<{ src: string; width: number; height: number; alt: string }>
  featured_image: { src: string; width: number; height: number; alt: string }
  options: Array<{
    name: string
    optionValues: Array<{
      name: string
      swatch: { color: string; image: string | null } | null
    }>
  }>
  selected_options: Array<{ name: string; value: string }>
  collections: Array<{ title: string; id: string | number; handle: string }>
  description: string
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingTx, setLoadingTx] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editing, setEditing] = useState<Product | null>(null)
  const [showForm, setShowForm] = useState(false)

  const [form, setForm] = useState({
    title: '',
    handle: '',
    price: '',
    collection: 'ngithwale',
    vendor: 'Ezokhetho',
    imageUrl: '',
    description: '',
    color: '',
    sizes: 'S, M, L',
  })

  // Load products and transactions from local products.json API on mount
  useEffect(() => {
    fetchProducts()
    fetchTransactions()
  }, [])

  const fetchTransactions = async () => {
    try {
      setLoadingTx(true)
      const res = await fetch('/api/admin/transactions')
      const data = await res.json()
      if (Array.isArray(data)) {
        setTransactions(data)
      }
    } catch (e) {
      console.error('Failed to load transactions', e)
    } finally {
      setLoadingTx(false)
    }
  }

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/admin/products')
      const data = await res.json()
      if (Array.isArray(data)) {
        setProducts(data)
      }
    } catch (err) {
      console.error('Failed to load products:', err)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setForm({ title: '', handle: '', price: '', collection: 'ngithwale', vendor: 'Ezokhetho', imageUrl: '', description: '', color: '', sizes: 'S, M, L' })
    setEditing(null)
    setShowForm(false)
  }

  const saveProductsList = async (updatedList: Product[]) => {
    setSaving(true)
    try {
      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedList),
      })
      if (res.ok) {
        setProducts(updatedList)
        resetForm()
      } else {
        alert('Failed to save changes.')
      }
    } catch (err) {
      console.error(err)
      alert('Error communicating with database.')
    } finally {
      setSaving(false)
    }
  }

  const handleSave = async () => {
    if (!form.title || !form.price) return alert('Title and price are required.')
    const handle = form.handle || form.title.toLowerCase().replace(/\s+/g, '-')
    const collectionMeta: Record<string, { title: string; handle: string }> = {
      entathakusa: { title: "Entathakusa '26", handle: 'entathakusa' },
      zodwa: { title: "Zodwa '25", handle: 'zodwa' },
      ngithwale: { title: "Ngithwale '24", handle: 'ngithwale' },
      'kwa-suka-sukela': { title: "Kwa-suka-sukela '24", handle: 'kwa-suka-sukela' },
      inganekwane: { title: "Inganekwane '23", handle: 'inganekwane' },
      umkhathizwe: { title: "Umkhathizwe '23", handle: 'umkhathizwe' },
      khumbulekhaya: { title: "Khumbulekhaya '22", handle: 'khumbulekhaya' },
      izimbokodo: { title: "Izimbokodo '22", handle: 'izimbokodo' },
      sophiatown: { title: "Sophiatown '21", handle: 'sophiatown' },
    }
    const col = collectionMeta[form.collection]
    const sizeList = form.sizes.split(',').map(s => ({ swatch: null, name: s.trim() }))

    const newProduct: Product = {
      id: editing?.id ?? Date.now(),
      title: form.title,
      handle,
      vendor: form.vendor,
      tags: [form.collection],
      price: parseFloat(form.price),
      images: [{ src: form.imageUrl || '/images/placeholder.webp', width: 1200, height: 1600, alt: form.title }],
      featured_image: { src: form.imageUrl || '/images/placeholder.webp', width: 1200, height: 1600, alt: form.title },
      options: [
        { name: 'Color', optionValues: [{ name: form.color || 'Black', swatch: { color: '#0033A0', image: null } }] },
        { name: 'Size', optionValues: sizeList },
      ],
      selected_options: [
        { name: 'Color', value: form.color || 'Black' },
        { name: 'Size', value: sizeList[0]?.name ?? 'M' },
      ],
      collections: [{ title: col.title, id: col.handle, handle: col.handle }],
      description: form.description,
    }

    const updatedList = editing
      ? products.map(p => p.id === editing.id ? newProduct : p)
      : [...products, newProduct]

    await saveProductsList(updatedList)
  }

  const handleEdit = (product: Product) => {
    setEditing(product)
    setForm({
      title: product.title,
      handle: product.handle,
      price: product.price.toString(),
      collection: product.collections[0]?.handle ?? 'ngithwale',
      vendor: product.vendor,
      imageUrl: typeof product.images[0] === 'object' ? (product.images[0] as any).src : product.images[0] ?? '',
      description: product.description ?? '',
      color: product.selected_options.find(o => o.name === 'Color')?.value ?? '',
      sizes: product.options.find(o => o.name === 'Size')?.optionValues.map(v => v.name).join(', ') ?? 'S, M, L',
    })
    setShowForm(true)
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this product? This will remove it permanently from the website.')) {
      const updatedList = products.filter(p => p.id !== id)
      await saveProductsList(updatedList)
    }
  }

  const collectionColors: Record<string, string> = {
    ngithwale: '#0033A0',
    izimbokodo: '#FF6B00',
    khumbulekhaya: '#0033A0',
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Admin Nav */}
      <header className="border-b border-[#0033A0]/10 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[#0033A0] transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to site
            </Link>
            <div className="h-5 w-px bg-zinc-200" />
            <Logo variant="dark" showWordmark={false} />
            <span className="font-butler text-lg font-medium text-[#0033A0]">Admin Panel</span>
          </div>
          <button
            onClick={() => { resetForm(); setShowForm(true) }}
            id="add-product-btn"
            className="flex items-center gap-2 bg-[#0033A0] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white hover:bg-[#FF6B00] transition-all duration-300"
          >
            <Plus className="h-3.5 w-3.5" />
            Add Product
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Notice */}
        <div className="mb-6 border border-[#0033A0]/20 bg-[#0033A0]/5 p-4 text-xs font-moderat text-[#0033A0] leading-relaxed">
          <strong>Database Connected:</strong> Products added or removed here directly update the <code>src/data/products.json</code> file, updating the shop and collections pages instantly.
        </div>

        {/* Product Form */}
        {showForm && (
          <div className="mb-8 border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 font-butler text-2xl font-light text-[#0033A0]">
              {editing ? 'Edit Product' : 'New Product'}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { label: 'Product Name *', key: 'title', placeholder: 'e.g. Structural Coat' },
                { label: 'URL Handle (auto-generated)', key: 'handle', placeholder: 'e.g. structural-coat' },
                { label: 'Price (ZAR) *', key: 'price', placeholder: 'e.g. 8500' },
                { label: 'Vendor', key: 'vendor', placeholder: 'Ezokhetho' },
                { label: 'Color', key: 'color', placeholder: 'e.g. Midnight Blue' },
                { label: 'Sizes (comma-separated)', key: 'sizes', placeholder: 'S, M, L, XL' },
                { label: 'Image URL or /images/... path', key: 'imageUrl', placeholder: '/images/fashion/coat.jpg' },
              ].map(({ label, key, placeholder }) => (
                <div key={key}>
                  <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-500">{label}</label>
                  <input
                    type="text"
                    value={(form as any)[key]}
                    onChange={e => setForm(prev => ({ ...prev, [key]: e.target.value }))}
                    placeholder={placeholder}
                    className="w-full border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-[#0033A0]"
                  />
                </div>
              ))}
              <div>
                <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-500">Collection</label>
                <select
                  value={form.collection}
                  onChange={e => setForm(prev => ({ ...prev, collection: e.target.value }))}
                  className="w-full border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-[#0033A0]"
                >
                  <option value="entathakusa">Entathakusa '26</option>
                  <option value="zodwa">Zodwa '25</option>
                  <option value="ngithwale">Ngithwale '24</option>
                  <option value="kwa-suka-sukela">Kwa-suka-sukela '24</option>
                  <option value="inganekwane">Inganekwane '23</option>
                  <option value="umkhathizwe">Umkhathizwe '23</option>
                  <option value="khumbulekhaya">Khumbulekhaya '22</option>
                  <option value="izimbokodo">Izimbokodo '22</option>
                  <option value="sophiatown">Sophiatown '21</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-500">Description</label>
                <textarea
                  value={form.description}
                  onChange={e => setForm(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  placeholder="Product description..."
                  className="w-full border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-[#0033A0]"
                />
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                disabled={saving}
                onClick={handleSave}
                className="flex items-center gap-2 bg-[#0033A0] px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white hover:bg-[#FF6B00] transition-colors disabled:opacity-50"
              >
                {saving && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                {editing ? 'Update Product' : 'Save Product'}
              </button>
              <button onClick={resetForm} className="border border-zinc-300 px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-500 hover:border-zinc-500 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Product Table */}
        <div className="bg-white border border-zinc-200 shadow-sm">
          <div className="border-b border-zinc-100 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-[#0033A0]" />
              <h2 className="font-butler text-xl text-[#0033A0]">Products ({products.length})</h2>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-zinc-400">
              <Loader2 className="h-8 w-8 animate-spin text-[#0033A0] mb-2" />
              <span className="text-xs uppercase tracking-[0.15em]">Loading products database...</span>
            </div>
          ) : products.length === 0 ? (
            <div className="py-20 text-center text-zinc-400">
              <Package className="h-12 w-12 mx-auto mb-3 stroke-[1.2]" />
              <p className="font-butler text-lg font-light text-zinc-700">No products found</p>
              <p className="text-xs mt-1">Click &quot;Add Product&quot; to populate your store database.</p>
            </div>
          ) : (
            <div className="divide-y divide-zinc-100">
              {products.map(product => {
                const colHandle = product.collections[0]?.handle ?? 'ngithwale'
                const imgSrc = typeof product.images[0] === 'object' ? (product.images[0] as any).src : product.images[0]
                return (
                  <div key={product.id} className="flex items-center gap-4 px-6 py-4">
                    {/* Thumb */}
                    <div className="h-14 w-10 flex-shrink-0 overflow-hidden bg-zinc-100">
                      <img src={imgSrc} alt={product.title} className="h-full w-full object-cover" />
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="font-moderat text-sm font-medium text-zinc-900">{product.title}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="inline-block px-2 py-0.5 text-[9px] uppercase tracking-[0.1em] text-white"
                          style={{ backgroundColor: collectionColors[colHandle] ?? '#0033A0' }}
                        >
                          <Tag className="inline h-2 w-2 mr-1" />
                          {colHandle}
                        </span>
                        <span className="text-[11px] text-zinc-400">{product.handle}</span>
                      </div>
                    </div>
                    {/* Price */}
                    <div className="font-moderat text-sm font-medium text-[#0033A0] w-24 text-right">
                      R {product.price.toLocaleString('en-ZA')}
                    </div>
                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleEdit(product)} className="flex h-8 w-8 items-center justify-center border border-zinc-200 text-zinc-400 hover:border-[#0033A0] hover:text-[#0033A0] transition-all">
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="flex h-8 w-8 items-center justify-center border border-zinc-200 text-zinc-400 hover:border-red-400 hover:text-red-500 transition-all">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Upload hint */}
        <div className="mt-6 border border-dashed border-zinc-300 p-4 text-xs font-moderat text-zinc-400 leading-relaxed">
          <strong>How to add custom images:</strong> Place the garment pictures into the <code>public/images/</code> folder of the project, then specify the path as <code>/images/filename.jpg</code> inside the form above.
        </div>

        {/* Transactions Panel */}
        <div className="mt-12 bg-white border border-zinc-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 border-b border-zinc-100 pb-4 mb-6">
            <CreditCard className="h-5 w-5 text-[#0033A0]" />
            <h2 className="font-moderat text-lg font-bold tracking-tight text-zinc-900 uppercase">
              Transaction &amp; PayFast Logs
            </h2>
          </div>

          {loadingTx ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-[#0033A0]" />
            </div>
          ) : transactions.length === 0 ? (
            <div className="text-center py-12 text-sm text-zinc-400 font-moderat">
              No transactions recorded yet. Completed and pending test payments will appear here.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left font-moderat text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    <th className="pb-3">Order Ref</th>
                    <th className="pb-3">Date</th>
                    <th className="pb-3">Customer</th>
                    <th className="pb-3">Items</th>
                    <th className="pb-3 text-right">Total Amount</th>
                    <th className="pb-3 text-center">Status</th>
                    <th className="pb-3">PayFast Ref</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-zinc-50/50">
                      <td className="py-4 font-semibold text-zinc-900">{tx.id}</td>
                      <td className="py-4 text-zinc-500 text-xs">
                        {new Date(tx.createdAt).toLocaleString('en-ZA')}
                      </td>
                      <td className="py-4">
                        <div className="font-medium text-zinc-900">{tx.name}</div>
                        <div className="text-xs text-zinc-400">{tx.email}</div>
                      </td>
                      <td className="py-4 text-xs max-w-xs">
                        {tx.items?.map((item, idx) => (
                          <div key={idx} className="text-zinc-600 mb-0.5">
                            {item.title} ({item.color} / {item.size}) x{item.quantity}
                          </div>
                        ))}
                      </td>
                      <td className="py-4 text-right font-semibold text-[#0033A0]">
                        R {tx.total.toFixed(2)}
                      </td>
                      <td className="py-4 text-center">
                        <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                          tx.status === 'COMPLETE' ? 'bg-green-100 text-green-800' :
                          tx.status === 'FAILED' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="py-4 text-xs font-mono text-zinc-400">
                        {tx.paymentId || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
