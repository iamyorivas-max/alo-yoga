import { ProductImage, Testimonial } from './types';

// =====================================================================
// IMPORTANT: REPLACE THESE URLS WITH YOUR UPLOADED IMAGES
// =====================================================================

export const IMAGES: Record<string, ProductImage> = {
  HERO_WHITE: {
    id: 1,
    // Warm, golden hour lighting with white outfit - matches the "City/Park" vibe
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1800&auto=format&fit=crop', 
    alt: 'LuxeMotion Jacket in Cloud White - Golden Hour Studio',
    role: 'hero'
  },
  HERO_BLACK: {
    id: 2,
    // Cool, snowy mountain background with black outfit - matches the "Alpine" vibe
    url: 'https://images.unsplash.com/photo-1544923246-77307dd65c74?q=80&w=1800&auto=format&fit=crop', 
    alt: 'LuxeMotion Jacket in Midnight Black - Alpine Winter',
    role: 'hero'
  },
  TOGGLE_WHITE: {
    id: 3,
    url: 'https://images.unsplash.com/photo-1581044777550-4cfa60707966?q=80&w=800&auto=format&fit=crop', // Clean white detail
    alt: 'Cloud White Colorway',
    role: 'color-selection'
  },
  TOGGLE_BLACK: {
    id: 4,
    url: 'https://images.unsplash.com/photo-1550614000-4b9519e02d48?q=80&w=800&auto=format&fit=crop', // Dark/Black detail
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