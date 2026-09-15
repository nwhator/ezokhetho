const fs = require('fs');
const path = require('path');

// ----------------------------------------------------
// 1. Five Active Collections
// ----------------------------------------------------
const collectionsMeta = [
  {
    id: 'khumbulekhaya',
    handle: 'khumbulekhaya',
    title: "Khumbulekhaya '22",
    folder: '3. Khumbulekhaya _22',
    subtitle: "Remember Home '22",
    desc: 'A celebration of reconnecting with family, culture and heritage. Home is not a place — it is a feeling carried within.',
    accent: '#FF6B00',
    coverImage: 'EZOKHTHO_2022-001.webp'
  },
  {
    id: 'entathakusa',
    handle: 'entathakusa',
    title: 'Entathakusa - SAMW-TWF',
    folder: 'Entathakusa - SAMW-TWF',
    subtitle: 'Robb Report Gala & SAMW',
    desc: 'Celebrating the morning dawn, new beginnings, and the progression of contemporary South African design.',
    accent: '#0033A0',
    coverImage: 'IMG_2889.webp'
  },
  {
    id: 'sophiatown',
    handle: 'sophiatown',
    title: 'Sophiatown',
    folder: 'Sophiatown',
    subtitle: "Golden Era '21",
    desc: 'A nostalgic look at the vibrant musical, style and cultural hub of Sophiatown during its golden era, celebrating resilience and style.',
    accent: '#FF6B00',
    coverImage: 'Ezokhetho.webp'
  },
  {
    id: 'zodwa',
    handle: 'zodwa',
    title: 'Zodwa',
    folder: 'Zodwa',
    subtitle: 'Signature Tailoring',
    desc: "Ezokhetho's signature collection celebrating modern tailoring, flowing drapes, and timeless structured designs.",
    accent: '#0033A0',
    coverImage: 'The Zodwa Printed 2 piece Suit-2.webp'
  },
  {
    id: 'izimbokodo',
    handle: 'izimbokodo',
    title: "Izimbokodo '22",
    folder: 'izimbokodo _22',
    subtitle: "Strength of Stone '22",
    desc: 'Inspired by the courage and resilience of Black South African women. The collection explores femininity beyond social constructs.',
    accent: '#FF6B00',
    coverImage: 'DSC_2085.webp'
  }
];

const collectionsBaseDir = path.join(__dirname, '../public/images/products/Collections');
const onlineBaseDir = path.join(__dirname, '../public/images/products/Online Store');

// Build collection runway pieces
let runwayPieces = [];
let optimizedCollections = {};
let runwayIdCounter = 6001;

collectionsMeta.forEach(col => {
  const colDir = path.join(collectionsBaseDir, col.folder);
  if (!fs.existsSync(colDir)) {
    console.warn(`Collection folder not found: ${colDir}`);
    return;
  }
  const files = fs.readdirSync(colDir).filter(f => f.endsWith('.webp'));
  
  // Sort files naturally
  files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  const galleryImages = files.map(f => `/images/products/Collections/${col.folder}/${f}`);
  const coverSrc = `/images/products/Collections/${col.folder}/${col.coverImage || files[0]}`;

  optimizedCollections[col.handle] = {
    id: col.id,
    title: col.title,
    desc: col.desc,
    cover: coverSrc,
    images: galleryImages
  };

  files.forEach((file, idx) => {
    const rawName = file.replace(/\.webp$/, '');
    const cleanName = rawName
      .replace(/^The\s+/i, '')
      .replace(/[-_]\d+$/, '')
      .replace(/[-_]/g, ' ')
      .trim();

    const title = `${col.title} — Look ${idx + 1} (${cleanName})`;
    const handle = `${col.handle}-look-${idx + 1}`;
    const imgSrc = `/images/products/Collections/${col.folder}/${file}`;

    runwayPieces.push({
      id: runwayIdCounter++,
      title: title,
      handle: handle,
      vendor: 'Ezokhetho',
      tags: ['Runway', col.title, 'Collection'],
      price: 0,
      runway: true,
      images: [
        {
          alt: `${title} - Ezokhetho`,
          width: 1200,
          height: 1600,
          src: imgSrc
        }
      ],
      featured_image: {
        alt: `${title} - Ezokhetho`,
        width: 1200,
        height: 1600,
        src: imgSrc
      },
      options: [
        {
          name: 'Size',
          optionValues: [
            { name: 'Custom Fit / Made to Measure', swatch: null }
          ]
        }
      ],
      selected_options: [
        { name: 'Size', value: 'Custom Fit / Made to Measure' }
      ],
      collections: [
        {
          id: col.id,
          title: col.title,
          handle: col.handle
        }
      ],
      description: `${col.title} runway piece. Handcrafted contemporary African luxury by Ezokhetho. Available for custom enquiry and atelier fitting.`,
      category: 'Runway Piece',
      availability: 'Made to Order / Enquiry Only',
      madeToOrder: true
    });
  });
});

