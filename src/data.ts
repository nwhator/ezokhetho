import ezokhethoProductsData from './data/products.json'
import optimizedMappings from './data/optimized_mappings.json'
export const ezokhethoProducts = ezokhethoProductsData

// Stub order functions (placeholder for future real order tracking)
export async function getOrder(number: string) {
  return (await getOrders()).find((order) => order.number.toString() === number)
}
export async function getOrders() {
  return [] as any[]
}
export function getCountries() {
  return [
    {
      name: 'Canada',
      code: 'CA',
      flagUrl: '/flags/ca.svg',
      regions: [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',
      ],
    },
    {
      name: 'Mexico',
      code: 'MX',
      flagUrl: '/flags/mx.svg',
      regions: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Ciudad de Mexico',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Mexico State',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
      ],
    },
    {
      name: 'United States',
      code: 'US',
      flagUrl: '/flags/us.svg',
      regions: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Washington DC',
        'Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'U.S. Virgin Islands',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
        'Armed Forces Americas',
        'Armed Forces Europe',
        'Armed Forces Pacific',
      ],
    },
  ]
}

export function getProductReviews() {
  return [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. </p>
      `,
      author: 'S. Walkinshaw',
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: 2,
      title: 'Perfect for going out when you want to stay comfy',
      rating: 5,
      content: `
        <p>The product quality is amazing, it looks and feel even better than I had anticipated.</p>
        <p>I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
      `,
      author: 'Risako M',
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: 3,
      title: 'Very nice feeling sweater!',
      rating: 5,
      content: `
        <p> I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times.</p>
        <p>The product quality is amazing!</p>
      `,
      author: 'Eden Birch',
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
  ]
}

export function getBlogPosts() {
  return [
    {
      id: 1,
      title: 'Graduation Dresses: A Style Guide',
      handle: 'graduation-dresses-style-guide',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: '/images/journal/BONA 2.JPG',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2020',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '2 min read',
    },
    {
      id: 2,
      title: 'How to Wear Your Eid Pieces All Year Long',
      handle: 'how-to-wear-your-eid-pieces-all-year-long',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: '/images/journal/BONA 3.JPG',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2020',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 3,
      title: 'The Must-Have Hijabi Friendly Fabrics for 2024',
      handle: 'the-must-have-hijabi-friendly-fabrics-for-2024',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: '/images/journal/CLIENT MAGAZINE UK 1.JPG',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2020',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 4,
      title: 'The Hijabi Friendly Fabrics for 2025',
      handle: 'the-must-have-hijabi-friendly-fabrics-for',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: '/images/journal/CLIENT MAGAZINE UK 2.JPG',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2020',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 5,
      title: 'Boost your conversion rate',
      handle: 'boost-your-conversion-rate',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: '/images/journal/GLAMOUR 2026 2.JPG',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2020',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 6,
      title: 'Graduation Dresses: A Style Guide',
      handle: 'graduation-dresses-style-guide',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: '/images/journal/GLAMOUR 2026 3.JPG',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2020',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
  ]
}

export function getBlogPostsByHandle(handle: string) {
  const blogPosts = getBlogPosts()
  const post = blogPosts.find((post) => post.handle === handle) || {}

  return {
    id: 1,
    title: 'Graduation Dresses: A Style Guide',
    handle: 'graduation-dresses-style-guide',
    excerpt:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Graduation Dresses: A Style Guide',
      width: 3773,
      height: 600,
    },
    date: 'Mar 16, 2025',
    datetime: '2025-03-16',
    category: { title: 'Marketing', href: '#' },
    timeToRead: '2 min read',
    ...post,
    content: `<p>Beauty is a universal language</p>`,
    author: {
      name: 'S. Walkinshaw',
    },
  }
}

export async function getFashionCollections() {
  const products = await getFashionProducts()
  return [
    {
      id: 'khumbulekhaya',
      title: "Khumbulekhaya '22",
      handle: 'khumbulekhaya',
      description: "A celebration of reconnecting with family, culture and heritage through contemporary South African aesthetics. Home is not a place — it is a feeling carried within.",
      updatedAt: '2026-07-09T00:00:00-04:00',
      image: '/images/products/Collections/3. Khumbulekhaya _22/EZOKHTHO_2022-001.webp',
      galleryImages: COLLECTION_GALLERY_IMAGES['khumbulekhaya'],
      products: products.filter(p => p.collections.some((c: any) => c.handle === 'khumbulekhaya')),
    },
    {
      id: 'entathakusa',
      title: 'Entathakusa - SAMW-TWF',
      handle: 'entathakusa',
      description: 'Celebrating the morning dawn, new beginnings, and the progression of contemporary South African design.',
      updatedAt: '2026-07-09T00:00:00-04:00',
      image: '/images/products/Collections/Entathakusa - SAMW-TWF/IMG_2889.webp',
      galleryImages: COLLECTION_GALLERY_IMAGES['entathakusa'],
      products: products.filter(p => p.collections.some((c: any) => c.handle === 'entathakusa')),
    },
    {
      id: 'sophiatown',
      title: 'Sophiatown',
      handle: 'sophiatown',
      description: 'A nostalgic look at the vibrant musical, style and cultural hub of Sophiatown during its golden era, celebrating resilience and style.',
      updatedAt: '2026-07-09T00:00:00-04:00',
      image: '/images/products/Collections/Sophiatown/Ezokhetho.webp',
      galleryImages: COLLECTION_GALLERY_IMAGES['sophiatown'],
      products: products.filter(p => p.collections.some((c: any) => c.handle === 'sophiatown')),
    },
    {
      id: 'zodwa',
      title: 'Zodwa',
      handle: 'zodwa',
      description: "Ezokhetho's signature collection celebrating modern tailoring, flowing drapes, and timeless structured designs.",
      updatedAt: '2026-07-09T00:00:00-04:00',
      image: '/images/products/Collections/Zodwa/The Zodwa Printed 2 piece Suit-2.webp',
      galleryImages: COLLECTION_GALLERY_IMAGES['zodwa'],
      products: products.filter(p => p.collections.some((c: any) => c.handle === 'zodwa')),
    },
    {
      id: 'izimbokodo',
      title: "Izimbokodo '22",
      handle: 'izimbokodo',
      description: "Inspired by the courage and resilience of Black South African women. The collection explores femininity beyond social constructs.",
      updatedAt: '2026-07-09T00:00:00-04:00',
      image: '/images/products/Collections/izmibokodo _22/DSC_2085.webp',
      galleryImages: COLLECTION_GALLERY_IMAGES['izimbokodo'],
      products: products.filter(p => p.collections.some((c: any) => c.handle === 'izimbokodo')),
    },
    {
      id: 'shop',
      title: 'Shop',
      handle: 'shop',
      description: 'Discover the full Ezokhetho range. Timeless design celebrating contemporary African luxury, heritage and storytelling.',
      updatedAt: '2026-07-14T00:00:00-04:00',
      image: '/images/products/Online Store/Ezokhetho Online Store Product EZOKHETHO MAPETLA INQINA COAT/Ezoketho Mapetla _26-34.webp',
      products: await getShopProducts(),
    }
  ]
}

export async function getCollections(theme?: string) {
  return await getFashionCollections()
}
export async function getCollectionById(id: string) {
  const allCollections = await getCollections('all')
  return allCollections?.find((collection) => collection?.id.toString() === id)
}
export async function getCollectionByHandle(handle: string) {
  // 'all' -> show all runway collection products
  if (handle === 'all') {
    return {
      id: 'gid://0',
      title: 'All Products',
      handle: 'all',
      description:
        'Discover the full Ezokhetho range. Timeless design celebrating contemporary African luxury, heritage and storytelling.',
      updatedAt: '2026-07-09T00:00:00-04:00',
      image: '/images/products/Collections/Zodwa/The Zodwa Printed 2 piece Suit-2.webp',
      products: await getRunwayProducts(),
    }
  }
  const allCollections = await getCollections('all')
  return allCollections?.find((collection) => collection?.handle === handle)
}

export async function getProducts() {
  return ezokhethoProducts as any[]
}

export async function getFashionProducts() {
  return ezokhethoProducts as any[]
}

// get product by handle
export async function getProductByHandle(handle: string) {
  handle = handle.toLowerCase()
  const match = ezokhethoProducts.find((product) => product.handle === handle)
  if (match) {
    return match as any
  }
  const allProducts = await getProducts()
  const product = allProducts?.find((product) => product?.handle === handle) as TProductItem
  if (!product) {
    return null
  }
  return {
    ...product,
    description: 'lorem ipsum dolor...',
  }
}

// The 5 main fashion runway collection handles (not "shop")
export const MAIN_COLLECTION_HANDLES = [
  'khumbulekhaya', 'entathakusa', 'sophiatown', 'zodwa', 'izimbokodo',
]

// Products belonging to the main runway collections (shown as "Contact us" / under Collections only)
export function isRunwayProduct(product: any) {
  return product?.runway === true
}

export async function getRunwayProducts() {
  const all = await getFashionProducts()
  return all.filter(isRunwayProduct)
}

// Products with visible prices (the "shop" / online store range)
export async function getShopProducts() {
  const all = await getFashionProducts()
  return all.filter((p) => !isRunwayProduct(p))
}

// Cover images for main fashion collections (from /images/products/Collections/)
export const COLLECTION_COVER_IMAGES: Record<string, string> = {
  khumbulekhaya: '/images/products/Collections/3. Khumbulekhaya _22/EZOKHTHO_2022-001.webp',
  entathakusa: '/images/products/Collections/Entathakusa - SAMW-TWF/IMG_2889.webp',
  sophiatown: '/images/products/Collections/Sophiatown/Ezokhetho.webp',
  zodwa: '/images/products/Collections/Zodwa/The Zodwa Printed 2 piece Suit-2.webp',
  izimbokodo: '/images/products/Collections/izmibokodo _22/DSC_2085.webp',
}

// Editorial slideshow images per fashion collection (from optimized_mappings.json)
export const COLLECTION_GALLERY_IMAGES: Record<string, string[]> = (() => {
  const source = (optimizedMappings as any)?.collections ?? {}
  const galleries: Record<string, string[]> = {}
  for (const handle of Object.keys(source)) {
    const images = source[handle]?.images
    if (Array.isArray(images) && images.length) {
      galleries[handle] = images
    }
  }
  return galleries
})()

// COMMON Types ------------------------------------------------------------------------
export type TCollection = Awaited<ReturnType<typeof getFashionCollections>>[number]
export type TProductItem = Awaited<ReturnType<typeof getProducts>>[number]
