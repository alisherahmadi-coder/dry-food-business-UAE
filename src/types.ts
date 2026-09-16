export interface NutritionalProfile {
  calories: string;
  protein: string;
  healthyFats: string;
  dietaryFiber: string;
  vitaminsNote?: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'almonds' | 'pistachios' | 'walnuts' | 'dates-seeds' | 'gifts';
  origin: 'UAE' | 'Iran' | 'USA (California)' | 'Mediterranean';
  price: number;
  unit: string; // e.g. "500g", "250g"
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  badges: string[]; // e.g. ["Store in a cool place", "Raw & Unsalted"]
  tags: {
    raw?: boolean;
    premium?: boolean;
    organic?: boolean;
    originTag?: string;
  };
  nutrition: NutritionalProfile;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface DeliveryDetails {
  emirate: string;
  area: string;
  street: string;
  building: string;
  apartment: string;
  instructions: string;
}

export type PaymentMethod = 'card' | 'applepay' | 'cod';

export type ScreenView = 
  | 'home' 
  | 'shop' 
  | 'product-detail' 
  | 'checkout' 
  | 'gifts' 
  | 'provenance' 
  | 'sustainability';

export interface Order {
  id: string;
  createdAt: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  vat: number;
  total: number;
  deliveryDetails: DeliveryDetails;
  paymentMethod: PaymentMethod;
  status: 'Confirmed' | 'Dispatched' | 'Delivered';
  estimatedDelivery: string;
}
