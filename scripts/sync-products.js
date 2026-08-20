const fs = require('fs');
const path = require('path');

// Runway collections pieces (6001-6010) for editorial presentation
const runwayCollections = [
  {
    id: 6001,
    title: 'Entathakusa Body Con Dress',
    handle: 'entathakusa-runway-gown',
    vendor: 'Ezokhetho',
    tags: ['Dress', 'Gown', 'Entathakusa'],
    price: 14500,
    runway: true,
    images: [
      { alt: 'Entathakusa Runway Gown View 1', width: 1200, height: 1600, src: '/images/ezokhetho/entathakusa_1.jpg' },
      { alt: 'Entathakusa Runway Gown View 2', width: 1200, height: 1600, src: '/images/ezokhetho/entathakusa_2.jpg' },
      { alt: 'Entathakusa Runway Gown View 3', width: 1200, height: 1600, src: '/images/ezokhetho/entathakusa_3.jpg' },
      { alt: 'Entathakusa Runway Gown View 4', width: 1200, height: 1600, src: '/images/ezokhetho/entathakusa_4.jpg' },
      { alt: 'Entathakusa Runway Gown View 5', width: 1200, height: 1600, src: '/images/ezokhetho/entathakusa_5.jpg' }
    ],
    featured_image: { alt: 'Entathakusa Runway Gown View 1', width: 1200, height: 1600, src: '/images/ezokhetho/entathakusa_1.jpg' },
    options: [
      { name: 'Color', optionValues: [{ name: 'Sunrise Ochre', swatch: { color: '#FF8C00', image: null } }] },
      { name: 'Size', optionValues: [{ name: 'S', swatch: null }, { name: 'M', swatch: null }, { name: 'L', swatch: null }] }
    ],
    selected_options: [{ name: 'Color', value: 'Sunrise Ochre' }, { name: 'Size', value: 'M' }],
    collections: [{ title: "Entathakusa '26", id: 'entathakusa', handle: 'entathakusa' }],
    description: "Featured runway look from the Entathakusa '26 showcase. An elegant high-neck draping detail celebrating morning dawn."
  },
  {
    id: 6002,
    title: 'Zodwa Tailored Jacket',
    handle: 'zodwa-tailored-jacket',
    vendor: 'Ezokhetho',
    tags: ['Jacket', 'Tailoring', 'Zodwa'],
    price: 9800,
    runway: true,
    images: [
      { alt: 'Zodwa View 1', width: 1200, height: 1600, src: '/images/ezokhetho/zodwa_1.jpg' },
      { alt: 'Zodwa View 2', width: 1200, height: 1600, src: '/images/ezokhetho/zodwa_2.jpg' },
      { alt: 'Zodwa View 3', width: 1200, height: 1600, src: '/images/ezokhetho/zodwa_3.jpg' },
      { alt: 'Zodwa View 4', width: 1200, height: 1600, src: '/images/ezokhetho/zodwa_4.jpg' },
      { alt: 'Zodwa View 5', width: 1200, height: 1600, src: '/images/ezokhetho/zodwa_5.jpg' }
    ],
    featured_image: { alt: 'Zodwa View 1', width: 1200, height: 1600, src: '/images/ezokhetho/zodwa_1.jpg' },
    options: [
      { name: 'Color', optionValues: [{ name: 'Classic Black', swatch: { color: '#000000', image: null } }] },
      { name: 'Size', optionValues: [{ name: 'S', swatch: null }, { name: 'M', swatch: null }, { name: 'L', swatch: null }] }
    ],
    selected_options: [{ name: 'Color', value: 'Classic Black' }, { name: 'Size', value: 'M' }],
    collections: [{ title: "Zodwa '25", id: 'zodwa', handle: 'zodwa' }],
    description: "Signature tailoring jacket from Zodwa '25. Architectural structured shoulder lines combined with clean African heritage aesthetics."
  },
  {
    id: 6003,
    title: 'Ngithwale Wrap Coat',
    handle: 'ngithwale-wrap-coat',
    vendor: 'Ezokhetho',
    tags: ['Coat', 'Outerwear', 'Ngithwale'],
    price: 12500,
    runway: true,
    images: [
      { alt: 'Ngithwale View 1', width: 1200, height: 1600, src: '/images/ezokhetho/ngithwale_1.jpg' },
      { alt: 'Ngithwale View 2', width: 1200, height: 1600, src: '/images/ezokhetho/ngithwale_2.jpg' },
      { alt: 'Ngithwale View 3', width: 1200, height: 1600, src: '/images/ezokhetho/ngithwale_3.jpg' },
      { alt: 'Ngithwale View 4', width: 1200, height: 1600, src: '/images/ezokhetho/ngithwale_4.jpg' },
      { alt: 'Ngithwale View 5', width: 1200, height: 1600, src: '/images/ezokhetho/ngithwale_5.jpg' }
    ],
    featured_image: { alt: 'Ngithwale View 1', width: 1200, height: 1600, src: '/images/ezokhetho/ngithwale_1.jpg' },
    options: [
      { name: 'Color', optionValues: [{ name: 'Heritage Royal Blue', swatch: { color: '#0033A0', image: null } }] },
      { name: 'Size', optionValues: [{ name: 'S', swatch: null }, { name: 'M', swatch: null }, { name: 'L', swatch: null }] }
    ],
    selected_options: [{ name: 'Color', value: 'Heritage Royal Blue' }, { name: 'Size', value: 'M' }],
    collections: [{ title: "Ngithwale — Carry Me '24", id: 'ngithwale', handle: 'ngithwale' }],
    description: 'Statement wrap coat from Ngithwale collection. Hand-stitched heritage details with modern silhouette.'
  },
  {
    id: 6004,
    title: 'The Still No Dropped Waist Dress',
    handle: 'khumbulekhaya-silk-dress',
    vendor: 'Ezokhetho',
    tags: ['Dress', 'Silk', 'Khumbulekhaya'],
    price: 8900,
    runway: true,
    images: [
      { alt: 'Khumbulekhaya Silk Dress View 1', width: 1200, height: 1600, src: '/images/ezokhetho/khumbulekhaya_1.jpg' },
      { alt: 'Khumbulekhaya Silk Dress View 2', width: 1200, height: 1600, src: '/images/ezokhetho/khumbulekhaya_2.jpg' },
      { alt: 'Khumbulekhaya Silk Dress View 3', width: 1200, height: 1600, src: '/images/ezokhetho/khumbulekhaya_3.jpg' },
      { alt: 'Khumbulekhaya Silk Dress View 4', width: 1200, height: 1600, src: '/images/ezokhetho/khumbulekhaya_4.jpg' },
      { alt: 'Khumbulekhaya Silk Dress View 5', width: 1200, height: 1600, src: '/images/ezokhetho/khumbulekhaya_5.jpg' }
    ],
    featured_image: { alt: 'Khumbulekhaya Silk Dress View 1', width: 1200, height: 1600, src: '/images/ezokhetho/khumbulekhaya_1.jpg' },
    options: [
      { name: 'Color', optionValues: [{ name: 'Terracotta', swatch: { color: '#E2725B', image: null } }] },
      { name: 'Size', optionValues: [{ name: 'S', swatch: null }, { name: 'M', swatch: null }, { name: 'L', swatch: null }] }
    ],
    selected_options: [{ name: 'Color', value: 'Terracotta' }, { name: 'Size', value: 'M' }],
    collections: [{ title: "Khumbulekhaya — Remember Home '22", id: 'khumbulekhaya', handle: 'khumbulekhaya' }],
    description: 'Flowing silk dress inspired by the warmth of homecoming. Hand-dyed with natural pigments.'
  },
  {
    id: 6005,
    title: 'Structured Blazer',
    handle: 'izimbokodo-structured-blazer',
    vendor: 'Ezokhetho',
    tags: ['Blazer', 'Tailoring', 'Izimbokodo'],
    price: 11200,
    runway: true,
    images: [
      { alt: 'Izimbokodo Structured Blazer View 1', width: 1200, height: 1600, src: '/images/ezokhetho/izimbokodo_1.jpg' },
      { alt: 'Izimbokodo Structured Blazer View 2', width: 1200, height: 1600, src: '/images/ezokhetho/izimbokodo_2.jpg' },
      { alt: 'Izimbokodo Structured Blazer View 3', width: 1200, height: 1600, src: '/images/ezokhetho/izimbokodo_3.jpg' },
      { alt: 'Izimbokodo Structured Blazer View 4', width: 1200, height: 1600, src: '/images/ezokhetho/izimbokodo_4.jpg' },
      { alt: 'Izimbokodo Structured Blazer View 5', width: 1200, height: 1600, src: '/images/ezokhetho/izimbokodo_5.jpg' }
    ],
    featured_image: { alt: 'Izimbokodo Structured Blazer View 1', width: 1200, height: 1600, src: '/images/ezokhetho/izimbokodo_1.jpg' },
    options: [
      { name: 'Color', optionValues: [{ name: 'Obsidian', swatch: { color: '#1A1A1A', image: null } }] },
      { name: 'Size', optionValues: [{ name: 'S', swatch: null }, { name: 'M', swatch: null }, { name: 'L', swatch: null }] }
    ],
    selected_options: [{ name: 'Color', value: 'Obsidian' }, { name: 'Size', value: 'M' }],
    collections: [{ title: "Izimbokodo — Strength of Stone '22", id: 'izimbokodo', handle: 'izimbokodo' }],
    description: 'Power blazer with architectural shoulder construction. Celebrating the resilience of women.'
  },
  {
    id: 6006,
    title: 'The Pilani Shirt Dress',
    handle: 'sophiatown-jazz-pants',
    vendor: 'Ezokhetho',
    tags: ['Pants', 'Trousers', 'Sophiatown'],
    price: 6800,
    runway: true,
    images: [
      { alt: 'Sophiatown Jazz Pants View 1', width: 1200, height: 1600, src: '/images/ezokhetho/sophiatown_1.jpg' },
      { alt: 'Sophiatown Jazz Pants View 2', width: 1200, height: 1600, src: '/images/ezokhetho/sophiatown_2.jpg' },
      { alt: 'Sophiatown Jazz Pants View 3', width: 1200, height: 1600, src: '/images/ezokhetho/sophiatown_3.jpg' },
      { alt: 'Sophiatown Jazz Pants View 4', width: 1200, height: 1600, src: '/images/ezokhetho/sophiatown_4.jpg' },
      { alt: 'Sophiatown Jazz Pants View 5', width: 1200, height: 1600, src: '/images/ezokhetho/sophiatown_5.jpg' }
    ],
    featured_image: { alt: 'Sophiatown Jazz Pants View 1', width: 1200, height: 1600, src: '/images/ezokhetho/sophiatown_1.jpg' },
    options: [
      { name: 'Color', optionValues: [{ name: 'Midnight Navy', swatch: { color: '#1B1B3A', image: null } }] },
      { name: 'Size', optionValues: [{ name: '32', swatch: null }, { name: '34', swatch: null }, { name: '36', swatch: null }, { name: '38', swatch: null }] }
    ],
    selected_options: [{ name: 'Color', value: 'Midnight Navy' }, { name: 'Size', value: '34' }],
    collections: [{ title: "Sophiatown '21", id: 'sophiatown', handle: 'sophiatown' }],
    description: 'High-waisted tailored trousers with a relaxed leg. Inspired by the sharp style of 1950s Sophiatown.'
  },
  {
    id: 6007,
    title: 'The Inqina Shirt Dress',
    handle: 'inganekwane-printed-skirt',
    vendor: 'Ezokhetho',
    tags: ['Skirt', 'Print', 'Inganekwane'],
    price: 5600,
    runway: true,
    images: [
      { alt: 'Inganekwane Printed Skirt View 1', width: 1200, height: 1600, src: '/images/ezokhetho/inganekwane_1.jpg' },
      { alt: 'Inganekwane Printed Skirt View 2', width: 1200, height: 1600, src: '/images/ezokhetho/inganekwane_2.jpg' },
      { alt: 'Inganekwane Printed Skirt View 3', width: 1200, height: 1600, src: '/images/ezokhetho/inganekwane_3.jpg' },
      { alt: 'Inganekwane Printed Skirt View 4', width: 1200, height: 1600, src: '/images/ezokhetho/inganekwane_4.jpg' },
      { alt: 'Inganekwane Printed Skirt View 5', width: 1200, height: 1600, src: '/images/ezokhetho/inganekwane_5.jpg' }
    ],
    featured_image: { alt: 'Inganekwane Printed Skirt View 1', width: 1200, height: 1600, src: '/images/ezokhetho/inganekwane_1.jpg' },
    options: [
      { name: 'Color', optionValues: [{ name: 'Folklore Multi', swatch: { color: '#C9A962', image: null } }] },
      { name: 'Size', optionValues: [{ name: 'S', swatch: null }, { name: 'M', swatch: null }, { name: 'L', swatch: null }] }
    ],
    selected_options: [{ name: 'Color', value: 'Folklore Multi' }, { name: 'Size', value: 'M' }],
    collections: [{ title: "Inganekwane '23", id: 'inganekwane', handle: 'inganekwane' }],
    description: 'A-line midi skirt featuring hand-drawn folklore motifs. A wearable story from the Inganekwane collection.'
  },
  {
    id: 6008,
    title: 'Cape Coat',
    handle: 'umkhathizwe-cape-coat',
    vendor: 'Ezokhetho',
    tags: ['Coat', 'Cape', 'Outerwear', 'Umkhathizwe'],
    price: 13500,
    runway: true,
    images: [
      { alt: 'Umkhathizwe Cape Coat View 1', width: 1200, height: 1600, src: '/images/ezokhetho/umkhathizwe_1.jpg' },
      { alt: 'Umkhathizwe Cape Coat View 2', width: 1200, height: 1600, src: '/images/ezokhetho/umkhathizwe_2.jpg' },
      { alt: 'Umkhathizwe Cape Coat View 3', width: 1200, height: 1600, src: '/images/ezokhetho/umkhathizwe_3.jpg' },
      { alt: 'Umkhathizwe Cape Coat View 4', width: 1200, height: 1600, src: '/images/ezokhetho/umkhathizwe_4.jpg' },
      { alt: 'Umkhathizwe Cape Coat View 5', width: 1200, height: 1600, src: '/images/ezokhetho/umkhathizwe_5.jpg' }
    ],
    featured_image: { alt: 'Umkhathizwe Cape Coat View 1', width: 1200, height: 1600, src: '/images/ezokhetho/umkhathizwe_1.jpg' },
    options: [
      { name: 'Color', optionValues: [{ name: 'Horizon Grey', swatch: { color: '#8A8A8A', image: null } }] },
      { name: 'Size', optionValues: [{ name: 'S', swatch: null }, { name: 'M', swatch: null }, { name: 'L', swatch: null }] }
    ],
    selected_options: [{ name: 'Color', value: 'Horizon Grey' }, { name: 'Size', value: 'M' }],
    collections: [{ title: "Umkhathizwe — The Horizon '23", id: 'umkhathizwe', handle: 'umkhathizwe' }],
    description: 'Dramatic cape coat with sculptural volume. Debuted at Lagos Fashion Week, reaching beyond boundaries.'
  },
  {
    id: 6009,
    title: 'Kwa-suka-sukela Statement Dress',
    handle: 'kwa-suka-sukela-statement-dress',
    vendor: 'Ezokhetho',
    tags: ['Dress', 'Statement', 'Kwa-suka-sukela'],
    price: 9800,
    runway: true,
    images: [
      { alt: 'Kwa-suka-sukela View 1', width: 1200, height: 1600, src: '/images/ezokhetho/kwa-suka-sukela_1.jpg' },
      { alt: 'Kwa-suka-sukela View 2', width: 1200, height: 1600, src: '/images/ezokhetho/kwa-suka-sukela_2.jpg' },
      { alt: 'Kwa-suka-sukela View 3', width: 1200, height: 1600, src: '/images/ezokhetho/kwa-suka-sukela_3.jpg' },
      { alt: 'Kwa-suka-sukela View 4', width: 1200, height: 1600, src: '/images/ezokhetho/kwa-suka-sukela_4.jpg' },
      { alt: 'Kwa-suka-sukela View 5', width: 1200, height: 1600, src: '/images/ezokhetho/kwa-suka-sukela_5.jpg' }
    ],
    featured_image: { alt: 'Kwa-suka-sukela View 1', width: 1200, height: 1600, src: '/images/ezokhetho/kwa-suka-sukela_1.jpg' },
    options: [
      { name: 'Color', optionValues: [{ name: 'Sunset Orange', swatch: { color: '#FF4500', image: null } }] },
      { name: 'Size', optionValues: [{ name: 'S', swatch: null }, { name: 'M', swatch: null }, { name: 'L', swatch: null }] }
    ],
    selected_options: [{ name: 'Color', value: 'Sunset Orange' }, { name: 'Size', value: 'M' }],
    collections: [{ title: "Kwa-suka-sukela '24", id: 'kwa-suka-sukela', handle: 'kwa-suka-sukela' }],
    description: 'Bold statement dress with structural pattern work. A tribute to oral storytelling traditions.'
  },
  {
    id: 6010,
    title: "Mapetla Ext '27",
    handle: 'mapetla-26-editorial-set',
    vendor: 'Ezokhetho',
    tags: ['Editorial', 'Set', 'Mapetla'],
    price: 11500,
    runway: true,
    images: [
      { alt: "Mapetla '26 Editorial — Look 1", width: 3000, height: 4000, src: '/images/ezokhetho/mapetla/mapetla_1.jpg' },
      { alt: "Mapetla '26 Editorial — Look 2", width: 3000, height: 4000, src: '/images/ezokhetho/mapetla/mapetla_2.jpg' },
      { alt: "Mapetla '26 Editorial — Look 3", width: 3000, height: 4000, src: '/images/ezokhetho/mapetla/mapetla_3.jpg' },
      { alt: "Mapetla '26 Editorial — Look 4", width: 3000, height: 4000, src: '/images/ezokhetho/mapetla/mapetla_4.jpg' },
      { alt: "Mapetla '26 Editorial — Look 5", width: 3000, height: 4000, src: '/images/ezokhetho/mapetla/mapetla_5.jpg' }
    ],
    featured_image: { alt: "Mapetla '26 Editorial by Ezokhetho", width: 3000, height: 4000, src: '/images/ezokhetho/mapetla/mapetla_1.jpg' },
    options: [
      { name: 'Size', optionValues: [{ name: 'S', swatch: null }, { name: 'M', swatch: null }, { name: 'L', swatch: null }, { name: 'XL', swatch: null }] }
    ],
    selected_options: [{ name: 'Size', value: 'M' }],
    collections: [{ title: "Mapetla '26", id: 'mapetla', handle: 'mapetla' }],
    description: "The latest chapter from Ezokhetho. The Mapetla '26 editorial collection — a bold exploration of African identity through sculptural form, rich texture, and deliberate craftsmanship."
  }
];

