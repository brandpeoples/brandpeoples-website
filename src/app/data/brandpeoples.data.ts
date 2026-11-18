export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  count: string;
  desc: string;
  badge?: string;
  image: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  fabric: string;
  gsm: string;
  technique: string;
  colors: string[];
  isCustomizable: boolean;
  minOrder: number;
  leadTime: string;
}

export interface FlashDealItem {
  id: string;
  title: string;
  discount: string;
  endsInMinutes: number;
  claimedPercent: number;
  price: number;
  originalPrice: number;
  image: string;
}

export const BRAND_CATEGORIES: CategoryItem[] = [
  {
    id: 't-shirts',
    name: 'Custom T-Shirts',
    icon: '👕',
    count: '45+ Styles',
    desc: 'Oversized, drop-shoulder, crewneck & heavyweight 220 GSM bio-washed tees.',
    badge: 'Bestseller',
    image: 'images/bw/hero_unique_identity_brand.jpg'
  },
  {
    id: 'hoodies',
    name: 'Hoodies & Sweatshirts',
    icon: '🧥',
    count: '28+ Models',
    desc: '380 GSM French Terry & fleece hoodies with direct thermo-embossed branding.',
    badge: 'Winter Drop',
    image: 'images/bw/hero_unique_2_hoodie.jpg'
  },
  {
    id: 'activewear',
    name: 'Performance Sportswear',
    icon: '🏃',
    count: '32+ Items',
    desc: '4-way stretch poly-spandex with high-elastic 3D silicone heat transfers.',
    badge: '300% Stretch',
    image: 'images/bw/hero_unique_3_activewear.jpg'
  },
  {
    id: 'headwear',
    name: 'Caps & Beanies',
    icon: '🧢',
    count: '18+ Styles',
    desc: 'Structured 6-panel trucker caps with 3D rubber badges and metallic buckle.',
    badge: 'Popular',
    image: 'images/bw/hero_unique_4_caps.jpg'
  },
  {
    id: 'stickers',
    name: 'Custom Heat Stickers & DTF',
    icon: '🏷️',
    count: 'All Dimensions',
    desc: '2400 DPI photographic DTF transfers & high-density silicone labels on sheets.',
    badge: 'Hot Peel',
    image: 'images/bw/hero_unique_5_dtf.jpg'
  },
  {
    id: 'corporate',
    name: 'Corporate & Merch Kits',
    icon: '🎁',
    count: 'Custom Packs',
    desc: 'Premium branded tote bags, polos, diaries, and merchandise welcome kits.',
    badge: 'Bulk Discount',
    image: 'images/bw/hero_unique_6_corporate.jpg'
  }
];

