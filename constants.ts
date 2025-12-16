import { ProductImage, Testimonial } from './types';

// =====================================================================
// IMPORTANT: REPLACE THESE URLS WITH YOUR UPLOADED IMAGES
// =====================================================================

export const IMAGES: Record<string, ProductImage> = {
  HERO_WHITE: {
    id: 1,
    // Google Drive ID: 1nf40phbIjpUdnPc6tWneYlWAI093Srvg
    url: 'https://drive.google.com/uc?export=view&id=1nf40phbIjpUdnPc6tWneYlWAI093Srvg', 
    alt: 'LuxeMotion Jacket in Cloud White - Front View',
    role: 'hero'
  },
  HERO_BLACK: {
    id: 2,
    // Google Drive ID: 1vROl9EEY0WViewmLs_bfrCQWwfoPihd9
    url: 'https://drive.google.com/uc?export=view&id=1vROl9EEY0WViewmLs_bfrCQWwfoPihd9', 
    alt: 'LuxeMotion Jacket in Midnight Black - Front View',
    role: 'hero'
  },
  TOGGLE_WHITE: {
    id: 3,
    url: 'https://drive.google.com/uc?export=view&id=1nf40phbIjpUdnPc6tWneYlWAI093Srvg', // Reuse hero image for consistency
    alt: 'Cloud White Colorway',
    role: 'color-selection'
  },
  TOGGLE_BLACK: {
    id: 4,
    url: 'https://drive.google.com/uc?export=view&id=1vROl9EEY0WViewmLs_bfrCQWwfoPihd9', // Reuse hero image for consistency
    alt: 'Midnight Black Colorway',
    role: 'color-selection'
  },
  BENEFITS_LIFESTYLE: {
    id: 5,
    url: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200&auto=format&fit=crop', // Active movement
    alt: 'Designed for movement',
    role: 'benefits'
  },
  EDITORIAL_LARGE: {
    id: 6,
    url: 'https://images.unsplash.com/photo-1579308343729-0734208a0989?q=80&w=2000&auto=format&fit=crop', // Premium editorial
    alt: 'City to Studio Lifestyle',
    role: 'lifestyle'
  },
  FABRIC_TEXTURE: {
    id: 7,
    url: 'https://images.unsplash.com/photo-1584036561566-b938f493db46?q=80&w=800&auto=format&fit=crop', // White fleece texture
    alt: 'Ultra-soft fleece texture close-up',
    role: 'fabric'
  },
  FABRIC_DETAIL: {
    id: 8,
    url: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=800&auto=format&fit=crop', // Premium zipper/detail
    alt: 'Premium hardware details',
    role: 'fabric'
  },
  FIT_FULL_BODY_1: {
    id: 9,
    url: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop', // Full body fit
    alt: 'Full body fit - Standing',
    role: 'fit'
  },
  FIT_FULL_BODY_2: {
    id: 10,
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop', // Fitness pose
    alt: 'Full body fit - Movement',
    role: 'fit'
  }
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    text: "I literally live in this jacket. It's soft enough for lounging but structured enough for brunch.",
    rating: 5
  },
  {
    id: 2,
    name: "Jessica K.",
    text: "The fit is perfection. Slightly oversized but still flattering. Buying the black one next!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily R.",
    text: "Worth every penny. The fabric feels exactly like the high-end studio brands but cozier.",
    rating: 5
  }
];

export const BENEFITS_LIST = [
  "Ultra-soft premium sherpa fleece",
  "Lightweight warmth without bulk",
  "Flattering, slightly cropped silhouette",
  "Designed for movement & everyday wear"
];