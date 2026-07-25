import { Divider } from '@/components/divider'
import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Discover what the world is saying about Ezokhetho — from international features to local milestones.',
}

const articles = [
  {
    id: 'dossier',
    publication: 'Dossier Magazine',
    title: 'Discover the inspiring story behind Ezokhetho',
    excerpt: 'Discover the inspiring story behind Ezokhetho, from its beginnings to becoming one of South Africa\'s most distinctive contemporary luxury fashion brands.',
    url: 'https://dossiermag.net/home/ezokhetho-his-story',
    image: '/images/journal/tim gerges - dossier - Beauty-1384.JPG',
  },
  {
    id: 'cec-online',
    publication: 'CEC Online',
    title: 'Ezokhetho Takes Soweto to Paris with Mapetla Ext. 27 Collection',
    excerpt: 'Ezokhetho\'s Mapetla Ext. 27 collection celebrates Soweto\'s culture and creativity while making its mark on the international fashion stage in Paris.',
    url: 'https://ceconline.co.za/ezokhetho-takes-soweto-to-paris-with-mapetla-ext-27-collection/',
    image: '/images/journal/MOZIAK 2.JPG',
  },
  {
    id: 'news24-mapetla',
    publication: 'News24',
    title: 'An Ode to Soweto — Mapetla to Paris',
    excerpt: 'A look at how Ezokhetho transformed the spirit of Mapetla into a globally celebrated fashion collection showcased in Paris.',
    url: 'https://www.news24.com/life/lifestyle-trends/beauty-and-fashion/an-ode-to-soweto-sa-fashion-brand-ezokhetho-brings-mapetla-to-paris-with-new-collection-20260701-0485',
    image: '/images/journal/SUNDAY TIMES .JPG',
  },
  {
    id: 'news24-love',
    publication: 'News24',
    title: 'Love and Legacy',
    excerpt: 'Explore how designer Mpumelelo Dhlamini honors his late parents through a deeply personal collection rooted in love, heritage, and remembrance.',
    url: 'https://www.news24.com/life/lifestyle-trends/beauty-and-fashion/love-and-legacy-ezokhetho-designer-honours-late-parents-with-new-collection-20250821-0533',
    image: '/images/journal/BONA 1.JPG',
  },
  {
    id: 'news24-runway',
    publication: 'News24',
    title: 'The Runway Is Just the Beginning',
    excerpt: 'Learn about Ezokhetho\'s vision for the future of African luxury fashion beyond the runway and onto the global stage.',
    url: 'https://www.news24.com/life/lifestyle-trends/beauty-and-fashion/the-runway-is-just-the-beginning-ezokhethos-mpumelelo-dhlamini-on-fashions-next-chapter-20260513-0527',
    image: '/images/journal/SUNDAY TIMES_1.jpg',
  },
  {
    id: 'moziak',
    publication: 'Moziak Africa',
    title: 'Embracing African Exuberance',
    excerpt: 'An in-depth feature exploring Ezokhetho\'s philosophy of contemporary African luxury and the craftsmanship behind the brand.',
    url: 'https://moziak.africa/embracing-african-exuberance-the-story-of-contemporary-luxury-fashion-brand-ezokhetho/',
    image: '/images/journal/MOZIAK 1 Cover_Azana.JPG',
  },
  {
    id: 'glamour',
    publication: 'Glamour South Africa',
    title: 'Ezokhetho Unveils Zodwa at SA Menswear Week',
    excerpt: 'Read about Zodwa, Ezokhetho\'s collection unveiled at SA Menswear Week, celebrating enduring love, identity, and legacy.',
    url: 'https://www.glamour.co.za/fashion/sa-fashion-week/ezokhetho-unveils-zodwa-at-sa-menswear-week-a-tribute-to-enduring-love-and-legacy-19b7d03b-dc4e-4724-8569-fc85d0f7cd55',
    image: '/images/journal/GLAMOUR 2026 1.JPG',
  },
  {
    id: 'throne',
    publication: 'The Throne',
    title: 'Ezokhetho Features and Stories',
    excerpt: 'Browse features and stories highlighting Ezokhetho\'s latest collections, creative journey, and milestones in fashion.',
    url: 'https://www.thethrone.co.za/home/tag/Ezokhetho',
    image: '/images/journal/THE THRONE_KHANYI MBAU.JPG',
  },
  {
    id: 'twyg',
    publication: 'TWYG',
    title: 'Cuts to Cut Down Waste',
    excerpt: 'Discover how designer Mpumelelo Dhlamini incorporates sustainability and waste reduction into Ezokhetho\'s design process.',
    url: 'https://twyg.co.za/qa-ezokhethu-designer-mpumelelo-dhlamini-cuts-to-cut-down-waste/',
    image: '/images/journal/VOGUE 2024 1.JPG',
  },
  {
    id: 'previdar',
    publication: 'Previdar',
    title: 'Entathakusa at Dawn',
    excerpt: 'Explore Entathakusa at Dawn, a collection inspired by hope, renewal, and the beauty of new beginnings.',
    url: 'https://www.previdar.com/ezokhetho-presents-entathakusa-at-dawn/',
    image: '/images/journal/L_OfficielBatic Feature sept 23-01.JPG',
  },
  {
    id: 'sowetan',
    publication: 'Sowetan',
    title: 'Love, Heritage, and Legacy',
    excerpt: 'Read about Ezokhetho\'s heartfelt tribute to family, heritage, and legacy through one of its most emotional collections.',
    url: 'https://www.news24.com/life/lifestyle-trends/beauty-and-fashion/love-and-legacy-ezokhetho-designer-honours-late-parents-with-new-collection-20250821-0533',
    image: '/images/journal/SOWETAN.jpg',
  },
  {
    id: 'citizen',
    publication: 'The Citizen',
    title: 'Durban July 2026: Ezokhetho\'s Bold Fashion Showcase',
    excerpt: 'See the standout moments from the Durban July, including Ezokhetho\'s bold fashion showcase, luxury style, and celebrity appearances.',
    url: 'https://www.citizen.co.za/lifestyle/video-what-you-missed-at-the-durban-july-ezokhethos-chicken-feet-chic-luxury-cars-and-mzansi-celebs/',
    image: '/images/journal/SUNDAY TIMES_2.jpg',
  },
]