// ----------------------------------------------------
// 2. Fourteen Online Store Products
// ----------------------------------------------------
const onlineProductsMeta = [
  {
    folder: 'Ezokhetho Online Store Product EZOKHETHO MAPETLA INQINA COAT',
    id: 7001,
    title: 'Ezokhetho Mapetla Inqina Coat',
    handle: 'ezokhetho-mapetla-inqina-coat',
    vendor: 'Ezokhetho',
    price: 10950,
    tags: ['Coat', 'Outerwear', 'Mapetla', 'Shop'],
    runway: false,
    madeToOrder: false,
    colour: 'Print',
    colourHex: '#8B5E3C',
    category: 'Coat',
    fabricComposition: '100% Polyester',
    detailComposition: 'Slits',
    washCare: 'Dry-Clean Only',
    sizes: ['32', '34', '36', '38', '40', '42', '44'],
    availability: 'In Stock',
    description: 'A striking statement coat featuring bold signature prints with elegant side slits and tailored silhouette.'
  },
  {
    folder: 'Ezokhetho Online Store Product EZOKHETHO MAPETLA INQINA POLKA DOT JORTS',
    id: 7002,
    title: 'Ezokhetho Mapetla Inqina Polka Dot Jorts',
    handle: 'ezokhetho-mapetla-inqina-polka-dot-jorts',
    vendor: 'Ezokhetho',
    price: 4950,
    tags: ['Jorts', 'Bottoms', 'Mapetla', 'Shop'],
    runway: false,
    madeToOrder: false,
    colour: 'Polka Dots',
    colourHex: '#1A1A1A',
    category: 'Bubble Jorts',
    fabricComposition: '100% Polyester',
    detailComposition: 'Bubble',
    washCare: 'Cold Handwash / Cool-Warm Iron',
    sizes: ['32', '34', '36', '38', '40', '42'],
    availability: 'In Stock',
    description: 'Playful yet architectural polka dot bubble jorts offering a sculptural form with relaxed volume.'
  },
  {
    folder: 'Ezokhetho Online Store Product EZOKHETHO TA-DA TRENCH COAT',
    id: 7003,
    title: 'Ezokhetho Ta-Da Trench Coat',
    handle: 'ezokhetho-ta-da-trench-coat',
    vendor: 'Ezokhetho',
    price: 12950,
    tags: ['Trench Coat', 'Outerwear', 'Mapetla', 'Shop'],
    runway: false,
    madeToOrder: false,
    colour: 'Green/Pink/Print',
    colourHex: '#2E5A44',
    category: 'Trench Coat',
    fabricComposition: '100% Polyester',
    detailComposition: 'Belt',
    washCare: 'Dry-Clean Only',
    sizes: ['32', '34', '36', '38', '40', '42', '44'],
    availability: 'In Stock',
    description: 'A showstopping trench coat featuring a striking multi-colour print harmony, defined belted waist, and sharp tailored collar.'
  },
  {
    folder: 'Ezokhetho Online Store Product FULL CREAM KNITTED BODYSUIT',
    id: 7004,
    title: 'Full Cream Knitted Bodysuit',
    handle: 'full-cream-knitted-bodysuit',
    vendor: 'Ezokhetho',
    price: 6295,
    tags: ['Bodysuit', 'Knitwear', 'Zodwa', 'Shop'],
    runway: false,
    madeToOrder: true,
    colour: 'Print',
    colourHex: '#E8D8C8',
    category: 'Bodysuit',
    fabricComposition: 'Cotton Blend',
    detailComposition: 'Press Stud Closure',
    washCare: 'Cold Hand Wash',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    availability: 'Made to Order',
    description: 'Luxurious tactile knitted bodysuit in cream tones with press stud closure. A sculpted staple crafted for effortless elegance.'
  },
  {
    folder: 'Ezokhetho Online Store Product INGONYAMA PRINTED VELVET SUIT',
    id: 7005,
    title: 'Ingonyama Printed Velvet Suit',
    handle: 'ingonyama-printed-velvet-suit',
    vendor: 'Ezokhetho',
    price: 20950,
    tags: ['Suit', 'Velvet', 'Menswear', 'Tailoring', 'Zodwa', 'Shop'],
    runway: false,
    madeToOrder: true,
    colour: 'Print',
    colourHex: '#3B2F2F',
    category: 'Velvet Suit',
    fabricComposition: 'Cotton Blend',
    detailComposition: 'Centre Fly Front Ziplined Jacket',
    washCare: 'Dry Clean',
    sizes: ['34', '36', '38', '40', '42'],
    availability: 'Made to Order',
    description: 'A regal two-piece printed velvet suit with a centre fly front zip jacket. Rich texture meets sharp South African tailoring.'
  },
  {
    folder: 'Ezokhetho Online Store Product INKHOSAZANA OSTRICH DENIM DRESS',
    id: 7006,
    title: 'Inkhosazana Ostrich Denim Dress',
    handle: 'inkhosazana-ostrich-denim-dress',
    vendor: 'Ezokhetho',
    price: 14950,
    tags: ['Dress', 'Denim', 'Ostrich Feathers', 'Zodwa', 'Shop'],
    runway: false,
    madeToOrder: true,
    colour: 'Blue/White',
    colourHex: '#3F5E78',
    category: 'Denim Dress',
    fabricComposition: 'Cotton Blend',
    detailComposition: 'Centre Back Zip / Ostrich Feathers',
    washCare: 'Dry Clean Only',
    sizes: ['32', '34', '36', '38', '40', '42'],
    availability: 'Made to Order',
    description: 'Structured denim dress embellished with authentic ostrich feather trims along the hemline, finished with a centre back zip.'
  },
  {
    folder: 'Ezokhetho Online Store Product INQINA MESH BODYSUIT',
    id: 7007,
    title: 'Inqina Mesh Bodysuit',
    handle: 'inqina-mesh-bodysuit',
    vendor: 'Ezokhetho',
    price: 2495,
    tags: ['Bodysuit', 'Mesh', 'Mapetla', 'Shop'],
    runway: false,
    madeToOrder: false,
    colour: 'Red/Black',
    colourHex: '#8B0000',
    category: 'Mesh Bodysuit',
    fabricComposition: '100% Polyester',
    detailComposition: 'Stretch / Press Studs - Buttons Opening',
    washCare: 'Cold Hand Wash',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    availability: 'In Stock',
    description: 'Vibrant stretch mesh bodysuit in striking red and black print, designed with high comfort and seamless layering in mind.'
  },
  {
    folder: 'Ezokhetho Online Store Product INQINA UNISEX SHIRT BLOUSE',
    id: 7008,
    title: 'Inqina Unisex Shirt Blouse',
    handle: 'inqina-unisex-shirt-blouse',
    vendor: 'Ezokhetho',
    price: 4950,
    tags: ['Shirt', 'Blouse', 'Unisex', 'Zodwa', 'Shop'],
    runway: false,
    madeToOrder: true,
    colour: 'Print',
    colourHex: '#BD8E4F',
    category: 'Shirt / Blouse',
    fabricComposition: '100% Polyester',
    detailComposition: 'Centre Front Press Studs',
    washCare: 'Cold Handwash',
    sizes: ['32', '34', '36', '38', '40', '42', '44'],
    availability: 'Made to Order',
    description: 'A crisp, modern unisex shirt blouse featuring African graphic heritage prints and sleek centre-front press studs.'
  },
  {
    folder: 'Ezokhetho Online Store Product MAPETLA ONE-SHOULDER ASYMMETRIC BUBBLE DRESS',
    id: 7009,
    title: 'Mapetla One-Shoulder Asymmetric Bubble Dress',
    handle: 'mapetla-one-shoulder-asymmetric-bubble-dress',
    vendor: 'Ezokhetho',
    price: 5950,
    tags: ['A-Line Dress', 'Dress', 'Mapetla', 'Shop'],
    runway: false,
    madeToOrder: false,
    colour: 'Green/Pink',
    colourHex: '#C75D6D',
    category: 'A-Line Dress',
    fabricComposition: '100% Polyester',
    detailComposition: 'Zip Opening',
    washCare: 'Dry-Clean Only',
    sizes: ['32', '34', '36', '38', '40', '42', '44'],
    availability: 'In Stock',
    description: 'An architectural one-shoulder asymmetric dress featuring bubble volume and a striking green and pink palette.'
  },
  {
    folder: 'Ezokhetho Online Store Product MAPETLA PIXIE',
    id: 7010,
    title: 'Mapetla Pixie',
    handle: 'mapetla-pixie',
    vendor: 'Ezokhetho',
    price: 5950,
    tags: ['A-Line Dress', 'Dress', 'Mapetla', 'Shop'],
    runway: false,
    madeToOrder: false,
    colour: 'Print',
    colourHex: '#8B5E3C',
    category: 'A-Line Dress',
    fabricComposition: '100% Polyester',
    detailComposition: 'Zip Opening',
    washCare: 'Cold Hand Wash / Cool-Warm Iron',
    sizes: ['32', '34', '36', '38', '40', '42', '45'],
    availability: 'In Stock',
    description: 'A sculptural A-line mini silhouette from the Mapetla collection, bringing bold print and confident tailoring into one iconic piece.'
  },
  {
    folder: 'Ezokhetho Online Store Product NTOMBIZONKE BLUE & PINK POLKA STRIPE DRESS',
    id: 7011,
    title: 'Ntombizonke Blue & Pink Polka Stripe Dress',
    handle: 'ntombizonke-blue-and-pink-polka-stripe-dress',
    vendor: 'Ezokhetho',
    price: 11500,
    tags: ['Dress', 'Polka Stripe', 'Zodwa', 'Shop'],
    runway: false,
    madeToOrder: true,
    colour: 'Print Pink/Blue',
    colourHex: '#4A6B82',
    category: 'Evening Dress',
    fabricComposition: '100% Polyester',
    detailComposition: 'Centre Back Zip / Lined',
    washCare: 'Cold Hand Wash',
    sizes: ['34', '36', '38', '40', '42', '44'],
    availability: 'Made to Order',
    description: 'A flowing evening dress pairing pink and blue polka stripe motifs with full lining and a refined centre-back zip.'
  },
  {
    folder: 'Ezokhetho Online Store Product PROTEST BODYSUIT',
    id: 7012,
    title: 'Protest Bodysuit',
    handle: 'the-protest-bodysuit',
    vendor: 'Ezokhetho',
    price: 1950,
    tags: ['Bodysuit', 'Protest', 'Shop'],
    runway: false,
    madeToOrder: false,
    colour: 'Print/Black',
    colourHex: '#1A1A1A',
    category: 'Bodysuit',
    fabricComposition: '100% Polyester',
    detailComposition: 'Stretch / Press Studs Opening',
    washCare: 'Cold Hand Wash',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    availability: 'In Stock',
    description: 'A bold protest-inspired bodysuit, pairing a striking graphic print with a sculptural silhouette and press stud opening.'
  },
  {
    folder: 'Ezokhetho Online Store Product ZODWA OSTRICH FEATHER DENIM JEANS',
    id: 7013,
    title: 'Zodwa Ostrich Feather Denim Jeans',
    handle: 'zodwa-ostrich-feather-denim-jeans',
    vendor: 'Ezokhetho',
    price: 8750,
    tags: ['Jeans', 'Denim', 'Ostrich Feathers', 'Zodwa', 'Shop'],
    runway: false,
    madeToOrder: true,
    colour: 'Print',
    colourHex: '#444444',
    category: 'Jeans',
    fabricComposition: 'Cotton Blend',
    detailComposition: 'Centre Fly Front Zip / Ostrich Feathers',
    washCare: 'Dry Clean Only',
    sizes: ['32', '34', '36', '38', '40', '42', '44'],
    availability: 'Made to Order',
    description: 'Signature tailored denim jeans featuring artisanal ostrich feather panels along the sides and centre fly front zip.'
  },
  {
    folder: 'Ezokhetho_You People Tote Bag',
    id: 7014,
    title: 'Ezokhetho You People Message Tote Bag',
    handle: 'ezokhetho-you-people-message-tote-bag',
    vendor: 'Ezokhetho',
    price: 3500,
    tags: ['Tote Bag', 'Accessories', 'Shop'],
    runway: false,
    madeToOrder: false,
    colour: 'Print Black or White',
    colourHex: '#111111',
    category: 'Tote Bag',
    fabricComposition: 'Canvas / Leather',
    detailComposition: 'Leather Binding / Heat Press',
    washCare: 'Dry Clean Only',
    sizes: ['One Size'],
    availability: 'In Stock',
    description: 'A heavy-duty canvas and leather statement tote bag with premium leather binding and heat-pressed Ezokhetho message typography.'
  }
];