export const BRAND_PRODUCTS: ProductItem[] = [
  {
    id: 'bp-01',
    name: 'Signature Heavyweight Oversized Tee',
    category: 't-shirts',
    categoryLabel: 'T-Shirts',
    price: 499,
    originalPrice: 899,
    discount: '44% OFF',
    rating: 4.9,
    reviews: 142,
    image: 'images/gallery/IMG_20230815_130310_01.jpg',
    badge: 'HOT',
    fabric: '100% Super-Combed Cotton',
    gsm: '240 GSM Heavyweight',
    technique: 'DTF / 3D Silicone Transfer',
    colors: ['#030303', '#ffffff', '#6bb502', '#0f172a', '#e2e8f0'],
    isCustomizable: true,
    minOrder: 1,
    leadTime: '24 - 48 Hours'
  },
  {
    id: 'bp-02',
    name: '3D High-Density Silicone Graphic Tee',
    category: 't-shirts',
    categoryLabel: 'T-Shirts',
    price: 549,
    originalPrice: 999,
    discount: '45% OFF',
    rating: 5.0,
    reviews: 89,
    image: 'images/ai/hero_silicone_apparel.jpg',
    badge: 'PREMIUM',
    fabric: 'Bio-Washed Compact Cotton',
    gsm: '220 GSM Bio-Wash',
    technique: '1.5mm High-Density Silicone',
    colors: ['#0f172a', '#1e293b', '#6bb502'],
    isCustomizable: true,
    minOrder: 1,
    leadTime: '24 - 48 Hours'
  },
  {
    id: 'bp-03',
    name: 'Club Fleece Drop-Shoulder Hoodie',
    category: 'hoodies',
    categoryLabel: 'Hoodies',
    price: 999,
    originalPrice: 1699,
    discount: '41% OFF',
    rating: 4.8,
    reviews: 210,
    image: 'images/gallery/IMG_20230815_130335_01.jpg',
    badge: 'TRENDING',
    fabric: 'French Terry Cotton Fleece',
    gsm: '380 GSM Heavy Fleece',
    technique: 'Thermo-Molded 3D Emboss',
    colors: ['#030303', '#334155', '#6bb502', '#f1f5f9'],
    isCustomizable: true,
    minOrder: 1,
    leadTime: '48 - 72 Hours'
  },
  {
    id: 'bp-04',
    name: 'Pro-Fit Active Dry-Poly Athletic Tee',
    category: 'activewear',
    categoryLabel: 'Activewear',
    price: 399,
    originalPrice: 699,
    discount: '43% OFF',
    rating: 4.9,
    reviews: 77,
    image: 'images/gallery/IMG_20230815_130424_01.jpg',
    badge: 'QUICK-DRY',
    fabric: 'Poly-Spandex 4-Way Stretch',
    gsm: '180 GSM Micro-Mesh',
    technique: 'Stretch Silicone Heat Seal',
    colors: ['#0284c7', '#030303', '#6bb502'],
    isCustomizable: true,
    minOrder: 1,
    leadTime: '24 Hours'
  },
  {
    id: 'bp-05',
    name: 'Custom Embroidered Structured Trucker Cap',
    category: 'headwear',
    categoryLabel: 'Caps',
    price: 299,
    originalPrice: 499,
    discount: '40% OFF',
    rating: 4.7,
    reviews: 53,
    image: 'images/gallery/IMG_20230815_130357_01.jpg',
    fabric: 'Cotton Twill + Mesh Back',
    gsm: 'Rigid Form Backing',
    technique: '3D Rubber Badge / Patch',
    colors: ['#030303', '#6bb502', '#cbd5e1'],
    isCustomizable: true,
    minOrder: 5,
    leadTime: '24 - 48 Hours'
  },
  {
    id: 'bp-06',
    name: 'Commercial DTF Gang Sheet (58cm x 100cm)',
    category: 'stickers',
    categoryLabel: 'DTF Printing',
    price: 249,
    originalPrice: 450,
    discount: '45% OFF',
    rating: 5.0,
    reviews: 318,
    image: 'images/ai/dtf_printing_facility.jpg',
    badge: 'PRINTER FAVORITE',
    fabric: 'Any Fabric Blend',
    gsm: 'Micro-Piezo Film',
    technique: '2400 DPI CMYK+White',
    colors: ['#ffffff'],
    isCustomizable: true,
    minOrder: 1,
    leadTime: 'Same Day Dispatch'
  },
  {
    id: 'bp-07',
    name: 'Vintage Wash Retro Graphic Hoodie',
    category: 'hoodies',
    categoryLabel: 'Hoodies',
    price: 1099,
    originalPrice: 1899,
    discount: '42% OFF',
    rating: 4.9,
    reviews: 64,
    image: 'images/gallery/IMG_20230815_130452_01.jpg',
    fabric: 'Mineral Wash Cotton Fleece',
    gsm: '360 GSM Vintage Wash',
    technique: 'Crackle Soft-Hand DTF',
    colors: ['#1e293b', '#030303'],
    isCustomizable: true,
    minOrder: 1,
    leadTime: '48 Hours'
  },
  {
    id: 'bp-08',
    name: 'Damask Woven Label & Size Tag Pack (500 Pcs)',
    category: 'stickers',
    categoryLabel: 'Labels',
    price: 850,
    originalPrice: 1400,
    discount: '39% OFF',
    rating: 4.9,
    reviews: 192,
    image: 'images/gallery/IMG_20230815_130514_01.jpg',
    badge: 'FACTORY PACK',
    fabric: '50-Denier Micro-Polyester',
    gsm: 'High Density Weave',
    technique: 'Ultrasonic Soft Selvage',
    colors: ['#ffffff', '#030303'],
    isCustomizable: true,
    minOrder: 250,
    leadTime: '3 - 5 Days'
  }
];

