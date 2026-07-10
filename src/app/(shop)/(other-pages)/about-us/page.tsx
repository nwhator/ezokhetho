import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/app/logo'

export const metadata: Metadata = {
  title: 'About Ezokhetho | Contemporary African Luxury Fashion',
  description:
    'Founded by Mpumelelo Dhlamini after graduating from the Villioti Fashion Institute, Ezokhetho is a vehicle for storytelling through African luxury fashion — honouring those who came before us.',
}

export default function AboutPage() {
  return (
    <main className="pb-24">

      {/* ── HERO BANNER ── */}
      <section className="relative flex min-h-[60vh] items-end justify-start overflow-hidden bg-zinc-950">
        <Image
          src="/images/ezokhetho/about_1.jpg"
          alt="Ezokhetho — About Us"
          fill
          className="object-cover object-top opacity-80"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative container pb-16 pt-40">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00]">
            Est. Johannesburg
          </p>
          <h1 className="font-butler text-5xl font-light leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            About <em className="font-extralight italic">Ezokhetho</em>
          </h1>
        </div>
      </section>

      {/* ── BRAND STORY ── */}
      <section className="container py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <div className="flex items-center justify-center h-full w-full bg-white">
                <Logo variant="dark" className="scale-150" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-20 w-20 border-b-2 border-r-2 border-[#FF6B00]" />
            <div className="absolute -left-4 -top-4 h-20 w-20 border-l-2 border-t-2 border-[#0033A0]" />
          </div>

          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#FF6B00]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
                Our Story
              </span>
            </div>

            <h2 className="font-butler text-4xl font-light leading-[1.15] tracking-tight text-zinc-900 sm:text-5xl">
              A Vehicle for{' '}
              <em className="font-extralight italic">Storytelling</em>
            </h2>

            <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-zinc-600">
              <p>
                <strong className="font-medium text-zinc-900">Ezokhetho</strong> is derived from
                the isiZulu language by founder Mpumelelo Dhlamini and his mother. The name means
                &ldquo;meticulously chosen as being the best or most suitable by those who came
                before us.&rdquo;
              </p>
              <p>
                Founded after graduating from The Villioti Fashion Institute in Johannesburg, the
                brand was created as a vehicle for storytelling through clothing — weaving African
                identity, culture, and heritage into every stitch.
              </p>
              <p>
                From Dean&apos;s Merit Award recognition to showcasing at SA Fashion Week, Milan
                Fashion Week, and Lagos Fashion Week, Ezokhetho has grown into a contemporary
                African luxury house.
              </p>
            </div>

            <blockquote className="relative pl-6">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-[#FF6B00]" />
              <p className="font-butler text-xl font-light italic leading-snug text-zinc-900">
                &ldquo;Meticulously chosen by those who came before us.&rdquo;
              </p>
              <cite className="mt-3 block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 not-italic">
                — Mpumelelo Dhlamini, Founder
              </cite>
            </blockquote>

            <div className="grid grid-cols-3 gap-4 border-t border-zinc-100 pt-8">
              {[
                { stat: '9', label: 'Collections' },
                { stat: '6+', label: 'Years' },
                { stat: '3', label: 'Continents' },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <p className="font-butler text-3xl font-light text-zinc-900">{stat}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABLE COMMITMENT ── */}
      <section className="bg-[#F8F6F3] py-20 sm:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col justify-center gap-8 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#0033A0]" />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#0033A0]">
                  Our Commitment
                </span>
              </div>

              <h2 className="font-butler text-4xl font-light leading-[1.15] tracking-tight text-zinc-900 sm:text-5xl">
                Craft with <em className="font-extralight italic">Purpose</em>
              </h2>

              <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-zinc-600">
                <p>
                  At Ezokhetho, sustainability is not a trend — it&apos;s woven into our philosophy.
                  We champion quality over quantity, creating garments built to last for generations.
                </p>
                <p>
                  Every collection is produced in limited runs with intentional craftsmanship,
                  honouring both the planet and the artisans behind each piece.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  'Limited-run, intentional collections',
                  'Quality materials that endure',
                  'Honouring African artisanship',
                  'Conscious production practices',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                    <span className="text-[14px] text-zinc-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/ezokhetho/sustainable.jpg"
                  alt="Ezokhetho — Sustainable luxury fashion craftsmanship"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 h-20 w-20 border-b-2 border-l-2 border-[#0033A0]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS CTA ── */}
      <section className="container py-20 sm:py-28 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#FF6B00]" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
            The Work
          </span>
          <div className="h-px w-8 bg-[#FF6B00]" />
        </div>
        <h2 className="font-butler text-4xl font-light leading-[1.15] tracking-tight text-zinc-900 sm:text-5xl mb-6">
          Explore the <em className="font-extralight italic">Collections</em>
        </h2>
        <p className="max-w-md mx-auto text-[15px] leading-relaxed text-zinc-500 mb-10">
          From Sophiatown &apos;21 to Mapetla &apos;26 — nine collections, each a chapter of African
          storytelling through luxury fashion.
        </p>
        <Link
          href="/collections/all"
          className="inline-flex items-center gap-3 bg-zinc-900 px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#0033A0]"
        >
          View All Collections
        </Link>
      </section>

    </main>
  )
}
