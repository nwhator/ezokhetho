'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Calendar, Clock, MapPin, Mail, MessageCircle } from 'lucide-react'
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

const consultationTypes = [
  { value: 'in-person', label: 'In-Person Consultation', description: 'Meet Mpumelelo at the Johannesburg studio', duration: '90 minutes', price: 'R2,500' },
  { value: 'virtual', label: 'Virtual Consultation', description: 'Video call from anywhere in the world', duration: '60 minutes', price: 'R1,800' },
  { value: 'wardrobe', label: 'Wardrobe Audit & Styling', description: 'In-home wardrobe assessment and styling session', duration: '3 hours', price: 'R5,000' },
]

export default function ConsultationPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const mailto = `mailto:sales@ezokhetho.com?subject=${encodeURIComponent(
      `Consultation Booking: ${consultationTypes.find(t => t.value === form.type)?.label || 'Consultation'}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n` +
      `Consultation Type: ${consultationTypes.find(t => t.value === form.type)?.label}\n` +
      `Preferred Date: ${form.preferredDate}\nPreferred Time: ${form.preferredTime}\n\n` +
      `Message:\n${form.message}`
    )}`

    window.location.href = mailto
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', type: '', preferredDate: '', preferredTime: '', message: '' })
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
              Book a{' '}
              <em className="font-extralight italic text-white/60">Consultation</em>
            </h1>
            <p className="mt-6 font-moderat text-[15px] leading-relaxed text-white/70 max-w-xl">
              Schedule a private meeting with Mpumelelo to discuss your vision, explore fabrics, and create a piece tailored entirely to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consultation Types */}
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
              Consultation Options
            </span>
            <div className="h-px w-8 bg-[#FF6B00]" />
          </div>
          <h2 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
            Choose your <em className="font-extralight italic">experience</em>
          </h2>
          <p className="mt-6 font-moderat text-[15px] leading-relaxed text-zinc-500">
            Each consultation is tailored to your needs — from a focused virtual session to an immersive in-studio experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {consultationTypes.map((type, index) => (
            <motion.article
              key={type.value}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1 + index * 0.1}
              className="group flex flex-col gap-5 p-8 border border-zinc-100 hover:border-zinc-200 transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center border border-zinc-200 transition-colors duration-300 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00]/5">
                <Calendar className="h-6 w-6 text-zinc-600 group-hover:text-[#FF6B00] transition-colors" />
              </div>
              <h3 className="font-butler text-xl font-medium tracking-wide text-zinc-900">{type.label}</h3>
              <p className="font-moderat text-[14px] leading-relaxed text-zinc-500 flex-1">{type.description}</p>
              <div className="flex flex-col gap-2 border-t border-zinc-100 pt-4">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <Clock className="h-4 w-4" />
                  <span>{type.duration}</span>
                </div>
                <div className="font-butler text-xl font-light text-[#0033A0]">{type.price}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-[#F8F6F3] py-20 sm:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Info */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col justify-center gap-10">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-px w-8 bg-[#0033A0]" />
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#0033A0]">
                    Book Your Session
                  </span>
                </div>
                <h2 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
                  Reserve your <em className="font-extralight italic">time</em>
                </h2>
              </div>
              <div className="flex flex-col gap-5 font-moderat text-[15px] leading-relaxed text-zinc-600">
                <p>
                  Complete the form below and we&apos;ll confirm your appointment within 24 hours.
                  A 50% deposit secures your booking, with the balance due on the day of your consultation.
                </p>
                <p>
                  For urgent enquiries, email us directly at{' '}
                  <a href="mailto:sales@ezokhetho.com" className="text-[#0033A0] hover:text-[#FF6B00] transition-colors">
                    sales@ezokhetho.com
                  </a>
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
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">Studio</p>
                    <p className="font-medium text-zinc-900">Johannesburg, South Africa</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15}>
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-5 border border-[#0033A0]/10 bg-[#0033A0]/5 p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0033A0] text-white">
                    <MessageCircle className="h-7 w-7" />
                  </div>
                  <h3 className="font-butler text-2xl font-light text-[#0033A0]">Request sent</h3>
                  <p className="font-moderat text-sm text-zinc-500">
                    Your email client has opened. We&apos;ll confirm your consultation within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-[11px] uppercase tracking-[0.15em] text-[#FF6B00] hover:underline"
                  >
                    Book another consultation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="font-butler text-3xl font-light text-[#0033A0]">Booking Details</h2>

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
                      <Label htmlFor="type" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Consultation Type *
                      </Label>
                      <Select
                        id="type"
                        name="type"
                        required
                        value={form.type}
                        onChange={e => setForm(prev => ({ ...prev, type: e.target.value }))}
                        className="w-full border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0]"
                      >
                        <option value="">Select consultation type</option>
                        {consultationTypes.map(t => (
                          <option key={t.value} value={t.value}>{t.label} — {t.price}</option>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="preferredDate" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Preferred Date *
                      </Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={form.preferredDate}
                        onChange={e => setForm(prev => ({ ...prev, preferredDate: e.target.value }))}
                        className="w-full border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Preferred Time *
                      </Label>
                      <Select
                        id="preferredTime"
                        name="preferredTime"
                        required
                        value={form.preferredTime}
                        onChange={e => setForm(prev => ({ ...prev, preferredTime: e.target.value }))}
                        className="w-full border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0]"
                      >
                        <option value="">Select time</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                      Message / Design Brief
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Describe your vision, occasion, preferred fabrics, colours, or any specific ideas..."
                      value={form.message}
                      onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full resize-none border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0] placeholder:text-zinc-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="group flex items-center justify-center gap-3 bg-[#0033A0] px-8 py-4 font-moderat text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all hover:bg-[#FF6B00] disabled:opacity-60"
                    disabled={submitting}
                  >
                    {submitting ? 'Opening email...' : 'Book Consultation'}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <p className="text-[11px] text-zinc-400 text-center">
                    A 50% deposit is required to confirm your booking. Cancellations within 48 hours forfeit the deposit.
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
              Ready to begin <em className="font-extralight italic text-white/60">your journey</em>?
            </h2>
            <p className="mt-6 font-moderat text-[15px] leading-relaxed text-white/50">
              Let&apos;s create something extraordinary together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/services/personalization"
                className="inline-flex items-center gap-2 border border-white/20 px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white/10"
              >
                Personalization
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/services/commissions"
                className="inline-flex items-center gap-2 bg-[#FF6B00] px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#ff7f1a]"
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