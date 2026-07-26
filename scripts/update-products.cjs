const fs = require('fs');
const path = require('path');

const products = [
  {
    id: 7001,
    title: 'PROTEST BODYSUIT',
    handle: 'protest-bodysuit',
    vendor: 'Ezokhetho',
    tags: ['Bodysuit', 'Protest', 'Mapetla'],
    price: 1950,
    images: [
      { alt: 'EZOKHETHO PROTEST BODYSUIT', width: 1200, height: 1600, src: '/images/online/The protest bodysuit-1.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO PROTEST BODYSUIT', width: 1200, height: 1600, src: '/images/online/The protest bodysuit-1.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Print/Black', swatch: { color: '#000000', image: null } }] },
      { name: 'Size', optionValues: [{ name: 'XS', swatch: null }, { name: 'S', swatch: null }, { name: 'M', swatch: null }, { name: 'L', swatch: null }, { name: 'XL', swatch: null }, { name: 'XXL', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Print/Black' }, { name: 'Size', value: 'M' }],
    collections: [{ title: 'Mapetla', id: 'mapetla', handle: 'mapetla' }],
    description: 'A bold protest-inspired bodysuit from the Mapetla collection, pairing a striking graphic with a sculptural silhouette.',
    category: 'Bodysuit',
    colour: 'Print/Black',
    fabricComposition: '100% Polyester',
    detailComposition: 'Stretch / Press Stud Opening',
    washCare: 'Cold Hand Wash',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    availability: 'In Stock',
    madeToOrder: false
  },
  {
    id: 7002,
    title: 'MAPETLA PIXIE',
    handle: 'mapetla-pixie',
    vendor: 'Ezokhetho',
    tags: ['A-Line Dress', 'Mapetla', 'Dress'],
    price: 5950,
    images: [
      { alt: 'EZOKHETHO MAPETLA PIXIE', width: 1200, height: 1600, src: '/images/online/Ezoketho Mapetla _26-21.jpg' },
      { alt: 'EZOKHETHO MAPETLA PIXIE', width: 1200, height: 1600, src: '/images/online/Ezoketho Mapetla _26-22.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO MAPETLA PIXIE', width: 1200, height: 1600, src: '/images/online/Ezoketho Mapetla _26-21.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Print', swatch: { color: '#8B5E3C', image: null } }] },
      { name: 'Size', optionValues: [{ name: '32', swatch: null }, { name: '34', swatch: null }, { name: '36', swatch: null }, { name: '38', swatch: null }, { name: '40', swatch: null }, { name: '42', swatch: null }, { name: '45', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Print' }, { name: 'Size', value: '36' }],
    collections: [{ title: 'Mapetla', id: 'mapetla', handle: 'mapetla' }],
    description: 'A sculptural A-line dress from the Mapetla collection, bringing bold print and confident tailoring into one silhouette.',
    category: 'A-Line Dress',
    colour: 'Print',
    fabricComposition: '100% Polyester',
    detailComposition: 'Zip Opening',
    washCare: 'Cold Hand Wash / Cool-Warm Iron',
    availableSizes: ['32', '34', '36', '38', '40', '42', '45'],
    availability: 'In Stock',
    madeToOrder: false
  },
  {
    id: 7003,
    title: 'MAPETLA ONE-SHOULDER ASYMMETRIC BUBBLE DRESS',
    handle: 'mapetla-one-shoulder-asymmetric-bubble-dress',
    vendor: 'Ezokhetho',
    tags: ['A-Line Dress', 'Mapetla', 'Dress'],
    price: 5950,
    images: [
      { alt: 'EZOKHETHO MAPETLA ONE-SHOULDER ASYMMETRIC BUBBLE DRESS', width: 1200, height: 1600, src: '/images/online/Ezoketho Mapetla _26-25.jpg' },
      { alt: 'EZOKHETHO MAPETLA ONE-SHOULDER ASYMMETRIC BUBBLE DRESS', width: 1200, height: 1600, src: '/images/online/Ezoketho Mapetla _26-29.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO MAPETLA ONE-SHOULDER ASYMMETRIC BUBBLE DRESS', width: 1200, height: 1600, src: '/images/online/Ezoketho Mapetla _26-25.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Green/Pink', swatch: { color: '#C75D6D', image: null } }] },
      { name: 'Size', optionValues: [{ name: '32', swatch: null }, { name: '34', swatch: null }, { name: '36', swatch: null }, { name: '38', swatch: null }, { name: '40', swatch: null }, { name: '42', swatch: null }, { name: '44', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Green/Pink' }, { name: 'Size', value: '36' }],
    collections: [{ title: 'Mapetla', id: 'mapetla', handle: 'mapetla' }],
    description: 'An asymmetric bubble dress from the Mapetla collection designed with volume, balance and a striking colour story.',
    category: 'A-Line Dress',
    colour: 'Green/Pink',
    fabricComposition: '100% Polyester',
    detailComposition: 'Zip Opening',
    washCare: 'Dry Clean Only',
    availableSizes: ['32', '34', '36', '38', '40', '42', '44'],
    availability: 'In Stock',
    madeToOrder: false
  },
  {
    id: 7004,
    title: 'EZOKHETHO TA-DA TRENCH COAT',
    handle: 'ezokhetho-ta-da-trench-coat',
    vendor: 'Ezokhetho',
    tags: ['Trench Coat', 'Mapetla', 'Outerwear'],
    price: 12950,
    images: [
      { alt: 'EZOKHETHO TA-DA TRENCH COAT', width: 1200, height: 1600, src: '/images/online/Ezoketho Mapetla _26-34.jpg' },
      { alt: 'EZOKHETHO TA-DA TRENCH COAT', width: 1200, height: 1600, src: '/images/online/Ezoketho Mapetla _26-5.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO TA-DA TRENCH COAT', width: 1200, height: 1600, src: '/images/online/Ezoketho Mapetla _26-34.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Green/Pink/Print', swatch: { color: '#C44C78', image: null } }] },
      { name: 'Size', optionValues: [{ name: '32', swatch: null }, { name: '34', swatch: null }, { name: '36', swatch: null }, { name: '38', swatch: null }, { name: '40', swatch: null }, { name: '42', swatch: null }, { name: '44', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Green/Pink/Print' }, { name: 'Size', value: '36' }],
    collections: [{ title: 'Mapetla', id: 'mapetla', handle: 'mapetla' }],
    description: 'A sharply tailored trench coat from Mapetla, combining structure, softness and a statement print finish.',
    category: 'Trench Coat',
    colour: 'Green/Pink/Print',
    fabricComposition: '100% Polyester',
    detailComposition: 'Belt',
    washCare: 'Dry Clean Only',
    availableSizes: ['32', '34', '36', '38', '40', '42', '44'],
    availability: 'In Stock',
    madeToOrder: false
  },
  {
    id: 7005,
    title: 'INQINA MESH BODYSUIT',
    handle: 'inqina-mesh-bodysuit',
    vendor: 'Ezokhetho',
    tags: ['Bodysuit', 'Inqina', 'Mapetla'],
    price: 2495,
    images: [
      { alt: 'EZOKHETHO MESH BODYSUIT', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
      { alt: 'EZOKHETHO MESH BODYSUIT', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-2.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO MESH BODYSUIT', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Red/Black', swatch: { color: '#8B0000', image: null } }] },
      { name: 'Size', optionValues: [{ name: 'XS', swatch: null }, { name: 'S', swatch: null }, { name: 'M', swatch: null }, { name: 'L', swatch: null }, { name: 'XL', swatch: null }, { name: 'XXL', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Red/Black' }, { name: 'Size', value: 'M' }],
    collections: [{ title: 'Mapetla', id: 'mapetla', handle: 'mapetla' }],
    description: 'A mesh bodysuit from the Mapetla collection, with a sleek finish and expressive edge.',
    category: 'Bodysuit',
    colour: 'Red/Black',
    fabricComposition: '100% Polyester',
    detailComposition: 'Stretch / Press Stud Buttons Opening',
    washCare: 'Cold Hand Wash',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    availability: 'In Stock',
    madeToOrder: false
  },
  {
    id: 7006,
    title: 'EZOKHETHO MAPETLA INQINA COAT',
    handle: 'ezokhetho-mapetla-inqina-coat',
    vendor: 'Ezokhetho',
    tags: ['Coat', 'Inqina', 'Mapetla'],
    price: 10950,
    images: [
      { alt: 'EZOKHETHO MAPETLA INQINA COAT', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
      { alt: 'EZOKHETHO MAPETLA INQINA COAT', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-2.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO MAPETLA INQINA COAT', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Print', swatch: { color: '#6B4F3E', image: null } }] },
      { name: 'Size', optionValues: [{ name: '32', swatch: null }, { name: '34', swatch: null }, { name: '36', swatch: null }, { name: '38', swatch: null }, { name: '40', swatch: null }, { name: '42', swatch: null }, { name: '44', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Print' }, { name: 'Size', value: '36' }],
    collections: [{ title: 'Mapetla', id: 'mapetla', handle: 'mapetla' }],
    description: 'A structured coat from the Mapetla story, shaped with strong lines and a graphic finish.',
    category: 'Coat',
    colour: 'Print',
    fabricComposition: '100% Polyester',
    detailComposition: 'Slits',
    washCare: 'Dry Clean Only',
    availableSizes: ['32', '34', '36', '38', '40', '42', '44'],
    availability: 'In Stock',
    madeToOrder: false
  },
  {
    id: 7007,
    title: 'EZOKHETHO MAPETLA INQINA POLKA DOT JORTS',
    handle: 'ezokhetho-mapetla-inqina-polka-dot-jorts',
    vendor: 'Ezokhetho',
    tags: ['Shorts / Jorts', 'Inqina', 'Mapetla'],
    price: 4950,
    images: [
      { alt: 'EZOKHETHO MAPETLA INQINA POLKA DOT JORTS', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
      { alt: 'EZOKHETHO MAPETLA INQINA POLKA DOT JORTS', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-2.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO MAPETLA INQINA POLKA DOT JORTS', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Polka Dots', swatch: { color: '#A8D5BA', image: null } }] },
      { name: 'Size', optionValues: [{ name: '32', swatch: null }, { name: '34', swatch: null }, { name: '36', swatch: null }, { name: '38', swatch: null }, { name: '40', swatch: null }, { name: '42', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Polka Dots' }, { name: 'Size', value: '36' }],
    collections: [{ title: 'Mapetla', id: 'mapetla', handle: 'mapetla' }],
    description: 'A graphic jort from the Mapetla collection, designed with a playful polka-dot finish.',
    category: 'Shorts / Jorts',
    colour: 'Polka Dots',
    fabricComposition: '100% Polyester',
    detailComposition: 'Bubble',
    washCare: 'Cold Hand Wash / Cool-Warm Iron',
    availableSizes: ['32', '34', '36', '38', '40', '42'],
    availability: 'In Stock',
    madeToOrder: false
  },
  {
    id: 7008,
    title: 'INKHOSAZANA OSTRICH DENIM DRESS',
    handle: 'inkhosazana-ostrich-denim-dress',
    vendor: 'Ezokhetho',
    tags: ['Dress', 'Ostrich', 'Zodwa'],
    price: 14950,
    images: [
      { alt: 'EZOKHETHO INKHOSAZANA OSTRICH DENIM DRESS', width: 1200, height: 1600, src: '/images/online/Inkosazana Denim Ostrich Dress-6.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO INKHOSAZANA OSTRICH DENIM DRESS', width: 1200, height: 1600, src: '/images/online/Inkosazana Denim Ostrich Dress-6.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Blue/White', swatch: { color: '#4A90E2', image: null } }] },
      { name: 'Size', optionValues: [{ name: '32', swatch: null }, { name: '34', swatch: null }, { name: '36', swatch: null }, { name: '38', swatch: null }, { name: '40', swatch: null }, { name: '42', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Blue/White' }, { name: 'Size', value: '36' }],
    collections: [{ title: 'Zodwa', id: 'zodwa', handle: 'zodwa' }],
    description: 'A denim dress with ostrich-feather detailing from the Zodwa collection, combining utility and glamour.',
    category: 'Dress',
    colour: 'Blue/White',
    fabricComposition: 'Cotton Blend',
    detailComposition: 'Centre Back Zip / Ostrich Feathers',
    washCare: 'Dry Clean Only',
    availableSizes: ['32', '34', '36', '38', '40', '42'],
    availability: 'Made to Order',
    madeToOrder: true
  },
  {
    id: 7009,
    title: 'NTOMBIZONKE BLUE & PINK POLKA STRIPE DRESS',
    handle: 'ntombizonke-blue-pink-polka-stripe-dress',
    vendor: 'Ezokhetho',
    tags: ['Dress', 'Ntombizonke', 'Polka Stripe'],
    price: 11500,
    images: [
      { alt: 'EZOKHETHO NTOMBIZONKE BLUE & PINK POLKA STRIPE DRESS', width: 1200, height: 1600, src: '/images/online/The Ntombizonke Blue & Pink Polka Stripe Dress-5.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO NTOMBIZONKE BLUE & PINK POLKA STRIPE DRESS', width: 1200, height: 1600, src: '/images/online/The Ntombizonke Blue & Pink Polka Stripe Dress-5.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Print Pink/Blue', swatch: { color: '#E889C4', image: null } }] },
      { name: 'Size', optionValues: [{ name: '34', swatch: null }, { name: '36', swatch: null }, { name: '38', swatch: null }, { name: '40', swatch: null }, { name: '42', swatch: null }, { name: '44', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Print Pink/Blue' }, { name: 'Size', value: '36' }],
    collections: [{ title: 'Zodwa', id: 'zodwa', handle: 'zodwa' }],
    description: 'A vivid polka-stripe dress from the Zodwa collection, balancing playful pattern and refined tailoring.',
    category: 'Dress',
    colour: 'Print Pink/Blue',
    fabricComposition: '100% Polyester',
    detailComposition: 'Centre Back Zip / Lined',
    washCare: 'Cold Hand Wash',
    availableSizes: ['34', '36', '38', '40', '42', '44'],
    availability: 'Made to Order',
    madeToOrder: true
  },
  {
    id: 7010,
    title: 'EZOKHETHO YOU PEOPLE TOTE BAG',
    handle: 'ezokhetho-you-people-tote-bag',
    vendor: 'Ezokhetho',
    tags: ['Accessories', 'Tote Bag', 'You People'],
    price: 0,
    images: [
      { alt: 'EZOKHETHO YOU PEOPLE MESSAGE TOTE BAG', width: 1200, height: 1600, src: '/images/online/Ezokhetho_You People Tote Bag.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO YOU PEOPLE MESSAGE TOTE BAG', width: 1200, height: 1600, src: '/images/online/Ezokhetho_You People Tote Bag.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Black', swatch: { color: '#000000', image: null } }, { name: 'White', swatch: { color: '#FFFFFF', image: null } }] },
      { name: 'Size', optionValues: [{ name: 'One Size', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Black' }, { name: 'Size', value: 'One Size' }],
    collections: [{ title: 'Mapetla', id: 'mapetla', handle: 'mapetla' }],
    description: 'A statement tote bag from the Mapetla story, featuring a bold message and leather-bound finish.',
    category: 'Accessories',
    colour: 'Black or White',
    fabricComposition: 'Canvas / Leather',
    detailComposition: 'Leather Binding / Heat Press',
    washCare: 'Dry Clean Only',
    availableSizes: ['One Size'],
    availability: 'In Stock',
    madeToOrder: false
  },
  {
    id: 7011,
    title: 'INGONYAMA PRINTED VELVET SUIT',
    handle: 'ingonyama-printed-velvet-suit',
    vendor: 'Ezokhetho',
    tags: ['Suit', 'Ingonyama', 'Velvet'],
    price: 20950,
    images: [
      { alt: 'EZOKHETHO INGONYAMA PRINTED VELVET SUIT', width: 1200, height: 1600, src: '/images/online/The menswear Ingonyama Printed Suit-5.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO INGONYAMA PRINTED VELVET SUIT', width: 1200, height: 1600, src: '/images/online/The menswear Ingonyama Printed Suit-5.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Print', swatch: { color: '#7D4F2C', image: null } }] },
      { name: 'Size', optionValues: [{ name: '34', swatch: null }, { name: '36', swatch: null }, { name: '38', swatch: null }, { name: '40', swatch: null }, { name: '42', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Print' }, { name: 'Size', value: '36' }],
    collections: [{ title: 'Mapetla', id: 'mapetla', handle: 'mapetla' }],
    description: 'A printed velvet suit from the Mapetla story, shaped with a bold and ceremonial feel.',
    category: 'Suit',
    colour: 'Print',
    fabricComposition: 'Cotton Blend',
    detailComposition: 'Centre Fly Front Zip / Lined Jacket',
    washCare: 'Dry Clean Only',
    availableSizes: ['34', '36', '38', '40', '42'],
    availability: 'Made to Order',
    madeToOrder: true
  },
  {
    id: 7012,
    title: 'FULL CREAM KNITTED BODYSUIT',
    handle: 'full-cream-knitted-bodysuit',
    vendor: 'Ezokhetho',
    tags: ['Bodysuit', 'Full Cream', 'Knitted'],
    price: 6295,
    images: [
      { alt: 'EZOKHETHO FULL CREAM KNITTED BODYSUIT', width: 1200, height: 1600, src: '/images/online/The Full Cream knitted Bodysuit-2.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO FULL CREAM KNITTED BODYSUIT', width: 1200, height: 1600, src: '/images/online/The Full Cream knitted Bodysuit-2.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Print', swatch: { color: '#C79B5B', image: null } }] },
      { name: 'Size', optionValues: [{ name: 'S', swatch: null }, { name: 'M', swatch: null }, { name: 'L', swatch: null }, { name: 'XL', swatch: null }, { name: 'XXL', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Print' }, { name: 'Size', value: 'M' }],
    collections: [{ title: 'Mapetla', id: 'mapetla', handle: 'mapetla' }],
    description: 'A full-cream knitted bodysuit from the Mapetla collection with a refined, sculptural feel.',
    category: 'Bodysuit',
    colour: 'Print',
    fabricComposition: 'Cotton Blend',
    detailComposition: 'Press Stud Closure',
    washCare: 'Cold Hand Wash',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    availability: 'Made to Order',
    madeToOrder: true
  },
  {
    id: 7013,
    title: 'ZODWA OSTRICH FEATHER DENIM JEANS',
    handle: 'zodwa-ostrich-feather-denim-jeans',
    vendor: 'Ezokhetho',
    tags: ['Jeans', 'Zodwa', 'Ostrich'],
    price: 8750,
    images: [
      { alt: 'EZOKHETHO ZODWA OSTRICH FEATHER DENIM JEANS', width: 1200, height: 1600, src: '/images/online/Inkosazana Denim Ostrich Dress-6.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO ZODWA OSTRICH FEATHER DENIM JEANS', width: 1200, height: 1600, src: '/images/online/Inkosazana Denim Ostrich Dress-6.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Print', swatch: { color: '#444444', image: null } }] },
      { name: 'Size', optionValues: [{ name: '32', swatch: null }, { name: '34', swatch: null }, { name: '36', swatch: null }, { name: '38', swatch: null }, { name: '40', swatch: null }, { name: '42', swatch: null }, { name: '44', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Print' }, { name: 'Size', value: '36' }],
    collections: [{ title: 'Zodwa', id: 'zodwa', handle: 'zodwa' }],
    description: 'A denim jean with ostrich-feather detail from the Zodwa collection, pairing edge with structure.',
    category: 'Jeans',
    colour: 'Print',
    fabricComposition: 'Cotton Blend',
    detailComposition: 'Centre Fly Front Zip / Ostrich Feathers',
    washCare: 'Dry Clean Only',
    availableSizes: ['32', '34', '36', '38', '40', '42', '44'],
    availability: 'Made to Order',
    madeToOrder: true
  },
  {
    id: 7014,
    title: 'INQINA UNISEX SHIRT BLOUSE',
    handle: 'inqina-unisex-shirt-blouse',
    vendor: 'Ezokhetho',
    tags: ['Shirt / Blouse', 'Inqina', 'Mapetla'],
    price: 4950,
    images: [
      { alt: 'EZOKHETHO INQINA UNISEX SHIRT BLOUSE', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
      { alt: 'EZOKHETHO INQINA UNISEX SHIRT BLOUSE', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-2.jpg' }
    ],
    featured_image: { alt: 'EZOKHETHO INQINA UNISEX SHIRT BLOUSE', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
    options: [
      { name: 'Colour', optionValues: [{ name: 'Print', swatch: { color: '#BD8E4F', image: null } }] },
      { name: 'Size', optionValues: [{ name: '32', swatch: null }, { name: '34', swatch: null }, { name: '36', swatch: null }, { name: '38', swatch: null }, { name: '40', swatch: null }, { name: '42', swatch: null }, { name: '44', swatch: null }] }
    ],
    selected_options: [{ name: 'Colour', value: 'Print' }, { name: 'Size', value: '36' }],
    collections: [{ title: 'Mapetla', id: 'mapetla', handle: 'mapetla' }],
    description: 'An unisex shirt blouse from the Mapetla collection with a crisp, graphic finish.',
    category: 'Shirt / Blouse',
    colour: 'Print',
    fabricComposition: '100% Polyester',
    detailComposition: 'Centre Front Press Studs',
    washCare: 'Cold Hand Wash',
    availableSizes: ['32', '34', '36', '38', '40', '42', '44'],
    availability: 'Made to Order',
    madeToOrder: true
  }
];

const outputPath = path.join(process.cwd(), 'src/data/products.json');
fs.writeFileSync(outputPath, JSON.stringify(products, null, 4) + '\n', 'utf8');
console.log(`Wrote ${products.length} products to ${outputPath}`);
