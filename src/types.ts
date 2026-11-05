export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'moisturizer' | 'serum' | 'cleanser' | 'treatment' | 'set' | 'lip' | 'body';
  price: number;
  subscriptionPrice?: number;
  size: string;
  tag?: string;
  rating: number;
  reviewCount: number;
  description: string;
  benefits: string[];
  howToUse: string;
  ingredients: string;
  textureDescription: string;
  image: string;
  gallery: string[];
  swatchImage?: string;
  bgColor?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  isSubscription?: boolean;
}

export interface UserProfile {
  name: string;
  email: string;
  tier?: string;
  initials?: string;
}

export type ViewMode = 'home' | 'store' | 'pdp' | 'science';