export const FLASH_DEALS: FlashDealItem[] = [
  {
    id: 'fd-01',
    title: 'Custom DTF Full-Chest T-Shirt Batch (Min 10 Pcs)',
    discount: '55% OFF',
    endsInMinutes: 184,
    claimedPercent: 82,
    price: 249,
    originalPrice: 550,
    image: 'images/gallery/IMG_20230815_130310_01.jpg'
  },
  {
    id: 'fd-02',
    title: '380 GSM Heavyweight Hoodie Custom Sample Pack',
    discount: '50% OFF',
    endsInMinutes: 120,
    claimedPercent: 68,
    price: 699,
    originalPrice: 1399,
    image: 'images/gallery/IMG_20230815_130335_01.jpg'
  },
  {
    id: 'fd-03',
    title: '3D Raised Silicone Activewear Strike-Off Swatches',
    discount: 'FREE SAMPLING',
    endsInMinutes: 245,
    claimedPercent: 94,
    price: 0,
    originalPrice: 400,
    image: 'images/ai/hero_silicone_apparel.jpg'
  }
];

export const RADAR_FEED = [
  {
    tag: 'LIVE PRODUCTION',
    status: 'ACTIVE',
    detail: '14 Silicone Printing Lines Running &bull; 85K Pcs Today',
    rate: '₹3.20 / Pc',
    color: 'emerald'
  },
  {
    tag: 'CUSTOMIZER STUDIO',
    status: 'ONLINE',
    detail: 'Over 1,240 Online Garment Previews Generated Today',
    rate: 'Instant 3D Preview',
    color: 'green'
  },
  {
    tag: 'RAPID DTF GANG SHEETS',
    status: 'SAME-DAY',
    detail: '2400 DPI CMYK+W &bull; 24h Factory Dispatch SLA',
    rate: '₹140 / Meter',
    color: 'cyan'
  },
  {
    tag: 'QUALITY ASSURANCE',
    status: 'CERTIFIED',
    detail: 'OEKO-TEX Standard 100 Class I &bull; 50+ Commercial Washes',
    rate: 'ISO 105-C06',
    color: 'amber'
  }
];


export interface MerchProduct {
  id: string;
  name: string;
  category: 'Apparel' | 'Drinkware' | 'Bags' | 'Writing' | 'Accessories';
  price: number;
  desc: string;
  shape: 'shirt' | 'bottle' | 'mug' | 'bag' | 'pen' | 'cap' | 'accessory';
  bg: string;
  spec: string;
  options: string;
}

export interface MerchBundle {
  code: string;
  name: string;
  target: string;
  items: string[];
}

