import Aside from '@/components/aside'
import '@/styles/tailwind.css'
import clsx from 'clsx'
import type { Metadata } from 'next'

// Butler is a free serif display font by Fabian De Smet
// Self-hosted via public/fonts/ — add Butler-Light.woff2, Butler-Regular.woff2, Butler-Bold.woff2
// to public/fonts/ when available. The CSS @font-face is declared in tailwind.css.

// Moderat is a commercial font by TIGHTYPE (tightype.com)
// When licensed, add Moderat-Regular.woff2, Moderat-Medium.woff2, Moderat-Bold.woff2
// to public/fonts/ and update the @font-face rules in tailwind.css.
// Until then, General Sans (Fontshare CDN) is used as a near-identical substitute.

export const metadata: Metadata = {
  title: {
    template: '%s | Ezokhetho',
    default: 'Ezokhetho | Contemporary African Luxury Fashion',
  },
  description:
    'Ezokhetho is a contemporary African luxury fashion house celebrating African heritage, craftsmanship and storytelling through timeless collections.',
  keywords: [
    'Ezokhetho',
    'African luxury fashion',
    'South African fashion',
    'Mpumelelo Dhlamini',
    'African designer',
    'Ngithwale',
    'Izimbokodo',
    'Khumbulekhaya',
    'SA Fashion Week',
    'Milan Fashion Week',
    'African heritage fashion',
  ],
  openGraph: {
    title: 'Ezokhetho | Contemporary African Luxury Fashion',
    description:
      'Ezokhetho is a contemporary African luxury fashion house celebrating African heritage, craftsmanship and storytelling through timeless collections.',
    url: 'https://www.ezokhetho.com',
    siteName: 'Ezokhetho',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ezokhetho | Contemporary African Luxury Fashion',
    description:
      'Ezokhetho is a contemporary African luxury fashion house celebrating African heritage, craftsmanship and storytelling through timeless collections.',
  },
}

import { CartProvider } from '@/lib/cart-context'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx('text-zinc-950 antialiased')}>
      <head>
        {/* Fontshare — General Sans (Moderat substitute until license acquired) */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <Aside.Provider>{children}</Aside.Provider>
        </CartProvider>
      </body>
    </html>
  )
}
