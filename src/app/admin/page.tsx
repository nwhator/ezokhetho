'use client'

import { useState } from 'react'
import { Logo } from '@/app/logo'
import Link from 'next/link'
import { ezokhethoProducts } from '@/data'
import { ArrowLeft, Package, Plus, Edit2, Trash2, Tag } from 'lucide-react'

type Product = (typeof ezokhethoProducts)[0]

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>(ezokhethoProducts as Product[])
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

  const resetForm = () => {
    setForm({ title: '', handle: '', price: '', collection: 'ngithwale', vendor: 'Ezokhetho', imageUrl: '', description: '', color: '', sizes: 'S, M, L' })
    setEditing(null)
    setShowForm(false)
  }

  const handleSave = () => {
    if (!form.title || !form.price) return alert('Title and price are required.')
    const handle = form.handle || form.title.toLowerCase().replace(/\s+/g, '-')
    const collectionMeta: Record<string, { title: string; handle: string }> = {
      ngithwale: { title: 'Ngithwale — Carry Me', handle: 'ngithwale' },
      izimbokodo: { title: 'Izimbokodo — Strength of Stone', handle: 'izimbokodo' },
      khumbulekhaya: { title: 'Khumbulekhaya — Remember Home', handle: 'khumbulekhaya' },
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
        { name: 'Color', optionValues: [{ name: form.color || 'Black', swatch: { color: '#000000', image: null } }] },
        { name: 'Size', optionValues: sizeList },
      ],
      selected_options: [
        { name: 'Color', value: form.color || 'Black' },
        { name: 'Size', value: sizeList[0]?.name ?? 'M' },
      ],
      collections: [{ title: col.title, id: col.handle, handle: col.handle }],
      description: form.description,
    }

    if (editing) {
      setProducts(prev => prev.map(p => p.id === editing.id ? newProduct : p))
    } else {
      setProducts(prev => [...prev, newProduct])
    }

    resetForm()
    alert(`✅ "${newProduct.title}" saved. To persist permanently, copy the product data below and update src/data.ts → ezokhethoProducts.`)
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

  const handleDelete = (id: number) => {
    if (confirm('Delete this product?')) setProducts(prev => prev.filter(p => p.id !== id))
  }

  const collectionColors: Record<string, string> = {
    ngithwale: '#0033A0',
    izimbokodo: '#FF6B00',
    khumbulekhaya: '#0033A0',
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Admin Nav */}
      <header className="border-b border-zinc-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[#0033A0] transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to site
            </Link>
            <div className="h-5 w-px bg-zinc-200" />
            <Logo variant="dark" showWordmark={false} />
            <span className="font-butler text-lg text-[#0033A0]">Admin</span>
          </div>
          <button
            onClick={() => { resetForm(); setShowForm(true) }}
            id="add-product-btn"
            className="flex items-center gap-2 bg-[#0033A0] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white hover:bg-[#FF6B00] transition-colors"
          >
            <Plus className="h-3.5 w-3.5" />
            Add Product
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Notice */}
        <div className="mb-6 border border-[#0033A0]/20 bg-[#0033A0]/5 p-4 text-sm text-[#0033A0]">
          <strong>Note:</strong> Products edited here are stored in memory (browser session only).
          To persist product changes permanently, update the <code className="bg-white px-1">ezokhethoProducts</code> array in <code className="bg-white px-1">src/data.ts</code>.
          Future versions will connect to a database.
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
                  <option value="ngithwale">Ngithwale — Carry Me</option>
                  <option value="izimbokodo">Izimbokodo — Strength of Stone</option>
                  <option value="khumbulekhaya">Khumbulekhaya — Remember Home</option>
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
              <button onClick={handleSave} className="bg-[#0033A0] px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white hover:bg-[#FF6B00] transition-colors">
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
                        className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-white"
                        style={{ backgroundColor: collectionColors[colHandle] ?? '#0033A0' }}
                      >
                        <Tag className="inline h-2.5 w-2.5 mr-1" />
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
                    <button onClick={() => handleEdit(product)} className="flex h-8 w-8 items-center justify-center border border-zinc-200 text-zinc-400 hover:border-[#0033A0] hover:text-[#0033A0] transition-colors">
                      <Edit2 className="h-3.5 w-3.5" />
                    </button>
                    <button onClick={() => handleDelete(product.id)} className="flex h-8 w-8 items-center justify-center border border-zinc-200 text-zinc-400 hover:border-red-400 hover:text-red-500 transition-colors">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Export hint */}
        <div className="mt-6 border border-dashed border-zinc-300 p-4 text-xs text-zinc-400">
          <strong>To add images:</strong> Place product images in <code>public/images/</code> and reference them as <code>/images/your-image.jpg</code> in the Image URL field above.
          For production, connect a database (Supabase, PlanetScale) or headless CMS (Sanity, Contentful) to manage products dynamically.
        </div>
      </main>
    </div>
  )
}
