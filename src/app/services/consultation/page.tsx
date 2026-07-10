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
import { Calendar, Clock, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react'

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: 'consultation',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, service: 'Consultation' }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          serviceType: 'consultation',
          preferredDate: '',
          preferredTime: '',
          message: '',
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
              Book a
              <br />
              <em className="font-extralight italic">Consultation</em>
            </h1>

            <p className="mt-6 font-moderat text-lg leading-relaxed text-white/70">
              Schedule a private meeting with Mpumelelo to discuss your vision, explore fabrics,
              and create a piece tailored exclusively to you.
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
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-butler text-lg font-medium text-zinc-900">Flexible Scheduling</h3>
                      <p className="mt-1 font-moderat text-sm text-zinc-500">
                        Choose a date and time that works for you. We offer both in-studio and virtual consultations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0033A0]/10 text-[#0033A0]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-butler text-lg font-medium text-zinc-900">Studio Location</h3>
                      <p className="mt-1 font-moderat text-sm text-zinc-500">
                        Ezokhetho Atelier, Johannesburg<br />
                        (Address provided upon booking confirmation)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0033A0]/10 text-[#0033A0]">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-butler text-lg font-medium text-zinc-900">Duration</h3>
                      <p className="mt-1 font-moderat text-sm text-zinc-500">
                        60–90 minutes — ample time to explore fabrics, discuss design, and take measurements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0033A0]/10 text-[#0033A0]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-butler text-lg font-medium text-zinc-900">Follow-up</h3>
                      <p className="mt-1 font-moderat text-sm text-zinc-500">
                        Receive a detailed proposal with sketches, fabric swatches, and timeline within 5 business days.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA back to services */}
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
                    <h2 className="font-butler text-3xl font-light text-zinc-900">Request Sent</h2>
                    <p className="mt-3 font-moderat text-zinc-500">
                      Thank you for booking a consultation. We'll contact you within 24 hours to confirm your appointment.
                    </p>
                    <Button className="mt-8" onClick={() => setSubmitStatus('idle')}>
                      Book Another
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

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <Field>
                        <Label>Preferred Date <span className="text-[#FF6B00]">*</span></Label>
                        <Input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </Field>

                      <Field>
                        <Label>Preferred Time <span className="text-[#FF6B00]">*</span></Label>
                        <Select name="preferredTime" value={formData.preferredTime} onChange={handleChange} required disabled={isSubmitting}>
                          <option value="">Select a time</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                        </Select>
                      </Field>
                    </div>

                    <Field>
                      <Label>Consultation Type</Label>
                      <Select name="serviceType" value={formData.serviceType} onChange={handleChange} disabled={isSubmitting}>
                        <option value="consultation">General Design Consultation</option>
                        <option value="wedding">Wedding / Bridal Consultation</option>
                        <option value="custom">Custom Garment Design</option>
                        <option value="wardrobe">Wardrobe Planning</option>
                        <option value="virtual">Virtual Consultation (Video Call)</option>
                      </Select>
                    </Field>

                    <Field>
                      <Label>Message / Design Brief <span className="text-[#FF6B00]">*</span></Label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Describe your vision, occasion, preferred styles, colours, or any specific requirements..."
                        required
                        disabled={isSubmitting}
                      />
                      <Description>
                        Include details about the occasion, preferred silhouettes, colours, fabrics, or any inspiration images you have.
                      </Description>
                    </Field>

                    {submitStatus === 'error' && (
                      <div className="p-4 rounded bg-red-50 border border-red-200 text-red-700 text-sm">
                        Something went wrong. Please try again or email us directly at studio@ezokhetho.com
                      </div>
                    )}

                    <Button type="submit" className="w-full" disabled={isSubmitting} size="lg">
                      {isSubmitting ? 'Submitting...' : 'Book Consultation'}
                    </Button>

                    <p className="text-center text-xs text-zinc-400">
                      By submitting, you agree to our{' '}
                      <a href="/privacy" className="underline hover:text-zinc-600">Privacy Policy</a>
                      {' '}and consent to being contacted regarding your booking.
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