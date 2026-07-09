'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Leaf, Scissors, Users, Eye } from 'lucide-react'

const pillars = [
  {
    id: 'local-sourcing',
    icon: Leaf,
    title: 'Local Sourcing',
    description:
      'Every fabric and material is sourced from local suppliers across Southern Africa, keeping craftsmanship and economy within the community.',
  },
  {
    id: 'surplus-fabrics',
    icon: Scissors,
    title: 'Surplus Fabrics',
    description:
      'We intentionally work with surplus and dead-stock fabrics, reducing waste while creating limited-run pieces with genuine scarcity.',
  },
  {
    id: 'fair-production',
    icon: Users,
    title: 'Fair Production',
    description:
      'Every garment is produced in partnership with small, vetted local workshops that uphold fair wages and ethical working conditions.',
  },
  {
    id: 'transparency',
    icon: Eye,
    title: 'Transparency',
    description:
      'We believe luxury should be accountable. We openly share our supply chain, production partners, and environmental commitments.',
  },
]

export default function EzkoSustainability() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="sustainability"
      ref={ref}
      className="py-24 sm:py-32 lg:py-40"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl lg:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-8 bg-[#FF6B00]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
              Sustainability
            </span>
          </div>
          <h2 className="font-butler text-4xl font-light leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Designed
            <br />
            <em className="font-extralight italic">Responsibly</em>
          </h2>
          <p className="mt-6 font-moderat text-[15px] leading-relaxed text-zinc-500">
            Ezokhetho believes luxury should also be responsible. We make deliberate choices at
            every step — from the suppliers we select to the production methods we employ —
            because what we create must be worthy of the stories it carries.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 gap-px bg-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.id}
                id={`sustainability-${pillar.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15 + index * 0.1,
                }}
                className="group flex flex-col gap-5 bg-white p-8 transition-colors duration-300 hover:bg-[#0033A0]"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center border border-zinc-200 transition-colors duration-300 group-hover:border-white/20">
                  <Icon className="h-5 w-5 text-[#0033A0] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="font-butler text-base font-medium tracking-wide text-zinc-900 transition-colors duration-300 group-hover:text-white">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-moderat text-[13px] leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-white/70">
                  {pillar.description}
                </p>

                {/* Accent line */}
                <div className="mt-auto h-0.5 w-8 bg-[#FF6B00] transition-all duration-300 group-hover:w-full group-hover:bg-white/30" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
