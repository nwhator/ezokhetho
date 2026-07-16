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
import EzokhethoJournal from '@/components/ezokhetho/ezokhetho-journal'

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
      <EzokhethoHeader />

      <main id="main-content">
        {/* 1. Hero — full-screen cinematic */}
        <EzokhethoHero />

        {/* 2. Brand Story — split layout */}
        <EzokhethoBrandStory />

        {/* 3. Founder — portrait + timeline */}
        <EzokhethoFounder />

        {/* 4. Collections — Ngithwale, Izimbokodo, Khumbulekhaya */}
        <EzokhethoCollections />

        {/* 5. Sustainability — 4 pillars */}
        <EzokhethoSustainability />

        {/* 6. Philosophy — full-width quote */}
        <EzokhethoPhilosophy />

        {/* 7. Featured Products — editorial grid */}
        <EzokhethoFeaturedProducts />

        {/* 8. Ezokhetho Services — 3 columns */}
        <EzokhethoServices />

        {/* 9. In the Journal — press & media */}
        <EzokhethoJournal />

        {/* 10. Newsletter — join the journey */}
        <EzokhethoNewsletter />
      </main>

      {/* Footer */}
      <EzokhethoFooter />
    </>
  )
}