// Master 14 Shop Products
const shopProducts = [
  {
    id: 7001,
    title: 'Protest Bodysuit',
    handle: 'the-protest-bodysuit',
    vendor: 'Ezokhetho',
    tags: ['Bodysuit', 'Protest', 'Mapetla', 'Shop'],
    price: 1950,
    cost: 975,
    runway: false,
    madeToOrder: false,
    stock: { XS: 5, S: 5, M: 5, L: 5, XL: 5, XXL: 5 },
    images: [
      { alt: 'Protest Bodysuit View 1', width: 1200, height: 1600, src: '/images/online/The protest bodysuit-1.jpg' }
    ],
    featured_image: { alt: 'Protest Bodysuit View 1', width: 1200, height: 1600, src: '/images/online/The protest bodysuit-1.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [{ name: 'Print/Black', swatch: { color: '#1A1A1A', image: null } }]
      },
      {
        name: 'Size',
        optionValues: [
          { name: 'XS', swatch: null },
          { name: 'S', swatch: null },
          { name: 'M', swatch: null },
          { name: 'L', swatch: null },
          { name: 'XL', swatch: null },
          { name: 'XXL', swatch: null }
        ]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Print/Black' },
      { name: 'Size', value: 'M' }
    ],
    collections: [{ title: "Mapetla '26", id: 'mapetla', handle: 'mapetla' }],
    description: 'A bold protest-inspired bodysuit, pairing a striking graphic with a sculptural silhouette.',
    category: 'Bodysuit',
    colour: 'Print/Black',
    fabricComposition: '100% Polyester',
    detailComposition: 'Stretch / Press Studs Opening',
    washCare: 'Cold Hand Wash',
    availability: 'In Stock'
  },
  {
    id: 7002,
    title: 'Mapetla Pixie',
    handle: 'mapetla-pixie',
    vendor: 'Ezokhetho',
    tags: ['A-Line Dress', 'Mapetla', 'Dress', 'Shop'],
    price: 5950,
    cost: 2975,
    runway: false,
    madeToOrder: false,
    stock: { '32': 5, '34': 5, '36': 5, '38': 5, '40': 5, '42': 5, '45': 5 },
    images: [
      { alt: 'Mapetla Pixie - Front View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_21.jpg' },
      { alt: 'Mapetla Pixie - Side Front View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_22.jpg' },
      { alt: 'Mapetla Pixie - Side View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_23.jpg' },
      { alt: 'Mapetla Pixie - Back View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_24.jpg' }
    ],
    featured_image: { alt: 'Mapetla Pixie - Front View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_21.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [{ name: 'Print', swatch: { color: '#8B5E3C', image: null } }]
      },
      {
        name: 'Size',
        optionValues: [
          { name: '32', swatch: null },
          { name: '34', swatch: null },
          { name: '36', swatch: null },
          { name: '38', swatch: null },
          { name: '40', swatch: null },
          { name: '42', swatch: null },
          { name: '45', swatch: null }
        ]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Print' },
      { name: 'Size', value: '36' }
    ],
    collections: [{ title: "Mapetla '26", id: 'mapetla', handle: 'mapetla' }],
    description: 'A sculptural A-line dress from the Mapetla collection, bringing bold print and confident tailoring into one silhouette.',
    category: 'A-Line Dress',
    colour: 'Print',
    fabricComposition: '100% Polyester',
    detailComposition: 'Zip Opening',
    washCare: 'Cold Hand Wash / Cool-Warm Iron',
    availability: 'In Stock'
  },
  {
    id: 7003,
    title: 'Mapetla One-Shoulder Asymmetric Bubble Dress',
    handle: 'mapetla-one-shoulder-asymmetric-bubble-dress',
    vendor: 'Ezokhetho',
    tags: ['A-Line Dress', 'Mapetla', 'Dress', 'Shop'],
    price: 5950,
    cost: 2975,
    runway: false,
    madeToOrder: false,
    stock: { '32': 5, '34': 5, '36': 5, '38': 5, '40': 5, '42': 5, '44': 5 },
    images: [
      { alt: 'Mapetla One-Shoulder Asymmetric Bubble Dress - Front View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_25.jpg' },
      { alt: 'Mapetla One-Shoulder Asymmetric Bubble Dress - Angle View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_26.jpg' },
      { alt: 'Mapetla One-Shoulder Asymmetric Bubble Dress - Side View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_27.jpg' },
      { alt: 'Mapetla One-Shoulder Asymmetric Bubble Dress - Back View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_28.jpg' },
      { alt: 'Mapetla One-Shoulder Asymmetric Bubble Dress - Detail View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_29.jpg' }
    ],
    featured_image: { alt: 'Mapetla One-Shoulder Asymmetric Bubble Dress - Front View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_25.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [{ name: 'Green/Pink', swatch: { color: '#C75D6D', image: null } }]
      },
      {
        name: 'Size',
        optionValues: [
          { name: '32', swatch: null },
          { name: '34', swatch: null },
          { name: '36', swatch: null },
          { name: '38', swatch: null },
          { name: '40', swatch: null },
          { name: '42', swatch: null },
          { name: '44', swatch: null }
        ]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Green/Pink' },
      { name: 'Size', value: '36' }
    ],
    collections: [{ title: "Mapetla '26", id: 'mapetla', handle: 'mapetla' }],
    description: 'An asymmetric bubble dress from the Mapetla collection designed with volume, balance and a striking colour story.',
    category: 'A-Line Dress',
    colour: 'Green/Pink',
    fabricComposition: '100% Polyester',
    detailComposition: 'Zip Opening',
    washCare: 'Dry Clean Only',
    availability: 'In Stock'
  },
  {
    id: 7004,
    title: 'Ezokhetho Ta-Da Trench Coat',
    handle: 'ezokhetho-ta-da-trench-coat',
    vendor: 'Ezokhetho',
    tags: ['Trench Coat', 'Mapetla', 'Outerwear', 'Shop'],
    price: 12950,
    cost: 6475,
    runway: false,
    madeToOrder: false,
    stock: { '32': 5, '34': 5, '36': 5, '38': 5, '40': 5, '42': 5, '44': 5 },
    images: [
      { alt: 'Ezokhetho Ta-Da Trench Coat - Front View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_34.jpg' },
      { alt: 'Ezokhetho Ta-Da Trench Coat - Side Front View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_35.jpg' },
      { alt: 'Ezokhetho Ta-Da Trench Coat - Side View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_36.jpg' },
      { alt: 'Ezokhetho Ta-Da Trench Coat - Back View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_37.jpg' },
      { alt: 'Ezokhetho Ta-Da Trench Coat - Editorial View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_5.jpg' }
    ],
    featured_image: { alt: 'Ezokhetho Ta-Da Trench Coat - Front View', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_34.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [{ name: 'Green/Pink/Print', swatch: { color: '#C44C78', image: null } }]
      },
      {
        name: 'Size',
        optionValues: [
          { name: '32', swatch: null },
          { name: '34', swatch: null },
          { name: '36', swatch: null },
          { name: '38', swatch: null },
          { name: '40', swatch: null },
          { name: '42', swatch: null },
          { name: '44', swatch: null }
        ]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Green/Pink/Print' },
      { name: 'Size', value: '36' }
    ],
    collections: [{ title: "Mapetla '26", id: 'mapetla', handle: 'mapetla' }],
    description: 'A sharply tailored trench coat from Mapetla, combining structure, softness and a statement print finish.',
    category: 'Trench Coat',
    colour: 'Green/Pink/Print',
    fabricComposition: '100% Polyester',
    detailComposition: 'Belt',
    washCare: 'Dry Clean Only',
    availability: 'In Stock'
  },
  {
    id: 7005,
    title: 'Inqina Mesh Bodysuit',
    handle: 'inqina-mesh-bodysuit',
    vendor: 'Ezokhetho',
    tags: ['Bodysuit', 'Inqina', 'Mapetla', 'Shop'],
    price: 2495,
    cost: 1245,
    runway: false,
    madeToOrder: false,
    stock: { XS: 1, S: 1, M: 1, L: 1, XL: 1, XXL: 1 },
    images: [
      { alt: 'Inqina Mesh Bodysuit - View 1', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
      { alt: 'Inqina Mesh Bodysuit - View 2', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-2.jpg' }
    ],
    featured_image: { alt: 'Inqina Mesh Bodysuit - View 1', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [{ name: 'Red/Black', swatch: { color: '#8B0000', image: null } }]
      },
      {
        name: 'Size',
        optionValues: [
          { name: 'XS', swatch: null },
          { name: 'S', swatch: null },
          { name: 'M', swatch: null },
          { name: 'L', swatch: null },
          { name: 'XL', swatch: null },
          { name: 'XXL', swatch: null }
        ]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Red/Black' },
      { name: 'Size', value: 'M' }
    ],
    collections: [{ title: "Mapetla '26", id: 'mapetla', handle: 'mapetla' }],
    description: 'A mesh bodysuit from the Mapetla collection, with a sleek finish and expressive edge. Quantity: 1 in each size.',
    category: 'Bodysuit',
    colour: 'Red/Black',
    fabricComposition: '100% Polyester',
    detailComposition: 'Stretch / Press Studs – Buttons Opening',
    washCare: 'Cold Hand Wash',
    availability: 'In Stock (1 per size)'
  },
  {
    id: 7006,
    title: 'Ezokhetho Mapetla Inqina Coat',
    handle: 'ezokhetho-mapetla-inqina-coat',
    vendor: 'Ezokhetho',
    tags: ['Coat', 'Inqina', 'Mapetla', 'Shop'],
    price: 10950,
    cost: 5475,
    runway: false,
    madeToOrder: false,
    stock: { '32': 5, '34': 5, '36': 5, '38': 5, '40': 5, '42': 5, '44': 5 },
    images: [
      { alt: 'Ezokhetho Mapetla Inqina Coat - View 1', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_1.jpg' },
      { alt: 'Ezokhetho Mapetla Inqina Coat - View 2', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_2.jpg' },
      { alt: 'Ezokhetho Mapetla Inqina Coat - View 3', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_3.jpg' },
      { alt: 'Ezokhetho Mapetla Inqina Coat - View 4', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_6.jpg' }
    ],
    featured_image: { alt: 'Ezokhetho Mapetla Inqina Coat - View 1', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_1.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [{ name: 'Print', swatch: { color: '#6B4F3E', image: null } }]
      },
      {
        name: 'Size',
        optionValues: [
          { name: '32', swatch: null },
          { name: '34', swatch: null },
          { name: '36', swatch: null },
          { name: '38', swatch: null },
          { name: '40', swatch: null },
          { name: '42', swatch: null },
          { name: '44', swatch: null }
        ]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Print' },
      { name: 'Size', value: '36' }
    ],
    collections: [{ title: "Mapetla '26", id: 'mapetla', handle: 'mapetla' }],
    description: 'A structured coat from the Mapetla story, shaped with strong lines and a graphic finish.',
    category: 'Coat',
    colour: 'Print',
    fabricComposition: '100% Polyester',
    detailComposition: 'Slits',
    washCare: 'Dry Clean Only',
    availability: 'In Stock'
  },
  {
    id: 7007,
    title: 'Ezokhetho Mapetla Inqina Polka Dot Jorts',
    handle: 'ezokhetho-mapetla-inqina-polka-dot-jorts',
    vendor: 'Ezokhetho',
    tags: ['Shorts / Jorts', 'Inqina', 'Mapetla', 'Shop'],
    price: 4950,
    cost: 2475,
    runway: false,
    madeToOrder: false,
    stock: { '32': 5, '34': 5, '36': 5, '38': 5, '40': 5, '42': 5 },
    images: [
      { alt: 'Ezokhetho Mapetla Inqina Polka Dot Jorts - View 1', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_9.jpg' },
      { alt: 'Ezokhetho Mapetla Inqina Polka Dot Jorts - View 2', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_10.jpg' },
      { alt: 'Ezokhetho Mapetla Inqina Polka Dot Jorts - View 3', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_11.jpg' },
      { alt: 'Ezokhetho Mapetla Inqina Polka Dot Jorts - View 4', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_12.jpg' }
    ],
    featured_image: { alt: 'Ezokhetho Mapetla Inqina Polka Dot Jorts - View 1', width: 1200, height: 1600, src: '/images/ezokhetho/mapetla/mapetla_9.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [{ name: 'Polka Dots', swatch: { color: '#A8D5BA', image: null } }]
      },
      {
        name: 'Size',
        optionValues: [
          { name: '32', swatch: null },
          { name: '34', swatch: null },
          { name: '36', swatch: null },
          { name: '38', swatch: null },
          { name: '40', swatch: null },
          { name: '42', swatch: null }
        ]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Polka Dots' },
      { name: 'Size', value: '36' }
    ],
    collections: [{ title: "Mapetla '26", id: 'mapetla', handle: 'mapetla' }],
    description: 'A graphic jort from the Mapetla collection, designed with a playful polka-dot bubble finish.',
    category: 'Shorts / Jorts',
    colour: 'Polka dots',
    fabricComposition: '100% Polyester',
    detailComposition: 'Bubble',
    washCare: 'Cold Hand Wash / Cool-Warm Iron',
    availability: 'In Stock'
  },
  {
    id: 7008,
    title: 'Inkhosazana Ostrich Denim Dress',
    handle: 'inkhosazana-ostrich-denim-dress',
    vendor: 'Ezokhetho',
    tags: ['Dress', 'Denim', 'Ostrich Feather', 'Zodwa', 'Shop'],
    price: 14950,
    cost: 7475,
    runway: false,
    madeToOrder: true,
    stock: { '32': 5, '34': 5, '36': 5, '38': 5, '40': 5, '42': 5 },
    images: [
      { alt: 'Inkhosazana Ostrich Denim Dress - Front View', width: 1200, height: 1600, src: '/images/online/Inkosazana Denim Ostrich Dress-6.jpg' }
    ],
    featured_image: { alt: 'Inkhosazana Ostrich Denim Dress - Front View', width: 1200, height: 1600, src: '/images/online/Inkosazana Denim Ostrich Dress-6.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [{ name: 'Blue/White', swatch: { color: '#4A90E2', image: null } }]
      },
      {
        name: 'Size',
        optionValues: [
          { name: '32', swatch: null },
          { name: '34', swatch: null },
          { name: '36', swatch: null },
          { name: '38', swatch: null },
          { name: '40', swatch: null },
          { name: '42', swatch: null }
        ]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Blue/White' },
      { name: 'Size', value: '36' }
    ],
    collections: [{ title: "Zodwa '25", id: 'zodwa', handle: 'zodwa' }],
    description: 'A denim dress with ostrich-feather detailing from the Zodwa collection, combining utility and glamour.',
    category: 'Dress',
    colour: 'Blue/White',
    fabricComposition: 'Cotton blend',
    detailComposition: 'Centre Back Zip / Ostrich Feathers',
    washCare: 'Dry Clean Only',
    availability: 'Made to Order'
  },
  {
    id: 7009,
    title: 'Ntombizonke Blue & Pink Polka Stripe Dress',
    handle: 'ntombizonke-blue-pink-polka-stripe-dress',
    vendor: 'Ezokhetho',
    tags: ['Dress', 'Ntombizonke', 'Polka Stripe', 'Shop'],
    price: 11500,
    cost: 5750,
    runway: false,
    madeToOrder: true,
    stock: { '34': 5, '36': 5, '38': 5, '40': 5, '42': 5, '44': 5 },
    images: [
      { alt: 'Ntombizonke Blue & Pink Polka Stripe Dress - Front View', width: 1200, height: 1600, src: '/images/online/The Ntombizonke Blue & Pink Polka Stripe Dress-5.jpg' }
    ],
    featured_image: { alt: 'Ntombizonke Blue & Pink Polka Stripe Dress - Front View', width: 1200, height: 1600, src: '/images/online/The Ntombizonke Blue & Pink Polka Stripe Dress-5.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [{ name: 'Print Pink/Blue', swatch: { color: '#E889C4', image: null } }]
      },
      {
        name: 'Size',
        optionValues: [
          { name: '34', swatch: null },
          { name: '36', swatch: null },
          { name: '38', swatch: null },
          { name: '40', swatch: null },
          { name: '42', swatch: null },
          { name: '44', swatch: null }
        ]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Print Pink/Blue' },
      { name: 'Size', value: '36' }
    ],
    collections: [{ title: "Zodwa '25", id: 'zodwa', handle: 'zodwa' }],
    description: 'A vivid polka-stripe dress from the Zodwa collection, balancing playful pattern and refined tailoring.',
    category: 'Dress',
    colour: 'Print Pink/Blue',
    fabricComposition: '100% Polyester',
    detailComposition: 'Centre Back Zip / Lined',
    washCare: 'Cold Hand Wash',
    availability: 'Made to Order'
  },
  {
    id: 7010,
    title: 'Ezokhetho You People Message Tote Bag',
    handle: 'ezokhetho-you-people-message-tote-bag',
    vendor: 'Ezokhetho',
    tags: ['Tote Bag', 'Bag', 'Accessories', 'Shop'],
    price: 3500,
    cost: 1750,
    runway: false,
    madeToOrder: false,
    stock: { 'One Size': 10 },
    images: [
      { alt: 'Ezokhetho You People Message Tote Bag', width: 1200, height: 1600, src: '/images/online/Ezokhetho_You People Tote Bag.jpg' }
    ],
    featured_image: { alt: 'Ezokhetho You People Message Tote Bag', width: 1200, height: 1600, src: '/images/online/Ezokhetho_You People Tote Bag.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [
          { name: 'Black', swatch: { color: '#000000', image: null } },
          { name: 'White', swatch: { color: '#FFFFFF', image: null } }
        ]
      },
      {
        name: 'Size',
        optionValues: [{ name: 'One Size', swatch: null }]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Black' },
      { name: 'Size', value: 'One Size' }
    ],
    collections: [{ title: "Mapetla '26", id: 'mapetla', handle: 'mapetla' }],
    description: 'A statement tote bag from the Mapetla story, featuring a bold message and leather-bound finish.',
    category: 'Accessories',
    colour: 'Print – Black or White',
    fabricComposition: 'Canvas / Leather',
    detailComposition: 'Leather Binding / Heat Press',
    washCare: 'Dry Clean Only',
    availability: 'In Stock'
  },
  {
    id: 7011,
    title: 'Ingonyama Printed Velvet Suit',
    handle: 'ingonyama-printed-velvet-suit',
    vendor: 'Ezokhetho',
    tags: ['Suit', 'Menswear', 'Ingonyama', 'Velvet', 'Shop'],
    price: 20950,
    cost: 10475,
    runway: false,
    madeToOrder: true,
    stock: { '34': 5, '36': 5, '38': 5, '40': 5, '42': 5 },
    images: [
      { alt: 'Ingonyama Printed Velvet Suit - View 1', width: 1200, height: 1600, src: '/images/online/The menswear Ingonyama Printed Suit-5.jpg' }
    ],
    featured_image: { alt: 'Ingonyama Printed Velvet Suit - View 1', width: 1200, height: 1600, src: '/images/online/The menswear Ingonyama Printed Suit-5.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [{ name: 'Print', swatch: { color: '#7D4F2C', image: null } }]
      },
      {
        name: 'Size',
        optionValues: [
          { name: '34', swatch: null },
          { name: '36', swatch: null },
          { name: '38', swatch: null },
          { name: '40', swatch: null },
          { name: '42', swatch: null }
        ]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Print' },
      { name: 'Size', value: '36' }
    ],
    collections: [{ title: "Mapetla '26", id: 'mapetla', handle: 'mapetla' }],
    description: 'A printed velvet suit from the Mapetla story, shaped with a bold and ceremonial feel.',
    category: 'Suit',
    colour: 'Print',
    fabricComposition: 'Cotton blend',
    detailComposition: 'Centre Fly Front Zip / Lined Jacket',
    washCare: 'Dry Clean',
    availability: 'Made to Order'
  },
  {
    id: 7012,
    title: 'Full Cream Knitted Bodysuit',
    handle: 'full-cream-knitted-bodysuit',
    vendor: 'Ezokhetho',
    tags: ['Bodysuit', 'Full Cream', 'Knitted', 'Shop'],
    price: 6295,
    cost: 3147,
    runway: false,
    madeToOrder: true,
    stock: { S: 5, M: 5, L: 5, XL: 5, XXL: 5 },
    images: [
      { alt: 'Full Cream Knitted Bodysuit - View 1', width: 1200, height: 1600, src: '/images/online/The Full Cream knitted Bodysuit-2.jpg' }
    ],
    featured_image: { alt: 'Full Cream Knitted Bodysuit - View 1', width: 1200, height: 1600, src: '/images/online/The Full Cream knitted Bodysuit-2.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [{ name: 'Print', swatch: { color: '#C79B5B', image: null } }]
      },
      {
        name: 'Size',
        optionValues: [
          { name: 'S', swatch: null },
          { name: 'M', swatch: null },
          { name: 'L', swatch: null },
          { name: 'XL', swatch: null },
          { name: 'XXL', swatch: null }
        ]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Print' },
      { name: 'Size', value: 'M' }
    ],
    collections: [{ title: "Mapetla '26", id: 'mapetla', handle: 'mapetla' }],
    description: 'A full-cream knitted bodysuit with a refined, sculptural feel. Premium cotton blend with press stud closure.',
    category: 'Bodysuit',
    colour: 'Print',
    fabricComposition: 'Cotton blend',
    detailComposition: 'Press Stud Closure',
    washCare: 'Cold Hand Wash',
    availability: 'Made to Order'
  },
  {
    id: 7013,
    title: 'Zodwa Ostrich Feather Denim Jeans',
    handle: 'zodwa-ostrich-feather-denim-jeans',
    vendor: 'Ezokhetho',
    tags: ['Jeans', 'Bottoms', 'Denim', 'Zodwa', 'Shop'],
    price: 8750,
    cost: 4375,
    runway: false,
    madeToOrder: true,
    stock: { '32': 5, '34': 5, '36': 5, '38': 5, '40': 5, '42': 5, '44': 5 },
    images: [
      { alt: 'Zodwa Ostrich Feather Denim Jeans - Front View', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
      { alt: 'Zodwa Ostrich Feather Denim Jeans - Angle View', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-2.jpg' }
    ],
    featured_image: { alt: 'Zodwa Ostrich Feather Denim Jeans - Front View', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [{ name: 'Print', swatch: { color: '#444444', image: null } }]
      },
      {
        name: 'Size',
        optionValues: [
          { name: '32', swatch: null },
          { name: '34', swatch: null },
          { name: '36', swatch: null },
          { name: '38', swatch: null },
          { name: '40', swatch: null },
          { name: '42', swatch: null },
          { name: '44', swatch: null }
        ]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Print' },
      { name: 'Size', value: '36' }
    ],
    collections: [{ title: "Zodwa '25", id: 'zodwa', handle: 'zodwa' }],
    description: 'A denim jean with ostrich-feather detail from the Zodwa collection, pairing edge with structure.',
    category: 'Jeans',
    colour: 'Print',
    fabricComposition: 'Cotton blend',
    detailComposition: 'Centre Fly Front Zip / Ostrich Feathers',
    washCare: 'Dry Clean Only',
    availability: 'Made to Order'
  },
  {
    id: 7014,
    title: 'Inqina Unisex Shirt Blouse',
    handle: 'inqina-unisex-shirt-blouse',
    vendor: 'Ezokhetho',
    tags: ['Shirt', 'Blouse', 'Unisex', 'Inqina', 'Shop'],
    price: 4950,
    cost: 2475,
    runway: false,
    madeToOrder: true,
    stock: { '32': 5, '34': 5, '36': 5, '38': 5, '40': 5, '42': 5, '44': 5 },
    images: [
      { alt: 'Inqina Unisex Shirt Blouse - Front View', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
      { alt: 'Inqina Unisex Shirt Blouse - Detail View', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-2.jpg' }
    ],
    featured_image: { alt: 'Inqina Unisex Shirt Blouse - Front View', width: 1200, height: 1600, src: '/images/online/The Inqina off-white Shirt and Ostrich Feather Paneled Denim Pants-1.jpg' },
    options: [
      {
        name: 'Color',
        optionValues: [{ name: 'Print', swatch: { color: '#BD8E4F', image: null } }]
      },
      {
        name: 'Size',
        optionValues: [
          { name: '32', swatch: null },
          { name: '34', swatch: null },
          { name: '36', swatch: null },
          { name: '38', swatch: null },
          { name: '40', swatch: null },
          { name: '42', swatch: null },
          { name: '44', swatch: null }
        ]
      }
    ],
    selected_options: [
      { name: 'Color', value: 'Print' },
      { name: 'Size', value: '36' }
    ],
    collections: [{ title: "Mapetla '26", id: 'mapetla', handle: 'mapetla' }],
    description: 'An unisex shirt blouse from the Mapetla collection with a crisp, graphic finish.',
    category: 'Shirt / Blouse',
    colour: 'Print',
    fabricComposition: '100% Polyester',
    detailComposition: 'Centre Front Press Studs',
    washCare: 'Cold Hand Wash',
    availability: 'Made to Order'
  }
];

const allProducts = [...runwayCollections, ...shopProducts];
const targetFile = path.join(__dirname, '../src/data/products.json');
fs.writeFileSync(targetFile, JSON.stringify(allProducts, null, 4), 'utf8');
console.log(`Successfully written ${allProducts.length} products to ${targetFile}`);