export const MERCH_PRODUCTS: MerchProduct[] = [
{id:'tee',name:'Corporate Standard Round Neck T-Shirt',category:'Apparel',price:499,desc:'100% super-combed cotton · 180 GSM',shape:'shirt',bg:'#e7e4f5',spec:'180 GSM · Bio-washed cotton',options:'S–XXL'},
{id:'premiumtee',name:'Premium Retail T-Shirt',category:'Apparel',price:649,desc:'Combed cotton · 200–220 GSM',shape:'shirt',bg:'#e6e9ee',spec:'200–220 GSM · Silicone finish',options:'S–XXL'},
{id:'oversized',name:'Streetwear Oversized Tee',category:'Apparel',price:799,desc:'Heavy cotton · 240 GSM',shape:'shirt',bg:'#eee2d9',spec:'240 GSM · Drop shoulder',options:'S–XXL'},
{id:'polo',name:'Cotton Pique Polo',category:'Apparel',price:749,desc:'Combed cotton pique · 220 GSM',shape:'shirt',bg:'#e5e8ef',spec:'220 GSM · Chest embroidery',options:'S–XXL'},
{id:'active',name:'Quick-Dry Sports T-Shirt',category:'Apparel',price:599,desc:'Polyester dot-knit · 150–180 GSM',shape:'shirt',bg:'#dceee7',spec:'150–180 GSM · Moisture wicking',options:'S–XXL'},
{id:'bottle',name:'Branded Water Bottle',category:'Drinkware',price:449,desc:'Reusable · Corporate gifting',shape:'bottle',bg:'#f0f0ed',spec:'Custom logo print',options:'One size'},
{id:'mug',name:'Ceramic Coffee Mug',category:'Drinkware',price:299,desc:'Promotional ceramic mug',shape:'mug',bg:'#f4e9df',spec:'300–350ml options',options:'One size'},
{id:'tumbler',name:'Stainless Steel Vacuum Tumbler',category:'Drinkware',price:899,desc:'Executive gift · 500ml',shape:'bottle',bg:'#e1e5e9',spec:'500ml · Laser engraving',options:'One size'},
{id:'tote',name:'Organic Cotton Canvas Tote Bag',category:'Bags',price:349,desc:'Reusable · Recyclable',shape:'bag',bg:'#e5efd1',spec:'Canvas · Screen print',options:'One size'},
{id:'duffel',name:'Sports Gym Duffle Bag',category:'Bags',price:999,desc:'Duffle style · Team travel',shape:'bag',bg:'#e8e2e0',spec:'Custom branding',options:'One size'},
{id:'backpack',name:'Laptop Backpack',category:'Bags',price:1299,desc:'Water resistant · Executive kit',shape:'bag',bg:'#e3e4e7',spec:'Embroidery compatible',options:'One size'},
{id:'pen1',name:'Classic Click Ballpoint',category:'Writing',price:49,desc:'Push button · ABS matte plastic',shape:'pen',bg:'#f1f0ed',spec:'Single-colour screen print',options:'Black / Blue ink'},
{id:'pen2',name:'Soft-Touch Rubberized Gel',category:'Writing',price:89,desc:'0.5mm gel · Rubber-coated barrel',shape:'pen',bg:'#e6e4ee',spec:'Laser engraving',options:'Black / Blue ink'},
{id:'pen3',name:'Executive Metal Rollerball',category:'Writing',price:249,desc:'Liquid ink · Brass body, chrome trim',shape:'pen',bg:'#e7e8eb',spec:'Precision laser engraving',options:'Black ink'},
{id:'pen4',name:'Eco Kraft Paper Ballpoint',category:'Writing',price:39,desc:'Recycled paper tube · Push button',shape:'pen',bg:'#eee7d9',spec:'Eco-ink pad print',options:'Black / Blue ink'},
{id:'pen5',name:'Bamboo Eco Stylus Pen',category:'Writing',price:129,desc:'Twist + stylus · Natural bamboo',shape:'pen',bg:'#e8eedb',spec:'Laser etching / Pad print',options:'Black ink'},
{id:'pen6',name:'Slim Aluminum Stylus Pen',category:'Writing',price:159,desc:'Twist + stylus · Anodized aluminum',shape:'pen',bg:'#e1e7ed',spec:'Laser engraving',options:'Black ink'},
{id:'pen7',name:'Premium Fountain Pen',category:'Writing',price:399,desc:'Cartridge system · Stainless steel',shape:'pen',bg:'#e9e3df',spec:'Etched executive logo',options:'Black ink'},
{id:'pen8',name:'Triangular Ergonomic Gel',category:'Writing',price:69,desc:'Retractable gel · 0.7mm',shape:'pen',bg:'#e8eaf0',spec:'Barrel screen print',options:'Black / Blue ink'},
{id:'pen9',name:'Heavyweight Brass Pen',category:'Writing',price:329,desc:'Twist ballpoint · Lacquered brass',shape:'pen',bg:'#eee5d9',spec:'Diamond engraving',options:'Blue ink'},
{id:'pen10',name:'Multi-Color 4-in-1 Pen',category:'Writing',price:79,desc:'Side selector sliders · Polymer',shape:'pen',bg:'#e5eaf0',spec:'Full-colour UV print',options:'4 colours'},
{id:'pen11',name:'Antibacterial Grip Pen',category:'Writing',price:59,desc:'Retractable click · Antimicrobial ABS',shape:'pen',bg:'#e2eee9',spec:'Pad printing',options:'Black / Blue ink'},
{id:'pen12',name:'Transparent Frost Ballpoint',category:'Writing',price:49,desc:'Click mechanism · Frosted polycarbonate',shape:'pen',bg:'#e5eaf1',spec:'Rotary screen printing',options:'Black / Blue ink'},
{id:'pen13',name:'Carbon Fiber Executive Pen',category:'Writing',price:299,desc:'Cap-off rollerball · Carbon fibre weave',shape:'pen',bg:'#e9e9e9',spec:'Silver foil fill laser engraving',options:'Black ink'},
{id:'pen14',name:'Metallic Twist Pen',category:'Writing',price:179,desc:'Smooth twist · Brushed steel finish',shape:'pen',bg:'#e3e6e9',spec:'Laser marking',options:'Blue ink'},
{id:'pen15',name:'Wheat Straw Eco Pen',category:'Writing',price:59,desc:'50% wheat straw bio-composite',shape:'pen',bg:'#e5eedb',spec:'1-colour eco print',options:'Black / Blue ink'},
{id:'pen16',name:'Precision Fine-Liner',category:'Writing',price:69,desc:'0.4mm needle tip · Matte black',shape:'pen',bg:'#e5e5e5',spec:'Pad printing',options:'Black ink'},
{id:'pen17',name:'Highlighter Combination Pen',category:'Writing',price:79,desc:'Dual-end pen + marker',shape:'pen',bg:'#f1edce',spec:'2-colour barrel print',options:'Assorted'},
{id:'pen18',name:'Matte Black Minimalist Gel',category:'Writing',price:119,desc:'Retractable gel tip · Seamless matte',shape:'pen',bg:'#e6e5e5',spec:'Tone-on-tone print',options:'Black ink'},
{id:'pen19',name:'Heavy Rollerball Pen',category:'Writing',price:349,desc:'Heavyweight · Gunmetal plated alloy',shape:'pen',bg:'#e2e2e3',spec:'Laser engraving',options:'Black ink'},
{id:'pen20',name:'USB Drive Integrated Pen',category:'Writing',price:499,desc:'Twist pen + 32GB USB top',shape:'pen',bg:'#e6e8eb',spec:'Laser engraving on clip',options:'Black ink'},
{id:'cap',name:'Premium Logo Cap',category:'Accessories',price:299,desc:'Embroidery · Custom colour',shape:'cap',bg:'#f1f0ed',spec:'Embroidery',options:'Adjustable'}
];

