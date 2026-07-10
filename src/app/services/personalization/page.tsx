'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Heading } from '@/components/heading'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Description, Field, Label } from '@/components/fieldset'
import { Select } from '@/components/select'
import { Textarea } from '@/components/textarea'
import { Checkbox } from '@/components/checkbox'
import { Mail, Sparkles, Tag, ArrowLeft, Image as ImageIcon } from 'lucide-react'

const personalizationTypes = [
  { value: 'monogram', label: 'Monogramming', description: 'Initials or name embroidered on garment', basePrice: 'R350' },
  { value: 'embroidery', label: 'Custom Embroidery', description: 'Bespoke motif, pattern, or artwork', basePrice: 'R850+' },
  { value: 'alterations', label: 'Bespoke Alterations', description: 'Length, fit, sleeve, or structural changes', basePrice: 'R450+' },
  { value: 'fabric', label: 'Fabric Substitution', description: 'Swap fabric on existing design', basePrice: 'Quote based' },
  { value: 'colour', label: 'Colour Customisation', description: 'Dye or source fabric in custom colour', basePrice: 'R600+' },
  { value: 'other', label: 'Other Request', description: 'Something unique — describe below', basePrice: 'Quote based' },
]

export default function PersonalizationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    personalizationType: 'monogram',
    garmentType: '',
    productReference: '',
    details: '',
    hasGarment: false,
    attachImages: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, service: 'Personalization' }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          personalizationType: 'monogram',
          garmentType: '',
          productReference: '',
          details: '',
          hasGarment: false,
          attachImages: false,
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,0,0.15)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        <div className="relative container flex flex-col items-center text-center py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[#FF6B00]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00]">
                Our Services
              </span>
              <div className="h-px w-12 bg-[#FF6B00]" />
            </div>

            <h1 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Personalization
              <br />
              <em className="font-extralight italic">Service</em>
            </h1>

            <p className="mt-6 font-moderat text-lg leading-relaxed text-white/70">
              Add your unique touch with monogramming, custom embroidery, or bespoke alterations.
              Submit your request directly to our studio — we'll respond with a quote and timeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Info Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0033A0]/10 text-[#0033A0]">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-butler text-lg font-medium text-zinc-900">Handcrafted Details</h3>
                      <p className="mt-1 font-moderat text-sm text-zinc-500">
                        All personalization is done by hand in our Johannesburg atelier by skilled artisans.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0033A0]/10 text-[#0033A0]">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-butler text-lg font-medium text-zinc-900">Premium Threads</h3>
                      <p className="mt-1 font-moderat text-sm text-zinc-500">
                        We use only the finest silk, metallic, and cotton threads in a range of colours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0033A0]/10 text-[#0033A0]">
                      <Tag className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-butler text-lg font-medium text-zinc-900">10–15 Business Days</h3>
                      <p className="mt-1 font-moderat text-sm text-zinc-500">
                        Typical turnaround. Complex embroidery may take longer — we'll confirm timelines.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0033A0]/10 text-[#0033A0]">
                      <ImageIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-butler text-lg font-medium text-zinc-900">Send Us Your Garment</h3>
                      <p className="mt-1 font-moderat text-sm text-zinc-500">
                        Already own an Ezokhetho piece? Ship it to us for personalization.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Types */}
                <div className="space-y-4">
                  <h4 className="font-butler text-xl font-light text-zinc-900">Personalization Options</h4>
                  <div className="space-y-2">
                    {personalizationTypes.map((type) => (
                      <div key={type.value} className="p-4 bg-white border border-zinc-100 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-zinc-900">{type.label}</p>
                            <p className="text-sm text-zinc-500">{type.description}</p>
                          </div>
                          <span className="text-sm font-medium text-[#0033A0]">{type.basePrice}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[#0033A0] hover:text-[#FF6B00] transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Services
                </Link>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="bg-[#F8F6F3] p-8 sm:p-12 rounded-xl"
              >
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="font-butler text-3xl font-light text-zinc-900">Request Submitted</h2>
                    <p className="mt-3 font-moderat text-zinc-500">
                      Thank you for your personalization request. Our studio will contact you within 24 hours with a quote and timeline.
                    </p>
                    <Button className="mt-8" onClick={() => setSubmitStatus('idle')}>
                      Submit Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <Field>
                        <Label>First Name <span className="text-[#FF6B00]">*</span></Label>
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </Field>

                      <Field>
                        <Label>Last Name <span className="text-[#FF6B00]">*</span></Label>
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <Field>
                        <Label>Email Address <span className="text-[#FF6B00]">*</span></Label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </Field>

                      <Field>
                        <Label>Phone Number</Label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+27 XX XXX XXXX"
                          disabled={isSubmitting}
                        />
                      </Field>
                    </div>

                    <Field>
                      <Label>Personalization Type <span className="text-[#FF6B00]">*</span></Label>
                      <Select name="personalizationType" value={formData.personalizationType} onChange={handleChange} required disabled={isSubmitting}>
                        {personalizationTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label} ({type.basePrice})
                          </option>
                        ))}
                      </Select>
                    </Field>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <Field>
                        <Label>Garment Type</Label>
                        <Select name="garmentType" value={formData.garmentType} onChange={handleChange} disabled={isSubmitting}>
                          <option value="">Select garment type</option>
                          <option value="dress">Dress / Gown</option>
                          <option value="jacket">Jacket / Blazer</option>
                          <option value="shirt">Shirt / Blouse</option>
                          <option value="trousers">Trousers / Skirt</option>
                          <option value="outerwear">Coat / Cape</option>
                          <option value="accessory">Accessory (Bag, Scarf, etc.)</option>
                          <option value="other">Other</option>
                        </Select>
                      </Field>

                      <Field>
                        <Label>Ezokhetho Product Reference</Label>
                        <Input
                          type="text"
                          name="productReference"
                          value={formData.productReference}
                          onChange={handleChange}
                          placeholder="e.g., Ngithwale Dress, Izimbokodo Jacket, or order #"
                          disabled={isSubmitting}
                        />
                        <Description>
                          If personalizing an existing Ezokhetho piece, provide the product name or your order number.
                        </Description>
                      </Field>
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="hasGarment"
                        name="hasGarment"
                        checked={formData.hasGarment}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      <Label htmlFor="hasGarment" className="mt-1 font-moderat text-sm text-zinc-700">
                        I have the garment and will ship it to your atelier
                      </Label>
                    </div>

                    <Field>
                      <Label>Details / Design Brief <span className="text-[#FF6B00]">*</span></Label>
                      <Textarea
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Describe your personalization request: initials for monogram, embroidery design concept, alteration details, preferred thread colours, placement, etc."
                        required
                        disabled={isSubmitting}
                      />
                      <Description>
                        Be as specific as possible. Include thread colours, placement, sizing, and any reference images you can share.
                      </Description>
                    </Field>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="attachImages"
                        name="attachImages"
                        checked={formData.attachImages}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      <Label htmlFor="attachImages" className="mt-1 font-moderat text-sm text-zinc-700">
                        I have reference images/sketches to share (we'll request these via email)
                      </Label>
                    </div>

                    {submitStatus === 'error' && (
                      <div className="p-4 rounded bg-red-50 border border-red-200 text-red-700 text-sm">
                        Something went wrong. Please try again or email us directly at studio@ezokhetho.com
                      </div>
                    )}

                    <Button type="submit" className="w-full py-5" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </Button>

                    <p className="text-center text-xs text-zinc-400">
                      By submitting, you agree to our{' '}
                      <a href="/privacy" className="underline hover:text-zinc-600">Privacy Policy</a>
                      {' '}and consent to being contacted regarding your request.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}