const DIRECTION_LABELS_MAP = {
  'ezokhetho-mapetla-inqina-coat': [
    'Front View',
    'Three-Quarter View',
    'Side Profile View',
    'Back View',
    'Movement View'
  ],
  'ezokhetho-mapetla-inqina-polka-dot-jorts': [
    'Front View',
    'Three-Quarter View',
    'Side Profile View',
    'Back View'
  ],
  'ezokhetho-ta-da-trench-coat': [
    'Front View',
    'Front Pose View',
    'Side Profile View',
    'Lining Detail View'
  ],
  'full-cream-knitted-bodysuit': [
    'Front View',
    'Front View (Straight)',
    'Three-Quarter View',
    'Side Profile View',
    'Back View'
  ],
  'ingonyama-printed-velvet-suit': [
    'Front View',
    'Three-Quarter View',
    'Side Profile View',
    'Back View',
    'Detail View'
  ],
  'inkhosazana-ostrich-denim-dress': [
    'Front View',
    'Three-Quarter View',
    'Side Profile View',
    'Back View',
    'Back Three-Quarter View',
    'Movement View'
  ],
  'inqina-mesh-bodysuit': [
    'Front View',
    'Three-Quarter View',
    'Side Profile View',
    'Back View'
  ],
  'inqina-unisex-shirt-blouse': [
    'Front View',
    'Three-Quarter View',
    'Back View',
    'Detail View',
    'Movement View'
  ],
  'mapetla-one-shoulder-asymmetric-bubble-dress': [
    'Front View',
    'Three-Quarter View',
    'Side Profile View',
    'Back View',
    'Seated Detail View'
  ],
  'mapetla-pixie': [
    'Front View',
    'Three-Quarter View',
    'Side Profile View',
    'Back View'
  ],
  'ntombizonke-blue-and-pink-polka-stripe-dress': [
    'Front View',
    'Three-Quarter View',
    'Side Profile View',
    'Back View',
    'Movement View'
  ],
  'the-protest-bodysuit': [
    'Front View',
    'Front View (Straight)',
    'Side Profile View',
    'Back View',
    'Styling View'
  ],
  'zodwa-ostrich-feather-denim-jeans': [
    'Front View',
    'Three-Quarter View',
    'Back View',
    'Detail View',
    'Movement View'
  ],
  'ezokhetho-you-people-message-tote-bag': [
    'Front View'
  ]
};

