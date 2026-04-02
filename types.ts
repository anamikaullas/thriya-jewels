
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets';
  material: 'Gold' | 'Silver' | 'Rose Gold' | 'Gemstones';
  image: string;
  images?: string[]; // Additional images for product gallery
  isBestSeller?: boolean;
  availableSizes?: string[];
  availableMetals?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