const publicationColors: Record<string, string> = {
  'Dossier Magazine': 'from-zinc-900 to-zinc-800',
  'CEC Online': 'from-blue-900 to-blue-800',
  'News24': 'from-amber-900 to-amber-800',
  'Moziak Africa': 'from-emerald-900 to-emerald-800',
  'Glamour South Africa': 'from-rose-900 to-rose-800',
  'The Throne': 'from-purple-900 to-purple-800',
  'TWYG': 'from-teal-900 to-teal-800',
  'Previdar': 'from-indigo-900 to-indigo-800',
  'Sowetan': 'from-orange-900 to-orange-800',
  'The Citizen': 'from-sky-900 to-sky-800',
}

export default function Page() {
  return (
    <div className="container">
      <div className="flex flex-col items-center py-14 text-center lg:py-20">
        <div className="mb-5 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-[#FF6B00]" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FF6B00]">
            Press & Media
          </span>
          <div className="h-px w-8 bg-[#FF6B00]" />
        </div>
        <Heading bigger level={1} className="mt-5">
          <span>In the</span>
          <br />
          <span data-slot="italic" className="underline">
            Journal.
          </span>
        </Heading>
        <Text className="mt-5 max-w-xl">
          Discover what the world is saying about Ezokhetho — from
          international features to local milestones.
        </Text>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mx-0 xl:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.id}
            className="group flex flex-col bg-white border border-zinc-100 hover:border-zinc-200 transition-all duration-300 overflow-hidden"
          >
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-100">
                <Image
                  src={article.image}
                  alt={`${article.publication} feature`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </a>

            <div className="flex flex-col flex-1 p-6">
              <div
                className={`mb-3 inline-block bg-gradient-to-r ${publicationColors[article.publication] ?? 'from-zinc-700 to-zinc-600'} px-3 py-1`}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  {article.publication}
                </span>
              </div>

              <h3 className="font-butler text-lg font-medium leading-snug text-zinc-900 mb-2">
                {article.title}
              </h3>

              <p className="font-moderat text-[13px] leading-relaxed text-zinc-500 flex-1 mb-5">
                {article.excerpt}
              </p>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#0033A0] hover:text-[#FF6B00] transition-colors duration-300"
              >
                Read Full Article
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      <Divider className="mt-16 sm:mt-24 lg:mt-28" />
    </div>
  )
}