const DEFAULT_DIRECTIONS = [
  'Front View',
  'Three-Quarter View',
  'Side Profile View',
  'Back View',
  'Detail View',
  'Movement View'
];

let shopProducts = onlineProductsMeta.map(p => {
  const prodDir = path.join(onlineBaseDir, p.folder);
  let files = [];
  if (fs.existsSync(prodDir)) {
    files = fs.readdirSync(prodDir).filter(f => f.endsWith('.webp'));
    files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  }

  const labels = DIRECTION_LABELS_MAP[p.handle] || DEFAULT_DIRECTIONS;
  const images = files.map((f, i) => ({
    alt: `${p.title} - ${labels[i] || `View ${i + 1}`}`,
    width: 1200,
    height: 1600,
    src: `/images/products/Online Store/${p.folder}/${f}`
  }));

  const featured_image = images[0] || {
    alt: p.title,
    width: 1200,
    height: 1600,
    src: `/images/placeholder.webp`
  };

  const stockObj = {};
  p.sizes.forEach(s => {
    stockObj[s] = 5;
  });

  const options = [
    {
      name: 'Color',
      optionValues: [
        {
          name: p.colour,
          swatch: {
            color: p.colourHex || '#000000',
            image: null
          }
        }
      ]
    },
    {
      name: 'Size',
      optionValues: p.sizes.map(s => ({
        name: s,
        swatch: null
      }))
    }
  ];

  const selected_options = [
    { name: 'Color', value: p.colour },
    { name: 'Size', value: p.sizes[Math.floor(p.sizes.length / 2)] || p.sizes[0] }
  ];

  return {
    id: p.id,
    title: p.title,
    handle: p.handle,
    vendor: p.vendor,
    tags: p.tags,
    price: p.price,
    runway: false,
    madeToOrder: p.madeToOrder,
    stock: stockObj,
    images: images,
    featured_image: featured_image,
    options: options,
    selected_options: selected_options,
    collections: [
      {
        id: 'shop',
        title: 'Shop',
        handle: 'shop'
      }
    ],
    description: p.description,
    category: p.category,
    colour: p.colour,
    fabricComposition: p.fabricComposition,
    detailComposition: p.detailComposition,
    washCare: p.washCare,
    availability: p.availability
  };
});

// Combine runway pieces and shop products
const allProducts = [...runwayPieces, ...shopProducts];

// Write products.json
const productsJsonPath = path.join(__dirname, '../src/data/products.json');
fs.writeFileSync(productsJsonPath, JSON.stringify(allProducts, null, 2), 'utf8');
console.log(`Wrote ${allProducts.length} products (${runwayPieces.length} collection pieces + ${shopProducts.length} shop products) to ${productsJsonPath}`);

// Write optimized_mappings.json
const optimizedMappingsPath = path.join(__dirname, '../src/data/optimized_mappings.json');
const currentMappings = fs.existsSync(optimizedMappingsPath) ? JSON.parse(fs.readFileSync(optimizedMappingsPath, 'utf8')) : {};
currentMappings.collections = optimizedCollections;

fs.writeFileSync(optimizedMappingsPath, JSON.stringify(currentMappings, null, 2), 'utf8');
console.log(`Wrote 5 active collections to ${optimizedMappingsPath}`);
