'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Mail, Sparkles, Scissors, Gem, Send } from 'lucide-react'
import { Logo } from '@/app/logo'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Textarea } from '@/components/textarea'
import { Label } from '@/components/fieldset'
import { Heading } from '@/components/heading'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
}

const personalizationOptions = [
  { value: 'monogram', label: 'Monogramming', description: 'Hand-embroidered initials on cuff, collar, or hem', basePrice: 'R850' },
  { value: 'embroidery', label: 'Custom Embroidery', description: 'Bespoke artwork or motifs stitched by our artisans', basePrice: 'R1,500' },
  { value: 'alterations', label: 'Bespoke Alterations', description: 'Tailored fit adjustments to any Ezokhetho garment', basePrice: 'R650' },
  { value: 'fabric', label: 'Fabric Customisation', description: 'Select from our curated library of exclusive African textiles', basePrice: 'Quote on request' },
  { value: 'colour', label: 'Colour Customisation', description: 'Dye-to-match service for a truly personal palette', basePrice: 'R1,200' },
  { value: 'other', label: 'Other Request', description: 'Something unique? Describe your vision to our studio', basePrice: 'Quote on request' },
]

export default function PersonalizationPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    orderNumber: '',
    type: '',
    garment: '',
    details: '',
    placement: '',
    threadColour: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const selectedType = personalizationOptions.find(t => t.value === form.type)

    const mailto = `mailto:sales@ezokhetho.com?subject=${encodeURIComponent(
      `Personalization Request: ${selectedType?.label || 'Custom Request'}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n` +
      `Original Order #: ${form.orderNumber || 'N/A'}\n\n` +
      `Personalization Type: ${selectedType?.label}\n` +
      `Garment: ${form.garment}\n` +
      `Placement: ${form.placement}\n` +
      `Thread Colour: ${form.threadColour || 'Default'}\n\n` +
      `Details:\n${form.details}`
    )}`

    window.location.href = mailto
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', orderNumber: '', type: '', garment: '', details: '', placement: '', threadColour: '' })
    }, 600)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0033A0] pt-32 pb-20">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 0, transparent 50px)',
          backgroundSize: '50px 50px',
        }} />
        <div className="container relative">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-[#FF6B00]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#FF6B00]">
                Our Services
              </span>
            </div>
            <h1 className="font-butler text-5xl font-light leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              <em className="font-extralight italic text-white/60">Personalization</em>
            </h1>
            <p className="mt-6 font-moderat text-[15px] leading-relaxed text-white/70 max-w-xl">
              Add your unique touch with monogramming, custom embroidery, or bespoke alterations.
              Submit your request directly to our studio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personalization Options */}
      <section className="container py-20 sm:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 max-w-2xl text-center mx-auto"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#FF6B00]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
              What We Offer
            </span>
            <div className="h-px w-8 bg-[#FF6B00]" />
          </div>
          <h2 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
            Choose your <em className="font-extralight italic">personalization</em>
          </h2>
          <p className="mt-6 font-moderat text-[15px] leading-relaxed text-zinc-500">
            From subtle initials to bold custom artwork, our artisans bring your vision to life
            with meticulous attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {personalizationOptions.map((option, index) => (
            <motion.article
              key={option.value}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1 + index * 0.1}
              className="group flex flex-col gap-5 p-8 border border-zinc-100 hover:border-zinc-200 transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center border border-zinc-200 transition-colors duration-300 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00]/5">
                {option.value === 'monogram' && <Gem className="h-6 w-6 text-zinc-600 group-hover:text-[#FF6B00] transition-colors" />}
                {option.value === 'embroidery' && <Sparkles className="h-6 w-6 text-zinc-600 group-hover:text-[#FF6B00] transition-colors" />}
                {option.value === 'alterations' && <Scissors className="h-6 w-6 text-zinc-600 group-hover:text-[#FF6B00] transition-colors" />}
                {option.value === 'fabric' && <Gem className="h-6 w-6 text-zinc-600 group-hover:text-[#FF6B00] transition-colors" />}
                {option.value === 'colour' && <Sparkles className="h-6 w-6 text-zinc-600 group-hover:text-[#FF6B00] transition-colors" />}
                {option.value === 'other' && <Mail className="h-6 w-6 text-zinc-600 group-hover:text-[#FF6B00] transition-colors" />}
              </div>
              <h3 className="font-butler text-xl font-medium tracking-wide text-zinc-900">{option.label}</h3>
              <p className="font-moderat text-[14px] leading-relaxed text-zinc-500 flex-1">{option.description}</p>
              <div className="font-butler text-xl font-light text-[#0033A0] pt-4 border-t border-zinc-100">From {option.basePrice}</div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Request Form */}
      <section className="bg-[#F8F6F3] py-20 sm:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Info */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col justify-center gap-10">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-px w-8 bg-[#0033A0]" />
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#0033A0]">
                    Submit Your Request
                  </span>
                </div>
                <h2 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
                  Tell us your <em className="font-extralight italic">vision</em>
                </h2>
              </div>
              <div className="flex flex-col gap-5 font-moderat text-[15px] leading-relaxed text-zinc-600">
                <p>
                  Complete the form and we&apos;ll contact you within 24 hours to discuss your request,
                  provide a quote, and confirm timelines.
                </p>
                <p>
                  Please have your original order number ready if personalizing an existing Ezokhetho piece.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 pt-4 border-t border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#0033A0] text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">Email</p>
                    <p className="font-medium text-zinc-900">sales@ezokhetho.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#0033A0] text-white">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">Turnaround</p>
                    <p className="font-medium text-zinc-900">2–4 weeks from approval</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15}>
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-5 border border-[#0033A0]/10 bg-[#0033A0]/5 p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0033A0] text-white">
                    <Send className="h-7 w-7" />
                  </div>
                  <h3 className="font-butler text-2xl font-light text-[#0033A0]">Request sent</h3>
                  <p className="font-moderat text-sm text-zinc-500">
                    Your email client has opened. Our studio will be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-[11px] uppercase tracking-[0.15em] text-[#FF6B00] hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="font-butler text-3xl font-light text-[#0033A0]">Personalization Details</h2>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Amahle Dlamini"
                        value={form.name}
                        onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0] placeholder:text-zinc-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="email@example.com"
                        value={form.email}
                        onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0] placeholder:text-zinc-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+27 82 123 4567"
                        value={form.phone}
                        onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0] placeholder:text-zinc-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="orderNumber" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Original Order # (if applicable)
                      </Label>
                      <Input
                        id="orderNumber"
                        type="text"
                        placeholder="EZ-2024-00123"
                        value={form.orderNumber}
                        onChange={e => setForm(prev => ({ ...prev, orderNumber: e.target.value }))}
                        className="w-full border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0] placeholder:text-zinc-300"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="type" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                      Personalization Type *
                    </Label>
                    <Select
                      id="type"
                      name="type"
                      required
                      value={form.type}
                      onChange={e => setForm(prev => ({ ...prev, type: e.target.value }))}
                      className="w-full border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0]"
                    >
                      <option value="">Select personalization type</option>
                      {personalizationOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label} — From {opt.basePrice}</option>
                      ))}
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="garment" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Garment / Collection *
                      </Label>
                      <Input
                        id="garment"
                        type="text"
                        required
                        placeholder="e.g. Mapetla '26 — Silk Kaftan in Indigo"
                        value={form.garment}
                        onChange={e => setForm(prev => ({ ...prev, garment: e.target.value }))}
                        className="w-full border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0] placeholder:text-zinc-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="placement" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Placement *
                      </Label>
                      <Select
                        id="placement"
                        name="placement"
                        required
                        value={form.placement}
                        onChange={e => setForm(prev => ({ ...prev, placement: e.target.value }))}
                        className="w-full border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0]"
                      >
                        <option value="">Select placement</option>
                        <option value="left-cuff">Left Cuff</option>
                        <option value="right-cuff">Right Cuff</option>
                        <option value="both-cuffs">Both Cuffs</option>
                        <option value="collar">Collar</option>
                        <option value="hem">Hem</option>
                        <option value="pocket">Pocket</option>
                        <option value="back-yoke">Back Yoke</option>
                        <option value="custom">Custom Location (describe below)</option>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="threadColour" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Thread Colour
                      </Label>
                      <Select
                        id="threadColour"
                        name="threadColour"
                        value={form.threadColour}
                        onChange={e => setForm(prev => ({ ...prev, threadColour: e.target.value }))}
                        className="w-full border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0]"
                      >
                        <option value="">Select thread colour</option>
                        <option value="gold">Gold Metallic</option>
                        <option value="silver">Silver Metallic</option>
                        <option value="black">Black</option>
                        <option value="white">White / Ivory</option>
                        <option value="navy">Navy</option>
                        <option value="burgundy">Burgundy</option>
                        <option value="emerald">Emerald Green</option>
                        <option value="copper">Copper</option>
                        <option value="custom">Custom / Match Garment</option>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="details" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                      Design Details / Special Instructions *
                    </Label>
                    <Textarea
                      id="details"
                      required
                      rows={5}
                      placeholder="Describe your vision: initials (e.g. 'A.D.'), motif description, artwork references, sizing preferences, or any special requirements..."
                      value={form.details}
                      onChange={e => setForm(prev => ({ ...prev, details: e.target.value }))}
                      className="w-full resize-none border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0] placeholder:text-zinc-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="group flex items-center justify-center gap-3 bg-[#0033A0] px-8 py-4 font-moderat text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all hover:bg-[#FF6B00] disabled:opacity-60"
                    disabled={submitting}
                  >
                    {submitting ? 'Opening email...' : 'Submit Request'}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <p className="text-[11px] text-zinc-400 text-center">
                    Or email us directly:{' '}
                    <a href="mailto:sales@ezokhetho.com" className="text-[#0033A0] hover:text-[#FF6B00] transition-colors">
                      sales@ezokhetho.com
                    </a>
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-zinc-950 py-20 sm:py-28 text-center">
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-2xl mx-auto">
            <h2 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to <em className="font-extralight italic text-white/60">commission</em> something unique?
            </h2>
            <p className="mt-6 font-moderat text-[15px] leading-relaxed text-white/50">
              Collaborate with Mpumelelo to customize an existing Ezokhetho design with unique details.
            </p>
            <div className="mt-10">
              <a
                href="/services/commissions"
                className="inline-flex items-center gap-3 bg-[#FF6B00] px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#ff7f1a]"
              >
                Private Commissions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}