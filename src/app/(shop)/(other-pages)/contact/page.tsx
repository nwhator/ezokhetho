'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Logo } from '@/app/logo'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'

const InstagramIcon = (props: any) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4" {...props}>
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clipRule="evenodd"
    />
  </svg>
)

const FacebookIcon = (props: any) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4" {...props}>
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
)

const TwitterIcon = (props: any) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
}

const contactDetails = [
  {
    label: 'Email',
    value: 'sales@ezokhetho.com',
    href: 'mailto:sales@ezokhetho.com',
    icon: Mail,
  },
  {
    label: 'Instagram',
    value: '@ezokhetho',
    href: 'https://www.instagram.com/ezokhetho?igsh=N2s4aTdmeGhxb2Z5&utm_source=qr',
    icon: InstagramIcon,
  },
  {
    label: 'Facebook',
    value: 'Ezokhetho',
    href: 'https://www.facebook.com/share/18HE7aHW5z/?mibextid=wwXIfr',
    icon: FacebookIcon,
  },
  {
    label: 'X / Twitter',
    value: '@ezokhetho',
    href: 'https://x.com/ezokhetho?s=11&t=kKw2pLUppuh3sXeGKoH6hg',
    icon: TwitterIcon,
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Send via mailto as fallback (replace with email service like Resend/Formspree later)
    const mailto = `mailto:sales@ezokhetho.com?subject=${encodeURIComponent(form.subject || 'Enquiry from website')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setTimeout(() => { setSending(false); setSent(true) }, 600)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero banner */}
      <div className="relative overflow-hidden bg-[#0033A0] pt-32 pb-20">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="container relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-3 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-[#FF6B00]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#FF6B00]">
              Get in Touch
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="font-butler text-5xl font-light leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Let&apos;s talk
            <br />
            <em className="font-extralight italic text-white/60">about fashion</em>
          </motion.h1>
        </div>
      </div>

      <div className="container py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left — contact details */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div>
              <h2 className="font-butler text-3xl font-light text-[#0033A0]">
                Contact Ezokhetho
              </h2>
              <p className="mt-4 font-moderat text-[15px] leading-relaxed text-zinc-500">
                For general enquiries, stockist opportunities, press, wholesale, or custom commissions —
                reach out and our team will respond within 1–2 business days.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {contactDetails.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.08}
                  className="group flex items-center gap-4 border border-[#0033A0]/10 p-4 transition-all duration-300 hover:border-[#0033A0] hover:bg-[#0033A0]/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#0033A0] text-white transition-colors group-hover:bg-[#FF6B00]">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">{item.label}</div>
                    <div className="font-moderat text-sm font-medium text-zinc-800 transition-colors group-hover:text-[#0033A0]">{item.value}</div>
                  </div>
                  <ArrowRight className="ml-auto h-3.5 w-3.5 text-zinc-300 transition-all group-hover:translate-x-1 group-hover:text-[#0033A0]" />
                </motion.a>
              ))}
            </div>

            {/* Brand mark */}
            <div className="mt-auto pt-4 border-t border-zinc-100">
              <Logo variant="dark" />
              <p className="mt-3 font-moderat text-xs text-zinc-400">
                Contemporary African Luxury — Est. Johannesburg
              </p>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
          >
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-5 border border-[#0033A0]/10 bg-[#0033A0]/5 p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0033A0] text-white">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <h3 className="font-butler text-2xl font-light text-[#0033A0]">Message sent</h3>
                <p className="font-moderat text-sm text-zinc-500">
                  Your email client has opened. We&apos;ll be in touch within 1–2 business days.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-2 text-[11px] uppercase tracking-[0.15em] text-[#FF6B00] hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="font-butler text-3xl font-light text-[#0033A0]">Send a message</h2>

                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'e.g. Amahle Dlamini', required: true },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'email@example.com', required: true },
                  { id: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. Wholesale enquiry', required: false },
                ].map(field => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                      {field.label}{field.required && ' *'}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={(form as any)[field.id]}
                      onChange={e => setForm(prev => ({ ...prev, [field.id]: e.target.value }))}
                      className="w-full border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0] placeholder:text-zinc-300"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us about your enquiry..."
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full resize-none border border-zinc-200 px-4 py-3 font-moderat text-sm text-zinc-800 outline-none transition-colors focus:border-[#0033A0] placeholder:text-zinc-300"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  disabled={sending}
                  className="group flex items-center justify-center gap-3 bg-[#0033A0] px-8 py-4 font-moderat text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all hover:bg-[#FF6B00] disabled:opacity-60"
                >
                  {sending ? 'Opening email...' : 'Send Message'}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-[11px] text-zinc-400">
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
    </main>
  )
}
