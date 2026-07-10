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
import { ArrowLeft, Gem, Sparkles, Users, Clock, Mail, Heart, Shield } from 'lucide-react'

const commissionTypes = [
  { value: 'modify', label: 'Modify Existing Design', description: 'Adjust silhouette, neckline, sleeves, length of a current collection piece' },
  { value: 'combine', label: 'Combine Elements', description: 'Merge details from multiple Ezokhetho designs into one garment' },
  { value: 'fabric', label: 'Custom Fabric on Existing Design', description: 'Use your chosen fabric on a proven Ezokhetho pattern' },
  { value: 'bespoke', label: 'Fully Bespoke Commission', description: 'Original design developed from scratch with Mpumelelo' },
]

export default function CommissionsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    commissionType: 'modify',
    referencePieces: '',
    designDetails: '',
    budgetRange: '',
    timeline: '',
    hasInspiration: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type } = e.target
    const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : (e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).value
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, service: 'Private Commission' }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          commissionType: 'modify',
          referencePieces: '',
          designDetails: '',
          budgetRange: '',
          timeline: '',
          hasInspiration: false,
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
              Private
              <br />
              <em className="font-extralight italic">Commissions</em>
            </h1>

            <p className="mt-6 font-moderat text-lg leading-relaxed text-white/70">
              Collaborate with Mpumelelo to customize an existing Ezokhetho design with unique details —
              one-of-a-kind pieces made exclusively for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[#FF6B00]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
                The Process
              </span>
              <div className="h-px w-12 bg-[#FF6B00]" />
            </div>
            <h2 className="font-butler text-3xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-4xl">
              From Vision
              <br />
              <em className="font-extralight italic">to Reality</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, title: '1. Consultation', desc: 'Discuss vision, reference pieces, and design direction with Mpumelelo' },
              { icon: Gem, title: '2. Design Development', desc: 'Sketches, fabric sourcing, and detail refinement — collaborative iteration' },
              { icon: Users, title: '3. Pattern & Toile', desc: 'Custom pattern creation and fitting toile for perfect silhouette' },
              { icon: Heart, title: '4. Final Creation', desc: 'Handcrafted in our atelier with meticulous attention to every detail' },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 }}
                className="text-center p-6"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0033A0]/10 text-[#0033A0]">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="font-butler text-lg font-medium text-zinc-900">{step.title}</h3>
                <p className="mt-2 font-moderat text-sm text-zinc-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 sm:py-32 lg:py-40 bg-[#F8F6F3]">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Info Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0033A0]/10 text-[#0033A0]">
                      <Gem className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-butler text-lg font-medium text-zinc-900">Based on Proven Designs</h3>
                      <p className="mt-1 font-moderat text-sm text-zinc-500">
                        Start with an existing Ezokhetho silhouette — reducing risk and ensuring fit excellence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0033A0]/10 text-[#0033A0]">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-butler text-lg font-medium text-zinc-900">Endless Customization</h3>
                      <p className="mt-1 font-moderat text-sm text-zinc-500">
                        Necklines, sleeves, lengths, fabrics, embellishments, closures — every detail is yours to define.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0033A0]/10 text-[#0033A0]">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-butler text-lg font-medium text-zinc-900">6–10 Week Timeline</h3>
                      <p className="mt-1 font-moderat text-sm text-zinc-500">
                        From consultation to delivery. Fully bespoke commissions may take 10–14 weeks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0033A0]/10 text-[#0033A0]">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-butler text-lg font-medium text-zinc-900">Investment</h3>
                      <p className="mt-1 font-moderat text-sm text-zinc-500">
                        Modifications from R8,500. Bespoke from R18,000. 50% deposit to begin, balance on completion.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Commission Types */}
                <div className="space-y-4">
                  <h4 className="font-butler text-xl font-light text-zinc-900">Commission Types</h4>
                  <div className="space-y-2">
                    {commissionTypes.map((type) => (
                      <div key={type.value} className="p-4 bg-white border border-zinc-100 rounded-lg">
                        <p className="font-medium text-zinc-900">{type.label}</p>
                        <p className="mt-1 text-sm text-zinc-500">{type.description}</p>
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
                className="bg-white p-8 sm:p-12 rounded-xl border border-zinc-100"
              >
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="font-butler text-3xl font-light text-zinc-900">Commission Inquiry Sent</h2>
                    <p className="mt-3 font-moderat text-zinc-500">
                      Thank you for your commission request. Mpumelelo will review and contact you within 48 hours to discuss your vision.
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
                      <Label>Commission Type <span className="text-[#FF6B00]">*</span></Label>
                      <Select name="commissionType" value={formData.commissionType} onChange={handleChange} required disabled={isSubmitting}>
                        {commissionTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </Select>
                    </Field>

                    <Field>
                      <Label>Reference Ezokhetho Piece(s) <span className="text-[#FF6B00]">*</span></Label>
                      <Textarea
                        name="referencePieces"
                        value={formData.referencePieces}
                        onChange={handleChange}
                        rows={3}
                        placeholder="e.g., Ngithwale Dress (neckline), Izimbokodo Jacket (sleeve detail), Khumbulekhaya Cape (silhouette)"
                        required
                        disabled={isSubmitting}
                      />
                      <Description>
                        Name the specific collection pieces and which elements you want to incorporate.
                      </Description>
                    </Field>

                    <Field>
                      <Label>Design Details <span className="text-[#FF6B00]">*</span></Label>
                      <Textarea
                        name="designDetails"
                        value={formData.designDetails}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your modifications: neckline change, sleeve style, length, fabric choice, embellishments, closures, lining, fit adjustments..."
                        required
                        disabled={isSubmitting}
                      />
                      <Description>
                        Be as detailed as possible. Include measurements if known, preferred fabrics, colours, and any functional requirements.
                      </Description>
                    </Field>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <Field>
                        <Label>Budget Range</Label>
                        <Select name="budgetRange" value={formData.budgetRange} onChange={handleChange} disabled={isSubmitting}>
                          <option value="">Select range</option>
                          <option value="8500-12000">R8,500 – R12,000 (Simple modifications)</option>
                          <option value="12000-18000">R12,000 – R18,000 (Moderate customization)</option>
                          <option value="18000-25000">R18,000 – R25,000 (Complex modifications)</option>
                          <option value="25000-40000">R25,000 – R40,000 (Extensive redesign)</option>
                          <option value="40000+">R40,000+ (Fully bespoke)</option>
                        </Select>
                      </Field>

                      <Field>
                        <Label>Desired Timeline</Label>
                        <Select name="timeline" value={formData.timeline} onChange={handleChange} disabled={isSubmitting}>
                          <option value="">Select timeframe</option>
                          <option value="asap">As soon as possible</option>
                          <option value="4-6weeks">4–6 weeks</option>
                          <option value="6-8weeks">6–8 weeks</option>
                          <option value="8-12weeks">8–12 weeks</option>
                          <option value="flexible">Flexible / No rush</option>
                          <option value="event">For a specific event (specify in details)</option>
                        </Select>
                      </Field>
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="hasInspiration"
                        name="hasInspiration"
                        checked={formData.hasInspiration}
                        onChange={(checked) => handleCheckboxChange(checked, 'hasInspiration')}
                        disabled={isSubmitting}
                      />
                      <Label htmlFor="hasInspiration" className="mt-1 font-moderat text-sm text-zinc-700">
                        I have inspiration images, sketches, or mood boards to share (we'll request these via email)
                      </Label>
                    </div>

                    {submitStatus === 'error' && (
                      <div className="p-4 rounded bg-red-50 border border-red-200 text-red-700 text-sm">
                        Something went wrong. Please try again or email us directly at studio@ezokhetho.com
                      </div>
                    )}

                    <Button type="submit" className="w-full py-5" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Commission Inquiry'}
                    </Button>

                    <p className="text-center text-xs text-zinc-400">
                      By submitting, you agree to our{' '}
                      <a href="/privacy" className="underline hover:text-zinc-600">Privacy Policy</a>
                      {' '}and consent to being contacted regarding your commission inquiry.
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