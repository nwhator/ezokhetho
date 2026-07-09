import { Logo } from '@/app/logo'
import Link from 'next/link'

const footerLinks = {
  shop: [
    { name: 'All Collections', href: '/collections/all' },
    { name: 'Ngithwale', href: '/collections/ngithwale' },
    { name: 'Izimbokodo', href: '/collections/izimbokodo' },
    { name: 'Khumbulekhaya', href: '/collections/khumbulekhaya' },
  ],
  explore: [
    { name: 'About', href: '#brand-story' },
    { name: 'The Founder', href: '#founder' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Contact', href: 'mailto:sales@ezokhetho.com' },
  ],
  help: [
    { name: 'Returns', href: '/returns' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Email Us', href: 'mailto:sales@ezokhetho.com' },
  ],
}

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ezokhetho?igsh=N2s4aTdmeGhxb2Z5&utm_source=qr',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/18HE7aHW5z/?mibextid=wwXIfr',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'X / Twitter',
    href: 'https://x.com/ezokhetho?s=11&t=kKw2pLUppuh3sXeGKoH6hg',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function EzkoFooter() {
  return (
    <footer className="border-t border-[#0033A0]/10 bg-white">
      {/* Main footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-8">
          {/* Brand column */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Logo variant="dark" />
            <p className="max-w-xs font-moderat text-[13px] leading-relaxed text-zinc-500">
              Contemporary African luxury fashion. Every collection carries stories of heritage,
              identity and craftsmanship.
            </p>
            <a
              href="mailto:sales@ezokhetho.com"
              className="text-[13px] text-[#0033A0] hover:text-[#FF6B00] transition-colors font-moderat"
            >
              sales@ezokhetho.com
            </a>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center border border-[#0033A0]/20 text-[#0033A0] transition-colors hover:bg-[#0033A0] hover:text-white hover:border-[#0033A0]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0033A0]">
                  {category}
                </h3>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="font-moderat text-[13px] text-zinc-500 transition-colors hover:text-[#0033A0]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#0033A0]/10 bg-[#0033A0]">
        <div className="container flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          <p className="font-moderat text-[11px] text-white/70">
            &copy; {new Date().getFullYear()} Ezokhetho. All rights reserved.
          </p>
          <p className="font-moderat text-[11px] italic text-white/40">
            Meticulously chosen by those who came before us.
          </p>
        </div>
      </div>
    </footer>
  )
}
