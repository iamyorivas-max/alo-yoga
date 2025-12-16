export type ColorVariant = 'white' | 'black';

export interface ProductImage {
  id: number;
  url: string;
  alt: string;
  role: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}