export const MERCH_BUNDLES: MerchBundle[] = [
{code:'GIFT-V101',name:'Welcome Onboard Kit',target:'New employee welcome / onboarding',items:['1× Standard Cotton Round Neck T-Shirt (180 GSM)','1× Ceramic Coffee Mug (350ml)','1× Classic Click Ballpoint Pen (#1)']},
{code:'GIFT-V102',name:'Executive Desk Pack',target:'Client appreciation & manager gifts',items:['1× Executive Metal Rollerball Pen (#3)','1× Stainless Steel Vacuum Tumbler (500ml)','1× A5 Hardbound Leatherette Notebook']},
{code:'GIFT-V103',name:'Active Lifestyle Set',target:'Annual sports meet & wellness drives',items:['1× Quick-Dry Sports Tee (160 GSM Dot Knit)','1× Sports Gym Duffle Bag','1× Aluminum Water Bottle (750ml)','1× Soft-Touch Rubberized Gel Pen (#2)']},
{code:'GIFT-V104',name:'Eco-Friendly Green Pack',target:'Sustainability campaigns & green events',items:['1× Bamboo Eco Stylus Pen (#5)','1× Organic Cotton Canvas Tote Bag','1× Eco Wheat Straw Travel Mug (400ml)','1× Recycled Paper Notebook']},
{code:'GIFT-V105',name:'Corporate Uniform Bundle',target:'Sales teams & field executive kits',items:['2× Premium Cotton Pique Polos (220 GSM)','1× Laptop Backpack (Water Resistant)','1× Carbon Fiber Executive Pen (#13)']},
{code:'GIFT-V106',name:'Premium Leadership Box',target:'Leadership rewards & milestone achievers',items:['1× Heavyweight Oversized Fashion Tee (240 GSM)','1× Matte Black Insulated Flask Mug','1× Premium Fountain Pen (#7)','1× Executive Travel Duffel Bag']},
{code:'GIFT-V107',name:'Event & Expo Giveaway Pack',target:'Trade shows, conferences & mass promos',items:['1× Lightweight Event T-Shirt (140 GSM)','1× Eco Kraft Paper Ballpoint Pen (#4)','1× Promotional Ceramic Mug (300ml)','1× Non-Woven Drawstring Bag']}
];
