import type { Metadata } from 'next'
import EzokhethoHero from '@/components/ezokhetho/ezokhetho-hero'
import EzokhethoBrandStory from '@/components/ezokhetho/ezokhetho-brand-story'
import EzokhethoFounder from '@/components/ezokhetho/ezokhetho-founder'
import EzokhethoCollections from '@/components/ezokhetho/ezokhetho-collections'
import EzokhethoSustainability from '@/components/ezokhetho/ezokhetho-sustainability'
import EzokhethoPhilosophy from '@/components/ezokhetho/ezokhetho-philosophy'
import EzokhethoFeaturedProducts from '@/components/ezokhetho/ezokhetho-products'
import EzokhethoNewsletter from '@/components/ezokhetho/ezokhetho-newsletter'
import EzokhethoHeader from '@/components/ezokhetho/ezokhetho-header'
import EzokhethoFooter from '@/components/ezokhetho/ezokhetho-footer'
import EzokhethoServices from '@/components/ezokhetho/ezokhetho-services'

export const metadata: Metadata = {
  title: 'Ezokhetho | Contemporary African Luxury Fashion',
  description:
    'Ezokhetho is a contemporary African luxury fashion house celebrating African heritage, craftsmanship and storytelling through timeless collections by Mpumelelo Dhlamini.',
  alternates: {
    canonical: 'https://www.ezokhetho.com',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Fixed transparent-to-white header */}
      <EzkoHeader />

      <main id="main-content">
        {/* 1. Hero — full-screen cinematic */}
        <EzokhethoHero />

        {/* 2. Brand Story — split layout */}
        <EzkoBrandStory />

        {/* 3. Founder — portrait + timeline */}
        <EzkoFounder />

        {/* 4. Collections — Ngithwale, Izimbokodo, Khumbulekhaya */}
        <EzkoCollections />

        {/* 5. Sustainability — 4 pillars */}
        <EzkoSustainability />

        {/* 6. Philosophy — full-width quote */}
        <EzkoPhilosophy />

        {/* 7. Featured Products — editorial grid */}
        <EzkoFeaturedProducts />

        {/* 8. Ezokhetho Services — 3 columns */}
        <EzokhethoServices />

        {/* 9. Newsletter — join the journey */}
        <EzkoNewsletter />
      </main>

      {/* Footer */}
      <EzkoFooter />
    </>
  )
}