
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Floral Themed Pendant',
    price: 199, // Price to be added later
    category: 'Necklaces',
    material: 'Gold',
    image: '/products/1.jpeg',
    images: ['/products/1.jpeg', '/products/1_1.jpeg'],
    isBestSeller: true,
    availableMetals: ['Gold', 'Silver', 'Rose Gold']
  },
  {
    id: '2',
    name: 'Contemporary Pendant',
    price: 189, // Price to be added later
    category: 'Necklaces',
    material: 'Gold',
    image: '/products/2.jpeg',
    images: ['/products/2.jpeg', '/products/2_2.jpeg'],
    isBestSeller: true,
    availableMetals: ['Gold', 'Silver']
  },
  {
    id: '3',
    name: 'Rose Themed Pendant',
    price: 235, // Price to be added later
    category: 'Necklaces',
    material: 'Gold',
    image: '/products/3.jpeg',
    images: ['/products/3.jpeg', '/products/3_3.jpeg'],
    isBestSeller: true,
    availableMetals: ['Gold', 'Silver', 'Rose Gold']
  },
  {
    id: '4',
    name: 'Serene Flow Ring',
    price: 129.00,
    category: 'Necklaces',
    material: 'Gold',
    image: '/products/4_129.jpeg',
    availableMetals: ['Gold', 'Silver']
  },
  {
    id: '5',
    name: 'Aurora Flow Ring',
    price: 129.00,
    category: 'Necklaces',
    material: 'Gold',
    image: '/products/5_129.jpeg',
    availableMetals: ['Gold', 'Rose Gold']
  },
  {
    id: '6',
    name: 'Floral Themed Stud',
    price: 179.00,
    category: 'Rings',
    material: 'Gold',
    image: '/products/6_179.jpeg',
    isBestSeller: true,
    availableSizes: ['5', '6', '7', '8', '9'],
    availableMetals: ['Gold', 'Silver', 'Rose Gold']
  },
  {
    id: '7',
    name: 'Heart Drop Earrings',
    price: 199.00,
    category: 'Rings',
    material: 'Gold',
    image: '/products/7_199.jpeg',
    availableSizes: ['5', '6', '7', '8', '9'],
    availableMetals: ['Gold', 'Rose Gold']
  },
  {
    id: '8',
    name: 'Gold Plated Bangle Style Cuff Bracelet',
    price: 235.00,
    category: 'Bracelets',
    material: 'Gold',
    image: '/products/8_Gold_plated_Bangle_Style_Cuff_Bracelet235.jpeg',
    isBestSeller: true,
    availableSizes: ['S', 'M', 'L'],
    availableMetals: ['Gold', 'Silver']
  },
  {
    id: '9',
    name: 'V-shaped Wraparound',
    price: 189, // Price to be added later
    category: 'Bracelets',
    material: 'Gold',
    image: '/products/9_Gold_plated_Anti-Tarnish_Stainless_Steel_V-shaped_Wraparound.jpeg',
    availableSizes: ['S', 'M', 'L'],
    availableMetals: ['Gold', 'Silver']
  },
  {
    id: '10',
    name: 'Starlit Crown Ring',
    price: 129.00,
    category: 'Rings',
    material: 'Gold',
    image: '/products/10_129.jpeg',
    availableMetals: ['Gold', 'Silver']
  },
  {
    id: '11',
    name: 'Gold Plated Knotted Cuff Bracelet',
    price: 249.00,
    category: 'Bracelets',
    material: 'Gold',
    image: '/products/11_Gold_plated_Anti-Tarnish_Stainless_Steel_Knotted_Cuff_Bracelet249.jpeg',
    isBestSeller: true,
    availableSizes: ['S', 'M', 'L'],
    availableMetals: ['Gold', 'Silver']
  }
];
