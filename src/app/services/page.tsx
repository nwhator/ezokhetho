'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, PenTool, Gem, Sparkles, Heart, ArrowRight, Check, Mail, Threads } from 'lucide-react'

const services = [
  {
    id: 'consultation',
    title: 'Book a Consultation',
    description: 'Schedule a private meeting with our designer to discuss your vision, explore fabrics, and create a piece tailored to you.',
    href: '/services/consultation',
    icon: Calendar,
    features: [
      '60–90 minute private session',
      'In-studio or virtual available',
      'Fabric library access',
      'Design proposal within 5 days',
      'Measurements taken on-site',
    ],
    cta: 'Book Now',
  },
  {
    id: 'personalization',
    title: 'Personalization',
    description: 'Add your unique touch with monogramming, custom embroidery, or bespoke alterations. Submit your request directly to our studio.',
    href: '/services/personalization',
    icon: PenTool,
    features: [
      'Monogramming from R350',
      'Custom embroidery from R850',
      'Bespoke alterations from R450',
      '10–15 business day turnaround',
      'Handcrafted in Johannesburg',
    ],
    cta: 'Request Quote',
  },
  {
    id: 'commissions',
    title: 'Private Commissions',
    description: 'Collaborate with Mpumelelo to customize an existing Ezokhetho design with unique details — one-of-a-kind pieces made for you.',
    href: '/services/commissions',
    icon: Gem,
    features: [
      'Modify existing collection pieces',
      'Combine elements from multiple designs',
      'Custom fabric on proven patterns',
      '6–10 week timeline',
      'From R8,500 (modifications)',
    ],
    cta: 'Start Commission',
  },
]

export default function ServicesPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,0,0.15)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        {/* Decorative elements */}
        <div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-butler text-[280px] font-bold leading-none text-white/[0.02] select-none">
          &ldquo;
        </div>

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
                Bespoke Services
              </span>
              <div className="h-px w-12 bg-[#FF6B00]" />
            </div>

            <h1 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Ezokhetho
              <br />
              <em className="font-extralight italic">Services</em>
            </h1>

            <p className="mt-6 font-moderat text-lg leading-relaxed text-white/70 max-w-2xl">
              Beyond our collections, we offer bespoke experiences tailored to your story.
              From personal consultations to one-of-a-kind commissions, every service
              is designed to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-24 sm:py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15 + index * 0.1,
                }}
                className="group relative flex flex-col h-full bg-white border border-zinc-100 hover:border-zinc-200 transition-all duration-300"
              >
                {/* Icon */}
                <div className="relative p-8 sm:p-10 pb-4">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-zinc-100 transition-colors duration-300 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00]/5">
                    <service.icon className="h-7 w-7 text-[#0033A0] transition-colors duration-300 group-hover:text-[#FF6B00]" />
                  </div>

                  <h2 className="font-butler text-2xl font-medium tracking-wide text-zinc-900 text-center mb-3">
                    {service.title}
                  </h2>

                  <p className="font-moderat text-[15px] leading-relaxed text-zinc-500 text-center mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-moderat text-zinc-600">
                        <Check className="h-4 w-4 shrink-0 text-[#FF6B00]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="mt-auto block w-full text-center py-3.5 px-6 font-moderat text-sm font-medium uppercase tracking-[0.15em] text-white bg-[#0033A0] hover:bg-[#FF6B00] transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    {service.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Decorative bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.article>
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="mt-24"
          >
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="mb-5 flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-[#FF6B00]" />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
                  How It Works
                </span>
                <div className="h-px w-12 bg-[#FF6B00]" />
              </div>
              <h2 className="font-butler text-3xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-4xl">
                Your Journey
                <br />
                <em className="font-extralight italic">with Ezokhetho</em>
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2" />

              {[
                { step: '01', title: 'Discover', desc: 'Browse our services and choose the experience that fits your vision', icon: Sparkles },
                { step: '02', title: 'Connect', desc: 'Submit your request — we\'ll respond within 24 hours to schedule', icon: Mail },
                { step: '03', title: 'Consult', desc: 'Meet with Mpumelelo to refine designs, select fabrics, and finalize details', icon: Threads },
                { step: '04', title: 'Create', desc: 'Your piece is handcrafted in our atelier with meticulous attention', icon: Heart },
                { step: '05', title: 'Deliver', desc: 'Receive your one-of-a-kind garment — made exclusively for you', icon: Gem },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 + index * 0.1 }}
                  className={`relative flex gap-8 pb-12 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'} max-w-md`}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#FF6B00] shrink-0">
                        {item.step}
                      </span>
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border-2 border-[#0033A0] mx-auto">
                        <item.icon className="h-5 w-5 text-[#0033A0]" />
                      </div>
                      <h3 className="font-butler text-lg font-medium text-zinc-900 shrink-0">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3 font-moderat text-sm text-zinc-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0033A010_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#FF6B0008_0%,_transparent_70%)]" />

        <div className="relative container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-butler text-3xl font-light leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Begin
              <br />
              <em className="font-extralight italic">Your Story?</em>
            </h2>
            <p className="mt-6 font-moderat text-lg leading-relaxed text-white/60">
              Whether you're looking for a personalized touch or a fully bespoke creation,
              our studio is ready to bring your vision to life.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-moderat text-sm font-medium uppercase tracking-[0.2em] text-white bg-[#FF6B00] hover:bg-[#FF6B00]/90 transition-colors duration-300"
              >
                Book a Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-moderat text-sm font-medium uppercase tracking-[0.2em] text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors duration-300"
              >
                Contact Studio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}